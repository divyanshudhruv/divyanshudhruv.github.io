"use client";

import { cn } from "@homepage/ui/lib/utils";
import NumberFlow from "@number-flow/react";
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "motion/react";
import { useState } from "react";

const Skiper89 = () => {
	const { scrollYProgress } = useScroll();
	const [progressPercent, setProgressPercent] = useState(0);

	const clampedProgress = useTransform(scrollYProgress, (value) =>
		Math.min(Math.max(value, 0), 1),
	);
	const progressAsPercent = useTransform(clampedProgress, (value) =>
		Math.round(value * 100),
	);

	useMotionValueEvent(progressAsPercent, "change", (value) => {
		setProgressPercent(value);
	});

	const svgRadius = 18;
	const circumference = 2 * Math.PI * svgRadius;

	return (
		<div
			className={cn(
				"flex w-full max-w-3xl flex-col items-center justify-center gap-[10vh] py-[50vh]",
			)}
		>
			<motion.div
				drag
				dragMomentum={false}
				className={cn(
					"group fixed right-4 bottom-4 cursor-grab items-center gap-1 active:cursor-grabbing",
				)}
			>
				<NumberFlow
					value={progressPercent}
					className={cn(
						"absolute top-1 flex h-8 -translate-y-full items-center justify-center px-4 font-medium text-foreground/20 text-xs tabular-nums opacity-0 group-hover:opacity-100",
					)}
					suffix="%"
				/>
				<div className="flex size-12 items-center justify-center rounded-2xl border bg-background/30 backdrop-blur">
					<svg
						className={cn("size-10")}
						viewBox="0 0 48 48"
						role="presentation"
					>
						<circle
							cx="24"
							cy="24"
							r={svgRadius}
							stroke="currentColor"
							strokeWidth="3"
							className={cn("opacity-30")}
							fill="none"
						/>
						<motion.circle
							cx="24"
							cy="24"
							r={svgRadius}
							stroke="currentColor"
							strokeWidth="3"
							fill="none"
							strokeLinecap="round"
							strokeDasharray={`${circumference}`}
							style={{
								pathLength: clampedProgress,
								rotate: -90,
								transformOrigin: "50% 50%",
							}}
						/>
					</svg>
				</div>
			</motion.div>

			<div className="-mt-10 mb-20 grid content-start justify-items-center gap-6 text-center">
				<span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:to-foreground after:content-['']">
					see the progress while scroll
				</span>
			</div>

			{Array.from({ length: 20 }).map((_, index) => (
				<div
					key={index}
					className={cn(
						"flex items-center justify-center px-4 text-justify text-base text-foreground/70 leading-relaxed",
					)}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
					fugiat sint eos itaque soluta provident voluptatibus mollitia? Quas
					sit excepturi minima at id nihil consectetur libero, eligendi dicta
					molestias itaque delectus ullam facilis omnis voluptatibus hic
					mollitia deleniti sed earum voluptates reprehenderit commodi porro
					assumenda eum! Doloremque est quasi temporibus!
				</div>
			))}
		</div>
	);
};

export { Skiper89 };
