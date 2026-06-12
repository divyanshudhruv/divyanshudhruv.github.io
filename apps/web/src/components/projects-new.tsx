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
  projects: Projects[];
}

export function ProjectsBlock({ projects }: ProjectsBlockProps) {
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
                className="font-body font-normal text-muted-foreground text-md pr-15.5"
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
            <Text className="font-body font-normal text-muted-foreground text-md">
              {exp.date.toLocaleString("default", { month: "short" })}
            </Text>
            <Text className="font-body font-normal text-muted-foreground text-md">
              &nbsp;
            </Text>
            <Text className="font-body font-normal text-muted-foreground text-md">
              {exp.date.getFullYear()}
            </Text>
          </Row>
        </Row>
      ))}
    </Column>
  );
}
