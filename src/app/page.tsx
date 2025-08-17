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
  IconButton,
  LogoCloud,
  Media,
  Row,
  Scroller,
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
import { Meteors } from "@/components/magicui/meteors";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  CircleSlashedIcon,
  Figma,
  Scroll,
  Star,
} from "lucide-react";

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
  const skills = [
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "HTML",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "CSS",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "JavaScript",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "TypeScript",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "React",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Python",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          alt="Firebase"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Firebase",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Node.js",
    },

    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="Git"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Git",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          alt="Figma"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Figma",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
          alt="C#"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "C#",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
          alt="Angular"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Angular",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="Java"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Java",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
          alt="PHP"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "PHP",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
          alt="Ruby"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Ruby",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
          alt="Go"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Go",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg"
          alt="Rust"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Rust",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          alt="Docker"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Docker",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
          alt="Kubernetes"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Kubernetes",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "MongoDB",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          alt="MySQL"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "MySQL",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          alt="PostgreSQL"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "PostgreSQL",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
          alt="GraphQL"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "GraphQL",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="Next.js"
          width={17}
          height={17}
          style={{ borderRadius: "4px", background: "#fff" }}
        />
      ),
      label: "Next.js",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          alt="Vue.js"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Vue.js",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          alt="Redux"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Redux",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          alt="Sass"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Sass",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
          alt="Webpack"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Webpack",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          alt="npm"
          width={17}
          height={17}
          style={{ borderRadius: "4px", background: "#fff" }}
        />
      ),
      label: "npm",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
          alt="Yarn"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Yarn",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
          alt="GitLab"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "GitLab",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          width={17}
          height={17}
          style={{ borderRadius: "4px", background: "#fff" }}
        />
      ),
      label: "GitHub",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="VS Code"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "VS Code",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          alt="Linux"
          width={17}
          height={17}
          style={{ borderRadius: "4px" }}
        />
      ),
      label: "Linux",
    },
  ];
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
          <Flex
            fillWidth
            fillHeight
            style={{ width: "100vw", height: "100%" }}
            position="absolute"
          >
            {" "}
            <Meteors angle={60} />
          </Flex>

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
                  style={{ backgroundColor: colors.background_light }}
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
                  <LogosWorkedWith />{" "}
                  <Flex style={{ width: "100vw" }}>
                    {" "}
                    <FlickeringGridDemo color="#FF5825" />
                  </Flex>
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
          paddingTop="xl"
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

          {/* Four accent squares at each corner */}
          <Column
            fillWidth
            fillHeight
            style={{ position: "relative" }}
            center
            // border="neutral-strong"
            // borderStyle="dashed"
            paddingTop="xl"
            paddingBottom="0"
          >
            <Testimonial
              avatarSrc="https://lorant.one/_next/image?url=%2Fimages%2Favatar.jpg&w=256&q=75"
              leftLogoSrc="https://framerusercontent.com/images/h3NQxtCOq9IYbMV4RhpkGxbjBJ4.png?scale-down-to=512"
              rightLogoSrc="https://framerusercontent.com/images/g1VpaCAYo3pRPCFikR7aV3GH0.png?scale-down-to=512"
              stars={5}
              quote="Partnering with Yohji was a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"
              name="Mario A."
              title="Head of Product at Apex"
            />
            <Flex style={{ width: "100vw" }}>
              <FlickeringGridDemo color={colors.text_gray} />
            </Flex>
          </Column>
        </Flex>

        {/* About */}
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
          <Flex
            gap="64"
            fillWidth
            fitHeight
            vertical="center"
            horizontal="between"
          >
            <Column fillWidth gap="32" vertical="center">
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
                Designer. Builder.
                <br />
                <span style={{ color: colors.text_gray }}>
                  Lifelong learner.
                </span>
              </Text>
              <Text
                style={{
                  fontFamily: inter_tight.style.fontFamily,
                  fontSize: "1.1em",
                  color: colors.text_gray,
                  maxWidth: "700px",
                  lineHeight: "1.6",
                }}
              >
                Hey! I'm Yohji, a designer with a focus on creating thoughtful
                digital products. My design path started with a passion for
                visual art, which evolved into a deep interest in product
                design.
                <br />
                <br />
                These days, I work across various industries, helping businesses
                create meaningful experiences for their users. My experience
                ranges from building responsive websites to creating fully
                immersive user interfaces for web and mobile apps.
                <br />
                <br />
                When I'm not in design mode, I'm delving into fashion, history,
                or interior design. And yes, I've been building{" "}
                <a
                  href="https://divyanshudhruv.is-a.dev/side-projects"
                  style={{ color: colors.text_link }}
                >
                  side projects too
                </a>{" "}
                - quite a few have ended up in my own little{" "}
                <a
                  href="https://divyanshudhruv.is-a.dev/project-graveyard"
                  style={{ color: colors.text_link }}
                >
                  project graveyard
                </a>
                .<br />
                🥀
              </Text>
              <Column gap="8" paddingTop="32">
                <Text
                  style={{
                    fontFamily: "monospace",
                    fontSize: "1em",
                    color: colors.text_gray_light,
                    fontWeight: "500",
                  }}
                >
                  SKILLS
                </Text>
                <Scroller direction="row">
                  <Flex direction="column" gap="12">
                    <Row gap="12" vertical="center" horizontal="start">
                      {skills
                        .slice(0, Math.ceil(skills.length / 2))
                        .map((skill) => (
                          <SkillBadge
                            key={skill.label}
                            icon={
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  height: "15px",
                                  width: "15px",
                                }}
                              >
                                {React.isValidElement(skill.icon)
                                  ? React.cloneElement(
                                      skill.icon as React.ReactElement<any>,
                                      {
                                        width: 15,
                                        height: 15,
                                      }
                                    )
                                  : skill.icon}
                              </span>
                            }
                            label={skill.label}
                          />
                        ))}
                    </Row>
                    <Row gap="12">
                      {skills
                        .slice(Math.ceil(skills.length / 2))
                        .map((skill) => (
                          <SkillBadge
                            key={skill.label}
                            icon={
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  height: "15px",
                                  width: "15px",
                                }}
                              >
                                {React.cloneElement(
                                  skill.icon as React.ReactElement<any>,
                                  {
                                    width: 15,
                                    height: 15,
                                  }
                                )}
                              </span>
                            }
                            label={skill.label}
                          />
                        ))}
                    </Row>
                  </Flex>
                </Scroller>
              </Column>
            </Column>
            <Flex
              fillHeight
              vertical="start"
              style={{ minWidth: "580px", maxWidth: "620px" }}
            >
              <MinimalAboutCard
                src="https://wallpaperaccess.com/full/3496338.jpg"
                alt="Designer in coat"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          fillWidth
          fitHeight
          radius="xl-8"
          overflow="hidden"
          direction="column"
          center
          paddingY="xl"
          gap="40"
          paddingX="l"
          style={{
            backgroundColor: colors.background_light,
            minHeight: "fit-content",
          }}
        >
          <Column gap="40" fillWidth>
            <Row vertical="center" horizontal="start" fillWidth>
              {" "}
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
                Experience
              </Text>
            </Row>
            <Column gap="20" fillWidth>
              {[
                {
                  logo: "https://randomuser.me/api/portraits/men/32.jpg",
                  name: "Flux Studios",
                  role: "Lead designer",
                  period: "2020-NOW",
                },
                {
                  logo: "https://randomuser.me/api/portraits/women/44.jpg",
                  name: "NexusLab",
                  role: "Freelance designer",
                  period: "2012-2018",
                },
                {
                  logo: "https://randomuser.me/api/portraits/men/65.jpg",
                  name: "Bright",
                  role: "Web designer",
                  period: "2012-12",
                },
                {
                  logo: "https://randomuser.me/api/portraits/women/22.jpg",
                  name: "PixelForge",
                  role: "Junior designer",
                  period: "2011-12",
                },
                {
                  logo: "https://randomuser.me/api/portraits/men/12.jpg",
                  name: "Orbital",
                  role: "Intern designer",
                  period: "2010-11",
                },
              ].map((exp, idx) => (
                <Row
                  key={exp.name}
                  fillWidth
                  vertical="center"
                  horizontal="between"
                  style={{
                    borderBottom: idx !== 4 ? "1px solid #eee" : undefined,
                    paddingBottom: "18px",
                  }}
                >
                  <Row gap="16" vertical="center">
                    <Media
                      src={exp.logo}
                      width={1.5}
                      height={1.5}
                      radius="s"
                      style={{ background: "#f5f5f5", objectFit: "cover" }}
                      unoptimized
                    />
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1.1em",
                        color: colors.text,
                      }}
                    >
                      {exp.name}
                    </Text>
                  </Row>
                  <Row gap="24" vertical="center">
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1em",
                        color: colors.text_gray,
                        fontWeight: 400,
                      }}
                    >
                      {exp.role}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1em",
                        color: colors.text_gray_light,
                        fontWeight: 400,
                        letterSpacing: "0.5px",
                      }}
                    >
                      {exp.period}
                    </Text>
                  </Row>
                </Row>
              ))}
            </Column>
          </Column>
          <Column gap="40" fillWidth>
            <Row vertical="center" horizontal="start" fillWidth>
              {" "}
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
                My Stack
              </Text>
            </Row>
            <Flex fillWidth center fitHeight>
              <Grid gap="20" columns={3} fillWidth>
                <StackCard
                  logoSrc="https://framerusercontent.com/images/ZmOuFXkoGoEpOrAIJdOqFqdcs0.png"
                  name="Framer"
                  description="Web design"
                  link="https://framer.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/jYeOBev1oEFzM8phEOLVBjE80g.png?scale-down-to=512"
                  name="Frequencii"
                  description="Product design"
                  link="https://frequencii.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/1kev4DX36PMe8zIqywvGjq71Q.png?scale-down-to=512"
                  name="MyFind"
                  description="Inspiration"
                  link="https://myfind.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/cOCrlG7EKZwfJjTsw6JThxk1jg.png?scale-down-to=512"
                  name="Sight"
                  description="Planning"
                  link="https://sight.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/hCe7HGWiqcHS3sPuOLRNGssPAko.png?scale-down-to=512"
                  name="Accord"
                  description="Communication"
                  link="https://accord.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/0IF3EJQR3n5AMvGaCCTIemQA3z8.png?scale-down-to=512"
                  name="Ikigai"
                  description="Communication"
                  link="https://ikigai.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/hCe7HGWiqcHS3sPuOLRNGssPAko.png?scale-down-to=512"
                  name="Arm"
                  description="Browser"
                  link="https://arm.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/x495MOiNiq8DQdQNrGMqiW5CA.png?scale-down-to=512"
                  name="Slime"
                  description="Graphic design"
                  link="https://slime.com/"
                />
                <StackCard
                  logoSrc="https://avatars.githubusercontent.com/u/201123854?s=200&v=4"
                  name="Nextbench"
                  description="Educational insights"
                  link="https://next-bench-dev.vercel.app"
                />
              </Grid>
            </Flex>
          </Column>
        </Flex>

        {/* End footer */}
        <Flex
          fillWidth
          fitHeight
          maxHeight={70}
          radius="xl-8"
          overflow="hidden"
          direction="column"
          center
          gap="40"
          style={{
            backgroundColor: colors.background_light,
            minHeight: "100vh",
          }}
          data-theme="dark"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              minWidth: "100%",
              overflow: "hidden",
              maxHeight: "800px",
            }}
          >
            <img
              src="https://i.redd.it/j7pt9senwgp71.png"
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                minHeight: "100%",
                minWidth: "100%",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, rgba(38,38,38,0.2) 0%, rgba(0,0,0,0.95) 100%)",
                pointerEvents: "none",
              }}
            />
            {/* Text overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                pointerEvents: "auto",
              }}
            >
              <h2
                style={{
                  color: "#fff",
                  fontSize: "2.3em",
                  textAlign: "center",
                  fontWeight: 300,
                  marginBottom: "24px",
                  fontFamily: fraunces.style.fontFamily,
                  lineHeight: 1.2,
                  maxWidth: "900px",
                  textShadow: "0 2px 16px rgba(0,0,0,0.25)",
                }}
              >
                Have a project idea in mind? Let's
                <br />
                chat about how we can bring it to life!
              </h2>
              <Button
                size="l"
                weight="default"
                style={{
                  background: "#fff",
                  color: "#222",
                  fontFamily: inter_tight.style.fontFamily,
                  fontSize: "1.2em",
                  borderRadius: "12px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
                  padding: "16px 32px",
                  fontWeight: 500,
                }}
              >
                Message me on LinkedIn
              </Button>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "32px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                textAlign: "center",
              }}
            >
              <a
                href="#"
                style={{
                  color: "#aaa",
                  fontFamily: inter_tight.style.fontFamily,
                  fontSize: "0.8em",
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Row center gap="4" paddingY="s">
                  Back to top <ArrowUp color="#aaa" size={16} />
                </Row>
              </a>
            </div>
          </div>
        </Flex>
      </Flex>
    </>
  );
}

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

type MinimalAboutCardProps = {
  src: string;
  alt: string;
};

function MinimalAboutCard({ src, alt }: MinimalAboutCardProps) {
  return (
    <MinimalCard
      style={{
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid #DDD",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          minHeight: "100%",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: "18px",
          overflow: "hidden",
          opacity: 0.9,
        }}
      />
    </MinimalCard>
  );
}
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

type StarRatingProps = {
  stars: number;
};

function StarRating({ stars }: StarRatingProps) {
  return (
    <Row gap="8" center>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={16}
          fill={index < stars ? colors.background_dark : "none"}
          color={index < stars ? colors.background_dark : "none"}
        />
      ))}
    </Row>
  );
}

type TestimonialProps = {
  avatarSrc: string;
  leftLogoSrc: string;
  rightLogoSrc: string;
  stars: number;
  quote: string;
  name: string;
  title: string;
  gridColor?: string;
};

function Testimonial({
  avatarSrc,
  leftLogoSrc,
  rightLogoSrc,
  stars,
  quote,
  name,
  title,
  gridColor = colors.text_gray,
}: TestimonialProps) {
  return (
    <>
      <Column center gap="16">
        <Row center gap="8">
          <Media
            src={leftLogoSrc}
            unoptimized
            minWidth={4}
            minHeight={4}
            style={{ filter: "grayscale(100%)", opacity: 0.4 }}
          />
          <Flex
            padding="s"
            width={3.4}
            height={3.4}
            minWidth={3.4}
            minHeight={3.4}
            center
            radius="l"
            border="neutral-medium"
            overflow="hidden"
          >
            <Media
              src={avatarSrc}
              unoptimized
              fillWidth
              fillHeight
              width={3}
              height={3}
              minWidth={3}
              radius="l"
            />
          </Flex>
          <Media
            src={rightLogoSrc}
            unoptimized
            minWidth={4}
            minHeight={4}
            style={{ filter: "grayscale(100%)", opacity: 0.4 }}
          />
        </Row>
        <Row>
          <StarRating stars={stars} />
        </Row>
      </Column>
      <Column gap="8" center>
        <Text
          style={{
            fontFamily: inter_tight.style.fontFamily,
            fontSize: "1.5em",
            color: colors.background_dark,
            padding: "0.5em 1em",
            borderRadius: "8px",
            lineHeight: 1.4,
            textAlign: "center",
            maxWidth: "575px",
          }}
        >
          {quote}
        </Text>
        <Column center gap="1" paddingY="s">
          <Text
            style={{
              fontFamily: inter_tight.style.fontFamily,
              fontSize: "1.15em",
              color: colors.background_dark,
              textAlign: "center",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: inter_tight.style.fontFamily,
              fontSize: "0.9em",
              color: colors.text_gray_light,
              textAlign: "center",
            }}
          >
            {title}
          </Text>
        </Column>
      </Column>
    </>
  );
}

type SkillBadgeProps = {
  icon?: React.ReactNode;
  label: string;
};

function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <Flex
      padding="xs"
      fitWidth
      fitHeight
      minHeight={2.3}
      maxHeight={2.3}
      border="neutral-strong"
      borderStyle="dashed"
      center
      radius="s"
      style={{ minWidth: "fit-content" }}
    >
      <Row center fillHeight fitWidth gap="8">
        <span style={{ filter: "grayscale(100%)", opacity: 0.8 }}>{icon}</span>
        <Text
          variant="label-default-xl"
          style={{
            color: colors.text_gray,
            fontFamily: inter_tight.style.fontFamily,
          }}
        >
          {label}
        </Text>
      </Row>
    </Flex>
  );
}

type StackCardProps = {
  logoSrc: string;
  name: string;
  description: string;
  link: string;
};

function StackCard({ logoSrc, name, description, link }: StackCardProps) {
  return (
    <Row fillWidth fitHeight padding="2" radius="s-4" maxWidth={25}>
      <Row
        fillWidth
        gap="20"
        radius="m"
        vertical="center"
        border="neutral-medium"
        borderStyle="dashed"
        padding="12"
        style={{ position: "relative" }}
      >
        <Media
          src={logoSrc}
          width={2.5}
          height={2.5}
          minWidth={2.5}
          minHeight={2.5}
          radius="s"
          style={{ background: "#fff" }}
          unoptimized
        />
        <Column gap="1" vertical="center">
          <Text
            style={{
              fontFamily: inter_tight.style.fontFamily,
              fontSize: "1em",
              color: colors.text,
              display: "inline-block",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: inter_tight.style.fontFamily,
              fontSize: "0.8em",
              color: colors.text_gray,
              display: "inline-block",
              minWidth: "fit-content",
            }}
          >
            {description}
          </Text>
        </Column>
        <IconButton
          variant="secondary"
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={() => window.open(link, "_blank")}
        >
          <ArrowUpRight size={15} color={colors.text_gray} />
        </IconButton>
      </Row>
    </Row>
  );
}
