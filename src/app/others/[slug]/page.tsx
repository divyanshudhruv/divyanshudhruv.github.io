"use client";

import "./../../global.css";
import { Text, Button, Column, Arrow, Flex, Row } from "@once-ui-system/core";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useParams, useRouter } from "next/navigation";
import { otherNavigationItemJSON } from "@/data/data";
import { OtherItem } from "@/components/OtherItem";

import { StacksSkillsContent } from "@/components/others/StacksSkillsContent";
import { EducationContent } from "@/components/others/EducationContent";
import { AwardsContent } from "@/components/others/AwardsContent";
import { ExperiencesContent } from "@/components/others/ExperiencesContent";

const contentMap: Record<string, React.FC<any>> = {
  "stacks-skills": StacksSkillsContent,
  education: EducationContent,
  awards: AwardsContent,
  experiences: ExperiencesContent,
};

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

  const ContentComponent = contentMap[slug];

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

      <Flex
        direction="row"
        fillWidth
        fillHeight
        horizontal="between"
        m={{ direction: "column" }}
        gap="xl"
      >
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
            {/* Dynamically render the clean React component for this slug */}
            {ContentComponent ? <ContentComponent data={item.data} /> : null}
          </Flex>
        </Column>

        <Column
          fitWidth
          fillHeight
          horizontal="end"
          vertical="start"
          minWidth={28}
        >
          <Column fit gap="l">
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
        </Column>
      </Flex>
    </Flex>
  );
}
