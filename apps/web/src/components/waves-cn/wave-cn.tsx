"use client";

import {
	memo,
	type ReactElement,
	type RefObject,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import WaveSurfer, {
	type WaveSurferEvents,
	type WaveSurferOptions,
} from "wavesurfer.js";

type WavesurferEventHandler<T extends unknown[]> = (
	wavesurfer: WaveSurfer,
	...args: T
) => void;

type OnWavesurferEvents = {
	[K in keyof WaveSurferEvents as `on${Capitalize<K>}`]?: WavesurferEventHandler<
		WaveSurferEvents[K]
	>;
};

type PartialWavesurferOptions = Omit<WaveSurferOptions, "container">;

export type WavesurferProps = PartialWavesurferOptions &
	OnWavesurferEvents & {
		className?: string;
	};

const WAVESURFER_DEFAULTS = {
	waveColor: "var(--muted-foreground)",
	progressColor: "var(--primary)",
	height: 64,
	barWidth: 3,
	barGap: 2,
	barRadius: 2,
	minPxPerSec: 1,
	cursorWidth: 0,
} as const satisfies Partial<WaveSurferOptions>;

const EVENT_PROP_RE = /^on([A-Z])/;
const isEventProp = (key: string) => EVENT_PROP_RE.test(key);
const getEventName = (key: string) =>
	key.replace(EVENT_PROP_RE, (_, $1) =>
		$1.toLowerCase(),
	) as keyof WaveSurferEvents;

// ─── Component ───────────────────────────────────────────────────────────────
const WavesurferPlayer = memo(
	(props: WavesurferProps): ReactElement => {
		const containerRef = useRef<HTMLDivElement | null>(null);
		const wsRef = useRef<WaveSurfer | null>(null);
		const [isReady, setIsReady] = useState(false);
		const { className, ...rest } = props;

		// ── Separate options from event handlers
		const [eventProps, options] = useMemo(() => {
			const opts: Partial<WaveSurferOptions> = {};
			const events: OnWavesurferEvents = {};
			for (const key in rest) {
				if (isEventProp(key))
					events[key as keyof OnWavesurferEvents] = rest[
						key as keyof typeof rest
					] as never;
				else
					opts[key as keyof PartialWavesurferOptions] = rest[
						key as keyof typeof rest
					] as never;
			}
			return [events, opts] as const;
		}, [rest]);

		// ── Resolve CSS vars
		const waveColor =
			(options.waveColor as string | undefined) ??
			WAVESURFER_DEFAULTS.waveColor;
		const progressColor =
			(options.progressColor as string | undefined) ??
			WAVESURFER_DEFAULTS.progressColor;
		const resolvedWaveColor = useCssVar(waveColor);
		const resolvedProgressColor = useCssVar(progressColor);

		// ── Keep event handlers in a ref — changes never cause re-subscription
		const eventsRef = useRef(eventProps);
		useEffect(() => {
			eventsRef.current = eventProps;
		}, [eventProps]);

		// ── Keep non-url options in a ref — changes applied imperatively
		const optionsRef = useRef(options);
		useEffect(() => {
			optionsRef.current = options;
		}, [options]);

		// ── Create instance only when url or structural options change
		const url = options.url as string | undefined;
		const height =
			(options.height as number | undefined) ?? WAVESURFER_DEFAULTS.height;
		const barWidth =
			(options.barWidth as number | undefined) ?? WAVESURFER_DEFAULTS.barWidth;
		const barGap =
			(options.barGap as number | undefined) ?? WAVESURFER_DEFAULTS.barGap;
		const barRadius =
			(options.barRadius as number | undefined) ??
			WAVESURFER_DEFAULTS.barRadius;
		const minPxPerSec =
			(options.minPxPerSec as number | undefined) ??
			WAVESURFER_DEFAULTS.minPxPerSec;
		const cursorWidth =
			(options.cursorWidth as number | undefined) ??
			WAVESURFER_DEFAULTS.cursorWidth;
		const dragToSeek = options.dragToSeek as boolean | undefined;
		const media = options.media as HTMLMediaElement | undefined;

		useEffect(() => {
			if (!containerRef.current) return;

			wsRef.current = WaveSurfer.create({
				...WAVESURFER_DEFAULTS,
				url,
				height,
				barWidth,
				barGap,
				barRadius,
				minPxPerSec,
				cursorWidth,
				dragToSeek,
				media,
				plugins: optionsRef.current.plugins,
				waveColor: resolvedWaveColor,
				progressColor: resolvedProgressColor,
				container: containerRef.current,
			});

			const ws = wsRef.current;

			const eventEntries = Object.keys(eventsRef.current);
			const unsubs = eventEntries.map((name) => {
				const event = getEventName(name);
				return ws.on(event, (...args) =>
					(
						eventsRef.current[
							name as keyof OnWavesurferEvents
						] as WavesurferEventHandler<WaveSurferEvents[typeof event]>
					)?.(ws, ...args),
				);
			});

			unsubs.push(ws.on("ready", () => setIsReady(true)));
			unsubs.push(ws.on("load", () => setIsReady(false)));
			unsubs.push(ws.on("destroy", () => setIsReady(false)));

			return () => {
				for (const fn of unsubs) fn();
				setIsReady(false);
				ws.destroy();
				wsRef.current = null;
			};
			// Only remount when these primitive options change — NOT handlers, NOT colors
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [
			url,
			height,
			barWidth,
			barGap,
			barRadius,
			minPxPerSec,
			cursorWidth,
			dragToSeek,
			resolvedProgressColor,
			resolvedWaveColor,
			media,
		]);

		// ── Apply color changes imperatively — zero remount on theme switch
		useEffect(() => {
			wsRef.current?.setOptions({
				waveColor: resolvedWaveColor,
				progressColor: resolvedProgressColor,
			});
		}, [resolvedWaveColor, resolvedProgressColor]);

		// ── Skeleton
		return (
			<div className={className} style={{ position: "relative" }}>
				{!isReady && (
					<div
						style={{
							height,
							width: "100%",
							position: "absolute",
							inset: 0,
							borderRadius: 4,
							background: "hsl(var(--muted))",
							animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
						}}
					/>
				)}
				<div ref={containerRef} style={!isReady ? { opacity: 0 } : undefined} />
			</div>
		);
	},
	(prev, next) => {
		// Only remount when structural audio options change — ignore handlers and className
		const STRUCTURAL_KEYS = [
			"url",
			"height",
			"barWidth",
			"barGap",
			"barRadius",
			"minPxPerSec",
			"cursorWidth",
			"dragToSeek",
			"waveColor",
			"progressColor",
		];
		return STRUCTURAL_KEYS.every(
			(k) =>
				prev[k as keyof WavesurferProps] === next[k as keyof WavesurferProps],
		);
	},
);

export default WavesurferPlayer;

// ─── Hook ────────────────────────────────────────────────────────────────────
function useWavesurfer({
	container,
	waveColor = WAVESURFER_DEFAULTS.waveColor,
	progressColor = WAVESURFER_DEFAULTS.progressColor,
	...options
}: Omit<WaveSurferOptions, "container"> & {
	container: RefObject<HTMLDivElement | null>;
}) {
	const resolvedWaveColor = useCssVar(waveColor as string);
	const resolvedProgressColor = useCssVar(progressColor as string);
	const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
	const [isReady, setIsReady] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const _url = options.url as string | undefined;
	const _height =
		(options.height as number | undefined) ?? WAVESURFER_DEFAULTS.height;
	const _barWidth =
		(options.barWidth as number | undefined) ?? WAVESURFER_DEFAULTS.barWidth;
	const _barGap =
		(options.barGap as number | undefined) ?? WAVESURFER_DEFAULTS.barGap;
	const _barRadius =
		(options.barRadius as number | undefined) ?? WAVESURFER_DEFAULTS.barRadius;
	const _minPxPerSec =
		(options.minPxPerSec as number | undefined) ??
		WAVESURFER_DEFAULTS.minPxPerSec;

	useEffect(() => {
		if (!container.current) return;
		const ws = WaveSurfer.create({
			...WAVESURFER_DEFAULTS,
			...options,
			waveColor: resolvedWaveColor,
			progressColor: resolvedProgressColor,
			container: container.current,
		});
		setWavesurfer(ws);
		const unsubs = [
			ws.on("load", () => {
				setIsReady(false);
				setIsPlaying(false);
				setCurrentTime(0);
			}),
			ws.on("ready", () => {
				setIsReady(true);
			}),
			ws.on("play", () => {
				setIsPlaying(true);
			}),
			ws.on("pause", () => {
				setIsPlaying(false);
			}),
			ws.on("timeupdate", () => {
				setCurrentTime(ws.getCurrentTime());
			}),
			ws.on("destroy", () => {
				setIsReady(false);
				setIsPlaying(false);
			}),
		];
		return () => {
			for (const fn of unsubs) fn();
			ws.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
		// biome-ignore lint/correctness/useExhaustiveDependencies: container.current is a ref used as instance key
	}, [resolvedWaveColor, resolvedProgressColor, container.current, options]);

	useEffect(() => {
		wavesurfer?.setOptions({
			waveColor: resolvedWaveColor,
			progressColor: resolvedProgressColor,
		});
	}, [wavesurfer, resolvedWaveColor, resolvedProgressColor]);

	return { wavesurfer, isReady, isPlaying, currentTime };
}

// ─── CSS var resolver ────────────────────────────────────────────────────────
export function useCssVar(value: string): string {
	const [resolved, setResolved] = useState(value);

	useEffect(() => {
		const match = value.match(/^var\((--[^)]+)\)$/);
		if (!match) {
			setResolved(value);
			return;
		}

		const varName = match[1];
		const resolve = () => {
			const raw = getComputedStyle(document.documentElement)
				.getPropertyValue(varName)
				.trim();
			const isHsl = /^[\d.]+ [\d.]+% [\d.]+%$/.test(raw);
			setResolved(raw ? (isHsl ? `hsl(${raw})` : raw) : value);
		};

		resolve();
		const observer = new MutationObserver(resolve);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class", "style", "data-theme"],
		});
		return () => observer.disconnect();
	}, [value]);

	return resolved;
}
