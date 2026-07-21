"use client";

import { useEffect, useReducer, useRef } from "react";
import {
	type ChartPhase,
	type ChartStatus,
	resolveRestingChartPhase,
} from "../utils/chart-phase";

export interface UseChartPhaseOrchestratorOptions {
	chartStatus: ChartStatus;
	targetData: Record<string, unknown>[];
	skeletonData: Record<string, unknown>[];
	animationDuration: number;
	yDomainTweenDuration: number;
	revealSignature?: string;
	skipEnterReveal?: boolean;
	onPhaseChange?: (phase: ChartPhase) => void;
}

interface PhaseState {
	chartPhase: ChartPhase;
	revealEpoch: number;
	concealEpoch: number;
}

type PhaseAction =
	| {
			type: "status-change";
			chartStatus: ChartStatus;
			animationDuration: number;
			yDomainTweenDuration: number;
	  }
	| { type: "set-phase"; phase: ChartPhase }
	| { type: "increment-reveal-epoch" }
	| { type: "increment-conceal-epoch" };

function phaseReducer(state: PhaseState, action: PhaseAction): PhaseState {
	switch (action.type) {
		case "status-change": {
			if (action.chartStatus === "ready") {
				if (action.animationDuration <= 0) {
					if (action.yDomainTweenDuration <= 0) {
						return { ...state, chartPhase: "revealing" };
					}
					return { ...state, chartPhase: "gridTweenReady" };
				}
				return { ...state, chartPhase: "exiting" };
			}
			if (action.chartStatus === "loading") {
				if (action.animationDuration <= 0) {
					if (action.yDomainTweenDuration <= 0) {
						return { ...state, chartPhase: "loading" };
					}
					return { ...state, chartPhase: "gridTweenLoading" };
				}
				return {
					...state,
					chartPhase: "exitingReady",
					concealEpoch: state.concealEpoch + 1,
				};
			}
			return state;
		}
		case "set-phase":
			return { ...state, chartPhase: action.phase };
		case "increment-reveal-epoch":
			return { ...state, revealEpoch: state.revealEpoch + 1 };
		case "increment-conceal-epoch":
			return { ...state, concealEpoch: state.concealEpoch + 1 };
	}
}

("use memo");

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
	const [{ chartPhase, revealEpoch, concealEpoch }, dispatch] = useReducer(
		phaseReducer,
		{
			chartPhase: resolveRestingChartPhase(chartStatus),
			revealEpoch: 0,
			concealEpoch: 0,
		},
	);

	const prevStatusRef = useRef(chartStatus);
	const phaseRef = useRef(chartPhase);
	const onPhaseChangeRef = useRef(onPhaseChange);
	const prevPhaseRef = useRef(chartPhase);

	useEffect(() => {
		onPhaseChangeRef.current = onPhaseChange;
	}, [onPhaseChange]);

	useEffect(() => {
		phaseRef.current = chartPhase;
	}, [chartPhase]);

	useEffect(() => {
		if (prevPhaseRef.current !== chartPhase) {
			prevPhaseRef.current = chartPhase;
			onPhaseChangeRef.current?.(chartPhase);
		}
	}, [chartPhase]);

	useEffect(() => {
		const prevStatus = prevStatusRef.current;
		if (prevStatus === chartStatus) {
			return;
		}
		prevStatusRef.current = chartStatus;
		dispatch({
			type: "status-change",
			chartStatus,
			animationDuration,
			yDomainTweenDuration,
		});
	}, [animationDuration, chartStatus, yDomainTweenDuration]);

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
		dispatch({ type: "set-phase", phase: "revealing" });
	}, [animationDuration, chartStatus, revealSignature, skipEnterReveal]);

	function notifyLoadingPulseComplete() {
		if (phaseRef.current !== "exiting") {
			return;
		}
		dispatch({ type: "set-phase", phase: "gridTweenReady" });
	}

	function notifyRevealConcealComplete() {
		if (phaseRef.current !== "exitingReady") {
			return;
		}
		dispatch({ type: "set-phase", phase: "gridTweenLoading" });
	}

	function notifyYDomainTweenComplete() {
		if (phaseRef.current === "gridTweenLoading") {
			dispatch({ type: "set-phase", phase: "loading" });
			return;
		}
		if (phaseRef.current === "gridTweenReady") {
			dispatch({ type: "set-phase", phase: "revealing" });
		}
	}

	useEffect(() => {
		if (chartPhase !== "revealing") {
			return;
		}
		dispatch({ type: "increment-reveal-epoch" });
		if (animationDuration <= 0) {
			dispatch({ type: "set-phase", phase: "ready" });
			return;
		}
		const timer = window.setTimeout(() => {
			dispatch({ type: "set-phase", phase: "ready" });
		}, animationDuration);
		return () => window.clearTimeout(timer);
	}, [animationDuration, chartPhase]);

	function computePlotData() {
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
	}
	const plotData = computePlotData();

	return {
		chartPhase,
		plotData,
		revealEpoch,
		concealEpoch,
		isLoaded: chartPhase === "ready",
		notifyLoadingPulseComplete,
		notifyRevealConcealComplete,
		notifyYDomainTweenComplete,
	};
}
