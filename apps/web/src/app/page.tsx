import { Column, Flex, RadialGauge } from "@once-ui-system/core";
import { FluidGradientText } from "@/components/fluid-gradient-text";

import SiteHeader from "@/components/sections/site-header";
import HeroSection from "@/components/sections/hero-section";
import GitHubSection from "@/components/sections/github-section";
import PhotoGrid from "@/components/sections/photo-grid";
import AboutSection from "@/components/sections/about-section";
import MapSection from "@/components/sections/map-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import WidgetsSection from "@/components/sections/widgets-section";
import AwardsSection from "@/components/sections/awards-section";
import BlogsSection from "@/components/sections/blogs-section";
import InsightsSection from "@/components/sections/insights-section";
import TimerSection from "@/components/sections/timer-section";
import CreditsFooter from "@/components/sections/credits-footer";
// import MusicWidget from "@/components/music-widget";

export default function Home() {
  return (
    <>
      {/* <Flex
        fit
        style={{
          position: "fixed",
          right: "35px",
          bottom: "20px",
          margin: "auto",
          zIndex: 99999999999,
        }}
      >
            <MusicWidget/>

		</Flex> */}
       
      <Flex
        fillWidth
        fitHeight
        minWidth="100vw"
        padding={1}
        horizontal="center"
        direction="column"
        gap={1}
        vertical="start"
        className="h-[vh]"
      >
        <SiteHeader />
        <Flex
          className="rounded-3xl bg-accent"
          fillHeight
          fillWidth
          padding={3}
          direction="column"
          horizontal="center"
          vertical="start"
        >
          <Column
            fillWidth
            fillHeight
            horizontal="start"
            vertical="start"
            maxWidth="s"
            gap={4}
          >
            <HeroSection id="hero"/>
            <GitHubSection id="github"/>
            <PhotoGrid id="photo"/>
            <AboutSection id="about"/>
            <MapSection id="map"/>
            <SkillsSection id="skills"/>
            <ExperienceSection id="experience"/>
            <ProjectsSection id="projects"/>
            <WidgetsSection id="widgets"/>
            <AwardsSection id="awards"/>
            <BlogsSection id="blogs"/>
            <InsightsSection id="insights"/>
            <TimerSection id="timer"/>
            <CreditsFooter id="credits"/>
          </Column>
        </Flex>
        <Flex fillWidth>
          <FluidGradientText text="divyanshudhruv" />
        </Flex>
      </Flex>
    </>
  );
}
