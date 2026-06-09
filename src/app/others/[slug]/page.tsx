"use client";

import { useState } from "react";
import "./../../global.css";
import { Text } from "@once-ui-system/core";
import { useParams } from "next/navigation";
import { others } from "@/data/data";
import PasswordGate from "@/components/PasswordGate";
import DetailLayout from "@/components/DetailLayout";
import { SectionContent } from "@/components/SectionContent";
import { ExperiencesContent } from "@/components/others/ExperiencesContent";
import { useSortedItems } from "@/hooks/useSortedItems";

const contentMap: Record<string, React.FC<any>> = {
  "stacks-skills": SectionContent,
  education: SectionContent,
  awards: SectionContent,
  experiences: ExperiencesContent,
};

export default function OtherDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const [unlocked, setUnlocked] = useState(false);
  const sortedOthers = useSortedItems(others);
  const item = others.find((item) => item.id === slug);
  const ContentComponent = item ? contentMap[slug] : null;

  return (
    <DetailLayout
      item={item}
      backHref="/others"
      backLabel="OTHERS"
      sidebarTitle="OTHERS"
      sidebarItems={sortedOthers}
      sidebarAllHref="/others"
    >
      {item?.isPrivate && !unlocked ? (
        <PasswordGate itemId={item.id} onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          <Text variant="body-default-l" onBackground="neutral-weak" className="lh">
            <b>{item?.description}</b>
          </Text>
          {ContentComponent && <ContentComponent data={item?.data} />}
        </>
      )}
    </DetailLayout>
  );
}
