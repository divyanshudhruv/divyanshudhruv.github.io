"use client";

import { Column, Flex, StatusIndicator, Text } from "@once-ui-system/core";
import { DotGothic16 } from "next/font/google";
import { useCallback } from "react";
import { getDate } from "@/lib/get-date";

const bitcountFont = DotGothic16({
	subsets: ["latin"],
	weight: "400",
});

const navLinks = [
	{ label: "Introduction", href: "#hero" },
	{ label: "About", href: "#about" },
	{ label: "Stacks", href: "#skills" },
	{ label: "Works", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Awards", href: "#awards" },
	{ label: "Insights", href: "#insights" },
];

export default function SiteHeader() {
	const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const href = e.currentTarget.getAttribute("href");
		if (!href) return;
		const id = href.slice(1);
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<Flex
			vertical="end"
			fillWidth
			direction="row"
			horizontal="between"
			fitHeight
		>
			<Column vertical="center" horizontal="start">
				<Flex
					className={bitcountFont.className}
					direction="row"
					gap={1}
					vertical="center"
					horizontal="center"
				>
					<Text variant="label-default-l" className="text-muted-foreground">
						{getDate()}
					</Text>
					<Flex fit overflow="hidden" className="roudned-full">
						<StatusIndicator color="orange" className="rounded-full" size="m" />
					</Flex>
				</Flex>
				<Flex className={bitcountFont.className}>
					<Text variant="display-default-s" className="text-foreground">
						Today
					</Text>
				</Flex>
			</Column>
			<Column vertical="end" horizontal="end" fillHeight>
				<Flex
					className={`${bitcountFont.className} hidden md:flex`}
					direction="row"
					gap={1}
					vertical="end"
					horizontal="end"
					fillHeight
					m={{hide:true}}
				>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={scrollTo}
							className="flex min-h-11 min-w-11 cursor-pointer touch-manipulation items-center justify-center"
						>
							<Text
								variant="label-default-l"
								className="text-muted-foreground transition-all hover:text-foreground"
							>
								{link.label}
							</Text>
						</a>
					))}
				</Flex>
			</Column>
		</Flex>
	);
}
