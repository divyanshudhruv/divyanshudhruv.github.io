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
const images_row1 = [
  "https://skillicons.dev/icons?i=html",
  "https://skillicons.dev/icons?i=css",
  "https://skillicons.dev/icons?i=javascript",
  "https://skillicons.dev/icons?i=typescript",
  "https://skillicons.dev/icons?i=react",
  "https://skillicons.dev/icons?i=threejs",
  "https://skillicons.dev/icons?i=p5js",

  "https://skillicons.dev/icons?i=vercel",
  "https://skillicons.dev/icons?i=tailwind",
  "https://skillicons.dev/icons?i=bootstrap",
];

const images_row2 = [
  "https://skillicons.dev/icons?i=firebase",
  "https://skillicons.dev/icons?i=python",
  "https://skillicons.dev/icons?i=supabase",
  "https://skillicons.dev/icons?i=mysql",
  "https://skillicons.dev/icons?i=java",
  "https://skillicons.dev/icons?i=bun",
  "https://skillicons.dev/icons?i=figma",
  "https://skillicons.dev/icons?i=obsidian",
  "https://skillicons.dev/icons?i=vue",
  "https://skillicons.dev/icons?i=angular",
];

const images_row3 = [
  "https://skillicons.dev/icons?i=rabbitmq",
  "https://skillicons.dev/icons?i=django",
  "https://skillicons.dev/icons?i=docker",
  "https://skillicons.dev/icons?i=dotnet",
  "https://skillicons.dev/icons?i=anaconda",
  "https://skillicons.dev/icons?i=git",
  "https://skillicons.dev/icons?i=npm",
  "https://skillicons.dev/icons?i=robloxstudio",
  "https://skillicons.dev/icons?i=vscode",
  "https://skillicons.dev/icons?i=bash",
];
const education_row1 = [
  "/spa.png",

  "https://i.pinimg.com/736x/1d/5b/65/1d5b651263a4c831fa6ef4e28bef3eaf.jpg",
  "https://tse4.mm.bing.net/th/id/OIP.6ApXHS-og78F4IEE0VcLrQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
];

const education_row1_styles = [
  "rotate(5deg) translate(-100px)",
  "rotate(0deg) translate(0px)",
  "rotate(-3deg) translate(100px)",
];
const images_row4 = [
  "https://skillicons.dev/icons?i=codepen",
  "https://skillicons.dev/icons?i=arduino",
  "https://skillicons.dev/icons?i=flask",
  "https://skillicons.dev/icons?i=gcp",
  "https://skillicons.dev/icons?i=git",
  "https://skillicons.dev/icons?i=npm",
  "https://skillicons.dev/icons?i=discord",
  "https://skillicons.dev/icons?i=gitlab",
  "https://skillicons.dev/icons?i=pnpm",
];

const images_row5 = [
  "https://skillicons.dev/icons?i=gherkin",
  "https://skillicons.dev/icons?i=graphql",
  "https://skillicons.dev/icons?i=htmx",
  "https://skillicons.dev/icons?i=md",
  "https://skillicons.dev/icons?i=matlab",
  "https://skillicons.dev/icons?i=mongodb",
  "https://skillicons.dev/icons?i=nextjs",
  "https://skillicons.dev/icons?i=tensorflow",
  "https://skillicons.dev/icons?i=terraform",
  "https://skillicons.dev/icons?i=nodejs",
];

const getTransformStyles = (images: string[]) =>
  images.map((_, i) => {
    const gap = 100;
    const center = (images.length - 1) / 2;
    const offset = (i - center) * gap;
    const totalWidth = images.length * gap;
    let translateX;
    if (totalWidth < 500) {
      const spacing = 500 / images.length;
      translateX = i * spacing - 500 / 2 + spacing / 2;
    } else {
      translateX = offset;
    }
    let rotate = 0;
    if (i % 3 === 0) {
      rotate = -8;
    } else if (i % 3 === 1) {
      rotate = 7;
    }
    return `translateX(${translateX}px) rotate(${rotate}deg)`;
  });

const transformStyles_row1 = getTransformStyles(images_row1);
const transformStyles_row2 = getTransformStyles(images_row2);
const transformStyles_row3 = getTransformStyles(images_row3);
const transformStyles_row4 = getTransformStyles(images_row4);
const transformStyles_row5 = getTransformStyles(images_row5);

const lenis = new Lenis({
  autoRaf: true,
});

export default function Skills() {
  return (
    <>
      <Column
        fillWidth
        style={{
          minHeight: "fit-content",
          minWidth: "100vw",
        }}
        vertical="start"
        horizontal="center"
        padding="m"
        paddingX="m"
        gap="128"
      >
        {" "}
        <Column
          fillWidth
          horizontal="center"
          vertical="start"
          style={{}}
          id="skills"
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
            My awesome<br></br>
            <span
              style={{
                fontStyle: "italic",
                color: "#9887FF",
                textAlign: "center",
              }}
              className={instrument_serif.className}
            >
              Skillsets
            </span>
          </Text>
          <Flex height={4}></Flex>
          <IoArrowDownSharp color="#9887FF" size={100} className="down-arrow" />
          <Flex height={3}></Flex>
          {/* <div style={{ width: "100%", height: "100%", position: "absolute",top:"40px" }}>
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#9887FF77"
                  raysSpeed={1.5}
                  lightSpread={0.8}
                  rayLength={1.2}
                  followMouse={true}
                  mouseInfluence={0.1}
                  noiseAmount={0.1}
                  distortion={0.05}
                  className="custom-rays"
                />
              </div> */}

          <Column
            fillWidth
            center
            style={{
              minWidth: "100vw",
              alignItems: "center",
              justifyContent: "center",
            }}
            paddingBottom="m"
          >
            <BounceCards
              className="custom-bounceCards"
              images={images_row1}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles_row1}
              enableHover={false}
            />
            <BounceCards
              className="custom-bounceCards"
              images={images_row2}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1.2}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles_row2}
              enableHover={false}
            />
            <BounceCards
              className="custom-bounceCards"
              images={images_row3}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1.4}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles_row3}
              enableHover={false}
            />
            <Flex height={2}></Flex>
            <Magnet magnetStrength={10}>
              <Button
                weight="default"
                size="l"
                style={{
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",

                  backgroundColor: "#40404066",
                  border: "1px solid #222",
                  padding: "27px",
                  borderRadius: "1000px",
                }}
                onClick={() =>
                  window.open("https://github.com/divyanshudhruv", "_blank")
                }
              >
                <Text className={inter.className} style={{ fontSize: "12px" }}>
                  <Row center>
                    <ShinyText text="AND A FEW MORE"></ShinyText>
                    &nbsp;&nbsp;&nbsp;
                    <ArrowUpRight
                      size={19}
                      color={"#9887FF"}
                      fontWeight={100}
                    />
                  </Row>
                </Text>
              </Button>
            </Magnet>
          </Column>
        </Column>
      </Column>
    </>
  );
}
