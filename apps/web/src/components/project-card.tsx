"use client";

import {
  CutoutCard,
  CutoutCardAction,
  CutoutCardContent,
  CutoutCardFooter,
  CutoutCardImage,
  CutoutCardInsetLabel,
  CutoutCardMedia,
  CutoutCardOverlay,
  CutoutCardPin,
  CutoutCorner,
  cutoutCardSurfaceClassName,
  useCutoutContentStaggerVariants,
} from "./../../../../packages/ui/src/components/ui/skiper-ui/cutout-card";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useMemo } from "react";
import { projectsData } from "@/resources/projects";
import { cn } from "@homepage/ui/lib/utils";

function ProjectCard() {
  const stagger = useCutoutContentStaggerVariants();
  const randomProjects = useMemo(
    () => [...projectsData].sort(() => Math.random() - 0.5).slice(0, 6),
    [],
  );

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
      {randomProjects.map((project) => (
        <CutoutCard key={project.title} className={cutoutCardSurfaceClassName}>
          <CutoutCardMedia className="h-72">
            <CutoutCardImage
              alt={project.title}
              src={project.imageUrl ?? ""}
              unoptimized
              className="scale-110"
            />
            {/* <CutoutCardPin className="top-0 right-0 rounded-bl-[16px] bg-primary px-6 py-3 font-semibold text-primary text-sm ring-1 ring-border/30 bg-accent">
              New
              <CutoutCorner
                className="absolute top-0 -left-[23px] -rotate-90 text-primary"
                size={24}
              />
              <CutoutCorner
                className="absolute right-0 -bottom-[23px] -rotate-90 text-primary"
                size={24}
              />
            </CutoutCardPin> */}
            <CutoutCardOverlay />
            <CutoutCardInsetLabel className="bottom-0 left-0 rounded-tr-[20px] bg-stone-50 px-5 py-3 dark:bg-stone-900">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500">
                {project.date instanceof Date
                  ? project.date.toLocaleDateString("default", {
                      month: "short",
                      year: "numeric",
                    })
                  : project.date}
              </span>
              <CutoutCorner className="absolute -right-[31px] -bottom-px rotate-90 text-stone-50 dark:text-stone-900" />
              <CutoutCorner className="absolute -top-[31px] -left-px rotate-90 text-stone-50 dark:text-stone-900" />
            </CutoutCardInsetLabel>
          </CutoutCardMedia>
          <CutoutCardContent>
            <motion.div
              variants={stagger.container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <motion.h3
                variants={stagger.item}
                className="text-lg font-semibold tracking-tight"
              >
                {project.title}
              </motion.h3>
              <motion.p
                variants={stagger.item}
                className="line-clamp-2 text-sm text-muted-foreground"
              >
                {project.description}
              </motion.p>
            </motion.div>
          </CutoutCardContent>
          <CutoutCardFooter className="px-6 pb-6">
            <motion.div
              variants={stagger.container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <motion.span variants={stagger.item}>
                {project.date instanceof Date ? "Completed" : "Active"}
              </motion.span>
              <motion.span variants={stagger.item}>&middot;</motion.span>
              <motion.span variants={stagger.item}>
                {project.repoUrl ? project.repoUrl.split("/").pop() : "Private"}
              </motion.span>
            </motion.div>
          </CutoutCardFooter>
          {project.repoUrl && (
            <CutoutCardAction className="right-6 bottom-20">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border bg-background px-4 py-2 text-xs font-medium shadow-xs transition-colors hover:bg-accent"
              >
                <ExternalLink className="size-3.5" />
                View Code
              </a>
            </CutoutCardAction>
          )}
        </CutoutCard>
      ))}
    </div>
  );
}

export { ProjectCard };
