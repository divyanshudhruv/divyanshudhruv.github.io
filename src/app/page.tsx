"use client";

import "./global.css";

import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
  Flex,
  Row,
  IconButton,
  Kbd,
  Media,
  Arrow,
  Tag,
  ColorScheme,
  Card,
} from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";
import { useRouter } from "next/navigation";

import { navigationItemJSON, otherNavigationItemJSON } from "@/data/data";
import { NavigationItem } from "@/components/NavigationItem";
import {
  FaviconIcon,
  FaviconIconSolo,
  ImgIcon,
  FlagIcon,
  TagIcon,
} from "@/components/Icons";

export default function Home() {
  const router = useRouter();

  return (
    <Flex fill>
      <Row fillWidth fillHeight>
        <Column
          fillWidth
          fitHeight
          paddingY={"l"}
          horizontal="start"
          vertical="start"
        >
          <Flex
            maxWidth={"xs"}
            paddingRight={"l"}
            horizontal="start"
            vertical="start"
            direction="column"
            gap={"l"}
          >
            <Row center gap="12">
              <Media
                src="/pfp.png"
                alt="Profile"
                width={3}
                height={3}
                radius="s"
              />
              <Column>
                <Text variant="body-default-m">
                  <b>Divyanshu Dhruv</b>
                </Text>
                <Text onBackground="neutral-weak" variant="code-default-m">
                  DS ENGINEER
                </Text>
              </Column>
            </Row>

            <Flex direction="column" fill gap={"8"}>
              <Text variant="code-default-l" onBackground="neutral-weak"></Text>
              <Text
                variant="body-default-m"
                onBackground="neutral-medium"
                className="lh"
              >
                <b>
                  {" "}
                  Hi, I'm Divyanshu — an 18-year-old full-stack developer and
                  student who's been coding since 12, now architecting
                  <FaviconIcon
                    website="Basalt3"
                    websiteUrl="https://linkedin.com"
                  />
                  and exploring MCP servers and environments for AI agents{" "}
                  <FaviconIconSolo websiteUrl="https://openclaw.ai" />. Beyond
                  code, I'm a musician and producer, a multi-sport athlete, and
                  a collector of 150+
                  <TagIcon variant="success" text="Hot Wheels" />, including
                  some rare pieces. I live in
                  <FlagIcon country="India" countryCode="IN" />, but I have a
                  lot of friends and connections in other countries, lol.
                </b>
              </Text>
            </Flex>

            <Flex direction="column" fill gap={"8"}>
              <Text variant="code-default-l" onBackground="neutral-weak">
                STUDY
              </Text>
              <Text
                variant="body-default-m"
                onBackground="neutral-medium"
                className="lh"
              >
                <b>
                  I completed my primary and secondary education at St.
                  Patrick's Academy, Dehradun
                  <ImgIcon
                    imageSrc="https://framerusercontent.com/images/WJ5i1R1nlykh9L4pTXBmKkrPs.svg?width=21&height=21"
                    href="https://stpatricksdehradun.in"
                  />
                  , finishing <TagIcon variant="warning" text="Grade X ICSE" />{" "}
                  while actively contributing to science events and school
                  activities, and then completed my
                  <TagIcon variant="accent" text="Grade XII CBSE" /> at Delhi
                  Public School{" "}
                  <ImgIcon
                    href="https://dpsvadodara.com"
                    imageSrc="https://framerusercontent.com/images/HGGKn65vMQyHgONQ37tdvdYgMU.svg?width=21&height=21"
                  />
                  , Vadodara.
                </b>
              </Text>
            </Flex>

            <Flex direction="column" fill gap={"8"}>
              <Text variant="code-default-l" onBackground="neutral-weak">
                EXPERIENCE
              </Text>
              <Text
                variant="body-default-m"
                onBackground="neutral-medium"
                className="lh"
              >
                <b>
                  {" "}
                  At Basalt3
                  <ImgIcon
                    href="https://basalt3.space"
                    imageSrc="https://avatars.githubusercontent.com/u/267773509?s=200&v=4"
                  />
                  , I lead the architecture of open-source tools for agentic
                  infrastructure and minimal developer workflows. At
                  <FaviconIcon
                    website="Once UI"
                    websiteUrl="https://once-ui.com"
                  />
                  , I collaborate on the design system, UI libraries{" "}
                  <FaviconIconSolo websiteUrl="https://ui.shadcn.com" />, and
                  continuous product feedback. At Next Bench{" "}
                  <ImgIcon
                    href="https://next-bench.space"
                    imageSrc="https://framerusercontent.com/images/UxF97MgFC7p8KelqtPYjNbWqzXg.svg?width=21&height=21"
                  />{" "}
                  I create AI-enabled solution for{" "}
                  <TagIcon variant="danger" text="students" />, while my
                  <TagIcon variant="success" text="Self-employed" /> work spans
                  full-stack apps, dev tooling, and early projects in web,
                  games, and mobile.
                  <br />
                  <br />
                  At WhiteHat Jr{" "}
                  <ImgIcon
                    href="https://next-bench.space"
                    imageSrc="https://framerusercontent.com/images/WJ5i1R1nlykh9L4pTXBmKkrPs.svg?width=21&height=21"
                  />
                  , I trained as an app and game developer, learning React
                  Native
                  <FaviconIconSolo websiteUrl="https://reactnative.dev" />
                  and frontend fundamentals, and even winning a{" "}
                  <TagIcon variant="warning" text="global hackathon" /> at 12.
                </b>
              </Text>
            </Flex>

            <Flex direction="column" fill gap={"8"}>
              <Text variant="code-default-l" onBackground="neutral-weak">
                INFO
              </Text>
              <Text
                variant="body-default-m"
                onBackground="neutral-medium"
                className="lh"
              >
                <b>
                  I use tools like Obsidian
                  <FaviconIconSolo websiteUrl="https://obsidian.md/" />, Notion{" "}
                  <FaviconIconSolo websiteUrl="https://notion.so/" />, Framer{" "}
                  <FaviconIconSolo websiteUrl="https://www.framer.com/" />,
                  Paper
                  <FaviconIconSolo websiteUrl="https://paper.design" />,
                  Windsurf{" "}
                  <FaviconIconSolo websiteUrl="https://windsurf.com/" />, Figma{" "}
                  <FaviconIconSolo websiteUrl="https://figma.com/" />, Gitbutler{" "}
                  <FaviconIconSolo websiteUrl="https://gitbutler.com/" />,
                  WisprFlow{" "}
                  <FaviconIconSolo websiteUrl="https://wisprflow.com/" />,
                  Perplexity{" "}
                  <FaviconIconSolo websiteUrl="https://perplexity.ai/" />, and
                  ChatGPT{" "}
                  <FaviconIconSolo websiteUrl="https://openai.com/products/chatgpt/" />
                  to build structured and clean designed and softwares.
                </b>
              </Text>
            </Flex>
          </Flex>
        </Column>

        <Column
          fitWidth
          paddingY={"l"}
          fillHeight
          horizontal="center"
          vertical="start"
          gap="l"
        >
          <Flex direction="column" fit gap={"s"}>
            <Text variant="code-default-s" onBackground="neutral-weak">
              <b>PROJECTS</b>
            </Text>

            <Column fill gap="s" data-scaling="110">
              {navigationItemJSON.slice(0, 4).map((item, index) => (
                <NavigationItem
                  key={index}
                  id={item.id}
                  lastUpdated={item.lastUpdated}
                  abbreviation={item.abbreviation}
                  isPrivate={item.isPrivate}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  type="projects"
                />
              ))}
              <Button
                variant="secondary"
                size="s"
                id="arrow-trigger-1"
                onClick={() => router.push("/projects")}
              >
                <Row>
                  <Text variant="code-default-s" onBackground="neutral-weak">
                    ALL
                  </Text>
                  <Arrow
                    trigger="#arrow-trigger-1"
                    scale={0.7}
                    onBackground="neutral-weak"
                  />
                </Row>
              </Button>
            </Column>
          </Flex>

          <Flex direction="column" fill gap={"s"}>
            <Text variant="code-default-s" onBackground="neutral-weak">
              <b>OTHERS</b>
            </Text>

            <Column fill gap="s" data-scaling="110">
              {otherNavigationItemJSON.slice(0, 5).map((item, index) => (
                <NavigationItem
                  key={index}
                  id={item.id}
                  lastUpdated={item.lastUpdated}
                  abbreviation={item.abbreviation}
                  isPrivate={item.isPrivate}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  type="others"
                />
              ))}
              <Button
                variant="secondary"
                size="s"
                id="arrow-trigger-2"
                onClick={() => router.push("/others")}
              >
                <Row>
                  <Text variant="code-default-s" onBackground="neutral-weak">
                    ALL
                  </Text>
                  <Arrow
                    trigger="#arrow-trigger-2"
                    scale={0.7}
                    onBackground="neutral-weak"
                  />
                </Row>
              </Button>
            </Column>
          </Flex>
        </Column>
      </Row>
    </Flex>
  );
}
