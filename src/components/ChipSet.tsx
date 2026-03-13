"use client";

import { Flex, Row, Text } from "@once-ui-system/core";

interface ChipSetProps {
  icon: React.ReactNode;
  text: React.ReactNode;
  href?: string;
  maxHeight?: number;
  gap?: number;
}

export default function ChipSet({ icon, text, href, maxHeight = 2, gap = 1 }: ChipSetProps) {
  return (
    <Row fillWidth maxHeight={maxHeight} vertical="center" horizontal="start" gap={gap}>
      <Flex radius="m" borderStyle="solid" width={2} height={2} border="neutral-weak" center>
        <Flex
          radius="s"
          center
          borderStyle="solid"
          border="neutral-alpha-weak"
          background="neutral-alpha-weak"
          width={1.5}
          height={1.5}
        >
          <Text onBackground="neutral-weak" variant="label-default-s">
            {icon}
          </Text>
        </Flex>
      </Flex>
      <Text variant="code-default-xs" onBackground="neutral-medium">
        {text}
      </Text>
    </Row>
  );
}
