"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClickSpark from "@/blocks/Animations/ClickSpark/ClickSpark";

import React, { useEffect, useRef } from "react";

import { Fraunces, Inter_Tight } from "next/font/google";
import {
  Button,
  Column,
  Fade,
  Flex,
  Grid,
  LogoCloud,
  Media,
  Row,
  SegmentedControl,
  Text,
} from "@once-ui-system/core";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";

import NeumorphButton from "@/components/ui/neumorph-button";
import LogosWorkedWith from "@/components/logos-worked-with";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const fraunces = Fraunces({
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter_tight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
});
const colors = {
  primary: "#FF5825",
  secondary: "#00B173",
  accent: "#f5a623",
  background_light: "#ffffff",
  background_dark: "#262626",
  foreground: "#EDEDED",
  text_link: "#2652FF",
  text: "#0F0F0F",
  text_gray: "#666666",
  text_gray_light: "#999999",
  text_lightest: "#fafafa",
};

export default function Home() {
  return (
    <>
      <Flex
        fillWidth
        fitHeight
        padding="xs"
        style={{ backgroundColor: colors.background_dark, height: "100vh" }}
        gap="4"
        direction="column"
      >
        {/* Hero */}
        <Flex
          fillWidth
          fitHeight
          radius="xl-8"
          overflow="hidden"
          center
          style={{
            backgroundColor: colors.background_light,
            minHeight: "fit-content",
          }}
        >
          <Column fillWidth fitHeight horizontal="center" vertical="start">
            {/* Nav */}
            <Row
              horizontal="between"
              fillWidth
              fitHeight
              padding="32"
              paddingX="64"
              vertical="center"
              style={{ position: "fixed", top: "20px", zIndex: "999999" }}
            >
              <Flex
                vertical="center"
                gap="12"
                fitWidth
                height={3.2}
                radius="m"
                background="neutral-medium"
                overflow="hidden"
                paddingRight="16"
              >
                <Media
                  fillHeight
                  fillWidth
                  height={3.2}
                  width={3.2}
                  src="https://framerusercontent.com/images/gRjq7HgJHGYGWT29nupkfQhNUB4.png?scale-down-to=1024"
                  unoptimized
                  radius="m"
                  border="neutral-strong"
                ></Media>
                <Text
                  onBackground="neutral-medium"
                  variant="body-default-l"
                  style={{ fontFamily: inter_tight.style.fontFamily }}
                >
                  Vadodara, India{" "}
                  <span style={{ fontFamily: "monospace", fontSize: "0.9em" }}>
                    🇮🇳
                  </span>
                </Text>
              </Flex>
              <Flex fitWidth height={3.2} gap="20">
                <Row
                  fitWidth
                  fillHeight
                  border="neutral-medium"
                  center
                  padding="s"
                  radius="m"
                >
                  <Button variant="tertiary" weight="default">
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1.1em",
                      }}
                      onBackground="neutral-weak"
                    >
                      Resume
                    </Text>
                  </Button>
                  <Button variant="tertiary" weight="default">
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1.1em",
                      }}
                      onBackground="neutral-weak"
                    >
                      About
                    </Text>
                  </Button>
                  <Button variant="tertiary" weight="default">
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1.1em",
                      }}
                      onBackground="neutral-weak"
                    >
                      Project
                    </Text>
                  </Button>
                  <Button variant="tertiary" weight="default">
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1.1em",
                      }}
                      onBackground="neutral-weak"
                    >
                      Experience
                    </Text>
                  </Button>
                </Row>
                <Button size="l" weight="default">
                  <Text
                    style={{
                      fontFamily: inter_tight.style.fontFamily,
                      color: colors.text_lightest,
                      fontSize: "1.1em",
                    }}
                    variant="body-default-l"
                  >
                    Email me
                  </Text>
                </Button>
              </Flex>
            </Row>

            {/* Hero */}
            <Flex center fillWidth fitHeight paddingTop="xl" direction="column">
              <Column fillWidth fitHeight center paddingTop="xl" gap="l">
                <Flex height={0.25}></Flex>
                <Text
                  style={{
                    fontFamily: fraunces.style.fontFamily,
                    fontSize: "3em",
                    color: colors.text,
                    fontWeight: "300",
                    lineHeight: "1.2",
                    maxWidth: "1000px",
                  }}
                  align="center"
                >
                  Hello, I'm Divyanshu. Delighted to have you explore my
                  portfolio. I craft awesome applications for{" "}
                  <span style={{ color: colors.text_gray }}>
                    open source community
                  </span>
                  .
                </Text>
                <NeumorphButton
                  intent={"danger"}
                  size={"large"}
                  style={{ paddingInline: "24px", cursor: "pointer" }}
                >
                  <Text
                    variant="body-default-xl"
                    style={{
                      fontFamily: inter_tight.style.fontFamily,
                      letterSpacing: "0.6px",
                    }}
                  >
                    Visit my Github
                  </Text>
                </NeumorphButton>
                {/* Worked with */}
                <Column
                  center
                  fillWidth
                  fitHeight
                  gap="12"
                  paddingTop="l"
                  overflow="hidden"
                >
                  {" "}
                  <Text
                    variant="body-default-xl"
                    style={{
                      fontFamily: inter_tight.style.fontFamily,
                      letterSpacing: "0.6px",
                    }}
                    onBackground="neutral-weak"
                  >
                    Already worked with
                  </Text>
                  <LogosWorkedWith /> <FlickeringGridDemo />
                </Column>{" "}
              </Column>{" "}
            </Flex>
          </Column>
        </Flex>

        {/* Projects */}
        <Flex
          fillWidth
          fitHeight
          radius="xl-8"
          overflow="hidden"
          direction="column"
          center
          paddingY="xl"
          gap="32"
          paddingX="l"
          style={{
            backgroundColor: colors.background_light,
            minHeight: "fit-content",
          }}
        >
          <Row fillWidth vertical="center" horizontal="between">
            <Text
              style={{
                fontFamily: fraunces.style.fontFamily,
                fontSize: "2.5em",
                color: colors.text,
                fontWeight: "300",
                lineHeight: "1.2",
                maxWidth: "1000px",
              }}
            >
              Featured Projects
            </Text>
            <Row center>
              <SegmentedControl
                fillWidth={false}
                textSize="xl"
                selected="grid"
                buttons={[
                  { value: "grid", label: "Grid" },
                  { value: "list", label: "List" },
                ]}
                onToggle={(value) => console.log(value)}
              />
            </Row>
          </Row>
          <Flex height={1}></Flex>
          <Grid columns={2} fillWidth fitHeight gap="40">
            <MinimalCardDemo />
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

export function FlickeringGridDemo() {
  return (
    <Row fillWidth maxHeight={13} height={13} fitHeight overflow="hidden">
      <Fade to="top">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          color="#FF5825"
          maxOpacity={0.8}
          flickerChance={0.1}
        />
      </Fade>
    </Row>
  );
}
const cards = [
  { src: "https://divyanshudhruv.is-a.dev/kanba.png", alt: "Card Image 1" },
  { src: "https://divyanshudhruv.is-a.dev/refolio.png", alt: "Card Image 2" },
  {
    src: "https://divyanshudhruv.is-a.dev/hello-link.png",
    alt: "Card Image 3",
  },
  {
    src: "https://framerusercontent.com/images/oevZjkSNUHoeeER1iv27eFxaCk.png?scale-down-to=512",
    alt: "Card Image 4",
  },
];

function MinimalCardDemo() {
  return (
    <>
      {cards.map((card) => (
        <MinimalCard>
         
            {" "}
            <MinimalCardImage
              src={card.src}
              alt={card.alt}
              style={{ minHeight: "450px" }}
            />
        </MinimalCard>
      ))}
    </>
  );
}
