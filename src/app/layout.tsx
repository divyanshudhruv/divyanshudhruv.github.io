import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";
import "./global.css";

import classNames from "classnames";
import "./global.css";

import {
  Heading,
  Text,
  Button,
  Badge,
  Logo,
  Line,
  LetterFx,
  Row,
  IconButton,
  Kbd,
  Media,
  Arrow,
  ThemeSwitcher,
} from "@once-ui-system/core";

import {
  BrowserIcon,
  LinkedinLogoIcon,
  XLogoIcon,
  ReadCvLogoIcon,
  InstagramLogoIcon,
  GithubLogoIcon,
  LinktreeLogoIcon,
  BrowsersIcon,
  EnvelopeIcon,
  DownloadSimpleIcon,
  CopyrightIcon,
  ArrowCircleRightIcon,
} from "@phosphor-icons/react/dist/ssr";

import { baseURL, meta } from "@/resources/seo";
import { fonts, style, dataStyle } from "@/resources/once-ui.config";
import { Meta, Schema, Column, Flex, Mask, MatrixFx, ThemeInit } from "@once-ui-system/core";
import { Providers } from "@/components/Providers";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.home.title,
    description: meta.home.description,
    baseURL: baseURL,
    path: meta.home.path,
    canonical: meta.home.canonical,
    image: meta.home.image,
    robots: meta.home.robots,
    alternates: meta.home.alternates,
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <head>
        <ThemeInit
          config={{
            theme: style.theme,
            brand: style.brand,
            accent: style.accent,
            neutral: style.neutral,
            solid: style.solid,
            "solid-style": style.solidStyle,
            border: style.border,
            surface: style.surface,
            transition: style.transition,
            scaling: style.scaling,
            "viz-style": dataStyle.variant,
          }}
        />
      </head>
      <Providers>
        <Column as="body" background="page" fillWidth margin="0" padding="0">
          <Column fillWidth minHeight="100vh" center paddingX="xl" background="neutral-medium">
            <Column fill background="transparent">
              <Row
                fillWidth
                borderBottom="neutral-alpha-medium"
                borderStyle="dashed"
                paddingY={"l"}
                vertical="center"
                horizontal="between"
              >
                <Row fitWidth gap="8" vertical="center">
                  <IconButton variant="ghost" size="s">
                    <BrowsersIcon size={22} weight="light" />
                  </IconButton>
                  <IconButton variant="ghost" size="s">
                    <LinkedinLogoIcon size={22} weight="light" />
                  </IconButton>

                  <IconButton variant="ghost" size="s">
                    <InstagramLogoIcon size={22} weight="light" />
                  </IconButton>
                  <IconButton variant="ghost" size="s">
                    <GithubLogoIcon size={22} weight="light" />
                  </IconButton>
                  <IconButton variant="ghost" size="s">
                    <LinktreeLogoIcon size={22} weight="light" />
                  </IconButton>
                  <ThemeSwitcher data-scaling="90" style={{scale:"0.9"}} onBackground="neutral-weak"/>
                </Row>

                <Row gap="l" center>
                  <Kbd padding={"4"}>
                    <Row center gap="4">
                      <DownloadSimpleIcon size={18} weight="light" />
                      CV
                    </Row>
                  </Kbd>
                  <Flex center>
                    <Text onBackground="neutral-weak" variant="code-default-m">
                      <Row center gap="4">
                        <EnvelopeIcon size={22} weight="light" /> divyanshudhruv@proton.me
                      </Row>
                    </Text>
                  </Flex>
                </Row>
              </Row>
              {children}
              <Row
                fillWidth
                borderTop="neutral-alpha-medium"
                borderStyle="dashed"
                paddingY={"l"}
                vertical="center"
                horizontal="between"
              >
                <Text onBackground="neutral-weak" variant="code-default-m">
                  <Row center gap="4">
                    <CopyrightIcon size={22} weight="light" /> DIVYANSHU DHRUV XXXX
                  </Row>
                </Text>

                <Text onBackground="neutral-weak" variant="code-default-m">
                  <Row center gap="4">
                    <ArrowCircleRightIcon size={22} weight="light" /> ALL NAVIGATIONS
                  </Row>
                </Text>

                <Text onBackground="neutral-weak" variant="code-default-m">
                  <Row center gap="4">
                    SOURCE CODE
                  </Row>
                </Text>
              </Row>
            </Column>
          </Column>
        </Column>
      </Providers>
    </Flex>
  );
}
