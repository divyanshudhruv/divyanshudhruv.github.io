import { CircleArrowUp, CloudSunRain } from "lucide-react";

import { cn } from "@/lib/utils";

export type WeatherCardProps = {
	className?: string;
	city?: string;
	temperature?: number;
	feelsLike?: number;
	high?: number;
	low?: number;
};

export default function WeatherCard({
	className,
	city = "Tokyo",
	temperature = 19,
	feelsLike = 21,
	high = 24,
	low = 9,
}: WeatherCardProps) {
	return (
		<div
			className={cn(
				"flex size-52 flex-col rounded-3xl border border-border bg-linear-to-br from-muted/80 to-muted p-24 font-sans shadow-md",
				className,
			)}
		>
			<div className="flex min-h-0 flex-1 flex-col justify-start gap-2">
				<p className="font-semibold text-[15px] text-foreground leading-none">
					{city}
				</p>
				<div className="flex items-start gap-2">
					<CloudSunRain
						className="mt-1 size-8 shrink-0 text-foreground/75"
						strokeWidth={1.75}
						aria-hidden
					/>
					<p className="font-normal text-[34px] text-foreground tabular-nums leading-none tracking-tight">
						{temperature}&deg;
					</p>
				</div>
				<p className="text-[13px] text-muted-foreground leading-none">
					Feels like <span className="tabular-nums">{feelsLike}&deg;</span>
				</p>
			</div>
			<div className="flex shrink-0 justify-between rounded-xl border border-border/60 bg-background/50 px-2.5 py-8 font-medium text-[13px] tabular-nums leading-none backdrop-blur-sm">
				<div className="flex items-center gap-1 text-orange-600 dark:text-orange-300">
					<CircleArrowUp className="size-3.5" strokeWidth={2} aria-hidden />
					{high}&deg;
				</div>
				<span className="text-border/80" aria-hidden>
					|
				</span>
				<div className="flex items-center gap-1 text-sky-700 dark:text-sky-300">
					<CircleArrowUp
						className="size-3.5 rotate-180"
						strokeWidth={2}
						aria-hidden
					/>
					{low}&deg;
				</div>
			</div>
		</div>
	);
}
