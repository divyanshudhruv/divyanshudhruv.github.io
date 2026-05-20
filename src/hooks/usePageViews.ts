// src/hooks/usePageViews.ts
import { useEffect, useState } from "react";

export default function usePageViews(site: string, path: string) {
  const [views, setViews] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const res = await fetch(
          `https://page-views-api.ratneshc.com/api/v1/views?site=${site}&path=${path}`,
        );
        const data = await res.json();
        setViews(data.views);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchViews();
  }, [site, path]);

  return { views, loading, error };
}
