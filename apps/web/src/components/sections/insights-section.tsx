"use client";

import dynamic from "next/dynamic";
import { ActionRow } from "@/components/section/action-row";
import {
  SectionHeading,
  SectionRoot,
  SectionText,
} from "@/components/section/section-heading";

const ViewChart = dynamic(
  () =>
    import("@/components/view-chart").then((m) => ({ default: m.ViewChart })),
  {
    ssr: true,
  },
);

export default function InsightsSection() {
  return (
    <SectionRoot>
      <SectionHeading before="Insights" />
      <SectionText>
        The graph below shows the live insights of the visitors of this website.
        Hover over the bars to see the exact values. It's pretty cool right??
      </SectionText>
      <ViewChart />
      <ActionRow
        buttons={[
          {
            text: "Reload for updates",
            boxColor: "bg-taupe-500",
            pattern: "arrow",
          },
        ]}
      />
    </SectionRoot>
  );
}
