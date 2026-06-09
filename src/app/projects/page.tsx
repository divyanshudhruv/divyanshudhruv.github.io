"use client";

import "./../global.css";

import { projects } from "@/data/data";
import ListPageLayout from "@/components/ListPageLayout";

export default function Projects() {
  return <ListPageLayout title="Projects" items={projects} routePrefix="projects" />;
}
