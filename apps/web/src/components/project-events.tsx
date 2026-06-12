import { cn } from "@/lib/utils";

export type CalendarEventVariant =
  | "violet"
  | "cyan"
  | "emerald"
  | "amber"
  | "rose";

export type CalendarEventItem = {
  title: string;
  desc: string;
  variant?: CalendarEventVariant;
};

export type CalendarEventProps = {
  className?: string;
  /** Defaults to today. */
  date?: Date;
  projects?: CalendarEventItem[];
  maxVisible?: number;
};
import type { Projects } from "@/components/projects-new";
import { projectsData } from "@/resources/projects";

export const DEFAULT_CALENDAR_PROJECTS: CalendarEventItem[] = [
  ...projectsData.map((project) => ({
    title: project.title as string,
    desc: project.description as string,
  })),
];

const VARIANT_STYLES: Record<
  CalendarEventVariant,
  { chip: string; dot: string; title: string; desc: string }
> = {
  violet: {
    chip: "bg-violet-500/15 dark:bg-violet-500/25",
    dot: "bg-violet-600",
    title: "text-foreground",
    desc: "text-muted-foreground",
  },
  cyan: {
    chip: "bg-cyan-500/15 dark:bg-cyan-500/25",
    dot: "bg-cyan-600",
    title: "text-foreground",
    desc: "text-muted-foreground",
  },
  emerald: {
    chip: "bg-emerald-500/15 dark:bg-emerald-500/25",
    dot: "bg-emerald-600",
    title: "text-foreground",
    desc: "text-muted-foreground",
  },
  amber: {
    chip: "bg-amber-500/15 dark:bg-amber-500/25",
    dot: "bg-amber-600",
    title: "text-foreground",
    desc: "text-muted-foreground",
  },
  rose: {
    chip: "bg-rose-500/15 dark:bg-rose-500/25",
    dot: "bg-rose-600",
    title: "text-foreground",
    desc: "text-muted-foreground",
  },
};

function eventdescStart(desc: string) {
  const parts = desc.split(/\s[–-]\s/);
  return parts[0]?.trim() ?? desc;
}

function EventRow({ event }: { event: CalendarEventItem }) {
  const variant = VARIANT_STYLES[["violet", "cyan", "emerald", "amber", "rose"][Math.floor(Math.random() * 5)] as CalendarEventVariant];
  return (
    <li
      className={cn("flex shrink-0 gap-2 rounded-md px-8 py-4", variant.chip)}
    >
      <span
        className={cn("mt-1.5 size-2 shrink-0 rounded-full", variant.dot)}
        aria-hidden
      />
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p
          className={cn(
            "truncate text-[15px] font-semibold leading-snug",
            variant.title,
          )}
        >
          {event.title}
        </p>
        <p
          className={cn(
            "truncate text-[13px] leading-snug tabular-nums",
            variant.desc,
          )}
        >
          {event.desc}
        </p>
      </div>
    </li>
  );
}

export default function ProjectEvents({
  className,
  projects = DEFAULT_CALENDAR_PROJECTS,
  maxVisible = 2,
}: CalendarEventProps) {
  const list = projects;
  const visible = list.slice(0, maxVisible);
  const extra = list.length - maxVisible;
  const nextEvent = list[maxVisible];

  return (
    <div
      className={cn(
        "flex size-52 flex-col rounded-3xl border border-border bg-linear-to-br from-muted/80 to-muted p-3.5 font-sans shadow-md",
        className,
      )}
    >
      <div className="flex shrink-0 items-baseline gap-1.5">
        <p className="text-[15px] font-semibold leading-snug text-rose-500">
          {/* {date.toLocaleString("default", { weekday: "short" })} */}{" "}
          Projects
        </p>
        <p className="text-[22px] font-normal leading-snug tabular-nums tracking-tight text-foreground">
          {/* {date.getDate()} */} {projects.length}
        </p>
      </div>

      {visible.length > 0 ? (
        <ul className="mt-2 flex shrink-0 flex-col gap-1">
          {visible.map((event, index) => (
            <EventRow key={`${event.title}-${index}`} event={event} />
          ))}
        </ul>
      ) : (
        <p className="mt-2 shrink-0 text-[13px] leading-snug text-muted-foreground">
          No projects pending
        </p>
      )}

      {extra > 0 ? (
        <div className="mt-1.5 flex h-8 shrink-0 items-center justify-between gap-2 rounded-md bg-border/60 px-4.5">
          <p className="shrink-0 text-[13px] font-medium leading-snug text-foreground">
            +{extra} more
          </p>
          <p className="min-w-0 truncate text-right text-[13px] leading-snug tabular-nums text-muted-foreground">
            {nextEvent ? eventdescStart(nextEvent.desc) : ""}
          </p>
        </div>
      ) : null}
    </div>
  );
}
