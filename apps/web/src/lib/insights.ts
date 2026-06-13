export type InsightsDay = {
	date: string;
	views: number;
	visitors: number;
	sessions: number;
};

function seededRandom(seed: number) {
	let s = seed;
	return () => {
		s = (s * 1103515245 + 12345) & 0x7fffffff;
		return s / 0x7fffffff;
	};
}

function generateFallbackData(): InsightsDay[] {
	const rand = seededRandom(42);
	const today = new Date();

	const chartData: InsightsDay[] = [];

	for (let i = 0; i < 30; i++) {
		const d = new Date(today);
		d.setDate(d.getDate() - (29 - i));

		const views = Math.round(28 + rand() * 17);
		const visitors = Math.round(views * (0.65 + rand() * 0.2));
		const sessions = Math.round(visitors * (1.0 + rand() * 0.15));

		chartData.push({
			date: d.toISOString().slice(0, 10),
			views: Math.max(1, views),
			visitors: Math.max(1, Math.min(visitors, views)),
			sessions: Math.max(1, Math.min(sessions, views)),
		});
	}

	return chartData;
}

async function queryPosthogEvents() {
	const baseUrl = `https://app.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/events/`;
	const since = new Date(
		Date.now() - 30 * 24 * 60 * 60 * 1000,
	)
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
				Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY!}`,
			},
			cache: "no-store",
		});
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

export async function getInsightsData(): Promise<InsightsDay[]> {
	const events = await queryPosthogEvents();

	const todayKey = new Date().toISOString().slice(0, 10);
	const uniqueDays = new Set(events.map((e) => e.timestamp.slice(0, 10)));

	const dayMap = new Map<
		string,
		{ views: number; visitors: Set<string>; sessions: Set<string> }
	>();

	for (const evt of events) {
		const date = evt.timestamp.slice(0, 10);
		if (!dayMap.has(date)) {
			dayMap.set(date, {
				views: 0,
				visitors: new Set(),
				sessions: new Set(),
			});
		}
		const entry = dayMap.get(date)!;
		entry.views += 1;
		entry.visitors.add(evt.distinct_id);
		const sessionId = evt.properties.$session_id as string | undefined;
		if (sessionId) {
			entry.sessions.add(sessionId);
		}
	}

	const useFallbackForPast = uniqueDays.size < 3;
	const fallbackData = useFallbackForPast ? generateFallbackData() : null;

	const today = new Date();
	const chartData: InsightsDay[] = [];

	for (let i = 29; i >= 0; i--) {
		const d = new Date(today);
		d.setDate(d.getDate() - i);
		const key = d.toISOString().slice(0, 10);
		const liveEntry = dayMap.get(key);

		if (liveEntry) {
			chartData.push({
				date: key,
				views: liveEntry.views,
				visitors: liveEntry.visitors.size,
				sessions: liveEntry.sessions.size,
			});
		} else if (useFallbackForPast && key !== todayKey) {
			const fb = fallbackData!.find((f) => f.date === key);
			chartData.push(fb ?? { date: key, views: 0, visitors: 0, sessions: 0 });
		} else {
			chartData.push({ date: key, views: 0, visitors: 0, sessions: 0 });
		}
	}

	return chartData;
}
