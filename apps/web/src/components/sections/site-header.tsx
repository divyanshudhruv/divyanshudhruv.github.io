import { Column, Flex, StatusIndicator, Text } from "@once-ui-system/core";
import { DotGothic16 } from "next/font/google";
import { getDate } from "@/lib/get-date";

const bitcountFont = DotGothic16({
  subsets: ["latin"],
  weight: "400",
});

export default function SiteHeader() {
  return (
    <Flex vertical="start" fillWidth direction="column" fitHeight>
      <Column vertical="center" horizontal="start">
        <Flex
          className={bitcountFont.className}
          direction="row"
          gap={1}
          vertical="center"
          horizontal="center"
        >
          <Text variant="label-default-l" className="text-muted-foreground">
            {getDate()}
          </Text>
          <Flex fit overflow="hidden" className="roudned-full">
            <StatusIndicator
              color="orange"
              className="rounded-full"
              size="m"
            />
          </Flex>
        </Flex>
        <Flex className={bitcountFont.className}>
          <Text variant="display-default-s" className="text-foreground">
            Today
          </Text>
        </Flex>
      </Column>
      <Flex data-theme="light" />
    </Flex>
  );
}
