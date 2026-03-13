"use client";

import {
  Flex,
  Row,
  Avatar,
  Text,
  IconButton,
} from "@once-ui-system/core";
import { HiArrowRight } from "react-icons/hi2";

interface LinkSetProps {
  src: string;
  href: string;
  text: string;
  position: "first" | "middle" | "last";
}

export default function LinkSet({
  src,
  href,
  text,
  position,
}: LinkSetProps) {
  const getBorderStyles = () => {
    switch (position) {
      case "first":
        return { borderRight: true };
      case "middle":
        return { borderX: true };
      case "last":
        return { borderLeft: true };
      default:
        return {};
    }
  };

  return (
    <Flex
      horizontal="between"
      vertical="center"
      flex={1}
      padding={1}
      border="neutral-alpha-weak"
      {...getBorderStyles()}
    >
      <Row center gap={0.5}>
        <Avatar src={src} size="m" border="neutral-alpha-weak" />
        <Text variant="label-default-m" onBackground="neutral-medium">
          {text}
        </Text>
      </Row>
      <IconButton variant="ghost" className="rotate-315" href={href}>
        <Text onBackground="neutral-weak">
          <HiArrowRight />
        </Text>
      </IconButton>
    </Flex>
  );
}
