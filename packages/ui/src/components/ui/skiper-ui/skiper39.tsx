"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface CrowdCanvasProps {
	src: string;
	rows?: number;
	cols?: number;
}

export default function CrowdCanvas({
	src,
	rows = 15,
	cols = 7,
}: CrowdCanvasProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const config = {
			src,
			rows,
			cols,
		};

		// UTILS
		const randomRange = (min: number, max: number) =>
			min + Math.random() * (max - min);
		// biome-ignore lint/suspicious/noExplicitAny: GSAP animation types not portable
		const randomIndex = (array: any[]) => randomRange(0, array.length) | 0;
		// biome-ignore lint/suspicious/noExplicitAny: GSAP animation types not portable
		const removeFromArray = (array: any[], i: number) => array.splice(i, 1)[0];
		// biome-ignore lint/suspicious/noExplicitAny: GSAP animation types not portable
		const removeItemFromArray = (array: any[], item: any) =>
			removeFromArray(array, array.indexOf(item));
		// biome-ignore lint/suspicious/noExplicitAny: GSAP animation types not portable
		const removeRandomFromArray = (array: any[]) =>
			removeFromArray(array, randomIndex(array));
		// biome-ignore lint/suspicious/noExplicitAny: GSAP animation types not portable
		const getRandomFromArray = (array: any[]) => array[randomIndex(array) | 0];

		// TWEEN FACTORIES
		// biome-ignore lint/suspicious/noExplicitAny: GSAP animation types not portable
		const resetPeep = ({ stage, peep }: { stage: any; peep: any }) => {
			const direction = Math.random() > 0.5 ? 1 : -1;
			const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random());
			const startY = stage.height - peep.height + offsetY;
			let startX: number;
			let endX: number;

			if (direction === 1) {
				startX = -peep.width;
				endX = stage.width;
				peep.scaleX = 1;
			} else {
				startX = stage.width + peep.width;
				endX = 0;
				peep.scaleX = -1;
			}

			peep.x = startX;
			peep.y = startY;
			peep.anchorY = startY;

			return {
				startX,
				startY,
				endX,
			};
		};

		const normalWalk = ({
			peep,
			// biome-ignore lint/correctness/noUnusedFunctionParameters: nested destructure, used via startX/startY/endX
			props: { startX, startY, endX },
		}: {
			// biome-ignore lint/suspicious/noExplicitAny: GSAP animation types not portable
			peep: any;
			// biome-ignore lint/suspicious/noExplicitAny: GSAP animation types not portable
			props: any;
		}) => {
			const xDuration = 10;
			const yDuration = 0.25;

			const tl = gsap.timeline();
			tl.timeScale(randomRange(0.5, 1.5));
			tl.to(
				peep,
				{
					duration: xDuration,
					x: endX,
					ease: "none",
				},
				0,
			);
			tl.to(
				peep,
				{
					duration: yDuration,
					repeat: xDuration / yDuration,
					yoyo: true,
					y: startY - 10,
				},
				0,
			);

			return tl;
		};

		const walks = [normalWalk];

		// TYPES
		type Peep = {
			image: HTMLImageElement;
			rect: number[];
			width: number;
			height: number;
			// biome-ignore lint/suspicious/noExplicitAny: GSAP timeline type not portable
			drawArgs: any[];
			x: number;
			y: number;
			anchorY: number;
			scaleX: number;
			// biome-ignore lint/suspicious/noExplicitAny: GSAP timeline type not portable
			walk: any;
			setRect: (rect: number[]) => void;
			render: (ctx: CanvasRenderingContext2D) => void;
		};

		// FACTORY FUNCTIONS
		const createPeep = ({
			image,
			rect,
		}: {
			image: HTMLImageElement;
			rect: number[];
		}): Peep => {
			const peep: Peep = {
				image,
				rect: [],
				width: 0,
				height: 0,
				drawArgs: [],
				x: 0,
				y: 0,
				anchorY: 0,
				scaleX: 1,
				walk: null,
				setRect: (rect: number[]) => {
					peep.rect = rect;
					peep.width = rect[2];
					peep.height = rect[3];
					peep.drawArgs = [peep.image, ...rect, 0, 0, peep.width, peep.height];
				},
				render: (ctx: CanvasRenderingContext2D) => {
					ctx.save();
					ctx.translate(peep.x, peep.y);
					ctx.scale(peep.scaleX, 1);
					ctx.drawImage(
						peep.image,
						peep.rect[0],
						peep.rect[1],
						peep.rect[2],
						peep.rect[3],
						0,
						0,
						peep.width,
						peep.height,
					);
					ctx.restore();
				},
			};

			peep.setRect(rect);
			return peep;
		};

		// MAIN
		const img = document.createElement("img");
		const stage = {
			width: 0,
			height: 0,
		};

		const allPeeps: Peep[] = [];
		const availablePeeps: Peep[] = [];
		const crowd: Peep[] = [];

		const createPeeps = () => {
			const { rows, cols } = config;
			const { naturalWidth: width, naturalHeight: height } = img;
			const total = rows * cols;
			const rectWidth = width / rows;
			const rectHeight = height / cols;

			for (let i = 0; i < total; i++) {
				allPeeps.push(
					createPeep({
						image: img,
						rect: [
							(i % rows) * rectWidth,
							((i / rows) | 0) * rectHeight,
							rectWidth,
							rectHeight,
						],
					}),
				);
			}
		};

		const initCrowd = () => {
			while (availablePeeps.length) {
				addPeepToCrowd().walk.progress(Math.random());
			}
		};

		const addPeepToCrowd = () => {
			const peep = removeRandomFromArray(availablePeeps);
			const walk = getRandomFromArray(walks)({
				peep,
				props: resetPeep({
					peep,
					stage,
				}),
			}).eventCallback("onComplete", () => {
				removePeepFromCrowd(peep);
				addPeepToCrowd();
			});

			peep.walk = walk;

			crowd.push(peep);
			crowd.sort((a, b) => a.anchorY - b.anchorY);

			return peep;
		};

		const removePeepFromCrowd = (peep: Peep) => {
			removeItemFromArray(crowd, peep);
			availablePeeps.push(peep);
		};

		const render = () => {
			if (!canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.save();
			ctx.scale(devicePixelRatio, devicePixelRatio);

			crowd.forEach((peep) => {
				peep.render(ctx);
			});

			ctx.restore();
		};

		const resize = () => {
			if (!canvas) return;
			stage.width = canvas.clientWidth;
			stage.height = canvas.clientHeight;
			canvas.width = stage.width * devicePixelRatio;
			canvas.height = stage.height * devicePixelRatio;

			crowd.forEach((peep) => {
				peep.walk.kill();
			});

			crowd.length = 0;
			availablePeeps.length = 0;
			availablePeeps.push(...allPeeps);

			initCrowd();
		};

		const init = () => {
			createPeeps();
			resize();
			gsap.ticker.add(render);
		};

		img.onload = init;
		img.src = config.src;

		const handleResize = () => resize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			gsap.ticker.remove(render);
			crowd.forEach((peep) => {
				if (peep.walk) peep.walk.kill();
			});
		};
	}, [src, rows, cols]);
	return (
		<canvas ref={canvasRef} className="absolute bottom-0 h-[90vh] w-full" />
	);
}

const Skiper39 = () => {
	return (
		<div className="relative h-full w-full bg-white text-black">
			<div className="absolute top-22 left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
				<span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-linear-to-b after:from-white after:to-black after:content-['']">
					Croud Canvas
				</span>
			</div>
			<div className="absolute bottom-0 h-full w-screen">
				<CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
			</div>
		</div>
	);
};

export { CrowdCanvas, Skiper39 };

/**
 * Skiper 39 Canvas_Landing_004 — React + Canvas
 * Inspired by and adapted from https://codepen.io/zadvorsky/pen/xxwbBQV
 * illustration by https://www.openpeeps.com/
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren’t associated with the codepen.io . They’re independent recreations meant to study interaction design
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
