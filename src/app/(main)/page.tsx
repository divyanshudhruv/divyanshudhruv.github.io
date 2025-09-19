"use client";

import {
  Accordion,
  Avatar,
  Background,
  Button,
  Card,
  Column,
  CountFx,
  Fade,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  Kbar,
  Kbd,
  Line,
  Logo,
  Media,
  MegaMenu,
  MobileMegaMenu,
  NavIcon,
  OgCard,
  Option,
  Row,
  SegmentedControl,
  SmartLink,
  Tag,
  Text,
  ThemeSwitcher,
  ToggleButton,
  UserMenu,
} from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  HiDotsVertical,
  HiHome,
  HiMenu,
  HiMenuAlt1,
  HiMenuAlt2,
  HiOutlineBookmark,
  HiOutlineDotsVertical,
  HiOutlineFilter,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlineShare,
  HiOutlineStar,
  HiPlus,
  HiShare,
  HiStar,
  HiViewBoards,
} from "react-icons/hi";
import {
  HiOutlineHandRaised,
  HiOutlineHomeModern,
  HiOutlinePhoto,
  HiPhoto,
  HiSpeakerWave,
} from "react-icons/hi2";
import { Syne, Geist } from "next/font/google";
import { BsDiscord, BsLinkedin, BsMusicNote, BsTree, BsTreeFill } from "react-icons/bs";
const geist = Geist({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],

  display: "swap",
  variable: "--font-syne",
});

export default function Home() {
  return (
    <>
      <Flex
        fillWidth
        fillHeight
        center
        direction="column"
        style={{
          backgroundColor: "#f9f9f9cc", // Fallback color
          minHeight: "100svh",
        }}
        paddingX="m"
      >
        <Flex
          fillWidth
          style={{
            top: 0,
            right: 0,
            left: 0,
            margin: "auto",
            width: "100%", // Ensure width is 100%
            position: "absolute", // Move position here for clarity
          }}
          fitHeight
        >
          {" "}
          <Fade
            fillWidth
            position="absolute"
            top="0"
            to="bottom"
            topRadius="xs"
            height={8}
            style={{ zIndex: 5 }}
          />
          <Background
            fillWidth
            style={{ height: "100svh" }}
            gradient={{
              display: true,
              opacity: 100,
              x: 50,
              y: 0,
              colorStart: "accent-background-strong",
              colorEnd: "brand-background-strong",
            }}
            mask={{
              x: 50,
              y: 0,
              radius: 60,
            }}
          />
          <Fade
            fillWidth
            position="absolute"
            bottom="0"
            to="top"
            bottomRadius="xs"
            height={5}
            style={{ zIndex: 5 }}
          />
        </Flex>

        <Column center gap="20" marginTop="l">
          <Line
            maxWidth={3}
            height={0.2}
            radius="full"
            background="brand-strong"
            marginBottom="xs"
          ></Line> 
          <Heading
            variant="display-strong-xl"
            align="center"
            className={geist.className}
          >
            {" "}
            Divyanshu Dhruv
          </Heading>
          <Text
            variant="body-default-xl"
            onBackground="neutral-weak"
            align="center"
            style={{ lineHeight: 1.2, maxWidth: "550px" }}
          >
            A passionate developer and lifelong learner, dedicated to crafting
            innovative solutions and exploring the ever-evolving world of
            technology.
          </Text>
          <Column center marginTop="12" gap="12">
            {" "}
            <Row gap="12" center>
              {" "}
              <Flex
                padding="4"
                center
                border="neutral-strong"
                borderStyle="dashed"
                radius="xl"
              >
                <Button
                  size="l"
                  className={geist.className}
                  onClick={() =>
                    window.open("https://github.com/divyanshudhruv", "_blank")
                  }
                >
                  <Row center gap="12">
                    <Icon name="rocket" size="s" />
                    Explore my projects - GITHUB
                  </Row>
                </Button>
              </Flex>
              {/* <Flex
                padding="4"
                center
                border="neutral-strong"
                borderStyle="dashed"
                radius="xl"
              >
                <IconButton variant="secondary">
                  <BsLinkedin />
                </IconButton>
              </Flex> */}
            </Row>
            <Text
              variant="label-default-s"
              onBackground="neutral-weak"
              marginTop="12"
            >
              <i>Already shipped 15+ projects</i> / <i>🌆💤 DND</i>
            </Text>
          </Column>{" "}
         <Row center gap="4">
            <IconButton variant="ghost" href="https://re-folio.vercel.app/@divyanshudhruv"  target="_blank">
              <HiViewBoards />
            </IconButton>
            <Text variant="label-default-s" onBackground="neutral-weak">
              /
            </Text>
            <IconButton variant="ghost" href="https://www.linkedin.com/in/divyanshudhruv/" target="_blank">
              <BsLinkedin />
            </IconButton>
             <Text variant="label-default-s" onBackground="neutral-weak">
              /
            </Text>
            <IconButton variant="ghost" href="https://hellolink.vercel.app/divyanshudhruv" target="_blank">
              <BsTreeFill />
            </IconButton>

          </Row>
        </Column>
        <Column
          fitWidth
          maxWidth="l"
          paddingTop="xl"
          gap="20"
          center
          paddingX="xl"
        >
          {/* <Row fillWidth horizontal="end" gap="8">
            <Button size="s" variant="secondary" weight="default">
              <Row center gap="4">
                <HiOutlineFilter />
                All posts
              </Row>
            </Button>
            <SegmentedControl
              fillWidth={false}
              defaultSelected="feed"
              buttons={[
                { value: "for_you", label: "For you" },
                { value: "following", label: "Following" },
                { value: "others", label: "Others" },
              ]}
              onToggle={(value) => console.log(value)}
            />
          </Row> */}
        </Column>
      </Flex>
    </>
  );
}
