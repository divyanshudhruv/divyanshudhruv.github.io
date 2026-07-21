import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const city = req.nextUrl.searchParams.get("city");
		if (!city)
			return NextResponse.json({ error: "city required" }, { status: 400 });

		const geoRes = await fetch(
			`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
		);
		if (!geoRes.ok) {
			const err = await geoRes.text();
			return NextResponse.json(
				{ error: `Geocoding failed: ${err}` },
				{ status: geoRes.status },
			);
		}
		const geo = await geoRes.json();
		if (!geo.results?.length)
			return NextResponse.json({ city }, { status: 404 });

		const { latitude, longitude, name } = geo.results[0];

		const weatherRes = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
		);
		if (!weatherRes.ok) {
			const err = await weatherRes.text();
			return NextResponse.json(
				{ error: `Weather fetch failed: ${err}` },
				{ status: weatherRes.status },
			);
		}
		const weather = await weatherRes.json();

		return NextResponse.json({
			city: name,
			temperature: Math.round(weather.current.temperature_2m),
			feelsLike: Math.round(weather.current.apparent_temperature),
			high: Math.round(weather.daily.temperature_2m_max[0]),
			low: Math.round(weather.daily.temperature_2m_min[0]),
		});
	} catch (err) {
		return NextResponse.json({ error: String(err) }, { status: 500 });
	}
}
