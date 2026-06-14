"use client";

import { Media } from "@once-ui-system/core";
import {
  ExternalLink,
  Music,
  Music2,
  Music3,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type MusicTrack = {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  previewUrl: string | null;
  spotifyUrl: string;
};

export type MusicWidgetProps = {
  className?: string;
};

export default function MusicWidget({ className }: MusicWidgetProps) {
  const [tracks, setTracks] = useState<MusicTrack[]>([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    const fetchTracks = () => {
      if (isFetchingRef.current) return;
      isFetchingRef.current = true;

      fetch("/api/spotify/recently-played")
        .then((res) => res.json())
        .then((data) => {
          if (data.error) throw new Error(data.error);
          if (!data.tracks?.length) throw new Error("No tracks");
          setTracks(data.tracks);
          setIsCurrentlyPlaying(data.isCurrentlyPlaying ?? false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          isFetchingRef.current = false;
          setLoading(false);
        });
    };

    fetchTracks();
    const interval = setInterval(fetchTracks, 60_000);
    let focusTimer: ReturnType<typeof setTimeout>;
    const onFocus = () => {
      clearTimeout(focusTimer);
      focusTimer = setTimeout(fetchTracks, 2_000);
    };
    window.addEventListener("focus", onFocus);
    return () => {
      clearInterval(interval);
      clearTimeout(focusTimer);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, tracks.length - 1)));
  }, [tracks.length]);

  const track = tracks[index] ?? null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track) return;

    if (track.previewUrl) {
      audio.src = track.previewUrl;
      if (playing) {
        audio.play().catch(() => setPlaying(false));
      }
    }

    return () => {
      audio.pause();
    };
  }, [track?.id]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track?.previewUrl) return;

    if (playing) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    setPlaying(isCurrentlyPlaying);
  }, [isCurrentlyPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIndex((i) => (i + 1) % tracks.length);
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [tracks.length]);

  const goPrev = () => {
    setIndex((i) => (i - 1 + tracks.length) % tracks.length);
  };

  const goNext = () => {
    setIndex((i) => (i + 1) % tracks.length);
  };

  const togglePlay = () => {
    if (isCurrentlyPlaying) return;
    setPlaying((p) => !p);
  };

  if (loading) {
    return (
      <div
        className={cn(
          "flex size-52 flex-col items-center justify-center rounded-3xl border border-border bg-linear-to-br from-muted/80 to-muted p-16 pb-12 text-foreground shadow-md",
          className,
        )}
      >
        <p className="text-muted-foreground text-xs">Loading...</p>
      </div>
    );
  }

  if (error || !track) {
    return (
      <div
        className={cn(
          "flex size-52 flex-col items-center justify-center rounded-3xl border border-border bg-linear-to-br from-muted/80 to-muted p-16 pb-12 text-foreground shadow-md",
          className,
        )}
      >
        <p className="max-w-[90%] text-balance text-center text-muted-foreground text-xs leading-relaxed">
          {error ?? "No tracks yet"}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex size-52 flex-col rounded-3xl border border-border bg-linear-to-br from-muted/80 to-muted p-16 pb-8 text-foreground shadow-md",
        className,
      )}
    >
      <div className="relative flex min-h-0 flex-1 flex-col justify-between">
        <div className="flex gap-4">
          <Media
            src={track.albumArt}
            alt={`${track.title} album art`}
            className="size-20 shrink-0 rounded-2xl object-cover"
            loading={track.albumArt ? false : true}
            width={5}
            height={5}
            minHeight={5}
            minWidth={5}
            maxWidth={5}
            maxHeight={5}
            unoptimized
          />
          <div
            className="ms-auto flex h-fit flex-wrap justify-end gap-0.5"
            aria-hidden
          >
            <Music2
              size={16}
              className={cn("transition-all", {
                hidden: !playing || !isCurrentlyPlaying,
                "zoom-in repeat-infinite direction-alternate-reverse animate-in delay-500 duration-1000":
                  playing && isCurrentlyPlaying,
              })}
            />
            <Music3
              size={14}
              className={cn("transition-all", {
                hidden: !playing || !isCurrentlyPlaying,
                "zoom-in repeat-infinite direction-alternate-reverse animate-in duration-1000":
                  playing && isCurrentlyPlaying,
              })}
            />
            <Music
              size={18}
              className={cn("transition-all", {
                hidden: !playing || !isCurrentlyPlaying,
                "zoom-in repeat-infinite direction-alternate-reverse animate-in delay-300 duration-1000":
                  playing && isCurrentlyPlaying,
              })}
            />
          </div>
        </div>
        <div className="space-y-0.5">
          <p className="line-clamp-1 font-semibold text-sm leading-tight">
            {track.title}
          </p>
          <p className="line-clamp-1 font-medium text-muted-foreground text-xs">
            {track.artist}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        <button
          type="button"
          aria-label="Previous track"
          disabled={isCurrentlyPlaying}
          className={cn(
            "flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full transition-opacity",
            isCurrentlyPlaying && "cursor-not-allowed opacity-40",
          )}
          onClick={goPrev}
        >
          <SkipBack className="size-5 fill-current" />
        </button>
        <button
          type="button"
          aria-label={playing ? "Pause" : "Play"}
          disabled={!isCurrentlyPlaying}
          className={cn(
            "flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full transition-opacity",
            !isCurrentlyPlaying && "cursor-not-allowed opacity-40",
          )}
          onClick={togglePlay}
        >
          {playing ? (
            <Pause className="size-6 fill-current" />
          ) : (
            <Play className="size-6 fill-current" />
          )}
        </button>
        <button
          type="button"
          aria-label="Next track"
          disabled={isCurrentlyPlaying}
          className={cn(
            "flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full transition-opacity",
            isCurrentlyPlaying && "cursor-not-allowed opacity-40",
          )}
          onClick={goNext}
        >
          <SkipForward className="size-5 fill-current" />
        </button>
      </div>

      <div className="mt-1 flex items-center justify-center gap-1.5">
        {!isCurrentlyPlaying && (
          <span className="text-[10px] text-muted-foreground/90">
            Last played
          </span>
        )}

        {isCurrentlyPlaying && (
          <span className="text-[10px] text-muted-foreground/90">
            Now playing
          </span>
        )}
        <a
          href={track.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] text-muted-foreground transition-colors hover:text-foreground hover:underline"
        >
          <ExternalLink size={10} />
          Play on Spotify
        </a>
      </div>
    </div>
  );
}
