"use client";

import { useSpring } from "motion/react";
import { useEffect, useMemo, useRef } from "react";
import { useChartConfig } from "./chart-config-context";
import { useChartHover, useChartStable } from "./chart-context";
import {
	computeSegmentBounds,
	INACTIVE_SEGMENT,
} from "./highlight-segment-bounds";

// Hover-highlight band for `line.tsx` and `area.tsx`. Computes the segment
// bounds and springs its x/width; `<HighlightSegment>` renders the clipped
// re-stroke. Spring tuning comes from `ChartConfigProvider.highlightSpring`.
// Stable + hover slices are read separately so callers can see the exact
// subscription surface (anything calling this hook will re-render on hover).

export interface HighlightSegmentResult {
	xSpring: ReturnType<typeof useSpring>;
	widthSpring: ReturnType<typeof useSpring>;
	isActive: boolean;
}

/**
 * @param enabled set false when there is no stroke to highlight (e.g. an area
 *   with `showLine={false}`); defaults true.
 */
export function useHighlightSegment({
	enabled = true,
}: {
	enabled?: boolean;
} = {}): HighlightSegmentResult {
	const { data, xScale, xAccessor } = useChartStable();
	const { tooltipData, selection } = useChartHover();
	const { highlightSpring } = useChartConfig();

	const bounds = enabled
		? computeSegmentBounds(data, xScale, xAccessor, tooltipData, selection)
		: INACTIVE_SEGMENT;

	const xSpring = useSpring(0, highlightSpring);
	const widthSpring = useSpring(0, highlightSpring);

	// Jump on inactive→active so the band appears at the hovered point instead
	// of sliding in from x=0; ease on subsequent moves.
	const wasActiveRef = useRef(false);

	useEffect(() => {
		const isFirstActive = bounds.isActive && !wasActiveRef.current;
		if (isFirstActive) {
			xSpring.jump(bounds.x);
			widthSpring.jump(bounds.width);
		} else {
			xSpring.set(bounds.x);
			widthSpring.set(bounds.width);
		}
		wasActiveRef.current = bounds.isActive;
	}, [bounds.x, bounds.width, bounds.isActive, xSpring, widthSpring]);

	return { xSpring, widthSpring, isActive: bounds.isActive };
}
