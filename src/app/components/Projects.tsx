"use client";

import Magnet from "@/blocks/Animations/Magnet/Magnet";

import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";

import {
  Text,
  Button,
  Column,
  Row,
  Flex,
  StatusIndicator,
  Grid,
  Card,
  Media,
  Tag,
  Scroller,
} from "@once-ui-system/core";
import { ArrowUpRight } from "lucide-react";

import { Instrument_Serif, Poppins, Inter, Geist_Mono } from "next/font/google";
import { useEffect, useRef } from "react";

import { IoArrowDownSharp } from "react-icons/io5";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const projectsData = [
  {
    title: "Re-folio",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    description: "A modern portfolio website showcasing my work and skills.",
    image: "/refolio.png",
    href: "https://re-folio.vercel.app",
  },
  {
    title: "Kanba",
    tags: ["OS Contributor", "Tailwind CSS", "TypeScript"],
    description: "A Kanban board application for task management.",
    image: "/kanba.png",
    href: "https://kanba.co",
  },
  {
    title: "Hellolink",
    tags: ["Vite", "Supabase"],
    description: "An alternative to linktree",
    image: "/hello-link.png",
    href: "https://hellolink.vercel.app",
  },
  {
    title: "Sourceful Space",
    tags: ["JAVASCRIPT", "NEXTJS", "ONCEUI"],
    description: "Space for open-source projects and startups.",
    image:
      "https://framerusercontent.com/images/oevZjkSNUHoeeER1iv27eFxaCk.png?scale-down-to=512",
    href: "https://sourceful-space.vercel.app",
  },
];

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
        <Text
          className={inter.className + " scroll-velocity-text"}
          style={{ fontWeight: "200" }}
        >
          {" "}
          <ScrollVelocity
            texts={[
              "☻ Divyanshu Dhruv ☻ Divyanshu Dhruv ☻ Divyanshu Dhruv ☻ Divyanshu Dhruv",
              "☻ Portfolio ☻ Portfolio ☻ Portfolio ☻ Portfolio ☻ Portfolio",
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
          className="location-container"
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
            className={instrument_serif.className + " location-text"}
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
            className={instrument_serif.className + " text-hero"}
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

          <Grid
            columns={2}
            fillWidth
            marginTop="64"
            className="projects-grid"
            style={{
              gap: "5vw",
              minWidth: "10% ",
              maxWidth: "1000px !important",
            }}
          >
            {projectsData.map((project) => (
              <ProjectCards
                key={project.title}
                title={project.title}
                tags={project.tags}
                description={project.description}
                image={project.image}
                href={project.href}
              />
            ))}
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

type ProjectsProps = {
  title: string;
  statusColor?: string;
  image: string;
  tags: string[];
  description: string;
  href?: string;
};

function ProjectCards({
  title,
  statusColor = "moss",
  image,
  tags,
  description,
  href,
}: ProjectsProps) {
  return (
    <Flex fillWidth style={{ maxWidth: "100vw" }} className="project-card">
      <Card
        direction="column"
        background="transparent"
        overflow="hidden"
        radius="xl-8"
        border="transparent"
        gap="16"
        paddingBottom="32"
        fillWidth
        fillHeight
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
            onClick={() => {
              if (href) {
                window.open(href, "_blank");
              }
            }}
          >
            <Row center>
              <StatusIndicator color={"moss"}></StatusIndicator>&nbsp;&nbsp;{" "}
              {title}
            </Row>
          </Text>{" "}
          <Scroller direction="row" maxWidth={12} fadeColor="transparent">
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
          </Scroller>
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
    </Flex>
  );
}
