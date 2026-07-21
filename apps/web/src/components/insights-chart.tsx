"use client";

import { Flex } from "@once-ui-system/core";
import { curveNatural } from "@visx/curve";
import { useInsightsData } from "@/data/insights";
import AreaChart, { Area } from "./charts/area-chart";
import Grid from "./charts/renderers/grid";
import XAxis from "./charts/renderers/x-axis";
import { YAxis } from "./charts/renderers/y-axis";
import { ChartTooltip } from "./charts/tooltip/chart-tooltip";

export function ViewChart() {
	const { data, status } = useInsightsData();

	const chartData = data.map((d) => ({
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
