"use client";

import { useSpring } from "motion/react";
import * as m from "motion/react-m";
import { useEffect } from "react";
import {
	type SpringConfig,
	useChartConfig,
} from "@/components/charts/contexts/chart-config-context";
import { chartCssVars } from "@/components/charts/contexts/chart-context";

export interface TooltipDotProps {
	x: number;
	y: number;
	visible: boolean;
	color: string;
	size?: number;
	strokeColor?: string;
	strokeWidth?: number;
	/** Per-chart override; falls back to `ChartConfigProvider.tooltipSpring`. */
	springConfig?: SpringConfig;
	/** Animate position with a spring. Default: true */
	animate?: boolean;
}

export function TooltipDot({
	x,
	y,
	visible,
	color,
	size = 5,
	strokeColor = chartCssVars.background,
	strokeWidth = 2,
	springConfig,
	animate = true,
}: TooltipDotProps) {
	const { tooltipSpring } = useChartConfig();
	const effectiveSpring = springConfig ?? tooltipSpring;
	const animatedX = useSpring(x, effectiveSpring);
	const animatedY = useSpring(y, effectiveSpring);

	useEffect(() => {
		if (animate) {
			animatedX.set(x);
			animatedY.set(y);
		}
	}, [animate, animatedX, animatedY, x, y]);

	if (!visible) {
		return null;
	}

	if (!animate) {
		return (
			<circle
				cx={x}
				cy={y}
				fill={color}
				r={size}
				stroke={strokeColor}
				strokeWidth={strokeWidth}
			/>
		);
	}

	return (
		<m.circle
			cx={animatedX}
			cy={animatedY}
			fill={color}
			r={size}
			stroke={strokeColor}
			strokeWidth={strokeWidth}
		/>
	);
}

TooltipDot.displayName = "TooltipDot";

export default TooltipDot;
