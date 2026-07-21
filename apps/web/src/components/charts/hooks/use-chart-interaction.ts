"use client";

import { localPoint } from "@visx/event";
import type { scaleLinear, scaleTime } from "@visx/scale";
import { useRef, useState } from "react";
import type {
	LineConfig,
	Margin,
	TooltipData,
} from "../contexts/chart-context";
import { normalizeYAxisId } from "../utils/y-axis-scales";
import { useScheduledTooltip } from "./use-scheduled-tooltip";

type ScaleTime = ReturnType<typeof scaleTime<number>>;
type ScaleLinear = ReturnType<typeof scaleLinear<number>>;

export interface ChartSelection {
	startX: number;
	endX: number;
	startIndex: number;
	endIndex: number;
	active: boolean;
}

interface UseChartInteractionParams {
	xScale: ScaleTime;
	yScale: ScaleLinear;
	yScales: Record<string, ScaleLinear>;
	data: Record<string, unknown>[];
	lines: LineConfig[];
	margin: Margin;
	xAccessor: (d: Record<string, unknown>) => Date;
	bisectDate: (
		data: Record<string, unknown>[],
		date: Date,
		lo: number,
	) => number;
	canInteract: boolean;
}

interface ChartInteractionResult {
	tooltipData: TooltipData | null;
	setTooltipData: React.Dispatch<React.SetStateAction<TooltipData | null>>;
	selection: ChartSelection | null;
	clearSelection: () => void;
	interactionHandlers: {
		onMouseMove?: (event: React.MouseEvent<SVGGElement>) => void;
		onMouseLeave?: () => void;
		onMouseDown?: (event: React.MouseEvent<SVGGElement>) => void;
		onMouseUp?: () => void;
		onTouchStart?: (event: React.TouchEvent<SVGGElement>) => void;
		onTouchMove?: (event: React.TouchEvent<SVGGElement>) => void;
		onTouchEnd?: () => void;
	};
	interactionStyle: React.CSSProperties;
}

export function useChartInteraction({
	xScale,
	yScale,
	yScales,
	data,
	lines,
	margin,
	xAccessor,
	bisectDate,
	canInteract,
}: UseChartInteractionParams): ChartInteractionResult {
	const [selection, setSelection] = useState<ChartSelection | null>(null);
	const {
		tooltipData,
		setTooltipData,
		scheduleTooltip,
		clearTooltip,
		resetTooltipDedupe,
	} = useScheduledTooltip<TooltipData>();

	const isDraggingRef = useRef(false);
	const dragStartXRef = useRef<number>(0);
	const lastHoveredXRef = useRef<number | null>(null);

	const resolveTooltipFromX = (pixelX: number): TooltipData | null => {
		const x0 = xScale.invert(pixelX);
		const index = bisectDate(data, x0, 1);
		const d0 = data[index - 1];
		const d1 = data[index];

		if (!d0) {
			return null;
		}

		let d = d0;
		let finalIndex = index - 1;
		let ratio = 0;

		if (d1) {
			const d0Time = xAccessor(d0).getTime();
			const d1Time = xAccessor(d1).getTime();
			const dt = d1Time - d0Time;
			if (dt > 0) {
				ratio = (x0.getTime() - d0Time) / dt;
			}
			if (ratio > 0.5) {
				d = d1;
				finalIndex = index;
			}
		}

		const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

		const d0x = xScale(xAccessor(d0)) ?? 0;
		const d1x = d1 ? (xScale(xAccessor(d1)) ?? 0) : d0x;
		const interpolatedX = lerp(d0x, d1x, ratio);

		const yPositions: Record<string, number> = {};
		for (const line of lines) {
			const v0 = d0[line.dataKey];
			const v1 = d1?.[line.dataKey];
			if (typeof v0 === "number" && typeof v1 === "number") {
				const interpolatedValue = lerp(v0, v1, ratio);
				const axisScale = yScales[normalizeYAxisId(line.yAxisId)] ?? yScale;
				yPositions[line.dataKey] = axisScale(interpolatedValue) ?? 0;
			} else if (typeof v0 === "number") {
				const axisScale = yScales[normalizeYAxisId(line.yAxisId)] ?? yScale;
				yPositions[line.dataKey] = axisScale(v0) ?? 0;
			}
		}

		return {
			point: d,
			index: finalIndex,
			x: interpolatedX,
			yPositions,
			hoverLeftIndex: index - 1,
			hoverRatio: ratio,
		};
	};

	const resolveIndexFromX = (pixelX: number): number => {
		const x0 = xScale.invert(pixelX);
		const index = bisectDate(data, x0, 1);
		const d0 = data[index - 1];
		const d1 = data[index];
		if (!d0) {
			return 0;
		}
		if (d1) {
			const d0Time = xAccessor(d0).getTime();
			const d1Time = xAccessor(d1).getTime();
			if (x0.getTime() - d0Time > d1Time - x0.getTime()) {
				return index;
			}
		}
		return index - 1;
	};

	const getChartX = (
		event: React.MouseEvent<SVGGElement> | React.TouchEvent<SVGGElement>,
		touchIndex = 0,
	): number | null => {
		let point: { x: number; y: number } | null = null;

		if ("touches" in event) {
			const touch = event.touches[touchIndex];
			if (!touch) {
				return null;
			}
			const svg = event.currentTarget.ownerSVGElement;
			if (!svg) {
				return null;
			}
			point = localPoint(svg, touch as unknown as MouseEvent);
		} else {
			point = localPoint(event);
		}

		if (!point) {
			return null;
		}
		return point.x - margin.left;
	};

	const handleMouseMove = (event: React.MouseEvent<SVGGElement>) => {
		const chartX = getChartX(event);
		if (chartX === null) {
			return;
		}

		if (isDraggingRef.current) {
			const startX = Math.min(dragStartXRef.current, chartX);
			const endX = Math.max(dragStartXRef.current, chartX);
			setSelection({
				startX,
				endX,
				startIndex: resolveIndexFromX(startX),
				endIndex: resolveIndexFromX(endX),
				active: true,
			});
			return;
		}

		lastHoveredXRef.current = chartX;
		const tooltip = resolveTooltipFromX(chartX);
		if (tooltip) {
			scheduleTooltip(tooltip);
		}
	};

	const handleMouseLeave = () => {
		lastHoveredXRef.current = null;
		clearTooltip();
		if (isDraggingRef.current) {
			isDraggingRef.current = false;
		}
		setSelection(null);
	};

	const handleMouseDown = (event: React.MouseEvent<SVGGElement>) => {
		const chartX = getChartX(event);
		if (chartX === null) {
			return;
		}
		isDraggingRef.current = true;
		dragStartXRef.current = chartX;
		clearTooltip();
		setSelection(null);
	};

	const handleMouseUp = () => {
		if (isDraggingRef.current) {
			isDraggingRef.current = false;
		}
		setSelection(null);
	};

	const handleTouchStart = (event: React.TouchEvent<SVGGElement>) => {
		if (event.touches.length === 1) {
			event.preventDefault();
			const chartX = getChartX(event, 0);
			if (chartX === null) {
				return;
			}
			lastHoveredXRef.current = chartX;
			const tooltip = resolveTooltipFromX(chartX);
			if (tooltip) {
				scheduleTooltip(tooltip);
			}
		} else if (event.touches.length === 2) {
			event.preventDefault();
			resetTooltipDedupe();
			clearTooltip();
			const x0 = getChartX(event, 0);
			const x1 = getChartX(event, 1);
			if (x0 === null || x1 === null) {
				return;
			}
			const startX = Math.min(x0, x1);
			const endX = Math.max(x0, x1);
			setSelection({
				startX,
				endX,
				startIndex: resolveIndexFromX(startX),
				endIndex: resolveIndexFromX(endX),
				active: true,
			});
		}
	};

	const handleTouchMove = (event: React.TouchEvent<SVGGElement>) => {
		if (event.touches.length === 1) {
			event.preventDefault();
			const chartX = getChartX(event, 0);
			if (chartX === null) {
				return;
			}
			lastHoveredXRef.current = chartX;
			const tooltip = resolveTooltipFromX(chartX);
			if (tooltip) {
				scheduleTooltip(tooltip);
			}
		} else if (event.touches.length === 2) {
			event.preventDefault();
			const x0 = getChartX(event, 0);
			const x1 = getChartX(event, 1);
			if (x0 === null || x1 === null) {
				return;
			}
			const startX = Math.min(x0, x1);
			const endX = Math.max(x0, x1);
			setSelection({
				startX,
				endX,
				startIndex: resolveIndexFromX(startX),
				endIndex: resolveIndexFromX(endX),
				active: true,
			});
		}
	};

	const handleTouchEnd = () => {
		clearTooltip();
		setSelection(null);
	};

	const clearSelection = () => {
		setSelection(null);
	};

	const interactionHandlers = canInteract
		? {
				onMouseMove: handleMouseMove,
				onMouseLeave: handleMouseLeave,
				onMouseDown: handleMouseDown,
				onMouseUp: handleMouseUp,
				onTouchStart: handleTouchStart,
				onTouchMove: handleTouchMove,
				onTouchEnd: handleTouchEnd,
			}
		: {};

	const interactionStyle: React.CSSProperties = {
		cursor: canInteract ? "crosshair" : "default",
		touchAction: "none",
	};

	return {
		tooltipData,
		setTooltipData,
		selection,
		clearSelection,
		interactionHandlers,
		interactionStyle,
	};
}
