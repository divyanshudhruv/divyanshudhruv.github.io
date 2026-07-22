import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import { cn } from "@homepage/ui/lib/utils";
import { Flex } from "@once-ui-system/core";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactLenis } from "lenis/react";
import Script from "next/script";
import { CursorFollower } from "@/components/cursor-follower";
import Providers from "@/components/providers";
import { JsonLd } from "@/content/json-ld";
import { getMetadata } from "@/lib/metadata";

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
      <head>
        {/* <Script
					src="//unpkg.com/react-scan/dist/auto.global.js"
					crossOrigin="anonymous"
					strategy="beforeInteractive"
				/> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <ReactLenis root>
          <JsonLd />
          <Analytics />
          <SpeedInsights /> <CursorFollower />
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
