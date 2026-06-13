import type { Metadata } from "next";
import config from "@/resources/metadata/metadata.json" with { type: "json" };

export function getMetadata(): Metadata {
	return {
		title: {
			default: config.site.name,
			template: `%s — ${config.site.name}`,
		},
		description: config.site.description,
		metadataBase: new URL(config.site.url),
		alternates: {
			canonical: config.site.url,
		},
		openGraph: {
			title: config.site.name,
			description: config.site.description,
			url: config.site.url,
			siteName: config.site.name,
			locale: config.openGraph.locale,
			type: "website",
			images: [
				{
					url: config.openGraph.image,
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: config.site.name,
			description: config.site.description,
			images: [config.twitter.image],
		},
		robots: {
			index: config.robots.index,
			follow: config.robots.follow,
		},
	};
}
