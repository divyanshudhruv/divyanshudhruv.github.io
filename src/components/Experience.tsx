"use client";

import {
  Accordion,
  Avatar,
  Column,
  Flex,
  Kbd,
  Line,
  List,
  ListItem,
  Media,
  Pulse,
  Row,
  StatusIndicator,
  Tag,
  Text,
} from "@once-ui-system/core";
import type React from "react";

interface Posting {
  icon: React.ReactNode;
  jobTitle: string;
  employmentType: string;
  fromDate: string;
  toDate: string;
  responsibilities: string[];
  tags: string[];
}

interface ExperienceProps {
  companyLogo: string;
  companyText: string;
  posting: Posting;
  open?: boolean;
  current?: boolean;
  variant?: string;
  postingIndex: number;
  totalPostings: number;
}

export default function Experience({
  companyLogo,
  companyText,
  posting,
  open,
  variant = "primary",
  current,
  postingIndex,
  totalPostings,
}: ExperienceProps) {
  return (
    <Column fillWidth horizontal="start" vertical="start">
      {postingIndex === 0 && (
        <Row
          vertical="center"
          gap={0.75}
          fillWidth
          horizontal="start"
          padding={1}
          paddingBottom={0}
          marginBottom={0.5}
        >
          <Flex data-scaling="95" radius="full" fit border="neutral-medium">
            {/* <Avatar src={companyLogo} size="m" border="neutral-alpha-medium" /> */}
            <Media
              src={companyLogo}
              alt={companyText}
              width={1.8}
              height={1.8}
              overflow="hidden"
              unoptimized
              radius="full"
              maxWidth={1.8}
              maxHeight={1.8}
              minHeight={1.8}
              minWidth={1.8}
              center
              content="cover"
            />
          </Flex>
          <Text variant="code-default-m" onBackground="neutral-strong">
            <Row vertical="center" gap={1}>
              {companyText}
              {current ? <Pulse color="accent" size="m" /> : null}
            </Row>
          </Text>
        </Row>
      )}

      <Row
        key={postingIndex}
        fillWidth
        vertical="start"
        gap={0.25}
        borderBottom={
          postingIndex === totalPostings - 1 ? "neutral-alpha-weak" : undefined
        }
        paddingTop={0}
      >
        <Column fillHeight horizontal="center" paddingLeft={1}>
          <Flex
            radius="m"
            borderStyle="solid"
            width={2}
            minWidth={2}
            maxWidth={2}
            height={2}
            minHeight={2}
            maxHeight={2}
            border="neutral-weak"
            center
          >
            <Flex
              radius="s"
              center
              borderStyle="solid"
              border="neutral-alpha-weak"
              background="neutral-alpha-weak"
              width={1.5}
              height={1.5}
            >
              <Text onBackground="neutral-weak" variant="label-default-s">
                {posting.icon}
              </Text>
            </Flex>
          </Flex>
          {totalPostings > 1 && postingIndex < totalPostings - 1 && (
            <Line vert fillHeight />
          )}
        </Column>

        <Column gap={0.25} fillWidth padding={1} paddingTop={0} paddingLeft={0}>
          <Flex data-border="conservative" fillWidth>
            <Accordion
              open={open}
              padding={0}
              style={{ padding: "0.5rem !important" }}
              data-border="conservative"
              title={
                <Column gap={0.25}>
                  <Text variant="label-default-m" onBackground="neutral-strong">
                    {posting.jobTitle}
                  </Text>
                  <Text variant="code-default-xs" onBackground="neutral-weak">
                    {posting.employmentType} • {posting.fromDate} |{" "}
                    {posting.toDate}
                  </Text>
                </Column>
              }
            >
              <List
                as="ol"
                gap={0.25}
                marginTop={0.5}
                paddingRight={"xl"}
                paddingBottom={0.5}
              >
                <Text
                  variant="label-default-s"
                  onBackground="neutral-medium"
                  style={{ lineHeight: "1.7em" }}
                >
                  {posting.responsibilities.map(
                    (responsibility: string, idx: number) => (
                      <Row key={idx + "-responsibility"}>
                        {" "}
                        <Text onBackground="neutral-weak">•</Text>
                        <ListItem>{responsibility}</ListItem>
                      </Row>
                    ),
                  )}
                </Text>
              </List>
            </Accordion>
          </Flex>

          <Row gap={0.3} paddingX={0.35} wrap>
            {posting.tags.map((tag: string, idx: number) =>
              variant === "primary" ? (
                <Tag key={idx + "-tag"} size="s">
                  <Text
                    variant="code-default-xs"
                    onBackground="neutral-alpha-medium"
                  >
                    {tag}
                  </Text>
                </Tag>
              ) : (
                <Kbd key={idx + "-tag"}>
                  <Text
                    variant="code-default-xs"
                    onBackground="neutral-alpha-medium"
                  >
                    {tag}
                  </Text>
                </Kbd>
              ),
            )}
          </Row>
        </Column>
      </Row>
    </Column>
  );
}
