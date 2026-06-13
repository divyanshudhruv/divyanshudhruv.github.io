import * as React from "react";
import { Grid, Text } from "@once-ui-system/core";

const credits: [string, string][] = [
	["Crafted by", "Divyanshu Dhruv"],
	["Source code", "Github"],
	["Inspired by", "once-ui.com"],
	["", "ui.shadcn.com"],
	["", "tailwindcss.com"],
	["", "bklit.ui"],
	["", "evilcharts.com"],
	["", "cult-ui.com"],
	["", "skiper-ui.com"],
	["Deployed on", "Vercel"],
	["", "Cummand"],
	["", "Github"],
	["", "Supabase Cron"],
	["Analytics", "Umami"],
];

export function CreditsGrid() {
	return (
		<Grid fillWidth columns={2} gap={0.5}>
			{credits.map(([label, value], i) => (
				<React.Fragment key={i}>
					<Text
						className="font-body font-normal text-lg text-muted-foreground/80"
						align="right"
					>
						{label}
					</Text>
					<Text
						className="font-body font-normal text-lg text-muted-foreground/80"
						align="left"
					>
						<span
							className={
								value === "Divyanshu Dhruv"
									? "text-orange-500/80"
									: "text-foreground/80"
							}
						>
							{value}
						</span>
					</Text>
				</React.Fragment>
			))}
		</Grid>
	);
}
