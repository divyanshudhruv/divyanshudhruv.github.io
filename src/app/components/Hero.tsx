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

 const items = [
    {
      icon: <House size={18} />,
      label: "Home",
      onClick: () => (window.location.href = "#"),
    },
    {
      icon: <ArchiveIcon size={18} />,
      label: "Archive",
      onClick: () => (window.location.href = "#projects"),
    },
    {
      icon: <GitPullRequestIcon size={18} />,
      label: "Skill",
      onClick: () => (window.location.href = "#skills"),
    },
    {
      icon: <TagIcon size={18} fontWeight={100} />,
      label: "Experience",
      onClick: () => (window.location.href = "#experiences"),
    },
    {
      icon: <MessageCircle size={18} />,
      label: "Contact",
      onClick: () => (window.location.href = "#contact"),
    },
  ];
export default function Hero() {

return(<><Column
          fillWidth
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
            maxWidth: "100vw",
            overflowX: "hidden",
          }}
          id="nav"
          vertical="center"
          horizontal="center"
          padding="xs"
          paddingX="m"
          gap="104"
        >
          <Waves
            lineColor="#444748"
            backgroundColor="#031113"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={3}
          />
          {/* navbar */}

          <Column center maxWidth={70} fillWidth gap="32">
            <Text
              style={{
                color: "#FFF3E8",
                fontSize: "16px",
                textAlign: "center",
                lineHeight: "1",
                fontWeight: "300",
              }}
            >
              ☻ Hello, I study, play and code. ☻
            </Text>
            <Text
              style={{
                color: "#FFF3E8",
                fontSize: "140px",
                textAlign: "center",
                lineHeight: "1",
                fontWeight: "lighter",
                display: "inline", // Ensure inline
                whiteSpace: "pre-line", // Preserve line breaks if any
              }}
              className={instrument_serif.className}
            >
              look, i actually finished crafting
              <span
                style={{
                  color: "#8db3ff",
                  fontStyle: "italic",
                  display: "inline", // Ensure inline
                }}
                className={instrument_serif.className}
              >
                <GradientText
                  animationSpeed={2}
                  showBorder={false}
                  colors={["#99FF33"]}
                >
                  &nbsp;my portfolio!
                </GradientText>
              </span>
            </Text>

            <Flex marginTop="32">
              {" "}
              <Magnet magnetStrength={10}>
                <Button
                  weight="default"
                  size="l"
                  style={{
                    backdropFilter: "blur(10px)",
                    backgroundColor: "#08151666",
                    border: "1px solid #222",
                    padding: "27px",
                    borderRadius: "1000px",
                    overflow: "hidden",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/divyanshudhruv",
                      "_blank"
                    )
                  }
                >
                  <Text
                    className={inter.className}
                    style={{ fontSize: "12px" }}
                  >
                    <Row center>
                      <ShinyText text="LET'S WORK TOGETHER"></ShinyText>
                      &nbsp;&nbsp;&nbsp;
                      <ArrowUpRight
                        size={19}
                        color={"#99FF33"}
                        fontWeight={100}
                      />
                    </Row>
                  </Text>
                </Button>
              </Magnet>
            </Flex>
          </Column>
          <div
            style={{
              position: "fixed",
              left: "50%",
              bottom: "4px",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            <Dock
              items={items}
              panelHeight={68}
              baseItemSize={50}
              magnification={70}
            />
          </div>
        </Column></>)
}