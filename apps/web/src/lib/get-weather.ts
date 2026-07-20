export interface WeatherData {
	city?: string;
	temperature?: number;
	feelsLike?: number;
	high?: number;
	low?: number;
	error?: string;
}

export async function getWeather(city: string): Promise<WeatherData> {
	const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
	if (!res.ok) {
		const body = await res.json().catch(() => ({}));
		return { city, error: body.error ?? "Failed to fetch weather" };
	}
	return res.json();
}
