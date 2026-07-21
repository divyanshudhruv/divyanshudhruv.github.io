import { NextResponse } from "next/server";
import { getInsightsData } from "@/data/insights";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		const result = await getInsightsData();
		return NextResponse.json(result, {
			headers: { "Cache-Control": "no-store, max-age=0" },
		});
	} catch (err) {
		console.error("insights fetch failed", err);
		return NextResponse.json(
			{ error: "Failed to fetch insights" },
			{ status: 500 },
		);
	}
}
