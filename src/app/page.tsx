"use client";

import {
  Accordion,
  AutoScroll,
  Avatar,
  Background,
  Button,
  Column,
  Fade,
  Flex,
  Grid,
  Icon,
  IconButton,
  InlineCode,
  Line,
  List,
  ListItem,
  Logo,
  Mask,
  MatrixFx,
  Row,
  SmartLink,
  Tag,
  Text,
  ThemeSwitcher,
} from "@once-ui-system/core";
import { useState } from "react";
import ContributionGraph from "../components/ContributionGraph";
import "./global.css";

import AutoScrollHorizontal from "@/components/AutoScrollHorizontal";
import { Projects } from "@/components/Projects";
import Stacks from "@/components/Stacks";
import Testimonial from "@/components/Testimonial";
import Experience from "@/components/Experience";

import ChipSet from "@/components/ChipSet";
import Dashed from "@/components/Dashed";
import ImagesForGrid from "@/components/ImagesForGrid";
import LinkSet from "@/components/LinkSet";

import {
  BIO,
  EDUCATION,
  EXPERIENCES,
  GALLERY,
  PERSONA,
  PROFILE,
  PROJECTS,
  TESTIMONIALS,
} from "@/data/core-config";
import Waves from "@/components/Waves";
import { SUSE } from "next/font/google";
import { HiArrowRight } from "react-icons/hi2";

const suse = SUSE({ subsets: ["latin"] });

export default function Home() {
  const [visibleProjects, setVisibleProjects] = useState(10);
  const projectsToShow = PROJECTS.slice(0, visibleProjects);
  const hasMoreProjects = PROJECTS.length > visibleProjects;

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 4, PROJECTS.length));
  };

  return (
    <Row
      fillWidth
      horizontal="center"
      vertical="start"
      style={{ minHeight: "100vh" }}
      paddingX={"l"}
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
            Random Stuffs
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
              opacity={70}
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
          <Flex fit>
            {" "}
            <Avatar
              src={PERSONA.avatar}
              size="xl"
              border="neutral-alpha-strong"
              className="invert"
            />
          </Flex>
          <Column
            fillWidth
            vertical="end"
            horizontal="center"
            fillHeight
            borderLeft="neutral-alpha-weak"
          >
            <Flex
              fillWidth
              fillHeight
              paddingX={1}
              maxHeight={2}
              minHeight={2}
              borderBottom="neutral-alpha-weak"
              vertical="center"
              horizontal="start"
              id="persona_main"
            >
              <Text variant="code-default-xs" onBackground="neutral-weak">
                {PERSONA.header}{" "}
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
              id="persona_main"
            >
              <Text
                variant="display-default-s"
                onBackground="neutral-strong"
                className="font-reckless-light"
              >
                {PERSONA.name}
              </Text>
            </Flex>
            <Flex
              fillWidth
              fillHeight
              paddingX={1}
              maxHeight={2}
              minHeight={2}
              vertical="center"
              id="persona_main"
              horizontal="between"
            >
              <Text variant="code-default-xs" onBackground="neutral-weak">
                {PERSONA.role}
              </Text>{" "}
              <ThemeSwitcher id="theme_switcher" style={{ scale: "0.7" }} />
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
          {PROFILE.chips.map((chip, chipIndex) => (
            <Row key={chipIndex + "-chip"} fillWidth id="profile_chips">
              {chip.map((chipData, chipDataIndex) => (
                <Flex
                  key={chipDataIndex + "-chip-data" + "-" + chipIndex}
                  flex={1}
                >
                  <ChipSet
                    icon={chipData.icon}
                    text={chipData.text}
                    href={chipData.href}
                  />
                </Flex>
              ))}
            </Row>
          ))}
        </Column>
        {PROFILE.links.map((link, i) => (
          <Row
            wrap
            fillWidth
            minHeight={4}
            gap={1}
            borderBottom="neutral-alpha-weak"
            key={i + "-link"}
            id="profile_links"
          >
            {link.map((linkData, j) => (
              <LinkSet
                key={j + "-link-data"}
                src={linkData.src}
                href={linkData.href}
                text={linkData.text}
                position={
                  j === 0 ? "first" : j === link.length - 1 ? "last" : "middle"
                }
              />
            ))}
          </Row>
        ))}
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
          {BIO.description.map((desc, i) => (
            <Text
              key={i}
              variant="label-default-m"
              onBackground="neutral-medium"
              style={{ lineHeight: "1.7em" }}
            >
              {desc}
            </Text>
          ))}
        </Column>{" "}
        {/* <Row padding={1} borderBottom="neutral-alpha-weak" overflow="hidden">
            <AutoScroll gap={1}>
              <Row gap={1}>{TESTIMONIALS.map((testimonial, index) => (
                <Testimonial
                  key={`testimonial-${index}`}
                  src={testimonial.src}
                  href={testimonial.href}
                  name={testimonial.name}
                  desc={testimonial.desc}
                  body={testimonial.body}
                />
              ))}</Row>
            </AutoScroll>
        </Row> */}
        <Flex
          fillWidth
          fitHeight
          center
          borderBottom="neutral-alpha-weak"
          paddingTop={1}
          padding={1}
          paddingLeft={1}
          paddingBottom={1}
          paddingRight={1}
          overflowX="scroll"
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
            Skills & Stacks{" "}
            <strong>
              <sup className={suse.className}>({BIO.stacks.length})</sup>
            </strong>
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
          id="bio_stacks"
        >
          <Stacks stacks={BIO.stacks} />
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
            Experience{" "}
            <strong>
              <sup className={suse.className}>({EXPERIENCES.length})</sup>
            </strong>
          </Text>
        </Flex>{" "}
        <Flex fillWidth fitHeight direction="column">
          {EXPERIENCES.map((exp, expIndex) =>
            exp.postings.map((posting, postingIndex) => (
              <Experience
                key={`${expIndex}-${postingIndex}-${Math.random().toString().slice(2, 7)}`}
                companyLogo={exp.companyLogo}
                companyText={exp.companyText}
                posting={posting}
                current={exp.current}
                open={exp.open}
                postingIndex={postingIndex}
                totalPostings={exp.postings.length}
              />
            )),
          )}{" "}
        </Flex>{" "}
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
            Education{" "}
            <b>
              <sup className={suse.className}>({EDUCATION.length})</sup>
            </b>
          </Text>
        </Flex>{" "}
        <Flex fillWidth fitHeight direction="column">
          {EDUCATION.map((exp, expIndex) =>
            exp.postings.map((posting, postingIndex) => (
              <Experience
                key={`${expIndex}-${postingIndex}-${Math.random().toString().slice(2, 7)}`}
                companyLogo={exp.companyLogo}
                companyText={exp.companyText}
                variant="secondary"
                current={exp.current}
                open={exp.open}
                posting={posting}
                postingIndex={postingIndex}
                totalPostings={exp.postings.length}
              />
            )),
          )}
        </Flex>{" "}
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
            Some Images{" "}
            <b>
              <sup className={suse.className}>({GALLERY.length})</sup>
            </b>
          </Text>
        </Flex>{" "}
        <Grid
          fillWidth
          fitHeight
          columns={2}
          border="neutral-alpha-weak"
          paddingBottom={1}
          id="gallery"
        >
          <ImagesForGrid images={GALLERY} />
        </Grid>
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
            Projects{" "}
            <b>
              <sup className={suse.className}>({PROJECTS.length}) + github</sup>
            </b>
          </Text>
        </Flex>{" "}
        <Flex fillWidth fitHeight direction="column">
          {projectsToShow.map((project, index) => (
            <Projects
              key={project.id}
              postingIndex={index}
              projects={{ tags: project.tags }}
              title={project.title}
              role={project.role}
              date={project.date}
              linkHref={project.href}
              ongoing={project.ongoing}
              logo={project.logo}
            />
          ))}
          <Row
            center
            fillWidth
            padding={1}
            data-border="conservative"
            borderBottom="neutral-alpha-weak"
          >
            <Button size="s" href="https://github.com/divyanshudhruv" arrowIcon>
              <Text variant="label-default-s">
                <Row center gap={0.5}>
                  View more
                  {/* <Text onBackground="neutral-weak" className="rotate-315">
                    <HiArrowRight />
                  </Text> */}
                </Row>
              </Text>{" "}
            </Button>
          </Row>
        </Flex>
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
            Blogs
          </Text>
        </Flex>{" "}
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
            I don't write blogs ;)
          </Text>
        </Column>
        <Dashed />
        <Column fillWidth center gap={1}>
          <Row center borderBottom="neutral-alpha-weak" padding={1} fillWidth>
            <Flex wrap maxWidth={40} align="center" center fillWidth>
              {" "}
              <Text
                variant="code-default-s"
                align="center"
                onBackground="neutral-weak"
                style={{ lineHeight: "1.7em" }}
              >
                Inspired by{" "}
                <SmartLink href="https://github.com/ncdai">
                  <u>chanhdai</u>
                </SmartLink>{" "}
                &{" "}
                <SmartLink href="https://once-ui.com">
                  <u>once-ui.com</u>
                </SmartLink>
                .
                <br /> Built by{" "}
                <SmartLink href="https://github.com/divyanshudhruv">
                  <u>divyanshudhruv</u>
                </SmartLink>
                . The source code is available on{" "}
                <SmartLink href="https://github.com/divyanshudhruv/divyanshudhruv.github.io">
                  <u>GitHub</u>
                </SmartLink>
                .
              </Text>
            </Flex>
          </Row>
          <Row center gap={0.5} padding={1} paddingTop={0}>
            <a href="/llms.txt" style={{ textDecoration: "underline" }}>
              {" "}
              <Text variant="label-default-s" onBackground="neutral-weak">
                llms.txt
              </Text>
            </a>
            <Text variant="label-default-s" onBackground="neutral-weak">
              •
            </Text>
            <a href="/robots.txt" style={{ textDecoration: "underline" }}>
              <Text variant="label-default-s" onBackground="neutral-weak">
                robots.txt
              </Text>
            </a>
            <Text variant="label-default-s" onBackground="neutral-weak">
              •
            </Text>
            <a href="/rss.xml" style={{ textDecoration: "underline" }}>
              <Text variant="label-default-s" onBackground="neutral-weak">
                rss.xml
              </Text>
            </a>
            <Text variant="label-default-s" onBackground="neutral-weak">
              •
            </Text>
            <a
              href="https://github.com/divyanshudhruv"
              style={{ textDecoration: "underline" }}
            >
              <Text variant="label-default-s" onBackground="neutral-weak">
                github
              </Text>
            </a>
            <Text variant="label-default-s" onBackground="neutral-weak">
              •
            </Text>
            <a
              href="https://www.linkedin.com/in/divyanshudhruv"
              style={{ textDecoration: "underline" }}
            >
              <Text variant="label-default-s" onBackground="neutral-weak">
                linkedin
              </Text>
            </a>
          </Row>
        </Column>
      </Column>
    </Row>
  );
}
