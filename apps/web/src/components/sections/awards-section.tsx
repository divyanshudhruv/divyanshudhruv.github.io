import { Column } from "@once-ui-system/core";
import { ActionRow } from "@/components/section/action-row";
import {
  SectionHeading,
  SectionRoot,
  SectionText,
} from "@/components/section/section-heading";
import { AwardsBlock } from "@/components/awards-block";

export default function AwardsSection({ id }: { id: string }) {
  return (
    <SectionRoot id={id}>
      <SectionHeading before="Awards and" highlight="certifications." />
      <SectionText >
        I've had the privilege of receiving recognition for my work and have
        successfully completed various certifications.
      </SectionText>
      <Column fillWidth marginTop={1}>
        <AwardsBlock awards={[]} />
      </Column>
      <ActionRow
        buttons={[
          { text: "View more", boxColor: "bg-taupe-500", pattern: "linkedin" },
          { text: "Do nothing", boxColor: "bg-yellow-500", pattern: "arrow" },
        ]}
      />
    </SectionRoot>
  );
}
