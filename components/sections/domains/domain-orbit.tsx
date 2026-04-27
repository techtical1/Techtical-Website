"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { domains } from "./domains-data";

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

export function DomainOrbit() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % domains.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  const visibleDomains = useMemo(() => {
    const total = domains.length;

    return slots.map((slot) => {
      const index = (activeIndex + slot.position + total) % total;

      return {
        ...slot,
        text: domains[index],
      };
    });
  }, [activeIndex]);

  return (
    <div className="relative h-[30rem] w-full overflow-hidden sm:h-[34rem] lg:h-[37rem]">
      <div className="absolute left-[60%] top-1/2 h-[37rem] w-[37rem] -translate-x-1/2 -translate-y-1/2 sm:h-[40rem] sm:w-[40rem] lg:h-[42rem] lg:w-[42rem]">
        {visibleDomains.map((item) => {
          const isActive = item.position === 0;

          return (
            <motion.div
              key={`${item.text}-${item.position}`}
              initial={false}
              animate={{
                x: item.x,
                y: item.y,
                rotate: item.rotate,
                scale: item.scale,
                opacity: item.opacity,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-0 top-0 flex origin-left items-center gap-4 whitespace-nowrap will-change-transform"
            >
              <span
                className={`h-3 w-3 shrink-0 rounded-full ${
                  isActive ? "bg-[#00E18E]" : "bg-transparent"
                }`}
              />

              <span
                className={`text-[2.4rem] leading-none tracking-[-0.04em] sm:text-[3rem] lg:text-[3.75rem] ${
                  isActive ? "text-[#262626]" : "text-[#A8A8A8]"
                }`}
              >
                {item.text}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F2F2F3] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F2F2F3] to-transparent" />
    </div>
  );
}