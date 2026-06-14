"use client";

import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { Suspense, useEffect, useRef } from "react";

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
	const initialized = useRef(false);

	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
			api_host: "/ingest",
			capture_pageview: false,
		});
	}, []);

	return (
		<Suspense fallback={null}>
			<PageViewTracker>{children}</PageViewTracker>
		</Suspense>
	);
}
