"use client";

import { cn } from "@homepage/ui/lib/utils";
import { useTheme } from "next-themes";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { CalendarGrid } from "./calendar-grid";
import { CalendarSkeleton } from "./calendar-skeleton";

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

export interface GitHubCalendarDisplay {
	tooltip?: boolean;
	monthLabels?: boolean;
	dayLabels?: boolean;
	yearButtons?: boolean;
}

export interface GitHubCalendarProps {
	username: string;
	colorScheme?: ColorScheme;
	colors?: [string, string, string, string, string];
	cellSize?: number;
	cellGap?: number;
	cellShape?: CellShape;
	weekStart?: WeekStart;
	animate?: boolean;
	startDate?: string;
	endDate?: string;
	display?: GitHubCalendarDisplay;
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

const COLOR_THEMES: Record<
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

const COLOR_THEMES_LIGHT: Record<
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

interface TooltipState {
	visible: boolean;
	x: number;
	y: number;
	date: string;
	count: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hooks
// ─────────────────────────────────────────────────────────────────────────────

function useGitHubContributions(
	username: string,
	showYearButtons: boolean,
	onDataLoaded?: (data: ContributionDay[]) => void,
) {
	const [data, setData] = useState<ContributionDay[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedYear, setSelectedYear] = useState<number | null>(null);

	useEffect(() => {
		if (!username) return;

		const controller = new AbortController();
		let ignore = false;

		(async () => {
			try {
				const res = await fetch(
					`https://github-contributions-api.jogruber.de/v4/${username}`,
					{ signal: controller.signal },
				);
				if (!res.ok) {
					if (!ignore) {
						setError("Failed to fetch contributions");
						setLoading(false);
					}
					return;
				}
				const json = await res.json();
				if (!ignore) {
					const contributions = json?.contributions;
					if (Array.isArray(contributions)) {
						const mapped = contributions.map(
							(day: { date: string; count: number }) => ({
								date: day.date,
								count: day.count,
							}),
						);
						const sorted = mapped.sort((a, b) => a.date.localeCompare(b.date));
						setData(sorted);
						if (showYearButtons && sorted.length) {
							const latestYear = Number(
								sorted[sorted.length - 1].date.split("-")[0],
							);
							setSelectedYear((prev) => prev ?? latestYear);
						}
						if (onDataLoaded) {
							onDataLoaded(sorted);
						}
					} else {
						setError("Invalid response format");
					}
					setLoading(false);
				}
			} catch (err) {
				if (err instanceof DOMException && err.name === "AbortError") return;
				if (!ignore) {
					setError(err instanceof Error ? err.message : "An error occurred");
					setLoading(false);
				}
			}
		})();

		return () => {
			controller.abort();
			ignore = true;
		};
	}, [username, showYearButtons, onDataLoaded]);

	return { data, loading, error, selectedYear, setSelectedYear };
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
	weekStart = "sun",
	animate = false,
	startDate,
	endDate,
	display,
	onDataLoaded,
}: GitHubCalendarProps) {
	const {
		tooltip: showTooltip = true,
		monthLabels: showMonthLabels = true,
		dayLabels: showDayLabels = true,
		yearButtons: showYearButtons = false,
	} = display ?? {};

	const containerRef = useRef<HTMLDivElement>(null);

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

	const { data, loading, error, selectedYear, setSelectedYear } =
		useGitHubContributions(username, showYearButtons ?? false, onDataLoaded);

	// ── Derive available years from data ─────────────────────────────────────
	function deriveYears() {
		if (!data.length) return [];
		const yearSet = new Set(data.map((d) => d.date.split("-")[0]));
		return Array.from(yearSet)
			.map(Number)
			.sort((a, b) => b - a);
	}
	const years = deriveYears();

	// ── Filter data based on year buttons / startDate-endDate range ─────────
	function filterData() {
		if (!data?.length) return [];

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
	}
	const filteredData = filterData();

	// ── Build week columns ────────────────────────────────────────────────────
	function buildWeeks() {
		const grid: (ContributionDay | null)[][] = [];
		if (!filteredData.length) return grid;

		const firstDate = new Date(`${filteredData[0].date}T00:00:00`);
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
	}
	const weeks = buildWeeks();

	// ── Month label positions ─────────────────────────────────────────────────
	function buildMonthPositions() {
		const positions: { label: string; col: number }[] = [];
		let lastMonth = -1;
		weeks.forEach((week: (ContributionDay | null)[], colIdx: number) => {
			for (const day of week) {
				if (day) {
					const month = new Date(`${day.date}T00:00:00`).getMonth();
					if (month !== lastMonth) {
						positions.push({ label: MONTH_LABELS[month], col: colIdx });
						lastMonth = month;
					}
					break;
				}
			}
		});
		return positions;
	}
	const monthPositions = buildMonthPositions();

	function computeBorderRadius() {
		if (cellShape === "circle") return "50%";
		if (cellShape === "rounded")
			return `${Math.max(3, Math.floor(cellSize / 3))}px`;
		return "2px";
	}
	const borderRadius = computeBorderRadius();

	function handleMouseEnter(
		e: React.MouseEvent<HTMLDivElement>,
		day: ContributionDay,
	) {
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
	}

	function handleMouseLeave() {
		setTooltip((t) => ({ ...t, visible: false }));
	}

	const step = cellSize + cellGap;
	const LEFT = showDayLabels ? 32 : 0;
	const TOP = showMonthLabels ? 22 : 0;

	if (loading) {
		return (
			<CalendarSkeleton
				cellSize={cellSize}
				cellGap={cellGap}
				palette={palette}
				cellShape={cellShape}
				showMonthLabels={showMonthLabels}
				showDayLabels={showDayLabels}
			/>
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

	return (
		<div className="flex flex-col gap-4">
			{showYearButtons && years.length > 1 && (
				<div className="flex flex-wrap gap-2">
					{years.map((year) => (
						<button
							type="button"
							key={year}
							onClick={() => setSelectedYear(year)}
							className={cn(
								"rounded-md px-3 py-1 text-sm transition-colors",
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
			<CalendarGrid
				weeks={weeks}
				monthPositions={monthPositions}
				palette={palette}
				cellSize={cellSize}
				cellGap={cellGap}
				borderRadius={borderRadius}
				animate={animate}
				showMonthLabels={showMonthLabels}
				showDayLabels={showDayLabels}
				step={step}
				TOP={TOP}
				LEFT={LEFT}
				showTooltip={showTooltip}
				tooltip={tooltip}
				containerRef={containerRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			/>
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

	const borderRadius = (() => {
		if (cellShape === "circle") return "50%";
		if (cellShape === "rounded")
			return `${Math.max(3, Math.floor(cellSize / 3))}px`;
		return "2px";
	})();
	const themes = resolvedTheme === "light" ? COLOR_THEMES_LIGHT : COLOR_THEMES;
	const palette = colors ?? themes[colorScheme] ?? themes.green;
	return (
		<div
			className="flex items-center gap-1.5"
			role="img"
			aria-label="Contribution legend"
		>
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
