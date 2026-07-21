const INSIGHTS_DAYS = 30;

async function queryPosthogEvents() {
	const baseUrl = `https://app.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/events/`;
	const since = new Date(Date.now() - INSIGHTS_DAYS * 24 * 60 * 60 * 1000)
		.toISOString()
		.slice(0, 10);

	const allEvents: Array<{
		timestamp: string;
		distinct_id: string;
		properties: Record<string, unknown>;
	}> = [];
	let url: string | null =
		`${baseUrl}?event=$pageview&after=${since}&limit=10000`;

	while (url) {
		const res: Response = await fetch(url, {
			headers: {
				Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY ?? ""}`,
			},
			cache: "no-store",
		});
		if (!res.ok) {
			throw new Error(`PostHog API error: ${res.status}`);
		}
		const json: {
			results?: Array<{
				timestamp: string;
				distinct_id: string;
				properties: Record<string, unknown>;
			}>;
			next?: string | null;
		} = await res.json();
		const results = json.results ?? [];
		allEvents.push(...results);
		url = json.next ?? null;
		if (url) {
			url = `${url}&limit=10000`;
		}
	}

	return allEvents;
}

export { INSIGHTS_DAYS, queryPosthogEvents };
