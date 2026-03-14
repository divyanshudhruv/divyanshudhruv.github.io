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
import "./ContributionGraph.css";
import { BIO } from "@/data/core-config";

const username = BIO.github_username;

interface Contribution { 
  date: string;
  count: number;
  level: number;
}

interface Response {
  contributions: Contribution[];
  total: Record<number, number>;
}

// Simple in-memory cache with 24-hour expiration
const cache = new Map<string, { data: any; timestamp: number }>();

const getCachedContributions = async () => {
  const cacheKey = 'github-contributions';
  const now = Date.now();
  const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Check if we have cached data that's still valid
  const cached = cache.get(cacheKey);
  if (cached && (now - cached.timestamp) < cacheDuration) {
    return cached.data;
  }

  // Fetch fresh data
  const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de');
  const response = await fetch(url);
  const data = (await response.json()) as Response;
  const total = data.total[new Date().getFullYear()];

  // Filter to only show 2026 from January 1st to end of year
  const filteredContributions = data.contributions.filter(contribution => {
    const contributionDate = new Date(contribution.date);
    return contributionDate.getFullYear() === 2026;
  });

  const result = { contributions: filteredContributions, total };
  
  // Cache the result
  cache.set(cacheKey, { data: result, timestamp: now });
  
  return result;
};

const Example = () => {
  const [data, setData] = useState<Array<{ date: string; count: number; level: number }>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const fetchContributions = async () => {
      try {
        const { contributions } = await getCachedContributions();
        setData(contributions);
      } catch (error) {
        console.error('Failed to fetch GitHub contributions:', error);
        // Fallback to empty data if API fails
        setData([]);
      }
    };

    fetchContributions();
  }, []);

  if (!isClient || data.length === 0) {
    return null; // Don't render on server or before data is ready
  }

  return (
    <TooltipProvider>
      <div className="contribution-graph-container">
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
        </ContributionGraphFooter>
      </ContributionGraph>
    </div>
    </TooltipProvider>
  );
};

export default Example;
