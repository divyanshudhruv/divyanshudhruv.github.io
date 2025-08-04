"use client";

import Magnet from "@/blocks/Animations/Magnet/Magnet";
import Waves from "@/blocks/Backgrounds/Waves/Waves";
import Dock from "@/blocks/Components/Dock/Dock";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";

import { Text, Button, Column, Row, Flex } from "@once-ui-system/core";
import {
  ArchiveIcon,
  ArrowUpRight,
  GitPullRequestIcon,
  House,
  MessageCircle,
  TagIcon,
} from "lucide-react";

import { Instrument_Serif, Inter } from "next/font/google";

import React from "react";
const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
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
  return (
    <>
      <Column
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
            <i>
              {" "}
              I{" "}
              <b>
                <u>study</u>
              </b>
              , play and code.{" "}
            </i>
            ✷
          </Text>
          <Text
            style={{
              color: "#FFF3E8",
              fontSize: "clamp(48px, 12vw, 140px)", // Responsive font size
              textAlign: "center",
              lineHeight: "1",
              fontWeight: "lighter",
              display: "inline-block", // Allow wrapping
              whiteSpace: "normal", // Allow wrapping
              wordBreak: "break-word", // Break long words if needed
            }}
            className={instrument_serif.className + " text-hero"}
          >
            look, i actually finished crafting
            <span
              style={{
                color: "#8db3ff",
                fontStyle: "italic",
                display: "inline",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
              className={instrument_serif.className + " text-hero"}
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
                <Text className={inter.className} style={{ fontSize: "12px" }}>
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
      </Column>
    </>
  );
}
