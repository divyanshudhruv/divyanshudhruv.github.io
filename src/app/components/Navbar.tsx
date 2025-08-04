"use client";

import Magnet from "@/blocks/Animations/Magnet/Magnet";

import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";

import {
  Text,
  Button,
 
  Row,
  Flex,
  StatusIndicator,

} from "@once-ui-system/core";
import {
 
  ArrowUpRight,

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

import React from "react";
const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
});




export default function Navbar() {
  return (
    <>
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
              overflow: "hidden",
            }}
            href="#top"
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
              overflow: "hidden",
              cursor: "default",
            }}
            className="available-button"
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
                overflow: "hidden",
              }}
              onClick={() =>
                window.open("https://github.com/divyanshudhruv", "_blank")
              }
            >
              <Text className={inter.className} style={{ fontSize: "12px" }}>
                <Row center>
                  <ShinyText text="VISIT MY GITHUB"></ShinyText>
                  &nbsp;&nbsp;&nbsp;
                  <ArrowUpRight size={19} color={"#99FF33"} fontWeight={100} />
                </Row>
              </Text>
            </Button>
          </Magnet>
        </Flex>
      </Row>
    </>
  );
}
