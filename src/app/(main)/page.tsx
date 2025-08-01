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
} from "@once-ui-system/core";
import {
  ArchiveIcon,
  ArrowUpRight,
  GitPullRequestIcon,
  House,
  SettingsIcon,
  Tag,
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
} from "next/font/google";
import { BiArchive, BiHome } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
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

export default function Home() {
  const items = [
    {
      icon: <House size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <ArchiveIcon size={18} />,
      label: "Archive",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <GitPullRequestIcon size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <Tag size={18} fontWeight={100} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];

  return (
    <>
      {" "}
      {/* <BlobCursor
        blobType="circle"
        fillColor="#99FF33"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={1000000}
      /> */}
      <Column
        fillWidth
        style={{ minHeight: "100vh", minWidth: "100vw" }}
        vertical="start"
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
        <Row paddingX="m" horizontal="between" fillWidth>
          <Row gap="16">
            {" "}
            <Button
              weight="default"
              size="l"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "#08151666",
                border: "1px solid #222",
              }}
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
                }}
              >
                <Text className={inter.className} style={{ fontSize: "12px" }}>
                  <Row center>
                    <ShinyText text="VISIT MY GITHUB"></ShinyText>
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
        </Row>

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
            ☻ Stop scrolling & start building ☻
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
                }}
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
      <Column
        fillWidth
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          boxShadow: "inset 0 25px 25px -25px #222",
        }}
        vertical="start"
        horizontal="center"
        padding="m"
        paddingX="m"
        gap="128"
      >
        <Text className={inter.className} style={{ fontWeight: "200" }}>
          {" "}
          <ScrollVelocity
            texts={[
              "☻ Divyanshu Dhruv ☻ ☻ Divyanshu Dhruv ☻",
              "☻ Portfolio ☻ ☻ Portfolio ☻",
            ]}
            velocity={30}
            parallaxStyle={{
              fontFamily: inter.className,
              fontSize: "20px",
              color: "#99FF33",
              lineHeight: "2",
            }}
          ></ScrollVelocity>{" "}
        </Text>

        <Flex
          center
          minWidth={44}
          maxWidth={44}
          maxHeight={28}
          minHeight={28}
          style={{
            backgroundColor: "#9887FF",
            boxShadow: "inset 0 25px 25px -25px #1d1d1d",
            borderRadius: "40px",
            border: "1px solid #aaa",
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
            I am a full-stack developer based in{" "}
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
      </Column>
    </>
  );
}

function SvgSparkle() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="icon"
        style={{ width: "1.3em", height: "1.3em", verticalAlign: "middle" }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z"
          fill="currentColor"
        ></path>
      </svg>
    </>
  );
}
