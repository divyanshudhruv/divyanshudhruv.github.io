"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
	type ChartPhase,
	type ChartStatus,
	resolveRestingChartPhase,
} from "./chart-phase";

export interface UseChartPhaseOrchestratorOptions {
	chartStatus: ChartStatus;
	targetData: Record<string, unknown>[];
	skeletonData: Record<string, unknown>[];
	animationDuration: number;
	yDomainTweenDuration: number;
	/** Signature of motion URL state — replays clip reveal in Studio. */
	revealSignature?: string;
	/** Skip mount/signature enter reveal (static docs previews). */
	skipEnterReveal?: boolean;
	/** Called synchronously when chartPhase transitions to a new value. */
	onPhaseChange?: (phase: ChartPhase) => void;
}

export function useChartPhaseOrchestrator({
	chartStatus,
	targetData,
	skeletonData,
	animationDuration,
	yDomainTweenDuration,
	revealSignature = "",
	skipEnterReveal = false,
	onPhaseChange,
}: UseChartPhaseOrchestratorOptions) {
	const [chartPhase, setChartPhaseState] = useState<ChartPhase>(() =>
		resolveRestingChartPhase(chartStatus),
	);
	const [revealEpoch, setRevealEpoch] = useState(0);
	const [concealEpoch, setConcealEpoch] = useState(0);
	const prevStatusRef = useRef(chartStatus);
	const phaseRef = useRef(chartPhase);
	const onPhaseChangeRef = useRef(onPhaseChange);

	useEffect(() => {
		onPhaseChangeRef.current = onPhaseChange;
	}, [onPhaseChange]);

	const plotData = useMemo(() => {
		switch (chartPhase) {
			case "loading":
				return chartStatus === "loading" ? skeletonData : targetData;
			case "exiting":
				return skeletonData;
			case "exitingReady":
			case "gridTweenLoading":
			case "gridTweenReady":
			case "revealing":
			case "ready":
				return targetData;
			default:
				return targetData;
		}
	}, [chartPhase, chartStatus, skeletonData, targetData]);

	const isLoaded = chartPhase === "ready";

	const setChartPhase = useCallback((phase: ChartPhase) => {
		setChartPhaseState(phase);
		phaseRef.current = phase;
		onPhaseChangeRef.current?.(phase);
	}, []);

	useEffect(() => {
		phaseRef.current = chartPhase;
	}, [chartPhase]);

	useEffect(() => {
		const prevStatus = prevStatusRef.current;
		if (prevStatus === chartStatus) {
			return;
		}
		prevStatusRef.current = chartStatus;

		if (chartStatus === "ready" && prevStatus === "loading") {
			if (animationDuration <= 0) {
				if (yDomainTweenDuration <= 0) {
					// react-doctor-disable-next-line react-hooks-js/set-state-in-effect
					setChartPhase("revealing");
				} else {
					setChartPhase("gridTweenReady");
				}
			} else {
				setChartPhase("exiting");
			}
			return;
		}

		if (chartStatus === "loading" && prevStatus === "ready") {
			if (animationDuration <= 0) {
				if (yDomainTweenDuration <= 0) {
					setChartPhase("loading");
				} else {
					setChartPhase("gridTweenLoading");
				}
			} else {
				setConcealEpoch((epoch) => epoch + 1);
				setChartPhase("exitingReady");
			}
		}
	}, [
		animationDuration,
		chartStatus,
		skeletonData,
		targetData,
		yDomainTweenDuration,
	]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: revealSignature replays enter
	useEffect(() => {
		if (skipEnterReveal) {
			return;
		}
		if (chartStatus !== "ready") {
			return;
		}
		if (phaseRef.current !== "ready") {
			return;
		}

		setChartPhase("revealing");
	}, [animationDuration, chartStatus, revealSignature, skipEnterReveal]);

	/** Loading pulse exit finished — tween grid to ready spacing next. */
	const notifyLoadingPulseComplete = useCallback(() => {
		if (phaseRef.current !== "exiting") {
			return;
		}
		setChartPhase("gridTweenReady");
	}, []);

	/** Ready series conceal finished — tween grid to loading spacing next. */
	const notifyRevealConcealComplete = useCallback(() => {
		if (phaseRef.current !== "exitingReady") {
			return;
		}
		setChartPhase("gridTweenLoading");
	}, []);

	/** Grid tween finished — enter the next resting phase. */
	const notifyYDomainTweenComplete = useCallback(() => {
		if (phaseRef.current === "gridTweenLoading") {
			setChartPhase("loading");
			return;
		}
		if (phaseRef.current === "gridTweenReady") {
			setChartPhase("revealing");
		}
	}, []);

	useEffect(() => {
		if (chartPhase !== "revealing") {
			return;
		}

		// react-doctor-disable-next-line react-hooks-js/set-state-in-effect
		setRevealEpoch((epoch) => epoch + 1);
		if (animationDuration <= 0) {
			// react-doctor-disable-next-line react-hooks-js/set-state-in-effect
			setChartPhase("ready");
			return;
		}

		const timer = window.setTimeout(() => {
			setChartPhase("ready");
		}, animationDuration);
		return () => window.clearTimeout(timer);
	}, [animationDuration, chartPhase]);

	return {
		chartPhase,
		plotData,
		revealEpoch,
		concealEpoch,
		isLoaded,
		notifyLoadingPulseComplete,
		notifyRevealConcealComplete,
		notifyYDomainTweenComplete,
	};
}
