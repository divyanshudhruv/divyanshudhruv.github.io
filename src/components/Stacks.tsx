"use client";

import { Column, Flex, Text } from "@once-ui-system/core";
import Image from "next/image";

interface StacksProps {
  stacks: string[];
  iconSize?: number;
}

export default function Stacks({ stacks, iconSize = 38 }: StacksProps) {
  return (
    <Flex wrap horizontal="start" gap={0.72}>
      {stacks.map((stack: string, index: number) => (
        <Image
          src={`https://skillicons.dev/icons?i=${stack}`}
          height={iconSize}
          width={iconSize}
          key={stack + "-" + index}
          alt={stack.charAt(0).toUpperCase() + stack.slice(1)}
          unoptimized
        />
      ))}
    </Flex>
  );
}
