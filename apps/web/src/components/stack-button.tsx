"use client";

import { cn } from "@homepage/ui/lib/utils";
import { Media, Row } from "@once-ui-system/core";
import { useState } from "react";

function extractDomain(url: string): string | null {
  try {
    const normalized = url.match(/^https?:\/\//) ? url : `https://${url}`;
    return new URL(normalized).hostname;
  } catch {
    return null;
  }
}

interface StackButtonProps {
  url: string;
  label: string;
  color?: string;
  overrideMediaUrl?: string;
}

export function StackButton({
  url,
  label,
  color,
  overrideMediaUrl,
}: StackButtonProps) {
  const domain = extractDomain(url);
  const [useOverride, setUseOverride] = useState(false);

  const faviconSrc =
    overrideMediaUrl && useOverride
      ? overrideMediaUrl
      : domain
        ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
        : "/img.jpg";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit h-fit flex"
    >
      <Row
        fitWidth
        fitHeight
        className={cn(
          "h-[32px] rounded-lg border-2 bg-border transition-all hover:bg-taupe-300 p-1.5",
        )}
        padding={0.25}
        gap={0.5}
        center
      >
        <Media
          src={faviconSrc}
          width={1.5}
          height={1.5}
          className="rounded-md"
          minWidth={1.5}
		  unoptimized
          maxWidth={1.5}
          minHeight={1.5}
          maxHeight={1.5}
          onError={() => setUseOverride(true)}
        />
        {label}
      </Row>
    </a>
  );
}
