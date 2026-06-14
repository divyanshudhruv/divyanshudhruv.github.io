import { Column, Media, Row, Text } from "@once-ui-system/core";
import { ExternalLink } from "lucide-react";

export interface Experience {
	company: string;
	role: string;
	logo?: string;
	url?: string;
	startDate: string;
	endDate?: string;
	invert?: boolean;
}

interface ExperienceBlockProps {
	experiences: Experience[];
}

export function ExperienceBlock({ experiences }: ExperienceBlockProps) {
	return (
		<Column fillWidth fitHeight gap={1}>
			{experiences.map((exp) => (
				<Row
					key={exp.company}
					fillWidth
					fitHeight
					horizontal="between"
					vertical="end"
					className="rounded-2xl"
				>
					<Row fillWidth center gap={0.65} className="overflow-hidden">
						<Media
							src={
								exp.logo ??
								`https://www.google.com/s2/favicons?domain=${new URL(exp.url ?? "https://example.com").hostname}&sz=64`
							}
							width={3}
							height={3}
							minWidth={3}
							minHeight={3}
							unoptimized
							maxWidth={3}
							maxHeight={3}
							className={`overflow-hidden rounded-xl ${exp.invert ? "invert-100" : ""}`}
						/>
						<Column fillWidth vertical="center" horizontal="start" className="min-w-0">
							<Row gap={0.5} center>
								<Text className="font-body font-medium text-foreground/80 text-lg">
									{exp.company}
								</Text>
								{exp.url && (
									<a
										href={exp.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Visit company website"
										className="text-foreground"
									>
										<ExternalLink
											size={15}
											strokeWidth={1}
											className="cursor-pointer text-foreground stroke-foreground "
										/>
									</a>
								)}
							</Row>
							<span
								className="pr-15.5 font-body font-normal text-md text-muted-foreground"
								style={{
									display: "block",
									width: "100%",
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap",
								}}
							>
								{exp.role}
							</span>
						</Column>
					</Row>
					<Row vertical="center" horizontal="end" fillWidth fillHeight s={{ hide: true }}>
						<Text className="font-body font-normal text-md text-muted-foreground">{exp.startDate.split(" ")[0]}</Text>
						<Text className="font-body font-normal text-md text-muted-foreground">&nbsp;</Text>
						<Text className="font-body font-normal text-md text-muted-foreground">{exp.startDate.split(" ").slice(1).join(" ")}</Text>
						<Text className="font-body font-normal text-md text-muted-foreground">&nbsp;-&nbsp;</Text>
						<Text className="font-body font-normal text-md text-muted-foreground">{(exp.endDate ?? "Now").split(" ")[0]}</Text>
						<Text className="font-body font-normal text-md text-muted-foreground">&nbsp;</Text>
						<Text className="font-body font-normal text-md text-muted-foreground">{(exp.endDate ?? "Now").split(" ").slice(1).join(" ")}</Text>
					</Row>
				</Row>
			))}
		</Column>
	);
}
