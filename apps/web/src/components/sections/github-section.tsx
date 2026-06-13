"use client";

import dynamic from "next/dynamic";
import { Flex,MatrixFx } from "@once-ui-system/core";

const GitHubCalendar = dynamic(
  () =>
    import("@/components/github-calendar").then((m) => ({
      default: m.GitHubCalendar,
    })),
  {
    ssr: false,
    loading: () => (
      <Flex fillWidth fillHeight direction="column" overflow="hidden" gap={0.5} className="rounded-lg">
        <MatrixFx
          height={18}
          colors={["brand-solid-strong", "accent-solid-strong"]}
          trigger="mount"
          flicker
        />
      </Flex>
    ),
  },
);

const ContributionLegend = dynamic(
  () =>
    import("@/components/github-calendar").then((m) => ({
      default: m.ContributionLegend,
    })),
  { ssr: false },
);

export default function GitHubSection() {
  return (
    <Flex fillWidth fillHeight direction="column" overflow="hidden" gap={0.5}>
      <GitHubCalendar
        username="divyanshudhruv"
        colorScheme="orange"
        cellSize={16}
        cellShape="rounded"
        timeRange="1-year"
        showDayLabels={true}
      />
      <Flex fillWidth horizontal="end">
        <ContributionLegend
          colorScheme="orange"
          cellSize={16}
          cellShape="rounded"
        />
      </Flex>
    </Flex>
  );
}
