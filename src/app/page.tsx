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

import { navigationItemJSON, otherNavigationItemJSON, personalItemJSON } from "@/data/data";
import { ProjectItem } from "@/components/ProjectItem";
import { OtherItem } from "@/components/OtherItem";
import {
  FaviconIcon,
  FaviconIconSolo,
  ImgIcon,
  FlagIcon,
  TagIcon,
} from "@/components/Icons";

const ParagraphRenderer = ({ content }: { content: any[] }) => {
  return (
    <>
      {content.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{part}</span>;
        }
        switch (part.type) {
          case "favicon":
            return (
              <FaviconIcon
                key={index}
                website={part.website}
                websiteUrl={part.url}
              />
            );
          case "faviconSolo":
            return <FaviconIconSolo key={index} websiteUrl={part.url} />;
          case "tag":
            return <TagIcon key={index} variant={part.variant} text={part.text} />;
          case "flag":
            return <FlagIcon key={index} country={part.country} countryCode={part.code} />;
          case "img":
            return <ImgIcon key={index} href={part.href} imageSrc={part.src} />;
          default:
            return null;
        }
      })}
    </>
  );
};

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
                src={personalItemJSON.pfp}
                alt="Profile"
                width={3}
                height={3}
                radius="s"
              />
              <Column>
                <Text variant="body-default-m">
                  <b>{personalItemJSON.name}</b>
                </Text>
                <Text onBackground="neutral-weak" variant="code-default-m">
                  {personalItemJSON.role}
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
                  <ParagraphRenderer content={personalItemJSON.about} />
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
                  <ParagraphRenderer content={personalItemJSON.study} />
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
                style={{ whiteSpace: "pre-wrap" }}
              >
                <b>
                  <ParagraphRenderer content={personalItemJSON.experience} />
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
                  <ParagraphRenderer content={personalItemJSON.info} />
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
                <ProjectItem
                  key={index}
                  id={item.id}
                  lastUpdated={item.lastUpdated}
                  abbreviation={item.abbreviation}
                  isPrivate={item.isPrivate}
                  imageSrc={item.imageSrc}
                  title={item.title}
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
                <OtherItem
                  key={index}
                  id={item.id}
                  lastUpdated={item.lastUpdated}
                  abbreviation={item.abbreviation}
                  isPrivate={item.isPrivate}
                  imageSrc={item.imageSrc}
                  title={item.title}
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
