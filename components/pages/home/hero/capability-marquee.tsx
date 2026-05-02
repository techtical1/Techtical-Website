"use client";

import { motion } from "framer-motion";
import { capabilityMarqueeItems } from "@/components/pages/home/hero/hero-data";

type Props = { items?: string[][] };

export function CapabilityMarquee({ items }: Props) {
  const displayItems = items?.length ? items : [...capabilityMarqueeItems];

  return (
    <div className="sticky bottom-20 z-20 w-full border-y border-black/10 bg-[#f1f1f1] py-5">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex min-w-max items-center gap-12 pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...displayItems, ...displayItems].map((item, index) => (
            <div
              key={`${item.join("-")}-${index}`}
              className="flex items-center gap-4 text-lg font-semibold whitespace-nowrap text-[#2c2c2c] sm:text-xl"
            >
              <span className="size-2.5 rotate-45 bg-[#05bf83]" aria-hidden="true" />
              <span>
                {item.map((word, wordIndex) => (
                  <span
                    key={word}
                    className={wordIndex % 2 === 1 ? "font-serif text-[#008f63] italic" : ""}
                  >
                    {word}
                    {wordIndex < item.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
