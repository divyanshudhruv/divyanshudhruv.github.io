import type { SeriesPointMarkerStyle } from "../overlays/series-point-marker";

export function getSeriesMarkerVisualExtent(
	style: Pick<
		SeriesPointMarkerStyle,
		| "radius"
		| "strokeWidth"
		| "ringGap"
		| "outlineWidth"
		| "showActiveHighlight"
	>,
): number {
	const radius = style.radius ?? 5;
	const strokeWidth = style.strokeWidth ?? 2;
	const ringGap = style.ringGap ?? 2;
	const outlineWidth = style.outlineWidth ?? 0;
	const showActiveHighlight = style.showActiveHighlight ?? true;
	const ring = strokeWidth > 0 ? ringGap + strokeWidth : 0;
	const outline = showActiveHighlight ? outlineWidth : 0;
	return radius + ring + outline;
}
