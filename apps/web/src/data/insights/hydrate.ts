import { INSIGHTS_DAYS, queryPosthogEvents } from "./api";
import type { InsightsDay } from "./types";

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

	for (let i = 0; i < INSIGHTS_DAYS; i++) {
		const d = new Date(today);
		d.setDate(d.getDate() - (INSIGHTS_DAYS - 1 - i));

		const views = Math.round(28 + rand() * 90);
		const visitors = Math.round(10 + rand() * 80);
		const sessions = Math.round(10 + rand() * 80);

		chartData.push({
			date: d.toISOString().slice(0, 10),
			views: Math.max(1, views),
			visitors: Math.max(1, Math.min(visitors, views, sessions, 30)),
			sessions: Math.max(1, Math.min(sessions, views) - 1),
		});
	}

	return chartData;
}

export async function getInsightsData() {
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
		const entry = dayMap.get(date);
		if (!entry) continue;
		entry.views += 1;
		entry.visitors.add(evt.distinct_id);
		const sessionId = evt.properties.$session_id as string | undefined;
		if (sessionId) {
			entry.sessions.add(sessionId);
		}
	}

	const useFallbackForPast = uniqueDays.size < 25;
	const fallbackData = useFallbackForPast ? generateFallbackData() : null;

	const today = new Date();
	const fallbackMap =
		useFallbackForPast && fallbackData
			? new Map(fallbackData.map((f) => [f.date, f]))
			: null;

	const chartData: InsightsDay[] = [];

	for (let i = INSIGHTS_DAYS - 1; i >= 0; i--) {
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
			const fb = fallbackMap?.get(key);
			chartData.push(fb ?? { date: key, views: 0, visitors: 0, sessions: 0 });
		} else {
			chartData.push({ date: key, views: 0, visitors: 0, sessions: 0 });
		}
	}

	return { data: chartData, meta: { isFallback: useFallbackForPast } };
}
