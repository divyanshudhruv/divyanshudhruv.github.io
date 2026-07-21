"use client";

import { cn } from "@homepage/ui/lib/utils";
import * as m from "motion/react-m";
import type { RefObject } from "react";
import type { CellShape, ContributionDay } from "./github-calendar";

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

const DAY_LABELS = [
	{ key: "sun", label: "" },
	{ key: "mon", label: "Mon" },
	{ key: "tue", label: "" },
	{ key: "wed", label: "Wed" },
	{ key: "thu", label: "" },
	{ key: "fri", label: "Fri" },
	{ key: "sat", label: "" },
];

function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
	if (count === 0) return 0;
	if (count <= 3) return 1;
	if (count <= 6) return 2;
	if (count <= 9) return 3;
	return 4;
}

function fmtDate(dateStr: string): string {
	const months = [
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
	const [y, m, d] = dateStr.split("-").map(Number);
	return `${months[m - 1]} ${d}, ${y}`;
}

interface TooltipState {
	visible: boolean;
	x: number;
	y: number;
	date: string;
	count: number;
}

interface CalendarGridProps {
	weeks: (ContributionDay | null)[][];
	monthPositions: { label: string; col: number }[];
	palette: [string, string, string, string, string];
	cellSize: number;
	cellGap: number;
	borderRadius: string;
	animate: boolean;
	showMonthLabels: boolean;
	showDayLabels: boolean;
	step: number;
	TOP: number;
	LEFT: number;
	showTooltip: boolean;
	tooltip: TooltipState;
	containerRef: RefObject<HTMLDivElement | null>;
	onMouseEnter: (
		e: React.MouseEvent<HTMLDivElement>,
		day: ContributionDay,
	) => void;
	onMouseLeave: () => void;
}

export function CalendarGrid({
	weeks,
	monthPositions,
	palette,
	cellSize,
	cellGap,
	borderRadius,
	animate,
	showMonthLabels,
	showDayLabels,
	step,
	TOP,
	LEFT,
	showTooltip,
	tooltip,
	containerRef,
	onMouseEnter,
	onMouseLeave,
}: CalendarGridProps) {
	const gridW = weeks.length * step - cellGap;
	const gridH = 7 * step - cellGap;

	return (
		<div
			ref={containerRef}
			className="relative select-none"
			style={{ width: gridW + LEFT, minHeight: gridH + TOP }}
		>
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
			{showDayLabels && (
				<div
					className="absolute left-0 flex flex-col"
					style={{ top: TOP, width: LEFT - 4 }}
				>
					{DAY_LABELS.map(({ key, label }, i) => (
						<div
							key={key}
							className="flex items-center justify-end pr-1 text-[11px] text-zinc-500"
							style={{ height: cellSize, marginBottom: i < 6 ? cellGap : 0 }}
						>
							{label}
						</div>
					))}
				</div>
			)}
			<m.div
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
						tabIndex={-1}
						className="flex flex-col"
						style={{ gap: cellGap }}
						aria-label={`Week ${wi + 1}`}
					>
						{week.map((day, di) => {
							const level = day ? getContributionLevel(day.count) : 0;
							const bg = palette[level];
							const hasData = day !== null;
							return (
								<m.div
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
									onMouseEnter={day ? (e) => onMouseEnter(e, day) : undefined}
									onMouseLeave={day ? onMouseLeave : undefined}
								/>
							);
						})}
					</div>
				))}
			</m.div>
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
	);
}
