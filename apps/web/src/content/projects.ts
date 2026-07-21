import type { Projects } from "@/components/projects-block";
/**
 * 
 *  title: string;
  description: string;
  imageUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  date: Date | string;
  invert:boolean;https://i.pinimg.com/736x/80/0e/de/800ede22b817bb0f0bb23f4fa2190f6c.jpg
 */

export const projectsData: Projects[] = [
	{
		title: "openmem",
		description:
			"A local-first screen-to-memory system that lets you capture and organize your thoughts from your screen, webpages, bookmarks, and other sources.",
		imageUrl:
			"https://i.pinimg.com/736x/fe/ac/c4/feacc45b6d0316f11740fc368fcfaf9b.jpg",
		repoUrl: "https://github.com/basalt3/openmem",
		invert: true,
		date: "Present",
	},
	{
		title: "weave",
		description:
			"A command-line interface tool that securely tunnels your local development server to the public internet using custom, memorable aliases for seamless collaboration and testing.",
		imageUrl:
			"https://i.pinimg.com/736x/11/b0/06/11b00610db776ad67dbe7e75ede0b2f3.jpg",
		repoUrl: "https://github.com/divyanshudhruv/cummand",
		invert: false,
		date: "Present",
	},
	{
		title: "biodsa",
		description:
			"Plugin first approach to save your bookmarks, notes, and DSA.",
		imageUrl:
			"https://i.pinimg.com/736x/e1/25/df/e125df14fa8481c0ccb595f137b8330b.jpg",
		repoUrl: "https://github.com/divyanshudhruv/cummand",
		invert: true,
		date: "Present",
	},
	{
		title: "echoflow",
		description:
			"A standalone speech-to-text conversion application that accurately transcribes audio input into written text with support for multiple languages, real-time processing, and export capabilities.",
		imageUrl:
			"https://i.pinimg.com/736x/36/8a/ec/368aeccc48afb0dbc5efe4763127bd72.jpg",
		repoUrl: "https://github.com/divyanshudhruv/echoflow",
		invert: false,
		date: "Present",
	},
	{
		title: "cummand",
		description:
			"A command-line interface tool that securely tunnels your local development server to the public internet using custom, memorable aliases for seamless collaboration and testing.",
		imageUrl:
			"https://i.pinimg.com/1200x/93/44/25/934425bed14cbcd50626412e20fd564d.jpg",
		repoUrl: "https://github.com/divyanshudhruv/cummand",
		invert: false,
		date: new Date("2026-03-15"),
	},
	{
		title: "spojt",
		description:
			"The Atomic UI Registry for NextJS: a comprehensive collection of production-ready, reusable interface components designed to accelerate modern web development with React, TypeScript, and Tailwind CSS.",
		imageUrl:
			"https://i.pinimg.com/736x/0f/e9/dd/0fe9ddc9407cbdda72ad73cae04a3eb7.jpg",
		repoUrl: "https://github.com/basalt3/spojt",
		date: new Date("2026-04-01"),
	},
	{
		title: "hellolink",
		description:
			"An AI-powered, open-source alternative to Linktree that brings all your important links together in one beautiful, customizable place with intelligent recommendations for better audience engagement.",
		imageUrl:
			"https://i.pinimg.com/736x/06/48/6e/06486ecea7faf4ca11ea58c17ca54c5f.jpg",
		repoUrl: "https://github.com/divyanshudhruv/hellolink",
		date: new Date("2026-03-10"),
	},
	{
		title: "re-folio",
		description:
			"Transform your resume into a stunning, fully responsive portfolio website with this open-source tool that combines elegant design with effortless deployment and customization.",
		imageUrl:
			"https://i.pinimg.com/736x/dd/e2/b0/dde2b0c2413ff7ed09e1c1f46adafa5a.jpg",
		repoUrl: "https://github.com/divyanshudhruv/re-folio",
		date: new Date("2026-02-20"),
	},
	{
		title: "tailwind-doctor",
		description:
			"A diagnostic toolkit for Tailwind CSS projects that analyzes stylesheets, detects unused utility classes, and provides actionable optimization recommendations to reduce final bundle size.",
		imageUrl:
			"https://i.pinimg.com/736x/1a/f9/7b/1af97bbcaba8b8ed28f2ae1137ab9793.jpg",
		invert: true,
		repoUrl: "https://github.com/divyanshudhruv/tailwind-doctor",
		date: new Date("2026-03-26"),
	},
	{
		title: "peerpipe",
		description:
			"A peer-to-peer terminal-based file sharing application with a rich text user interface that enables direct, encrypted file transfers between machines without relying on intermediary servers or cloud storage.",
		imageUrl:
			"https://i.pinimg.com/736x/03/bb/38/03bb380b4a71156a7c4c7a6693f12558.jpg",
		repoUrl: "https://github.com/divyanshudhruv/peerpipe",
		date: new Date("2026-03-21"),
	},

	{
		title: "keyshard",
		description:
			"An efficient, write-once-use-anywhere secrets injection tool that securely manages sensitive configuration values across all your applications and environments without exposing them in code.",
		imageUrl:
			"https://i.pinimg.com/736x/df/8d/d8/df8dd859bd92cd770839e0c6fa010ab2.jpg",
		repoUrl: "https://github.com/divyanshudhruv/keyshard",
		date: new Date("2026-03-16"),
	},
];
