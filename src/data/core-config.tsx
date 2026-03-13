
import {
  HiOutlineCodeBracket,
  HiOutlineLightBulb,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineLink,
  HiOutlineQuestionMarkCircle,
  HiOutlineAcademicCap,
  HiCodeBracket,
  HiOutlineUser,
} from "react-icons/hi2";
import { Text, SmartLink, InlineCode } from "@once-ui-system/core";

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

export const PERSONA = {
  firstName: "Divyanshu",
  lastName: "Dhruv",
  header: "17 yo",
  name: `Divyanshu Dhruv`,
  role: "Full-stack Developer",
  avatar: "/mypfpagain.webp",
  email: "divyanshudhruv@proton.me",
  location: "Vadodara, India",
  languages: ["English", "Hindi", "French", "Spanish"],
  phone: "haw, why? </3",
  mailLink: "https://github.com/divyanshudhruv",
  extras: "something, idk?",
};

export const PROFILE = {
  links: [
    [
      {
        src: "/trademarks/github.webp",
        href: "https://github.com/divyanshudhruv",
        text: "GitHub",
      },
      {
        src: "/trademarks/linkedin2.webp",
        href: "https://linkedin.com/in/divyanshudhruv",
        text: "Linkedin",
      },
      {
        src: "/trademarks/leetcode.webp",
        href: "https://leetcode.com/u/divyanshudhruv",
        text: "Leetcode",
      },
    ],
    [
      {
        src: "/trademarks/bandlab.webp",
        href: "https://bandlab.com/divyanshudhruv",
        text: "Bandlab",
      },
      {
        src: "/trademarks/peerlist.webp",
        href: "https://peerlist.io/divyanshudhruv",
        text: "Peerlist",
      },
      {
        src: "/trademarks/percept.webp",
        href: "https://percept-network.vercel.app",
        text: "Percept Network",
      },
    ],
  ],
  chips: [
    [
      {
        icon: <HiOutlineCodeBracket />,
        text: (
          <span>
            Full-stack Developer{" "}
            <SmartLink href="https://sonamii.in">
              <u>@Once UI</u>
            </SmartLink>
          </span>
        ),
        href: "#",
      },
    ],
    [
      {
        icon: <HiOutlineLightBulb />,
        text: (
          <span>
            Founder{" "}
            <SmartLink href="https://covane.in">
              <u>@Basalt3</u>
            </SmartLink>
            ,
          </span>
        ),
        href: "#",
      },
    ],
    [
      {
        icon: <HiOutlineLightBulb />,
        text: (
          <span>
            Co-founder{" "}
            <SmartLink href="https://covane.in">
              <u>@Covane</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://covane.in">
              <u>@Next Bench</u>
            </SmartLink>
            ,{" "}
            <SmartLink href="https://covane.in">
              <u>@PN</u>
            </SmartLink>
            ,
          </span>
        ),
        href: "#",
      },
    ],

    [
      {
        icon: <HiOutlineMapPin />,
        text: (
          <span>
            Vadodara, India{" "}
            {/* <SmartLink href="https://sonamii.in">
                      @sonamii
                    </SmartLink> */}
          </span>
        ),
        href: "",
      },
      {
        icon: <HiOutlineClock />,
        text: (
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
        ),
        href: "",
      },
    ],
    [
      {
        icon: <HiOutlinePhone />,
        text: (
          <span>
            haw, why? &lt;/3
            {/* <SmartLink href="https://sonamii.in">
                      @sonamii
                    </SmartLink> */}
          </span>
        ),
        href: "#",
      },
      {
        icon: <HiOutlineEnvelope />,
        text: (
          <span
            className="pointer-events-none user-select-none blur-sm"
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
            }}
            unselectable="on"
          >
            <SmartLink href="#">
              <u>divyanshudhruv@proton.me</u>
            </SmartLink>
          </span>
        ),
        href: "#",
      },
    ],
    [
      {
        icon: <HiOutlineLink />,
        text: (
          <span>
            https://github.com/
            <SmartLink href="https://sonamii.in">
              <u> divyanshudhruv</u>
            </SmartLink>
          </span>
        ),
        href: "#",
      },
      {
        icon: <HiOutlineQuestionMarkCircle />,
        text: <span>something, idk?</span>,
        href: "#",
      },
    ],
  ],
};

export const BIO = {
  description: [<>   👋 Hi, I'm a full-stack developer with <InlineCode>5+</InlineCode>{" "}
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
            (sometimes).</>, <>    Passionate about exploring new technologies and turning ideas into
            reality through polished, thoughtfully crafted personal projects 🗃️.</>,<> Creator of{" "}
            <SmartLink href="https://covane.in">
              <InlineCode>Covane Space 🌌</InlineCode>
            </SmartLink>{" "}
            and{" "}
            <SmartLink href="https://percept-network.vercel.app">
              <InlineCode>Percept Network 🏮</InlineCode>
            </SmartLink>
            .</>],
  stacks: [  "html",
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
  "html",],
  github_username: "divyanshudhruv",
};

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
    ongoing: true,
    date: "2026 - Present",
    href: "#",
    logo: "/trademarks/basalt.webp",
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
    ongoing: true,

    role: "Basalt3",
    date: "2026 - Present",
    href: "#",
    logo: "/trademarks/basalt.webp",
    tags: ["AI Agents", "Social Network", "Next.js", "TypeScript", "Supabase"],
    description:
      "Social platform specifically designed for AI agents to connect and share.",
  },
  {
    id: "next-bench-project",
    title: "Next Bench",
    ongoing: true,

    role: "Sonamii",
    date: "Feb 2025 - Present",
    href: "#",
    logo: "/trademarks/sonamii.webp",
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
    companyLogo: "/trademarks/basalt.webp",
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
    companyLogo: "/trademarks/sonamii.webp",
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
    companyLogo: "/trademarks/once-ui.webp",
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
    companyLogo: "/trademarks/whj.webp",
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

export const TESTIMONIALS = [
  {
    src: "/trademarks/x.webp",
    href: "https://via.placeholder.com/150",
    name: "Divyanshu Dhruv",
    desc: "Software Engineer",
    body: "I love working with Divyanshu. He is a great team player.",
  },
  {
    src: "/trademarks/x.webp",
    href: "https://via.placeholder.com/150",
    name: "Divyanshu Dhruv",
    desc: "Software Engineer",
    body: "I love working with Divyanshu. He is a great team player.",
  },
  {
    src: "/trademarks/x.webp",
    href: "https://via.placeholder.com/150",
    name: "Divyanshu Dhruv",
    desc: "Software Engineer",
    body: "I love working with Divyanshu. He is a great team player.",
  },
  {
    src: "/trademarks/x.webp",
    href: "https://via.placeholder.com/150",
    name: "Divyanshu Dhruv",
    desc: "Software Engineer",
    body: "I love working with Divyanshu. He is a great team player.",
  },
  {
    src: "/trademarks/x.webp",
    href: "https://via.placeholder.com/150",
    name: "Divyanshu Dhruv",
    desc: "Software Engineer",
    body: "I love working with Divyanshu. He is a great team player.",
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

export const GALLERY = ["/img.jpeg", "/i1.png"];
