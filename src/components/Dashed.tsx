"use client";

import { Row, Background } from "@once-ui-system/core";

interface DashedProps {
  minHeight?: number;
}

export default function Dashed({ minHeight = 32 }: DashedProps) {
  return (
     <Row fillWidth minHeight="32" borderBottom="neutral-alpha-weak">
        <Background
          fill
          fillHeight
          lines={{
            display: true,
            opacity: 20,
            size: "4",
            thickness: 1,
            color: "neutral-solid-medium",
          }}
        />
      </Row>
  );
}
