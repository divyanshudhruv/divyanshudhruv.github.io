"use client";

import { Flex } from "@once-ui-system/core";
import { curveNatural } from "@visx/curve";
import { useEffect, useState } from "react";
import AreaChart, { Area } from "./charts/area-chart";
import Grid from "./charts/grid";
import { ChartTooltip } from "./charts/tooltip";
import XAxis from "./charts/x-axis";

type ChartDay = {
	date: string;
	pageviews: number;
	visitors: number;
};

export function ViewChart() {
	const [data, setData] = useState<ChartDay[] | null>(null);

	useEffect(() => {
		fetch("/api/insights")
			.then((r) => r.json())
			.then(setData)
			.catch(() => setData([]));
	}, []);

	if (!data) {
		return (
			<div className="h-[300px] w-full animate-pulse rounded-2xl bg-muted" />
		);
	}

	const chartData = data.map((d) => ({
		date: new Date(d.date),
		desktop: d.pageviews,
		mobile: d.visitors,
	}));

	return (
		<Flex fillWidth fitHeight direction="column" gap={1}>
			<AreaChart
				data={chartData}
				animationDuration={1100}
				animationEasing="cubic-bezier(0.85, 0, 0.15, 1)"
			>
				<Grid horizontal />
				<Area
					dataKey="desktop"
					curve={curveNatural}
					fillOpacity={0.3}
					strokeWidth={2}
					fadeEdges
					gradientToOpacity={0}
					showLine={true}
					showHighlight={true}
				/>
				<Area
					dataKey="mobile"
					fill="var(--chart-2)"
					curve={curveNatural}
					fillOpacity={0.3}
					strokeWidth={2}
					fadeEdges
					gradientToOpacity={0}
					showLine={true}
					showHighlight={true}
				/>
				<XAxis />
				<ChartTooltip />
			</AreaChart>
		</Flex>
	);
}
