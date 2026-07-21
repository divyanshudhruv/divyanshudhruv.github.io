"use client";

import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { Suspense, useEffect, useRef } from "react";

function PageViewTracker({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const pageUrl =
		pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

	useEffect(() => {
		posthog.capture("$pageview", {
			$current_url: pageUrl,
		});
	}, [pageUrl]);

	return <>{children}</>;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
	const initialized = useRef(false);

	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
		if (!posthogKey) return;
		posthog.init(posthogKey, {
			api_host: "/a",
			capture_pageview: false,
		});
	}, []);

	return (
		<Suspense fallback={null}>
			<PageViewTracker>{children}</PageViewTracker>
		</Suspense>
	);
}
