"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { founderAvatars } from "@/components/sections/hero/hero-data";
import { heroFade } from "@/components/sections/hero/hero-motion";

export function FounderTrustBar() {
  return (
    <motion.div
      className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-[#6d6d6d] sm:flex-row sm:text-base"
      {...heroFade(0.14)}
    >
      <div className="flex -space-x-2">
        {founderAvatars.map((avatar, index) => (
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
      <p>
        Trusted by <strong className="font-bold text-[#202020]">120+ founders</strong> across 18
        countries
      </p>
    </motion.div>
  );
}
