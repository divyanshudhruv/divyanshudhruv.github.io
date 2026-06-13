import { ActionRow } from "@/components/section/action-row";
import {
  SectionHeading,
  SectionRoot,
  SectionText,
} from "@/components/section/section-heading";

export default function AboutSection({ id }: { id: string }) {
  return (
    <SectionRoot id={id}>
      <SectionHeading before="A little about" highlight="me." />
      <SectionText>
        I'm full-stack developer and Y Combinator Startup School India fellow. I
        specialize in building fast, responsive interfaces and architecting
        local-first AI infrastructure under my organization, Basalt3. Currently,
        I lead Next Bench, where I'm focused on building TNPS and AIAS
        applications to revolutionize student discovery, continuing a journey
        that began with a global hackathon win at age 13. <br />
        <br />
        Beyond code, I'm a Sho-Dan in Karate, a multi-instrumentalist music
        producer, and a competitive athlete with over 55 academic medals.
        Whether I'm designing minimalist digital experiences or curating my
        collection of 150+ rare Hot Wheels, I thrive at the intersection of
        rigorous technical engineering and creative discipline.
      </SectionText>
      <ActionRow
        buttons={[
          { text: "Email me", boxColor: "bg-orange-500", pattern: "mail" },
          { text: "DM me on X", boxColor: "bg-teal-500", pattern: "x" },
          {
            text: "Connect on LinkedIn",
            boxColor: "bg-sky-500",
            pattern: "linkedin",
          },
        ]}
      />
    </SectionRoot>
  );
}
