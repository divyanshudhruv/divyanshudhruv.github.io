import { Column, Flex } from "@once-ui-system/core";
import { ProjectCard } from "@/components/project-card";
import { ProjectsBlock } from "@/components/projects-block";
import { ActionRow } from "@/components/section/action-row";
import {
	SectionHeading,
	SectionRoot,
	SectionText,
} from "@/components/section/section-heading";
import { projectsData } from "@/resources/projects";
import { socials } from "@/resources/socials";
import { HoverExpand_001 } from "./../../../../../packages/ui/src/components/ui/skiper-ui/skiper52";

export default function ProjectsSection({ id }: { id: string }) {
	return (
		<SectionRoot id={id}>
			<SectionHeading before="Featured" highlight="projects." />
			<SectionText>
				Some of my favourite projects that I've worked on:
			</SectionText>
			<Column fillWidth marginTop={1}>
				<ProjectsBlock projects={projectsData} />
			</Column>
			<Flex fillWidth marginTop={1}>
				<HoverExpand_001
					images={projectsData.map((p) => ({
						src: p.imageUrl ?? "",
						alt: p.title,
						code: p.title,
					}))}
				/>{" "}
			</Flex>{" "}
			<Flex fillWidth marginTop={1}>
				<ProjectCard />
			</Flex>
			<ActionRow
				buttons={[
					{
						text: "View more",
						boxColor: "bg-rose-500",
						pattern: "linkedin",
						href: socials.linkedin,
					},
					{
						text: "View on Github",
						boxColor: "bg-indigo-500",
						pattern: "arrow",
						href: socials.github,
					},
				]}
			/>
		</SectionRoot>
	);
}
