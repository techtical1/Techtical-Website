"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founderAvatars } from "@/components/pages/home/hero/hero-data";
import { heroFade } from "@/components/pages/home/hero/hero-motion";

type Props = { avatars?: string[]; text?: string };

export function FounderTrustBar({ avatars, text = "Trusted by 120+ founders across 18 countries" }: Props) {
  // If Sanity provided URL strings, use them; otherwise fall back to local data objects
  const localAvatars = founderAvatars;

  return (
    <motion.div
      className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-[#6d6d6d] sm:flex-row sm:text-base"
      {...heroFade(0.14)}
    >
      <div className="flex -space-x-2">
        {avatars?.length
          ? avatars.map((src, index) => (
              <span
                key={src}
                className="relative size-9 overflow-hidden rounded-full border-2 border-white bg-[#eeeeec] shadow-sm"
              >
                <Image
                  src={src}
                  alt="Founder portrait"
                  fill
                  sizes="36px"
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </span>
            ))
          : localAvatars.map((avatar, index) => (
              <span
                key={avatar.src}
                className="relative size-9 overflow-hidden rounded-full border-2 border-white bg-[#eeeeec] shadow-sm"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  sizes="36px"
                  className={`object-cover ${avatar.positionClassName}`}
                  priority={index === 0}
                />
              </span>
            ))}
      </div>
      <p>{text}</p>
    </motion.div>
  );
}
