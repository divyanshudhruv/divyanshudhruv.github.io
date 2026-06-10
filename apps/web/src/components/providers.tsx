"use client";

import { Toaster } from "@homepage/ui/components/sonner";

import {
  LayoutProvider,
  IconProvider,
  ToastProvider,
} from "@once-ui-system/core";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ToastProvider>
        <IconProvider>
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
