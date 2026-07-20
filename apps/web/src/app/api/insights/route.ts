import { NextResponse } from "next/server";
import { getInsightsData } from "@/lib/insights";

export const dynamic = "force-dynamic";

export async function GET() {
	const result = await getInsightsData();
	return NextResponse.json(result, {
		headers: { "Cache-Control": "no-store, max-age=0" },
	});
}
