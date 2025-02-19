import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
      "Worked on 15+ real-world projects and participated in several coding challenges and awesome workshops.",
    icon: React.createElement(LuGraduationCap),
    date: "May  2020 - Dec  2022",
  },
  {
    title: "Front-End Developer | UI/UX Designer",
    location: "Self Employed",
    description:
      "I'm working as a front-end developer for 5+ years. I also built 10+ awesome UI designs and websites.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Self Employed",
    description:
      "I'm now a full-stack developer, contributing to open-source projects. My stack includes React, Next.js, TypeScript, Tailwind, etc.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HelloLink",
    description: "An AI powered, open-source alternative to Linktree.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "GeminiAI"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Strix-AI",
    description:
      "A powerful tool/package designed for dynamic localization, using JSON data",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "GeminiAI"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Eeon",
    description:
      "An AI-powered emoticon assistant that understands your text and suggests the perfect reactions instantly.",
    tags: ["React", "Next.js", "GeminiAI", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
