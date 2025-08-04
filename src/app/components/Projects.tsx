"use client";

import BlobCursor from "@/blocks/Animations/BlobCursor/BlobCursor";
import Magnet from "@/blocks/Animations/Magnet/Magnet";
import Waves from "@/blocks/Backgrounds/Waves/Waves";
import Dock from "@/blocks/Components/Dock/Dock";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";

import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
  Row,
  ThemeSwitcher,
  Flex,
  StatusIndicator,
  Grid,
  Card,
  Media,
  Tag,
  Input,
  Textarea,
  useToast,
} from "@once-ui-system/core";
import {
  ArchiveIcon,
  ArrowDown,
  ArrowUpRight,
  GitPullRequestIcon,
  House,
  MessageCircle,
  Send,
  SettingsIcon,
  TagIcon,
} from "lucide-react";

import {
  Instrument_Serif,
  Poppins,
  Inter,
  Advent_Pro,
  Archivo_Narrow,
  Roboto_Serif,
  Noto_Serif,
  Source_Serif_4,
  PT_Serif,
  Geist_Mono,
} from "next/font/google";
import { BiArchive, BiHome } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import FlowingMenu from "@/blocks/Components/FlowingMenu/FlowingMenu";
import BounceCards from "@/blocks/Components/BounceCards/BounceCards";
import LightRays from "@/blocks/Backgrounds/LightRays/LightRays";
import { IoArrowDownSharp } from "react-icons/io5";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClickSpark from "@/blocks/Animations/ClickSpark/ClickSpark";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import Orb from "@/blocks/Backgrounds/Orb/Orb";
import React from "react";
const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
});

const geist_mono = Geist_Mono({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
});

const advent_pro = Advent_Pro({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
});
const archivo_narrow = Archivo_Narrow({
  weight: ["400", "700", "600", "500"],
  subsets: ["latin"],
});
const roboto_serif = Roboto_Serif({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
});
const noto_serif = Noto_Serif({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],

  subsets: ["latin"],
});
const source_serif_4 = Source_Serif_4({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200"],
  subsets: ["latin"],
});
const pt_serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Projects() {
  return (
    <>
      {" "}
      <Column
        fillWidth
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          boxShadow: "inset 0 25px 25px -25px #444444cc",
        }}
        vertical="start"
        horizontal="center"
        padding="m"
        paddingX="m"
        gap="128"
      >
        <LocoScrollImg />
        <Text className={geist_mono.className} style={{ fontWeight: "200" }}>
          {" "}
          <ScrollVelocity
            texts={[
              "☻ Divyanshu Dhruv ☻ ☻ Divyanshu Dhruv ☻ ☻ Divyanshu Dhruv ☻ ☻ Divyanshu Dhruv ☻",
              "☻ Portfolio ☻ ☻ Portfolio ☻ ☻ Portfolio ☻ ☻ Portfolio ☻ ☻ Portfolio ☻",
            ]}
            velocity={30}
            parallaxStyle={{
              fontFamily: geist_mono.className,
              fontSize: "20px",
              color: "#99FF33",
              lineHeight: "2.3",
            }}
          ></ScrollVelocity>{" "}
        </Text>

        <Flex
          center
          minWidth={48}
          maxWidth={48}
          maxHeight={29}
          minHeight={29}
          style={{
            backgroundColor: "#9887FF",
            boxShadow: "inset 0 25px 25px -25px #1d1d1d",
            borderRadius: "40px",
            border: "1.2px solid #999",
          }}
        >
          <Text
            style={{
              fontSize: "90px",
              textAlign: "center",
              lineHeight: "1.1",
              fontWeight: "lighter",
              display: "inline", // Ensure inline
              whiteSpace: "pre-line", // Preserve line breaks if any
              color: "#031113",
            }}
            className={instrument_serif.className}
          >
            I am a full-stack developer living in{" "}
            <span
              style={{
                fontStyle: "italic",
                display: "inline",
                fontWeight: 700,
              }}
              className={instrument_serif.className}
            >
              Vadodara, India
            </span>
          </Text>
        </Flex>

        <Column
          fillWidth
          horizontal="center"
          vertical="start"
          style={{}}
          id="projects"
        >
          <Text
            style={{
              fontSize: "120px",
              textAlign: "center",
              lineHeight: "1",
              fontWeight: "lighter",

              color: "#fff3e8",
            }}
            className={instrument_serif.className}
          >
            Some selected <br></br>
            <span
              style={{
                fontStyle: "italic",
                color: "#99FF33",
              }}
              className={instrument_serif.className}
            >
              Work
            </span>
          </Text>
          <Flex height={3}></Flex>
          <IoArrowDownSharp
            color="#99FF33"
            size={100}
            fontWeight={10}
            className="down-arrow"
          />
          <Flex height={3}></Flex>

          <Grid columns={2} fitWidth gap="160" marginTop="64">
            <ProjectCards
              title="refolio"
              tags={["Next.js", "Tailwind CSS", "TypeScript"]}
              description="A modern portfolio website showcasing my work and skills."
              image="https://divyanshudhruv.is-a.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fre-folio.94817651.png&w=3840&q=95"
            />

            <ProjectCards
              title="sigmn."
              tags={["n8n", "solana", "next.js"]}
              description="An NFT Marketplace for Artists and Collectors."
              image="/sigms.webp"
            />
          </Grid>
          <Flex height={3}></Flex>
          <Magnet magnetStrength={10}>
            <Button
              weight="default"
              size="l"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "#40404066",
                border: "1px solid #222",
                overflow: "hidden",

                padding: "27px",
                borderRadius: "1000px",
              }}
              onClick={() =>
                window.open("https://github.com/divyanshudhruv", "_blank")
              }
            >
              <Text className={inter.className} style={{ fontSize: "12px" }}>
                <Row center>
                  <ShinyText text="AND MORE"></ShinyText>
                  &nbsp;&nbsp;&nbsp;
                  <ArrowUpRight size={19} color={"#99FF33"} fontWeight={100} />
                </Row>
              </Text>
            </Button>
          </Magnet>
        </Column>
      </Column>
    </>
  );
}

function LocoScrollImg() {
  gsap.registerPlugin(ScrollTrigger);

  // 6 images, 3 per side, fixed order
  const images = [
    { src: "/donut.svg", alt: "Donut" },
    { src: "/pyramid.svg", alt: "Pyramid" },
    { src: "/pill.svg", alt: "Pill" },
    { src: "/sphere.svg", alt: "Sphere" },
    { src: "/cube.svg", alt: "Cube" },
    { src: "/cone.svg", alt: "Cone" },
  ];
  const count = 3;
  const sides = ["left", "right"];
  // Fixed speed factors for each image (can be customized)
  const speedFactorsBySide = [
    [1.5, 2.0, 2.5],
    [1.8, 2.2, 2.7],
  ];

  // Refs for all images
  const imgRefs = useRef<(HTMLImageElement | null)[][]>(
    Array.from({ length: sides.length }, () => Array(count).fill(null))
  );

  useEffect(() => {
    imgRefs.current.forEach((sideRefs, sideIdx) => {
      sideRefs.forEach((img, idx) => {
        if (!img) return;
        const speed = speedFactorsBySide[sideIdx][idx];
        gsap.to(img, {
          y: () => `-${speed * 200}px`,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Assign first 3 images to left, next 3 to right, fixed order
  return (
    <>
      {sides.map((side, sideIdx) => {
        const imgs = images.slice(sideIdx * count, sideIdx * count + count);
        const speedFactors = speedFactorsBySide[sideIdx];
        return imgs.map((img, idx) => {
          const baseGap = 30; // percent
          const offset = side === "left" ? 10 : 20;
          const top = `${offset + idx * baseGap}%`;
          const size = 125 + speedFactors[idx] * 85; // px
          return (
            <img
              key={side + "-" + img.src + "-" + idx}
              ref={(el) => {
                imgRefs.current[sideIdx][idx] = el;
              }}
              src={img.src}
              alt={img.alt}
              style={{
                position: "absolute",
                [side]: 0,
                top,
                width: size,
                height: size,
                zIndex: 1,
                pointerEvents: "none",
                opacity: 1,
                userSelect: "none",
              }}
              draggable={true}
            />
          );
        });
      })}
    </>
  );
}

type ProjectsProps = {
  title: string;
  statusColor?: string;
  image: string;
  tags: string[];
  description: string;
};

function ProjectCards({
  title,
  statusColor = "moss",
  image,
  tags,
  description,
}: ProjectsProps) {
  return (
    <Card
      direction="column"
      background="transparent"
      minWidth={33}
      maxWidth={33}
      overflow="hidden"
      radius="xl-8"
      border="transparent"
      gap="16"
      paddingBottom="32"
    >
      <Media
        src={image}
        fillWidth
        aspectRatio="4/3"
        unoptimized
        radius="xl-8"
        objectFit="cover"
      />
      <Row fillWidth horizontal="between" paddingX="s">
        <Text
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#FFF3E8",
            lineHeight: "1.1",
            textAlign: "left",
            padding: "0.5rem 1rem",
            textTransform: "uppercase",
          }}
          className={poppins.className}
        >
          <Row center>
            <StatusIndicator color={"moss"}></StatusIndicator>&nbsp;&nbsp;{" "}
            {title}
          </Row>
        </Text>
        <Row fitWidth gap="8">
          {tags.map((tag) => (
            <Tag
              key={tag}
              variant="info"
              fitWidth
              fitHeight
              padding="4"
              background="transparent"
              style={{
                padding: "0.6rem 0.6rem",
                backgroundColor: "transparent",
                borderColor: "#ffffff26",
                borderWidth: "1px",
                borderRadius: "1000px",
                textTransform: "uppercase",
              }}
            >
              <Text
                className={poppins.className}
                style={{
                  fontSize: "12px",
                  color: "#ffffff70",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </Text>
            </Tag>
          ))}
        </Row>
      </Row>
      <Flex paddingX="s">
        {" "}
        <Text
          className={inter.className}
          style={{
            fontSize: "13px",
            color: "#666",
          }}
        >
          {description}
        </Text>
      </Flex>
    </Card>
  );
}
