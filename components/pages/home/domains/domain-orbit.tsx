"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { domains as localDomains } from "./domains-data";

const slots = [
  { position: -5, x: 110, y: 20, rotate: -24, scale: 0.82, opacity: 0.48 },
  { position: -4, x: 135, y: 82, rotate: -20, scale: 0.86, opacity: 0.48 },
  { position: -3, x: 155, y: 145, rotate: -15, scale: 0.9, opacity: 0.48 },
  { position: -2, x: 168, y: 207, rotate: -10, scale: 0.94, opacity: 0.48 },
  { position: -1, x: 160, y: 262, rotate: -5, scale: 0.97, opacity: 0.58 },
  { position: 0, x: 160, y: 315, rotate: 0, scale: 1, opacity: 1 },
  { position: 1, x: 160, y: 375, rotate: 8, scale: 0.97, opacity: 0.58 },
  { position: 2, x: 150, y: 438, rotate: 14, scale: 0.94, opacity: 0.48 },
  { position: 3, x: 125, y: 500, rotate: 20, scale: 0.9, opacity: 0.48 },
  { position: 4, x: 92, y: 560, rotate: 25, scale: 0.86, opacity: 0.48 },
];

type Props = { domains?: string[] };

export function DomainOrbit({ domains }: Props) {
  const displayDomains = domains?.length ? domains : localDomains;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % displayDomains.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [displayDomains.length]);

  const visibleItems = useMemo(() => {
    const total = displayDomains.length;
    return slots.map((slot) => {
      const index = (activeIndex + slot.position + total) % total;
      return { ...slot, text: displayDomains[index] };
    });
  }, [activeIndex, displayDomains]);

  return (
    <div className="relative hidden h-[44rem] w-full max-w-[28rem] lg:block">
      {visibleItems.map(({ position, x, y, rotate, scale, opacity, text }) => (
        <motion.div
          key={`${text}-${position}`}
          animate={{ x, y: y - 315, rotate, scale, opacity }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="absolute left-0 top-1/2"
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <div
            className={`inline-flex items-center rounded-full border px-5 py-2.5 text-[1rem] font-semibold whitespace-nowrap ${
              position === 0
                ? "border-[#007E5B] bg-[#007E5B] text-white shadow-[0_8px_24px_rgba(0,126,91,0.35)]"
                : "border-[#E5E5E2] bg-white text-[#262626]"
            }`}
          >
            {text}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
