"use client";

import dynamic from "next/dynamic";
import { Row } from "@once-ui-system/core";
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

export default function WidgetsSection() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    getWeather("Vadodara").then(setWeather);
  }, []);

  return (
    <SectionRoot>
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
        marginTop={1}
      >
        <WeatherCard
          city={weather?.city ?? "Vadodara"}
          temperature={weather?.temperature ?? 328}
          feelsLike={weather?.feelsLike ?? 42}
          high={weather?.high ?? 39}
          low={weather?.low ?? 29}
        />
        <MusicWidget />
      </Row>
    </SectionRoot>
  );
}
