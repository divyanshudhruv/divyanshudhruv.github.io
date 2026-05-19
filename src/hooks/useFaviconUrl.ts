// useFaviconUrl.ts
import { useMemo } from "react";

export function useFaviconUrl(rawUrl?: string) {
  return useMemo(() => {
    if (!rawUrl) return null;

    try {
      const u = new URL(rawUrl);
      const domain = u.hostname; // e.g. "github.com"
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return null;
    }
  }, [rawUrl]);
}
