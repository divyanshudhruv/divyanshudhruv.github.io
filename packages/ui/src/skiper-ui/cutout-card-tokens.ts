import { cn } from "@homepage/ui/lib/utils";

const cutoutCardSurfaceShadowClassName = cn(
	"border border-border/80 dark:border-border/60",
	"transition-[box-shadow,border-color] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
	"hover:border-border",
	"bg-card opacity-70",
);

export const cutoutCardSurfaceClassName = cn(
	"group/cutout relative cursor-pointer overflow-hidden rounded-[20px] bg-card text-card-foreground",
	cutoutCardSurfaceShadowClassName,
);
