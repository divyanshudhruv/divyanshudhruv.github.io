// CSS variable references for theming
export const chartCssVars = {
	background: "var(--chart-background)",
	foreground: "var(--chart-foreground)",
	foregroundMuted: "var(--chart-foreground-muted)",
	label: "var(--chart-label)",
	linePrimary: "var(--chart-line-primary)",
	lineSecondary: "var(--chart-line-secondary)",
	crosshair: "var(--chart-crosshair)",
	grid: "var(--chart-grid)",
	indicatorColor: "var(--chart-indicator-color)",
	indicatorSecondaryColor: "var(--chart-indicator-secondary-color)",
	markerBackground: "var(--chart-marker-background)",
	markerBorder: "var(--chart-marker-border)",
	markerForeground: "var(--chart-marker-foreground)",
	badgeBackground: "var(--chart-marker-badge-background)",
	badgeForeground: "var(--chart-marker-badge-foreground)",
	segmentBackground: "var(--chart-segment-background)",
	segmentLine: "var(--chart-segment-line)",
	brushBorder: "var(--chart-brush-border)",
};

/** Default scatter series colors from the chart palette (`--chart-1` … `--chart-5`). */
export const defaultScatterColors = [
	"var(--chart-1)",
	"var(--chart-2)",
	"var(--chart-3)",
	"var(--chart-4)",
	"var(--chart-5)",
] as const;
