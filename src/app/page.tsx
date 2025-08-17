"use client";

import React, { useState } from "react";
import { Fraunces, Inter_Tight } from "next/font/google";
import {
  Button,
  Column,
  Fade,
  Flex,
  Grid,
  IconButton,
  LogoCloud,
  Media,
  NavIcon,
  Particle,
  Row,
  Scroller,
  SegmentedControl,
  Text,
} from "@once-ui-system/core";
import { MinimalCard, MinimalCardImage } from "@/components/ui/minimal-card";
import NeumorphButton from "@/components/ui/neumorph-button";
import LogosWorkedWith from "@/components/logos-worked-with";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Meteors } from "@/components/magicui/meteors";
import { ArrowUp, ArrowUpRight, Star } from "lucide-react";

const fraunces = Fraunces({
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter_tight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900", "600", "500", "300", "200", "100"],
});

const colors = {
  primary: "#FF5825",
  secondary: "#00B173",
  accent: "#f5a623",
  background_light: "#ffffff",
  background_dark: "#262626",
  foreground: "#EDEDED",
  text_link: "#2652FF",
  text: "#0F0F0F",
  text_gray: "#666666",
  text_gray_light: "#999999",
  text_lightest: "#fafafa",
};

const skills = [
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="HTML"
      />
    ),
    label: "HTML",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="CSS"
      />
    ),
    label: "CSS",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="JavaScript"
      />
    ),
    label: "JavaScript",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="TypeScript"
      />
    ),
    label: "TypeScript",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="React"
      />
    ),
    label: "React",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Python"
      />
    ),
    label: "Python",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        alt="Firebase"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Firebase"
      />
    ),
    label: "Firebase",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Node.js"
      />
    ),
    label: "Node.js",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Git"
      />
    ),
    label: "Git",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Figma"
      />
    ),
    label: "Figma",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        alt="C#"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="C#"
      />
    ),
    label: "C#",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
        alt="Angular"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Angular"
      />
    ),
    label: "Angular",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="Java"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Java"
      />
    ),
    label: "Java",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        alt="PHP"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="PHP"
      />
    ),
    label: "PHP",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
        alt="Ruby"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Ruby"
      />
    ),
    label: "Ruby",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
        alt="Go"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Go"
      />
    ),
    label: "Go",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg"
        alt="Rust"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Rust"
      />
    ),
    label: "Rust",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="Docker"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Docker"
      />
    ),
    label: "Docker",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
        alt="Kubernetes"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Kubernetes"
      />
    ),
    label: "Kubernetes",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="MongoDB"
      />
    ),
    label: "MongoDB",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        alt="MySQL"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="MySQL"
      />
    ),
    label: "MySQL",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        alt="PostgreSQL"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="PostgreSQL"
      />
    ),
    label: "PostgreSQL",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
        alt="GraphQL"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="GraphQL"
      />
    ),
    label: "GraphQL",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        alt="Next.js"
        width={17}
        height={17}
        style={{ borderRadius: "4px", background: "#fff" }}
        aria-label="Next.js"
      />
    ),
    label: "Next.js",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        alt="Vue.js"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Vue.js"
      />
    ),
    label: "Vue.js",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        alt="Redux"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Redux"
      />
    ),
    label: "Redux",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
        alt="Sass"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Sass"
      />
    ),
    label: "Sass",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
        alt="Webpack"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Webpack"
      />
    ),
    label: "Webpack",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
        alt="npm"
        width={17}
        height={17}
        style={{ borderRadius: "4px", background: "#fff" }}
        aria-label="npm"
      />
    ),
    label: "npm",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
        alt="Yarn"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Yarn"
      />
    ),
    label: "Yarn",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
        alt="GitLab"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="GitLab"
      />
    ),
    label: "GitLab",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
        width={17}
        height={17}
        style={{ borderRadius: "4px", background: "#fff" }}
        aria-label="GitHub"
      />
    ),
    label: "GitHub",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        alt="VS Code"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="VS Code"
      />
    ),
    label: "VS Code",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        alt="Linux"
        width={17}
        height={17}
        style={{ borderRadius: "4px" }}
        aria-label="Linux"
      />
    ),
    label: "Linux",
  },
];

const cards = [
  {
    src: "https://divyanshudhruv.is-a.dev/kanba.png",
    alt: "Kanba Project Screenshot",
    href: "https://kanba.co",
  },
  {
    src: "https://divyanshudhruv.is-a.dev/refolio.png",
    alt: "Refolio Project Screenshot",
    href: "https://re-folio.vercel.app",
  },
  {
    src: "https://divyanshudhruv.is-a.dev/hello-link.png",
    alt: "Hello Link Project Screenshot",
    href: "https://hellolink.vercel.app",
  },
  {
    src: "https://framerusercontent.com/images/oevZjkSNUHoeeER1iv27eFxaCk.png?scale-down-to=512",
    alt: "Framer Project Screenshot",
    href: "https://sourceful-space.vercel.app",
  },
];

type MinimalAboutCardProps = {
  src: string;
  alt: string;
};

function MinimalAboutCard({ src, alt }: MinimalAboutCardProps) {
  return (
    <MinimalCard
      style={{
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid #DDD",
      }}
    >
      <img
        src={src}
        alt={alt}
        title={alt}
        style={{
          minHeight: "100%",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: "18px",
          overflow: "hidden",
          opacity: 0.9,
        }}
      />
    </MinimalCard>
  );
}

function MinimalCardDemo() {
  return (
    <>
      {cards.map((card) => {
        // Add refs and state for cursor position and visibility
        const cursorRef = React.useRef<HTMLDivElement>(null);
        const wrapperRef = React.useRef<HTMLDivElement>(null);
        const [visible, setVisible] = React.useState(false);

        // Track initial pointer position on enter
        const initialPointer = React.useRef<{ x: number; y: number } | null>(
          null
        );

        // Declare cursor position variables in the component scope
        let targetX = 0,
          targetY = 0;
        let lastX = 0,
          lastY = 0;

        React.useEffect(() => {
          let animationFrame: number;

          const handlePointerMove = (e: PointerEvent) => {
            if (wrapperRef.current) {
              const rect = wrapperRef.current.getBoundingClientRect();
              targetX = e.clientX - rect.left;
              targetY = e.clientY - rect.top;
            }
          };

          const animate = () => {
            lastX += (targetX - lastX) * 0.2;
            lastY += (targetY - lastY) * 0.2;
            if (cursorRef.current) {
              cursorRef.current.style.left = `${lastX}px`;
              cursorRef.current.style.top = `${lastY}px`;
              cursorRef.current.style.opacity = visible ? "1" : "0";
            }
            animationFrame = requestAnimationFrame(animate);
          };

          if (wrapperRef.current) {
            wrapperRef.current.addEventListener(
              "pointermove",
              handlePointerMove
            );
          }
          animate();

          return () => {
            if (wrapperRef.current) {
              wrapperRef.current.removeEventListener(
                "pointermove",
                handlePointerMove
              );
            }
            cancelAnimationFrame(animationFrame);
          };
        }, [visible]);

        const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
          setVisible(true);
          // if (wrapperRef.current) {
          //   wrapperRef.current.style.cursor = "none";
          // }
          if (wrapperRef.current) {
            const rect = wrapperRef.current.getBoundingClientRect();
            initialPointer.current = {
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            };
          }
          // Set initial position instantly
          if (initialPointer.current) {
            // Set both target and last position so it spawns at entry
            targetX = initialPointer.current.x;
            targetY = initialPointer.current.y;
            lastX = initialPointer.current.x;
            lastY = initialPointer.current.y;
            if (cursorRef.current) {
              cursorRef.current.style.left = `${lastX}px`;
              cursorRef.current.style.top = `${lastY}px`;
            }
          }
        };

        const handleMouseLeave = () => {
          setVisible(false);
          if (wrapperRef.current) {
            wrapperRef.current.style.cursor = "";
          }
        };

        return (
          <div
            key={card.src}
            ref={wrapperRef}
            style={{ position: "relative", display: "inline-block" }}
            className="minimal-card-hover-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setTimeout(() => {
                window.open(card.href, "_blank");
              }, 500);
            }}
          >
            <MinimalCard
              style={{
                transition: "transform 0.2s cubic-bezier(.4,0,.2,1)",
                cursor: "pointer",
              }}
              className="minimal-card-hover"
            >
              {/* Use a ref for smooth transform animation on hover */}
              {(() => {
                const imgRef = React.useRef<HTMLImageElement>(null);
                return (
                  <MinimalCardImage
                    ref={imgRef}
                    className="minimal-card-image"
                    src={card.src}
                    alt={card.alt}
                    title={card.alt}
                    onMouseEnter={() => {
                      if (imgRef.current) {
                        imgRef.current.style.transform = "scale(0.95)";
                      }
                    }}
                    onMouseLeave={() => {
                      if (imgRef.current) {
                        imgRef.current.style.transform = "scale(1)";
                      }
                    }}
                  />
                );
              })()}
            </MinimalCard>
            {/* <div
              ref={cursorRef}
              className="custom-cursor"
              style={{
                position: "absolute",
                pointerEvents: "none",
                zIndex: 9999,
                width: "70x",
                height: "50px",
                borderRadius: "14px",
                background: "#222222aa",
                left: 0,
                top: 0,
                padding: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
                opacity: 0,
                transition: "opacity 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#fff",
                  fontFamily: "inherit",
                  fontWeight: 400,
                  fontSize: "0.9em",
                  letterSpacing: "0.01em",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  userSelect: "none",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px" }}
                  aria-hidden="true"
                >
                  <path
                    d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Explore
              </span>
            </div> */}
          </div>
        );
      })}
    </>
  );
}

type StarRatingProps = {
  stars: number;
};

function StarRating({ stars }: StarRatingProps) {
  return (
    <Row gap="8" center>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={16}
          fill={index < stars ? colors.background_dark : "none"}
          color={index < stars ? colors.background_dark : "none"}
          aria-label={index < stars ? "Filled star" : "Empty star"}
        />
      ))}
    </Row>
  );
}

type TestimonialProps = {
  avatarSrc: string;
  leftLogoSrc: string;
  rightLogoSrc: string;
  stars: number;
  quote: string;
  name: string;
  title: string;
  gridColor?: string;
};

function Testimonial({
  avatarSrc,
  leftLogoSrc,
  rightLogoSrc,
  stars,
  quote,
  name,
  title,
  gridColor = colors.text_gray,
}: TestimonialProps) {
  return (
    <>
      <Column center gap="16">
        <Row center gap="8">
          <Media
            src={leftLogoSrc}
            unoptimized
            minWidth={4}
            minHeight={4}
            style={{ filter: "grayscale(100%)", opacity: 0.4 }}
            alt="Left Logo"
            title="Left Logo"
          />
          <Flex
            padding="s"
            width={3.4}
            height={3.4}
            minWidth={3.4}
            minHeight={3.4}
            center
            radius="l"
            border="neutral-medium"
            overflow="hidden"
          >
            <Media
              src={avatarSrc}
              unoptimized
              fillWidth
              fillHeight
              width={3}
              height={3}
              minWidth={3}
              radius="l"
              alt="Avatar"
              title="Avatar"
            />
          </Flex>
          <Media
            src={rightLogoSrc}
            unoptimized
            minWidth={4}
            minHeight={4}
            style={{ filter: "grayscale(100%)", opacity: 0.4 }}
            alt="Right Logo"
            title="Right Logo"
          />
        </Row>
        <Row>
          <StarRating stars={stars} />
        </Row>
      </Column>
      <Column gap="8" center>
        <Text
          style={{
            fontFamily: inter_tight.style.fontFamily,
            fontSize: "1.5em",
            color: colors.background_dark,
            padding: "0.5em 1em",
            borderRadius: "8px",
            lineHeight: 1.4,
            textAlign: "center",
            maxWidth: "575px",
          }}
        >
          {quote}
        </Text>
        <Column center gap="1" paddingY="s">
          <Text
            style={{
              fontFamily: inter_tight.style.fontFamily,
              fontSize: "1.15em",
              color: colors.background_dark,
              textAlign: "center",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: inter_tight.style.fontFamily,
              fontSize: "0.9em",
              color: colors.text_gray_light,
              textAlign: "center",
            }}
          >
            {title}
          </Text>
        </Column>
      </Column>
    </>
  );
}

type SkillBadgeProps = {
  icon?: React.ReactNode;
  label: string;
};

function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <Flex
      padding="xs"
      fitWidth
      fitHeight
      minHeight={2.3}
      maxHeight={2.3}
      border="neutral-strong"
      borderStyle="dashed"
      center
      radius="s"
      style={{ minWidth: "fit-content" }}
      aria-label={label}
      title={label}
    >
      <Row center fillHeight fitWidth gap="8">
        <span style={{ filter: "grayscale(100%)", opacity: 0.8 }}>{icon}</span>
        <Text
          variant="label-default-xl"
          style={{
            color: colors.text_gray,
            fontFamily: inter_tight.style.fontFamily,
          }}
        >
          {label}
        </Text>
      </Row>
    </Flex>
  );
}

type StackCardProps = {
  logoSrc: string;
  name: string;
  description: string;
  link: string;
};

function StackCard({ logoSrc, name, description, link }: StackCardProps) {
  return (
    <Row
      fillWidth
      fitHeight
      padding="2"
      radius="s-4"
      maxWidth={25}
      className="stack-card"
      style={{
        transition:
          "transform 0.18s cubic-bezier(.4,0,.2,1), background 0.18s cubic-bezier(.4,0,.2,1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1.025)";
        (e.currentTarget as HTMLDivElement).style.background = "#00000010";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLDivElement).style.background = "";
      }}
    >
      <Row
        fillWidth
        gap="20"
        radius="m"
        vertical="center"
        border="neutral-medium"
        borderStyle="dashed"
        padding="12"
        style={{ position: "relative" }}
      >
        <Media
          src={logoSrc}
          width={2.5}
          height={2.5}
          minWidth={2.5}
          minHeight={2.5}
          radius="s"
          style={{ background: "#fff" }}
          unoptimized
          alt={name}
          title={name}
        />
        <Column gap="1" vertical="center">
          <Text
            style={{
              fontFamily: inter_tight.style.fontFamily,
              fontSize: "1em",
              color: colors.text,
              display: "inline-block",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: inter_tight.style.fontFamily,
              fontSize: "0.8em",
              color: colors.text_gray,
              display: "inline-block",
              minWidth: "fit-content",
            }}
          >
            {description}
          </Text>
        </Column>
        <IconButton
          variant="secondary"
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          aria-label={`Open ${name} website`}
          title={`Open ${name} website`}
          onClick={() => window.open(link, "_blank")}
        >
          <ArrowUpRight size={15} color={colors.text_gray} />
        </IconButton>
      </Row>
    </Row>
  );
}

function FlickeringGridDemo({ color }: { color: string }) {
  return (
    <Row
      fillWidth
      maxHeight={13}
      height={13}
      fitHeight
      overflow="hidden"
      padding="0"
    >
      <Fade to="top">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          color={color}
          maxOpacity={0.8}
          flickerChance={0.1}
        />
      </Fade>
    </Row>
  );
}

export default function Home() {
  const [githubButtonClicked, setGithubButtonClicked] = useState(false);

  return (
    <>
      <Flex
        fillWidth
        fitHeight
        padding="xs"
        style={{
          backgroundColor: colors.background_dark,
          height: "100vh",
        }}
        gap="4"
        direction="column"
      >
        {/* Hero */}
        <Flex
          fillWidth
          fitHeight
          radius="xl-8"
          overflow="hidden"
          center
          style={{
            backgroundColor: colors.background_light,
            minHeight: "fit-content",
          }}
        >
          <Flex
            fillWidth
            fillHeight
            style={{ width: "100vw", height: "100vh" }}
            position="absolute"
          >
            <Meteors angle={60} />
          </Flex>
          <Column fillWidth fitHeight horizontal="center" vertical="start">
            {/* Nav */}
            <Row
              horizontal="between"
              fillWidth
              fitHeight
              padding="32"
              paddingX="64"
              vertical="center"
              style={{
                position: "fixed",
                top: "20px",
                zIndex: "999999",
              }}
              className="nav-container"
            >
              <Flex
                vertical="center"
                gap="12"
                fitWidth
                horizontal="center"
                height={3.2}
                radius="m"
                background="neutral-medium"
                overflow="hidden"
                paddingRight="16"
              >
                <Media
                  fillHeight
                  fillWidth
                  height={3.2}
                  width={3.2}
                  src="/me.webp"
                  unoptimized
                  radius="m"
                  border="neutral-strong"
                  alt="Vadodara Location"
                  title="Vadodara Location"
                />
                <Text
                  onBackground="neutral-medium"
                  variant="body-default-l"
                  style={{ fontFamily: inter_tight.style.fontFamily }}
                >
                  Vadodara, India{" "}
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.9em",
                      marginLeft: "3px",
                    }}
                    aria-label="India Flag"
                  >
                    🇮🇳
                  </span>
                </Text>
              </Flex>
              <Flex
                fitWidth
                height={3.2}
                gap="20"
                className="nav-links-container"
              >
                <Row
                  fitWidth
                  fillHeight
                  border="neutral-medium"
                  center
                  vertical="center"
                  padding="s"
                  radius="m"
                  style={{
                    backgroundColor: colors.background_light,
                  }}
                  className="nav-links"
                >
                  <Button
                    variant="tertiary"
                    weight="default"
                    className="nav-links"
                  >
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1.1em",
                      }}
                      onBackground="neutral-weak"
                    >
                      Resume
                    </Text>
                  </Button>
                  <Button
                    variant="tertiary"
                    weight="default"
                    className="nav-links"
                  >
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1.1em",
                      }}
                      onBackground="neutral-weak"
                    >
                      About
                    </Text>
                  </Button>
                  <Button
                    variant="tertiary"
                    weight="default"
                    className="nav-links"
                  >
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1.1em",
                      }}
                      onBackground="neutral-weak"
                    >
                      Project
                    </Text>
                  </Button>
                  <Button
                    variant="tertiary"
                    weight="default"
                    className="nav-links"
                  >
                    <Text
                      style={{
                        fontFamily: inter_tight.style.fontFamily,
                        fontSize: "1.1em",
                      }}
                      onBackground="neutral-weak"
                    >
                      Experience
                    </Text>
                  </Button>
                </Row>
                <Button
                  size="l"
                  weight="default"
                  style={{
                    background: "#222",
                    color: "#fff",
                    fontFamily: inter_tight.style.fontFamily,
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#0a0a0a";

                    (e.currentTarget as HTMLButtonElement).style.transition =
                      "background 0.18s cubic-bezier(.4,0,.2,1), color 0.18s cubic-bezier(.4,0,.2,1)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#222";
                    (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  }}
                >
                  <Text
                    style={{
                      fontFamily: inter_tight.style.fontFamily,
                      color: colors.text_lightest,
                      fontSize: "1.1em",
                    }}
                    variant="body-default-l"
                  >
                    Email me
                  </Text>
                </Button>
              </Flex>
            </Row>
            {/* Hero */}
            <Flex center fillWidth fitHeight paddingTop="xl" direction="column">
              <Column fillWidth fitHeight center paddingTop="xl" gap="l">
                <Flex height={0.25} className="hero-flex-top"></Flex>
                <Text
                  style={{
                    fontFamily: fraunces.style.fontFamily,
                    fontSize: "3em",
                    color: colors.text,
                    fontWeight: "300",
                    lineHeight: "1.2",
                    maxWidth: "1000px",
                  }}
                  align="center"
                  className="hero-text"
                >
                  Hello, I'm Divyanshu. Delighted to have you explore my
                  portfolio. I craft awesome applications for{" "}
                  <span style={{ color: colors.text_gray }}>
                    open source community
                  </span>
                  .
                </Text>
                <NeumorphButton
                  loading={githubButtonClicked}
                  intent="danger"
                  size="large"
                  style={{
                    paddingInline: "24px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setGithubButtonClicked(true);
                    setTimeout(() => {
                      window.open(
                        "https://github.com/divyanshudhruv",
                        "_blank"
                      );
                      setGithubButtonClicked(false);
                    }, 800);
                  }}
                >
                  <Text
                    variant="body-default-xl"
                    style={{
                      fontFamily: inter_tight.style.fontFamily,
                      letterSpacing: "0.6px",
                    }}
                  >
                    Visit my Github
                  </Text>
                </NeumorphButton>
                {/* Worked with */}
                <Column
                  center
                  fillWidth
                  fitHeight
                  gap="12"
                  paddingTop="m"
                  overflow="hidden"
                >
                  <Text
                    variant="body-default-m"
                    style={{
                      fontFamily: inter_tight.style.fontFamily,
                      letterSpacing: "0.6px",
                    }}
                    onBackground="neutral-weak"
                  >
                    I've worked with
                  </Text>
                  <Flex
                    height={0.05}
                    className="logos-worked-with-separator"
                  ></Flex>
                  <LogosWorkedWith />
                  <Flex style={{ width: "100vw" }}>
                    <FlickeringGridDemo color={colors.primary} />
                  </Flex>
                </Column>
              </Column>
            </Flex>
          </Column>
        </Flex>
        {/* Projects */}
        <Flex
          fillWidth
          fitHeight
          radius="xl-8"
          overflow="hidden"
          direction="column"
          center
          paddingTop="xl"
          gap="32"
          paddingX="l"
          style={{
            backgroundColor: colors.background_light,
            minHeight: "fit-content",
          }}
        >
          <Row
            fillWidth
            vertical="center"
            horizontal="between"
            gap="16"
            className="project-row-filter"
          >
            <Text
              style={{
                fontFamily: fraunces.style.fontFamily,
                fontSize: "2.5em",
                color: colors.text,
                fontWeight: "300",
                lineHeight: "1.2",
                maxWidth: "1000px",
              }}
            >
              Featured Projects
            </Text>
            <Row center>
              <SegmentedControl
                fillWidth={false}
                textSize="xl"
                selected="grid"
                buttons={[
                  { value: "grid", label: "Grid" },
                  { value: "list", label: "List" },
                ]}
                onToggle={(value) => console.log(value)}
              />
            </Row>
          </Row>
          <Flex height={1}></Flex>
          <div className="project-grid">
            <MinimalCardDemo />
          </div>
          {/* Four accent squares at each corner */}
          <Column
            fillWidth
            fillHeight
            style={{ position: "relative" }}
            center
            paddingTop="xl"
            paddingBottom="0"
          >
            <Testimonial
              avatarSrc="https://tse1.mm.bing.net/th/id/OIP.rYV8A45CjNexeH1ecP91fAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              leftLogoSrc="https://framerusercontent.com/images/h3NQxtCOq9IYbMV4RhpkGxbjBJ4.png?scale-down-to=512"
              rightLogoSrc="https://framerusercontent.com/images/g1VpaCAYo3pRPCFikR7aV3GH0.png?scale-down-to=512"
              stars={5}
              quote=" Partnering with Divyanshu was a game-changer. We were able to streamline our workflow and improve our product significantly."
              name="Pixse"
              title="Creator of PixseDesign"
            />
            <Flex style={{ width: "100vw" }}>
              <FlickeringGridDemo color={colors.text_gray} />
            </Flex>
          </Column>
        </Flex>
        {/* About */}
        <Flex
          fillWidth
          fitHeight
          radius="xl-8"
          overflow="hidden"
          direction="column"
          center
          paddingY="xl"
          gap="32"
          paddingX="l"
          style={{
            backgroundColor: colors.background_light,
            minHeight: "fit-content",
          }}
        >
          <Flex
            className="about-me-container"
            gap="64"
            fillWidth
            fitHeight
            vertical="center"
            horizontal="between"
          >
            <Column fillWidth gap="32" vertical="center">
              <Text
                style={{
                  fontFamily: fraunces.style.fontFamily,
                  fontSize: "2.5em",
                  color: colors.text,
                  fontWeight: "300",
                  lineHeight: "1.2",
                  maxWidth: "1000px",
                }}
              >
                Designer. Builder.
                <br />
                <span style={{ color: colors.text_gray }}>
                  Lifelong learner.
                </span>
              </Text>
              <Text
                style={{
                  fontFamily: inter_tight.style.fontFamily,
                  fontSize: "1.1em",
                  color: colors.text_gray,
                  maxWidth: "700px",
                  lineHeight: "1.6",
                }}
              >
                Hi! I'm Divyanshu, a passionate full-stack developer who loves
                coding and building innovative projects. I enjoy exploring new
                technologies and working with React, Next.js, TypeScript, and
                Supabase. My favorite part of coding is designing clean and
                efficient UI/UX while solving complex problems.
                <br />
                <br />
                I love experimenting with new frameworks and constantly
                improving my skills. When I'm not coding, you'll find me playing
                guitar and piano, creating my own music, or gaming - Minecraft
                is one of my all-time favorites. I also enjoy watching movies,
                dabbling with Arduino, and learning new things. Currently, I'm
                diving into Web3 and DSA, and working on mastering guitar like a
                pro.
                <br />
                <br />
                Along the way, I've built plenty of side projects, some of which
                have found their way into my own{" "}
                <a
                  href="https://divyanshudhruv.is-a.dev/project-graveyard"
                  style={{ color: colors.text_link }}
                  aria-label="Project Graveyard"
                  title="Project Graveyard"
                >
                  project graveyard 🥀
                </a>
                . I love sharing my experiments and failures as much as my
                successes—each project is a step forward!
              </Text>
              <Column gap="8" paddingTop="32">
                <Text
                  style={{
                    fontFamily: "monospace",
                    fontSize: "1em",
                    color: colors.text_gray_light,
                    fontWeight: "500",
                  }}
                >
                  SKILLS
                </Text>
                <Scroller direction="row">
                  <Flex direction="column" gap="12">
                    <Row gap="12" vertical="center" horizontal="start">
                      {skills
                        .slice(0, Math.ceil(skills.length / 2))
                        .map((skill) => (
                          <SkillBadge
                            key={skill.label}
                            icon={
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  height: "15px",
                                  width: "15px",
                                }}
                              >
                                {React.isValidElement(skill.icon)
                                  ? React.cloneElement(
                                      skill.icon as React.ReactElement,
                                      {}
                                    )
                                  : skill.icon}
                              </span>
                            }
                            label={skill.label}
                          />
                        ))}
                    </Row>
                    <Row gap="12">
                      {skills
                        .slice(Math.ceil(skills.length / 2))
                        .map((skill) => (
                          <SkillBadge
                            key={skill.label}
                            icon={
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  height: "15px",
                                  width: "15px",
                                }}
                              >
                                {React.isValidElement(skill.icon)
                                  ? React.cloneElement(
                                      skill.icon as React.ReactElement,
                                      {}
                                    )
                                  : skill.icon}
                              </span>
                            }
                            label={skill.label}
                          />
                        ))}
                    </Row>
                  </Flex>
                </Scroller>
              </Column>
            </Column>
            <Flex fillHeight vertical="start" className="about-me-image">
              <MinimalAboutCard
                src="https://wallpaperaccess.com/full/3496338.jpg"
                alt="Designer in coat"
              />
            </Flex>
          </Flex>
        </Flex>
        {/* Experience & Stack */}
        <Flex
          fillWidth
          fitHeight
          radius="xl-8"
          overflow="hidden"
          direction="column"
          center
          paddingY="xl"
          gap="64"
          paddingX="l"
          style={{
            backgroundColor: colors.background_light,
            minHeight: "fit-content",
          }}
        >
          <Column gap="40" fillWidth maxWidth={95}>
            <Row vertical="center" horizontal="start" fillWidth>
              <Text
                style={{
                  fontFamily: fraunces.style.fontFamily,
                  fontSize: "2.5em",
                  color: colors.text,
                  fontWeight: "300",
                  lineHeight: "1.2",
                  maxWidth: "1000px",
                }}
              >
                Experience
              </Text>
            </Row>{" "}
            <Column gap="20" fillWidth>
              {[
                {
                  logo: "https://avatars.githubusercontent.com/u/201123854?s=200&v=4",
                  name: "Sonamii",
                  role: "CTO",
                  period: "2025 - NOW",
                },
                {
                  logo: "/me.webp",
                  name: "Self Employed ",
                  role: "Full-Stack Developer",
                  period: "2024 - NOW",
                },
                {
                  logo: "/me.webp",
                  name: "Self Employed",
                  role: "Front-End Developer | UI/UX Designer",
                  period: "2019 - NOW",
                },
                {
                  logo: "https://res.cloudinary.com/apideck/image/upload/v1643556143/icons/whitehatjr.jpg",
                  name: "WhiteHat Jr",
                  role: "Apprenticeship",
                  period: "2020 - 2022",
                },
              ].map((exp, idx) => (
                <Row
                  key={exp.name}
                  fillWidth
                  vertical="center"
                  horizontal="between"
                  style={{
                    borderBottom: idx !== 4 ? "1px solid #eee" : undefined,
                    paddingBottom: "18px",
                  }}
                >
                  {" "}
                  <Scroller
                    direction="row"
                    style={{ maxWidth: "90vw" }}
                    className="experience-scroller"
                    fillWidth
                  >
                    <Row gap="16" vertical="center" fillWidth>
                      <Media
                        src={exp.logo}
                        width={1.5}
                        height={1.5}
                        minWidth={1.5}
                        minHeight={1.5}
                        radius="s"
                        style={{
                          background: "#f5f5f5",
                          objectFit: "cover",
                        }}
                        unoptimized
                        alt={exp.name}
                        title={exp.name}
                      />
                      <Text
                        style={{
                          fontFamily: inter_tight.style.fontFamily,
                          fontSize: "1em",
                          color: colors.text,
                          minWidth: "fit-content",
                        }}
                      >
                        {exp.name}
                      </Text>
                    </Row>
                    <Row gap="24" vertical="center">
                      <Text
                        style={{
                          fontFamily: inter_tight.style.fontFamily,
                          fontSize: "1em",
                          color: colors.text_gray,
                          fontWeight: 400,
                          minWidth: "350px",
                          textAlign: "right",
                        }}
                      >
                        {exp.role}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "monospace",
                          fontSize: "1em",
                          color: colors.text_gray_light,
                          fontWeight: 400,
                          letterSpacing: "0.5px",
                          minWidth: "fit-content",
                          textAlign: "right",
                        }}
                      >
                        {exp.period}
                      </Text>
                    </Row>{" "}
                  </Scroller>
                </Row>
              ))}{" "}
            </Column>{" "}
          </Column>
          <Column gap="40" fillWidth maxWidth={95}>
            <Row vertical="center" horizontal="start" fillWidth>
              <Text
                style={{
                  fontFamily: fraunces.style.fontFamily,
                  fontSize: "2.5em",
                  color: colors.text,
                  fontWeight: "300",
                  lineHeight: "1.2",
                  maxWidth: "1000px",
                }}
              >
                My Stack
              </Text>
            </Row>
            <Flex fillWidth center fitHeight>
              <Grid gap="20" columns={4} fillWidth className="stack-grid">
                <StackCard
                  logoSrc="https://framerusercontent.com/images/ZmOuFXkoGoEpOrAIJdOqFqdcs0.png"
                  name="Framer"
                  description="Web design"
                  link="https://framer.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/jYeOBev1oEFzM8phEOLVBjE80g.png?scale-down-to=512"
                  name="Frequencii"
                  description="Product design"
                  link="https://frequencii.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/1kev4DX36PMe8zIqywvGjq71Q.png?scale-down-to=512"
                  name="MyFind"
                  description="Inspiration"
                  link="https://myfind.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/cOCrlG7EKZwfJjTsw6JThxk1jg.png?scale-down-to=512"
                  name="Sight"
                  description="Planning"
                  link="https://sight.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/hCe7HGWiqcHS3sPuOLRNGssPAko.png?scale-down-to=512"
                  name="Accord"
                  description="Communication"
                  link="https://accord.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/0IF3EJQR3n5AMvGaCCTIemQA3z8.png?scale-down-to=512"
                  name="Ikigai"
                  description="Communication"
                  link="https://ikigai.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/hCe7HGWiqcHS3sPuOLRNGssPAko.png?scale-down-to=512"
                  name="Arm"
                  description="Browser"
                  link="https://arm.com/"
                />
                <StackCard
                  logoSrc="https://framerusercontent.com/images/x495MOiNiq8DQdQNrGMqiW5CA.png?scale-down-to=512"
                  name="Slime"
                  description="Graphic design"
                  link="https://slime.com/"
                />
                <StackCard
                  logoSrc="https://avatars.githubusercontent.com/u/201123854?s=200&v=4"
                  name="Nextbench"
                  description="Educational insights"
                  link="https://next-bench-dev.vercel.app"
                />
              </Grid>
            </Flex>
          </Column>
        </Flex>
        {/* End footer */}
        <Flex
          fillWidth
          fitHeight
          maxHeight={70}
          radius="xl-8"
          overflow="hidden"
          direction="column"
          center
          gap="40"
          style={{
            backgroundColor: colors.background_light,
            minHeight: "100vh",
          }}
          data-theme="dark"
        >
          <Particle
            fillWidth
            fillHeight
            height={24}
            density={250}
            position="absolute"
            style={{ zIndex: 99999, top: 0 }}
            opacity={50}
          />
          <Particle
            fillWidth
            fillHeight
            height={24}
            density={250}
            position="absolute"
            style={{ zIndex: 99999, bottom: 0 }}
            opacity={50}
            color="neutral-alpha-strong"
          />

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              minWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            className="footer-background"
          >
            <img
              src="https://i.redd.it/j7pt9senwgp71.png"
              alt="Footer background"
              title="Footer background"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                minHeight: "100%",
                minWidth: "100%",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, rgba(38,38,38,0.2) 0%, rgba(0,0,0,0.95) 100%)",
                pointerEvents: "none",
              }}
              aria-hidden="true"
            />
            {/* Text overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                pointerEvents: "auto",
              }}
            >
              <h2
                style={{
                  color: "#fff",
                  fontSize: "2.3em",
                  textAlign: "center",
                  fontWeight: 300,
                  marginBottom: "24px",
                  fontFamily: fraunces.style.fontFamily,
                  lineHeight: 1.2,
                  maxWidth: "900px",
                  textShadow: "0 2px 16px rgba(0,0,0,0.25)",
                }}
              >
                Have a project idea in mind? Let's
                <br />
                chat about how we can bring it to life!
              </h2>
              <Button
                size="l"
                weight="default"
                style={{
                  background: "#fff",
                  color: "#222",
                  fontFamily: inter_tight.style.fontFamily,
                  fontSize: "1.2em",
                  borderRadius: "12px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
                  padding: "16px 32px",
                  fontWeight: 500,
                  zIndex: 9999999999999,
                }}
                aria-label="Message me on LinkedIn"
                title="Message me on LinkedIn"
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#222";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.transition =
                    "background 0.18s cubic-bezier(.4,0,.2,1), color 0.18s cubic-bezier(.4,0,.2,1)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#fff";
                  (e.currentTarget as HTMLButtonElement).style.color = "#222";
                }}
              >
                Message me on LinkedIn
              </Button>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "32px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                textAlign: "center",
              }}
            >
              <a
                href="#"
                style={{
                  color: "#aaa",
                  fontFamily: inter_tight.style.fontFamily,
                  fontSize: "0.8em",
                }}
                aria-label="Back to top"
                title="Back to top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <Row center gap="4" paddingY="s">
                  Back to top <ArrowUp color="#aaa" size={16} />
                </Row>
              </a>
            </div>
          </div>
        </Flex>
      </Flex>
    </>
  );
}
