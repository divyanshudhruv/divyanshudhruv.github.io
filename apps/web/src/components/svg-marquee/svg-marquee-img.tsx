"use client";

import "./index.css";
import { Flex } from "@once-ui-system/core";
import React, { useEffect, useRef } from "react";
import { artworks } from "../../content/artworks";
import Card from "./marquee-card";

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
	path: string;
	children: React.ReactNode;
};

const MarqueeItem = ({
	itemIndex,
	totalItems,
	zIndexBase,
	path,
	children,
}: MarqueeItemProps) => {
	const delay = -((itemIndex / totalItems) * 20);
	return (
		<div
			className="marquee-item"
			style={{
				offsetPath: `path('${path}')`,
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
			containerRef.current.style.setProperty(
				"--marquee-duration",
				`${duration}s`,
			);
		}
		const observer = new IntersectionObserver(
			([entry]) => {
				if (containerRef.current) {
					containerRef.current.style.setProperty(
						"--marquee-duration",
						`${duration}s`,
					);
					containerRef.current.style.animationPlayState = entry.isIntersecting
						? "running"
						: "paused";
				}
			},
			{ threshold: 0 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [duration]);

	const marqueeContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
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
	}, []);

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
				<div
					ref={containerRef}
					style={{ position: "relative", width: "100%", height: "100%" }}
				>
					{items.map(({ child, itemIndex, key }) => (
						<MarqueeItem
							key={key}
							itemIndex={itemIndex}
							totalItems={items.length}
							zIndexBase={zIndexBase}
							path={path}
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
