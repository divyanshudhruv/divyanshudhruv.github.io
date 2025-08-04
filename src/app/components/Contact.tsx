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
import { useState } from "react";
import React from "react";
const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
  subsets: ["latin"],
});

export default function Contact() {
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
  return (
    <>
      {" "}
      <Column
        fillWidth
        style={{
          minHeight: "fit-content",
          minWidth: "100vw",
          backgroundColor: "#F9F4EB",
        }}
        vertical="start"
        horizontal="center"
        padding="m"
        paddingX="m"
        gap="128"
        id="contact"
      >
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
                      <ArrowUpRight size={19} color={"#fff"} fontWeight={100} />
                    </Row>
                  </Text>
                </Button>
              </Magnet>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
}
