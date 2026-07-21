"use client";
("use memo");

import { Button } from "@homepage/ui/components/button";
import { cn } from "@homepage/ui/lib/utils";
import { Loader2, Pause, Play } from "lucide-react";
import * as React from "react";
import type WaveSurfer from "wavesurfer.js";
import WavesurferPlayer from "@/components/waves-cn/wave-cn";

export interface WavePlayerProps {
	/** Audio source URL */
	src: string;
	/** Optional title shown above the waveform */
	title?: string;
	/** Initial volume (0–1) */
	defaultVolume?: number;
	/** Audio bar color. Accepts any CSS value including var(--*) tokens @default "var(--muted-foreground)" */
	waveColor?: string;
	/** Progress bar color. Accepts any CSS value including var(--*) tokens @default "var(--primary)" */
	progressColor?: string;
	/** Waveform bar width in px @default 3 */
	barWidth?: number;
	/** Waveform bar gap in px @default 2 */
	barGap?: number;
	/** Rounded borders for bars @default 2 */
	barRadius?: number;
	/** Waveform height in px @default 64 */
	waveHeight?: number;
	/** Minimum pixels per second (zoom level) @default 1 */
	minPxPerSec?: number;
	/** Autoplay on mount */
	autoPlay?: boolean;
	/** Called when playback starts */
	onPlay?: () => void;
	/** Called when playback pauses */
	onPause?: () => void;
	/** Called when playback finishes */
	onFinish?: () => void;
	/** Called with current time on every audio process tick */
	onTimeUpdate?: (currentTime: number, duration: number) => void;
	className?: string;
}

function formatTime(t: number): string {
	const m = Math.floor(t / 60);
	const s = Math.floor(t % 60);
	return `${m}:${s.toString().padStart(2, "0")}`;
}

export function WavePlayer({
	src,
	defaultVolume = 0.8,
	waveColor,
	progressColor,
	barWidth,
	barGap,
	barRadius,
	waveHeight,
	minPxPerSec,
	autoPlay = false,
	onPlay,
	onPause,
	onFinish,
	onTimeUpdate,
	className,
}: WavePlayerProps) {
	const wavesurferRef = React.useRef<WaveSurfer | null>(null);

	const [isReady, setIsReady] = React.useState(false);
	const [isPlaying, setIsPlaying] = React.useState(false);
	const volumeRef = React.useRef(defaultVolume);
	const isMutedRef = React.useRef(false);
	const [duration, setDuration] = React.useState(0);
	const [currentTime, setCurrentTime] = React.useState(0);

	const togglePlay = () => wavesurferRef.current?.playPause();

	const _restart = () => {
		if (!wavesurferRef.current || !isReady) return;
		wavesurferRef.current.setTime(0);
		wavesurferRef.current.play();
	};

	const _handleVolume = (v: number | readonly number[]) => {
		const value = Array.isArray(v) ? v[0] : v;
		volumeRef.current = value;
		isMutedRef.current = value === 0;
		wavesurferRef.current?.setVolume(value);
	};

	const _toggleMute = () => {
		if (!wavesurferRef.current) return;
		const next = !isMutedRef.current;
		isMutedRef.current = next;
		wavesurferRef.current.setVolume(next ? 0 : volumeRef.current);
	};

	const _handleSeek = (v: number | readonly number[]) => {
		if (!wavesurferRef.current || !isReady) return;
		const value = Array.isArray(v) ? v[0] : v;
		wavesurferRef.current.seekTo(value);
	};

	const handleReady = (ws: WaveSurfer) => {
		wavesurferRef.current = ws;
		ws.setVolume(defaultVolume);
		if (autoPlay) ws.play();
		setDuration(ws.getDuration());
		setIsReady(true);
	};

	const handlePlay = () => {
		setIsPlaying(true);
		onPlay?.();
	};

	const handlePause = () => {
		setIsPlaying(false);
		onPause?.();
	};

	const handleFinish = (_ws: WaveSurfer) => {
		setIsPlaying(false);
		onFinish?.();
	};

	const handleTimeupdate = (ws: WaveSurfer) => {
		const t = ws.getCurrentTime();
		setCurrentTime(t);
		onTimeUpdate?.(t, ws.getDuration());
	};

	const handleSeeking = (ws: WaveSurfer) => {
		setCurrentTime(ws.getCurrentTime());
	};

	const handleDestroy = () => {
		wavesurferRef.current = null;
		setIsReady(false);
		setIsPlaying(false);
		setCurrentTime(0);
		setDuration(0);
	};

	// ── Derived
	const _progress = duration > 0 ? currentTime / duration : 0;

	// ── Render
	return (
		<div
			className={cn(
				"flex w-full items-center justify-center rounded-m border-transparent bg-transparent px-0",
				className,
			)}
		>
			<div className="flex w-full flex-row-reverse content-center items-center justify-center gap-4 border-0 px-12 py-4">
				{/* {title && (
          <p className="text-sm font-medium text-foreground truncate">
            {title}
          </p>
        )} */}
				<div className="flex items-center gap-1">
					{/* <Slider
            className="flex-1"
            value={[progress]}
            min={0}
            max={1}
            step={0.001}
            disabled={!isReady}
            onValueChange={handleSeek}
          /> */}
					{/* <span className="text-[11px] tabular-nums text-muted-foreground w-fit shrink-0">
            {formatTime(currentTime)}
          </span>
          • */}
					<span className="w-fit shrink-0 text-right text-[13px] text-foreground tabular-nums">
						{formatTime(duration - currentTime)}
					</span>
				</div>
				<div className="relative w-full overflow-hidden rounded-sm">
					{!isReady && (
						<div
							className="absolute inset-0 z-10 flex items-center justify-center bg-transparent backdrop-blur-[2px]"
							style={{ height: waveHeight ?? 64 }}
						>
							<Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
						</div>
					)}
					<WavesurferPlayer
						url={src}
						waveColor={waveColor}
						progressColor={progressColor}
						height={waveHeight}
						barWidth={barWidth}
						barGap={barGap}
						barRadius={barRadius}
						minPxPerSec={minPxPerSec}
						dragToSeek
						onReady={handleReady}
						onPlay={handlePlay}
						onPause={handlePause}
						onFinish={handleFinish}
						onTimeupdate={handleTimeupdate}
						onSeeking={handleSeeking}
						onDestroy={handleDestroy}
					/>
				</div>

				<div className="flex items-center justify-between gap-3 rounded-m">
					<Button
						size="icon"
						variant="link"
						className="h-fit w-fit cursor-pointer rounded-m p-1 text-foreground"
						disabled={!isReady}
						onClick={togglePlay}
						aria-label={isPlaying ? "Pause" : "Play"}
					>
						{isPlaying ? <Pause size={17} /> : <Play size={17} />}
					</Button>
					{/*  <div className="flex items-center gap-1.5">
             <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              disabled={!isReady}
              onClick={restart}
              aria-label="Restart"
            >
              <RotateCcw size={15} />
            </Button> 
          </div>
*/}
					{/* <div className="flex items-center gap-2 w-36">
             <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 shrink-0 text-muted-foreground hover:text-foreground"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={handleVolume}
              aria-label="Volume"
            /> 
          </div>*/}
				</div>
			</div>
		</div>
	);
}

export default WavePlayer;
