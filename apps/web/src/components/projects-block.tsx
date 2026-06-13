import { Column, Media, Row, Text } from "@once-ui-system/core";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export interface Projects {
	title: string;
	description: string;
	imageUrl?: string;
	repoUrl?: string;
	liveUrl?: string;
	date: Date;
	invert?: boolean;
}

export interface ProjectsBlockProps {
	projects?: Projects[];
}

export function ProjectsBlock({ projects = [] }: ProjectsBlockProps) {
	if (projects.length === 0) {
		return (
			<Row
				key={"#"}
				fillWidth
				fitHeight
				horizontal="between"
				vertical="end"
				className="rounded-2xl"
			>
				<Row fillWidth center gap={0.65} className="overflow-hidden">
					<Media
						src={
							"https://i.pinimg.com/736x/ed/a9/3e/eda93eef7541d94a899a717a6753666b.jpg"
						}
						width={3}
						height={3}
						minWidth={3}
						minHeight={3}
						maxWidth={3}
						maxHeight={3}
						unoptimized
						className={"overflow-hidden rounded-xl"}
					/>
					<Column
						fillWidth
						vertical="center"
						horizontal="start"
						className="min-w-0"
					>
						<Row gap={0.5} center>
							<Text className="font-body font-medium text-foreground/80 text-lg">
								No title available
							</Text>
							<a href={"#"} target="_blank" rel="noopener noreferrer">
								<HiArrowTopRightOnSquare
									size={15}
									strokeWidth={0.4}
									className="cursor-pointer text-muted-foreground hover:text-foreground"
								/>
							</a>
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
							No description available
						</span>
					</Column>
				</Row>
				<Row vertical="end" horizontal="center" fitWidth fillHeight>
					<Text className="font-body font-normal text-md text-muted-foreground">
						NaN
					</Text>
					<Text className="font-body font-normal text-md text-muted-foreground">
						&nbsp;
					</Text>
					<Text className="font-body font-normal text-md text-muted-foreground">
						NaN
					</Text>
				</Row>
			</Row>
		);
	}

	return (
		<Column fillWidth fitHeight gap={1}>
			{projects.map((exp) => (
				<Row
					key={exp.title}
					fillWidth
					fitHeight
					horizontal="between"
					vertical="end"
					className="rounded-2xl"
				>
					<Row fillWidth center gap={0.65} className="overflow-hidden">
						<Media
							src={exp.imageUrl as string}
							width={3}
							height={3}
							minWidth={3}
							minHeight={3}
							maxWidth={3}
							maxHeight={3}
							unoptimized
							className={`overflow-hidden rounded-xl ${exp.invert ? "invert-100" : ""}`}
						/>
						<Column
							fillWidth
							vertical="center"
							horizontal="start"
							className="min-w-0"
						>
							<Row gap={0.5} center>
								<Text className="font-body font-medium text-foreground/80 text-lg">
									{exp.title}
								</Text>
								{exp.liveUrl && (
									<a
										href={exp.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<HiArrowTopRightOnSquare
											size={15}
											strokeWidth={0.4}
											className="cursor-pointer text-muted-foreground hover:text-foreground"
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
								{exp.description}
							</span>
						</Column>
					</Row>
					<Row vertical="end" horizontal="center" fitWidth fillHeight>
						<Text className="font-body font-normal text-md text-muted-foreground">
							{exp.date.toLocaleString("default", { month: "short" })}
						</Text>
						<Text className="font-body font-normal text-md text-muted-foreground">
							&nbsp;
						</Text>
						<Text className="font-body font-normal text-md text-muted-foreground">
							{exp.date.getFullYear()}
						</Text>
					</Row>
				</Row>
			))}
		</Column>
	);
}
