"use client";

import { useState } from "react";
import usePageViews from "@/hooks/usePageViews";

import "./../../global.css";
import {
  Text,
  Button,
  Column,
  Arrow,
  Flex,
  Row,
  Input,
} from "@once-ui-system/core";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  KeyIcon,
  PasswordIcon,
} from "@phosphor-icons/react";
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

  const [passwordInput, setPasswordInput] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const { views } = usePageViews("divyanshudhruv.is-a.dev", "/");

  const project = navigationItemJSON.find((item) => item.id === slug);

  const handleCheck = () => {
    haptic.trigger("light");
    if (passwordInput === `${project?.id}-${views}`) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!project) {
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
                <Text
                  variant="display-default-xs"
                  onBackground="neutral-strong"
                >
                  <b>Project not found</b>
                </Text>
                <Text>
                  {" "}
                  <Row fill gap={"4"} vertical="center">
                    <Text onBackground="neutral-weak" variant="code-default-s">
                      <b>{new Date().toDateString()}</b>
                    </Text>
                    <Text onBackground="neutral-weak" variant="code-default-m">
                      <b>•</b>
                    </Text>
                    <Text onBackground="neutral-weak" variant="code-default-s">
                      <b>404</b>
                    </Text>

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
                        <b>🥀 NOTFOUND</b>
                      </Text>
                    </>
                  </Row>
                </Text>
              </Column>
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                className="lh"
              >
                <b>The requested resource could not be located. </b>
              </Text>
              <Button
                variant="primary"
                size="s"
                onClick={() => {
                  haptic.trigger("light");
                  router.push("/");
                }}
              >
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
            {project.isPrivate && !isUnlocked ? (
              <Flex direction="column" gap="m">
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  className="lh"
                >
                  <b>This project is password protected.</b>
                </Text>
                <Input
                  id="password"
                  value={passwordInput}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPasswordInput(e.target.value);
                    setError(false);
                  }}
                  placeholder="Enter password (PF-xxxx-xxxx)"
                  height="s"
                  error={error}
                  errorMessage={error ? "Incorrect password" : ""}
                  hasPrefix={
                    <Flex center fill>
                      <Text onBackground="neutral-medium">
                        <KeyIcon size={18} weight="light" />
                      </Text>
                    </Flex>
                  }
                />
                <Button variant="primary" size="m" onClick={handleCheck}>
                  <Text variant="code-default-s">
                    <Row vertical="center" gap="4">
                      <ArrowRightIcon size={18} weight="light" /> CHECK
                    </Row>
                  </Text>
                </Button>
              </Flex>
            ) : (
              <>
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak" //!medium
                  className="lh"
                >
                  <b>{project.description}</b>
                </Text>
                <ProjectContent data={project.data as any} />
              </>
            )}
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
