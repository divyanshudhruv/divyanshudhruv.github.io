"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import "./index.css";
import { Flex, Media } from "@once-ui-system/core";
import * as d3 from "d3";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { images } from "@/resources/image-trail";
import ImageTrail, { ImageTrailItem } from "../image-trail";
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
  baseOffset: any;
  itemIndex: number;
  totalItems: number;
  repeatIndex: number;
  zIndexBase: number;
  scaledPath: string;
  isHovered: React.MutableRefObject<boolean>;
  children: React.ReactNode;
};

/**
 * Wraps a number between a min and max value
 * @param min The minimum value
 * @param max The maximum value
 * @param value The value to wrap
 * @returns The wrapped value between min and max
 */
const wrap = (min: number, max: number, value: number): number => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

/**
 * Parse SVG path string into coordinate points using D3
 * This extracts the actual coordinates from the path for scaling
 */
const parsePathToPoints = (
  pathString: string,
  maxSamples = 100,
): Array<[number, number]> => {
  const points: Array<[number, number]> = [];

  // Create a temporary SVG element to parse the path
  const svg = d3.create("svg");
  const path = svg.append("path").attr("d", pathString);

  // Sample points along the path
  const pathNode = path.node() as SVGPathElement;
  if (pathNode) {
    const totalLength = pathNode.getTotalLength();

    // If the path is too long, sample only a subset of points. Majes
    const numSamples = Math.min(maxSamples, totalLength);

    for (let i = 0; i <= numSamples; i++) {
      const point = pathNode.getPointAtLength((i / numSamples) * totalLength);
      points.push([point.x, point.y]);
    }
  }

  return points;
};

/**
 * Create a scaled path using D3's line generator
 * This is the approach recommended in the CSS-Tricks article
 */
const createScaledPath = (
  originalPath: string,
  originalWidth: number,
  originalHeight: number,
  newWidth: number,
  newHeight: number,
): string => {
  // Parse the original path into points
  const points = parsePathToPoints(originalPath);

  // Create scales for X and Y coordinates
  const xScale = d3
    .scaleLinear()
    .domain([0, originalWidth])
    .range([0, newWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, originalHeight])
    .range([0, newHeight]);

  // Scale the points
  const scaledPoints = points.map(
    ([x, y]) => [xScale(x), yScale(y)] as [number, number],
  );

  // Create a smooth curve using D3's line generator
  const line = d3
    .line()
    .x((d) => d[0])
    .y((d) => d[1])
    .curve(d3.curveBasis); // Use basis curve for smooth interpolation

  return line(scaledPoints) || "";
};

const MarqueeItem = ({
  baseOffset,
  itemIndex,
  totalItems,
  repeatIndex,
  zIndexBase,
  scaledPath,
  isHovered,
  children,
}: MarqueeItemProps) => {
  const itemOffset = useTransform(baseOffset, (v: number) => {
    const position = (itemIndex * 100) / totalItems;
    const wrappedValue = wrap(0, 100, v + position);
    return `${wrappedValue}%`;
  });

  const zIndex = useTransform(itemOffset, (v) => {
    const progress = Number.parseFloat(v.replace("%", ""));
    return Math.floor(zIndexBase + progress);
  });

  const opacity = useTransform(itemOffset, (v) => {
    const progress = Number.parseFloat(v.replace("%", "")) / 100;
    const x = 2 * progress - 1;
    return (1 - Math.abs(x) ** 10) ** 2;
  });

  return (
    <motion.div
      className="marquee-item"
      style={{
        offsetPath: `path('${scaledPath}')`,
        offsetDistance: itemOffset,
        offsetRotate: "auto",
        zIndex: zIndex,
        opacity: opacity,
      }}
      aria-hidden={repeatIndex > 0}
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      {children}
    </motion.div>
  );
};

const MarqueeAlongPath = ({
  children,
  repeat = 1,
  path,
  baseVelocity,
  zIndexBase = 0,
}: MarqueeAlongPathProps) => {
  const baseOffset = useMotionValue(0);
  const isHovered = useRef(false);

  const springConfig = {
    stiffness: 100,
    damping: 20,
  };

  const hoverFactorValue = useMotionValue(1);
  const smoothHoverFactor = useSpring(hoverFactorValue, springConfig);

  const items = useMemo(() => {
    const childrenArray = React.Children.toArray(children);

    return childrenArray.flatMap((child, childIndex) =>
      Array.from({ length: repeat }, (_, repeatIndex) => {
        const itemIndex = repeatIndex * childrenArray.length + childIndex;
        const key = `${childIndex}-${repeatIndex}`;
        return {
          child,
          childIndex,
          repeatIndex,
          itemIndex,
          key,
        };
      }),
    );
  }, [children, repeat]);

  useAnimationFrame((_, delta) => {
    if (isHovered.current) {
      hoverFactorValue.set(0.3);
    } else {
      hoverFactorValue.set(1);
    }

    const moveBy = ((baseVelocity * delta) / 1000) * smoothHoverFactor.get();

    baseOffset.set(baseOffset.get() + moveBy);
  });

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Toggle between scaling methods: 1 or 2
  const [useScaleMethod] = useState<1 | 2>(1);

  // Scale method #1
  const marqueeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (useScaleMethod === 1) {
      // Scale method #1: CSS transform scale
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
  }, []);

  // Scale method #2 with D3
  const [scaledPath, setScaledPath] = useState(path);
  const [currentViewBox, setCurrentViewBox] = useState("0 0 588 187");

  useEffect(() => {
    if (useScaleMethod === 2) {
      // Scale method #2: D3 path scaling
      const updatePath = () => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const containerWidth = wrapper.clientWidth;
        const containerHeight = wrapper.clientHeight;

        // Original SVG dimensions
        const originalWidth = 588;
        const originalHeight = 187;

        // Use D3 to create the scaled path
        const newPath = createScaledPath(
          path,
          originalWidth,
          originalHeight,
          containerWidth,
          containerHeight,
        );

        setScaledPath(newPath);
        setCurrentViewBox(`0 0 ${containerWidth} ${containerHeight}`);
      };

      updatePath();
      window.addEventListener("resize", updatePath);
      return () => window.removeEventListener("resize", updatePath);
    }
  }, [path]);

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
        {items.map(({ child, repeatIndex, itemIndex, key }) => (
          <MarqueeItem
            key={key}
            baseOffset={baseOffset}
            itemIndex={itemIndex}
            totalItems={items.length}
            repeatIndex={repeatIndex}
            zIndexBase={zIndexBase}
            scaledPath={scaledPath}
            isHovered={isHovered}
          >
            {child}
          </MarqueeItem>
        ))}
      </div>
    </div>
  );
};

const path = "M 3 187 C 112 187 226 184 247 71 C 242 -70 -76 187 285 190 H 295";

// "M0 0.781 C138.5 0.781 305.5 -7.719 305.5 137.281 C305.5 300.652 -75 0.781 484.5 0.781 H587.5";

const SVGMarqueeImg = () => {
  return (
    <Flex fillWidth style={{ aspectRatio: `${588 / 400}` }} center fillHeight>
      {" "}
      <MarqueeAlongPath path={path} baseVelocity={5} repeat={4}>
        {artworks.map((artwork, i) => (
          <Card key={i} index={i} artwork={artwork} />
        ))}
      </MarqueeAlongPath>
      <ImageTrail
        threshold={60}
        keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 0] }}
        keyframesOptions={{
          opacity: { duration: 1, times: [0, 0.001, 0.9, 1] },
          scale: { duration: 1, times: [0, 0.8, 1] },
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 9,
          backgroundColor: "transparent",
        }}
      >
        {images.map((url, index) => (
          <ImageTrailItem key={index + url}>
            <div className="relative h-full w-30 sm:w-38">
              <img src={url} alt="image" className="object-cover" />
            </div>
          </ImageTrailItem>
        ))}
      </ImageTrail>
    </Flex>
  );
};

export default SVGMarqueeImg;
