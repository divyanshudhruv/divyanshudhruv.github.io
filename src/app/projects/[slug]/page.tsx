"use client";

import { useState } from "react";
import "./../../global.css";
import { Text } from "@once-ui-system/core";
import { useParams } from "next/navigation";
import { projects } from "@/data/data";
import { ProjectContent } from "@/components/projects/ProjectContent";
import PasswordGate from "@/components/PasswordGate";
import DetailLayout from "@/components/DetailLayout";
import { useSortedItems } from "@/hooks/useSortedItems";

export default function Project() {
  const params = useParams();
  const slug = params?.slug as string;
  const [unlocked, setUnlocked] = useState(false);
  const sortedProjects = useSortedItems(projects);
  const project = projects.find((item) => item.id === slug);

  return (
    <DetailLayout
      item={project}
      backHref="/projects"
      backLabel="PROJECTS"
      sidebarTitle="PROJECTS"
      sidebarItems={sortedProjects}
      sidebarAllHref="/projects"
    >
      {project?.isPrivate && !unlocked ? (
        <PasswordGate itemId={project.id} onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          <Text variant="body-default-l" onBackground="neutral-weak" className="lh">
            <b>{project?.description}</b>
          </Text>
          <ProjectContent data={project?.data as any} />
        </>
      )}
    </DetailLayout>
  );
}
