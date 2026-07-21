"use client";

import { cn } from "@homepage/ui/lib/utils";
import { useReducedMotion, type Variants } from "motion/react";
import * as m from "motion/react-m";
import { type ComponentProps, useCallback } from "react";

export type ShimmeringTextProps = Omit<
	ComponentProps<typeof m.span>,
	"children"
> & {
	/** The text to render with the shimmering effect. */
	text: string;
	/**
	 * Duration in seconds for one shimmer cycle.
	 * @defaultValue 1
	 */
	duration?: number;
	/**
	 * Whether the shimmer animation is paused.
	 * @defaultValue false
	 */
	isStopped?: boolean;
};

export function ShimmeringText({
	text,
	duration = 1,
	isStopped = false,
	className,
	...props
}: ShimmeringTextProps) {
	const reducedMotion = useReducedMotion();
	const stopped = isStopped || reducedMotion === true;

	const createCharVariants = useCallback(
		(charIndex: number): Variants => ({
			running: {
				color: ["var(--color)", "var(--shimmering-color)", "var(--color)"],
				transition: {
					duration,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "loop",
					repeatDelay: text.length * 0.05,
					delay: (charIndex * duration) / text.length,
					ease: "easeInOut",
				},
			},
			stopped: {
				color: "var(--color)",
				transition: {
					duration: duration * 0.5,
					ease: "easeOut",
				},
			},
		}),
		[duration, text.length],
	);

	return (
		<m.span
			className={cn(
				"inline-flex select-none items-center leading-none",
				"[--color:var(--muted-foreground)] [--shimmering-color:var(--foreground)]",
				className,
			)}
			{...props}
		>
			{text.split("").map((char, index) => (
				<m.span
					animate={stopped ? "stopped" : "running"}
					aria-hidden
					className="inline-block whitespace-pre leading-none"
					initial="stopped"
					key={index}
					variants={createCharVariants(index)}
				>
					{char}
				</m.span>
			))}
			<span className="sr-only">{text}</span>
		</m.span>
	);
}
