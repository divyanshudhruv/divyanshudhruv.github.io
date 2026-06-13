"use client";

import {
	Column,
	Flex,
	MasonryGrid,
	Media,
	Row,
	StatusIndicator,
	Text,
} from "@once-ui-system/core";
import type { TCountryCode } from "countries-list";
import dynamic from "next/dynamic";

import { DotGothic16 } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { AwardsBlock } from "@/components/awards-block";
import { DottedMap, type Marker } from "@/components/dotted-map";
import { ExperienceBlock } from "@/components/experience-block";
import { FluidGradientText } from "@/components/fluid-gradient-text";
import ImageTrail, { ImageTrailItem } from "@/components/image-trail";
import { Inline } from "@/components/inline";
import { Lens } from "@/components/lens";
import PremiumButton from "@/components/premium-button";
import { ProjectsBlock } from "@/components/projects-block";
import { ActionRow } from "@/components/section/action-row";
import { CreditsGrid } from "@/components/section/credits-grid";
import {
	SectionHeading,
	SectionRoot,
	SectionText,
} from "@/components/section/section-heading";
import { StackButton } from "@/components/stack-button";
import SVGMarqueeImg from "@/components/svg-marquee/svg-marquee-img";
import {
	TimerDisplay,
	TimerIcon,
	TimerRoot,
	useTimer,
} from "@/components/timer";
import WeatherCard from "@/components/weather-card";
import { getDate } from "@/lib/get-date";
import { getWeather, type WeatherData } from "@/lib/get-weather";
import { education, experiences } from "@/resources/experiences";
import { images } from "@/resources/image-trail";
import { pfpOverlays } from "@/resources/pfp-overlays";
import { projectsData } from "@/resources/projects";
import { stacksData } from "@/resources/stacks";

const WavePlayer = dynamic(
	() =>
		import("@/components/waves-cn/wave-player").then((m) => ({
			default: m.WavePlayer,
		})),
	{
		ssr: false,
		loading: () => (
			<div className="h-[44px] w-full animate-pulse rounded-full bg-muted" />
		),
	},
);

const GitHubCalendar = dynamic(
	() =>
		import("@/components/github-calendar").then((m) => ({
			default: m.GitHubCalendar,
		})),
	{
		ssr: false,
		loading: () => (
			<div className="h-[132px] w-full animate-pulse rounded-2xl bg-muted" />
		),
	},
);

const ContributionLegend = dynamic(
	() =>
		import("@/components/github-calendar").then((m) => ({
			default: m.ContributionLegend,
		})),
	{ ssr: false },
);

const ViewChart = dynamic(
	() =>
		import("@/components/view-chart").then((m) => ({ default: m.ViewChart })),
	{
		ssr: false,
		loading: () => (
			<div className="h-[300px] w-full animate-pulse rounded-2xl bg-muted" />
		),
	},
);

const MusicWidget = dynamic(() => import("@/components/music-widget"), {
	ssr: false,
	loading: () => (
		<div className="h-[200px] w-full animate-pulse rounded-2xl bg-muted" />
	),
});

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

const bitcountFont = DotGothic16({
	subsets: ["latin"],
	weight: "400",
});

function formatTotalTime(s: number) {
	const h = Math.floor(s / 3600);
	const m = Math.floor((s % 3600) / 60);
	const sec = s % 60;
	return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

const photoGridImages = [
	"https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781017684713-fxr10o.jpg",
	"https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781021304729-jzuf4f.png",
	"https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781015525373-1yythf.jpg",
	"https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781015567660-0m349m.jpg",
	"https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781017857397-neo5cq.png",
	"https://mritcuhqiyieibsbspwt.supabase.co/storage/v1/object/public/assets/site-media/6de62dbd-d8d4-43b9-915c-f7ea250938d5/1781015545636-vzy0p5.jpg",
];

const photoAspectRatios = [
	"3 / 4",
	"4 / 3",
	"3 / 4",
	"4 / 5",
	"1 / 1",
	"4 / 3",
];

const pfpDurations: number[] = pfpOverlays.map(() => 3000);
const TOTAL_KEY = "website-total-time";

export default function Home() {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [pfpIndex, setPfpIndex] = useState(0);
	const [pfp, setPfp] = useState(pfpOverlays[0]);
	const [pfpFade, setPfpFade] = useState(true);
	const [totalTime, setTotalTime] = useState(0);
	const totalStoredRef = useRef(0);
	const sessionRef = useRef(0);

	const session = useTimer({ loading: true, format: "HH:MM:SS" });

	useEffect(() => {
		getWeather("Vadodara").then((data) => {
			setWeather(data);
		});
	}, []);

	useEffect(() => {
		sessionRef.current = session.elapsedTime;
	});

	useEffect(() => {
		const saved = localStorage.getItem(TOTAL_KEY);
		const initial = saved ? Number.parseInt(saved, 10) : 0;
		totalStoredRef.current = initial;
		setTotalTime(initial);

		const save = () => {
			localStorage.setItem(
				TOTAL_KEY,
				String(totalStoredRef.current + sessionRef.current),
			);
		};

		const interval = setInterval(save, 10_000);
		window.addEventListener("beforeunload", save);
		return () => {
			clearInterval(interval);
			window.removeEventListener("beforeunload", save);
		};
	}, []);

	useEffect(() => {
		setTotalTime(totalStoredRef.current + session.elapsedTime);
	}, [session.elapsedTime]);

	useEffect(() => {
		const duration = pfpDurations[pfpIndex] ?? 3000;
		const timeout = setTimeout(() => {
			setPfpFade(false);
			setTimeout(() => {
				setPfpIndex((prev) => (prev + 1) % pfpOverlays.length);
				setPfp(pfpOverlays[(pfpIndex + 1) % pfpOverlays.length]);
				setPfpFade(true);
			}, 500);
		}, duration * 2);
		return () => clearTimeout(timeout);
	}, [pfpIndex]);

	return (
		<Flex
			fillWidth
			fitHeight
			minWidth="100vw"
			padding={1}
			horizontal="center"
			direction="column"
			gap={1}
			vertical="start"
			className="h-[vh]"
		>
			{/* Top Bar */}
			<Flex vertical="start" fillWidth direction="column" fitHeight>
				<Column vertical="center" horizontal="start">
					<Flex
						className={bitcountFont.className}
						direction="row"
						gap={1}
						vertical="center"
						horizontal="center"
					>
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
					<Flex className={bitcountFont.className}>
						<Text variant="display-default-s" className="text-foreground">
							Today
						</Text>
					</Flex>
				</Column>
				<Flex data-theme="light" />
			</Flex>

			<Flex
				className="rounded-3xl bg-accent"
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
					maxWidth="s"
					gap={4}
				>
					{/* Hero */}
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
						/>
						<Media
							src="https://i.pinimg.com/736x/bf/d9/8c/bfd98c0376634716e58cabeea9fbcd5d.jpg"
							width={8}
							unoptimized
							height={8}
							minHeight={8}
							minWidth={8}
							maxHeight={8}
							maxWidth={8}
							className="rounded-2xl"
						/>
						<Inline className="font-default font-display font-s text-foreground">
							<b>
								Hi I'm Divyanshu Dhruv — intern at{" "}
								<span className="text-muted-foreground">
									Once UI. Previously at Next Bench
								</span>
							</b>
						</Inline>
						<Text className="font-body font-normal text-md text-muted-foreground">
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
								className="h-[44px] rounded-full border border-border bg-accent bg-linear-to-br from-white/80 to-muted shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1)]"
							/>
						</Flex>
					</Flex>

					{/* GitHub Calendar */}
					<Flex
						fillWidth
						fillHeight
						direction="column"
						overflow="hidden"
						gap={0.5}
					>
						<GitHubCalendar
							username="divyanshudhruv"
							colorScheme="orange"
							cellSize={16}
							cellShape="rounded"
							timeRange="1-year"
							showDayLabels={true}
						/>
						<Flex fillWidth horizontal="end">
							<ContributionLegend
								colorScheme="orange"
								cellSize={16}
								cellShape="rounded"
							/>
						</Flex>
					</Flex>

					{/* Photo Grid */}
					<MasonryGrid
						columns={3}
						m={{ columns: 2 }}
						s={{ columns: 1 }}
						xs={{ columns: 1 }}
						gap="12"
					>
						{photoGridImages.map((src, i) => (
							<Lens key={i}>
								<Media
									src={src}
									alt=""
									className="rounded-2xl"
									unoptimized
									aspectRatio={photoAspectRatios[i]}
								/>
							</Lens>
						))}
					</MasonryGrid>

					{/* About */}
					<SectionRoot>
						<SectionHeading before="A little about" highlight="me." />
						<SectionText>
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
						</SectionText>
						<ActionRow
							buttons={[
								{
									text: "Email me",
									boxColor: "bg-orange-500",
									pattern: "mail",
								},
								{ text: "DM me on X", boxColor: "bg-teal-500", pattern: "x" },
								{
									text: "Connect on LinkedIn",
									boxColor: "bg-sky-500",
									pattern: "linkedin",
								},
							]}
						/>
					</SectionRoot>

					{/* Map */}
					<Flex fillWidth fitHeight>
						<DottedMap<MyMarker>
							markers={markers}
							pulse={true}
							renderMarkerOverlay={({ marker, x, y, r }) => {
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

					{/* Skills */}
					<SectionRoot>
						<SectionHeading before="Skills &" highlight="stacks." />
						<SectionText>
							Here's a snapshot of the technologies I work with regularly:
						</SectionText>
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
					</SectionRoot>

					{/* Experience */}
					<SectionRoot>
						<SectionHeading before="Work and" highlight="Education." />
						<SectionText>
							I've been fortunate to work with some incredible organizations and
							contribute to building some cool stuff. Here are my work and
							education:
						</SectionText>
						<Column fillWidth gap={1} marginTop={1}>
							<ExperienceBlock experiences={experiences} />
							<hr />
							<ExperienceBlock experiences={education} />
						</Column>
						<Column fillWidth gap={1} marginTop={1}>
							<SectionText>
								Also I was given an opportunity to be the organizer of the
								tech-fest hackathon held at DPSV. Earlier in 2024 I had
								participated in a similar hackathon held at SPAD (district
								level), and I won the first prize. lol.
							</SectionText>
							<ActionRow
								buttons={[
									{
										text: "Get my Resume",
										boxColor: "bg-teal-500",
									},
									{
										text: "Do nothing",
										boxColor: "bg-yellow-500",
										pattern: "x",
									},
								]}
							/>
						</Column>
						<SVGMarqueeImg />
					</SectionRoot>

					{/* Projects */}
					<SectionRoot>
						<SectionHeading before="Featured" highlight="projects." />
						<SectionText>
							Some of my favourite projects that I've worked on:
						</SectionText>
						<Column fillWidth marginTop={1}>
							<ProjectsBlock projects={projectsData} />
						</Column>
						<ActionRow
							buttons={[
								{
									text: "View more",
									boxColor: "bg-rose-500",
									pattern: "linkedin",
								},
								{
									text: "View on Github",
									boxColor: "bg-indigo-500",
									pattern: "arrow",
								},
							]}
						/>
					</SectionRoot>

					{/* Widgets */}
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

					{/* Awards */}
					<SectionRoot>
						<SectionHeading before="Awards and" highlight="certifications." />
						<SectionText>
							I've had the privilege of receiving recognition for my work and
							have successfully completed various certifications.
						</SectionText>
						<Column fillWidth marginTop={1}>
							<AwardsBlock awards={[]} />
						</Column>
						<ActionRow
							buttons={[
								{
									text: "View more",
									boxColor: "bg-taupe-500",
									pattern: "linkedin",
								},
								{
									text: "Do nothing",
									boxColor: "bg-yellow-500",
									pattern: "arrow",
								},
							]}
						/>
					</SectionRoot>

					{/* Blogs */}
					<SectionRoot>
						<SectionHeading before="Blogs and" highlight="writings." />
						<SectionText>
							The below are some of my blogs and writings that i have published
							on various platforms (not really).
						</SectionText>
						<Column fillWidth marginTop={1}>
							<AwardsBlock awards={[]} />
						</Column>
						<ActionRow
							buttons={[
								{
									text: "View more",
									boxColor: "bg-taupe-500",
									pattern: "linkedin",
								},
								{
									text: "Do nothing",
									boxColor: "bg-yellow-500",
									pattern: "arrow",
								},
							]}
						/>
					</SectionRoot>

					{/* Insights */}
					<SectionRoot>
						<SectionHeading before="Insights" />
						<SectionText>
							The graph below shows the live insights of the visitors of this
							website. Hover over the bars to see the exact values. It's pretty
							cool right??
						</SectionText>
						<ViewChart />
						<ActionRow
							buttons={[
								{
									text: "Reload for updates",
									boxColor: "bg-taupe-500",
									pattern: "arrow",
								},
							]}
						/>
					</SectionRoot>

					{/* Timer */}
					<Flex
						direction="column"
						fillWidth
						horizontal="center"
						vertical="start"
						gap={0.5}
					>
						<Flex fillWidth paddingBottom={2}>
							<hr className="w-full text-taupe-900" />
						</Flex>
						<Text
							className="font-body font-normal text-foreground/80 text-lg"
							align="right"
						>
							You've been browsing this website in current session for:
						</Text>
						<TimerRoot variant="outline" size="lg">
							<TimerIcon loading={true} />
							<TimerDisplay time={session.formattedTime.display} />
						</TimerRoot>
						<hr />
						<hr />
						<Text
							className="font-body font-normal text-foreground/80 text-lg"
							align="right"
						>
							Total Time spent on this website:
						</Text>
						<TimerRoot variant="outline" size="lg">
							<TimerIcon loading={true} />
							<TimerDisplay time={formatTotalTime(totalTime)} />
						</TimerRoot>
						<Flex fillWidth paddingTop={2}>
							<hr className="w-full text-taupe-900" />
						</Flex>
					</Flex>

					{/* Footer */}
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
									<div className="relative h-full w-30 sm:w-38">
										<img src={url} alt="" className="object-cover" />
									</div>
								</ImageTrailItem>
							))}
						</ImageTrail>
						<CreditsGrid />
					</Flex>
				</Column>
			</Flex>
			<Flex fillWidth>
				<FluidGradientText text="divyanshudhruv" />
			</Flex>
		</Flex>
	);
}
