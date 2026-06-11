import { Column, Flex, Media, Row, Text } from "@once-ui-system/core";
import PremiumButton from "./premium-button";
import { ArrowUpRightFromSquare } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl: string;
  date: Date;
  category:string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  liveUrl,
  repoUrl,
  date,
  category,
}: ProjectCardProps) {
  return (
    <Column
      className="rounded-3xl border border-border bg-linear-to-br from-muted/80 to-muted p-24 font-sans shadow-sm"
      padding={1.5}
      gap={0.6}
      flex={1}
      fillWidth
    >
      <Row fillWidth horizontal="between" vertical="center">
        <Flex
          className="bg-foreground p-[7px] px-[9px] rounded-xl min-w-16"
          center
        >
          <Text variant="label-default-s" className="text-accent">
            {category}
          </Text>
        </Flex>
        <Flex className="bg-foreground p-[7px] rounded-xl min-w-16" gap={0.25}>
          <Flex flex={2} className="bg-transparent" center>
            <Text variant="label-default-s" className="text-accent">
               {date.toLocaleString('default', { month: 'short' })}
            </Text>
          </Flex>
          <Flex flex={2} className="bg-accent rounded-md px-4" center>
            <Text variant="label-default-s">{date.getDate()}</Text>
          </Flex>
        </Flex>
      </Row>

      <Column fillWidth horizontal="start" vertical="start" gap={0.25}>
        <Row gap={0.6} vertical="center">
          {" "}
          <Text variant="display-default-xs">
            <b>{title}</b>
          </Text>
          <ArrowUpRightFromSquare size={16} onClick={()=> window.open()} className="cursor-pointer"/>
        </Row>
        {/* Maximum characters: 135, after that trim and use "..." */}
        <Text className="text-muted-foreground text-md">{description.length > 105 ? description.slice(0, 105) + "..." : description}</Text>
      </Column>
      <Media
        src={imageUrl}
        unoptimized
        enlarge
        fillWidth
        fitHeight
        aspectRatio="16/10"
        className="rounded-3xl"
      ></Media>
      {/* props to hide or show */}
      <Row fillWidth fitHeight horizontal="between">
        <Flex fitWidth fitHeight>
          <a href={repoUrl}>
{/* boxcolor bg-<random-color>-500 */}
            <PremiumButton
              text="Repository"
              pattern="repository"
              boxColor={"bg-" + ["taupe","red","blue","yellow","teal","orange"][Math.floor(Math.random()*6)] + "-500"}
            />
          </a>
        </Flex>
      </Row>
    </Column>
  );
}
