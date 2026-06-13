"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

if (typeof window !== "undefined") {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
		api_host: "/ingest",
		capture_pageview: false,
	});
}

function PageViewTracker({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		posthog.capture("$pageview", {
			$current_url: pathname + searchParams.toString(),
		});
	}, [pathname, searchParams]);

	return <>{children}</>;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
	return (
		<PHProvider client={posthog}>
			<PageViewTracker>{children}</PageViewTracker>
		</PHProvider>
	);
}
