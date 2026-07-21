import { Flex, Text } from "@once-ui-system/core";
import type { ReactNode } from "react";
import { Inline } from "@/components/inline";

type SectionHeadingProps = {
	before: string;
	highlight?: string;
};

export function SectionHeading({ before, highlight }: SectionHeadingProps) {
	return (
		<Inline className="font-default font-display font-s text-foreground">
			<b>
				{before}{" "}
				{highlight && (
					<span className="text-muted-foreground">{highlight}</span>
				)}
			</b>
		</Inline>
	);
}

type SectionTextProps = {
	children: ReactNode;
};

export function SectionText({ children }: SectionTextProps) {
	return (
		<Text
			variant="label-default-xl"
			onBackground="neutral-weak"
			className="font-medium leading-relaxed opacity-70"
		>
			<b> {children}</b>
		</Text>
	);
}

type SectionRootProps = {
	children: ReactNode;
	id: string;
};

export function SectionRoot({ children, id }: SectionRootProps) {
	return (
		<Flex
			direction="column"
			horizontal="start"
			vertical="start"
			gap={1}
			fillWidth
			fitHeight
			id={id}
		>
			{children}
		</Flex>
	);
}
