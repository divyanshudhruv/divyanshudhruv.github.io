import type { SpringConfig } from "./chart-config-context";

const DEFAULT_CHART_CONFIG_TOOLTIP_BOX = {
	stiffness: 100,
	damping: 30,
} as const;
const DEFAULT_TOOLTIP_BOX_DAMPING = DEFAULT_CHART_CONFIG_TOOLTIP_BOX.damping;

export function resolveTooltipBoxMotion(damping?: number): {
	animate: boolean;
	springConfig: SpringConfig;
} {
	if (damping === 0) {
		return {
			animate: false,
			springConfig: DEFAULT_CHART_CONFIG_TOOLTIP_BOX,
		};
	}

	const effectiveDamping = damping ?? DEFAULT_TOOLTIP_BOX_DAMPING;
	let stiffness = DEFAULT_CHART_CONFIG_TOOLTIP_BOX.stiffness;

	if (effectiveDamping < DEFAULT_TOOLTIP_BOX_DAMPING) {
		const t =
			(DEFAULT_TOOLTIP_BOX_DAMPING - effectiveDamping) /
			DEFAULT_TOOLTIP_BOX_DAMPING;
		stiffness += t * 400;
	} else if (effectiveDamping > DEFAULT_TOOLTIP_BOX_DAMPING) {
		const t =
			(effectiveDamping - DEFAULT_TOOLTIP_BOX_DAMPING) /
			(100 - DEFAULT_TOOLTIP_BOX_DAMPING);
		stiffness -= t * 85;
	}

	return {
		animate: true,
		springConfig: {
			stiffness: Math.max(12, Math.round(stiffness)),
			damping: effectiveDamping,
		},
	};
}
