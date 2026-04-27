"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { problemItems } from "./problem-data";

const ITEM_HEIGHT = 112;

export function ProblemRotator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % problemItems.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const visibleItems = useMemo(() => {
    const total = problemItems.length;

    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (activeIndex + offset + total) % total;

      return {
        text: problemItems[index],
        offset,
      };
    });
  }, [activeIndex]);

  return (
    <div className="relative h-[32rem] w-full max-w-[40.5rem] overflow-hidden sm:h-[36rem] lg:h-[40rem] xl:h-[43.9375rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-[#0F0F0F] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-[#0F0F0F] to-transparent" />

      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
        {visibleItems.map((item) => {
          const isActive = item.offset === 0;
          const distance = Math.abs(item.offset);

          return (
            <motion.div
              key={item.text}
              animate={{
                y: item.offset * ITEM_HEIGHT,
                opacity: isActive ? 1 : distance === 1 ? 0.38 : 0.18,
                filter: isActive ? "blur(0px)" : "blur(8px)",
                scale: isActive ? 1 : 0.94,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute top-0 left-0 flex h-[8.125rem] w-full items-center justify-center will-change-transform"
            >
              {isActive ? (
                <ActiveProblemItem text={item.text} />
              ) : (
                <p className="w-full px-4 text-center text-[1.8rem] leading-none font-medium text-[#FAFAF8]/70 sm:text-[2.15rem] xl:text-[2.5rem]">
                  {item.text}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ActiveProblemItem({ text }: { text: string }) {
  return (
    <div className="relative flex h-[6.5rem] w-full max-w-[40.5rem] items-center justify-center overflow-hidden rounded-[0.6875rem] border border-dashed border-[#FAFAF8]/10 bg-[linear-gradient(180deg,rgba(0,232,146,0)_0%,rgba(0,232,146,0.15)_100%)] sm:h-[7.25rem] xl:h-[8.125rem]">
      <ActiveCorners />

      <motion.p
        key={text}
        initial={{ y: 18, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        exit={{ y: -18, opacity: 0, filter: "blur(8px)" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-6 text-center text-[2.2rem] leading-none font-medium text-[#FAFAF8] sm:text-[2.65rem] xl:text-[3.125rem]"
      >
        {text}
      </motion.p>

      <div className="absolute bottom-[1.45rem] left-0 h-[0.1875rem] w-full bg-[#00E892] xl:bottom-[1.85rem]" />
    </div>
  );
}

function ActiveCorners() {
  return (
    <>
      <Corner className="top-0 left-0" />
      <Corner className="bottom-0 left-0 rotate-[-90deg]" />
      <Corner className="right-0 bottom-0 rotate-180" />
      <Corner className="top-0 right-0 rotate-90" />
    </>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <svg
      className={`absolute h-5 w-[1.3125rem] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        d="M21 0V2H12C6.47715 2 2 6.47715 2 12V20H0V12C0 5.37258 5.37258 0 12 0H21Z"
        fill="#00E892"
      />
    </svg>
  );
}
