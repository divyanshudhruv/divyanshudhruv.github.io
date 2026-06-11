import { Column, Media, Row, Text } from "@once-ui-system/core";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export interface Experience {
  company: string;
  role: string;
  logo?: string;
  url?: string;
  startDate: string;
  endDate?: string;
  invert?:boolean
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
          <Row center gap={0.65}>
            <Media
              src={
                exp.logo ??
                `https://www.google.com/s2/favicons?domain=${new URL(exp.url ?? "https://example.com").hostname}&sz=64`
              }
              width={3}
              height={3}
              minWidth={3}
              minHeight={3}
              maxWidth={3}
              maxHeight={3}
              unoptimized
              className={`overflow-hidden rounded-2xl ${exp.invert ? "invert-100" : ""}`}
            />
            <Column vertical="center" horizontal="start">
              <Row gap={0.5} center>
                <Text className="font-body font-normal text-foreground text-lg">
                  {exp.company}
                </Text>
                {exp.url && (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer">
                    <HiArrowTopRightOnSquare
                      size={15}
                      strokeWidth={0.4}
                      className="cursor-pointer text-muted-foreground hover:text-foreground"
                    />
                  </a>
                )}
              </Row>
              <Text className="font-body font-normal text-muted-foreground text-md">
                {exp.role}
              </Text>
            </Column>
          </Row>
          <Column vertical="end" horizontal="center" fitWidth fillHeight>
            <Text className="font-body font-normal text-muted-foreground text-md">
              {exp.startDate} - {exp.endDate ?? "Now"}
            </Text>
          </Column>
        </Row>
      ))}
    </Column>
  );
}
