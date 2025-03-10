import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptop, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import another from "@/public/another.png";
import gitfolio from "@/public/gitfolio.png";
import tidyfi from "@/public/tidyfi.png";
import minifolio from "@/public/minifolio.png";
import rmtdevImg from "@/public/rmtdev.png";
import nextImg from "@/public/next-bench.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import vsImg from "@/public/vscode-ui.png";
import pocketVault from "@/public/pocketvault.png";
import angrybirds from "@/public/angrybirds.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Apprenticeship",
    location: "@WhiteHat Jr",
    description:
      "Worked on 20+ real-world projects and participated in several coding challenges and awesome workshops.",
    icon: React.createElement(LuGraduationCap),
    date: "May  2020 - Dec  2022",
  },
  {
    title: "Front-End Developer | UI/UX Designer",
    location: "@Self Employed",
    description:
      "I'm working as a front-end developer for 5+ years. I also built 30+ awesome UI designs and 50+ websites.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "@Self Employed",
    description:
      "I'm now a full-stack developer, contributing to open-source projects. My stack includes React, Next.js, TypeScript, Tailwind, etc.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - present",
  },
  {
    title: "CTO",
    location: "@Sonamii",
    description: `CTO at Sonamii, leading <a href="https://next-bench-dev.vercel.app/?ref=divyanshdhruv.is-a.dev" target="_blank"><u>Next Bench</u></a> and building with Generative AI. Passionate about AI-agents, open-source, and innovation.`,
    icon: React.createElement(FaLaptop),
    date: "Feb 2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Next Bench - Sonamii",
    description:
      "Next Bench is a web application that helps students find the best institutions, offering advanced search and school comparisons.",
    tags: ["[ONGOING]", "Next.js", "Supabase", "DrizzleORM", "MistralAI"],
    imageUrl: nextImg,
  },
  {
    title: "Strix-AI",
    description:
      "A tool/package designed for dynamic localization, using JSON data.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "GeminiAI"],
    imageUrl: rmtdevImg,
  },
  {
    title: "HelloLink",
    description: "An AI powered, open-source alternative to Linktree.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "GeminiAI"],
    imageUrl: corpcommentImg,
  },

  {
    title: "regex-simplify",
    description:
      "A tool/package to simplify regex quickly using chainable APIs.",
    tags: ["[ONGOING]", "React", "Next.js", "SCSS", "Tailwind", "OnceUI"],
    imageUrl: another,
  },
  {
    title: "Minifolio",
    description: "A minimal portfolio template for developers.",
    tags: ["React", "Vite", "JavaScript", "Animation"],
    imageUrl: minifolio,
  },
  {
    title: "Gitfolio",
    description: "A modern and minimal GitHub profile card generator.",
    tags: ["React", "Tailwind", "TypeScript", "Axios"],
    imageUrl: gitfolio,
  },
  {
    title: "Pocket Vault",
    description:
      " A developer's vault for storing most used npm packages, deployments, snippets, repos, tools etc.",
    tags: ["[Stashed]", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: pocketVault,
  },
  {
    title: "Tidyfi",
    description: "A one-click Python file organizer.",
    tags: ["Python", "OS", "Flask", "Organizer", "Web"],
    imageUrl: tidyfi,
  },
  {
    title: "Eeon",
    description:
      "An AI-powered emoticon assistant that understands your text and suggests the perfect reactions instantly.",
    tags: ["React", "Next.js", "GeminiAI", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Angry Birds 😝",
    description: "A simple angry birds clone.",
    tags: ["P5JS", "Javascript", "Game", "WHITEHATJR"],
    imageUrl: angrybirds,
  },
  {
    title: "VSCode UI Tweaks",
    description:
      "A collection of custom CSS and JS tweaks designed to elevate your Visual Studio Code experience!",
    tags: ["VSCODE", "CSS", "JavaScript", "Extension"],
    imageUrl: vsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "ReactNative",
  "Shadcn/UI",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Supabase",
  "MongoDB",
  "GraphQL",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "Drizzle ORM",
  "Python",
  "Django",
  "Java",
  "R",
] as const;
