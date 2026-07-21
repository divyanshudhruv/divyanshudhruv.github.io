import type { ChartPhase } from "./chart-phase";

export type LineLoadingPulseMode = "loop" | "exit" | "enter";

export function resolveLineLoadingPulseMode(
	phase: ChartPhase,
): LineLoadingPulseMode | null {
	switch (phase) {
		case "loading":
			return "loop";
		case "exiting":
			return "exit";
		case "revealingLoading":
			return "enter";
		default:
			return null;
	}
}
