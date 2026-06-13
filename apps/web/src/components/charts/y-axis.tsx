"use client";

import { memo, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useChartStable } from "./chart-context";

export interface YAxisProps {
	numTicks?: number;
}

interface TickItem {
	value: number;
	y: number;
	label: string;
}

function formatTickValue(value: number): string {
	if (value >= 1000000) {
		return `${(value / 1000000).toFixed(1)}M`;
	}
	if (value >= 1000) {
		return `${(value / 1000).toFixed(0)}K`;
	}
	return String(value);
}

export function YAxis({ numTicks = 5 }: YAxisProps) {
	const { containerRef, yScale, margin, innerHeight } = useChartStable();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const container = containerRef.current;
	if (!(mounted && container)) {
		return null;
	}

	return (
		<YAxisInner
			container={container}
			yScale={yScale}
			margin={margin}
			innerHeight={innerHeight}
			numTicks={numTicks}
		/>
	);
}

const YAxisInner = memo(function YAxisInner({
	container,
	yScale,
	margin,
	innerHeight,
	numTicks,
}: {
	container: HTMLDivElement;
	yScale: (value: number) => number | undefined;
	margin: { top: number; left: number };
	innerHeight: number;
	numTicks: number;
}) {
	const ticks = useMemo<TickItem[]>(() => {
		const domain = (yScale as unknown as { domain(): number[] }).domain();
		const [min, max] = domain;
		const range = max - min;
		if (range === 0) {
			return [
				{
					value: min,
					y: margin.top + innerHeight / 2,
					label: formatTickValue(min),
				},
			];
		}
		const rawTicks: number[] = [];
		const step = range / (numTicks - 1);
		for (let i = 0; i < numTicks; i++) {
			rawTicks.push(min + i * step);
		}
		return rawTicks.map((value) => ({
			value,
			y: (yScale(value) ?? 0) + margin.top,
			label: formatTickValue(value),
		}));
	}, [yScale, margin.top, margin.left, innerHeight, numTicks]);

	return createPortal(
		<div
			className="pointer-events-none absolute top-0 bottom-0 flex flex-col justify-between"
			style={{
				left: 0,
				width: margin.left,
				paddingTop: margin.top,
				paddingBottom: 0,
			}}
		>
			{ticks.map((tick) => (
				<div
					key={tick.value}
					className="absolute right-2 flex items-center"
					style={{
						top: tick.y,
						transform: "translateY(-50%)",
					}}
				>
					<span className="text-[var(--chart-label,var(--color-zinc-500))] text-xs">
						{tick.label}
					</span>
				</div>
			))}
		</div>,
		container,
	);
});

YAxisInner.displayName = "YAxisInner";

export default YAxis;
