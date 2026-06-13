import { Flex } from "@once-ui-system/core";
import { curveNatural } from "@visx/curve";
import AreaChart, { Area } from "./charts/area-chart";
import Bar from "./charts/bar";
import BarChart from "./charts/bar-chart";
import BarXAxis from "./charts/bar-x-axis";
import { FunnelChart } from "./charts/funnel-chart";
import Grid from "./charts/grid";
import { ChartTooltip } from "./charts/tooltip";
import XAxis from "./charts/x-axis";

const chartData = Array.from({ length: 12 }, (_, i) => ({
	date: new Date(2024, 0, i + 1),
	desktop: Math.max(
		10,
		Math.floor(
			180 +
				Math.sin((i + 0) / 4.77) * 38 +
				Math.cos((i + 0) / 1.7) * 24 +
				Math.sin((i + 0) / 0.61) * 14 +
				Math.cos((i + 0) / 0.31) * 8,
		),
	),
	mobile: Math.max(
		10,
		Math.floor(
			198 +
				Math.sin((i + 17) / 4.77) * 41 +
				Math.cos((i + 7) / 1.7) * 24 +
				Math.sin((i + 3) / 0.61) * 14 +
				Math.cos((i + 11) / 0.31) * 8,
		),
	),
}));

const data = [
	{ label: "Visitors", value: 12400, displayValue: "12.4k" },
	{ label: "Leads", value: 6800, displayValue: "6.8k" },
	{ label: "Qualified", value: 3200, displayValue: "3.2k" },
	{ label: "Proposals", value: 1500, displayValue: "1.5k" },
	{ label: "Closed", value: 620, displayValue: "620" },
];

export function ViewChart() {
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
			{/* <FunnelChart data={data} color="var(--chart-1)" layers={3} /> */}
		</Flex>
	);
}
