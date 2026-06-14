"use client";

import { Flex } from "@once-ui-system/core";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("@/components/github-calendar").then((m) => ({
      default: m.GitHubCalendar,
    })),
  { ssr: true },
);

const ContributionLegend = dynamic(
  () =>
    import("@/components/github-calendar").then((m) => ({
      default: m.ContributionLegend,
    })),
  { ssr: false },
);

export default function GitHubSection({ id }: { id: string }) {
  return (
    <Flex
      id={id}
      fillWidth
      fillHeight
      direction="column"
      overflowY="hidden"
      gap={0.5}
    >
      <GitHubCalendar
        username="divyanshudhruv"
        colorScheme="orange"
        cellSize={16}
        cellShape="rounded"
        showDayLabels={true}
        startDate="2024-09-06"
        endDate="auto"
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
