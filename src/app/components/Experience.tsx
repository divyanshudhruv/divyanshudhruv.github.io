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

  const demoItems = [
    {
      link: "",
      text: "CTO",
      image: "https://picsum.photos/600/400?random=5",
      desc: "CTO at Sonamii, leading Next Bench and building with Generative AI. Passionate about AI-agents, open-source, and innovation.",
    },
    {
      link: "",
      text: "Full Stack Developer",
      image: "https://picsum.photos/600/400?random=2",
      desc: "I'm now a full-stack developer, contributing to open-source projects. My stack includes React, Next.js, TypeScript, Tailwind, etc.",
    },
    {
      link: "",
      text: "Frontend Developer",
      image: "https://picsum.photos/600/400?random=3",
      desc: "I'm working as a front-end developer for 5+ years. I also built 30+ awesome UI designs and 50+ websites.",
    },
    {
      link: "",
      text: "Novice",
      image: "https://picsum.photos/600/400?random=4",
      desc: "Worked on 20+ real-world projects and participated in several coding challenges and awesome workshops.",
    },
  ];
  const eduItems = [
    {
      link: "",
      text: "High School",
      image: "https://picsum.photos/600/400?random=13",
      desc: "DPSV, Vadodara",
    },
    // {
    //   link: "#",
    //   text: "Senior Secondary",
    //   image: "https://picsum.photos/600/400?random=15",
    //   desc: "St. Patrick's Academy, Dehradun",
    // },
    // {
    //   link: "#",
    //   text: "Primary",
    //   image: "https://picsum.photos/600/400?random=27",
    //   desc: "The Montessori School, Dehradun",
    // },
  ];
 
export default function Experience() {

      const [email, setEmail] = useState("");
      const [text, setText] = useState("");
    
      const { addToast } = useToast();
    
      function handleSendEmailResend() {
        if (!email || !text) {
          addToast({ message: "Please fill in all fields.", variant: "danger" });
          return;
        }
        fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, text }),
        })
          .then((res) => {
            if (res.ok) {
              addToast({ message: "Email sent successfully!", variant: "success" });
            } else {
              addToast({
                message: `Failed to send email. ${res.statusText}`,
                variant: "danger",
              });
            }
          })
          .catch(() => {
            addToast({ message: "An error occurred.", variant: "danger" });
          });
      }

    return(<><Column
              fillWidth
              style={{
                minHeight: "100vh",
                minWidth: "100vw",
                boxShadow: "inset 0 25px 25px -25px #1c1c1ccc",
                backgroundColor: "#F9F4EB",
              }}
              vertical="start"
              horizontal="center"
              gap="128"
              paddingBottom="64"
              id="experiences"
            >
              <LocoScrollFlatImg />{" "}
              <div
                style={{
                  backgroundColor: "transparent",
                  height: "50px",
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
                  <Text className={inter.className}>SOME RANDOM JOKE</Text>
                  <Text
                    className={inter.className}
                    style={{ textTransform: "uppercase" }}
                  >
                    Why do programmers prefer dark mode?{" "}
                    <i>Because light attracts bugs!</i>
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
                <IoArrowDownSharp
                  color="#7a5a37ff"
                  size={100}
                  className="down-arrow"
                />
                <Flex height={3}></Flex>
                <Flex style={{ paddingInline: "13vw" }} fillWidth>
                  <FlowingMenu items={demoItems} />
                </Flex>
                <Flex fitHeight center fillWidth paddingY="s">
                  {" "}
                  <span
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
                  </span>{" "}
                </Flex>
    
                <Flex style={{ paddingInline: "13vw" }} fillWidth>
                  <FlowingMenu items={eduItems} />
                </Flex>
              </Column>
              <Column
                fillWidth
                horizontal="center"
                vertical="start"
                style={{}}
                id="contact"
              >
                <Flex style={{ paddingInline: "13vw" }} fillWidth>
                  {" "}
                  <Column fillWidth horizontal="center" paddingBottom="m" gap="20">
                    <Text
                      className={inter.className}
                      style={{ textTransform: "uppercase" }}
                    >
                      CONTACT ME USING THIS FORM&nbsp;
                      <i>
                        <b>DIRECTLY!</b>
                      </i>
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
                            marginLeft: i === 0 ? "0" : "10px",
                            padding: "5px",
                          }}
                        >
                          {svg}
                        </div>
                      ))}
                    </Row>
                  </Column>
                </Flex>
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
                  Contact <br></br>
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#7a5a37",
                    }}
                    className={instrument_serif.className}
                  >
                    Me
                  </span>
                </Text>
                {/* <Flex height={3}></Flex>
                <IoArrowDownSharp color="#7a5a37" size={100} fontWeight={10} />*/}
                <Flex height={3}></Flex>{" "}
                <Column
                  fillWidth
                  fitHeight
                  style={{ paddingInline: "25vw" }}
                  gap="20"
                >
                  <Input
                    id=""
                    height="m"
                    placeholder="Your email"
                    style={{ padding: "50px !important" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Textarea
                    id=""
                    placeholder="Your message"
                    lines={15}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <Row fillWidth horizontal="start">
                    <Magnet magnetStrength={0}>
                      <Button
                        weight="default"
                        size="l"
                        style={{
                          backdropFilter: "blur(10px)",
                          backgroundColor: "#081516",
                          overflow: "hidden",
    
                          border: "1px solid #222",
                          padding: "20px",
                        }}
                        onClick={handleSendEmailResend}
                      >
                        <Text
                          className={inter.className}
                          style={{ fontSize: "12px" }}
                        >
                          <Row center>
                            SEND &nbsp;&nbsp;&nbsp;
                            <ArrowUpRight
                              size={19}
                              color={"#fff"}
                              fontWeight={100}
                            />
                          </Row>
                        </Text>
                      </Button>
                    </Magnet>
                  </Row>
                </Column>
              </Column>
            </Column>{" "}</>)
}


function LocoScrollFlatImg() {
  gsap.registerPlugin(ScrollTrigger);

  // 6 images, 3 per side, fixed order
  const images = [
    { src: "/shape1.svg", alt: "Shape 1" },
    { src: "/shape2.svg", alt: "Shape 2" },
    { src: "/shape3.svg", alt: "Shape 3" },
    { src: "/shape4.svg", alt: "Shape 4" },
    { src: "/shape5.svg", alt: "Shape 5" },
    { src: "/shape1.svg", alt: "Shape 6" },
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
          const size = 75 + speedFactors[idx] * 85; // px
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
                userSelect: "none",
                transition: "opacity 0.3s, transform 0.3s",
                opacity: 1,
              }}
              draggable={true}
            />
          );
        });
      })}
    </>
  );
}
