// app/ViewTracker.tsx
"use client";

import usePageViews from "@/hooks/usePageViews";

export default function ViewTracker() {
  const { views, loading, error } = usePageViews(
    "divyanshudhruv.is-a.dev",
    "/",
  );

  if (loading) return <>Views: Loading...</>;
  if (error) return <>Views: Error</>;
  return <>Total Views: {views}</>;
}
