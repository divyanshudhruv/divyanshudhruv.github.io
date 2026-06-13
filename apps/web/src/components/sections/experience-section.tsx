import { Column } from "@once-ui-system/core";
import { ExperienceBlock } from "@/components/experience-block";
import { ActionRow } from "@/components/section/action-row";
import {
	SectionHeading,
	SectionRoot,
	SectionText,
} from "@/components/section/section-heading";
import SVGMarqueeImg from "@/components/svg-marquee/svg-marquee-img";
import { education, experiences } from "@/resources/experiences";

export default function ExperienceSection({ id }: { id: string }) {
	return (
		<SectionRoot id={id}>
			<SectionHeading before="Work and" highlight="Education." />
			<SectionText>
				I've been fortunate to work with some incredible organizations and
				contribute to building some cool stuff. Here are my work and education:
			</SectionText>
			<Column fillWidth gap={1} marginTop={1}>
				<ExperienceBlock experiences={experiences} />
				<hr />
				<ExperienceBlock experiences={education} />
			</Column>
			<Column fillWidth gap={1} marginTop={1}>
				<SectionText>
					Also I was given an opportunity to be the organizer of the tech-fest
					hackathon held at DPSV. Earlier in 2024 I had participated in a
					similar hackathon held at SPAD (district level), and I won the first
					prize. lol.
				</SectionText>
				<ActionRow
					buttons={[
						{
							text: "Get my Resume",
							boxColor: "bg-teal-500",
							ariaLabel: "Get my resume",
						},
						{
							text: "Do nothing",
							boxColor: "bg-yellow-500",
							pattern: "x",
							ariaLabel: "Do nothing experience",
						},
					]}
				/>
			</Column>
			<SVGMarqueeImg />
		</SectionRoot>
	);
}
