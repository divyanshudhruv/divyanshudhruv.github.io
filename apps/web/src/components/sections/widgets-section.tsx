"use client";

import { Row } from "@once-ui-system/core";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
	SectionHeading,
	SectionRoot,
	SectionText,
} from "@/components/section/section-heading";
import WeatherCard from "@/components/weather-card";
import { getWeather, type WeatherData } from "@/lib/get-weather";

const MusicWidget = dynamic(() => import("@/components/music-widget"), {
	loading: () => (
		<div className="h-[200px] w-full animate-pulse rounded-2xl bg-muted" />
	),
});

export default function WidgetsSection({ id }: { id: string }) {
	const [weather, setWeather] = useState<WeatherData | null>(null);

	useEffect(() => {
		getWeather("Vadodara").then(setWeather);
	}, []);

	return (
		<SectionRoot id={id}>
			<SectionHeading before="Some" highlight="widgets." />
			<SectionText>
				Some of my favourite widgets that I use on my dashboard:
			</SectionText>
			<Row
				horizontal="start"
				vertical="center"
				fitHeight
				fillWidth
				gap={1}
				wrap
				marginTop={1}
			>
				<WeatherCard
					city={weather?.city ?? "NaN"}
					temperature={weather?.temperature ?? 0}
					feelsLike={weather?.feelsLike ?? 0}
					high={weather?.high ?? 0}
					low={weather?.low ?? 0}
				/>
				<MusicWidget />
			</Row>
		</SectionRoot>
	);
}
