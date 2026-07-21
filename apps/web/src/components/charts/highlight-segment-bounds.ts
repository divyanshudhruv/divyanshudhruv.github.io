import type { TooltipData } from "./chart-context";
import type { ChartSelection } from "./use-chart-interaction";

// Pure geometry for the hover-highlight band, split out from the hook so it can
// be unit-tested without React/motion (see __tests__).
//
// The band is the pixel x-range one data point either side of the hovered point:
//   [ xScale(t(idx-1)), xScale(t(idx+1)) ]
// `<HighlightSegment>` then re-strokes the base path clipped to that band, so the
// highlight always traces the line itself. Selecting the band by data index
// assumes x is monotone along the path, which holds for a time series. On a curve
// that overshoots in x (curveNatural, curveBasis) a band edge can land a few
// pixels short, slightly narrowing the bright slice but never detaching it.

export interface SegmentBounds {
	/** Left edge of the highlight band, in pixels. */
	x: number;
	/** Width of the highlight band, in pixels. */
	width: number;
	isActive: boolean;
}

export const INACTIVE_SEGMENT: SegmentBounds = {
	x: 0,
	width: 0,
	isActive: false,
};

/**
 * The highlight band `{x, width}` in pixel space, from the data + `xScale` plus
 * the current hover/selection. Hover spans one data point either side of the dot
 * (clamped to the ends); an active drag-selection uses the dragged pixel range
 * directly and takes priority over hover.
 */
/** Interpolate pixel x at a fractional data index */
function xAtFractionalIndex(
	data: Record<string, unknown>[],
	xScale: (value: Date) => number | undefined,
	xAccessor: (d: Record<string, unknown>) => Date,
	fractionalIdx: number,
): number {
	const intIdx = Math.max(0, Math.min(Math.floor(fractionalIdx), data.length - 2));
	const frac = fractionalIdx - intIdx;
	const p0 = data[intIdx];
	const p1 = data[intIdx + 1];
	if (!(p0 && p1)) {
		return p0 ? (xScale(xAccessor(p0)) ?? 0) : 0;
	}
	const x0 = xScale(xAccessor(p0)) ?? 0;
	const x1 = xScale(xAccessor(p1)) ?? 0;
	return x0 + (x1 - x0) * frac;
}

export function computeSegmentBounds(
	data: Record<string, unknown>[],
	xScale: (value: Date) => number | undefined,
	xAccessor: (d: Record<string, unknown>) => Date,
	tooltipData:
		| Pick<TooltipData, "index" | "hoverLeftIndex" | "hoverRatio">
		| null
		| undefined,
	selection:
		| Pick<ChartSelection, "active" | "startX" | "endX">
		| null
		| undefined,
): SegmentBounds {
	if (data.length === 0) {
		return INACTIVE_SEGMENT;
	}

	if (selection?.active) {
		const x = Math.min(selection.startX, selection.endX);
		const width = Math.abs(selection.endX - selection.startX);
		return { x, width, isActive: true };
	}

	if (!tooltipData) {
		return INACTIVE_SEGMENT;
	}

	// Use interpolated position when available for smooth cursor tracking;
	// fall back to snapped index for unchanged data structures.
	if (
		tooltipData.hoverLeftIndex !== undefined &&
		tooltipData.hoverRatio !== undefined
	) {
		const center = tooltipData.hoverLeftIndex + tooltipData.hoverRatio;
		const left = Math.max(0, center - 1);
		const right = Math.min(data.length - 1, center + 1);
		const startX = xAtFractionalIndex(data, xScale, xAccessor, left);
		const endX = xAtFractionalIndex(data, xScale, xAccessor, right);
		return { x: startX, width: Math.max(0, endX - startX), isActive: true };
	}

	const idx = tooltipData.index;
	const startIdx = Math.max(0, idx - 1);
	const endIdx = Math.min(data.length - 1, idx + 1);
	const startPoint = data[startIdx];
	const endPoint = data[endIdx];
	if (!(startPoint && endPoint)) {
		return INACTIVE_SEGMENT;
	}

	const startX = xScale(xAccessor(startPoint)) ?? 0;
	const endX = xScale(xAccessor(endPoint)) ?? 0;
	return { x: startX, width: Math.max(0, endX - startX), isActive: true };
}
