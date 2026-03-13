"use client";

import { Column, Flex, Text } from "@once-ui-system/core";
import Image from "next/image";

interface StacksProps {
  skills: string[];
  iconSize?: number;
}

export default function Stacks({ skills, iconSize = 38 }: StacksProps) {
  return (
    <Flex wrap horizontal="start" gap={0.72}>
      {skills.map((skill: string, index: number) => (
        <Image
          src={`https://skillicons.dev/icons?i=${skill}`}
          height={iconSize}
          width={iconSize}
          key={skill + "-" + index}
          alt={skill.charAt(0).toUpperCase() + skill.slice(1)}
          unoptimized
        />
      ))}
    </Flex>
  );
}
