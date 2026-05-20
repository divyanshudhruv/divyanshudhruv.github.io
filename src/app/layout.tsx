import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";
import "./global.css";

import classNames from "classnames";
import "./global.css";

import {
  Text,
  Line,
  Row,
  IconButton,
  Kbd,
  ThemeSwitcher,
  SmartLink,
} from "@once-ui-system/core";

import {
  LinkedinLogoIcon,
  MetaLogoIcon,
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
import { Meta, Schema, Column, Flex, ThemeInit } from "@once-ui-system/core";
import { Providers } from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";
import ViewTracker from "@/components/ViewTracker";

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
        <script
          src="https://page-views-api.ratneshc.com/script"
          data-site={baseURL}
          data-path={meta.home.path}
          defer
        ></script>

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
          <Column
            fillWidth
            style={{ minHeight: "100svh" }}
            center
            paddingX="xl"
            background="neutral-medium"
          >
            <Column fill background="transparent">
              <Row
                fillWidth
                borderBottom="neutral-alpha-medium"
                borderStyle="dashed"
                paddingY={"l"}
                vertical="center"
                horizontal="between"
                className="navbar"
              >
                <Row fitWidth vertical="center" className="navbar-left" gap="8">
                  <Flex center gap="8" fit>
                    <IconButton
                      variant="ghost"
                      size="s"
                      href="https://codeforces.com"
                      target="_blank"
                    >
                      <BrowsersIcon size={22} weight="light" />
                    </IconButton>
                    <IconButton
                      variant="ghost"
                      size="s"
                      href="https://linkedin.com/in/divyanshudhruv"
                      target="_blank"
                    >
                      <LinkedinLogoIcon size={22} weight="light" />
                    </IconButton>
                    <IconButton
                      variant="ghost"
                      size="s"
                      href="https://instagram.com"
                      target="_blank"
                    >
                      <MetaLogoIcon size={22} weight="light" />
                    </IconButton>
                    <IconButton
                      variant="ghost"
                      size="s"
                      href="https://github.com/divyanshudhruv"
                      target="_blank"
                    >
                      <GithubLogoIcon size={22} weight="light" />
                    </IconButton>
                    <IconButton
                      variant="ghost"
                      size="s"
                      href="https://linktr.ee"
                      target="_blank"
                    >
                      <LinktreeLogoIcon size={22} weight="light" />
                    </IconButton>
                  </Flex>{" "}
                  <Line vert height="16" width={0.1} onSolid="neutral-strong" />
                  <Flex center>
                    <ThemeSwitcher
                      data-scaling="90"
                      style={{ scale: "0.9" }}
                      onBackground="neutral-weak"
                    />
                  </Flex>
                </Row>

                <Row gap="m" center className="navbar-right">
                  <Kbd padding={"4"} cursor="pointer">
                    <Row center gap="4">
                      <DownloadSimpleIcon size={18} weight="light" />
                      CV
                    </Row>
                  </Kbd>
                  <Flex center>
                    <Text onBackground="neutral-weak" variant="code-default-m">
                      <Row center gap="4">
                        <EnvelopeIcon size={22} weight="light" />{" "}
                        <Flex s={{ hide: true }}>
                          {" "}
                          divyanshudhruv@proton.me
                        </Flex>
                      </Row>
                    </Text>
                  </Flex>
                </Row>
              </Row>
              <Analytics />
              {children}
              <Row
                fillWidth
                borderTop="neutral-alpha-medium"
                borderStyle="dashed"
                paddingY={"l"}
                vertical="center"
                horizontal="between"
                className="footer"
                s={{ direction: "column", horizontal: "start" }}
              >
                <Text
                  onBackground="neutral-weak"
                  variant="code-default-m"
                  className="wavy-underline"
                >
                  <Row center gap="4">
                    <CopyrightIcon size={22} weight="light" /> DIVYANSHU DHRUV{" "}
                    {new Date().getFullYear()}
                  </Row>
                </Text>

                <Text onBackground="neutral-weak" variant="code-default-m">
                  <Row center gap="4" cursor="pointer" m={{ hide: true }}>
                    <ArrowCircleRightIcon size={22} weight="light" /> ALL
                    NAVIGATIONS
                  </Row>
                </Text>

                <Text onBackground="neutral-weak" variant="code-default-m">
                  <Row center gap="4" cursor="pointer">
                    <ViewTracker />
                  </Row>
                </Text>

                <SmartLink href="https://github.com/divyanshudhruv">
                  <Text variant="code-default-m">
                    <Row center gap="4" cursor="pointer">
                      GITHUB
                    </Row>
                  </Text>
                </SmartLink>
              </Row>
            </Column>
          </Column>
        </Column>
      </Providers>
    </Flex>
  );
}
