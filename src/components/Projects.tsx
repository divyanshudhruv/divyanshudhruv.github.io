import {
  Row,
  Column,
  Flex,
  Accordion,
  Tag,
  Text,
  SmartLink,
  Avatar,
} from "@once-ui-system/core";
import Image from "next/image";

type ProjectsProps = {
  postingIndex: number;
  projects: { tags: string[] };
  title: string; // e.g. "Refolio"
  role: string; // e.g. "Full-stack Developer"
  date: string; // e.g. "Jan, 2024"
  linkHref?: string; // e.g. "https://refolio.dev"
  logo: string;
};

export function Projects({
  postingIndex,
  projects,
  title,
  role,
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
      <Column fillHeight horizontal="center" paddingLeft={1}>
        <Avatar src={logo} padding={0.05} border="neutral-alpha-weak" />
      </Column>

      <Column gap={0.25} fillWidth padding={1} paddingTop={0} paddingLeft={0}>
        <Flex data-border="conservative" fillWidth>
          <Accordion
            padding={0}
            style={{ padding: "0.5rem !important" }}
            data-border="conservative"
            title={
              <Column gap={0.25}>
                <Text variant="label-default-m" onBackground="neutral-strong">
                  {title}
                </Text>
                <Text variant="code-default-xs" onBackground="neutral-weak">
                  <SmartLink href={linkHref}>{role}</SmartLink> • {date}
                </Text>
              </Column>
            }
          >
            <></>
          </Accordion>
        </Flex>

        <Row gap={0.3} paddingX={0.35} wrap>
          {projects.tags.map((tag, idx) => (
            <Tag key={idx} size="s">
              <Text
                variant="code-default-xs"
                onBackground="neutral-alpha-medium"
              >
                {tag}
              </Text>
            </Tag>
          ))}
        </Row>
      </Column>
    </Row>
  );
}
