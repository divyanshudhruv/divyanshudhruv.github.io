import { Flex, Text } from "@once-ui-system/core";
import { Fragment } from "react";
import PremiumButton from "@/components/premium-button";

type ActionButton = {
	text: string;
	boxColor?: string;
	pattern?: "mail" | "x" | "linkedin" | "arrow";
	href?: string;
	ariaLabel?: string;
	action?: () => void;
};

type ActionRowProps = {
	buttons: ActionButton[];
};

export function ActionRow({ buttons }: ActionRowProps) {
	return (
		<Flex fitWidth marginTop={1} direction="row" vertical="center" gap={1} wrap>
			{buttons.map((btn, i) => (
				<Fragment key={btn.text}>
					{i > 0 && (
						<Text className="font-body font-normal text-lg text-muted-foreground">
							or
						</Text>
					)}
					<PremiumButton
						text={btn.text}
						boxColor={btn.boxColor}
						pattern={btn.pattern}
						href={btn.href}
						ariaLabel={btn.ariaLabel}
						onClick={btn.action}
					/>
				</Fragment>
			))}
		</Flex>
	);
}
