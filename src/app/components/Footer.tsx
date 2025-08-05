"use client";

import Magnet from "@/blocks/Animations/Magnet/Magnet";
import { Text, Column, Row, Flex, Button } from "@once-ui-system/core";

import { Instrument_Serif, Poppins, Inter, Geist_Mono } from "next/font/google";

import { useEffect, useState } from "react";

import React from "react";

const geist_mono = Geist_Mono({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <>
      {" "}
      <Column
        fillWidth
        style={{
          minHeight: "fit-content",
          minWidth: "100vw",
          boxShadow: "inset 0 25px 25px -25px #1c1c1ccc",
          backgroundColor: "#031113",
        }}
        vertical="start"
        horizontal="center"
        gap="80"
        paddingY="16"
        paddingTop="40"
      >
        {/* <div
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
              <path d="M0 180 Q960 -80 1920 180 V0 H0 V180 Z" fill="#f9f4eb" />
            </svg>
          </div> */}
        <Text variant="code-default-s" className={geist_mono.className}>
          {" "}
          <Row
            gap="32"
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              letterSpacing: "0.1em",
              fontSize: "12px",
              color: "#88857C",
              fontWeight: 100,
            }}
          >
            <span style={{ color: "#bdb7ad", fontWeight: 600 }}>
              01&nbsp;
              <span
                style={{
                  color: "#666",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
              >
                DEFINE
              </span>
            </span>
            <span style={{ color: "#bdb7ad", fontWeight: 600 }}>
              02&nbsp;
              <span
                style={{
                  color: "#666",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
              >
                DESIGN
              </span>
            </span>
            <span style={{ color: "#bdb7ad", fontWeight: 600 }}>
              03&nbsp;
              <span
                style={{
                  color: "#666",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
              >
                BUILD
              </span>
            </span>
            <span style={{ color: "#bdb7ad", fontWeight: 600 }}>
              04&nbsp;
              <span
                style={{
                  color: "#666",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
              >
                RUN
              </span>
            </span>
          </Row>
        </Text>
        <Column fillWidth horizontal="center" vertical="center" gap="12">
          <div
            style={{
              width: "400px",
              height: "400px",
              position: "absolute",
              top: "50%",
              display: "flex",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* <Orb
                hoverIntensity={0.6}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />  */}
          </div>
          <Text
            className={geist_mono.className}
            style={{
              color: "#999",
              fontSize: "20px",
              textAlign: "center",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "8px",
            }}
          >
            A portfolio by
            <br />
            me
          </Text>
          <Magnet magnetStrength={10}>
            <Button
              weight="default"
              size="m"
              style={{
                backgroundColor: "#ffe600",
                color: "#222",
                borderRadius: "1000px",
                fontWeight: 600,
                fontFamily: geist_mono.className,
                fontSize: "12px",
                letterSpacing: "0.13em",
                padding: "10px 22px",
                marginTop: "8px",
                overflow: "hidden",

                boxShadow: "0 2px 8px #00000010",
                transition: "background 0.2s, color 0.2s",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={() =>
                window.open("https://github.com/divyanshudhruv", "_blank")
              }
            >
              <span style={{ fontSize: "20px", marginRight: "8px" }}>↩</span>
              &nbsp;Github
            </Button>
          </Magnet>
        </Column>
        <Column fillWidth gap="4" className="footer-column-to-row">
          <Row
            fillWidth
            horizontal="between"
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 2vw",
            }}
            className="footer-row-to-column footer-1"
          >
            <Row gap="8" center>
              <Text
                className={geist_mono.className}
                style={{
                  fontSize: "12px",
                  color: "#999",
                  letterSpacing: "0.08em",
                }}
              >
                ©2025 DIVYANSHU DHRUV
              </Text>
            </Row>
            <Column center>
              <Text
                className={geist_mono.className}
                style={{
                  fontSize: "12px",
                  color: "#999",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  marginBottom: "2px",
                }}
              >
                <RealtimeIST />
                &nbsp;IST
              </Text>
            </Column>
            <Column center>
              <Text
                className={geist_mono.className}
                style={{
                  fontSize: "12px",
                  color: "#999",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  marginBottom: "2px",
                  textTransform: "uppercase",
                }}
              >
                THANKYOU FOR VISITING
              </Text>
            </Column>
          </Row>
          <Row
            fillWidth
            horizontal="between"
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 2vw",
            }}
            className="footer-row-to-column footer-2"
          >
            <Flex>
              {" "}
              <SvgSparkle />
            </Flex>
            <Text
              className={geist_mono.className}
              style={{
                fontSize: "8px",
                color: "#999",
                letterSpacing: "0.08em",
              }}
            >
              ONCE UI
            </Text>
            <Row gap="8" center className="footer-icons-row-margin" style={{ marginRight: "24px" }}>
              <SvgSparkle />
              <SvgSparkle />
              <SvgSparkle />
            </Row>
            <Text
              className={geist_mono.className}
              style={{
                fontSize: "8px",
                color: "#999",
                letterSpacing: "0.08em",
              }}
            >
              01XD8
            </Text>
            <Flex>
              {" "}
              <SvgSparkle />
            </Flex>
          </Row>
        </Column>
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 5H11V7H13V9H15V11H13V13H11V15H9V13H7V11H5V9H7V7H9V5Z"
          fill="#FFF3E8"
        ></path>
      </svg>
    </>
  );
}

function RealtimeIST() {
  const [time, setTime] = useState(() => getISTTime());
  useEffect(() => {
    const interval = setInterval(() => setTime(getISTTime()), 1000);
    return () => clearInterval(interval);
  }, []);
  return <span style={{ fontVariantNumeric: "tabular-nums" }}>{time}</span>;
}
function getISTTime() {
  const now = new Date();
  // IST is UTC+5:30
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 60 * 60000);
  return ist
    .toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    })
    .replace(/:/g, ":");
}
