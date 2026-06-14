"use client";

import { cn } from "@homepage/ui/lib/utils";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Types & Interfaces
// ─────────────────────────────────────────────────────────────────────────────

export interface ContributionDay {
	date: string; // ISO date string "YYYY-MM-DD"
	count: number;
}

export type CellShape = "square" | "circle" | "rounded";
export type WeekStart = "sun" | "mon";
export type ColorScheme =
	| "green"
	| "blue"
	| "purple"
	| "orange"
	| "pink"
	| "dracula"
	| "halloween";

export interface GitHubCalendarProps {
	/** GitHub username to fetch and display contributions for — required */
	username: string;
	/** Preset color theme name */
	colorScheme?: ColorScheme;
	/** Custom 5-stop color array: [empty, level1, level2, level3, level4] */
	colors?: [string, string, string, string, string];
	/** Cell width/height in px */
	cellSize?: number;
	/** Gap between cells in px */
	cellGap?: number;
	/** Shape of each cell */
	cellShape?: CellShape;
	/** Show hover tooltip with date + count */
	showTooltip?: boolean;
	/** Show month labels above the grid */
	showMonthLabels?: boolean;
	/** Show day-of-week labels on the left */
	showDayLabels?: boolean;
	/** First day of week */
	weekStart?: WeekStart;
	/** Staggered scale-in animation via Motion */
	animate?: boolean;
	/** Start date (inclusive) to show contributions from (e.g. "2025-01-01") */
	startDate?: string;
	/** End date (inclusive). "auto" uses current date, or provide a specific date (e.g. "2025-12-31"). Defaults to "auto" */
	endDate?: string;
	/** Show year toggle buttons derived from data */
	showYearButtons?: boolean;
	/** Callback fired when data is successfully loaded client-side */
	onDataLoaded?: (data: ContributionDay[]) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants & Helpers
// ─────────────────────────────────────────────────────────────────────────────

const MONTH_LABELS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

// GitHub-style: only Mon / Wed / Fri shown
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

export const COLOR_THEMES: Record<
	ColorScheme,
	[string, string, string, string, string]
> = {
	green: ["#27272a", "#166534", "#16a34a", "#22c55e", "#4ade80"],
	blue: ["#27272a", "#1e3a5f", "#1d4ed8", "#3b82f6", "#93c5fd"],
	purple: ["#27272a", "#4a1d96", "#7c3aed", "#a855f7", "#d8b4fe"],
	orange: ["#27272a", "#7c2d12", "#c2410c", "#f97316", "#fdba74"],
	pink: ["#27272a", "#831843", "#be185d", "#ec4899", "#f9a8d4"],
	dracula: ["#282a36", "#44475a", "#6272a4", "#bd93f9", "#50fa7b"],
	halloween: ["#21262d", "#631c03", "#bd5604", "#fa7a18", "#f9f871"],
};

export const COLOR_THEMES_LIGHT: Record<
	ColorScheme,
	[string, string, string, string, string]
> = {
	green: ["#E8E4E3", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
	blue: ["#E8E4E3", "#b3d9ff", "#66a3ff", "#1a73e8", "#0d47a1"],
	purple: ["#E8E4E3", "#e9d5ff", "#c084fc", "#9333ea", "#6b21a8"],
	orange: ["#E8E4E3", "#fed7aa", "#fb923c", "#ea580c", "#9a3412"],
	pink: ["#E8E4E3", "#fbcfe8", "#f472b6", "#db2777", "#9d174d"],
	dracula: ["#E8E4E3", "#f1f5f9", "#cbd5e1", "#94a3b8", "#475569"],
	halloween: ["#E8E4E3", "#fef08a", "#fbbf24", "#ea580c", "#7c2d12"],
};

export function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
	if (count === 0) return 0;
	if (count <= 3) return 1;
	if (count <= 6) return 2;
	if (count <= 9) return 3;
	return 4;
}

interface TooltipState {
	visible: boolean;
	x: number;
	y: number;
	date: string;
	count: number;
}

function fmtDate(dateStr: string): string {
	return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
}

// ─────────────────────────────────────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────────────────────────────────────

export function GitHubCalendar({
	username,
	colorScheme = "blue",
	colors,
	cellSize = 16,
	cellGap = 4,
	cellShape = "circle",
	showTooltip = true,
	showMonthLabels = true,
	showDayLabels = true,
	weekStart = "sun",
	animate = false,
	startDate,
	endDate,
	showYearButtons = false,
	onDataLoaded,
}: GitHubCalendarProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [data, setData] = useState<ContributionDay[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedYear, setSelectedYear] = useState<number | null>(null);

	const [tooltip, setTooltip] = useState<TooltipState>({
		visible: false,
		x: 0,
		y: 0,
		date: "",
		count: 0,
	});

	const { resolvedTheme } = useTheme();
	const themes = resolvedTheme === "light" ? COLOR_THEMES_LIGHT : COLOR_THEMES;
	const palette = colors ?? themes[colorScheme] ?? themes.green;

	// ── Client-side fetch ─────────────────────────────────────────────────────
	useEffect(() => {
		if (!username) return;

		let isMounted = true;
		setLoading(true);
		setError(null);

		fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to fetch contributions");
				}
				return res.json();
			})
			.then((json) => {
				if (isMounted) {
					const contributions = json?.contributions;
					if (Array.isArray(contributions)) {
						const mapped = contributions.map((day: any) => ({
							date: day.date,
							count: day.count,
						}));
						const sorted = mapped.sort((a, b) => a.date.localeCompare(b.date));
						setData(sorted);
						if (showYearButtons && sorted.length) {
							const latestYear = Number(sorted[sorted.length - 1].date.split("-")[0]);
							setSelectedYear((prev) => prev ?? latestYear);
						}
						if (onDataLoaded) {
							onDataLoaded(sorted);
						}
					} else {
						throw new Error("Invalid response format");
					}
					setLoading(false);
				}
			})
			.catch((err) => {
				if (isMounted) {
					setError(err.message || "An error occurred");
					setLoading(false);
				}
			});

		return () => {
			isMounted = false;
		};
	}, [username]);

	// ── Derive available years from data ─────────────────────────────────────
	const years = useMemo(() => {
		if (!data.length) return [];
		const yearSet = new Set(data.map((d) => d.date.split("-")[0]));
		return Array.from(yearSet).map(Number).sort((a, b) => b - a);
	}, [data]);

	// ── Filter data based on year buttons / startDate-endDate range ─────────
	const filteredData = useMemo(() => {
		if (!data || !data.length) return [];

		if (showYearButtons && selectedYear) {
			const yearStr = String(selectedYear);
			return data.filter((day) => day.date.startsWith(yearStr));
		}

		const today = new Date().toISOString().split("T")[0];
		const end = !endDate || endDate === "auto" ? today : endDate;
		return data.filter((day) => {
			if (startDate && day.date < startDate) return false;
			if (day.date > end) return false;
			return true;
		});
	}, [data, startDate, endDate, showYearButtons, selectedYear]);

	// ── Build week columns ────────────────────────────────────────────────────
	const weeks = useMemo(() => {
		const grid: (ContributionDay | null)[][] = [];
		if (!filteredData.length) return grid;

		const firstDate = new Date(filteredData[0].date + "T00:00:00");
		const dow = firstDate.getDay();
		const offset = weekStart === "sun" ? dow : (dow + 6) % 7;

		let week: (ContributionDay | null)[] = [];
		for (let i = 0; i < offset; i++) week.push(null);
		for (const day of filteredData) {
			week.push(day);
			if (week.length === 7) {
				grid.push(week);
				week = [];
			}
		}
		if (week.length > 0) {
			while (week.length < 7) week.push(null);
			grid.push(week);
		}
		return grid;
	}, [filteredData, weekStart]);

	// ── Month label positions ─────────────────────────────────────────────────
	const monthPositions = useMemo(() => {
		const positions: { label: string; col: number }[] = [];
		let lastMonth = -1;
		weeks.forEach((week, colIdx) => {
			for (const day of week) {
				if (day) {
					const month = new Date(day.date + "T00:00:00").getMonth();
					if (month !== lastMonth) {
						positions.push({ label: MONTH_LABELS[month], col: colIdx });
						lastMonth = month;
					}
					break;
				}
			}
		});
		return positions;
	}, [weeks]);

	const borderRadius = useMemo(() => {
		if (cellShape === "circle") return "50%";
		if (cellShape === "rounded")
			return Math.max(3, Math.floor(cellSize / 3)) + "px";
		return "2px";
	}, [cellShape, cellSize]);

	const handleMouseEnter = useCallback(
		(e: React.MouseEvent<HTMLDivElement>, day: ContributionDay) => {
			if (!showTooltip || !containerRef.current) return;
			const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
			const cRect = containerRef.current.getBoundingClientRect();
			setTooltip({
				visible: true,
				x: rect.left - cRect.left + cellSize / 2,
				y: rect.top - cRect.top,
				date: day.date,
				count: day.count,
			});
		},
		[showTooltip, cellSize],
	);

	const handleMouseLeave = useCallback(() => {
		setTooltip((t) => ({ ...t, visible: false }));
	}, []);

	const step = cellSize + cellGap;
	const LEFT = showDayLabels ? 32 : 0;
	const TOP = showMonthLabels ? 22 : 0;

	// ── Render Skeleton Loader ────────────────────────────────────────────────
	const skeletonWeeksCount = 53;

	const skeletonWeeks = useMemo(() => {
		return Array.from({ length: skeletonWeeksCount }, () =>
			Array(7).fill(null),
		);
	}, []);

	if (loading) {
		const gridW = skeletonWeeksCount * step - cellGap;
		const gridH = 7 * step - cellGap;

		return (
			<div
				className="relative animate-pulse select-none"
				style={{ width: gridW + LEFT, minHeight: gridH + TOP }}
			>
				{/* Month labels skeleton placeholder */}
				{showMonthLabels && (
					<div className="absolute top-0 flex gap-10" style={{ left: LEFT }}>
						{Array.from({ length: Math.ceil(skeletonWeeksCount / 4.3) }).map(
							(_, i) => (
								<span key={i} className="h-3.5 w-7 rounded bg-zinc-800" />
							),
						)}
					</div>
				)}

				{/* Day-of-week labels skeleton placeholder */}
				{showDayLabels && (
					<div
						className="absolute left-0 flex flex-col justify-between"
						style={{ top: TOP, width: LEFT - 4, height: gridH }}
					>
						{["Mon", "Wed", "Fri"].map((label, i) => (
							<div
								key={i}
								className="flex h-3.5 items-center justify-end pr-1 text-[11px] text-zinc-600"
							>
								{label}
							</div>
						))}
					</div>
				)}

				{/* Cell grid skeleton placeholder */}
				<div
					className="absolute flex"
					style={{ top: TOP, left: LEFT, gap: cellGap }}
				>
					{skeletonWeeks.map((week, wi) => (
						<div key={wi} className="flex flex-col" style={{ gap: cellGap }}>
							{week.map((_, di) => (
								<div
									key={di}
									suppressHydrationWarning
									style={{
										width: cellSize,
										height: cellSize,
										backgroundColor: palette[0],
										borderRadius,
									}}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		);
	}

	// ── Render Error State ────────────────────────────────────────────────────
	if (error) {
		return (
			<div className="flex flex-col items-center justify-center rounded-lg border border-red-900/50 bg-red-950/20 px-4 py-8 text-center">
				<p className="font-semibold text-red-400 text-sm">
					Failed to load contributions
				</p>
				<p className="mt-1 text-red-500/80 text-xs">
					Could not retrieve data for @{username}. Please check the username or
					try again later.
				</p>
			</div>
		);
	}

	// ── Render actual Calendar ────────────────────────────────────────────────
	const gridW = weeks.length * step - cellGap;
	const gridH = 7 * step - cellGap;

	return (
		<div className="flex flex-col gap-4">
			{/* ── Year buttons ────────────────────────────────────────────────── */}
			{showYearButtons && years.length > 1 && (
				<div className="flex gap-2 flex-wrap">
					{years.map((year) => (
						<button
							key={year}
							onClick={() => setSelectedYear(year)}
							className={cn(
								"px-3 py-1 text-sm rounded-md transition-colors",
								selectedYear === year
									? "bg-zinc-700 text-white"
									: "bg-zinc-800 text-zinc-400 hover:text-zinc-200",
							)}
						>
							{year}
						</button>
					))}
				</div>
			)}
		<div
			ref={containerRef}
			className="relative select-none"
			style={{ width: gridW + LEFT, minHeight: gridH + TOP }}
		>
			{/* ── Month labels ───────────────────────────────────────────────── */}
			{showMonthLabels && (
				<div className="absolute top-0" style={{ left: LEFT }}>
					{monthPositions.map(({ label, col }) => (
						<span
							key={`${label}-${col}`}
							className="absolute text-[11px] text-zinc-500 leading-none"
							style={{ left: col * step, top: 4 }}
						>
							{label}
						</span>
					))}
				</div>
			)}

			{/* ── Day-of-week labels ─────────────────────────────────────────── */}
			{showDayLabels && (
				<div
					className="absolute left-0 flex flex-col"
					style={{ top: TOP, width: LEFT - 4 }}
				>
					{DAY_LABELS.map((lbl, i) => (
						<div
							key={i}
							className="flex items-center justify-end pr-1 text-[11px] text-zinc-500"
							style={{ height: cellSize, marginBottom: i < 6 ? cellGap : 0 }}
						>
							{lbl}
						</div>
					))}
				</div>
			)}

			{/* ── Cell grid ──────────────────────────────────────────────────── */}
			<motion.div
				key={`${animate}-${weeks.length}`}
				className="absolute flex"
				style={{ top: TOP, left: LEFT, gap: cellGap }}
				role="grid"
				aria-label="Contribution activity calendar"
				initial={animate ? { opacity: 0 } : false}
				animate={animate ? { opacity: 1 } : {}}
				transition={{ duration: 0.3 }}
			>
				{weeks.map((week, wi) => (
					<div
						key={wi}
						role="row"
						className="flex flex-col"
						style={{ gap: cellGap }}
					>
						{week.map((day, di) => {
							const level = day ? getContributionLevel(day.count) : 0;
							const bg = palette[level];
							const hasData = day !== null;
							return (
								<motion.div
									key={di}
									role="gridcell"
									aria-label={
										day
											? `${fmtDate(day.date)}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`
											: undefined
									}
									tabIndex={hasData ? 0 : -1}
									style={{
										width: cellSize,
										height: cellSize,
										backgroundColor: bg,
										borderRadius,
										cursor: "pointer",
										flexShrink: 0,
									}}
									initial={animate ? { scale: 0, opacity: 0 } : false}
									animate={animate ? { scale: 1, opacity: 1 } : {}}
									transition={
										animate
											? {
													delay: wi * 0.012 + di * 0.004,
													duration: 0.2,
													ease: "easeOut",
												}
											: {}
									}
									whileHover={
										hasData ? { scale: 1.3, filter: "brightness(1.35)" } : {}
									}
									className={cn(
										"focus:outline-none",
										hasData &&
											"focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-900",
									)}
									onMouseEnter={
										day ? (e) => handleMouseEnter(e, day) : undefined
									}
									onMouseLeave={day ? handleMouseLeave : undefined}
								/>
							);
						})}
					</div>
				))}
			</motion.div>

			{/* ── Tooltip ────────────────────────────────────────────────────── */}
			{showTooltip && tooltip.visible && (
				<div
					role="tooltip"
					className="pointer-events-none absolute z-50 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-800/95 px-2.5 py-1.5 text-xs text-zinc-100 backdrop-blur-sm"
					style={{ left: tooltip.x + LEFT, top: tooltip.y + TOP - 44 }}
				>
					<span className="font-semibold text-zinc-50">
						{tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}
					</span>
					<span className="ml-1.5 text-zinc-400">
						on {fmtDate(tooltip.date)}
					</span>
					<span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-700" />
				</div>
			)}
		</div>
		</div>
	);
}

/** Five-cell legend: Less □□□□□ More */
export function ContributionLegend({
	colors,
	colorScheme = "green",
	cellSize = 11,
	cellShape,
}: {
	colors?: [string, string, string, string, string];
	colorScheme?: ColorScheme;
	cellSize?: number;
	cellShape?: CellShape;
}) {
	const { resolvedTheme } = useTheme();

	const borderRadius = useMemo(() => {
		if (cellShape === "circle") return "50%";
		if (cellShape === "rounded")
			return Math.max(3, Math.floor(cellSize / 3)) + "px";
		return "2px";
	}, [cellShape, cellSize]);
	const themes = resolvedTheme === "light" ? COLOR_THEMES_LIGHT : COLOR_THEMES;
	const palette = colors ?? themes[colorScheme] ?? themes.green;
	return (
		<div className="flex items-center gap-1.5" aria-label="Contribution legend">
			<span className="text-[11px] text-zinc-500">Less</span>
			{palette.map((color, i) => (
				<div
					key={i}
					style={{
						width: cellSize,
						height: cellSize,
						backgroundColor: color,
						borderRadius,
					}}
					aria-hidden="true"
				/>
			))}
			<span className="text-[11px] text-zinc-500">More</span>
		</div>
	);
}
