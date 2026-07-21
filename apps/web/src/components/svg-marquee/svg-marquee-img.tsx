"use client";

import "./index.css";
import { Flex } from "@once-ui-system/core";
import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";
import { artworks } from "../../resources/artworks";
import Card from "./card";

type MarqueeAlongPathProps = {
	children: React.ReactNode;
	path: string;
	baseVelocity: number;
	repeat?: number;
	zIndexBase?: number;
	enableRollingZIndex?: boolean;
};

type MarqueeItemProps = {
	itemIndex: number;
	totalItems: number;
	zIndexBase: number;
	scaledPath: string;
	children: React.ReactNode;
};

const parsePathToPoints = (
	pathString: string,
	maxSamples = 100,
): Array<[number, number]> => {
	const points: Array<[number, number]> = [];
	const svg = d3.create("svg");
	const path = svg.append("path").attr("d", pathString);
	const pathNode = path.node() as SVGPathElement;
	if (pathNode) {
		const totalLength = pathNode.getTotalLength();
		const numSamples = Math.min(maxSamples, totalLength);
		for (let i = 0; i <= numSamples; i++) {
			const point = pathNode.getPointAtLength((i / numSamples) * totalLength);
			points.push([point.x, point.y]);
		}
	}
	return points;
};

const createScaledPath = (
	originalPath: string,
	originalWidth: number,
	originalHeight: number,
	newWidth: number,
	newHeight: number,
): string => {
	const points = parsePathToPoints(originalPath);
	const xScale = d3
		.scaleLinear()
		.domain([0, originalWidth])
		.range([0, newWidth]);
	const yScale = d3
		.scaleLinear()
		.domain([0, originalHeight])
		.range([0, newHeight]);
	const scaledPoints = points.map(
		([x, y]) => [xScale(x), yScale(y)] as [number, number],
	);
	const line = d3
		.line()
		.x((d) => d[0])
		.y((d) => d[1])
		.curve(d3.curveBasis);
	return line(scaledPoints) || "";
};

const MarqueeItem = ({
	itemIndex,
	totalItems,
	zIndexBase,
	scaledPath,
	children,
}: MarqueeItemProps) => {
	const delay = -((itemIndex / totalItems) * 20);
	return (
		<div
			className="marquee-item"
			style={{
				offsetPath: `path('${scaledPath}')`,
				offsetRotate: "auto",
				animationDelay: `${delay}s`,
				zIndex: zIndexBase + itemIndex,
			}}
		>
			{children}
		</div>
	);
};

const MarqueeAlongPath = ({
	children,
	repeat = 1,
	path,
	baseVelocity,
	zIndexBase = 0,
}: MarqueeAlongPathProps) => {
	const duration = 100 / baseVelocity;

	const items = (() => {
		const childrenArray = React.Children.toArray(children);
		return childrenArray.flatMap((child, childIndex) =>
			Array.from({ length: repeat }, (_, repeatIndex) => {
				const itemIndex = repeatIndex * childrenArray.length + childIndex;
				const key = `${childIndex}-${repeatIndex}`;
				return { child, key, itemIndex };
			}),
		);
	})();

	const wrapperRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = wrapperRef.current;
		if (!el) return;
		if (containerRef.current) {
			containerRef.current.style.setProperty("--marquee-duration", `${duration}s`);
		}
		const observer = new IntersectionObserver(
			([entry]) => {
				if (containerRef.current) {
					containerRef.current.style.setProperty("--marquee-duration", `${duration}s`);
					containerRef.current.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
				}
			},
			{ threshold: 0 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [duration]);

	const [useScaleMethod] = useState<1 | 2>(1);
	const marqueeContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (useScaleMethod === 1) {
			const updateScale = () => {
				const wrapper = wrapperRef.current;
				const marqueeContainer = marqueeContainerRef.current;
				if (!wrapper || !marqueeContainer) return;
				const scale = (wrapper.clientWidth / 588) * 1.9;
				marqueeContainer.style.transform = `scale(${scale})`;
				marqueeContainer.style.transformOrigin = "top left";
			};
			updateScale();
			window.addEventListener("resize", updateScale);
			return () => window.removeEventListener("resize", updateScale);
		}
	}, [useScaleMethod]);

	const [scaledPath, setScaledPath] = useState(path);

	useEffect(() => {
		if (useScaleMethod === 2) {
			const updatePath = () => {
				const wrapper = wrapperRef.current;
				if (!wrapper) return;
				const containerWidth = wrapper.clientWidth;
				const containerHeight = wrapper.clientHeight;
				const originalWidth = 588;
				const originalHeight = 187;
				const newPath = createScaledPath(
					path,
					originalWidth,
					originalHeight,
					containerWidth,
					containerHeight,
				);
				setScaledPath(newPath);
			};
			updatePath();
			window.addEventListener("resize", updatePath);
			return () => window.removeEventListener("resize", updatePath);
		}
	}, [path, useScaleMethod]);

		return (
		<div
			className="container flex"
			ref={wrapperRef}
			style={{ position: "relative", width: "100%", height: "100%" }}
		>
			<div
				className="marquee-container"
				ref={marqueeContainerRef}
				style={{ position: "relative", width: "100%", height: "100%" }}
			>
				<div ref={containerRef} style={{ position: "relative", width: "100%", height: "100%" }}>
					{items.map(({ child, itemIndex, key }) => (
						<MarqueeItem
							key={key}
							itemIndex={itemIndex}
							totalItems={items.length}
							zIndexBase={zIndexBase}
							scaledPath={scaledPath}
						>
							{child}
						</MarqueeItem>
					))}
				</div>
			</div>
		</div>
	);
};

const path = "M 3 187 C 112 187 226 184 247 71 C 242 -70 -76 187 285 190 H 295";

const SVGMarqueeImg = () => {
	return (
		<Flex fillWidth style={{ aspectRatio: `${588 / 400}` }} center fillHeight>
			{" "}
			<MarqueeAlongPath path={path} baseVelocity={5} repeat={4}>
				{artworks.map((artwork, i) => (
					<Card key={artwork.src} index={i} artwork={artwork} />
				))}
			</MarqueeAlongPath>
		</Flex>
	);
};

export default SVGMarqueeImg;
