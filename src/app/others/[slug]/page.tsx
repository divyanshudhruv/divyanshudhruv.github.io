"use client";

import "./../../global.css";
import {
  Text,
  Button,
  Column,
  Arrow,
  Flex,
  Row,
  Media,
  List,
  ListItem,
  Carousel,
} from "@once-ui-system/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useParams, useRouter } from "next/navigation";
import { otherNavigationItemJSON } from "@/data/data";
import { NavigationItem } from "@/components/NavigationItem";

export default function OtherDetail() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const item = otherNavigationItemJSON.find(
    (item) => item.id === slug,
  );

  if (!item) {
    return (
      <Flex fill direction="column" paddingY="l" gap="m" center>
        <Text variant="body-default-l" onBackground="neutral-medium">
          Page not found.
          {slug}
        </Text>
        <Button variant="secondary" onClick={() => router.push("/others")}>
          <Row vertical="center" gap="4">
            <ArrowLeftIcon size={18} weight="light" /> Back to Others
          </Row>
        </Button>
      </Flex>
    );
  }

  return (
    <Flex fill direction="column" paddingY="l" gap="l">
      {/* Navigation Header */}
      <Row fillWidth horizontal="start" vertical="center" fitHeight>
        <Button variant="tertiary" size="s" onClick={() => router.push("/others")}>
          {" "}
          <Text variant="code-default-s" onBackground="neutral-weak">
            <Row vertical="center" gap="4">
              <ArrowLeftIcon size={18} weight="light" /> OTHERS
            </Row>
          </Text>
        </Button>
      </Row>

      <Row fillWidth fillHeight>
        {/* Main Content Container */}
        <Column fillWidth horizontal="start" vertical="start">
          <Flex maxWidth="xs" direction="column" gap="l">
            {" "}
            <Column gap="xs">
              {" "}
              <Text variant="display-default-xs" onBackground="neutral-strong">
                <b>{item.title}</b>
              </Text>
              <Text>
                {" "}
                <Row fill gap={"4"} vertical="center">
                  <Text onBackground="neutral-weak" variant="code-default-s">
                    <b>{item.lastUpdated}</b>
                  </Text>
                  <Text onBackground="neutral-weak" variant="code-default-m">
                    <b>•</b>
                  </Text>
                  <Text onBackground="neutral-weak" variant="code-default-s">
                    <b>{item.abbreviation}</b>
                  </Text>

                  {item.isPrivate && (
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
              <b>{item.description}</b>
            </Text>
            {item.content.map((block) => (
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
