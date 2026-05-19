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
  Timeline,
  Tag,
} from "@once-ui-system/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useParams, useRouter } from "next/navigation";
import { otherNavigationItemJSON } from "@/data/data";
import { OtherItem } from "@/components/OtherItem";

export default function OtherDetail() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const item = otherNavigationItemJSON.find((item) => item.id === slug);

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
        <Button
          variant="tertiary"
          size="s"
          onClick={() => router.push("/others")}
        >
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
                      <Text
                        onBackground="neutral-weak"
                        variant="code-default-m"
                      >
                        <b>•</b>
                      </Text>
                      <Text
                        onBackground="neutral-weak"
                        variant="code-default-s"
                      >
                        <b>🔒 PRIVATE</b>
                      </Text>
                    </>
                  )}
                </Row>
              </Text>
            </Column>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              className="lh"
            >
              <b>{item.description}</b>
            </Text>
            {item.content.map((block, idx) => (
              <BlockRenderer block={block} key={idx} />
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

const BlockRenderer = ({ block }: { block: any }) => {
  switch (block.type) {
    case "list":
      return (
        <Flex direction="column" gap="s">
          <Text variant="heading-default-xl" onBackground="neutral-strong">
            <b>{block.heading}</b>
          </Text>
          <List as="ul" textVariant="body-default-m" gap="4">
            {block.items.map((item: string, index: number) => (
              <ListItem key={index}>
                <Text
                  variant="body-default-m"
                  onBackground="neutral-weak"
                  className="lh"
                >
                  <b>{item}</b>
                </Text>
              </ListItem>
            ))}
          </List>
        </Flex>
      );
    case "timeline":
      return (
        <Flex direction="column" gap="s" fillWidth>
          {block.heading && (
            <Text variant="heading-default-xl" onBackground="neutral-strong">
              <b>{block.heading}</b>
            </Text>
          )}
          <Timeline
            size="xs"
            items={block.items.map((item: any) => ({
              label: (
                <Row vertical="center" gap="8">
                  <Text
                    variant="label-default-xl"
                    onBackground="neutral-strong"
                  >
                    <b>{item.label}</b>
                  </Text>
                  {item.employment && (
                    <Tag
                      background="transparent"
                      variant={
                        item.employment.toLowerCase().includes("cto") ||
                        item.employment.toLowerCase().includes("ceo") ||
                        item.employment.toLowerCase().includes("founder") ||
                        item.employment.toLowerCase().includes("co-founder") ||
                        item.employment.toLowerCase().includes("lead")
                          ? "danger"
                          : item.employment.toLowerCase().includes("trainee")
                            ? "success"
                            : item.employment.toLowerCase().includes("part")
                              ? "accent"
                              : "warning"
                      }
                      size="s"
                    >
                      <Text variant="code-default-xs">
                        <b>{item.employment}</b>
                      </Text>
                    </Tag>
                  )}
                </Row>
              ),
              description: (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  <b>{item.description}</b>
                </Text>
              ),
              state:
                item.state === "completed" ? "default" : item.state || "active",
              children: item.date && (
                <Row
                  fitWidth
                  radius="full"
                  paddingY="4"
                  paddingX="8"
                  border="neutral-alpha-medium"
                  textVariant="label-default-xs"
                  onBackground="neutral-weak"
                  marginTop="8"
                >
                  <b>{item.date}</b>
                </Row>
              ),
            }))}
          />
        </Flex>
      );
    case "prose":
      return (
        <Flex direction="column" gap="s">
          <Text variant="heading-default-xl" onBackground="neutral-strong">
            <b>{block.heading}</b>
          </Text>
          {block.items.map((item: string, index: number) => (
            <Text
              key={index}
              variant="body-default-m"
              onBackground="neutral-weak"
              className="lh"
            >
              <b>{item}</b>
            </Text>
          ))}
        </Flex>
      );
    case "media":
      const validItems = block.items.filter((item: any) => item.src);
      return (
        <Flex direction="column" gap="s">
          <Text variant="heading-default-xl" onBackground="neutral-strong">
            <b>{block.heading}</b>
          </Text>
          {validItems.length === 1 ? (
            <Media
              src={validItems[0].src}
              alt={validItems[0].alt}
              radius="m"
              fillWidth
            />
          ) : validItems.length > 1 ? (
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
              items={validItems.map((item: any) => ({
                slide: item.src,
                alt: item.alt,
              }))}
            />
          ) : null}
        </Flex>
      );
    default:
      return null;
  }
};
