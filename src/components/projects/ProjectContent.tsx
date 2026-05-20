import {
  Flex,
  Text,
  List,
  ListItem,
  Media,
  Carousel,
} from "@once-ui-system/core";

export interface ProjectData {
  sections?: Record<string, string[]>;
  media?: { src: string; alt?: string; caption?: string }[];
}

export function ProjectContent({ data }: { data: ProjectData }) {
  if (!data) return null;

  const validMediaItems = data.media?.filter((item) => item.src) || [];

  return (
    <Flex direction="column" gap="l">
      {/* Render Text Sections */}
      {data.sections &&
        Object.entries(data.sections).map(([heading, items]) => (
          <Flex key={heading} direction="column" gap="s">
            <Text variant="heading-default-xl" onBackground="neutral-strong">
              <b>{heading}</b>
            </Text>
            {/* If the heading is "What I did", we might want a list, otherwise prose */}
            {heading.toLowerCase().includes("did") ? (
              <List as="ul" textVariant="body-default-m" gap="4">
                {(Array.isArray(items) ? items : [items]).map((item, index) => (
                  <ListItem key={index}>
                    <Text
                      variant="body-default-m"
                      onBackground="neutral-weak"
                      className="lh"
                    >
                      <b>{item}</b>
                    </Text>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Flex direction="column" gap="s">
                {(Array.isArray(items) ? items : [items]).map((item, index) => (
                  <Text
                    key={index}
                    variant="body-default-m"
                    onBackground="neutral-weak"
                    className="lh"
                  >
                    <b>{item}</b>
                  </Text>
                ))}
              </Flex>
            )}
          </Flex>
        ))}

      {/* Render Media */}
      {validMediaItems.length > 0 && (
        <Flex direction="column" gap="s">
          <Text variant="heading-default-xl" onBackground="neutral-strong">
            <b>Media</b>
          </Text>
          {validMediaItems.length === 1 ? (
            <Media
              src={validMediaItems[0].src}
              alt={validMediaItems[0].alt}
              radius="m"
              fillWidth
            />
          ) : (
            <Carousel
              items={validMediaItems.map((item) => ({
                slide: item.src,
                alt: item.alt,
              }))}
              controls={false}
              aspectRatio="16/9"
              indicator="line"
              play={{
                auto: true,
                interval: 5000,
                controls: true,
                progress: true,
              }}
            />
          )}
        </Flex>
      )}
    </Flex>
  );
}
