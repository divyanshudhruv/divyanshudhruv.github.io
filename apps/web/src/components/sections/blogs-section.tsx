import { Column, Text } from "@once-ui-system/core";
import { ActionRow } from "@/components/section/action-row";
import {
	SectionHeading,
	SectionRoot,
	SectionText,
} from "@/components/section/section-heading";
import { socials } from "@/resources/socials";

export default function BlogsSection({ id }: { id: string }) {
	return (
		<SectionRoot id={id}>
			<SectionHeading before="Blogs and" highlight="writings." />
			<SectionText>
				The below are some of my blogs and writings that i have published on
				various platforms (not really).
			</SectionText>
			<Column fillWidth marginTop={1}>
				<Text className="font-body text-muted-foreground">
					No blogs yet — check back later.
				</Text>
			</Column>
			<ActionRow
				buttons={[
					{
						text: "View more",
						boxColor: "bg-taupe-500",
						pattern: "linkedin",
						ariaLabel: "View more blogs",
						href: socials.linkedin,
					},
					{
						text: "Do nothing",
						boxColor: "bg-yellow-500",
						pattern: "arrow",
						ariaLabel: "Do nothing blogs",
					},
				]}
			/>
		</SectionRoot>
	);
}
