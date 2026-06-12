import type { Projects } from "@/components/projects-new";
/**
 * 
 *  title: string;
  description: string;
  imageUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  date: Date;
  invert:boolean;
 */

export const projectsData: Projects[] = [
  {
    title: "cummand",
    description:
      "A command-line interface tool that securely tunnels your local development server to the public internet using custom, memorable aliases for seamless collaboration and testing.",
    imageUrl:
      "https://i.pinimg.com/originals/6e/a0/5b/6ea05b608d3c7d08befdbd1b572c8200.gif",
    repoUrl: "https://github.com/divyanshudhruv/cummand",
    date: new Date("2026-03-15"),

    liveUrl: "#",
  },
  {
    title: "spojt",
    description:
      "The Atomic UI Registry for NextJS: a comprehensive collection of production-ready, reusable interface components designed to accelerate modern web development with React, TypeScript, and Tailwind CSS.",
    imageUrl:
      "https://i.pinimg.com/originals/ff/04/40/ff0440051eca64114ced7efe3456f746.gif",
    repoUrl: "https://github.com/basalt3/spojt",
    date: new Date("2026-04-01"),
    liveUrl: "#",
  },
  {
    title: "hellolink",
    description:
      "An AI-powered, open-source alternative to Linktree that brings all your important links together in one beautiful, customizable place with intelligent recommendations for better audience engagement.",
    imageUrl:
      "https://i.pinimg.com/originals/07/45/97/074597c200db394fe7282340e66c6042.gif",
    repoUrl: "https://github.com/divyanshudhruv/hellolink",
    date: new Date("2026-03-10"),
    liveUrl: "#",
  },
  {
    title: "re-folio",
    description:
      "Transform your resume into a stunning, fully responsive portfolio website with this open-source tool that combines elegant design with effortless deployment and customization.",
    imageUrl:
      "https://i.pinimg.com/originals/d9/44/c0/d944c096fc193424f0895d67b3b3caf4.gif",
    repoUrl: "https://github.com/divyanshudhruv/re-folio",
    date: new Date("2026-02-20"),
  },
  {
    title: "tailwind-doctor",
    description:
      "A diagnostic toolkit for Tailwind CSS projects that analyzes stylesheets, detects unused utility classes, and provides actionable optimization recommendations to reduce final bundle size.",
    imageUrl:
      "https://i.pinimg.com/originals/1d/8f/51/1d8f51cd5cc39a7280cd4806874723e2.gif",
    repoUrl: "https://github.com/divyanshudhruv/tailwind-doctor",
    date: new Date("2026-03-26"),
    liveUrl: "#",
  },
  {
    title: "peerpipe",
    description:
      "A peer-to-peer terminal-based file sharing application with a rich text user interface that enables direct, encrypted file transfers between machines without relying on intermediary servers or cloud storage.",
    imageUrl:
      "https://i.pinimg.com/originals/ac/a8/4c/aca84c26b527ba422235ec69be67f8a8.gif",
    repoUrl: "https://github.com/divyanshudhruv/peerpipe",
    date: new Date("2026-03-21"),
    liveUrl: "#",
  },
  {
    title: "echoflow",
    description:
      "A standalone speech-to-text conversion application that accurately transcribes audio input into written text with support for multiple languages, real-time processing, and export capabilities.",
    imageUrl:
      "https://i.pinimg.com/originals/cf/b4/fd/cfb4fd143ad63ab2a2412afc881bf030.gif",
    repoUrl: "https://github.com/divyanshudhruv/echoflow",
    invert: true,
    date: new Date("2026-03-16"),
  },
  {
    title: "keyshard",
    description:
      "An efficient, write-once-use-anywhere secrets injection tool that securely manages sensitive configuration values across all your applications and environments without exposing them in code.",
    imageUrl:
      "https://i.pinimg.com/originals/58/81/54/588154070c6960f868acd50f62035925.gif",
    repoUrl: "https://github.com/divyanshudhruv/keyshard",
    date: new Date("2026-03-16"),
    liveUrl: "#",
  },
];
