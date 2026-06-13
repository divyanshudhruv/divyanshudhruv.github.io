import { NextResponse } from "next/server";
import { getInsightsData } from "@/lib/insights";

export const dynamic = "force-dynamic";

export async function GET() {
	const data = await getInsightsData();
	return NextResponse.json(data, {
		headers: { "Cache-Control": "no-store, max-age=0" },
	});
}
