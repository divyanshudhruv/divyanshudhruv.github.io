"use client";

import { useMemo } from "react";
import { computeSeriesBarWidth } from "./series-bar-layout";
import { chartCssVars, useChartStable, useYScale } from "./chart-context";

export interface SeriesBarProps {
	dataKey: string;
	fill?: string;
	radius?: number;
	yAxisId?: string | number;
}

export function SeriesBar({
	dataKey,
	fill = chartCssVars.linePrimary,
	radius = 0,
	yAxisId,
}: SeriesBarProps) {
	const {
		renderData,
		xScale,
		innerHeight,
		composedBarDataKeys,
		composedBarGap = 4,
		composedBarSize,
		composedMaxBarSize,
		xAccessor,
	} = useChartStable();

	const yScale = useYScale(yAxisId);

	const barIndex = useMemo(
		() => (composedBarDataKeys ?? []).indexOf(dataKey),
		[composedBarDataKeys, dataKey],
	);

	if (barIndex < 0) return null;

	const seriesCount = composedBarDataKeys?.length ?? 1;
	const columnWidth = xScale
		? Math.abs(
				(xScale(xAccessor(renderData[1] ?? renderData[0])) ?? 0) -
					(xScale(xAccessor(renderData[0])) ?? 0),
			)
		: 0;

	const barWidth = computeSeriesBarWidth({
		innerWidth: xScale?.range()?.[1] ?? innerHeight,
		dataLength: renderData.length,
		columnWidth,
		seriesCount,
		composedBarSize,
		composedMaxBarSize,
		composedBarGap,
	});

	return (
		<g>
			{renderData.map((d, i) => {
				const x = xScale(xAccessor(d));
				if (x == null) return null;

				const rawValue = d[dataKey];
				const value = typeof rawValue === "number" ? rawValue : 0;
				const barY = yScale(Math.max(0, value));
				const barH = Math.max(1, innerHeight - (yScale(value) ?? innerHeight));

				const groupOffset =
					seriesCount > 1 && !composedBarDataKeys
						? (barWidth + composedBarGap) * (barIndex - (seriesCount - 1) / 2)
						: 0;

				return (
					<rect
						key={i}
						x={x + groupOffset - barWidth / 2}
						y={barY}
						width={barWidth}
						height={barH}
						fill={fill}
						rx={radius}
						ry={radius}
					/>
				);
			})}
		</g>
	);
}
