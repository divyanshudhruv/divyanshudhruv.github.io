export type InsightsDay = {
	date: string;
	views: number;
	visitors: number;
	sessions: number;
};

export interface InsightsResponse {
	data: InsightsDay[];
	meta: { isFallback: boolean };
}
