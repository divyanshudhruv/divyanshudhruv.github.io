import { Flex, Text, List, ListItem } from "@once-ui-system/core";

export function AwardsContent({ data }: { data: Record<string, string[]> }) {
  if (!data) return null;
  
  return (
    <Flex direction="column" gap="l">
      {Object.entries(data).map(([heading, items]) => (
        <Flex key={heading} direction="column" gap="s">
          <Text variant="heading-default-xl" onBackground="neutral-strong">
            <b>{heading}</b>
          </Text>
          <List as="ul" textVariant="body-default-m" gap="4">
            {items.map((item, index) => (
              <ListItem key={index}>
                <Text variant="body-default-m" onBackground="neutral-weak" className="lh">
                  <b>{item}</b>
                </Text>
              </ListItem>
            ))}
          </List>
        </Flex>
      ))}
    </Flex>
  );
}
