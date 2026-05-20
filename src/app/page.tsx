"use client";

import "./global.css";

import {
  Text,
  Button,
  Column,
  Flex,
  Row,
  Media,
  Arrow,
} from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";
import { useRouter } from "next/navigation";
import { useWebHaptics } from "web-haptics/react";
import {
  navigationItemJSON,
  otherNavigationItemJSON,
  personalItemJSON,
} from "@/data/data";
import { ProjectItem } from "@/components/ProjectItem";
import { OtherItem } from "@/components/OtherItem";
import {
  FaviconIcon,
  FaviconIconSolo,
  ImgIcon,
  FlagIcon,
  TagIcon,
} from "@/components/Icons";
import { CountryCode } from "@rdnr/react-country-flags";

const ParagraphRenderer = ({ content }: { content: string }) => {
  if (typeof content !== "string") return null;

  const regex = /\[([^\]]+)\]\{([a-zA-Z]+)\}/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.substring(lastIndex, match.index));
    }

    const innerContent = match[1];
    const type = match[2];
    const splitArgs = innerContent.split("|");

    switch (type) {
      case "favicon":
        parts.push(
          <FaviconIcon
            key={match.index}
            website={splitArgs[0]}
            websiteUrl={splitArgs[1]}
          />,
        );
        break;
      case "faviconSolo":
        parts.push(
          <FaviconIconSolo key={match.index} websiteUrl={splitArgs[0]} />,
        );
        break;
      case "tag":
        parts.push(
          <TagIcon
            key={match.index}
            text={splitArgs[0]}
            variant={splitArgs[1] as any}
          />,
        );
        break;
      case "flag":
        parts.push(
          <FlagIcon
            key={match.index}
            country={splitArgs[0]}
            countryCode={splitArgs[1] as CountryCode}
          />,
        );
        break;
      case "img":
        parts.push(
          <ImgIcon
            key={match.index}
            href={splitArgs[0]}
            imageSrc={splitArgs[1]}
          />,
        );
        break;
      default:
        parts.push(match[0]);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex));
  }

  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>{part}</span>
      ))}
    </>
  );
};

export default function Home() {
  const router = useRouter();
  const haptic = useWebHaptics();

  return (
    <Flex fill className="main-hero">
      <Flex
        fillWidth
        fitHeight
        gap="xl"
        horizontal="between"
        m={{ direction: "column" }}
      >
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
            className="main-hero-content-text-gap"
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
          fillWidth
          paddingY={"l"}
          fillHeight
          horizontal="end"
          vertical="start"
          m={{ horizontal: "start" }}
        >
          <Column fit gap="l">
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
                  onClick={() => {
                    haptic.trigger("light");
                    router.push("/projects");
                  }}
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
                  onClick={() => {
                    haptic.trigger("light");
                    router.push("/others");
                  }}
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
        </Column>
      </Flex>
    </Flex>
  );
}
