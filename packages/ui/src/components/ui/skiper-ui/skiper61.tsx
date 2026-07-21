"use client";

// TODO create a how to collection and plce it in them

import { motion, useMotionValue, useSpring } from "framer-motion";
import React from "react";

const SPRING = {
	mass: 0.1, // avoid Controls inertia (how sluggish or responsive the object feels). Lower mass = snappier motion; higher mass = lethargic motion
	damping: 10, // its like the weight of the ball heavier the ball less it will bounce or harder the rubber band the more it will bounce
	stiffness: 131, // like rubber Band the more you strech the more speed it goes back to the original position
};

const SimpleMouseFollow = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const opacity = useMotionValue(0);

	React.useEffect(() => {
		const handlePointerMove = (e: PointerEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};
		const handlePointerEnter = () => opacity.set(1);
		const handlePointerLeave = () => opacity.set(0);

		document.addEventListener("pointermove", handlePointerMove);
		document.addEventListener("pointerenter", handlePointerEnter);
		document.addEventListener("pointerleave", handlePointerLeave);

		return () => {
			document.removeEventListener("pointermove", handlePointerMove);
			document.removeEventListener("pointerenter", handlePointerEnter);
			document.removeEventListener("pointerleave", handlePointerLeave);
		};
	}, [y.set, x.set, opacity.set]);

	return (
		<div className="pointer-events-none fixed inset-0 z-50 cursor-none">
			<motion.div
				style={{
					x,
					y,
					opacity,
				}}
				className="size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cccccc90]"
			/>
		</div>
	);
};

const SpringMouseFollow = () => {
	const xSpring = useSpring(0, SPRING);
	const ySpring = useSpring(0, SPRING);
	const opacitySpring = useSpring(0, SPRING);
	const scaleSpring = useSpring(0, SPRING);

	return (
		<div
			onPointerMove={(e) => {
				const bounds = e.currentTarget.getBoundingClientRect();
				xSpring.set(e.clientX - bounds.left);
				ySpring.set(e.clientY - bounds.top);
			}}
			onPointerEnter={() => {
				opacitySpring.set(1);
				scaleSpring.set(1);
			}}
			onPointerLeave={() => {
				opacitySpring.set(0);
				scaleSpring.set(0);
			}}
			className="mt-20 size-[500px] overflow-hidden rounded-4xl bg-background"
		>
			<motion.div
				style={{
					x: xSpring,
					y: ySpring,
					opacity: opacitySpring,
					scale: scaleSpring,
				}}
				className="size-10 rounded-4xl bg-orange-500"
			/>
		</div>
	);
};

export { SimpleMouseFollow, SpringMouseFollow };
