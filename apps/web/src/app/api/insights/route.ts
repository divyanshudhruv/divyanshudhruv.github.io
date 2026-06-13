import { NextResponse } from "next/server";

async function queryPosthog(math: string) {
	const res = await fetch(
		`https://app.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/query/`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: {
					kind: "TrendsQuery",
					interval: "day",
					series: [
						{
							kind: "EventsNode",
							event: "$pageview",
							name: "$pageview",
							math,
						},
					],
					version: 2,
				},
			}),
		},
	);
	return res.json();
}

export async function GET() {
	const [pvData, uvData] = await Promise.all([
		queryPosthog("total"),
		queryPosthog("dau"),
	]);

	const days: string[] = pvData.results?.[0]?.days ?? [];
	const pvCounts: number[] = pvData.results?.[0]?.data ?? [];
	const uvCounts: number[] = uvData.results?.[0]?.data ?? [];

	const chartData = days.map((date: string, i: number) => ({
		date,
		pageviews: pvCounts[i] ?? 0,
		visitors: uvCounts[i] ?? 0,
	}));

	return NextResponse.json(chartData);
}
