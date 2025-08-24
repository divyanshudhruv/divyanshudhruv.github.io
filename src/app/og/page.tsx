"use client";

import React, { useState } from "react";
import { Fraunces, Inter_Tight } from "next/font/google";
import { Column, Fade, Flex, Row, Text } from "@once-ui-system/core";
import { ReactLenis, useLenis } from "lenis/react";

import NeumorphButton from "@/components/ui/neumorph-button";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Meteors } from "@/components/magicui/meteors";
import { Earth, SparklesIcon } from "lucide-react";

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

function FlickeringGridDemo({ color }: { color: string }) {
  return (
    <Row
      fillWidth
      maxHeight={13}
      height={13}
      fitHeight
      overflow="hidden"
      padding="0"
    >
      <Fade to="top">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          color={color}
          maxOpacity={0.8}
          flickerChance={0.1}
        />
      </Fade>
    </Row>
  );
}
export default function Home() {
  const lenis = useLenis((lenis) => {});

  const [githubButtonClicked, setGithubButtonClicked] = useState(false);

  const [navFixed, setNavFixed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setNavFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const navContainer = document.querySelector(".nav-container");
      if (navContainer instanceof HTMLElement) {
        navContainer.style.top = navFixed ? "0px" : "20px";
      }
    }
  }, [navFixed]);
  return (
    <>
      {" "}
      {/* <ReactLenis root /> */}
      <Flex
        fillWidth
        fitHeight
        padding="m"
        style={{
          backgroundColor: colors.background_dark,
          height: "100vh",
          maxHeight: "100vh",
        }}
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
            maxHeight: "calc(100vh - 32px)",
          }}
        >
          <Flex
            fillWidth
            fillHeight
            style={{ width: "100vw", height: "100vh" }}
            position="absolute"
          >
            <Meteors angle={60} />
          </Flex>
          <Column fillWidth fitHeight horizontal="center" vertical="start">
            {/* Nav */}

            {/* Hero */}
            <Flex center fillWidth fitHeight paddingTop="xl" direction="column">
              <Column fillWidth fitHeight center paddingTop="xl" gap="l">
                <Flex height={0.25} className="hero-flex-top"></Flex>
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
                  className="hero-text"
                >
                  Hello, I'm Divyanshu. I have{" "}
                  <span>5+ years of experience in development</span>. Crafting
                  applications for{" "}
                  <span style={{ color: colors.text_gray }}>
                    open source community
                  </span>
                  .
                </Text>
                <NeumorphButton
                  loading={githubButtonClicked}
                  intent="danger"
                  size="large"
                  style={{
                    paddingInline: "24px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setGithubButtonClicked(true);
                    setTimeout(() => {
                      window.open(
                        "https://github.com/divyanshudhruv",
                        "_blank"
                      );
                      setGithubButtonClicked(false);
                    }, 800);
                  }}
                >
                  <Text
                    variant="body-default-xl"
                    style={{
                      fontFamily: inter_tight.style.fontFamily,
                      letterSpacing: "0.6px",
                    }}
                  >
                    <Row center gap="12">
                      Full-stack Developer{" "}
                      <SparklesIcon fill="#fff" size={20} />
                    </Row>
                  </Text>
                </NeumorphButton>
                {/* Worked with */}
                <Column center fillWidth fitHeight gap="12" overflow="hidden">
                  <Text
                    variant="body-default-m"
                    style={{
                      fontFamily: inter_tight.style.fontFamily,
                      letterSpacing: "0.6px",
                    }}
                    onBackground="neutral-weak"
                  >
                    <Row center gap="4">
                      Shipped 20+ projects for clients worldwide.
                      <Earth size={17} />
                    </Row>
                  </Text>
                  <Flex style={{ width: "100vw" }}>
                    <FlickeringGridDemo color={colors.primary} />
                  </Flex>
                </Column>
              </Column>
            </Flex>
          </Column>
        </Flex>
      </Flex>
    </>
  );
}
