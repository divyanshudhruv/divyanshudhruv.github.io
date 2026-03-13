"use client";

import { Flex } from "@once-ui-system/core";

interface ImagesForGridProps {
  images: string[];
}

export default function ImagesForGrid({ images }: ImagesForGridProps) {
  return (
    <>
      {images.map((image, index) => (
        <Flex
          key={index + "-image"}
          flex={2}
          padding={1}
          overflow="hidden"
          radius="s"
        >
          <Flex fit overflow="hidden" radius="s">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="aspect-video"
            />
          </Flex>
        </Flex>
      ))}
    </>
  );
}
