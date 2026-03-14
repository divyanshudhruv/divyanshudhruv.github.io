import TimeDisplay from "@/components/TimeDisplay";
import { InlineCode, SmartLink, Text } from "@once-ui-system/core";
import {
  HiCodeBracket,
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
} from "react-icons/hi2";

// Image paths as relative strings
const IMAGE_PATHS = {
  mypfp: "/mypfpagain.webp",
  githubLogo: "/trademarks/github.webp",
  linkedinLogo: "/trademarks/linkedin2.webp",
  leetcodeLogo: "/trademarks/leetcode.webp",
  bandlabLogo: "/trademarks/bandlab.webp",
  peerlistLogo: "/trademarks/peerlist.webp",
  perceptLogo: "/trademarks/percept.webp",
  schoolLogo: "/school.webp",
  basaltLogo: "/trademarks/basalt.webp",
  sonamiiLogo: "/trademarks/sonamii.webp",
  selfempLogo: "/selfe.png",
  onceuiLogo: "/trademarks/once-ui.webp",
  whjLogo: "/trademarks/whj.webp",
  xLogo: "/trademarks/x.webp",
  img1: "/img.jpeg",
  img2: "/i1.png",
  codeforces:"/trademarks/cf.webp"
} as const;

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
  header: "17, One pixel at a time.",
  name: `Divyanshu Dhruv`,
  role: "Full-stack Developer",
  avatar: IMAGE_PATHS.mypfp,
  email: "divyanshudhruv@proton.me",
  location: "Vadodara, India",
  languages: ["English", "Hindi", "French", "Spanish"],
  mailLink: "https://github.com/divyanshudhruv",
};

export const PROFILE = {
  links: [
    [
      {
        src: IMAGE_PATHS.githubLogo,
        href: "https://github.com/divyanshudhruv",
        text: "GitHub",
      },
      {
        src: IMAGE_PATHS.linkedinLogo,
        href: "https://linkedin.com/in/divyanshudhruv",
        text: "Linkedin",
      },
      {
        src: IMAGE_PATHS.leetcodeLogo,
        href: "https://leetcode.com",
        text: "Leetcode",
      },
    ],
    [
      {
        src: IMAGE_PATHS.bandlabLogo,
        href: "https://bandlab.com",
        text: "Bandlab",
      },
      {
        src: IMAGE_PATHS.peerlistLogo,
        href: "https://peerlist.io/divyanshudhruv",
        text: "Peerlist",
      },
      {
        src: IMAGE_PATHS.xLogo,
        href: "https://x.com",
        text: "X",
      },
    ],
  ],
  chips: [
    [
      {
        icon: <HiOutlineCodeBracket />,
        text: (
          <span>
            Contributing heavily to{" "}
            <SmartLink href="https://github.com/once-ui-system">
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
            Brewing up{" "}
            <SmartLink href="https://github.com/basalt3">
              <u>@Basalt3</u>
            </SmartLink>
           {" "}and{" "}
            <SmartLink href="https://github.com/basalt3/covane">
              <u>@Covane </u>
            </SmartLink>
         .
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
            <SmartLink href="https://linkedin.com/company/nextbench">
              <u>@Next Bench</u>
            </SmartLink>
          </span>
        ),
        href: "#",
      },
    ],

    [
      {
        icon: <HiOutlineMapPin />,
        text: <span>Vadodara, India </span>,
        href: "",
      },
      {
        icon: <HiOutlineClock />,
        text: <TimeDisplay />,
        href: "",
      },
    ],
    [
      {
        icon: <HiOutlinePhone />,
        text: <span>haw, why? &lt;/3</span>,
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
              <u>iwillnotgivemyemail@no.no</u>
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
            <SmartLink href="https://github.com/divyanshudhruv">
              <u> divyanshudhruv</u>
            </SmartLink>
          </span>
        ),
        href: "#",
      },
      {
        icon: <HiOutlineQuestionMarkCircle />,
        text: <span>Codeforces: <SmartLink href="#">⁓800</SmartLink></span>,
        href: "#",
      },
    ],
  ],
};

export const BIO = {
  description: [
    <>
      {" "}
      👋 Hi, I'm a full-stack developer with <InlineCode>5+</InlineCode> years
      of experience (<InlineCode>i guess so...</InlineCode>), I give strong attention to{" "}
      <InlineCode>small details</InlineCode> (kind of). I've been coding since I
      was 12. Currently, I'm creating{" "}
      <SmartLink href="https://modelcontextprotocol.io">
        <u>MCP servers</u>
      </SmartLink>{" "}
      and environments for <InlineCode>AI agents</InlineCode>. 
    </>,
    <>Skilled in
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
      , and modern front-end technologies; building high-quality, user-centric
      web and <InlineCode>mobile applications</InlineCode> 📱 (sometimes). Passionate about exploring new technologies and turning ideas into reality
      through polished, thoughtfully crafted personal projects 🗃️.
   </>,
  
     
    <>
      {" "}
      Creator of{" "}
      <SmartLink href="https://github.com/basalt3/covane">
        <InlineCode>Covane Space 🌌</InlineCode>
      </SmartLink>{" "}
      and{" "}
      <SmartLink href="https://github.com/basalt3/percept-network">
        <InlineCode>Percept Network 🏮</InlineCode>
      </SmartLink>
    </>,
  ],
  stacks: [
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
  ],
  github_username: "divyanshudhruv",
};

// Sample data for testing
export const EDUCATION = [
  {
    companyLogo: IMAGE_PATHS.schoolLogo,
    companyText: "DPSV",
    current: true,
    open: true,
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
    companyLogo: IMAGE_PATHS.schoolLogo,
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
    href: "https://github.com/basalt3/covane",
    logo: IMAGE_PATHS.basaltLogo,
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
    href: "https://github.com/basalt3/percept-network",
    logo: IMAGE_PATHS.basaltLogo,
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
    href: "https://next-bench-dev.vercel.app",
    logo: IMAGE_PATHS.sonamiiLogo,
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
    href: "https://re-folio.vercel.app",
    logo: IMAGE_PATHS.selfempLogo,
    tags: ["TypeScript", "React", "Next.js", "Portfolio", "Open Source"],
    description:
      "🌃 Transform Your Resume 📄 into a Stunning Portfolio ⚡ | Open-Source 🔓",
  },
  {
    id: "hellolink",
    title: "HelloLink",
    role: "Self Employed",
    date: "2025",
    href: "https://hellolink.vercel.app",
    logo: IMAGE_PATHS.selfempLogo,
    tags: ["TypeScript", "AI", "Link Management", "Open Source", "Next.js"],
    description:
      "Say 👋 Hello to your links, all in one place 🏠. An AI powered 🤖, open-source alternative to Linktree 🌴.",
  },
];

// Sample data for testing
export const EXPERIENCES = [
  {
    companyLogo: IMAGE_PATHS.basaltLogo,
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
    companyLogo: IMAGE_PATHS.sonamiiLogo,
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
    companyLogo: IMAGE_PATHS.onceuiLogo,
    companyText: "Once UI",
    current: false,

    postings: [
      {
        icon: <HiOutlineLightBulb />,
        jobTitle: "Open Source Contributor",
        employmentType: "Part time",
        fromDate: "2025",
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
    companyLogo: IMAGE_PATHS.selfempLogo,
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
    companyLogo: IMAGE_PATHS.whjLogo,
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
    src: IMAGE_PATHS.xLogo,
    href: "#",
    name: "m9!hj2k",
    desc: "51j8987%",
    body: "tk#!789!%34567gh123",
  },
  {
    src: IMAGE_PATHS.xLogo,
    href: "#",
    name: "!#$56756",
    desc: "jh34567*&",
    body: "!@#$%^&*()_+=?<>{}|",
  },
  {
    src: IMAGE_PATHS.xLogo,
    href: "#",
    name: "7654321",
    desc: "&^%$#@!",
    body: "!@#$%^&*()_+=-[]\\;'",
  },
  {
    src: IMAGE_PATHS.xLogo,
    href: "#",
    name: "8765432",
    desc: "&^%$#@!",
    body: "!@#$%^&*()_+=-[]\\;'",
  },
  {
    src: IMAGE_PATHS.xLogo,
    href: "#",
    name: "!#$%@^",
    desc: "&^%$#@!",
    body: "!@#$%^&*()_+=-[]\\;'",
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

export const GALLERY = [IMAGE_PATHS.img1, IMAGE_PATHS.img2];
