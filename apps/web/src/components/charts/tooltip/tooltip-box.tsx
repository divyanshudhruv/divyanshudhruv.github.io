"use client";

import { cn } from "@homepage/ui/lib/utils";
import { useSpring } from "motion/react";
import * as m from "motion/react-m";
import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
	type SpringConfig,
	useChartConfig,
} from "../contexts/chart-config-context";

export interface TooltipBoxProps {
	/** X position in pixels (relative to container) */
	x: number;
	/** Y position in pixels (relative to container) */
	y: number;
	/** Whether the tooltip is visible */
	visible: boolean;
	/** Container ref for portal rendering */
	containerRef: RefObject<HTMLDivElement | null>;
	/** Container width for flip detection */
	containerWidth: number;
	/** Container height for bounds clamping */
	containerHeight: number;
	/** Offset from the target position */
	offset?: number;
	/** Custom class name */
	className?: string;
	/** Tooltip content */
	children: React.ReactNode;
	/** Override left position (bypasses internal calculation) */
	left?: number | ReturnType<typeof useSpring>;
	/** Override top position (bypasses internal calculation) */
	top?: number | ReturnType<typeof useSpring>;
	/** Force flip direction (for custom positioning) */
	flipped?: boolean;
	/** Per-chart override; falls back to `ChartConfigProvider.tooltipBoxSpring`. */
	springConfig?: SpringConfig;
	/** Animate panel position with a spring. Default: true */
	animate?: boolean;
	/** Inline styles for the inner tooltip panel. */
	panelStyle?: React.CSSProperties;
}

// Inner-only-on-visible so `useSpring` initializes at the cursor's actual x/y
// instead of (0, 0) on first hover.
export function TooltipBox(props: TooltipBoxProps) {
	const [mounted] = useState(true);

	const container = props.containerRef.current;
	if (!(mounted && container)) {
		return null;
	}
	if (!props.visible) {
		return null;
	}
	return <TooltipBoxInner {...props} container={container} />;
}

function TooltipBoxInner({
	x,
	y,
	containerWidth,
	containerHeight,
	offset = 16,
	className = "",
	children,
	left: leftOverride,
	top: topOverride,
	flipped: flippedOverride,
	springConfig,
	animate = true,
	panelStyle,
	container,
}: Omit<TooltipBoxProps, "visible" | "containerRef"> & {
	container: HTMLElement;
}) {
	const { tooltipBoxSpring } = useChartConfig();
	const effectiveSpring = springConfig ?? tooltipBoxSpring;

	const tooltipRef = useRef<HTMLDivElement>(null);
	const [measuredSize, setMeasuredSize] = useState({ w: 180, h: 80 });
	const [staticPosition, setStaticPosition] = useState({ left: x, top: y });

	const { w: tw, h: th } = measuredSize;
	const shouldFlipX = x + tw + offset > containerWidth;
	const targetX = shouldFlipX ? x - offset - tw : x + offset;
	const targetY = Math.max(
		offset,
		Math.min(y - th / 2, containerHeight - th - offset),
	);

	const animatedLeft = useSpring(targetX, effectiveSpring);
	const animatedTop = useSpring(targetY, effectiveSpring);

	useEffect(() => {
		if (animate && leftOverride === undefined) {
			animatedLeft.set(targetX);
		}
	}, [animate, leftOverride, animatedLeft, targetX]);

	useEffect(() => {
		if (animate && topOverride === undefined) {
			animatedTop.set(targetY);
		}
	}, [animate, topOverride, animatedTop, targetY]);

	useEffect(() => {
		if (!tooltipRef.current) {
			return;
		}
		const el = tooltipRef.current;
		const w = el.offsetWidth;
		const h = el.offsetHeight;
		if (w > 0 && h > 0 && (w !== measuredSize.w || h !== measuredSize.h)) {
			setMeasuredSize({ w, h });
		}
		const { w: w2, h: h2 } = measuredSize;
		const flip = x + w2 + offset > containerWidth;
		const tx = flip ? x - offset - w2 : x + offset;
		const ty = Math.max(
			offset,
			Math.min(y - h2 / 2, containerHeight - h2 - offset),
		);
		if (!animate) {
			setStaticPosition({ left: tx, top: ty });
			return;
		}
		if (leftOverride === undefined) {
			animatedLeft.set(tx);
		}
		if (topOverride === undefined) {
			animatedTop.set(ty);
		}
	}, [
		x,
		y,
		containerWidth,
		containerHeight,
		offset,
		leftOverride,
		topOverride,
		animate,
		animatedLeft,
		animatedTop,
		measuredSize,
	]);

	const prevFlipRef = useRef(shouldFlipX);
	const [flipKey, setFlipKey] = useState(0);

	useEffect(() => {
		if (prevFlipRef.current !== shouldFlipX) {
			setFlipKey((k) => k + 1);
			prevFlipRef.current = shouldFlipX;
		}
	}, [shouldFlipX]);

	const finalLeft = animate
		? (leftOverride ?? animatedLeft)
		: staticPosition.left;
	const finalTop = animate ? (topOverride ?? animatedTop) : staticPosition.top;
	const isFlipped = flippedOverride ?? shouldFlipX;
	const transformOrigin = isFlipped ? "right top" : "left top";

	return createPortal(
		<m.div
			animate={{ opacity: 1 }}
			className={cn("pointer-events-none absolute z-50", className)}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			ref={tooltipRef}
			style={{ left: finalLeft, top: finalTop }}
			transition={{ duration: 0.1 }}
		>
			<m.div
				animate={{ scale: 1, opacity: 1, x: 0 }}
				className="min-w-[140px] overflow-hidden rounded-lg bg-chart-tooltip-background text-chart-tooltip-foreground shadow-lg backdrop-blur-md"
				initial={{ scale: 0.85, opacity: 0, x: isFlipped ? 20 : -20 }}
				key={flipKey}
				style={{ transformOrigin, ...panelStyle }}
				transition={{ type: "spring", stiffness: 300, damping: 25 }}
			>
				{children}
			</m.div>
		</m.div>,
		container,
	);
}

TooltipBox.displayName = "TooltipBox";

export default TooltipBox;
