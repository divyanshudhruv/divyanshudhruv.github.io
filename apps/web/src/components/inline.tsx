import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type InlineProps<T extends ElementType = "span"> = {
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export function Inline<T extends ElementType = "span">({
	as,
	children,
	style,
	...props
}: InlineProps<T>) {
	const Component = as || "span";
	return (
		<Component style={{ display: "inline", ...style }} {...props}>
			{children}
		</Component>
	);
}
