import { useFaviconUrl } from "@/hooks/useFaviconUrl";
import InlineElement from "./InlineElement";
import { ColorScheme, Flex, Media, Row, Tag, Text } from "@once-ui-system/core";
import { CountryCode } from "@rdnr/react-country-flags";
import Flag from "@rdnr/react-country-flags/Flag";

export function FaviconIcon({
  website,
  websiteUrl,
  hardcodeUrl,
}: {
  website: string;
  websiteUrl: string;
  hardcodeUrl?: string;
}) {
  const faviconUrl = useFaviconUrl(websiteUrl);

  return (
    <InlineElement>
      <Row center gap="4">
        {" "}
        {website || null}
        <Flex fit cursor="pointer">
          <Media
            src={hardcodeUrl ? hardcodeUrl : faviconUrl || ""}
            alt="Favicon"
            width={1.2}
            height={1.2}
            radius="xs-4"
            unoptimized
            onClick={() => window.open(websiteUrl, "_blank")}
          />
        </Flex>
      </Row>
    </InlineElement>
  );
}

export function FaviconIconSolo({ websiteUrl }: { websiteUrl: string }) {
  const faviconUrl = useFaviconUrl(websiteUrl);

  return (
    <InlineElement>
      <Row center gap="4">
        {" "}
        <Flex fit cursor="pointer">
          <Media
            src={faviconUrl || ""}
            alt="Favicon"
            width={1.2}
            height={1.2}
            radius="xs-4"
            unoptimized
            onClick={() => window.open(websiteUrl, "_blank")}
          />
        </Flex>
      </Row>
    </InlineElement>
  );
}

export function ImgIcon({
  imageSrc,
  href,
}: {
  imageSrc: string;
  href: string;
}) {
  return (
    <InlineElement>
      <Row center gap="4">
        <Flex fit cursor="pointer">
          <Media
            src={imageSrc}
            alt="Favicon"
            width={1.2}
            height={1.2}
            radius="xs-4"
            unoptimized
            onClick={() => window.open(href, "_blank")}
          />
        </Flex>
      </Row>
    </InlineElement>
  );
}

export function FlagIcon({
  country,
  countryCode,
}: {
  country: string;
  countryCode: CountryCode;
}) {
  return (
    <InlineElement>
      {" "}
      <Row center gap="4">
        {country}
        <Flag country={countryCode} width={18} fallback={<span>…</span>} />
      </Row>
    </InlineElement>
  );
}

export function TagIcon({
  text,
  variant,
}: {
  text: string;
  variant: ColorScheme;
}) {
  return (
    <InlineElement>
      <center>
        <Tag
          variant={variant}
          background="transparent"
          radius="full"
          size="s"
          borderWidth={"1"}
          cursor="pointer"
        >
          <Text variant="body-default-m" className="lh">
            <b>{text}</b>
          </Text>
        </Tag>
      </center>
    </InlineElement>
  );
}
