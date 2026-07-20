"use client";

import { Flex, Media, Row, Text } from "@once-ui-system/core";
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
  { ssr: false },
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
      fillWidth
      gap={1}
    >
      <Flex fit>
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
      </Flex>
      <Inline className="font-default font-display font-s text-foreground wrap-break-word opacity-90">
        <b>
          Hi I'm Divyanshu Dhruv — upcoming intern at{" "}
          <span className="text-muted-foreground">
            Dopler. Previously at Next Bench.
          </span>
        </b>
      </Inline>
      <Text
        variant="label-default-xl"
        onBackground="neutral-weak"
        className="opacity-70 font-medium"
      >
        <b>
          Hi lol, I am an 18 y/o developer who is passionate about building
          products that solve real-world problems. I enjoy working on end-to-end
          projects, but I thrive when I can get my hands dirty with both code
          and pixels. I make music too.
        </b>
      </Text>
      <Flex
        fillWidth
        fitHeight
        direction="row"
        gap={1}
        m={{ direction: "column-reverse" }}
      >
        <Row center gap={1} className="duration-400">
          <PremiumButton
            text="Github"
            className="w-fit"
            boxColor="bg-orange-500"
            href={socials.github}
          />
          {/* <PremiumButton
            text="Linkedin"
            className="w-fit"
            boxColor="bg-sky-500"
            href={socials.linkedin}
          /> */}
        </Row>
        <Flex fillWidth className="pr-0 md:pr-40">
          <WavePlayer
            src="/struct.mp3"
            waveHeight={28}
            className="h-[44px] w-full rounded-full border border-border bg-accent bg-linear-to-br from-white/80 to-muted shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1)]"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
