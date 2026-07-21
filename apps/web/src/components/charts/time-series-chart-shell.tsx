"use client";
("use memo");

import { scaleLinear, scaleTime } from "@visx/scale";
import { bisector, extent } from "d3";
import type { Transition } from "motion/react";

import {
	Children,
	cloneElement,
	isValidElement,
	type ReactElement,
	type ReactNode,
} from "react";
import {
	ChartProvider,
	type ChartRenderPhase,
	type LineConfig,
	type Margin,
	type TooltipData,
} from "./contexts/chart-context";
import { useStaticChartPreview } from "./contexts/static-chart-preview-context";
import { useAnimatedYDomains } from "./hooks/use-animated-y-domains";
import {
	type ChartSelection,
	useChartInteraction,
} from "./hooks/use-chart-interaction";
import { useChartPhaseOrchestrator } from "./hooks/use-chart-phase-orchestrator";
import { ChartRevealClip } from "./renderers/chart-reveal-clip";
import {
	DEFAULT_ANIMATION_EASING,
	DEFAULT_CHART_ENTER_TRANSITION,
} from "./utils/animation";
import { shortDateFmt } from "./utils/chart-formatters";
import {
	type ChartPhase,
	type ChartStatus,
	DEFAULT_CHART_STATUS,
	DEFAULT_Y_DOMAIN_TWEEN_MS,
	isChartInteractionPhase,
} from "./utils/chart-phase";
import {
	decimateTimeSeries,
	maxRenderPointsForWidth,
} from "./utils/decimate-time-series";
import { filterDataByXDomain } from "./utils/filter-data-by-x-domain";
import {
	generateChartSkeletonData,
	generateChartSkeletonFromTarget,
} from "./utils/generate-chart-skeleton-data";
import {
	computeSeriesBarRevealClipPadding,
	computeSeriesBarWidth,
} from "./utils/series-bar-layout";
import {
	buildYScalesFromDomains,
	DEFAULT_Y_AXIS_ID,
	getPrimaryYScale,
	groupLinesByYAxisId,
} from "./utils/y-axis-scales";
import { computeYDomainsByAxis } from "./utils/y-domain-utils";

function collectNumericExtents(
	data: Record<string, unknown>[],
	dataKeys: string[],
) {
	let minValue = Number.POSITIVE_INFINITY;
	let maxValue = Number.NEGATIVE_INFINITY;

	for (const d of data) {
		for (const key of dataKeys) {
			const value = d[key];
			if (typeof value === "number") {
				if (value < minValue) {
					minValue = value;
				}
				if (value > maxValue) {
					maxValue = value;
				}
			}
		}
	}

	if (minValue === Number.POSITIVE_INFINITY) {
		return { minValue: 0, maxValue: 100 };
	}

	return { minValue, maxValue };
}

function resolveTimeSeriesYDomain(
	data: Record<string, unknown>[],
	dataKeys: string[],
	yScaleDomainMax: number | undefined,
): [number, number] {
	if (yScaleDomainMax != null && yScaleDomainMax > 0) {
		return [0, yScaleDomainMax * 1.1];
	}

	const { minValue, maxValue } = collectNumericExtents(data, dataKeys);

	if (minValue >= 0) {
		const top = maxValue <= 0 ? 100 : maxValue;
		return [0, top];
	}

	return [minValue, maxValue];
}

function getChartPhase(child: ReactElement): ChartRenderPhase | null {
	const phase = (child.type as { chartPhase?: ChartRenderPhase }).chartPhase;
	return phase ?? null;
}

/** Grid and axes stay visible during series clip reveal (e.g. loading → ready). */
function isClipExcludedComponent(child: ReactElement): boolean {
	return getChartPhase(child) === "clipExcluded";
}

function isOverlayComponent(child: ReactElement): boolean {
	return getChartPhase(child) === "overlay";
}

function isDefComponent(child: ReactElement): boolean {
	return getChartPhase(child) === "defs";
}

function ensureChildKey(child: ReactElement, index: number): ReactElement {
	if (child.key != null) {
		return child;
	}
	return cloneElement(child, { key: `chart-child-${index}` });
}

export interface TimeSeriesChartInnerProps {
	width: number;
	height: number;
	data: Record<string, unknown>[];
	xDataKey: string;
	margin: Margin;
	animationDuration: number;
	animationEasing?: string;
	enterTransition?: Transition;
	/** Signature of motion URL state — triggers reveal replay when it changes. */
	revealSignature?: string;
	children: ReactNode;
	containerRef: React.RefObject<HTMLDivElement | null>;
	/** Series keys driving y-domain and tooltip (Line / Area / SeriesBar configs). */
	lines: LineConfig[];
	/** SVG clipPath id for grow animation. */
	clipPathId: string;
	/** Optional ComposedChart bar layout (forwarded into context). */
	composedBarDataKeys?: string[];
	composedBarSize?: number;
	composedMaxBarSize?: number;
	composedBarGap?: number;
	composedStacked?: boolean;
	composedStackOffsets?: Map<number, Map<string, number>>;
	composedStackGap?: number;
	/** When set, drives the y-axis max instead of scanning `lines` (e.g. stacked bar totals). */
	yScaleDomainMax?: number;
	/** Loading vs ready — drives chart phase until transition orchestration lands. */
	chartStatus?: ChartStatus;
	loadingLabel?: string;
	/** Animate y-domain on status / data transitions. Default: true */
	yDomainTween?: boolean;
	yDomainTweenDuration?: number;
	/** Visible x-domain for brush zoom. When set, y-domain and series use data in this range. */
	xDomain?: [Date, Date];
	/** Full dataset length for x-scale padding when `xDomain` is set. */
	xDomainSlotCount?: number;
	/** Tween y-domain when the visible x-range changes during the ready phase. */
	tweenYDomainOnXDomainChange?: boolean;
	onPhaseChange?: (phase: ChartPhase) => void;
}

export function TimeSeriesChartInner(props: TimeSeriesChartInnerProps) {
	const { width, height } = props;
	if (width < 10 || height < 10) {
		return null;
	}
	return <TimeSeriesChartCore {...props} />;
}

function TimeSeriesChartCore({
	width,
	height,
	data,
	xDataKey,
	margin,
	animationDuration,
	animationEasing = DEFAULT_ANIMATION_EASING,
	enterTransition,
	revealSignature = "",
	children,
	containerRef,
	lines,
	clipPathId,
	composedBarDataKeys,
	composedBarSize,
	composedMaxBarSize,
	composedBarGap,
	composedStacked,
	composedStackOffsets,
	composedStackGap,
	yScaleDomainMax,
	chartStatus = DEFAULT_CHART_STATUS,
	loadingLabel,
	yDomainTween = true,
	yDomainTweenDuration = DEFAULT_Y_DOMAIN_TWEEN_MS,
	xDomain,
	xDomainSlotCount,
	tweenYDomainOnXDomainChange = false,
	onPhaseChange,
}: TimeSeriesChartInnerProps) {
	const staticPreview = useStaticChartPreview();
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	const resolveYDomain = (
		sourceData: Record<string, unknown>[],
		dataKeys: string[],
	) => {
		const axisGroups = groupLinesByYAxisId(lines);
		const usesDefaultOnly =
			axisGroups.size === 1 && axisGroups.has(DEFAULT_Y_AXIS_ID);
		const domainMax =
			usesDefaultOnly && yScaleDomainMax != null ? yScaleDomainMax : undefined;
		return resolveTimeSeriesYDomain(sourceData, dataKeys, domainMax);
	};

	const skeletonData = (() => {
		const primaryKey = lines[0]?.dataKey ?? "value";
		if (data.length === 0) {
			return generateChartSkeletonData({ dataKey: primaryKey });
		}
		return generateChartSkeletonFromTarget(data, primaryKey);
	})();

	const {
		chartPhase,
		plotData,
		revealEpoch,
		concealEpoch,
		isLoaded,
		notifyLoadingPulseComplete,
		notifyRevealConcealComplete,
		notifyYDomainTweenComplete,
	} = useChartPhaseOrchestrator({
		animationDuration,
		chartStatus,
		revealSignature,
		skeletonData,
		skipEnterReveal: staticPreview,
		targetData: data,
		yDomainTweenDuration,
		onPhaseChange,
	});

	const xAccessor = (d: Record<string, unknown>): Date => {
		const value = d[xDataKey];
		return value instanceof Date ? value : new Date(value as string | number);
	};

	const bisectDate = bisector<Record<string, unknown>, Date>((d) =>
		xAccessor(d),
	).left;

	const visiblePlotData = !xDomain
		? plotData
		: filterDataByXDomain(plotData, xDomain, xAccessor);

	const xScale = (() => {
		const minTime = xDomain
			? xDomain[0].getTime()
			: (extent(plotData, (d) => xAccessor(d).getTime())[0] ?? 0);
		const maxTime = xDomain
			? xDomain[1].getTime()
			: (extent(plotData, (d) => xAccessor(d).getTime())[1] ?? minTime);

		return scaleTime({
			range: [0, innerWidth],
			domain: [minTime, maxTime],
		});
	})();

	const seriesSourceData = xDomain ? plotData : visiblePlotData;

	const renderData = (() => {
		const valueKeys = lines.map((line) => line.dataKey);
		return decimateTimeSeries(
			seriesSourceData,
			maxRenderPointsForWidth(innerWidth),
			valueKeys,
		);
	})();

	const columnWidth = (() => {
		const slotCount =
			xDomain && xDomainSlotCount != null
				? xDomainSlotCount
				: visiblePlotData.length;
		if (slotCount < 2) {
			return 0;
		}
		return innerWidth / (slotCount - 1);
	})();

	const yDomainSkeletonByAxis = computeYDomainsByAxis({
		lines,
		resolveDomain: (dataKeys) => resolveYDomain(skeletonData, dataKeys),
	});

	const yDomainTargetByAxis = computeYDomainsByAxis({
		lines,
		resolveDomain: (dataKeys) =>
			resolveYDomain(xDomain ? visiblePlotData : data, dataKeys),
	});

	const animatedYDomainsByAxis = useAnimatedYDomains({
		chartPhase,
		durationMs: yDomainTweenDuration,
		enabled: yDomainTween,
		onSettled: notifyYDomainTweenComplete,
		skeletonByAxis: yDomainSkeletonByAxis,
		targetByAxis: yDomainTargetByAxis,
		tweenOnTargetChange: tweenYDomainOnXDomainChange && xDomain != null,
	});

	const yDomainsForScales = animatedYDomainsByAxis;

	const yScales = buildYScalesFromDomains({
		domainsByAxis: yDomainsForScales,
		innerHeight,
		lines,
	});

	const yScale = getPrimaryYScale(
		yScales,
		scaleLinear({ range: [innerHeight, 0], domain: [0, 100], nice: true }),
	);

	const dateLabels = visiblePlotData.map((d) =>
		shortDateFmt.format(xAccessor(d)),
	);

	const canInteract = isLoaded && isChartInteractionPhase(chartPhase);

	const {
		tooltipData,
		setTooltipData,
		selection,
		clearSelection,
		interactionHandlers,
		interactionStyle,
	} = useChartInteraction({
		bisectDate,
		canInteract,
		data: visiblePlotData,
		lines,
		margin,
		xAccessor,
		xScale,
		yScale,
		yScales,
	});

	return (
		<ChartSvgRenderer
			animationDuration={animationDuration}
			animationEasing={animationEasing}
			chartPhase={chartPhase}
			chartStatus={chartStatus}
			clearSelection={clearSelection}
			clipPathId={clipPathId}
			columnWidth={columnWidth}
			composedBarDataKeys={composedBarDataKeys}
			composedBarGap={composedBarGap}
			composedBarSize={composedBarSize}
			composedMaxBarSize={composedMaxBarSize}
			composedStacked={composedStacked}
			composedStackOffsets={composedStackOffsets}
			composedStackGap={composedStackGap}
			concealEpoch={concealEpoch}
			containerRef={containerRef}
			dateLabels={dateLabels}
			enterTransition={enterTransition}
			height={height}
			innerHeight={innerHeight}
			innerWidth={innerWidth}
			interactionHandlers={interactionHandlers}
			interactionStyle={interactionStyle}
			isLoaded={isLoaded}
			loadingLabel={loadingLabel}
			lines={lines}
			margin={margin}
			notifyLoadingPulseComplete={notifyLoadingPulseComplete}
			notifyRevealConcealComplete={notifyRevealConcealComplete}
			plotData={plotData}
			renderData={renderData}
			revealEpoch={revealEpoch}
			selection={selection}
			setTooltipData={setTooltipData}
			staticPreview={staticPreview}
			tooltipData={tooltipData}
			visiblePlotData={visiblePlotData}
			width={width}
			xAccessor={xAccessor}
			xDomain={xDomain}
			xDomainSlotCount={xDomainSlotCount}
			xScale={xScale}
			yDomainSkeletonByAxis={yDomainSkeletonByAxis}
			yDomainTargetByAxis={yDomainTargetByAxis}
			yDomainTweenDuration={yDomainTweenDuration}
			yScale={yScale}
			yScales={yScales}
		>
			{children}
		</ChartSvgRenderer>
	);
}

interface ChartSvgRendererProps {
	animationDuration: number;
	animationEasing: string;
	chartPhase: ChartPhase;
	chartStatus: ChartStatus;
	children: ReactNode;
	clearSelection: () => void;
	clipPathId: string;
	columnWidth: number;
	composedBarDataKeys?: string[];
	composedBarGap?: number;
	composedBarSize?: number;
	composedMaxBarSize?: number;
	composedStacked?: boolean;
	composedStackOffsets?: Map<number, Map<string, number>>;
	composedStackGap?: number;
	concealEpoch: number;
	containerRef: React.RefObject<HTMLDivElement | null>;
	dateLabels: string[];
	enterTransition?: Transition;
	height: number;
	innerHeight: number;
	innerWidth: number;
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
	isLoaded: boolean;
	loadingLabel?: string;
	lines: LineConfig[];
	margin: Margin;
	notifyLoadingPulseComplete: () => void;
	notifyRevealConcealComplete: () => void;
	plotData: Record<string, unknown>[];
	renderData: Record<string, unknown>[];
	revealEpoch: number;
	selection: ChartSelection | null;
	setTooltipData: React.Dispatch<React.SetStateAction<TooltipData | null>>;
	staticPreview: boolean;
	tooltipData: TooltipData | null;
	visiblePlotData: Record<string, unknown>[];
	width: number;
	xAccessor: (d: Record<string, unknown>) => Date;
	xDomain?: [Date, Date];
	xDomainSlotCount?: number;
	xScale: ReturnType<typeof scaleTime<number>>;
	yDomainSkeletonByAxis: Record<string, [number, number]>;
	yDomainTargetByAxis: Record<string, [number, number]>;
	yDomainTweenDuration: number;
	yScale: ReturnType<typeof scaleLinear<number>>;
	yScales: Record<string, ReturnType<typeof scaleLinear<number>>>;
}

function ChartSvgRenderer(props: ChartSvgRendererProps) {
	const {
		animationDuration,
		animationEasing,
		chartPhase,
		chartStatus,
		children,
		clearSelection,
		clipPathId,
		columnWidth,
		composedBarDataKeys,
		composedBarGap,
		composedBarSize,
		composedMaxBarSize,
		composedStacked,
		composedStackOffsets,
		composedStackGap,
		concealEpoch,
		containerRef,
		dateLabels,
		enterTransition,
		height,
		innerHeight,
		innerWidth,
		interactionHandlers,
		interactionStyle,
		isLoaded,
		loadingLabel,
		lines,
		margin,
		notifyLoadingPulseComplete,
		notifyRevealConcealComplete,
		plotData,
		renderData,
		revealEpoch,
		selection,
		setTooltipData,
		staticPreview,
		tooltipData,
		visiblePlotData,
		width,
		xAccessor,
		xDomain,
		xDomainSlotCount,
		xScale,
		yDomainSkeletonByAxis,
		yDomainTargetByAxis,
		yDomainTweenDuration,
		yScale,
		yScales,
	} = props;

	const defsChildren: ReactElement[] = [];
	const clipExcludedChildren: ReactElement[] = [];
	const clipRevealedChildren: ReactElement[] = [];
	const overlayChildren: ReactElement[] = [];

	Children.forEach(children, (child, index) => {
		if (!isValidElement(child)) {
			return;
		}

		const keyedChild = ensureChildKey(child, index);

		if (isDefComponent(keyedChild)) {
			defsChildren.push(keyedChild);
		} else if (isOverlayComponent(keyedChild)) {
			overlayChildren.push(keyedChild);
		} else if (isClipExcludedComponent(keyedChild)) {
			clipExcludedChildren.push(keyedChild);
		} else {
			clipRevealedChildren.push(keyedChild);
		}
	});

	const contextValue = {
		data: visiblePlotData,
		renderData,
		xScale,
		yScale,
		yScales,
		width,
		height,
		innerWidth,
		innerHeight,
		margin,
		columnWidth,
		tooltipData,
		setTooltipData,
		containerRef,
		lines,
		chartPhase,
		chartStatus,
		loadingLabel,
		yDomainTweenDuration,
		yDomainSkeletonByAxis,
		yDomainTargetByAxis,
		isLoaded,
		animationDuration,
		animationEasing,
		enterTransition,
		revealEpoch,
		notifyLoadingPulseComplete,
		xAccessor,
		dateLabels,
		xDomain,
		xDomainSlotCount,
		selection,
		clearSelection,
		composedBarDataKeys,
		composedBarSize,
		composedMaxBarSize,
		composedBarGap,
		composedStacked,
		composedStackOffsets,
		composedStackGap,
	};

	const useClipReveal =
		!staticPreview &&
		renderData.length > 1 &&
		innerWidth > 0 &&
		animationDuration > 0;
	const isRevealAnimating = chartPhase === "revealing";
	const isRevealConcealing =
		chartPhase === "exitingReady" && animationDuration > 0;

	const effectiveEnterTransition: Transition =
		enterTransition ??
		({
			...DEFAULT_CHART_ENTER_TRANSITION,
			duration: animationDuration / 1000,
		} satisfies Transition);

	const revealClipPadding = !composedBarDataKeys?.length
		? 0
		: (() => {
				const barWidth = computeSeriesBarWidth({
					columnWidth,
					composedBarGap,
					composedBarSize,
					composedMaxBarSize,
					dataLength: plotData.length,
					innerWidth,
					seriesCount: composedBarDataKeys.length,
					stacked: composedStacked,
				});
				return computeSeriesBarRevealClipPadding({
					barWidth,
					gap: composedBarGap,
					seriesCount: composedBarDataKeys.length,
					stacked: composedStacked,
				});
			})();

	function renderDefs(defChildren: ReactNode) {
		return (
			<defs>
				{defChildren}
				{useClipReveal ? (
					<ChartRevealClip
						animating={isRevealAnimating || isRevealConcealing}
						clipPathId={clipPathId}
						enterTransition={effectiveEnterTransition}
						height={innerHeight + 20}
						mode={isRevealConcealing ? "conceal" : "reveal"}
						onComplete={
							isRevealConcealing ? notifyRevealConcealComplete : undefined
						}
						padding={revealClipPadding}
						revealEpoch={isRevealConcealing ? concealEpoch : revealEpoch}
						targetWidth={innerWidth}
					/>
				) : null}
			</defs>
		);
	}

	function renderClipExcluded(clipExcludedChildrenList: ReactNode) {
		return <>{clipExcludedChildrenList}</>;
	}

	function renderClipRevealed(clipRevealedChildrenList: ReactNode) {
		if (useClipReveal) {
			return <g clipPath={`url(#${clipPathId})`}>{clipRevealedChildrenList}</g>;
		}
		return <>{clipRevealedChildrenList}</>;
	}

	function renderOverlay(overlayChildrenList: ReactNode) {
		return <>{overlayChildrenList}</>;
	}

	return (
		<ChartProvider value={contextValue}>
			<svg aria-hidden="true" height={height} width={width}>
				{renderDefs(defsChildren)}

				<rect fill="transparent" height={height} width={width} x={0} y={0} />

				<g
					{...interactionHandlers}
					style={interactionStyle}
					transform={`translate(${margin.left},${margin.top})`}
				>
					<rect
						fill="transparent"
						height={innerHeight}
						width={innerWidth}
						x={0}
						y={0}
					/>

					{renderClipExcluded(clipExcludedChildren)}
					{renderClipRevealed(clipRevealedChildren)}
					{renderOverlay(overlayChildren)}
				</g>
			</svg>
		</ChartProvider>
	);
}
