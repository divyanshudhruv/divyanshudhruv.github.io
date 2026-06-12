import AreaChart, {

  Area,
} from "./charts/area-chart";
import Grid from "./charts/grid";
import { curveNatural } from "@visx/curve";
import { ChartTooltip } from "./charts/tooltip";
import XAxis from "./charts/x-axis";
import { Flex } from "@once-ui-system/core";

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
export function ViewChart() {
  return (
    <Flex fillWidth fitHeight>
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
