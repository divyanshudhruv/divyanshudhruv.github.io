import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import { cn } from "@homepage/ui/lib/utils";
import { Flex } from "@once-ui-system/core";
import { ReactLenis } from "lenis/react";
import Providers from "@/components/providers";
import { getMetadata } from "@/lib/metadata";
import { JsonLd } from "@/resources/metadata/json-ld";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = getMetadata();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", dmSans.variable)}
    >
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactLenis root>
          <JsonLd />
          <Analytics/>
          <SpeedInsights/>
          <main>
            <Providers>
              <Flex
                fillWidth
                fillHeight
                className="bg-border dark:bg-accent-foreground"
                horizontal="center"
                vertical="start"
              >
                {children}
              </Flex>
            </Providers>{" "}
          </main>
        </ReactLenis>
      </body>
    </html>
  );
}
