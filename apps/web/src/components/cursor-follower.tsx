"use client";

import { useEffect, useRef } from "react";
import { useInsightsTotal } from "./use-insights-total";

function ordinal(n: number): string {
  if (n === 0) return "";
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
}

export function CursorFollower() {
  const totalUsers = useInsightsTotal();
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX + 18;
      targetY = e.clientY + 18;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (elRef.current) {
        elRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={elRef}
      className=" border border-neutral-500 pointer-events-none fixed left-0 top-0 z-[99999] whitespace-nowrap rounded-full bg-neutral-800 px-[1.375rem] py-[0.7rem] text-xs font-medium text-white dark:bg-neutral-100 dark:text-white opacity-90"
    >
      {totalUsers > 0 ? `${ordinal(totalUsers)} User` : "—"}
    </div>
  );
}
