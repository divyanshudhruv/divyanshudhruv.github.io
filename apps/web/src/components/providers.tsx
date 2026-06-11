"use client";

import { Toaster } from "@homepage/ui/components/sonner";
import {
	IconProvider,
	LayoutProvider,
	ToastProvider,
} from "@once-ui-system/core";
import { iconLibrary } from "@/resources/icon";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<LayoutProvider>
			<ToastProvider>
				<IconProvider icons={iconLibrary}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<Toaster richColors />
					</ThemeProvider>
				</IconProvider>
			</ToastProvider>
		</LayoutProvider>
	);
}
