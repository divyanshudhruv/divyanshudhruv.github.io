"use client";

import { Toaster } from "@homepage/ui/components/sonner";
import {
	IconProvider,
	LayoutProvider,
	ToastProvider,
} from "@once-ui-system/core";
import { domAnimation, LazyMotion } from "motion/react";
import dynamic from "next/dynamic";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { iconLibrary } from "@/lib/icon-library";

const PostHogProvider = dynamic(
	() => import("./posthog-provider").then((m) => m.PostHogProvider),
	{ ssr: false },
);

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<LayoutProvider>
			<ToastProvider>
				<IconProvider icons={iconLibrary}>
					<NextThemesProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						<LazyMotion features={domAnimation}>
							<PostHogProvider>{children}</PostHogProvider>
						</LazyMotion>
						<Toaster richColors />
					</NextThemesProvider>
				</IconProvider>
			</ToastProvider>
		</LayoutProvider>
	);
}
