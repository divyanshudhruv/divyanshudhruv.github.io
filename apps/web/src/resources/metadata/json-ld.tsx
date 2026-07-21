import { socials } from "@/resources/socials";
import config from "./metadata.json" with { type: "json" };

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: config.site.name,
	url: config.site.url,
	sameAs: [socials.github],
};

function toSafeJson(data: unknown): string {
	return JSON.stringify(data)
		.replace(/&/g, "\\u0026")
		.replace(/</g, "\\u003C")
		.replace(/>/g, "\\u003E")
		.replace(/\//g, "\\u002F");
}

const schemaScript = toSafeJson(personSchema);

export function JsonLd() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: schemaScript }}
		/>
	);
}
