export interface WeatherData {
  city?: string;
  temperature?: number;
  feelsLike?: number;
  high?: number;
  low?: number;
}

export async function getWeather(city: string): Promise<WeatherData> {
  const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
  if (!res.ok) return { city };
  return res.json();
}
