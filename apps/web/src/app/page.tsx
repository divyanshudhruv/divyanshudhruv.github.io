"use client";

import { Column, Flex } from "@once-ui-system/core";
import { FluidGradientText } from "@/components/fluid-gradient-text";
import AboutSection from "@/components/sections/about-section";
import AwardsSection from "@/components/sections/awards-section";
import BlogsSection from "@/components/sections/blogs-section";
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
import WidgetsSection from "@/components/sections/widgets-section";
import CrowdCanvas from "./../../../../packages/ui/src/components/ui/skiper-ui/skiper39";
import { ProgressiveBlur } from "./../../../../packages/ui/src/components/ui/skiper-ui/skiper41";
import { Skiper19Line } from "./../../../../packages/ui/src/components/ui/skiper-ui/skiper19";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <>
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          zIndex: 90009999,
        }}
      >
        <Flex direction="column" horizontal="center" vertical="center" gap={1}>
          {" "}
          <LinePath
            className="absolute right-[-40%] top-0 z-10000"
            scrollYProgress={scrollYProgress}
          />
        </Flex>
      </div> */}
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
            className="rounded-3xl bg-accent"
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
            className="relative rounded-3xl bg-accent"
            overflow="hidden"
            style={{ minHeight: "55svh", minWidth: "100%" }}
          >
            <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
          </Flex>
        </Flex>
        <Flex fillWidth paddingBottom={3}>
          <FluidGradientText text="divyanshudhruv" />
        </Flex>
      </Flex>
      {/* <div className="relative h-[200vh] w-full bg-[#FAFDEE]">
        <Skiper19Line className="sticky top-0 h-screen w-full" />
      </div> */}
      <ProgressiveBlur
        position="bottom"
        backgroundColor="#f5f4f3"
        height="90px"
      />
    </>
  );
}

// const LinePath = ({
//   className,
//   scrollYProgress,
// }: {
//   className: string;
//   scrollYProgress: any;
// }) => {
//   const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

//   return (
//     <svg
//       width="1278"
//       height="2319"
//       viewBox="0 0 1278 2319"
//       fill="none"
//       overflow="visible"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//     >
//       <motion.path
//         d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
//         stroke="#C2F84F"
//         strokeWidth="20"
//         style={{
//           pathLength,
//           strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
//         }}
//       />
//     </svg>
//   );
// };
