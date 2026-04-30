"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  showControls?: boolean;
};

export function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  loop = true,
  muted = true,
  className,
  showControls = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[32px] bg-[#EDEDEA]",
        className
      )}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
      />

      {/* OVERLAY CONTROLS */}
      {showControls && (
        <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-6 opacity-0 transition duration-300 group-hover:opacity-100">
          
          {/* LEFT CONTROLS */}
          <div className="pointer-events-auto flex items-center gap-3">
            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              className="rounded-full bg-black/60 px-4 py-2 text-white backdrop-blur transition hover:bg-black/80"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>

          {/* RIGHT CONTROLS */}
          <div className="pointer-events-auto flex items-center gap-3">
            {/* Mute */}
            <button
              onClick={toggleMute}
              className="rounded-full bg-black/60 px-4 py-2 text-white backdrop-blur transition hover:bg-black/80"
            >
              {isMuted ? "Muted" : "Sound"}
            </button>
          </div>
        </div>
      )}

      {/* CENTER PLAY BUTTON (WHEN PAUSED) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="rounded-full bg-black/60 px-6 py-4 text-white backdrop-blur transition hover:scale-105">
            Play
          </div>
        </button>
      )}
    </div>
  );
}