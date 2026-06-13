"use client";

import { Toaster } from "@homepage/ui/components/sonner";
import {
	IconProvider,
	LayoutProvider,
	ToastProvider,
} from "@once-ui-system/core";
import { iconLibrary } from "@/resources/icon";
import { PostHogProvider } from "./posthog-provider";
import { ThemeProvider } from "./theme-provider";

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
