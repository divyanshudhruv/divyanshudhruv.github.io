"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import { useEffect, useState } from "react";

// Simple seeded random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const Example = () => {
  const [data, setData] = useState<Array<{ date: string; count: number; level: number }>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const seed = 2026; // Fixed seed for consistent results
    const generatedData = eachDayOfInterval({
      start: startOfYear(new Date()),
      end: endOfYear(new Date()),
    }).map((date, index) => {
      const dateStr = formatISO(date, { representation: "date" });
      const count = Math.floor(seededRandom(seed + index) * 20);
      const level = Math.ceil((count / 20) * 4);

      return {
        date: dateStr,
        count,
        level,
      };
    });
    setData(generatedData);
  }, []);

  if (!isClient || data.length === 0) {
    return null; // Don't render on server or before data is ready
  }

  return (
    <TooltipProvider>
      <ContributionGraph data={data} blockMargin={1.8}>
        <ContributionGraphCalendar>
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger asChild>
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    className="cursor-pointer"
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">{activity.date}</p>
                <p>{activity.count} contributions</p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>
        <ContributionGraphFooter>
          <ContributionGraphTotalCount />
          <ContributionGraphLegend />
        </ContributionGraphFooter>{" "}
      </ContributionGraph>
    </TooltipProvider>
  );
};

export default Example;
