"use client";

import {
  Column,
  Row,
  Flex,
  Avatar,
  Text,
} from "@once-ui-system/core";

interface TestimonialProps {
  src: string;
  href?: string;
  body: string;
  name: string;
  desc: string;
  maxWidth?: number;
  minWidth?: number;
  minHeight?: number;
}

export default function Testimonial({
  src,
  href,
  body,
  name,
  desc,
  maxWidth = 20,
  minWidth = 12,
  minHeight = 7,
}: TestimonialProps) {
  return (
    <Column
      fillWidth
      maxWidth={maxWidth}
      minWidth={minWidth}
      fitHeight
      minHeight={minHeight}
      border="neutral-alpha-weak"
      padding={1}
      radius="s"
      gap={1}
      vertical="between"
    >
      <Text
        variant="label-default-m"
        wrap="wrap"
        onBackground="neutral-alpha-medium"
      >
        {body}
      </Text>
      <Row center fitWidth gap={0.5}>
        <Avatar src={src} />
        <Column vertical="center" horizontal="start" gap={0.1}>
          <Text variant="label-default-s" onBackground="neutral-alpha-medium">
            {name}
          </Text>
          <Text variant="code-default-xs" onBackground="neutral-weak">
            {desc}
          </Text>
        </Column>
      </Row>
    </Column>
  );
}
