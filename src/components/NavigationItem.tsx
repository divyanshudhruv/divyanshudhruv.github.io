"use client"
import { Column, Flex, Media, Row, Text } from "@once-ui-system/core";
import { useRouter } from "next/navigation";

export const NavigationItem = ({
  lastUpdated,
  abbreviation,
  isPrivate,
  imageSrc,
  title,
  id,
}: {
  lastUpdated: string;
  abbreviation: string;
  isPrivate: boolean;
  imageSrc: string;
  title: string;
  id: string;
}) => {
  const router = useRouter();
  return (
    <Flex
      direction="row"
      gap="12"
      fillWidth
      cursor="pointer"
      background="transparent"
      radius="s"
      padding="0"
      border="transparent"
      className="nav-item-container"
      onClick={() => router.push(`/navigation/${id}`)}
    >
      <Media
        src={imageSrc}
        unoptimized
        alt="Profile"
        width={3}
        height={3}
        maxWidth={3}
        minWidth={3}
        maxHeight={3}
        minHeight={3}
        radius="s"
      />
      <Column>
        <Text variant="body-default-m" className="nav-item-title">
          <b>{title}</b>
        </Text>
        <Row fill gap={"4"} vertical="center">
          <Text onBackground="neutral-weak" variant="code-default-s">
            <b>{lastUpdated}</b>
          </Text>
          <Text onBackground="neutral-weak" variant="code-default-m">
            <b>•</b>
          </Text>
          <Text onBackground="neutral-weak" variant="code-default-s">
            <b>{abbreviation}</b>
          </Text>
        </Row>
      </Column>
    </Flex>
  );
};
