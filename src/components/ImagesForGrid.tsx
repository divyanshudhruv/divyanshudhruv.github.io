"use client";

import { Flex } from "@once-ui-system/core";

interface ImagesForGridProps {
  images: string[];
}

export default function ImagesForGrid({ images }: ImagesForGridProps) {
  return (
    <>
      {images.map((image, index) => (
        <Flex key={index + "-image"} flex={2} padding={1}>
          <Flex fit radius="s" overflow="hidden">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </Flex>
        </Flex>
      ))}
    </>
  );
}
