import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import { Flex, Text } from "@once-ui-system/core";
import { Instrument_Serif } from "next/font/google";

const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

export default function ScrollTextFooter() {
  return (
    <Flex
      style={{ backgroundColor: "#f9f4eb" }}
      className={instrument_serif.className}
      paddingTop="m"
      paddingBottom="m"
    >
      <Text className={instrument_serif.className} style={{ color: "#031113" }}>
        <ScrollVelocity
          texts={["✷ Ehhhh, that's the end"]}
          velocity={30}
          scrollerStyle={{
            fontSize: "200px",
          }}
          parallaxStyle={{
            fontSize: "20px",
            color: "#031113",
            lineHeight: "2.3",
          }}
        />
      </Text>
    </Flex>
  );
}
