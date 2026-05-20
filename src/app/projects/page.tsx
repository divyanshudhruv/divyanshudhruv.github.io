"use client";

import "./../global.css";

import { Text, Button, Column, Flex, Row, Arrow } from "@once-ui-system/core";

import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { navigationItemJSON } from "@/data/data";
import { useRouter } from "next/navigation";
import { useWebHaptics } from "web-haptics/react";
import { ProjectItem } from "@/components/ProjectItem";

export default function Projects() {
  const router = useRouter();
  const haptic = useWebHaptics();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    haptic.trigger("medium");
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const visibleItems = navigationItemJSON.slice(0, visibleCount);
  const hasMore = visibleCount < navigationItemJSON.length;

  return (
    <Flex
      fill
      direction="column"
      paddingY={"l"}
      gap="m"
      className="navigation-main-hero "
    >
      <Row fillWidth horizontal="start" vertical="center" fitHeight>
        <Button variant="tertiary" size="s">
          <Text
            variant="code-default-s"
            onBackground="neutral-weak"
            onClick={() => {
              haptic.trigger("light");
              router.push("/");
            }}
          >
            <Row vertical="center" gap="4" cursor="pointer">
              <ArrowLeftIcon size={22} weight="light" /> HOME
            </Row>{" "}
          </Text>
        </Button>
      </Row>

      <Flex direction="column" fill gap={"l"}>
        <Column fill gap="m" fillWidth className="navigation-main-hero-content-item-gap">
          <Text
            variant="display-default-xs"
            onBackground="neutral-alpha-strong"
          >
            <b>Projects</b>
          </Text>
          {visibleItems.map((item, index) => (
            <ProjectItem
              key={index}
              id={item.id}
              lastUpdated={item.lastUpdated}
              isPrivate={item.isPrivate}
              abbreviation={item.abbreviation}
              imageSrc={item.imageSrc}
              title={item.title}
            />
          ))}
          {hasMore && (
            <Button
              variant="secondary"
              size="s"
              id="arrow-trigger-1"
              onClick={handleLoadMore}
            >
              <Row>
                <Text variant="code-default-s" onBackground="neutral-weak">
                  LOAD MORE
                </Text>
                <Arrow
                  trigger="#arrow-trigger-1"
                  scale={0.7}
                  onBackground="neutral-weak"
                />
              </Row>
            </Button>
          )}
        </Column>
      </Flex>
    </Flex>
  );
}
