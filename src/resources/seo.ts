const baseURL = "https://divyanshudhruv.is-a.dev";

interface MetaPage {
  path: string;
  title: string;
  description: string;
  image: string;
  canonical: string;
  robots: string;
  alternates: { href: string; hrefLang: string }[];
}

const meta: Record<string, MetaPage> = {
  home: {
    path: "/",
    title: "Divyanshu Dhruv — Portfolio",
    description:
      "Welcome to my digital portfolio. I am a passionate developer and designer specializing in building accessible, high-performance web experiences using Next.js and modern web technologies.",
    image: "/images/og/home.jpg",
    canonical: "https://divyanshudhruv.is-a.dev",
    robots: "index,follow",
    alternates: [{ href: "https://divyanshudhruv.is-a.dev", hrefLang: "en" }],
  },
  projects: {
    path: "/projects",
    title: "Projects | Divyanshu Dhruv",
    description: "Explore my past projects, case studies, and open-source contributions.",
    image: "/images/og/home.jpg",
    canonical: "https://divyanshudhruv.is-a.dev/projects",
    robots: "index,follow",
    alternates: [{ href: "https://divyanshudhruv.is-a.dev/projects", hrefLang: "en" }],
  },
  others: {
    path: "/others",
    title: "Others | Divyanshu Dhruv",
    description: "A timeline of my professional experience, awards, education, and other endeavors.",
    image: "/images/og/home.jpg",
    canonical: "https://divyanshudhruv.is-a.dev/others",
    robots: "index,follow",
    alternates: [{ href: "https://divyanshudhruv.is-a.dev/others", hrefLang: "en" }],
  },
};

const schema = {
  logo: "https://divyanshudhruv.is-a.dev/images/logo.png",
  type: "Personal",
  name: "Divyanshu Dhruv",
  description: meta.home.description,
};

export { meta, schema, baseURL };
