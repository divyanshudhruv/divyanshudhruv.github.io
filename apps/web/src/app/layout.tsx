import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
// import "@once-ui-system/core/css/styles.css";
// import "@once-ui-system/core/css/tokens.css";
import "../index.css";
import { cn } from "@homepage/ui/lib/utils";
import { Flex } from "@once-ui-system/core";
import Providers from "@/components/providers";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "homepage",
	description: "homepage",
};

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
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="88ab3ac1-99e1-47a2-b385-587956dc7502"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
        </Providers>
      </body>
    </html>
  );
}
