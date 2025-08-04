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

export default function Navbar() {
  return (
    <>
      <Row
        paddingX="m"
        horizontal="between"
        fillWidth
        id="navbar"
        style={{
          position: "fixed",
          top: "16px",
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Row gap="16">
          {" "}
          <Button
            weight="default"
            size="l"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "#08151666",
              border: "1px solid #222",
              overflow: "hidden",
            }}
            href="#top"
          >
            <Row center>
              <Text
                className={instrument_serif.className}
                style={{
                  fontSize: "15px",
                  color: "#FFF3E8",
                  letterSpacing: "0.5px",
                  fontWeight: "600",
                }}
              >
                Divyanshu Dhruv
              </Text>
            </Row>
          </Button>
          <Button
            weight="default"
            size="l"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "#08151666",
              border: "1px solid #222",
              overflow: "hidden",
              cursor: "default",
            }}
          >
            <Row center>
              <Text className={inter.className} style={{ fontSize: "12px" }}>
                <Row center>
                  <StatusIndicator color="moss" size="m" />
                  &nbsp;&nbsp;&nbsp;
                  <ShinyText text="Available for any collaboration"></ShinyText>
                </Row>
              </Text>
            </Row>
          </Button>
        </Row>
        <Flex>
          {" "}
          <Magnet magnetStrength={10}>
            <Button
              weight="default"
              size="l"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "#08151666",
                border: "1px solid #222",
                overflow: "hidden",
              }}
              onClick={() =>
                window.open("https://github.com/divyanshudhruv", "_blank")
              }
            >
              <Text className={inter.className} style={{ fontSize: "12px" }}>
                <Row center>
                  <ShinyText text="VISIT MY GITHUB"></ShinyText>
                  &nbsp;&nbsp;&nbsp;
                  <ArrowUpRight size={19} color={"#99FF33"} fontWeight={100} />
                </Row>
              </Text>
            </Button>
          </Magnet>
        </Flex>
      </Row>
    </>
  );
}
