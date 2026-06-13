"use client";

import { Flex, Media, Text } from "@once-ui-system/core";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Inline } from "@/components/inline";
import PremiumButton from "@/components/premium-button";
import { pfpOverlays } from "@/resources/pfp-overlays";
import { socials } from "@/resources/socials";

const WavePlayer = dynamic(
	() =>
		import("@/components/waves-cn/wave-player").then((m) => ({
			default: m.WavePlayer,
		})),
	{ ssr: true },
);

const pfpDurations = pfpOverlays.map(() => 3000);

export default function HeroSection({ id }: { id: string }) {
	const [pfpIndex, setPfpIndex] = useState(0);
	const [pfp, setPfp] = useState(pfpOverlays[0]);
	const [pfpFade, setPfpFade] = useState(true);

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
			id={id}
			direction="column"
			horizontal="start"
			vertical="start"
			gap={1}
		>
			<Media
				src={pfp}
				width={8}
				top={0}
				left={0}
				height={8}
				position="absolute"
				minHeight={8}
				minWidth={8}
				maxHeight={8}
				unoptimized
				maxWidth={8}
				className={`z-[9999] scale-[1.25] transition-opacity duration-500 ${pfpFade ? "opacity-100" : "opacity-0"}`}
			/>
			<Media
				src="https://i.pinimg.com/736x/bf/d9/8c/bfd98c0376634716e58cabeea9fbcd5d.jpg"
				width={8}
				height={8}
				minHeight={8}
				minWidth={8}
				maxHeight={8}
				unoptimized
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
				Hi lol, I am a developer who is passionate about building products that
				solve real-world problems. I enjoy working on end-to-end projects, but I
				thrive when I can get my hands dirty with both code and pixels. I make
				music too, checkout my latest track below.
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
					href={socials.github}
				/>
				<WavePlayer
					src="/isee.mp3"
					waveHeight={28}
					className="h-[44px] rounded-full border border-border bg-accent bg-linear-to-br from-white/80 to-muted shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1)]"
				/>
			</Flex>
		</Flex>
	);
}
