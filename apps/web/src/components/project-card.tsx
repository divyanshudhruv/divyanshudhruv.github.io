"use client";

import { ExternalLink } from "lucide-react";
import * as m from "motion/react-m";
import { useState } from "react";
import { projectsData } from "@/resources/projects";
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
	useCutoutContentStaggerVariants,
} from "@homepage/ui/components/ui/skiper-ui/cutout-card";
import { cutoutCardSurfaceClassName } from "@homepage/ui/components/ui/skiper-ui/cutout-card-tokens";

function ProjectCard() {
	const stagger = useCutoutContentStaggerVariants();
	const [randomProjects] = useState(() =>
		projectsData.toSorted(() => Math.random() - 0.5).slice(0, 6),
	);

	return (
		<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
			{randomProjects.map((project) => (
				<CutoutCard key={project.title} className={cutoutCardSurfaceClassName}>
					<CutoutCardMedia className="h-72 w-full">
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
							<span className="font-semibold text-[11px] text-stone-500 uppercase tracking-widest">
								{project.date instanceof Date
									? project.date.toLocaleDateString("en-US", {
											month: "short",
											year: "numeric",
											timeZone: "UTC",
										})
									: project.date}
							</span>
							<CutoutCorner className="absolute -right-[31px] -bottom-px rotate-90 text-stone-50 dark:text-stone-900" />
							<CutoutCorner className="absolute -top-[31px] -left-px rotate-90 text-stone-50 dark:text-stone-900" />
						</CutoutCardInsetLabel>
					</CutoutCardMedia>
					<CutoutCardContent>
						<m.div
							variants={stagger.container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className="space-y-3"
						>
							<m.h3
								variants={stagger.item}
								className="font-semibold text-lg tracking-tight"
							>
								{project.title}
							</m.h3>
							<m.p
								variants={stagger.item}
								className="line-clamp-2 text-muted-foreground text-sm"
							>
								{project.description}
							</m.p>
						</m.div>
					</CutoutCardContent>
					<CutoutCardFooter className="px-6 pb-6">
						<m.div
							variants={stagger.container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className="flex items-center gap-2 text-muted-foreground text-xs"
						>
							<m.span variants={stagger.item}>
								{project.date instanceof Date ? "Completed" : "Active"}
							</m.span>
							<m.span variants={stagger.item}>&middot;</m.span>
							<m.span variants={stagger.item}>
								{project.repoUrl ? project.repoUrl.split("/").pop() : "Private"}
							</m.span>
						</m.div>
					</CutoutCardFooter>
					{project.repoUrl && (
						<CutoutCardAction className="right-6 bottom-20">
							<a
								href={project.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1.5 rounded-full border bg-background px-4 py-2 font-medium text-xs shadow-xs transition-colors hover:bg-accent"
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
