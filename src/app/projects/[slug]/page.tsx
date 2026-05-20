"use client";

import "./../../global.css";
import { Text, Button, Column, Arrow, Flex, Row } from "@once-ui-system/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useParams, useRouter } from "next/navigation";
import { navigationItemJSON } from "@/data/data";
import { ProjectItem } from "@/components/ProjectItem";
import { ProjectContent } from "@/components/projects/ProjectContent";
import { useWebHaptics } from "web-haptics/react";

export default function Project() {
  const router = useRouter();
  const haptic = useWebHaptics();
  const params = useParams();
  const slug = params?.slug as string;

  const project = navigationItemJSON.find((item) => item.id === slug);

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
    <Flex
      fill
      direction="column"
      paddingY="l"
      gap="l"
      className="navigation-other-hero"
    >
      {/* Navigation Header */}
      <Row fillWidth horizontal="start" vertical="center" fitHeight>
        <Button
          variant="tertiary"
          size="s"
          onClick={() => {
            haptic.trigger("light");
            router.push("/projects");
          }}
        >
          {" "}
          <Text variant="code-default-s" onBackground="neutral-weak">
            <Row vertical="center" gap="4">
              <ArrowLeftIcon size={18} weight="light" /> PROJECTS
            </Row>
          </Text>
        </Button>
      </Row>

      <Flex
        fillWidth
        fillHeight
        gap="xl"
        m={{ direction: "column" }}
        horizontal="between"
      >
        {/* Main Project Container */}
        <Column fillWidth horizontal="start" vertical="start">
          <Flex
            maxWidth="xs"
            direction="column"
            gap="m"
            className="navigation-other-hero-content-item-gap"
          >
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
              <b>{project.description}</b>
            </Text>
            <ProjectContent data={project.data as any} />
          </Flex>
        </Column>

        <Column
          fillWidth
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
          </Column>
        </Column>
      </Flex>
    </Flex>
  );
}
