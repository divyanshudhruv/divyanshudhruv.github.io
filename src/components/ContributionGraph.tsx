
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { unstable_cache } from "next/cache";

// const username = 'divyanshudhruv';

// interface GitHubContribution {
//   date: string;
//   count: number;
//   level: number;
// }

// interface GitHubApiResponse {
//   contributions: GitHubContribution[];
//   total: Record<string, number>;
// }

// const getCachedContributions = unstable_cache(
//   async () => {
//     const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de');
//     const response = await fetch(url);
//     const data = await response.json() as GitHubApiResponse;
//     const total = data.total?.[new Date().getFullYear()] || 0;

//     return { contributions: data.contributions || [], total };
//   },
//   ['github-contributions'],
//   { revalidate: 60 * 60 * 24 },
// );

// const maxCount = 20;
// const maxLevel = 4;
// const now = new Date();

const Example = async () => {
  const data = eachDayOfInterval({
    start: startOfYear(new Date()),
    end: endOfYear(new Date()),
  }).map((date) => {
    const dateStr = formatISO(date, { representation: "date" });
    const count = Math.floor(Math.random() * 20);
    const level = Math.ceil((count / 20) * 4);

    return {
      date: dateStr,
      count,
      level,
    };
  });

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
