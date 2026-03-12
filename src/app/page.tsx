"use client";

import {
  Background,
  Column,
  Flex,
  MatrixFx,
  Row,
  Mask,
  Avatar,
  Text,
  SmartLink,
  Grid,
  IconButton,
  List,
  InlineCode,
  Fade,
  AutoScroll,
  Logo,
  Icon,
  ThemeSwitcher,
  Accordion,
  ListItem,
  Tag,
  Button,
  Line,
} from "@once-ui-system/core";
import ContributionGraph from "../components/ContributionGraph";

import { DM_Mono } from "next/font/google";
import {
  HiArrowRight,
  HiCheckBadge,
  HiCodeBracket,
  HiMapPin,
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiOutlineCodeBracket,
  HiOutlineEnvelope,
  HiOutlineLightBulb,
  HiOutlineLink,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineQuestionMarkCircle,
  HiOutlineUser,
  HiTrophy,
} from "react-icons/hi2";
import Image from "next/image";
import Experience from "@/components/exp";
import { Projects } from "@/components/Projects";

const suse = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

const programmingStacks = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "vite",
  "vercel",
  "tailwind",
  "bootstrap",
  "firebase",
  "supabase",
  "mysql",
  "java",
  "figma",
  "vitest",
  "vue",
  "python",
  "pytorch",
  "rabbitmq",
  "gitlab",
  "cs",
  "angular",
  "arduino",
  "bash",
  "bun",
  "docker",
  "dotnet",
  "gcp",
  "git",
  "gherkin",
  "graphql",
  "htmx",
  "md",
  "matlab",
  "materialui",
  "mongodb",
  "netlify",
  "nodejs",
  "npm",
  "pnpm",
  "opencv",
  "r",
  "ubuntu",
  "replit",
  "solidity",
  "tensorflow",
  "terraform",
  "threejs",
  "p5js",
  "express",
  "html",
];

// Sample data for testing
export const EDUCATION = [
  {
    companyLogo: "/school.webp",
    companyText: "DPSV",
    current: true,
    postings: [
      {
        icon: <HiOutlineAcademicCap />,
        jobTitle: "Senior Secondary",
        employmentType: "Student",
        fromDate: "2024",
        toDate: "2026",
        responsibilities: [
          "Currently pursuing Senior Secondary education with focus on Science and Mathematics.",
          "Developing advanced problem-solving and analytical skills.",
          "Preparing for competitive examinations and higher studies.",
        ],
        tags: [
          "Science",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Computer Science",
        ],
      },
    ],
  },
  {
    companyLogo: "/school.webp",
    companyText: "SPAD",
    postings: [
      {
        icon: <HiOutlineAcademicCap />,
        jobTitle: "Primary + Higher Secondary",
        employmentType: "Student",
        fromDate: "2015",
        toDate: "2024",
        responsibilities: [
          "Completed comprehensive education from primary through higher secondary levels.",
          "Built strong foundation in core subjects and developed analytical thinking.",
          "Actively participated in extracurricular activities and competitions.",
        ],
        tags: [
          "Science",
          "Mathematics",
          "Computers",
          "Problem Solving",
          "General Studies",
        ],
      },
    ],
  },
];

// Projects data
export const PROJECTS = [
  {
    id: "covane-2026",
    title: "COVANE",
    role: "Basalt3",
    date: "2026 - Present",
    href: "#",
    logo: "/basalt.webp",
    tags: [
      "AI Agents",
      "Identity",
      "Discovery",
      "Passport",
      "Next.js",
      "TypeScript",
    ],
    description:
      "AI agent identity and passport system with discovery features.",
  },
  {
    id: "percept-network",
    title: "Percept Network",
    role: "Basalt3",
    date: "2026 - Present",
    href: "#",
    logo: "/basalt.webp",
    tags: ["AI Agents", "Social Network", "Next.js", "TypeScript", "Supabase"],
    description:
      "Social platform specifically designed for AI agents to connect and share.",
  },
  {
    id: "next-bench-project",
    title: "Next Bench",
    role: "Sonamii",
    date: "Feb 2025 - Present",
    href: "#",
    logo: "/sonamii.webp",
    tags: [
      "Artificial Intelligence",
      "Full-Stack Development",
      "Project Management",
      "Backend Development",
      "Next.js",
      "TypeScript",
    ],
    description:
      "Next Bench is a smart and user-friendly web application that helps students discover best institutions through advanced search and detailed school comparisons. It features NextAI, an intelligent assistant to guide users in making informed decisions. 🚀",
  },
  {
    id: "re-folio",
    title: "ReFolio",
    role: "Self Employed",
    date: "2025",
    href: "https://github.com",
    logo: "/selfemp.webp",
    tags: ["TypeScript", "React", "Next.js", "Portfolio", "Open Source"],
    description:
      "🌃 Transform Your Resume 📄 into a Stunning Portfolio ⚡ | Open-Source 🔓",
  },
  {
    id: "hellolink",
    title: "HelloLink",
    role: "Self Employed",
    date: "2025",
    href: "https://github.com",
    logo: "/selfemp.webp",
    tags: ["TypeScript", "AI", "Link Management", "Open Source", "Next.js"],
    description:
      "Say 👋 Hello to your links, all in one place 🏠. An AI powered 🤖, open-source alternative to Linktree 🌴.",
  },
];

// Sample data for testing
export const EXPERIENCES = [
  {
    companyLogo: "/basalt.webp",
    current: true,
    open: true,
    companyText: "Basalt3",
    postings: [
      {
        icon: <HiCodeBracket />,
        jobTitle: "Design Engineer",
        employmentType: "Full time",
        fromDate: "2026",
        toDate: "Present",
        responsibilities: [
          "Worked on the registry and React component library.",
          "Designed and build Pro application components and blocks, from Figma.",
          "Created various Agentic workflows + MCP servers + HTTP Endpoints",
        ],
        tags: [
          "TypeScript",
          "Supabase",
          "SCSS",
          "Open Source",
          "MCP Server",
          "AI Agents",
        ],
      },
    ],
  },
  {
    companyLogo: "/sonamii.webp",
    companyText: "Sonamii",
    current: false,
    open: true,
    postings: [
      {
        icon: <HiCodeBracket />,
        jobTitle: "Lead Developer",
        employmentType: "Full time",
        fromDate: "2025",
        toDate: "Present",
        responsibilities: [
          "Led the development of Next Bench, a platform for building and sharing educational AI agents.",
          "Designed and built the platform's frontend and backend, using Next.js and Supabase.",
          "Collaborated with a team of developers to deliver high-quality software.",
        ],
        tags: ["TypeScript", "Next.js", "Supabase", "SCSS", "EduTech"],
      },
    ],
  },
  {
    companyLogo: "/once-ui.webp",
    companyText: "Once UI",
    current: false,

    postings: [
      {
        icon: <HiOutlineLightBulb />,
        jobTitle: "External Collaborator",
        employmentType: "Part time",
        fromDate: "2024",
        toDate: "Present",
        responsibilities: [
          "Contributed to open-source projects and provided technical guidance.",
          "Collaborated with cross-functional teams on various initiatives.",
          "Participated in code reviews and provided feedback.",
        ],
        tags: ["React", "TypeScript", "Next.js", "Jest", "Docker"],
      },
    ],
  },
  {
    companyLogo: "/selfemp.webp",
    companyText: "Self Employed",
    current: false,
    postings: [
      {
        icon: <HiCodeBracket />,
        jobTitle: "Full Stack Developer",
        employmentType: "Full time",
        fromDate: "2024",
        toDate: "Present",
        responsibilities: [
          "Built and launched MVP from scratch using MERN stack.",
          "Designed RESTful APIs and database schemas.",
          "Implemented authentication and payment systems.",
        ],
        tags: ["Node.js", "Express", "MongoDB", "React", "Stripe"],
      },
      {
        icon: <HiCodeBracket />,
        jobTitle: "Frontend Developer",
        employmentType: "Full time",
        fromDate: "2020",
        toDate: "2024",
        responsibilities: [
          "Developed responsive UI components using React.",
          "Collaborated with UX team on design implementation.",
          "Optimized application performance and loading times.",
        ],
        tags: ["React Native", "JavaScript", "CSS", "HTML", "Webpack"],
      },
    ],
  },
  {
    companyLogo: "/whj.webp",
    companyText: "WhiteHat Jr.",
    current: false,
    postings: [
      {
        icon: <HiOutlineUser />,
        jobTitle: "Apprentice",
        employmentType: "Part time",
        fromDate: "2020",
        toDate: "2022",
        responsibilities: [
          "Learned programming and web development fundamentals.",
          "Built simple web applications and games.",
          "Participated in coding challenges, competitions and hackathons.",
        ],
        tags: ["Unity", "HTML", "JavaScript", "React", "Python", "SpaceTech"],
      },
    ],
  },
];

const otherTechnologies = [
  "anaconda",
  "robloxstudio",
  "vscode",
  "discord",
  "sublime",
  "opencv",
  "r",
  "ubuntu",
  "replit",
  "solidity",
  "tensorflow",
  "terraform",
];

export default function Home() {
  return (
    <Row
      fillWidth
      horizontal="center"
      vertical="start"
      style={{ minHeight: "100vh" }}
    ><LongDashed position="left" />
      <Column maxWidth="s" borderX="neutral-alpha-weak" fillWidth fillHeight>
        <Dashed />
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Some Marketing
          </Text>
        </Flex>
        <Flex
          fillWidth
          fillHeight
          maxHeight={12}
          minHeight={12}
          borderBottom="neutral-alpha-weak"
          center
        >
          <Mask maxWidth="m" x={50} y={50} radius={50}>
            <MatrixFx
              size={1.5}
              spacing={5}
              opacity={50}
              fps={24}
              colors={["brand-solid-weak"]}
              flicker
            />
          </Mask>
        </Flex>
        <Row
          fillWidth
          borderBottom="neutral-alpha-weak"
          horizontal="start"
          vertical="center"
        >
          <Flex fit borderRight="neutral-alpha-weak">
            {" "}
            <Avatar
              src="/pfp.webp"
              size="xl"
              padding={"2"}
              border="neutral-alpha-medium"
            />
          </Flex>
          <Column fillWidth vertical="end" horizontal="center" fillHeight>
            <Flex
              fillWidth
              fillHeight
              paddingX={1}
              maxHeight={2}
              minHeight={2}
              borderBottom="neutral-alpha-weak"
              vertical="center"
              horizontal="start"
            >
              <Text variant="code-default-xs" onBackground="neutral-weak">
                17 yo{" "}
              </Text>
            </Flex>
            <Flex
              fillWidth
              fillHeight
              paddingX={1}
              maxHeight={3}
              minHeight={3}
              borderBottom="neutral-alpha-weak"
              vertical="center"
              horizontal="start"
              gap={1}
            >
              <Text
                variant="display-default-s"
                onBackground="neutral-strong"
                className="font-reckless-light"
              >
                Divyanshu Dhruv
              </Text>
              <Row center gap={0.5}>
                {" "}
                <Text onBackground="accent-weak">
                  <HiCheckBadge size={25} />
                </Text>{" "}
                
              </Row>
            </Flex>
            <Flex
              fillWidth
              fillHeight
              paddingX={1}
              maxHeight={2}
              minHeight={2}
              vertical="center"
              horizontal="between"
            >
              <Text variant="code-default-xs" onBackground="neutral-weak">
                Full Stack Developer
              </Text>{" "}
              <ThemeSwitcher
                style={{ scale: "0.7", marginLeft: "32px !important" }}
              />
            </Flex>
          </Column>
        </Row>
        <Dashed />
        <Column
          fillWidth
          borderBottom="neutral-alpha-weak"
          horizontal="start"
          vertical="center"
          padding={1}
          gap={0.3}
        >
          <ChipSet
            icon={<HiOutlineCodeBracket />}
            text={
              <span>
                Full-stack Developer{" "}
                <SmartLink href="https://sonamii.in"><u>@Once UI</u></SmartLink>
              </span>
            }
            href="#"
          />{" "}
          <ChipSet
            icon={<HiOutlineLightBulb />}
            text={
              <span>
                Founder <SmartLink href="https://covane.in"><u>@Basalt3</u></SmartLink>
                ,
              </span>
            }
            href="#"
          />
          <ChipSet
            icon={<HiOutlineLightBulb />}
            text={
              <span>
                Co-founder{" "}
                <SmartLink href="https://covane.in"><u>@Covane</u></SmartLink>,
                <SmartLink href="https://covane.in"><u>@Next Bench</u></SmartLink>,
                <SmartLink href="https://covane.in"><u>@PN</u></SmartLink>
              </span>
            }
            href="#"
          />
          <Row fillWidth>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineMapPin />}
                text={
                  <span>
                    Vadodara, India{" "}
                    {/* <SmartLink href="https://sonamii.in">
                      @sonamii
                    </SmartLink> */}
                  </span>
                }
                href="#"
              />
            </Flex>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineClock />}
                text={
                  <span>
                    {new Date().toLocaleTimeString("en-US", {
                      timeZone: "Asia/Kolkata",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                    <Text onBackground="neutral-weak" marginX="8">
                      //{" "}
                      {`${Math.abs((new Date().getTimezoneOffset() + 5.5 * 60) / 60)} ${Math.abs((new Date().getTimezoneOffset() + 5.5 * 60) / 60) > 1 ? "HOURS" : "HOUR"} ${(new Date().getTimezoneOffset() + 5.5 * 60) % 60 > 0 ? "BEHIND" : "AHEAD"}`}
                    </Text>{" "}
                  </span>
                }
                href="#"
              />
            </Flex>
          </Row>
          <Row fillWidth>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlinePhone />}
                text={
                  <span>
                    haw, why? &lt;/3
                    {/* <SmartLink href="https://sonamii.in">
                      @sonamii
                    </SmartLink> */}
                  </span>
                }
                href="#"
              />
            </Flex>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineEnvelope />}
                text={
                  <span className="blur-sm">
                    <SmartLink href="#"><u>divyanshudhruv@proton.me</u></SmartLink>
                  </span>
                }
                href="#"
              />
            </Flex>
          </Row>
          <Row fillWidth>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineLink />}
                text={
                  <span>
                    https://github.com/
                    <SmartLink href="https://sonamii.in">
                     <u> divyanshudhruv</u>
                    </SmartLink>
                  </span>
                }
                href="#"
              />
            </Flex>
            <Flex flex={2}>
              <ChipSet
                icon={<HiOutlineQuestionMarkCircle />}
                text={<span>something, idk?</span>}
                href="#"
              />
            </Flex>
          </Row>
        </Column>
        <Row
          wrap
          fillWidth
          minHeight={4}
          gap={1}
          borderBottom="neutral-alpha-weak"
        >
          <LinkSet
            src="/github.webp"
            href="https://github.com/divyanshudhruv"
            text="GitHub"
            position="first"
          />{" "}
          <LinkSet
            src="/linkedin2.webp"
            href="https://linkedin.com/in/divyanshudhruv"
            text="Linkedin"
            position="middle"
          />{" "}
          <LinkSet
            src="/leetcode.webp"
            href="https://leetcode.com/u/divyanshudhruv"
            text="Leetcode"
            position="last"
          />
        </Row>{" "}
        <Row
          wrap
          fillWidth
          minHeight={4}
          gap={1}
          borderBottom="neutral-alpha-weak"
        >
          <LinkSet
            src="/bandlab.webp"
            href="https://bandlab.com/divyanshudhruv"
            text="Bandlab"
            position="first"
          />
          <LinkSet
            src="/peerlist.webp"
            href="https://peerlist.io/divyanshudhruv"
            text="Peerlist"
            position="middle"
          />
          <LinkSet
            src="/percept.webp"
            href="https://percept-network.vercel.app"
            text="Percept Network"
            position="last"
          />
        </Row>{" "}
        <Dashed />
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            About Me
          </Text>
        </Flex>
        <Column
          padding={1}
          fillWidth
          fitHeight
          borderBottom="neutral-alpha-weak"
          gap={1}
        >
          <Text
            variant="label-default-m"
            onBackground="neutral-medium"
            style={{ lineHeight: "1.7em" }}
          >
            👋 Hi, I'm a full-stack developer with <InlineCode>5+</InlineCode>{" "}
            years of experience (i guess so), I give strong attention to{" "}
            <InlineCode>small details</InlineCode> (kind of). I've been coding
            since I was 12. Currently, I'm creating{" "}
            <SmartLink href="https://modelcontextprotocol.io">
              <u>MCP servers</u>
            </SmartLink>{" "}
            and environments for <InlineCode>AI agents</InlineCode>. Skilled in
            <SmartLink href="https://nextjs.org">
              <u>Next.js</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://react.dev">
              <u>React</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://typescriptlang.org">
              <u>TypeScript</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://java.com">
              <u>Java</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://python.org">
              <u>Python</u>
            </SmartLink>
            , and{" "}
            <SmartLink href="https://www.r-project.org">
              <u>R</u>
            </SmartLink>
            , and modern front-end technologies; building high-quality,
            user-centric web and <InlineCode>mobile applications</InlineCode> 📱
            (sometimes).
          </Text>

          <Text
            variant="label-default-m"
            onBackground="neutral-medium"
            style={{ lineHeight: "1.7em" }}
          >
            Passionate about exploring new technologies and turning ideas into
            reality through polished, thoughtfully crafted personal projects 🗃️.
          </Text>

          <Text
            variant="label-default-m"
            onBackground="neutral-medium"
            style={{ lineHeight: "1.7em" }}
          >
            Creator of{" "}
            <SmartLink href="https://covane.in">
              <InlineCode>Covane Space 🌌</InlineCode>
            </SmartLink>{" "}
            and{" "}
            <SmartLink href="https://percept-network.vercel.app">
              <InlineCode>Percept Network 🏮</InlineCode>
            </SmartLink>
            .
          </Text>
        </Column>{" "}
        {/* <Row fillWidth fitHeight padding={1} borderBottom="neutral-alpha-weak">
         
          <AutoScroll gap={1} scrollGap={1}>
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            />
            <Testimonial
              src={"/x.webp"}
              href={"https://via.placeholder.com/150"}
              name={"Divyanshu Dhruv"}
              desc={"Software Engineer"}
              body={"I love working with Divyanshu. He is a great team player."}
            /> 

          </AutoScroll>
         
        </Row> */}
        <Flex
          fillWidth
          fitHeight
          center
          borderBottom="neutral-alpha-weak"
          paddingTop={"8"}
        >
          <ContributionGraph />
        </Flex>
        <Dashed />{" "}
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Skills & Stacks
          </Text>
        </Flex>{" "}
        <Flex
          fillWidth
          fitHeight
          vertical="center"
          horizontal="start"
          borderBottom="neutral-alpha-weak"
          padding={1}
          gap={0.97}
          wrap
        >
          <Stacks />
        </Flex>
        <Dashed />{" "}
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Experience
          </Text>
        </Flex>{" "}
        <Flex fillWidth fitHeight direction="column">
          {EXPERIENCES.map((exp, expIndex) =>
            exp.postings.map((posting, postingIndex) => (
              <Experience
                key={`${expIndex}-${postingIndex}`}
                companyLogo={exp.companyLogo}
                companyText={exp.companyText}
                posting={posting}
                current={exp.current}
                open={exp.open}
                postingIndex={postingIndex}
                totalPostings={exp.postings.length}
              />
            )),
          )}{" "}
        </Flex>{" "}
        <Dashed />
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Education
          </Text>
        </Flex>{" "}
        <Flex fillWidth fitHeight direction="column">
          {EDUCATION.map((exp, expIndex) =>
            exp.postings.map((posting, postingIndex) => (
              <Experience
                key={`${expIndex}-${postingIndex}`}
                companyLogo={exp.companyLogo}
                companyText={exp.companyText}
                current={exp.current}
                posting={posting}
                postingIndex={postingIndex}
                totalPostings={exp.postings.length}
              />
            )),
          )}
        </Flex>{" "}
        <Dashed />{" "}
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Some Images
          </Text>
        </Flex>{" "}
        <Grid
          fillWidth
          fitHeight
          columns={2}
          border="neutral-alpha-weak"
        >
          <Flex flex={2} padding={1}>
            <Flex fit radius="s" overflow="hidden">
              <img src="/img.jpeg" />
            </Flex>
          </Flex>
          <Flex flex={2} padding={1}>
            <Flex fit radius="s" overflow="hidden">
              <img src="/i1.png" />
            </Flex>
          </Flex>
          
        </Grid>
        <Dashed />{" "}
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Projects
          </Text>
        </Flex>{" "}
        <Flex fillWidth fitHeight direction="column">
          {PROJECTS.map((project, index) => (
            <Projects
              key={project.id}
              postingIndex={index}
              projects={{ tags: project.tags }}
              title={project.title}
              role={project.role}
              date={project.date}
              linkHref={project.href}
              logo={project.logo}
            />
          ))}
          <Row
            center
            fillWidth
            padding={1}
            data-border="conservative"
            borderBottom="neutral-alpha-weak"
          >
            <Button size="s">
              <Text variant="label-default-s">Load More</Text>{" "}
            </Button>
          </Row>
        </Flex>
        <Dashed />
        <Flex
          fillWidth
          fillHeight
          paddingX={1}
          maxHeight={2}
          minHeight={2}
          borderBottom="neutral-alpha-weak"
          vertical="center"
          horizontal="start"
        >
          <Text variant="code-default-xs" onBackground="neutral-weak">
            Blogs
          </Text>
        </Flex>{" "}
        <Column
          padding={1}
          fillWidth
          fitHeight
          borderBottom="neutral-alpha-weak"
          gap={1}
        >
          <Text
            variant="label-default-m"
            onBackground="neutral-medium"
            style={{ lineHeight: "1.7em" }}
          >
            I don't write blogs :)
          </Text>
        </Column>
        <Dashed />
        <Row center padding={1}>
          <Flex wrap maxWidth={40} align="center" center fillWidth>
            {" "}
            <Text
              variant="code-default-s"
              align="center"
              onBackground="neutral-weak"
              style={{ lineHeight: "1.7em" }}
            >
              Inspired by{" "}
              <SmartLink href="https://chanhdai.com/">chanhdai.com</SmartLink> &{" "}
              <SmartLink href="https://once-ui.com">once-ui.com</SmartLink>
              <br></br> Built by{" "}
              <SmartLink href="https://github.com/divyanshudhruv">
                <u>divyanshudhruv</u>
              </SmartLink>
              . The source code is available on{" "}
              <SmartLink href="https://github.com/divyanshudhruv.github.io">
                <u>GitHub</u>
              </SmartLink>
              .
            </Text>
          </Flex>
        </Row>
      </Column><LongDashed position="right"/>
    </Row>
  );
}

function LongDashed({position}: {position: "left" | "right"}) {
  return (
    <>
    {/* <Row fillWidth minWidth="12"maxWidth="12" fillHeight borderLeft={position === "left" ? "neutral-alpha-weak" : undefined} borderRight={position === "right" ? "neutral-alpha-weak" : undefined}>
      <Background
        fill
        fillHeight
        lines={{
          display: true,
          opacity: 20,
          size: "4",
          thickness: 1,
          color: "neutral-solid-medium",
        }}
      />
    </Row> */}
    
    </>
  );
}


function Stacks() {
  return (
    <>
      {" "}
      {programmingStacks.map((skill: string, index: number) => (
        <Image
          src={`https://skillicons.dev/icons?i=${skill}`}
          height={38}
          width={38}
          key={skill + index}
          alt={skill.charAt(0).toUpperCase() + skill.slice(1)}
          unoptimized
        />
      ))}
    </>
  );
}
function Testimonial({
  src,
  href,
  body,
  name,
  desc,
}: {
  src: string;
  href: string;
  body: string;
  name: string;
  desc: string;
}) {
  return (
    <Column
      fillWidth
      maxWidth={20}
      minWidth={12}
      fitHeight
      minHeight={7}
      border="neutral-alpha-weak"
      padding={1}
      radius={"s"}
      gap={1}
      vertical="between"
    >
      <Text
        variant="label-default-m"
        wrap="wrap"
        onBackground="neutral-alpha-medium"
      >
        {body}
      </Text>
      <Row center fitWidth gap={0.5}>
        <Avatar src={src} />
        <Column vertical="center" horizontal="start" gap={0.1}>
          <Text variant="label-default-s" onBackground="neutral-alpha-medium">
            {name}
          </Text>
          <Text variant="code-default-xs" onBackground="neutral-weak">
            {desc}
          </Text>
        </Column>
      </Row>
    </Column>
  );
}

function Dashed() {
  return (
    <Row fillWidth minHeight="32" borderBottom="neutral-alpha-weak">
      <Background
        fill
        fillHeight
        lines={{
          display: true,
          opacity: 20,
          size: "4",
          thickness: 1,
          color: "neutral-solid-medium",
        }}
      />
    </Row>
  );
}

function LinkSet({
  src,
  href,
  text,
  position,
}: {
  src: string;
  href: string;
  text: string;
  position: "first" | "middle" | "last";
}) {
  if (position === "first") {
    return (
      <Flex
        horizontal="between"
        vertical="center"
        flex={1}
        padding={1}
        borderRight="neutral-alpha-weak"
      >
        <Row center gap={0.5}>
          <Avatar src={src} size="m" border="neutral-alpha-weak" />
          <Text variant="label-default-m" onBackground="neutral-medium">
            {text}
          </Text>
        </Row>
        <IconButton variant="ghost" className="rotate-315" href={href}>
          <Text onBackground="neutral-weak">
            <HiArrowRight />
          </Text>
        </IconButton>
      </Flex>
    );
  }

  if (position === "middle") {
    return (
      <Flex
        horizontal="between"
        vertical="center"
        flex={1}
        padding={1}
        borderX="neutral-alpha-weak"
      >
        <Row center gap={0.5}>
          <Avatar src={src} size="m" border="neutral-alpha-weak" />
          <Text variant="label-default-m" onBackground="neutral-medium">
            {text}
          </Text>
        </Row>
        <IconButton variant="ghost" className="rotate-315" href={href}>
          <Text onBackground="neutral-weak">
            <HiArrowRight />
          </Text>
        </IconButton>
      </Flex>
    );
  }

  if (position === "last") {
    return (
      <Flex
        horizontal="between"
        vertical="center"
        flex={1}
        padding={1}
        borderLeft="neutral-alpha-weak"
      >
        <Row center gap={0.5}>
          <Avatar src={src} size="m" border="neutral-alpha-weak" />
          <Text variant="label-default-m" onBackground="neutral-medium">
            {text}
          </Text>
        </Row>
        <IconButton variant="ghost" className="rotate-315" href={href}>
          <Text onBackground="neutral-weak">
            <HiArrowRight />
          </Text>
        </IconButton>
      </Flex>
    );
  }

  return null;
}

function ChipSet({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
  href: string;
}) {
  return (
    <Row fillWidth maxHeight={2} vertical="center" horizontal="start" gap={1}>
      <Flex
        radius="m"
        borderStyle="solid"
        width={2}
        height={2}
        border="neutral-weak"
        center
      >
        <Flex
          radius="s"
          center
          borderStyle="solid"
          border="neutral-alpha-weak"
          background="neutral-alpha-weak"
          width={1.5}
          height={1.5}
        >
          <Text onBackground="neutral-weak" variant="label-default-s">
            {icon}
          </Text>
        </Flex>
      </Flex>
      <Text variant="code-default-xs" onBackground="neutral-medium">
        {text}
      </Text>
    </Row>
  );
}
