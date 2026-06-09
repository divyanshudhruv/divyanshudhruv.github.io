"use client";

import { Text, Button, Column, Flex, Row, Arrow } from "@once-ui-system/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useWebHaptics } from "web-haptics/react";
import { NavigationItem } from "@/components/NavigationItem";
import { NavItem } from "@/data/data";
import { useSortedItems } from "@/hooks/useSortedItems";

export default function ListPageLayout({
  title,
  items,
  routePrefix,
}: {
  title: string;
  items: NavItem[];
  routePrefix: "projects" | "others";
}) {
  const router = useRouter();
  const haptic = useWebHaptics();
  const [visibleCount, setVisibleCount] = useState(4);
  const sorted = useSortedItems(items);
  const visible = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  const handleLoadMore = () => {
    haptic.trigger("medium");
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <Flex fill direction="column" paddingY="l" gap="l" className="navigation-main-hero">
      <Row fillWidth horizontal="start" vertical="center" fitHeight>
        <Button variant="tertiary" size="s">
          <Text variant="code-default-s" onBackground="neutral-weak" onClick={() => { haptic.trigger("light"); router.push("/"); }}>
            <Row vertical="center" gap="4" cursor="pointer">
              <ArrowLeftIcon size={22} weight="light" /> HOME
            </Row>
          </Text>
        </Button>
      </Row>

      <Flex direction="column" fill gap="l">
        <Column fill gap="m" fillWidth className="navigation-main-hero-content-item-gap">
          <Text variant="display-default-xs" onBackground="neutral-alpha-strong">
            <b>{title}</b>
          </Text>
          {visible.map((item, index) => (
            <NavigationItem key={index} {...item} routePrefix={routePrefix} />
          ))}
          {hasMore && (
            <Button variant="secondary" size="s" id="arrow-trigger" onClick={handleLoadMore}>
              <Row>
                <Text variant="code-default-s" onBackground="neutral-weak">LOAD MORE</Text>
                <Arrow trigger="#arrow-trigger" scale={0.7} onBackground="neutral-weak" />
              </Row>
            </Button>
          )}
        </Column>
      </Flex>
    </Flex>
  );
}
