import config from "./metadata.json" with { type: "json" };

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: config.site.name,
	url: config.site.url,
	sameAs: [
		"https://github.com/divyanshudhruv",
	],
};

export function JsonLd() {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
		/>
	);
}
