import { socials } from "@/resources/socials";
import config from "./metadata.json" with { type: "json" };

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: config.site.name,
	url: config.site.url,
	sameAs: [socials.github],
};

export function JsonLd() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
		/>
	);
}
