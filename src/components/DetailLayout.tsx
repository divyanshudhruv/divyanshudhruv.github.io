"use client";

import { Text, Button, Column, Arrow, Flex, Row } from "@once-ui-system/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useWebHaptics } from "web-haptics/react";
import { NavigationItem } from "@/components/NavigationItem";
import { NavItem } from "@/data/data";

export default function DetailLayout({
  item,
  backHref,
  backLabel,
  sidebarTitle,
  sidebarItems,
  sidebarAllHref,
  children,
}: {
  item?: NavItem;
  backHref: string;
  backLabel: string;
  sidebarTitle: string;
  sidebarItems: NavItem[];
  sidebarAllHref: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const haptic = useWebHaptics();

  if (!item) {
    return (
      <Flex fill direction="column" paddingY="l" gap="l" className="navigation-other-hero">
        <Row fillWidth horizontal="start" vertical="center" fitHeight>
          <Button variant="tertiary" size="s" onClick={() => { haptic.trigger("light"); router.push(backHref); }}>
            <Text variant="code-default-s" onBackground="neutral-weak">
              <Row vertical="center" gap="4">
                <ArrowLeftIcon size={18} weight="light" /> {backLabel}
              </Row>
            </Text>
          </Button>
        </Row>
        <Flex fillWidth fillHeight gap="xl" m={{ direction: "column" }} horizontal="between">
          <Column fillWidth horizontal="start" vertical="start">
            <Flex maxWidth="xs" direction="column" gap="m" className="navigation-other-hero-content-item-gap">
              <Column gap="xs">
                <Text variant="display-default-xs" onBackground="neutral-strong">
                  <b>Page not found</b>
                </Text>
                <Text>
                  <Row fill gap="4" vertical="center">
                    <Text onBackground="neutral-weak" variant="code-default-s"><b>{new Date().toDateString()}</b></Text>
                    <Text onBackground="neutral-weak" variant="code-default-m"><b>•</b></Text>
                    <Text onBackground="neutral-weak" variant="code-default-s"><b>404</b></Text>
                    <Text onBackground="neutral-weak" variant="code-default-m"><b>•</b></Text>
                    <Text onBackground="neutral-weak" variant="code-default-s"><b>🥀 NOTFOUND</b></Text>
                  </Row>
                </Text>
              </Column>
              <Text variant="body-default-l" onBackground="neutral-weak" className="lh">
                <b>The requested resource could not be located.</b>
              </Text>
              <Button variant="primary" size="s" onClick={() => { haptic.trigger("light"); router.push("/"); }}>
                <Text variant="code-default-s">
                  <Row vertical="center" gap="4">
                    <ArrowLeftIcon size={18} weight="light" /> GO BACK HOME
                  </Row>
                </Text>
              </Button>
            </Flex>
          </Column>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex fill direction="column" paddingY="l" gap="l" className="navigation-other-hero">
      <Row fillWidth horizontal="start" vertical="center" fitHeight>
        <Button variant="tertiary" size="s" onClick={() => { haptic.trigger("light"); router.push(backHref); }}>
          <Text variant="code-default-s" onBackground="neutral-weak">
            <Row vertical="center" gap="4">
              <ArrowLeftIcon size={18} weight="light" /> {backLabel}
            </Row>
          </Text>
        </Button>
      </Row>

      <Flex direction="row" fillWidth fillHeight horizontal="between" m={{ direction: "column" }} gap="xl">
        <Column fillWidth horizontal="start" vertical="start">
          <Flex maxWidth="xs" direction="column" gap="m" className="navigation-other-hero-content-item-gap">
            <Column gap="xs">
              <Text variant="display-default-xs" onBackground="neutral-strong">
                <b>{item.title}</b>
              </Text>
              <Text>
                <Row fill gap="4" vertical="center">
                  <Text onBackground="neutral-weak" variant="code-default-s"><b>{item.lastUpdated}</b></Text>
                  <Text onBackground="neutral-weak" variant="code-default-m"><b>•</b></Text>
                  <Text onBackground="neutral-weak" variant="code-default-s"><b>{item.abbreviation}</b></Text>
                  {item.isPrivate && (
                    <>
                      <Text onBackground="neutral-weak" variant="code-default-m"><b>•</b></Text>
                      <Text onBackground="neutral-weak" variant="code-default-s"><b>🔒 PRIVATE</b></Text>
                    </>
                  )}
                </Row>
              </Text>
            </Column>
            {children}
          </Flex>
        </Column>

        <Column fillWidth fillHeight horizontal="end" vertical="start" m={{ horizontal: "start" }}>
          <Column fit gap="l">
            <Flex direction="column" fill gap="s">
              <Text variant="code-default-s" onBackground="neutral-weak"><b>{sidebarTitle}</b></Text>
              <Column fill gap="s" data-scaling="110">
                {sidebarItems.slice(0, 5).map((item, index) => (
                  <NavigationItem key={index} {...item} routePrefix={sidebarAllHref.slice(1) as "projects" | "others"} />
                ))}
                <Button variant="secondary" size="s" id="arrow-trigger" onClick={() => { haptic.trigger("light"); router.push(sidebarAllHref); }}>
                  <Row>
                    <Text variant="code-default-s" onBackground="neutral-weak">ALL</Text>
                    <Arrow trigger="#arrow-trigger" scale={0.7} onBackground="neutral-weak" />
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
