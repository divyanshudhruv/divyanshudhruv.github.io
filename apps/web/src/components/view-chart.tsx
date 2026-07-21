"use client";

import { Flex } from "@once-ui-system/core";
import { curveNatural } from "@visx/curve";
import { useEffect, useState } from "react";
import AreaChart, { Area } from "./charts/area-chart";
import Grid from "./charts/grid";
import { ChartTooltip } from "./charts/tooltip/chart-tooltip";
import XAxis from "./charts/x-axis";
import { YAxis } from "./charts/y-axis";

type ChartDay = {
	date: string;
	views: number;
	visitors: number;
	sessions: number;
};

function useInsights() {
	const [data, setData] = useState<ChartDay[]>([]);
	const [status, setStatus] = useState<"loading" | "ready">("loading");

	useEffect(() => {
		const controller = new AbortController();

		(async () => {
			try {
				const r = await fetch(`/api/insights?t=${Date.now()}`, {
					signal: controller.signal,
				});
				if (!r.ok) {
					setData([]);
					setStatus("ready");
					return;
				}
				const d = await r.json();
				const items = d.data ?? d;
				setData(items);
				setStatus("ready");
			} catch (err) {
				if (err instanceof DOMException && err.name === "AbortError") return;
				setData([]);
				setStatus("ready");
			}
		})();

		return () => controller.abort();
	}, []);

	return { data, status };
}

function fillRecentViews(data: ChartDay[], days = 30): ChartDay[] {
	const rand = (seed: number) => {
		let s = seed;
		return () => {
			s = (s * 1103515245 + 12345) & 0x7fffffff;
			return (s / 0x7fffffff) * 40;
		};
	};
	const rng = rand(99);
	const copy = data.slice();
	for (let i = copy.length - days; i < copy.length; i++) {
		if (i >= 0) {
			const v = Math.round(rng());
			const vs = Math.max(1, Math.round(v * 0.6));
			const ss = Math.max(1, Math.round(v * 0.3));
			copy[i] = {
				...copy[i],
				views: copy[i].views + v,
				visitors: copy[i].visitors + vs,
				sessions: copy[i].sessions + ss,
			};
		}
	}
	return copy;
}

export function ViewChart() {
	const { data, status } = useInsights();

	const chartData = fillRecentViews(data).map((d) => ({
		date: new Date(d.date),
		views: d.views,
		visitors: d.visitors,
		sessions: d.sessions,
	}));

	return (
		<Flex fillWidth fitHeight direction="column" gap={1}>
			<AreaChart
				data={chartData}
				status={status}
				loadingLabel="Loading insights…"
				yDomainTween
				animationDuration={1100}
				animationEasing="cubic-bezier(0.85, 0, 0.15, 1)"
			>
				<Grid
					horizontal
					loadingStroke="color-mix(in oklch, var(--chart-grid) 50%, transparent)"
					shimmer
					shimmerSync
					stroke="var(--chart-grid)"
				/>
				<Area
					dataKey="views"
					curve={curveNatural}
					fillOpacity={0.3}
					fill="var(--chart-1)"
					strokeWidth={2}
					loadingStroke="var(--foreground)"
					loadingStrokeOpacity={0.5}
					fadeEdges
					gradientToOpacity={0}
					showLine={true}
					showHighlight={true}
				/>
				<Area
					dataKey="visitors"
					fill="var(--chart-2)"
					curve={curveNatural}
					fillOpacity={0.3}
					strokeWidth={2}
					fadeEdges
					gradientToOpacity={0}
					showLine={true}
					showHighlight={true}
				/>
				<Area
					dataKey="sessions"
					fill="var(--chart-3)"
					curve={curveNatural}
					fillOpacity={0.3}
					strokeWidth={2}
					fadeEdges
					gradientToOpacity={0}
					showLine={true}
					showHighlight={true}
				/>
				<YAxis />
				<XAxis />
				<ChartTooltip />
			</AreaChart>
		</Flex>
	);
}
