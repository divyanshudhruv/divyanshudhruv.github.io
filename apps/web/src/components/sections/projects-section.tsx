import { Column } from "@once-ui-system/core";
import { ProjectsBlock } from "@/components/projects-block";
import { ActionRow } from "@/components/section/action-row";
import {
	SectionHeading,
	SectionRoot,
	SectionText,
} from "@/components/section/section-heading";
import { projectsData } from "@/resources/projects";

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
			<ActionRow
				buttons={[
					{ text: "View more", boxColor: "bg-rose-500", pattern: "linkedin" },
					{
						text: "View on Github",
						boxColor: "bg-indigo-500",
						pattern: "arrow",
					},
				]}
			/>
		</SectionRoot>
	);
}
