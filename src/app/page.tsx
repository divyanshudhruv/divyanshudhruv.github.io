"use client";

import {
  Background,
  Column,
  Flex,
  MatrixFx,
  Row,
  Mask,
  Avatar,
  Text,
  SmartLink,
  Grid,
  IconButton,
  InlineCode,
  Fade,
  AutoScroll,
  Logo,
  Icon,
  ThemeSwitcher,
} from "@once-ui-system/core";
import { Button } from "../components/ui/button";
import ContributionGraph from "../components/ContributionGraph";
import { WorkExperienceDemo } from "../components/Experience";

import { DM_Mono } from "next/font/google";
import {
  HiArrowRight,
  HiCheckBadge,
  HiMapPin,
  HiOutlineClock,
  HiOutlineCodeBracket,
  HiOutlineEnvelope,
  HiOutlineLightBulb,
  HiOutlineLink,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineQuestionMarkCircle,
  HiTrophy,
} from "react-icons/hi2";
import Image from "next/image";

const suse = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

const programmingStacks = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "vite",
  "vercel",
  "tailwind",
  "bootstrap",
  "firebase",
  "supabase",
  "mysql",
  "java",
  "figma",
  "vitest",
  "vue",
  "python",
  "pytorch",
  "rabbitmq",
  "gitlab",
  "cs",
  "angular",
  "arduino",
  "bash",
  "bun",
  "docker",
  "dotnet",
  "gcp",
  "git",
  "gherkin",
  "graphql",
  "htmx",
  "md",
  "matlab",
  "materialui",
  "mongodb",
  "netlify",
  "nodejs",
  "npm",
  "pnpm",
  "opencv",
  "r",
  "ubuntu",
  "replit",
  "solidity",
  "tensorflow",
  "terraform",
  "threejs",
  "p5js",
  "express",
];

const otherTechnologies = [
  "anaconda",
  "robloxstudio",
  "vscode",
  "discord",
  "sublime",
  "opencv",
  "r",
  "ubuntu",
  "replit",
  "solidity",
  "tensorflow",
  "terraform",
];

export default function Home() {
  return (
    <Column
      fillWidth
      horizontal="center"
      vertical="start"
      style={{ minHeight: "100vh" }}
    >
      <Column maxWidth="s" borderX="neutral-alpha-weak" fillWidth fillHeight>
        <Dashed />
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Some Marketing
          </Text>
        </Flex>
        <Flex
          fillWidth
          fillHeight
          maxHeight={12}
          minHeight={12}
          borderBottom="neutral-alpha-weak"
          center
        >
          <Mask maxWidth="m" x={50} y={50} radius={50}>
            <MatrixFx
              size={1.5}
              spacing={5}
              opacity={50}
              fps={24}
              colors={["brand-solid-weak"]}
              flicker
            />
          </Mask>
        </Flex>
        <Row
          fillWidth
          borderBottom="neutral-alpha-weak"
          horizontal="start"
          vertical="center"
        >
          <Flex fit borderRight="neutral-alpha-weak">
            {" "}
            <Avatar
              src="/pfp.png"
              size="xl"
              padding={"2"}
              border="neutral-alpha-medium"
            />
          </Flex>
          <Column fillWidth vertical="end" horizontal="center" fillHeight>
            <Flex
              fillWidth
              fillHeight
              paddingX={1}
              maxHeight={2}
              minHeight={2}
              borderBottom="neutral-alpha-weak"
              vertical="center"
              horizontal="start"
            >
              <Text variant="code-default-xs" onBackground="neutral-weak">
                17 yo{" "}
              </Text>
            </Flex>
            <Flex
              fillWidth
              fillHeight
              paddingX={1}
              maxHeight={3}
              minHeight={3}
              borderBottom="neutral-alpha-weak"
              vertical="center"
              horizontal="start"
              gap={1}
            >
              <Text
                variant="display-default-s"
                onBackground="neutral-strong"
                className="font-reckless-light"
              >
                Divyanshu Dhruv
              </Text>
              {/* <Row center gap={0.5}>
                {" "}
                <Text onBackground="accent-weak">
                  <HiCheckBadge size={25} />
                </Text>{" "}
                
              </Row> */}
            </Flex>
            <Flex
              fillWidth
              fillHeight
              paddingX={1}
              maxHeight={2}
              minHeight={2}
              vertical="center"
              horizontal="between"
            >
              <Text variant="code-default-xs" onBackground="neutral-weak">
                Full Stack Developer
              </Text>{" "}
              <ThemeSwitcher
                style={{ scale: "0.7", marginLeft: "32px !important" }}
              />
            </Flex>
          </Column>
        </Row>
        <Dashed />
        <Column
          fillWidth
          borderBottom="neutral-alpha-weak"
          horizontal="start"
          vertical="center"
          padding={1}
          gap={0.3}
        >
          <ChipSet
            icon={<HiOutlineCodeBracket />}
            text={
              <span>
                Full-stack Developer{" "}
                <SmartLink href="https://nextbench.in">@Once UI</SmartLink>
              </span>
            }
            href="#"
          />
          <ChipSet
            icon={<HiOutlineLightBulb />}
            text={
              <span>
                Co-founder{" "}
                <SmartLink href="https://covane.in">@Covane</SmartLink>,
                <SmartLink href="https://covane.in">@Next Bench</SmartLink>,
                <SmartLink href="https://covane.in">@PN</SmartLink>
              </span>
            }
            href="#"
          />
          <Row fillWidth>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineMapPin />}
                text={
                  <span>
                    Vadodara, India{" "}
                    {/* <SmartLink href="https://nextbench.in">
                      @NextBench
                    </SmartLink> */}
                  </span>
                }
                href="#"
              />
            </Flex>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineClock />}
                text={
                  <span>
                    {new Date().toLocaleTimeString("en-US", {
                      timeZone: "Asia/Kolkata",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                    <Text onBackground="neutral-weak" marginX="8">
                      //{" "}
                      {`${Math.abs((new Date().getTimezoneOffset() + 5.5 * 60) / 60)} ${Math.abs((new Date().getTimezoneOffset() + 5.5 * 60) / 60) > 1 ? "HOURS" : "HOUR"} ${(new Date().getTimezoneOffset() + 5.5 * 60) % 60 > 0 ? "BEHIND" : "AHEAD"}`}
                    </Text>{" "}
                  </span>
                }
                href="#"
              />
            </Flex>
          </Row>
          <Row fillWidth>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlinePhone />}
                text={
                  <span>
                    haw, why? &lt;/3
                    {/* <SmartLink href="https://nextbench.in">
                      @NextBench
                    </SmartLink> */}
                  </span>
                }
                href="#"
              />
            </Flex>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineEnvelope />}
                text={
                  <span>
                    <SmartLink href="#">divyanshudhruv@proton.me </SmartLink>
                  </span>
                }
                href="#"
              />
            </Flex>
          </Row>
          <Row fillWidth>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineLink />}
                text={
                  <span>
                    https://github.com/
                    <SmartLink href="https://nextbench.in">
                      divyanshudhruv
                    </SmartLink>
                  </span>
                }
                href="#"
              />
            </Flex>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineQuestionMarkCircle />}
                text={<span>something, idk?</span>}
                href="#"
              />
            </Flex>
          </Row>
        </Column>
        <Row
          wrap
          fillWidth
          minHeight={4}
          gap={1}
          borderBottom="neutral-alpha-weak"
        >
          <LinkSet
            src="/github.webp"
            href="https://github.com/divyanshudhruv"
            text="GitHub"
            position="first"
          />{" "}
          <LinkSet
            src="/linkedin2.webp"
            href="https://linkedin.com/in/divyanshudhruv"
            text="Linkedin"
            position="middle"
          />{" "}
          <LinkSet
            src="/leetcode.webp"
            href="https://leetcode.com/u/divyanshudhruv"
            text="Leetcode"
            position="last"
          />
        </Row>{" "}
        <Row
          wrap
          fillWidth
          minHeight={4}
          gap={1}
          borderBottom="neutral-alpha-weak"
        >
          <LinkSet
            src="/bandlab.webp"
            href="https://bandlab.com/divyanshudhruv"
            text="Bandlab"
            position="first"
          />
          <LinkSet
            src="/peerlist.webp"
            href="https://peerlist.io/divyanshudhruv"
            text="Peerlist"
            position="middle"
          />
          <LinkSet
            src="/percept.webp"
            href="https://percept-network.vercel.app"
            text="Percept Network"
            position="last"
          />
        </Row>{" "}
        <Dashed />
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            About Me
          </Text>
        </Flex>
        <Column
          padding={1}
          fillWidth
          fitHeight
          borderBottom="neutral-alpha-weak"
          gap={1}
        >
          <Text
            variant="label-default-m"
            onBackground="neutral-medium"
            style={{ lineHeight: "1.7em" }}
          >
            👋 Hi, I'm a full-stack developer with <InlineCode>5+</InlineCode>{" "}
            years of experience (i guess so), I give strong attention to{" "}
            <InlineCode>small details</InlineCode> (kind of). I've been coding
            since I was 12. Currently, I'm creating{" "}
            <SmartLink href="https://modelcontextprotocol.io">
              <u>MCP servers</u>
            </SmartLink>{" "}
            and environments for <InlineCode>AI agents</InlineCode>. Skilled in
            <SmartLink href="https://nextjs.org">
              <u>Next.js</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://react.dev">
              <u>React</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://typescriptlang.org">
              <u>TypeScript</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://java.com">
              <u>Java</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://python.org">
              <u>Python</u>
            </SmartLink>
            , and{" "}
            <SmartLink href="https://www.r-project.org">
              <u>R</u>
            </SmartLink>
            , and modern front-end technologies; building high-quality,
            user-centric web and <InlineCode>mobile applications</InlineCode> 📱
            (sometimes).
          </Text>

          <Text
            variant="label-default-m"
            onBackground="neutral-medium"
            style={{ lineHeight: "1.7em" }}
          >
            Passionate about exploring new technologies and turning ideas into
            reality through polished, thoughtfully crafted personal projects 🗃️.
          </Text>

          <Text
            variant="label-default-m"
            onBackground="neutral-medium"
            style={{ lineHeight: "1.7em" }}
          >
            Creator of{" "}
            <SmartLink href="https://covane.in">
              <InlineCode>Covane Space 🌌</InlineCode>
            </SmartLink>{" "}
            and{" "}
            <SmartLink href="https://percept-network.vercel.app">
              <InlineCode>Percept Network 🏮</InlineCode>
            </SmartLink>
            .
          </Text>
        </Column>{" "}
        {/* <Row fillWidth fitHeight padding={1} borderBottom="neutral-alpha-weak">
         
          <AutoScroll gap={1} scrollGap={1}>
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            /> 

          </AutoScroll>
         
        </Row> */}
        <Flex
          fillWidth
          fitHeight
          center
          borderBottom="neutral-alpha-weak"
          paddingTop={"8"}
        >
          <ContributionGraph />
        </Flex>
        <Dashed />{" "}
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Skills & Stacks
          </Text>
        </Flex>{" "}
        <Flex
          fillWidth
          fitHeight
          vertical="center"
          horizontal="start"
          borderBottom="neutral-alpha-weak"
          padding={1}
          gap={0.97}
          wrap
        >
          <Stacks />
        </Flex>
        <Dashed />{" "}
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Experience
          </Text>
        </Flex>{" "}
        <Flex padding={1} fillWidth fitHeight borderBottom="neutral-alpha-weak">
          {" "}
        </Flex>{" "}
      </Column>
      <Flex height={40} />
    </Column>
  );
}

function Stacks() {
  return (
    <>
      {" "}
      {programmingStacks.map((skill: string, index: number) => (
        <Image
          src={`https://skillicons.dev/icons?i=${skill}`}
          height={38}
          width={38}
          key={skill + index}
          alt={skill.charAt(0).toUpperCase() + skill.slice(1)}
          unoptimized
        />
      ))}
    </>
  );
}
function Testimonial({
  src,
  href,
  body,
  name,
  desc,
}: {
  src: string;
  href: string;
  body: string;
  name: string;
  desc: string;
}) {
  return (
    <Column
      fillWidth
      maxWidth={20}
      minWidth={12}
      fitHeight
      minHeight={7}
      border="neutral-alpha-weak"
      padding={1}
      radius={"s"}
      gap={1}
      vertical="between"
    >
      <Text
        variant="label-default-m"
        wrap="wrap"
        onBackground="neutral-alpha-medium"
      >
        {body}
      </Text>
      <Row center fitWidth gap={0.5}>
        <Avatar src={src} />
        <Column vertical="center" horizontal="start" gap={0.1}>
          <Text variant="label-default-s" onBackground="neutral-alpha-medium">
            {name}
          </Text>
          <Text variant="code-default-xs" onBackground="neutral-weak">
            {desc}
          </Text>
        </Column>
      </Row>
    </Column>
  );
}
function Dashed() {
  return (
    <Row fillWidth minHeight="32" borderBottom="neutral-alpha-weak">
      <Background
        fill
        fillHeight
        lines={{
          display: true,
          opacity: 20,
          size: "4",
          thickness: 1,
          color: "neutral-solid-medium",
        }}
      />
    </Row>
  );
}

function LinkSet({
  src,
  href,
  text,
  position,
}: {
  src: string;
  href: string;
  text: string;
  position: "first" | "middle" | "last";
}) {
  if (position === "first") {
    return (
      <Flex
        horizontal="between"
        vertical="center"
        flex={1}
        padding={1}
        borderRight="neutral-alpha-weak"
      >
        <Row center gap={0.5}>
          <Avatar src={src} size="m" border="neutral-alpha-weak" />
          <Text variant="label-default-m" onBackground="neutral-medium">
            {text}
          </Text>
        </Row>
        <IconButton variant="ghost" className="rotate-315" href={href}>
          <Text onBackground="neutral-weak">
            <HiArrowRight />
          </Text>
        </IconButton>
      </Flex>
    );
  }

  if (position === "middle") {
    return (
      <Flex
        horizontal="between"
        vertical="center"
        flex={1}
        padding={1}
        borderX="neutral-alpha-weak"
      >
        <Row center gap={0.5}>
          <Avatar src={src} size="m" border="neutral-alpha-weak" />
          <Text variant="label-default-m" onBackground="neutral-medium">
            {text}
          </Text>
        </Row>
        <IconButton variant="ghost" className="rotate-315" href={href}>
          <Text onBackground="neutral-weak">
            <HiArrowRight />
          </Text>
        </IconButton>
      </Flex>
    );
  }

  if (position === "last") {
    return (
      <Flex
        horizontal="between"
        vertical="center"
        flex={1}
        padding={1}
        borderLeft="neutral-alpha-weak"
      >
        <Row center gap={0.5}>
          <Avatar src={src} size="m" border="neutral-alpha-weak" />
          <Text variant="label-default-m" onBackground="neutral-medium">
            {text}
          </Text>
        </Row>
        <IconButton variant="ghost" className="rotate-315" href={href}>
          <Text onBackground="neutral-weak">
            <HiArrowRight />
          </Text>
        </IconButton>
      </Flex>
    );
  }

  return null;
}

function ChipSet({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
  href: string;
}) {
  return (
    <Row fillWidth maxHeight={2} vertical="center" horizontal="start" gap={1}>
      <Flex
        radius="m"
        borderStyle="solid"
        width={2}
        height={2}
        border="neutral-weak"
        center
      >
        <Flex
          radius="s"
          center
          borderStyle="solid"
          border="neutral-alpha-weak"
          background="neutral-alpha-weak"
          width={1.5}
          height={1.5}
        >
          <Text onBackground="neutral-weak" variant="label-default-s">
            {icon}
          </Text>
        </Flex>
      </Flex>
      <Text variant="code-default-xs" onBackground="neutral-medium">
        {text}
      </Text>
    </Row>
  );
}
