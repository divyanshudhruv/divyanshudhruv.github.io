export interface StackItem {
  url: string;
  label: string;
  color?: string;
  overrideMediaUrl?: string;
}

export interface StackCategory {
  category: string;
  parentColor: string;
  items: StackItem[];
}

export const stacksData: StackCategory[] = [
  {
    category: "Programming",
    parentColor: "border-blue-500",
    items: [
      { url: "https://www.python.org", label: "Python" },
      { url: "https://www.typescriptlang.org", label: "TypeScript" },
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        label: "JavaScript",
      },
      { url: "https://go.dev", label: "Go" },
      { url: "https://rust-lang.org", label: "Rust" },
      { url: "https://learn.microsoft.com/en-us/dotnet/csharp/", label: "C#" },
      {
        url: "https://learn.microsoft.com/en-us/dotnet/c/",
        label: "C",
      },
      { url: "https://dev.java", label: "Java" },
      { url: "https://www.php.net", label: "PHP" },
      { url: "https://www.r-project.org", label: "R" },
      {
        url: "https://arduino-ide.en.softonic.com/",
        label: "INO",
      },
    ],
  },
  {
    category: "Stack",
    parentColor: "border-amber-500",
    items: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        label: "HTML",
      },
      { url: "https://developer.mozilla.org/en-US/docs/Web/CSS", label: "CSS" },
      { url: "https://react.dev", label: "React" },
      { url: "https://nextjs.org", label: "Next.js" },

      { url: "https://reactnative.dev", label: "React Native" },
      { url: "https://expressjs.com", label: "Express" },
      { url: "https://elysiajs.com", label: "Elysia" },
      { url: "https://hono.dev", label: "Hono" },
      { url: "https://tanstack.com/start", label: "TanStack Start" },
      { url: "https://fastapi.tiangolo.com", label: "FastAPI" },
      { url: "https://www.djangoproject.com", label: "Django" },
      { url: "https://flask.palletsprojects.com", label: "Flask" },
      { url: "https://graphql.org", label: "GraphQL" },
      { url: "https://tailwindcss.com", label: "Tailwind CSS" },
      { url: "https://getbootstrap.com", label: "Bootstrap" },
      { url: "https://once-ui.com", label: "Once UI" },
      { url: "https://ui.shadcn.com", label: "shadcn/ui" },
      { url: "https://turbo.build", label: "Turborepo" },
    ],
  },
  {
    category: "Databases",
    parentColor: "border-teal-500",
    items: [
      { url: "https://www.mongodb.com", label: "MongoDB" },
      { url: "https://www.postgresql.org", label: "PostgreSQL" },
      { url: "https://www.mysql.com", label: "MySQL" },
      { url: "https://redis.io", label: "Redis" },
      { url: "https://supabase.com", label: "Supabase" },
      { url: "https://neon.tech", label: "NeonDB" },
      { url: "https://supermemory.ai", label: "Supermemory AI" },
      { url: "https://www.sqlite.org", label: "SQLite" },
      { url: "https://orm.drizzle.team", label: "Drizzle" },
    ],
  },
  {
    category: "Others",
    parentColor: "border-gray-500",
    items: [
      { url: "https://v2.tauri.app", label: "Tauri" },
      { url: "https://fumadocs.vercel.app", label: "Fumadocs" },
      { url: "https://lefthook.dev", label: "Lefthook" },
      { url: "https://www.npmjs.com/package/husky", label: "Husky" },
      { url: "https://biomejs.dev", label: "Biome" },
      { url: "https://github.com", label: "GitHub Actions" },
      { url: "https://opentui.com", label: "OpenTUI" },
      { url: "https://evlog.dev", label: "Evlog" },
      { url: "https://git-scm.com", label: "Git" },
    ],
  },
  {
    category: "DevOps / Cloud",
    parentColor: "border-cyan-500",
    items: [
      { url: "https://docker.com", label: "Docker" },
      { url: "https://kubernetes.io", label: "Kubernetes" },
      { url: "https://www.terraform.io", label: "Terraform" },
      { url: "https://www.jenkins.io", label: "Jenkins" },
      { url: "https://aws.amazon.com", label: "AWS" },
      { url: "https://cloud.google.com", label: "Google Cloud" },
      { url: "https://about.gitlab.com/topics/ci-cd/", label: "CI/CD" },
      { url: "https://www.linux.org", label: "Linux" },
      { url: "https://www.gnu.org/software/bash/", label: "Bash" },
      {
        url: "https://learn.microsoft.com/en-us/powershell/",
        label: "PowerShell",
      },
    ],
  },
];
