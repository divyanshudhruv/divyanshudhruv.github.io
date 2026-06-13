"use client";

import { cn } from "@homepage/ui/lib/utils";
import { ParentSize } from "@visx/responsive";
import type { Transition } from "motion/react";
import {
	Children,
	type CSSProperties,
	isValidElement,
	type ReactNode,
	useCallback,
	useMemo,
	useRef,
	useState,
} from "react";
import { Area, type AreaProps } from "./area";
import type { LineConfig, Margin } from "./chart-context";
import { ChartLoadingLabel } from "./chart-loading-label";
import {
	type ChartPhase,
	type ChartStatus,
	DEFAULT_CHART_STATUS,
	DEFAULT_Y_DOMAIN_TWEEN_MS,
	resolveRestingChartPhase,
} from "./chart-phase";
import { SeriesBar, type SeriesBarProps } from "./series-bar";
import { TimeSeriesChartInner } from "./time-series-chart-shell";

export interface ComposedChartProps {
	data: Record<string, unknown>[];
	xDataKey?: string;
	margin?: Partial<Margin>;
	animationDuration?: number;
	animationEasing?: string;
	enterTransition?: Transition;
	revealSignature?: string;
	aspectRatio?: string;
	className?: string;
	status?: ChartStatus;
	loadingLabel?: string;
	yDomainTweenDuration?: number;
	yDomainTween?: boolean;
	xDomain?: [Date, Date];
	xDomainSlotCount?: number;
	tweenYDomainOnXDomainChange?: boolean;
	style?: CSSProperties;
	onPhaseChange?: (phase: ChartPhase) => void;
	children: ReactNode;
	composedBarSize?: number;
	composedMaxBarSize?: number;
	composedBarGap?: number;
	composedStacked?: boolean;
	composedStackGap?: number;
}

const DEFAULT_MARGIN: Margin = { top: 40, right: 40, bottom: 40, left: 40 };

function extractLineConfigs(children: ReactNode): LineConfig[] {
	const configs: LineConfig[] = [];

	Children.forEach(children, (child) => {
		if (!isValidElement(child)) return;

		const props = child.props as AreaProps | SeriesBarProps;

		if (child.type === Area && props?.dataKey) {
			configs.push({
				dataKey: props.dataKey,
				stroke:
					(props as AreaProps).stroke ||
					(props as AreaProps).fill ||
					"var(--chart-line-primary)",
				strokeWidth: (props as AreaProps).strokeWidth || 2,
				yAxisId: (props as AreaProps).yAxisId,
			});
		} else if (child.type === SeriesBar && props?.dataKey) {
			configs.push({
				dataKey: props.dataKey,
				stroke: (props as SeriesBarProps).fill || "var(--chart-line-primary)",
				strokeWidth: 0,
				yAxisId: (props as SeriesBarProps).yAxisId,
			});
		}
	});

	return configs;
}

function extractComposedBarKeys(children: ReactNode): string[] {
	const keys: string[] = [];

	Children.forEach(children, (child) => {
		if (!isValidElement(child)) return;
		if (child.type === SeriesBar) {
			const props = child.props as SeriesBarProps;
			if (props?.dataKey) {
				keys.push(props.dataKey);
			}
		}
	});

	return keys;
}

interface ChartInnerProps {
	width: number;
	height: number;
	data: Record<string, unknown>[];
	xDataKey: string;
	margin: Margin;
	animationDuration: number;
	animationEasing?: string;
	enterTransition?: Transition;
	revealSignature?: string;
	chartStatus: ChartStatus;
	loadingLabel?: string;
	yDomainTweenDuration: number;
	yDomainTween: boolean;
	xDomain?: [Date, Date];
	xDomainSlotCount?: number;
	tweenYDomainOnXDomainChange?: boolean;
	children: ReactNode;
	containerRef: React.RefObject<HTMLDivElement | null>;
	onPhaseChange: (phase: ChartPhase) => void;
	composedBarDataKeys: string[];
	composedBarSize?: number;
	composedMaxBarSize?: number;
	composedBarGap?: number;
	composedStacked?: boolean;
	composedStackGap?: number;
}

function ChartInner({
	width,
	height,
	data,
	xDataKey,
	margin,
	animationDuration,
	animationEasing,
	enterTransition,
	revealSignature,
	chartStatus,
	loadingLabel,
	yDomainTweenDuration,
	yDomainTween,
	xDomain,
	xDomainSlotCount,
	tweenYDomainOnXDomainChange,
	children,
	containerRef,
	onPhaseChange,
	composedBarDataKeys,
	composedBarSize,
	composedMaxBarSize,
	composedBarGap,
	composedStacked,
	composedStackGap,
}: ChartInnerProps) {
	const lines = useMemo(() => extractLineConfigs(children), [children]);

	return (
		<TimeSeriesChartInner
			animationDuration={animationDuration}
			animationEasing={animationEasing}
			chartStatus={chartStatus}
			clipPathId="chart-area-grow-clip"
			containerRef={containerRef}
			data={data}
			enterTransition={enterTransition}
			height={height}
			lines={lines}
			loadingLabel={loadingLabel}
			margin={margin}
			onPhaseChange={onPhaseChange}
			revealSignature={revealSignature}
			tweenYDomainOnXDomainChange={tweenYDomainOnXDomainChange}
			width={width}
			xDataKey={xDataKey}
			xDomain={xDomain}
			xDomainSlotCount={xDomainSlotCount}
			yDomainTween={yDomainTween}
			yDomainTweenDuration={yDomainTweenDuration}
			composedBarDataKeys={composedBarDataKeys}
			composedBarSize={composedBarSize}
			composedMaxBarSize={composedMaxBarSize}
			composedBarGap={composedBarGap}
			composedStacked={composedStacked}
			composedStackGap={composedStackGap}
		>
			{children}
		</TimeSeriesChartInner>
	);
}

export function ComposedChart({
	data,
	xDataKey = "date",
	margin: marginProp,
	animationDuration = 1100,
	animationEasing,
	enterTransition,
	revealSignature,
	aspectRatio = "2 / 1",
	className = "",
	status = DEFAULT_CHART_STATUS,
	loadingLabel,
	yDomainTweenDuration = DEFAULT_Y_DOMAIN_TWEEN_MS,
	yDomainTween = true,
	xDomain,
	xDomainSlotCount,
	tweenYDomainOnXDomainChange = false,
	style,
	onPhaseChange,
	composedBarSize,
	composedMaxBarSize,
	composedBarGap,
	composedStacked,
	composedStackGap,
	children,
}: ComposedChartProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const margin = { ...DEFAULT_MARGIN, ...marginProp };
	const [chartPhase, setChartPhase] = useState<ChartPhase>(() =>
		resolveRestingChartPhase(status),
	);
	const handlePhaseChange = useCallback(
		(phase: ChartPhase) => {
			setChartPhase(phase);
			onPhaseChange?.(phase);
		},
		[onPhaseChange],
	);

	const composedBarDataKeys = useMemo(
		() => extractComposedBarKeys(children),
		[children],
	);

	const showLoadingLabel = Boolean(
		loadingLabel?.trim() &&
			(chartPhase === "loading" ||
				chartPhase === "exiting" ||
				chartPhase === "gridTweenReady" ||
				chartPhase === "revealingLoading"),
	);

	return (
		<div
			className={cn("relative w-full", className)}
			ref={containerRef}
			style={{ aspectRatio, touchAction: "none", ...style }}
		>
			<ParentSize debounceTime={10}>
				{({ width, height }) => (
					<ChartInner
						animationDuration={animationDuration}
						animationEasing={animationEasing}
						chartStatus={status}
						containerRef={containerRef}
						data={data}
						enterTransition={enterTransition}
						height={height}
						loadingLabel={loadingLabel}
						margin={margin}
						onPhaseChange={handlePhaseChange}
						revealSignature={revealSignature}
						tweenYDomainOnXDomainChange={tweenYDomainOnXDomainChange}
						width={width}
						xDataKey={xDataKey}
						xDomain={xDomain}
						xDomainSlotCount={xDomainSlotCount}
						yDomainTween={yDomainTween}
						yDomainTweenDuration={yDomainTweenDuration}
						composedBarDataKeys={composedBarDataKeys}
						composedBarSize={composedBarSize}
						composedMaxBarSize={composedMaxBarSize}
						composedBarGap={composedBarGap}
						composedStacked={composedStacked}
						composedStackGap={composedStackGap}
					>
						{children}
					</ChartInner>
				)}
			</ParentSize>
			{showLoadingLabel ? (
				<ChartLoadingLabel
					exiting={chartPhase !== "loading"}
					text={loadingLabel}
				/>
			) : null}
		</div>
	);
}

export { Area } from "./area";
export { SeriesBar } from "./series-bar";
