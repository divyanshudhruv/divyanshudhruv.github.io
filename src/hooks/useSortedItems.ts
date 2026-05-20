import { useMemo } from 'react';

const parseDate = (dateStr: string | undefined) => {
  if (!dateStr) return 0;
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    let part1 = parseInt(parts[0], 10);
    let part2 = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);
    if (year < 100) year += 2000;
    
    let day = part2;
    let month = part1;
    if (part1 > 12) {
      day = part1;
      month = part2;
    }
    return new Date(year, month - 1, day).getTime();
  }
  return new Date(dateStr).getTime() || 0;
};

export const useSortedItems = <T extends { lastUpdated?: string }>(
  items: T[],
  order: 'asc' | 'desc' = 'desc'
): T[] => {
  return useMemo(() => {
    return [...items].sort((a, b) => {
      const dateA = parseDate(a.lastUpdated);
      const dateB = parseDate(b.lastUpdated);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [items, order]);
};
