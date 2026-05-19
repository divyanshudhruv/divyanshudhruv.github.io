"use client";

import "./../../global.css";
import {
  Text,
  Heading,
  Button,
  Column,
  Arrow,
  Flex,
  Row,
  Media,
  Line,
  List,
  ListItem,
  BlockQuote,
  Carousel,
} from "@once-ui-system/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useParams, useRouter } from "next/navigation";
import { navigationItemJSON, otherNavigationItemJSON } from "@/data/data";
import { NavigationItem } from "@/components/NavigationItem";

export default function Project() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const project = navigationItemJSON.find(
    (item) => item.id === slug,
  );

  if (!project) {
    return (
      <Flex fill direction="column" paddingY="l" gap="m" center>
        <Text variant="body-default-l" onBackground="neutral-medium">
          Project not found.
          {slug}
        </Text>
        <Button variant="secondary" onClick={() => router.push("/projects")}>
          <Row vertical="center" gap="4">
            <ArrowLeftIcon size={18} weight="light" /> Back to Projects
          </Row>
        </Button>
      </Flex>
    );
  }

  return (
    <Flex fill direction="column" paddingY="l" gap="l">
      {/* Navigation Header */}
      <Row fillWidth horizontal="start" vertical="center" fitHeight>
        <Button variant="tertiary" size="s" onClick={() => router.push("/projects")}>
          {" "}
          <Text variant="code-default-s" onBackground="neutral-weak">
            <Row vertical="center" gap="4">
              <ArrowLeftIcon size={18} weight="light" /> PROJECTS
            </Row>
          </Text>
        </Button>
      </Row>

      <Row fillWidth fillHeight>
        {/* Main Project Container */}
        <Column fillWidth horizontal="start" vertical="start">
          <Flex maxWidth="xs" direction="column" gap="l">
            {" "}
            <Column gap="xs">
              {" "}
              <Text variant="display-default-xs" onBackground="neutral-strong">
                <b>{project.title}</b>
              </Text>
              <Text>
                {" "}
                <Row fill gap={"4"} vertical="center">
                  <Text onBackground="neutral-weak" variant="code-default-s">
                    <b>{project.lastUpdated}</b>
                  </Text>
                  <Text onBackground="neutral-weak" variant="code-default-m">
                    <b>•</b>
                  </Text>
                  <Text onBackground="neutral-weak" variant="code-default-s">
                    <b>{project.abbreviation}</b>
                  </Text>

                  {project.isPrivate && (
                    <>
                      <Text onBackground="neutral-weak" variant="code-default-m">
                        <b>•</b>
                      </Text>
                      <Text onBackground="neutral-weak" variant="code-default-s">
                        <b>🔒 PRIVATE</b>
                      </Text>
                    </>
                  )}
                </Row>
              </Text>
            </Column>
            <Text variant="body-default-l" onBackground="neutral-weak" className="lh">
              <b>{project.description}</b>
            </Text>
            {project.content.map((block) => (
              <BlockRenderer block={block} key={block.id} />
            ))}
          </Flex>
        </Column>

        <Column
          fitWidth
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
        </Column>
      </Row>
    </Flex>
  );
}

const BlockRenderer = ({ block }: { block: any }) => {
  switch (block.type) {
    case "section":
      return (
        <Flex direction="column" gap="s">
          <Text variant="heading-default-xl" onBackground="neutral-strong">
            <b>{block.heading}</b>
          </Text>
          {block.layout === "list" ? (
            <List as="ul" textVariant="body-default-m" gap="4">
              {block.items.map((item: any, index: number) => (
                <ListItem key={index}>
                  <Text variant="body-default-m" onBackground="neutral-weak" className="lh">
                    {item.type === "text" ? <b>{item.value}</b> : item.value}{" "}
                  </Text>
                </ListItem>
              ))}
            </List>
          ) : (
            block.layout === "prose" &&
            block.items.map((item: any, index: number) => (
              <Text key={index} variant="body-default-m" onBackground="neutral-weak" className="lh">
                {item.type === "text" ? <b>{item.value}</b> : item.value}
              </Text>
            ))
          )}
        </Flex>
      );
    case "media":
      return (
        <Flex direction="column" gap="s">
          <Text variant="heading-default-xl" onBackground="neutral-strong">
            <b>{block.heading}</b>
          </Text>
          {block.layout === "grid" ? (
            <Flex direction="column" gap="m" fillWidth>
              {block.items
                .filter((item: any) => item.src)
                .map((item: any, idx: number) => (
                  <Media key={idx} src={item.src} alt={item.alt} radius="m" fillWidth />
                ))}
            </Flex>
          ) : block.items.length === 1 ? (
            <Media src={block.items[0].src} alt={block.items[0].alt} radius="m" fillWidth />
          ) : (
            <Carousel
              controls={false}
              aspectRatio="16/9"
              indicator="line"
              play={{
                auto: true,
                interval: 5000,
                controls: true,
                progress: true,
              }}
              items={block.items
                .filter((item: any) => item.src)
                .map((item: any) => ({
                  slide: item.src,
                  alt: item.alt,
                }))}
            />
          )}
        </Flex>
      );
    default:
      return null;
  }
};
