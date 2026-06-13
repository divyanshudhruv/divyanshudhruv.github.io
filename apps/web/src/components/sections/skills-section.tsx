"use client";

import { Column, Flex } from "@once-ui-system/core";
import {
  SectionHeading,
  SectionRoot,
  SectionText,
} from "@/components/section/section-heading";
import { StackButton } from "@/components/stack-button";
import { stacksData } from "@/resources/stacks";

export default function SkillsSection({ id }: { id: string }) {
  return (
    <SectionRoot id={id}>
      <SectionHeading before="Skills &" highlight="stacks." />
      <SectionText>
        Here's a snapshot of the technologies I work with regularly:
      </SectionText>
      <Column
        fillWidth
        fillHeight
        horizontal="center"
        vertical="start"
        gap={2}
      >
        {stacksData.map((cat) => (
          <Column
            key={cat.category}
            fillWidth
            horizontal="start"
            vertical="start"
            gap={1}
          >
            <Flex
              fillWidth
              horizontal="start"
              vertical="center"
              wrap
              gap={0.8}
            >
              {cat.items.map((item) => (
                <StackButton
                  key={item.label}
                  url={item.url}
                  label={item.label}
                  color={item.color ?? cat.parentColor}
                  overrideMediaUrl={item.overrideMediaUrl}
                />
              ))}
            </Flex>
          </Column>
        ))}
      </Column>
    </SectionRoot>
  );
}
