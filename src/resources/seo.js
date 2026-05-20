// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://divyanshudhruv.is-a.dev"; 

// metadata for pages
const meta = {
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
  // add more routes and reference them in page.tsx
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

// default schema data
const schema = {
  logo: "https://divyanshudhruv.is-a.dev/images/logo.png", 
  type: "Personal", 
  name: "Divyanshu Dhruv", 
  description: meta.home.description,
};

export { meta, schema, baseURL };