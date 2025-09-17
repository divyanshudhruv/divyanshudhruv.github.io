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
    imageSrc:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Taskify Pro",
    description:
      "A productivity app to manage daily tasks, set reminders, and track progress with a beautiful UI.",
    techs: ["React", "TypeScript", "Next.js", "Chakra UI"],
    liveUrl: "https://taskifypro.example.com",
    githubUrl: "https://github.com/yourname/taskifypro",
    tag: "Featured",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "CryptoDash",
    description:
      "A real-time cryptocurrency dashboard with price charts, news, and portfolio tracking.",
    techs: ["Vue", "Tailwind", "D3.js", "Firebase"],
    liveUrl: "https://cryptodash.example.com",
    githubUrl: "https://github.com/yourname/cryptodash",
    tag: "Web3",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "DevConnect",
    description:
      "A social platform for developers to share projects, blogs, and collaborate on open source.",
    techs: ["Next.js", "Prisma", "PostgreSQL", "Auth0"],
    liveUrl: "https://devconnect.example.com",
    githubUrl: "https://github.com/yourname/devconnect",
    tag: "Open Source",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: "SnapGallery",
    description:
      "A fast, responsive photo gallery app with cloud storage and AI-powered search.",
    techs: ["React", "Node.js", "AWS S3", "TensorFlow.js"],
    liveUrl: "https://snapgallery.example.com",
    githubUrl: "https://github.com/yourname/snapgallery",
    tag: "AI",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    title: "FitTrackr",
    description:
      "A fitness tracking app to log workouts, monitor progress, and connect with friends.",
    techs: ["Flutter", "Firebase", "Redux", "Chart.js"],
    liveUrl: "https://fittrackr.example.com",
    githubUrl: "https://github.com/yourname/fittrackr",
    tag: "Health",
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
            <Text
              variant="body-default-m"
              onBackground="neutral-medium"
              wrap="balance"
            >
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
};

function ProjectCard({
  imageSrc,
  title,
  description,
  techs,
  liveUrl,
  githubUrl,
  tag,
}: ProjectCardProps) {
  return (
    <Flex>
      <Card
        direction="column"
        padding="s"
        border="neutral-medium"
        borderStyle="dashed"
        radius="xl"
        minWidth={20}
        maxWidth={29}
        fillWidth
        gap="16"
      >
        <Media
          fillWidth
          fillHeight
          src={imageSrc}
          radius="m-4"
          aspectRatio="16/8"
          border="neutral-medium"
          borderWidth={2}
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
