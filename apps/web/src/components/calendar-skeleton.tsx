"use client";

import type { CellShape } from "./github-calendar";

export function CalendarSkeleton({
	cellSize = 16,
	cellGap = 4,
	palette,
	cellShape = "circle",
	showMonthLabels = true,
	showDayLabels = true,
}: {
	cellSize?: number;
	cellGap?: number;
	palette: [string, string, string, string, string];
	cellShape?: CellShape;
	showMonthLabels?: boolean;
	showDayLabels?: boolean;
}) {
	const skeletonWeeksCount = 53;
	const step = cellSize + cellGap;
	const LEFT = showDayLabels ? 32 : 0;
	const TOP = showMonthLabels ? 22 : 0;
	const gridW = skeletonWeeksCount * step - cellGap;
	const gridH = 7 * step - cellGap;
	const borderRadius = (() => {
		if (cellShape === "circle") return "50%";
		if (cellShape === "rounded")
			return `${Math.max(3, Math.floor(cellSize / 3))}px`;
		return "2px";
	})();

	const skeletonWeeks = Array.from({ length: skeletonWeeksCount }, () =>
		Array(7).fill(null),
	);

	return (
		<div
			className="relative animate-pulse select-none"
			style={{ width: gridW + LEFT, minHeight: gridH + TOP }}
		>
			{showMonthLabels && (
				<div className="absolute top-0 flex gap-10" style={{ left: LEFT }}>
					{Array.from({ length: Math.ceil(skeletonWeeksCount / 4.3) }).map(
						(_, i) => (
							<span key={i} className="h-3.5 w-7 rounded bg-zinc-800" />
						),
					)}
				</div>
			)}
			{showDayLabels && (
				<div
					className="absolute left-0 flex flex-col justify-between"
					style={{ top: TOP, width: LEFT - 4, height: gridH }}
				>
					{["Mon", "Wed", "Fri"].map((label) => (
						<div
							key={label}
							className="flex h-3.5 items-center justify-end pr-1 text-[11px] text-zinc-600"
						>
							{label}
						</div>
					))}
				</div>
			)}
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
