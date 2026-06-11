import type { ProjectCardProps } from "@/components/projects";

const img = (repo: string, owner = "divyanshudhruv") =>
  `https://opengraph.githubassets.com/1/${owner}/${repo}`;

export const projectsData: ProjectCardProps[] = [
  {
    title: "cummand",
    description:
      "A command-line interface tool that securely tunnels your local development server to the public internet using custom, memorable aliases for seamless collaboration and testing.",
    imageUrl:
      "https://github.com/divyanshudhruv/cummand/raw/main/public/assets/banner.png",
    repoUrl: "https://github.com/divyanshudhruv/cummand",
    date: new Date("2026-03-15"),
    category: "CLI",
  },
  {
    title: "spojt",
    description:
      "The Atomic UI Registry for NextJS: a comprehensive collection of production-ready, reusable interface components designed to accelerate modern web development with React, TypeScript, and Tailwind CSS.",
    imageUrl:
      "https://private-user-images.githubusercontent.com/71079602/571034163-2fbc6226-abb1-42b7-bf82-bd0868e39581.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODEyMTYxMTcsIm5iZiI6MTc4MTIxNTgxNywicGF0aCI6Ii83MTA3OTYwMi81NzEwMzQxNjMtMmZiYzYyMjYtYWJiMS00MmI3LWJmODItYmQwODY4ZTM5NTgxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA2MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNjExVDIyMTAxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU3NDk1ZDE5NmUwNGVhYzBlNjBkYWM4MzUzYjUwYTA0ZjE2YmJjZjQ5YmRmNmFjZjkzZjA5NjFlYjRkODA2ZjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.SXTKlE84T3V3qllBgQya3eBeZmuZHM3VCLyWEaj4bv8",
    repoUrl: "https://github.com/basalt3/spojt",
    date: new Date("2026-04-01"),
    category: "Library",
  },
  {
    title: "hellolink",
    description:
      "An AI-powered, open-source alternative to Linktree that brings all your important links together in one beautiful, customizable place with intelligent recommendations for better audience engagement.",
    imageUrl:
      "https://i.pinimg.com/originals/36/c7/89/36c7897c702a09769ff0f8d732361770.gif",
    liveUrl: "https://hellolink.app",
    repoUrl: "https://github.com/divyanshudhruv/hellolink",
    date: new Date("2026-03-10"),
    category: "Web App",
  },
  {
    title: "re-folio",
    description:
      "Transform your resume into a stunning, fully responsive portfolio website with this open-source tool that combines elegant design with effortless deployment and customization.",
    imageUrl:
      "https://github.com/divyanshudhruv/re-folio/blob/main/public/images/og/re-folio-2.png?raw=true",
    repoUrl: "https://github.com/divyanshudhruv/re-folio",
    date: new Date("2026-02-20"),
    category: "Tool",
  },
  {
    title: "tailwind-doctor",
    description:
      "A diagnostic toolkit for Tailwind CSS projects that analyzes stylesheets, detects unused utility classes, and provides actionable optimization recommendations to reduce final bundle size.",
    imageUrl:
      "https://i.pinimg.com/originals/bf/de/43/bfde434abdae2f1d273a03bb983f7394.gif",
    repoUrl: "https://github.com/divyanshudhruv/tailwind-doctor",
    date: new Date("2026-03-26"),
    category: "Tool",
  },
  {
    title: "peerpipe",
    description:
      "A peer-to-peer terminal-based file sharing application with a rich text user interface that enables direct, encrypted file transfers between machines without relying on intermediary servers or cloud storage.",
    imageUrl:
      "https://i.pinimg.com/originals/ac/a8/4c/aca84c26b527ba422235ec69be67f8a8.gif",
    repoUrl: "https://github.com/divyanshudhruv/peerpipe",
    date: new Date("2026-03-21"),
    category: "CLI",
  },
  {
    title: "echoflow",
    description:
      "A standalone speech-to-text conversion application that accurately transcribes audio input into written text with support for multiple languages, real-time processing, and export capabilities.",
    imageUrl:
      "https://i.pinimg.com/originals/1d/8f/51/1d8f51cd5cc39a7280cd4806874723e2.gif",
    repoUrl: "https://github.com/divyanshudhruv/echoflow",
    date: new Date("2026-03-16"),
    category: "Tool",
  },
  {
    title: "keyshard",
    description:
      "An efficient, write-once-use-anywhere secrets injection tool that securely manages sensitive configuration values across all your applications and environments without exposing them in code.",
    imageUrl:
      "https://i.pinimg.com/originals/58/81/54/588154070c6960f868acd50f62035925.gif",
    repoUrl: "https://github.com/divyanshudhruv/keyshard",
    date: new Date("2026-03-16"),
    category: "Tool",
  },
];
