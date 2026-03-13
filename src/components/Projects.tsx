import {
  Accordion,
  Avatar,
  Column,
  Flex,
  IconButton,
  Kbd,
  Media,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import Image from "next/image";

import { HiOutlineLink } from "react-icons/hi2";

type ProjectsProps = {
  postingIndex: number;
  projects: { tags: string[] };
  title: string; // e.g. "Refolio"
  role: string; // e.g. "Full-stack Developer"
  date: string; // e.g. "Jan, 2024"
  linkHref?: string; // e.g. "https://refolio.dev"
  logo: string;
  ongoing?: boolean;
};

export function Projects({
  postingIndex,
  projects,
  title,
  role,
  ongoing,
  date,
  logo,
  linkHref = "#",
}: ProjectsProps) {
  return (
    <Row
      key={postingIndex}
      fillWidth
      vertical="start"
      gap={0.25}
      borderBottom="neutral-alpha-weak"
      paddingTop={1}
    >
       <Flex data-scaling="95" radius="full" fit border="neutral-medium"marginLeft={1}>
                  {/* <Avatar src={companyLogo} size="m" border="neutral-alpha-medium" /> */}
                  <Media
                    src={logo}
                    alt={title}
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

      <Column gap={0.25} fillWidth padding={1} paddingTop={0} paddingLeft={0}>
        <Flex data-border="conservative" fillWidth>
          <Accordion
            padding={0}
            style={{ padding: "0.5rem !important" }}
            data-border="conservative"
            title={
              <Row fillWidth vertical="center" horizontal="between" paddingRight={0.25}>
                <Column gap={0.25}>
                  <Text variant="label-default-m" onBackground="neutral-strong">
                    {title}
                  </Text>
                  <Text variant="code-default-xs" onBackground="neutral-weak">
                    <SmartLink href="#">{role}</SmartLink> • {date}
                  </Text>
                </Column>
                <IconButton variant="tertiary" href={linkHref}>
                  <Text onBackground="neutral-medium" variant="label-default-m">
                    <HiOutlineLink />
                  </Text>
                </IconButton>
              </Row>
            }
          >
            <></>
          </Accordion>
        </Flex>

        <Row gap={0.3} paddingX={0.35} wrap>
          {ongoing ? (
            <Kbd>
              <Text variant="code-default-xs" onBackground="neutral-alpha-medium">
                ongoing
              </Text>
            </Kbd>
          ) : undefined}
          {projects.tags.map((tag, idx) => (
            <Tag key={idx + "-tag"} size="s" variant="neutral">
              <Text variant="code-default-xs" onBackground="neutral-alpha-medium">
                {tag}
              </Text>
            </Tag>
          ))}
        </Row>
      </Column>
    </Row>
  );
}
