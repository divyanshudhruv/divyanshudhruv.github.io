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
} from "@once-ui-system/core";
import {
  ArchiveIcon,
  ArrowDown,
  ArrowUpRight,
  GitPullRequestIcon,
  House,
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
} from "next/font/google";
import { BiArchive, BiHome } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import LocomotiveScroll from "locomotive-scroll";
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
      icon: <TagIcon size={18} fontWeight={100} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];
  const demoItems = [
    {
      link: "#",
      text: "CTO",
      image: "https://picsum.photos/600/400?random=5",
      desc: "CTO at Sonamii, leading Next Bench and building with Generative AI. Passionate about AI-agents, open-source, and innovation.",
    },
    {
      link: "#",
      text: "Full Stack Developer",
      image: "https://picsum.photos/600/400?random=2",
      desc: "I'm now a full-stack developer, contributing to open-source projects. My stack includes React, Next.js, TypeScript, Tailwind, etc.",
    },
    {
      link: "#",
      text: "Frontend Developer",
      image: "https://picsum.photos/600/400?random=3",
      desc: "I'm working as a front-end developer for 5+ years. I also built 30+ awesome UI designs and 50+ websites.",
    },
    {
      link: "#",
      text: "Apprentice",
      image: "https://picsum.photos/600/400?random=4",
      desc: "Worked on 20+ real-world projects and participated in several coding challenges and awesome workshops.",
    },
  ];
   const eduItems = [
    {
      link: "#",
      text: "High School",
      image: "https://picsum.photos/600/400?random=13",
      desc: "Delhi Public School, Vadodara",
    },
    {
      link: "#",
      text: "Senior Secondary",
      image: "https://picsum.photos/600/400?random=15",
      desc: "St. Patrick's Academy, Dehradun",
    },
    {
      link: "#",
      text: "Primary",
      image: "https://picsum.photos/600/400?random=27",
      desc: "The Montessori School, Dehradun",
    },
    
  ];
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

  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;
    let savedScrollY = 0;

    // Restore scroll position from localStorage
    if (typeof window !== "undefined") {
      savedScrollY = Number(localStorage.getItem("scrollY") || 0);
    }

    // LocomotiveScroll initialization
    scroll = new LocomotiveScroll();

    // Scroll to saved position after initialization
    setTimeout(() => {
      if (scroll && savedScrollY) {
        scroll.scrollTo(savedScrollY, { duration: 0, disableLerp: true });
      }
    }, 100);

    // Save scroll position on scroll
    const onScroll = (obj: { scroll: { y: number } }) => {
      if (obj && obj.scroll && typeof obj.scroll.y === "number") {
        localStorage.setItem("scrollY", String(obj.scroll.y));
      }
    };

    scroll.on("scroll", onScroll);

    // Cleanup
    return () => {
      scroll && scroll.destroy();
    };
  }, []);
  const lenis = new Lenis({
    autoRaf: true,
  });

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
      <ClickSpark
        sparkColor="#fff"
        sparkSize={11}
        sparkRadius={20}
        sparkCount={6}
        duration={500}
      >
        <Column
          fillWidth
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
            maxWidth: "100vw",
            overflowX: "hidden",
          }}
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
                  <Text
                    className={inter.className}
                    style={{ fontSize: "12px" }}
                  >
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
                  <Text
                    className={inter.className}
                    style={{ fontSize: "12px" }}
                  >
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
        </Column>
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
          <Text className={inter.className} style={{ fontWeight: "200" }}>
            {" "}
            <ScrollVelocity
              texts={[
                "☻ Divyanshu Dhruv ☻ ☻ Divyanshu Dhruv ☻ ☻ Divyanshu Dhruv ☻ ☻ Divyanshu Dhruv ☻",
                // "☻ Portfolio ☻ ☻ Portfolio ☻ ☻ Portfolio ☻ ☻ Portfolio ☻ ☻ Portfolio ☻",
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
          {/* <Column fillWidth horizontal="center" vertical="start" maxWidth={70} gap="32">
          <Text
            style={{
              fontSize: "70px",
              textAlign: "center",
              lineHeight: "1",
              fontWeight: "lighter",

              color: "#99FF33",
            }}
            className={instrument_serif.className}
          >
            About Me
          </Text>

          <Text
            className={inter.className}
            style={{
              color: "#b4b4b4ff",
              fontSize: "22px",
              textAlign: "center",
              lineHeight: "1.7",
              fontWeight: 400,
              letterSpacing: "0.01em",
              marginTop: "12px",
              marginBottom: "12px",
              display: "inline", // Prevent block-level elements from breaking lines
            }}
          >
            I'm a passionate full-stack developer who loves{" "}
            <b style={{ display: "inline", fontWeight: 700 }}>coding</b>.{" "}
            I enjoy building innovative projects, exploring new technologies, and working with{" "}
            <b style={{ display: "inline", fontWeight: 700 }}>React, Next.js, TypeScript, and Supabase</b>.{" "}
            <i style={{ display: "inline" }}>
              <u style={{ display: "inline" }}>My favorite part of coding</u>
            </i>{" "}
            is designing clean and efficient UI/UX while solving complex problems.{" "}
            I <u style={{ display: "inline" }}>love</u> experimenting with new frameworks and constantly improving my skills.{" "}
            Besides coding, I play <b style={{ display: "inline", fontWeight: 700 }}>guitar and piano</b>, creating my own music.{" "}
            I also enjoy gaming, with <b style={{ display: "inline", fontWeight: 700 }}>Minecraft</b> being one of my all-time favorites.
            <br />
            <br />
            <i style={{ display: "inline" }}>
              <b style={{ display: "inline", fontWeight: 700 }}>When I'm not coding</b>
            </i>
            , I enjoy playing video games, watching movies, and dabbling with{" "}
            <b style={{ display: "inline", fontWeight: 700 }}>Arduino</b>.{" "}
            I also enjoy <b style={{ display: "inline", fontWeight: 700 }}>learning new things</b>.{" "}
            I am currently learning about <b style={{ display: "inline", fontWeight: 700 }}>Web3 and DSA</b>.{" "}
            I'm also learning how to play the guitar like a{" "}
            <u style={{ display: "inline" }}>pro</u>.
          </Text>
        </Column> */}

          <Column fillWidth horizontal="center" vertical="start" style={{}}>
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
            <IoArrowDownSharp color="#99FF33" size={100} fontWeight={10} />
            <Flex height={3}></Flex>

            <Grid columns={2} fitWidth gap="160" marginTop="64">
              <Projects
                title="refolio"
                tags={["Next.js", "Tailwind CSS", "TypeScript"]}
                description="A modern portfolio website showcasing my work and skills."
                image="https://divyanshudhruv.is-a.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fre-folio.94817651.png&w=3840&q=95"
              />

              <Projects
                title="sigmn."
                tags={["n8n", "solana", "next.js"]}
                description="An NFT Marketplace for Artists and Collectors."
                image="/sigms.webp"
              />
              {/* <Projects
              title="HEHE,  IDK"
              tags={["BG"]}
              description="Some random stuff from internet."
              image="/anime.png"
            /> */}
              {/* <Projects
              title="nextbench"
              tags={["vite", "supabase"]}
              description="AI education platform with interactive coding challenges."
              image="/m2.png"
            />
             <Projects
              title="regex simplify"
              tags={["javascript", "regex"]}
              description="A tool to simplify and optimize regular expressions."
              image="/i4.png"
            /> */}
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
                  padding: "27px",
                  borderRadius: "1000px",
                }}
              >
                <Text className={inter.className} style={{ fontSize: "12px" }}>
                  <Row center>
                    <ShinyText text="AND A FEW MORE"></ShinyText>
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
          </Column>

          <Column fillWidth horizontal="center" vertical="start">
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
                Skills
              </span>
            </Text>
            <Flex height={4}></Flex>
            <IoArrowDownSharp color="#9887FF" size={100} />
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
                    backgroundColor: "#40404066",
                    border: "1px solid #222",
                    padding: "27px",
                    borderRadius: "1000px",
                  }}
                >
                  <Text
                    className={inter.className}
                    style={{ fontSize: "12px" }}
                  >
                    <Row center>
                      <ShinyText text="AND MORE"></ShinyText>
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

        <Column
          fillWidth
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
            boxShadow:
              "inset 0 25px 25px -25px #1c1c1ccc, inset 0 -25px 25px -25px #171717ff",
            backgroundColor: "#F9F4EB",
          }}
          vertical="start"
          horizontal="center"
        >
          {" "}
          <div
            style={{
              backgroundColor: "transparent",
              height: "180px",
              position: "relative",
              width: "100vw",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "100vw",
              height: "180px",
              top: 0,
              left: 0,
              zIndex: 2,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1920 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
              preserveAspectRatio="none"
            >
              <path d="M0 180 Q960 -80 1920 180 V0 H0 V180 Z" fill="#031113" />
            </svg>
          </div>
          <Column
            fillWidth
            horizontal="center"
            vertical="start"
            paddingTop="xl"
            paddingX="m"
          >
            <Row fillWidth horizontal="between" paddingBottom="m">
              <Text className={inter.className}>SOME RANDOM JOKES</Text>
              <Text
                className={inter.className}
                style={{ textTransform: "uppercase" }}
              >
                Why do programmers prefer dark mode? Because light attracts
                bugs!
              </Text>{" "}
              <Row>
                {[
                  {
                    svg: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="icon"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <path
                          fill="currentColor"
                          d="M10 0h10v10H10zM0 10h10v10H0z"
                        ></path>
                      </svg>
                    ),
                    bg: "#e5daf6",
                  },
                  {
                    svg: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="icon"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <path
                          d="M20 0H6v2h2v4h2v2h2v2h2V8h2V6h2V2h2V0ZM6 10v2H4v2H2v4H0v2h14v-2h-2v-4h-2v-2H8v-2H6Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    ),
                    bg: "#ffd2f3",
                  },
                  {
                    svg: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="icon"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M0 0h20v20H0V0Zm4 16v-2H2V6h2V4h2V2h8v2h2v2h2v8h-2v2h-2v2H6v-2H4Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ),
                    bg: "#fcdca6",
                  },
                ].map(({ svg, bg }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: bg,
                      width: 23,
                      height: 27,
                      marginLeft: i === 0 ? "5.5vw" : "10px",
                      padding: "5px",
                    }}
                  >
                    {svg}
                  </div>
                ))}
              </Row>
            </Row>
            <Row
              fillWidth
              horizontal="center"
              fitHeight
              style={{ paddingInline: "13vw" }}
            >
              {" "}
              <Text
                style={{
                  fontSize: "120px",
                  textAlign: "center",
                  lineHeight: "1",
                  fontWeight: "lighter",
                  color: "#031113",
                }}
                className={instrument_serif.className}
              >
               
                Experience and
                <br />
                <span
                  style={{
                    fontStyle: "italic",
                    color: "#7a5a37ff",
                    textAlign: "center",
                  }}
                  className={instrument_serif.className}
                >
                  Education
                </span>
              </Text>
            </Row>
            <style>
              {`
              @keyframes spin {
                100% { transform: rotate(360deg); }
              }
              `}
            </style>
            <Flex height={4}></Flex>
            <IoArrowDownSharp color="#7a5a37ff" size={100} />
            <Flex height={3}></Flex>
            <Flex style={{ paddingInline: "13vw" }} fillWidth>
              <FlowingMenu items={demoItems} />
            </Flex>
            <Flex fitHeight center fillWidth paddingY="s"> <span
                  style={{
                    display: "inline-block",
                    animation: "spin 2s linear infinite",
                       fontSize: "120px",
                  textAlign: "center",
                  lineHeight: "1",
                  fontWeight: "lighter",
                  color: "#031113",
                  }}
                >
                  ✷
                </span>{" "}</Flex>

            <Flex style={{ paddingInline: "13vw" }} fillWidth>
              <FlowingMenu items={eduItems} />
            </Flex>
          </Column>
          {/* <Flex height={5}></Flex>
          <Flex center>
            {" "}
            <BounceCards
              className="custom-bounceCards"
              images={education_row1}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1.4}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={education_row1_styles}
              enableHover={false}
              theme="dark"
            />
          </Flex> */}
        </Column>
      </ClickSpark>
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
type ProjectsProps = {
  title: string;
  statusColor?: string;
  image: string;
  tags: string[];
  description: string;
};

function Projects({
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
gsap.registerPlugin(ScrollTrigger);

function LocoScrollImg() {
  const images = [
    { src: "/donut.svg", alt: "Donut" },
    { src: "/pyramid.svg", alt: "Pyramid" },
    { src: "/pill.svg", alt: "Pill" },
    { src: "/sphere.svg", alt: "Sphere" },
    { src: "/cube.svg", alt: "Cube" },
  ];
  const count = 3;
  const sides = ["left", "right"];
  // Generate speed factors for each side and image
  const speedFactorsBySide = sides.map(() =>
    Array.from({ length: count }, () => 1.5 + Math.random() * 1.5)
  );

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

  return (
    <>
      {sides.map((side, sideIdx) => {
        const shuffled = images
          .map((img) => ({ ...img, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .slice(0, count);
        const speedFactors = speedFactorsBySide[sideIdx];
        return shuffled.map((img, idx) => {
          const baseGap = 30; // percent
          const offset = side === "left" ? 10 : 20;
          const top = `${offset + idx * baseGap}%`;

          const size = 110 + speedFactors[idx] * 85; // px
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
