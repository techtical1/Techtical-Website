"use client";

import { useRef, useState } from "react";
import { Link, Mail, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { StrategyCallButton } from "../ui/strategy-call-button";

export function FounderFormActions() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);

    if (video.paused) {
      video.play();
    }
  }

  return (
    <div className="mt-5 shrink-0">
      <div className="relative mx-auto aspect-[1.42/1] w-full max-w-[265px] overflow-hidden rounded-[14px] bg-[#202126]">
        <video
          ref={videoRef}
          src="/assets/founder/founder-video-preview.mp4"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted={muted}
          playsInline
        />

        <button
          type="button"
          onClick={toggleSound}
          className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#141519] shadow-lg backdrop-blur-md"
          aria-label={muted ? "Enable sound" : "Disable sound"}
        >
          {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>
      </div>

    <div className="mx-auto mt-4 flex w-[400px] max-w-full items-center justify-between">
  <a
    href="mailto:info@techticalsolution.com"
    className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[0.7px] border-[#E9ECF3] bg-[linear-gradient(180deg,#8B8E97_0%,#E9ECF3_100%)] text-[#141519] backdrop-blur-xl"
    aria-label="Email"
  >
    <Mail size={18} />
  </a>

<StrategyCallButton>
    Book A Call
</StrategyCallButton>

  <a
    href="https://wa.me/918238431186"
    target="_blank"
    rel="noreferrer"
    className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[1px] border-[#E9ECF3] bg-[linear-gradient(180deg,#8B8E97_0%,#E9ECF3_100%)] text-[#141519] backdrop-blur-xl"
    aria-label="WhatsApp"
  >
<a
  href="https://wa.me/918238431186"
  target="_blank"
  rel="noreferrer"
  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[1px] border-[#E9ECF3] bg-[linear-gradient(180deg,#8B8E97_0%,#E9ECF3_100%)] text-[#141519] backdrop-blur-xl"
  aria-label="WhatsApp"
>
  <img
    src="/assets/founder/whatsapp.svg"
    alt="WhatsApp"
    className="h-[20px] w-[20px]"
  />
</a>  </a>
</div>
    </div>
  );
}