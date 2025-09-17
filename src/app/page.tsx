"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
  ThemeSwitcher,
  Flex,
  SmartLink,
  Row,
  Avatar,
  Media,
  Switch,
  IconButton,
  Icon,
  Background,
  Kbd,
  InlineCode,
  Tag,
  Card,
} from "@once-ui-system/core";

import React from "react";
import {
  HiCircleStack,
  HiCommandLine,
  HiMoon,
  HiUserCircle,
  HiXCircle,
} from "react-icons/hi2";

const pfpUrl =
  "https://re-folio.vercel.app/_next/image?url=https%3A%2F%2Fbntmrumgshhfhhafydoq.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fattachments%2Favatars%2Fc4c29503-4487-4eab-a3ff-5536aed6b4ba%2Fc4c29503-4487-4eab-a3ff-5536aed6b4ba-1749992366852-65028462-2b85-407b-aabe-f51a13f3bc5c.png&w=64&q=75";

const projectData = [
  {
    imageSrc: "/refolio.png",
    title: "Re-folio",
    description:
      "A modern resufolio builder with customizable templates and easy deployment.",
    techs: ["NextJS", "Tailwind", "OnceUI", "Supabase"],
    liveUrl: "https://re-folio.vercel.app",
    githubUrl: "https://github.com/divyanshudhruv/re-folio",
    tag: "AUG 2025",
  },
  {
    imageSrc: "/hl1.png",
    title: "Hellolink",
    description:
      "A simple, fast, and customizable link-in-bio tool to showcase your online presence.",
    techs: ["Vite", "Tailwind", "Supabase", "Auth0"],
    liveUrl: "https://hellolink.vercel.app",
    githubUrl: "https://github.com/divyanshudhruv/hellolink",
    tag: "MAR 2025",
  },
  {
    imageSrc: "/image.png",
    title: "Kanba",
    description:
      "An open-source kanban board app to organize tasks and collaborate with teams.",
    techs: ["NextJS", "Tailwind", "Supabase", "ShadcnUI"],
    liveUrl: "https://kanba.co",
    githubUrl: "https://github.com/yourname/kanba",
    tag: "JULY 2025",
  },
  {
    imageSrc: "/mst.png",
    title: "Pikodo",
    description:
      "A simple app to send personalized message and photos to your loved ones.",
    techs: ["React"],
    liveUrl: "",
    githubUrl: "",
    tag: "ONGOING",
  },
  {
    imageSrc: "/og-theta.png",
    title: "Theta0",
    description:
      "A kind of simple and playful THREADS alternative built with Next.js and Supabase.",
    techs: ["React", "TypeScript", "NextJS", "OnceUI"],
    liveUrl: "https://theta0.vercel.app",
    githubUrl: "https://github.com/divyanshudhruv",
    tag: "SEPT 2025",
  },  {
    imageSrc: "/nb.png",
    title: "Nextbench",
    description:
      "School and University search platform with advanced filtering and bookmarking.",
    techs: ["Pandas", "FastAPI", "React", "OnceUI"],
    liveUrl: "https://next-bench-dev.vercel.app",
    githubUrl: "https://github.com/sonamii/next-bench",
    tag: "ONGOING",
  },

  // {
  //   imageSrc: "/floid1.png",
  //   title: "Floid",
  //   description:
  //     "An open-source API based tool to share and discover AI prompts.",
  //   techs: ["NextJS", "FastAPI", "Supabase", "Pandas"],
  //   liveUrl: "https://floid.vercel.app",
  //   githubUrl: "https://github.com/divyanshudhruv/floid",
  //   tag: "JULY 2025",
  // },
  {
    imageSrc: "/1960.png",
    title: "OnceUI + Starter",
    description:
      "A clean starter kit for React and Next.js projects, featuring OnceUI and tailwindCSS.",
    techs: ["OnceUI", "Tailwind", "ShadcnUI", "NextJS"],
    liveUrl: "https://snapgallery.example.com",
    githubUrl: "https://github.com/yourname/snapgallery",
    tag: "SEPT 2025",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/oevZjkSNUHoeeER1iv27eFxaCk.png?scale-down-to=512",
    title: "Sourceful Space",
    description:
      "A collaborative platform for developers to share and discover open-source projects.",
    techs: ["React", "Node.js", "OnceUI", "Supabase"],
    liveUrl: "https://sourceful-space.vercel.app",
    githubUrl: "https://github.com/divyanshudhruv/sourceful-space",
    tag: "MAY 2025",
  },
  //  ,
  //   {
  //     imageSrc: "/1937.png",
  //     title: "SnapGallery",
  //     description:
  //       "A fast, responsive photo gallery app with cloud storage and AI-powered search.",
  //     techs: ["React", "Node.js", "AWS S3", "TensorFlow.js"],
  //     liveUrl: "https://snapgallery.example.com",
  //     githubUrl: "https://github.com/yourname/snapgallery",
  //     tag: "AI",
  //   },


  {
    imageSrc: "/bc.png",
    title: "???",
    ignoreMaxHeight: true,
    description:
      "A super minimal daily planner app to organize tasks and events.",
    techs: [
      "Flutter",
      "Firebase",
      "Redux",
      "Chart.js",
      "Supabase",
      "OnceUI",
      "ShadcnUI",
      "AsdFs",
    ],
    liveUrl: "https://dailytea.example.com",
    githubUrl: "https://github.com/yourname/dailytea",
    tag: "ONGOING",
  },
];

export default function Home() {
  return (
    <Flex fillWidth fillHeight paddingX="xl" paddingY="s">
      <Column fillWidth fillHeight paddingX="xl" center>
        <Row
          borderBottom="neutral-medium"
          borderStyle="dashed"
          fillWidth
          padding="s"
          horizontal="between"
          vertical="center"
        >
          <Row gap="8" fillWidth vertical="center" horizontal="between">
            <Text variant="body-default-l" onBackground="neutral-strong">
              <Row center gap="16">
                ⁕
              </Row>
            </Text>
            <Row gap="8">
              <IconButton variant="ghost" icon="link"></IconButton>
              <IconButton variant="ghost" icon="github"></IconButton>
              <IconButton variant="ghost" icon="linkedin"></IconButton>
            </Row>
          </Row>
        </Row>
        <Column style={{ maxWidth: "1055px" }}>
          <Column padding="s" gap="8" paddingY="l">
            <Text variant="label-default-xl" onBackground="neutral-medium">
              Hello, I am
            </Text>
            <Heading variant="display-strong-s">Divyanshu Dhruv</Heading>
            <Text variant="label-default-m" onBackground="neutral-weak">
              A fullstack developer and open source enthusiast.
            </Text>
            <Flex height={1}></Flex>
            <Text variant="body-default-m" onBackground="neutral-medium">
              A 17-year-old full-stack developer passionate about open source,
              UI/UX, and building cool projects with React, Next.js, and
              TypeScript. I love music, gaming, and exploring new tech.
              Currently diving into Web3 and DSA, and working on mastering
              guitar like a pro.
              <br />
              <br />
              Shipped 15+ projects, 2 internships, and 100+ GitHub stars. Always
              eager to learn and collaborate on exciting ventures. Let's connect
              and create something amazing together!
            </Text>{" "}
            <Flex height={0.5}></Flex>
            <Row gap="8">
              <Button>LinkedIn</Button>
              <Button variant="secondary">Github</Button>
            </Row>
          </Column>
          <Row fillWidth border="neutral-medium" borderStyle="dashed">
            <Background
              fill
              height={3}
              lines={{
                display: false,
                size: "16",
                thickness: 1,
                angle: 30,
                color: "neutral-solid-medium",
              }}
              grid={{
                display: false,
                opacity: 100,
                color: "neutral-alpha-medium",
                width: ".5rem",
                height: ".5rem",
              }}
              dots={{
                display: true,
                opacity: 40,
                size: "8",
                color: "neutral-solid-weak",
              }}
            />{" "}
          </Row>
          <Column padding="s" gap="8" paddingY="l">
            <Heading variant="display-strong-s">Featured Projects</Heading>
            <Text variant="label-default-m" onBackground="neutral-weak">
              A selection of my favorite projects showcasing my skills and
              creativity.
            </Text>
            <Flex height={1}></Flex>{" "}
            <Row fillWidth wrap horizontal="between" gap="32">
              {" "}
              {projectData.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </Row>
          </Column>
          <Row fillWidth border="neutral-medium" borderStyle="dashed">
            <Background
              fill
              height={3}
              lines={{
                display: false,
                size: "16",
                thickness: 1,
                angle: 30,
                color: "neutral-solid-medium",
              }}
              grid={{
                display: false,
                opacity: 100,
                color: "neutral-alpha-medium",
                width: ".5rem",
                height: ".5rem",
              }}
              dots={{
                display: true,
                opacity: 40,
                size: "8",
                color: "neutral-solid-weak",
              }}
            />{" "}
          </Row>

          {/* ======================= */}
          <Column padding="s" gap="8" paddingY="l">
            <Heading variant="display-strong-s">Experience</Heading>
            <Text variant="label-default-m" onBackground="neutral-weak">
              Internships and work experience that shaped my skills and career.
            </Text>
            <Flex height={1}></Flex>
            {/* <ExperienceSection /> */}
          </Column>
          <Row fillWidth border="neutral-medium" borderStyle="dashed">
            <Background
              fill
              height={3}
              lines={{
                display: false,
                size: "16",
                thickness: 1,
                angle: 30,
                color: "neutral-solid-medium",
              }}
              grid={{
                display: false,
                opacity: 100,
                color: "neutral-alpha-medium",
                width: ".5rem",
                height: ".5rem",
              }}
              dots={{
                display: true,
                opacity: 40,
                size: "8",
                color: "neutral-solid-weak",
              }}
            />{" "}
          </Row>

          {/* ============================== */}

          <Column padding="s" gap="8" paddingY="l">
            <Heading variant="display-strong-s">Skills & Stacks</Heading>
            <Text variant="label-default-m" onBackground="neutral-weak">
              Technologies and tools I excel at in my development journey.
            </Text>
          </Column>
          <Row fillWidth border="neutral-medium" borderStyle="dashed">
            <Background
              fill
              height={3}
              lines={{
                display: false,
                size: "16",
                thickness: 1,
                angle: 30,
                color: "neutral-solid-medium",
              }}
              grid={{
                display: false,
                opacity: 100,
                color: "neutral-alpha-medium",
                width: ".5rem",
                height: ".5rem",
              }}
              dots={{
                display: true,
                opacity: 40,
                size: "8",
                color: "neutral-solid-weak",
              }}
            />{" "}
          </Row>

          {/* ================ */}
          <Row
            padding="s"
            gap="8"
            paddingY="l"
            wrap
            fillWidth
            horizontal="between"
            vertical="center"
          >
            <Text variant="label-default-m" onBackground="neutral-weak">
              Last updated on {new Date().toLocaleDateString()}
            </Text>
            <Row center gap="4">
              <IconButton icon="copy" variant="ghost" />
              <Text onBackground="neutral-weak" variant="label-default-m">
                divyanshudhruv@proton.me
              </Text>
            </Row>
          </Row>
        </Column>
      </Column>
    </Flex>
  );
}

type ProjectCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  techs: string[];
  liveUrl: string;
  githubUrl: string;
  tag: string;
  ignoreMaxHeight?: boolean;
};

function ProjectCard({
  imageSrc,
  title,
  description,
  techs,
  liveUrl,
  githubUrl,
  tag,
  ignoreMaxHeight = false,
}: ProjectCardProps) {
  return (
    <Flex flex={1}>
      <Card
        direction="column"
        padding="s"
        border="neutral-medium"
        borderStyle="dashed"
        radius="xl"
        minWidth={20}
        fillWidth
        gap="16"
      >
        <Media
          fillWidth
          fillHeight
          src={imageSrc}
          radius="m-4"
          aspectRatio="16/10"
          border="neutral-medium"
          borderWidth={2}
          maxHeight={ignoreMaxHeight ? undefined : 200}
        />
        <Column gap="4">
          <Text variant="heading-strong-l" onBackground="neutral-strong">
            {title}
          </Text>
          <Text variant="label-default-m" onBackground="neutral-weak">
            {description}
          </Text>
          <Row wrap paddingY="8" gap="8">
            {techs.map((tech) => (
              <InlineCode key={tech}>
                <Text onBackground="neutral-medium" padding="2">
                  {tech}
                </Text>
              </InlineCode>
            ))}
          </Row>
          <Row fillWidth vertical="center" horizontal="between">
            <Row gap="8" center>
              <Text
                variant="label-default-m"
                onBackground="neutral-weak"
                onClick={() => window.open(liveUrl)}
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLSpanElement).style.textDecoration =
                    "underline")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLSpanElement).style.textDecoration =
                    "none")
                }
              >
                Live link
              </Text>
              <IconButton
                variant="ghost"
                icon="github"
                size="s"
                href={githubUrl}
              />
            </Row>
            <Tag>{tag}</Tag>
          </Row>
        </Column>
      </Card>
    </Flex>
  );
}

type Experience = {
  title: string;
  company: string;
  start: string;
  end: string;
  isCurrent?: boolean;
};

const experience: Experience[] = [
  {
    title: "FRONTEND ENGINEER",
    company: "Induced AI",
    start: "Apr 2025",
    end: "Present",
    isCurrent: true,
  },
  {
    title: "SOFTWARE DEVELOPER INTERN",
    company: "Unolo",
    start: "Feb 2025",
    end: "Apr 2025",
  },
  {
    title: "UI/UX DESIGNER",
    company: "Snipe",
    start: "Aug 2024",
    end: "Jan 2025",
  },
];
function ExperienceSection() {
  return (
    <Column gap="24">
      {experience.map((exp, idx) => (
        <Row fillWidth gap="16" key={exp.title}>
          {/* Timeline dots and line */}
          <Column vertical="start" horizontal="center" paddingY="4">
            <Flex
              width={1}
              minWidth={1}
              maxWidth={1}
              height={1}
              minHeight={1}
              maxHeight={1}
              radius="full"
              background={exp.isCurrent ? "neutral-strong" : "neutral-medium"}
            />
            {idx < experience.length - 1 && (
              <Flex border="neutral-medium" fillHeight />
            )}
          </Column>
          {/* Experience content */}
          <Column gap="8" fillWidth>
            <Text variant="heading-default-m">{exp.title}</Text>
            <Row fillWidth gap="16" horizontal="between" vertical="center">
              <Row gap="8" vertical="center">
                <Text variant="label-default-m" onBackground="neutral-weak">
                  {exp.company}
                </Text>
              </Row>
              <Flex border="neutral-medium" borderStyle="dashed" fillWidth />
              <Text variant="label-default-m" onBackground="neutral-weak">
                {exp.start} - {exp.end}
              </Text>
            </Row>
          </Column>
        </Row>
      ))}
    </Column>
  );
}
