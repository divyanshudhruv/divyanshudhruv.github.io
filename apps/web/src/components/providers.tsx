"use client";

import dynamic from "next/dynamic";
import { Toaster } from "@homepage/ui/components/sonner";
import {
	IconProvider,
	LayoutProvider,
	ToastProvider,
} from "@once-ui-system/core";
import { iconLibrary } from "@/resources/icon";
import { ThemeProvider } from "./theme-provider";

const PostHogProvider = dynamic(
	() => import("./posthog-provider").then((m) => m.PostHogProvider),
	{ ssr: false },
);

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<LayoutProvider>
			<ToastProvider>
				<IconProvider icons={iconLibrary}>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						<PostHogProvider>{children}</PostHogProvider>
						<Toaster richColors />
					</ThemeProvider>
				</IconProvider>
			</ToastProvider>
		</LayoutProvider>
	);
}
