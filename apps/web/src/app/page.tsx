"use client";

import {
  Accordion,
  AutoScroll,
  Column,
  Fade,
  Flex,
  Grid,
  IconButton,
  Line,
  Logo,
  MasonryGrid,
  Media,
  NavIcon,
  Row,
  StatusIndicator,
  Table,
  Text,
} from "@once-ui-system/core";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/resources/projects";
import { pfpOverlays } from "@/resources/pfp-overlays";

import { DotGothic16 } from "next/font/google";
import { Inline } from "@/components/inline";
import { getDate } from "@/lib/get-date";
import { getWeather, type WeatherData } from "@/lib/get-weather";

import { WavePlayer } from "@/components/waves-cn/wave-player";
import PremiumButton from "@/components/premium-button";
import { Button } from "@homepage/ui/components/button";
import { Badge } from "@homepage/ui/components/badge";
import { stacksData } from "@/resources/stacks";
import {
  ContributionLegend,
  GitHubCalendar,
} from "@/components/github-calendar";
import { StackButton } from "@/components/stack-button";
import WeatherCard from "@/components/weather-card";
import ProjectEvents from "@/components/project-events";
import MusicWidget from "@/components/spotify";
import {
  ArrowRightSquare,
  ArrowUpRightFromSquare,
  BubblesIcon,
  Lightbulb,
} from "lucide-react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { ExperienceBlock } from "@/components/experience";
import { experiences } from "@/resources/experiences";
import { education } from "@/resources/experiences";
import SVGMarqueeImg from "@/components/svg-marquee/svg-marquee-img";
import ProjectCard from "@/components/projects";
import { ProjectsBlock } from "@/components/projects-new";
import { Lens } from "@/components/lens";
import { ViewChart } from "@/components/chart";
import { FluidGradientText } from "@/components/fluid-gradient-text";
import { DottedMap, type Marker } from "@/components/dotted-map";

import type { TCountryCode } from "countries-list";
import React from "react";
import { AwardsBlock } from "@/components/awards";
import { TimerDisplay, TimerIcon, TimerRoot } from "@/components/timer";
import ImageTrail, { ImageTrailItem } from "@/components/image-trail";
import { images } from "@/resources/image-trail";

type MyMarker = Marker & {
  overlay: {
    countryCode: TCountryCode;
    label: string;
  };
};

const markers: MyMarker[] = [
  {
    lat: 22.2728,
    lng: 73.1984,
    size: 1,
    overlay: { countryCode: "IN", label: "Vadodara" },
  },
];
const bitcount_single = DotGothic16({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(true);

  useEffect(() => {
    getWeather("Vadodara").then((data) => {
      console.log("weather data:", data);
      setWeather(data);
      setWeatherLoading(false);
    });
  }, []);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const id = React.useId();

  const [pfpIndex, setPfpIndex] = useState(0);
  const [pfp, setPfp] = useState(pfpOverlays[0]);
  const [pfpFade, setPfpFade] = useState(true);

  const pfpDurations: number[] = pfpOverlays.map(() => 3000);

  useEffect(() => {
    const duration = pfpDurations[pfpIndex] ?? 3000;
    const totalTime = duration * 2;

    const timeout = setTimeout(() => {
      setPfpFade(false);
      setTimeout(() => {
        setPfpIndex((prev) => (prev + 1) % pfpOverlays.length);
        setPfp(pfpOverlays[(pfpIndex + 1) % pfpOverlays.length]);
        setPfpFade(true);
      }, 500);
    }, totalTime);

    return () => clearTimeout(timeout);
  }, [pfpIndex]);

  return (
    <Flex
      fillWidth
      fitHeight
      minWidth={"100vw"}
      padding={1}
      horizontal="center"
      direction="column"
      gap={1}
      vertical="start"
      className="h-[vh]"
    >
      <Flex vertical="start" fillWidth direction="column" fitHeight>
        <Column vertical="center" horizontal="start">
          <Flex
            className={bitcount_single.className}
            direction="row"
            gap={1}
            vertical="center"
            horizontal="center"
          >
            {" "}
            <Text variant="label-default-l" className="text-muted-foreground">
              {getDate()}
            </Text>
            <Flex fit overflow="hidden" className="roudned-full">
              <StatusIndicator
                color="orange"
                className="rounded-full"
                size="m"
              />
            </Flex>
          </Flex>
          <Flex className={bitcount_single.className}>
            <Text variant="display-default-s" className="text-foreground">
              Today
            </Text>
          </Flex>
        </Column>
        <Flex data-theme="light"></Flex>
      </Flex>
      {/* ================================================================ */}
      <Flex
        className=" bg-accent rounded-3xl "
        fillHeight
        fillWidth
        padding={3}
        direction="column"
        horizontal="center"
        vertical="start"
      >
        <Column
          fillWidth
          fillHeight
          horizontal="start"
          vertical="start"
          maxWidth={"s"}
          gap={4}
        >
          <Flex direction="column" horizontal="start" vertical="start" gap={1}>
            <Media
              src={pfp}
              width={8}
              unoptimized
              top={0}
              left={0}
              height={8}
              position="absolute"
              minHeight={8}
              minWidth={8}
              maxHeight={8}
              maxWidth={8}
              className={`z-[9999] scale-[1.25] transition-opacity duration-500 ${pfpFade ? "opacity-100" : "opacity-0"}`}
            ></Media>
            <Media
              src="https://i.pinimg.com/736x/bf/d9/8c/bfd98c0376634716e58cabeea9fbcd5d.jpg"
              //i.pinimg.com/736x/5d/7d/5c/5d7d5c5c58d23014d812132e1608b9fe.jpg
              width={8}
              unoptimized
              height={8}
              minHeight={8}
              minWidth={8}
              maxHeight={8}
              maxWidth={8}
              className="rounded-2xl"
            ></Media>
            <Inline className="font-display font-default font-s text-foreground">
              <b>
                Hi I'm Divyanshu Dhruv — intern at{" "}
                <span className="text-muted-foreground">
                  Once UI. Previously at Next Bench
                </span>
              </b>
            </Inline>
            <Text className="font-body font-normal  text-muted-foreground text-md">
              Hi lol, I am a developer who is passionate about building products
              that solve real-world problems. I enjoy working on end-to-end
              projects, but I thrive when I can get my hands dirty with both
              code and pixels. I make music too, checkout my latest track below.
            </Text>
            <Flex
              fillWidth
              fitHeight
              direction="row"
              gap={1}
              m={{ direction: "column-reverse" }}
              paddingRight={8}
            >
              <PremiumButton
                text="Github"
                className="w-fit"
                boxColor="bg-orange-500"
              />

              <WavePlayer
                src="/isee.mp3"
                waveHeight={28}
                // className="h-[44px] bg-white shadow-[0_4px_4px_-1px_rgba(0,0,0,0.1)] "
                className="h-[44px] bg-accent shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1)] rounded-full border border-border bg-linear-to-br from-white/80 to-muted"
              />
            </Flex>
          </Flex>
          <Flex
            fillWidth
            fillHeight
            direction="column"
            overflow="hidden"
            gap={0.5}
          >
            {" "}
            <GitHubCalendar
              username="divyanshudhruv"
              colorScheme="orange"
              cellSize={16}
              cellShape="rounded"
              timeRange="1-year"
              showDayLabels={true}
            />{" "}
            <Flex fillWidth horizontal="end">
              {" "}
              <ContributionLegend
                colorScheme="orange"
                cellSize={16}
                cellShape="rounded"
              />
            </Flex>
          </Flex>{" "}
          {/* ================================================================ */}
          <MasonryGrid
            columns={3}
            m={{ columns: 2 }}
            s={{ columns: 1 }}
            xs={{ columns: 1 }}
            gap={"12"}
          >
            <Lens>
              <Media
                src="https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781017684713-fxr10o.jpg"
                alt=""
                className="rounded-2xl"
                unoptimized
                aspectRatio="3 / 4"
              />
            </Lens>
            <Lens>
              <Media
                src="https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781021304729-jzuf4f.png"
                alt=""
                unoptimized
                className="rounded-2xl"
                aspectRatio="4 / 3"
              />
            </Lens>
            <Lens>
              <Media
                src="https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781015525373-1yythf.jpg"
                alt=""
                className="rounded-2xl"
                aspectRatio="3 / 4"
                unoptimized
              />
            </Lens>
            <Lens>
              <Media
                src="https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781015567660-0m349m.jpg"
                alt=""
                className="rounded-2xl"
                aspectRatio="4 / 5"
                unoptimized
              />
            </Lens>
            <Lens>
              <Media
                src="https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781017857397-neo5cq.png"
                alt=""
                className="rounded-2xl"
                aspectRatio="1 / 1"
                unoptimized
              />
            </Lens>
            <Lens>
              <Media
                src="https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781015545636-vzy0p5.jpg"
                alt=""
                unoptimized
                className="rounded-2xl"
                aspectRatio="4 / 3"
              />
            </Lens>
          </MasonryGrid>
          {/* ================================================================ */}
          <Flex direction="column" horizontal="start" vertical="start" gap={1}>
            <Inline className="font-display font-default font-s text-foreground">
              <b>
                A little about{" "}
                <span className="text-muted-foreground">me.</span>
              </b>
            </Inline>
            <Text className="font-body font-normal text-muted-foreground text-lg">
              I'm full-stack developer and Y Combinator Startup School India
              fellow. I specialize in building fast, responsive interfaces and
              architecting local-first AI infrastructure under my organization,
              Basalt3. Currently, I lead Next Bench, where I'm focused on
              building TNPS and AIAS applications to revolutionize student
              discovery, continuing a journey that began with a global hackathon
              win at age 13. <br />
              <br />
              Beyond code, I'm a Sho-Dan in Karate, a multi-instrumentalist
              music producer, and a competitive athlete with over 55 academic
              medals. Whether I'm designing minimalist digital experiences or
              curating my collection of 150+ rare Hot Wheels, I thrive at the
              intersection of rigorous technical engineering and creative
              discipline.
            </Text>
            <Flex
              direction="row"
              horizontal="start"
              vertical="center"
              gap={1}
              marginTop={1}
            >
              {" "}
              <PremiumButton
                text="Email me"
                className="w-fit"
                boxColor="bg-orange-500"
                pattern="mail"
              />
              <Text className="font-body font-normal text-muted-foreground text-lg">
                or
              </Text>
              <PremiumButton
                text="DM me on X"
                className="w-fit"
                boxColor="bg-teal-500"
                pattern="x"
              />
              <Text className="font-body font-normal text-muted-foreground text-lg">
                or
              </Text>
              <PremiumButton
                text="Connect on LinkedIn"
                className="w-fit"
                boxColor="bg-sky-500"
                pattern="linkedin"
              />
            </Flex>
          </Flex>
          <Flex fillWidth fitHeight>
            <DottedMap<MyMarker>
              markers={markers}
              pulse={true}
              renderMarkerOverlay={({ marker, x, y, r, index }) => {
                const { label } = marker.overlay;

                const fontSize = r * 2.5;
                const pillH = r * 5.5;
                const pillW = label.length * (fontSize * 0.62) + r * 1;
                const pillX = x + r + r * 1.8;
                const pillY = y - pillH / 2;
                return (
                  <g style={{ pointerEvents: "none" }} className="scale-1.8">
                    <rect
                      x={pillX}
                      y={pillY}
                      width={pillW}
                      height={pillH}
                      rx={pillH / 2}
                      fill="rgba(0,0,0,0.55)"
                    />
                    <text
                      x={pillX + r * 0.7}
                      y={y + fontSize * 0.35}
                      fontSize={fontSize}
                      fill="white"
                    >
                      {label}
                    </text>
                  </g>
                );
              }}
            />
          </Flex>
          {/* ================================================================ */}
          <Flex
            direction="column"
            horizontal="start"
            vertical="start"
            gap={1}
            fillWidth
            fitHeight
          >
            <Inline className="font-display font-default font-s text-foreground">
              <b>
                Skills & <span className="text-muted-foreground">stacks.</span>
              </b>
            </Inline>
            <Text className="font-body font-normal text-muted-foreground text-lg">
              Here's a snapshot of the technologies I work with regularly:
            </Text>

            <Column
              fillWidth
              fillHeight
              horizontal="center"
              vertical="start"
              gap={2}
            >
              {stacksData.map((cat) => (
                <Column
                  key={cat.category}
                  fillWidth
                  horizontal="start"
                  vertical="start"
                  gap={1}
                >
                  {/* <Text variant="label-default-s" className="text-muted-foreground font-medium">
                    {cat.category}
                  </Text> */}
                  <Flex
                    fillWidth
                    horizontal="start"
                    vertical="center"
                    wrap
                    gap={0.8}
                  >
                    {cat.items.map((item) => (
                      <StackButton
                        key={item.label}
                        url={item.url}
                        label={item.label}
                        color={item.color ?? cat.parentColor}
                        overrideMediaUrl={item.overrideMediaUrl}
                      />
                    ))}
                  </Flex>
                </Column>
              ))}
            </Column>
          </Flex>
          {/* ================================================================ */}
          <Flex
            direction="column"
            horizontal="start"
            vertical="start"
            gap={1}
            fillWidth
            fitHeight
          >
            <Inline className="font-display font-default font-s text-foreground">
              <b>
                Work and{" "}
                <span className="text-muted-foreground">Education.</span>
              </b>
            </Inline>
            <Text className="font-body font-normal text-muted-foreground text-lg">
              I've been fortunate to work with some incredible organizations and
              contribute to building some cool stuff. Here are my work and
              education:
            </Text>{" "}
            <Column fillWidth gap={1} marginTop={1}>
              <ExperienceBlock experiences={experiences} />
              <hr />
              <ExperienceBlock experiences={education} />
            </Column>
            <Column fillWidth gap={1} marginTop={1}>
              <Text className="font-body font-normal text-muted-foreground text-lg">
                Also I was given an opportunity to be the organizer of the
                tech-fest hackathon held at DPSV. Earlier in 2024 I had
                participated in a similar hackathon held at SPAD (district
                level), and I won the first prize. lol.
              </Text>{" "}
              <Flex
                direction="row"
                horizontal="start"
                vertical="center"
                gap={1}
              >
                {" "}
                <PremiumButton text="Get my Resume" boxColor="bg-teal-500" />
                <Text className="font-body font-normal text-muted-foreground text-lg">
                  or
                </Text>
                <PremiumButton
                  text="Do nothing"
                  boxColor="bg-yellow-500"
                  pattern="x"
                />
              </Flex>
            </Column>{" "}
            <SVGMarqueeImg />
          </Flex>
          {/* ================================================================ */}
          <Flex
            direction="column"
            horizontal="start"
            vertical="start"
            gap={1}
            fillWidth
            fitHeight
          >
            <Inline className="font-display font-default font-s text-foreground">
              <b>
                Featured{" "}
                <span className="text-muted-foreground">projects.</span>
              </b>
            </Inline>
            <Text className="font-body font-normal text-muted-foreground text-lg">
              Some of my favourite projects that I've worked on:
            </Text>
            <Column fillWidth marginTop={1}>
              {" "}
              <ProjectsBlock projects={projectsData} />
            </Column>
            <Flex
              fitWidth
              marginTop={1}
              direction="row"
              vertical="center"
              gap={1}
            >
              <PremiumButton
                text="View more"
                boxColor="bg-rose-500"
                pattern="linkedin"
              />
              <Text className="font-body font-normal text-muted-foreground text-lg">
                or
              </Text>

              <PremiumButton
                text="View on Github"
                boxColor="bg-indigo-500"
                pattern="arrow"
              />
            </Flex>
          </Flex>
          {/* ================================================================ */}
          <Flex
            direction="column"
            horizontal="start"
            vertical="start"
            gap={1}
            fillWidth
            fitHeight
          >
            <Inline className="font-display font-default font-s text-foreground">
              <b>
                Some <span className="text-muted-foreground">widgets.</span>
              </b>
            </Inline>
            <Text className="font-body font-normal text-muted-foreground text-lg">
              Some of my favourite widgets that I use on my dashboard:
            </Text>
            <Row
              horizontal="start"
              vertical="center"
              fitHeight
              fillWidth
              gap={1}
              marginTop={1}
            >
              {" "}
              <WeatherCard
                city={weather?.city ?? "Vadodara"}
                temperature={weather?.temperature ?? 328}
                feelsLike={weather?.feelsLike ?? 42}
                high={weather?.high ?? 39}
                low={weather?.low ?? 29}
              />
              <MusicWidget />
            </Row>
          </Flex>
          {/* ================================================================ */}
          <Flex
            direction="column"
            horizontal="start"
            vertical="start"
            gap={1}
            fillWidth
            fitHeight
          >
            <Inline className="font-display font-default font-s text-foreground">
              <b>
                Awards and{" "}
                <span className="text-muted-foreground">certifications.</span>
              </b>
            </Inline>
            <Text className="font-body font-normal text-muted-foreground text-lg">
              I've had the privilege of receiving recognition for my work and
              have successfully completed various certifications.
            </Text>{" "}
            <Column fillWidth marginTop={1}>
              {" "}
              <AwardsBlock awards={[]} />
            </Column>
            <Flex
              fitWidth
              marginTop={1}
              direction="row"
              vertical="center"
              gap={1}
            >
              {" "}
              <PremiumButton
                text="View more"
                boxColor="bg-taupe-500"
                pattern="linkedin"
              />
              <Text className="font-body font-normal text-muted-foreground text-lg">
                or
              </Text>
              <PremiumButton
                text="Do nothing"
                boxColor="bg-yellow-500"
                pattern="arrow"
              />
            </Flex>
          </Flex>
          {/* ================================================================ */}
          <Flex
            direction="column"
            horizontal="start"
            vertical="start"
            gap={1}
            fillWidth
            fitHeight
          >
            <Inline className="font-display font-default font-s text-foreground">
              <b>
                Blogs and{" "}
                <span className="text-muted-foreground">writings.</span>
              </b>
            </Inline>
            <Text className="font-body font-normal text-muted-foreground text-lg">
              The below are some of my blogs and writings that i have published
              on various platforms (not really).
            </Text>{" "}
            <Column fillWidth marginTop={1}>
              {" "}
              <AwardsBlock awards={[]} />
            </Column>
            <Flex
              fitWidth
              marginTop={1}
              direction="row"
              vertical="center"
              gap={1}
            >
              {" "}
              <PremiumButton
                text="View more"
                boxColor="bg-taupe-500"
                pattern="linkedin"
              />
              <Text className="font-body font-normal text-muted-foreground text-lg">
                or
              </Text>
              <PremiumButton
                text="Do nothing"
                boxColor="bg-yellow-500"
                pattern="arrow"
              />
            </Flex>
          </Flex>
          {/* ================================================================ */}
          <Flex
            direction="column"
            horizontal="start"
            vertical="start"
            gap={1}
            fillWidth
            fitHeight
          >
            <Inline className="font-display font-default font-s text-foreground">
              <b>
                Insights<span className="text-muted-foreground"></span>
              </b>
            </Inline>
            <Text className="font-body font-normal text-muted-foreground text-lg">
              The graph below shows the live insights of the visitors of this
              website. Hover over the bars to see the exact values. It's pretty
              cool right??
            </Text>

            <ViewChart />
          </Flex>
          {/* ================================================================ */}
          <Flex
            direction="column"
            fillWidth
            horizontal="center"
            vertical="start"
            gap={0.5}
          >
            {" "}
            <Flex fillWidth paddingBottom={2}>
              <hr className=" w-full text-taupe-900"></hr>
            </Flex>
            <Text
              className="font-body font-normal text-foreground/80 text-lg"
              align="right"
            >
              You've been browsing this website in current session for:
            </Text>{" "}
            <TimerRoot variant="outline" size="lg">
              <TimerIcon loading={true} />
              <TimerDisplay time="01:23" />
            </TimerRoot>
            <hr></hr>
            <hr></hr>
            <Text
              className="font-body font-normal text-foreground/80 text-lg"
              align="right"
            >
              Total Time spent on this website:
            </Text>{" "}
            <TimerRoot variant="outline" size="lg">
              <TimerIcon loading={true} />
              <TimerDisplay time="01:23" />
            </TimerRoot>
            <Flex fillWidth paddingTop={2}>
              <hr className=" w-full text-taupe-900"></hr>
            </Flex>
          </Flex>
          {/* ================================================================ */}
          <Flex
            direction="column"
            fillWidth
            fitHeight
            horizontal="center"
            vertical="center"
            gap={1}
          >
            <ImageTrail
              threshold={60}
              keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 0] }}
              keyframesOptions={{
                opacity: { duration: 1, times: [0, 0.001, 0.9, 1] },
                scale: { duration: 1, times: [0, 0.8, 1] },
              }}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 9,
                backgroundColor: "transparent",
              }}
            >
              {images.map((url, index) => (
                <ImageTrailItem key={index + url}>
                  <div className="w-30 sm:w-38 h-full relative ">
                    <img src={url} alt="image" className="object-cover" />
                  </div>
                </ImageTrailItem>
              ))}
            </ImageTrail>
            <Grid fillWidth columns={2} gap={0.5}>
              {" "}
              {/* =================== */}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              >
                Crafted by{" "}
              </Text>
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-orange-500/80">Divyanshu Dhruv</span>
              </Text>{" "}
              {/* =================== */}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              >
                Source code
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">Github</span>
              </Text>{" "}
              {/* ================== */}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              >
                Inspired by
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">once-ui.com</span>
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              ></Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">ui.shadcn.com</span>
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              ></Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">tailwindcss.com</span>
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              ></Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">bklit.ui</span>
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              ></Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">evilcharts.com</span>
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              ></Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">cult-ui.com</span>
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              ></Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">skiper-ui.com</span>
              </Text>{" "}
              {/* =================== */}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              >
                Deployed on
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">Vercel</span>
              </Text>
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              ></Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">Cummand</span>
              </Text>
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              ></Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">Github</span>
              </Text>
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              ></Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">Supabase Cron</span>
              </Text>
              {/* =================== */}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="right"
              >
                Analytics
              </Text>{" "}
              <Text
                className="font-body font-normal text-muted-foreground/80 text-lg"
                align="left"
              >
                <span className="text-foreground/80">Umami</span>
              </Text>
            </Grid>
          </Flex>
          {/* ================================================================ */}
        </Column>{" "}
      </Flex>{" "}
      <Flex fillWidth>
        <FluidGradientText text="divyanshudhruv" />
      </Flex>
    </Flex>
  );
}
