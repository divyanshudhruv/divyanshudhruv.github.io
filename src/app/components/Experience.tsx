"use client";

import Magnet from "@/blocks/Animations/Magnet/Magnet";

import {
  Text,
  Button,
  Column,
  Row,
  Flex,
  Input,
  Textarea,
  useToast,
} from "@once-ui-system/core";
import { ArrowUpRight } from "lucide-react";

import { Instrument_Serif, Inter } from "next/font/google";

import { useEffect, useRef, useState } from "react";
import FlowingMenu from "@/blocks/Components/FlowingMenu/FlowingMenu";

import { IoArrowDownSharp } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React from "react";
const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
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
  return (
    <>
      <Column
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
      >
        <div
          style={{
            backgroundColor: "transparent",
            height: "50px",
            position: "relative",
            width: "100vw",
          }}
          className="svg-header-experience"
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
          className="svg-header-experience"
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
          id="experiences"
        >
          <Row fillWidth horizontal="between" paddingBottom="m">
            <Text
              className={inter.className + " text-joke-1"}
              style={{ textAlign: "left", color: "#031113" }}
              data-theme="dark"
            >
              SOME RANDOM JOKE
            </Text>
            <Text
              className={inter.className + " text-joke-2"}
              style={{
                textTransform: "uppercase",
                textAlign: "right",
                color: "#031113",
              }}
              data-theme="dark"
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
                      style={{
                        width: "100%",
                        height: "100%",
                        color: "#031113",
                      }}
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
                      style={{
                        width: "100%",
                        height: "100%",
                        color: "#031113",
                      }}
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
                      style={{
                        width: "100%",
                        height: "100%",
                        color: "#031113",
                      }}
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
              className={instrument_serif.className + " text-hero"}
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
      </Column>{" "}
    </>
  );
}
