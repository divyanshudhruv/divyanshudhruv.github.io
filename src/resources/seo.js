// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://demo.once-ui.com";

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Once UI for Next.js",
    description:
      "An open-source design system and component library for Next.js that emphasizes easy styling and accessibility in UI development.",
    image: "/images/og/home.jpg",
    canonical: "https://once-ui.com",
    robots: "index,follow",
    alternates: [{ href: "https://once-ui.com", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
  projects: {
    path: "/projects",
    title: "Projects",
    description: "Explore my past projects and works.",
    image: "/images/og/home.jpg",
    canonical: "https://once-ui.com/projects",
    robots: "index,follow",
    alternates: [{ href: "https://once-ui.com/projects", hrefLang: "en" }],
  },
  others: {
    path: "/others",
    title: "Others",
    description: "Awards, experiences, and other endeavors.",
    image: "/images/og/home.jpg",
    canonical: "https://once-ui.com/others",
    robots: "index,follow",
    alternates: [{ href: "https://once-ui.com/others", hrefLang: "en" }],
  },
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Once UI",
  description: meta.home.description,
  email: "lorant@once-ui.com",
};

export { meta, schema, baseURL };
