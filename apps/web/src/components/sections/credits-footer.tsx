"use client";

import { Flex } from "@once-ui-system/core";
import { CreditsGrid } from "@/components/section/credits-grid";
import ImageTrail, { ImageTrailItem } from "@/components/image-trail";
import { images } from "@/resources/image-trail";

export default function CreditsFooter({ id }: { id: string }) {
  return (
    <Flex id={id}
      direction="column"
      fillWidth
      fitHeight
      horizontal="center"
      vertical="center"
      gap={1}
    >
      <ImageTrail
        threshold={60}
        keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 0] }}
        keyframesOptions={{
          opacity: { duration: 1, times: [0, 0.001, 0.9, 1] },
          scale: { duration: 1, times: [0, 0.8, 1] },
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 9,
          backgroundColor: "transparent",
        }}
      >
        {images.map((url, index) => (
          <ImageTrailItem key={index + url}>
            <div className="relative h-full w-30 sm:w-38">
              <img src={url} alt="" className="object-cover" />
            </div>
          </ImageTrailItem>
        ))}
      </ImageTrail>
      <CreditsGrid />
      
    </Flex>
  );
}
