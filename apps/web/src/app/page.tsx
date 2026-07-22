"use client";

import CrowdCanvas from "@homepage/ui/skiper-ui/crowd-canvas";
import { ProgressiveBlur } from "@homepage/ui/skiper-ui/progressive-blur";
import { Column, Flex } from "@once-ui-system/core";
import { FluidGradientText } from "@/components/fluid-gradient-text";
import AboutSection from "@/components/sections/about-section";
import CreditsFooter from "@/components/sections/credits-footer";
import ExperienceSection from "@/components/sections/experience-section";
import GitHubSection from "@/components/sections/github-section";
import HeroSection from "@/components/sections/hero-section";
import InsightsSection from "@/components/sections/insights-section";
import MapSection from "@/components/sections/map-section";
import PhotoGrid from "@/components/sections/photo-grid";
import ProjectsSection from "@/components/sections/projects-section";
import SiteHeader from "@/components/sections/site-header";
import SkillsSection from "@/components/sections/skills-section";
import TimerSection from "@/components/sections/timer-section";
export default function Home() {
  return (
    <>
      <ProgressiveBlur position="top" backgroundColor="#f5f4f3" height="0px" />
      <Flex
        fillWidth
        fitHeight
        minWidth="100vw"
        paddingX={1.5}
        paddingY={1.5}
        horizontal="center"
        direction="column"
        gap={1}
        vertical="start"
        className="h-[vh]"
      >
        <SiteHeader />{" "}
        <Flex direction="column" fitHeight fillWidth>
          <Flex
            className="rounded-t-3xl rounded-b-0 bg-accent "
            fillHeight
            fillWidth
            paddingX={2}
            paddingY={2}
            direction="column"
            horizontal="center"
            vertical="start"
          >
            {" "}
            <Column
              fillWidth
              fillHeight
              horizontal="start"
              vertical="start"
              maxWidth="s"
              gap={4}
            >
              <HeroSection id="hero" />
              <GitHubSection id="github" />
              <PhotoGrid id="photo" />
              <AboutSection id="about" />
              <MapSection id="map" />
              <SkillsSection id="skills" />
              <ExperienceSection id="experience" />
              <ProjectsSection id="projects" />
              {/* <WidgetsSection id="widgets" />
          <AwardsSection id="awards" />
          <BlogsSection id="blogs" /> */}
              <InsightsSection id="insights" />
              <TimerSection id="timer" />
              <CreditsFooter id="credits" />
            </Column>
          </Flex>
          <Flex
            fillWidth
            className="relative rounded-t-0 rounded-b-3xl bg-accent "
            overflowX="hidden"
            overflowY="hidden"
            style={{ minHeight: "60svh", minWidth: "100%" }}
          >
            <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
          </Flex>
        </Flex>
        <Flex fillWidth paddingBottom={0.75}>
          <FluidGradientText text="divyanshudhruv" />
        </Flex>
      </Flex>
      {/* <div className="relative h-[200vh] w-full bg-[#FAFDEE]">
        <Skiper19Line className="sticky top-0 h-screen w-full" />
      </div> */}
      <ProgressiveBlur
        position="bottom"
        backgroundColor="#f5f4f3"
        height="110px"
      />
    </>
  );
}
