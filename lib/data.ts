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
import data from "@/public/data.png";
import refolio from "@/public/re-folio.png";
import klarity from "@/public/klarity.png";
import coclip from "@/public/coclip.png";
import sourceful from "@/public/sourceful.png";

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
    title: "Re-Folio",
    description: "Transform Your Resume 📄 into a stunning portfolio - powered by AI.",
    tags: ["Next.js", "TypeScript", "Tailwind", "onceui","SCSS"],
    imageUrl: refolio,
  },
  {
    title: "Klarity-AI",
    description: "Turn inbox chaos into clarity with AI-powered organization.",
    tags: ["GeminiAI", "Next.js", "TypeScript", "Tailwind", "onceui","n8n"],
    imageUrl: klarity,
  },
  
  {
    title: "Sourceful Space",
    description: "Transform websites into structured JSON using AI.",
    tags: ["MistralAI", "Next.js", "TypeScript", "Tailwind", "onceui"],
    imageUrl: sourceful,
  },
  {
    title: "DataDiver-AI",
    description: "Dive into data with AI-powered web scraping.",
    tags: ["MistralAI", "Next.js", "TypeScript", "Tailwind", "onceui"],
    imageUrl: data,
  },
  {
    title: "Next Bench - Sonamii",
    description: "Advanced search for institutions and comparisons.",
    tags: ["[ONGOING]", "Next.js", "Supabase", "DrizzleORM", "MistralAI"],
    imageUrl: nextImg,
  },
  {
    title: "Strix-AI",
    description: "Dynamic localization tool using JSON data.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "GeminiAI"],
    imageUrl: rmtdevImg,
  },
  {
    title: "HelloLink",
    description: "AI-powered alternative to Linktree.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "GeminiAI"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Gitfolio",
    description: "Generate modern GitHub profile cards.",
    tags: ["React", "Tailwind", "TypeScript", "Axios"],
    imageUrl: gitfolio,
  },{
    title: "CoClip",
    description: "AI-powered cloud clipboard for seamless content sharing.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    imageUrl: coclip,
  },
  {
    title: "regex-simplify",
    description: "Simplify regex with chainable APIs.",
    tags: ["[ONGOING]", "React", "Next.js", "SCSS", "Tailwind", "OnceUI"],
    imageUrl: another,
  },
  {
    title: "Minifolio",
    description: "Minimal portfolio template for developers.",
    tags: ["React", "Vite", "JavaScript", "Animation"],
    imageUrl: minifolio,
  },
  {
    title: "Pocket Vault",
    description: "Store npm packages, snippets, and tools.",
    tags: ["[Stashed]", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: pocketVault,
  },
  {
    title: "Tidyfi",
    description: "One-click Python file organizer.",
    tags: ["Python", "OS", "Flask", "Organizer", "Web"],
    imageUrl: tidyfi,
  },
  {
    title: "Eeon",
    description: "AI emoticon assistant for instant reactions.",
    tags: ["React", "Next.js", "GeminiAI", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Angry Birds 😝",
    description: "A simple clone of Angry Birds.",
    tags: ["P5JS", "Javascript", "Game", "WHITEHATJR"],
    imageUrl: angrybirds,
  },
  {
    title: "VSCode UI Tweaks",
    description: "Custom tweaks for Visual Studio Code.",
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
  "C#",
] as const;
