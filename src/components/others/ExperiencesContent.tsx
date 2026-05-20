import { Flex, Text, Timeline, Row, Tag } from "@once-ui-system/core";

export interface ExperienceItem {
  label: string;
  description: string;
  state?: string;
  date?: string;
  employment?: string;
}

export function ExperiencesContent({ data }: { data: ExperienceItem[] }) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <Flex direction="column" gap="l" fillWidth>
      <Text variant="heading-default-xl" onBackground="neutral-strong">
        <b>Experiences</b>
      </Text>
      <Timeline
        size="xs"
        items={data.map((item) => ({
          label: (
            <Row vertical="center" gap="8">
              <Text variant="label-default-xl" onBackground="neutral-strong">
                <b>{item.label}</b>
              </Text>
              {item.employment && (
                <Tag
                  background="transparent"
                  variant={
                    item.employment.toLowerCase().includes("cto") ||
                    item.employment.toLowerCase().includes("ceo") ||
                    item.employment.toLowerCase().includes("founder") ||
                    item.employment.toLowerCase().includes("co-founder") ||
                    item.employment.toLowerCase().includes("lead")
                      ? "danger"
                      : item.employment.toLowerCase().includes("trainee")
                        ? "success"
                        : item.employment.toLowerCase().includes("part")
                          ? "accent"
                          : "warning"
                  }
                  size="s"
                >
                  <Text variant="code-default-xs">
                    <b>{item.employment}</b>
                  </Text>
                </Tag>
              )}
            </Row>
          ),
          description: (
            <Text variant="body-default-s" onBackground="neutral-weak">
              <b>{item.description}</b>
            </Text>
          ),
          state: item.state === "completed" ? "default" : (item.state as any) || "active",
          children: item.date && (
            <Row
              fitWidth
              radius="full"
              paddingY="4"
              paddingX="8"
              border="neutral-alpha-medium"
              textVariant="label-default-xs"
              onBackground="neutral-weak"
              marginTop="8"
            >
              <b>{item.date}</b>
            </Row>
          ),
        }))}
      />
    </Flex>
  );
}
