"use client";

import { Flex } from "@once-ui-system/core";
import styles from "./AutoScrollHorizontal.module.css";

interface AutoScrollHorizontalProps {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function AutoScrollHorizontal({
  children,
  gap = 1,
  speed = 30,
  pauseOnHover = true,
  className = "",
}: AutoScrollHorizontalProps) {
  const animationDuration = speed; // seconds

  return (
    <Flex
      horizontal="start"
      vertical="center"
      fillWidth
      overflow="hidden"
      className={`${styles.autoScrollHorizontal} ${className}`}
      style={{
        cursor: pauseOnHover ? "pointer" : "default",
      }}
    >
      {/* Duplicate content for seamless scrolling */}
      <Flex
        horizontal="start"
        vertical="center"
        gap={gap}
        style={{
          animation: `scroll ${animationDuration}s linear infinite`,
          animationPlayState: pauseOnHover ? "paused" : "running",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={() => pauseOnHover && {}}
        onMouseLeave={() => pauseOnHover && {}}
      >
        <Flex horizontal="start" vertical="center" gap={gap}>
          {children}
        </Flex>
        <Flex horizontal="start" vertical="center" gap={gap}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}