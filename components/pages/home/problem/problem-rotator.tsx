"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { problemItems as localItems } from "./problem-data";

const ITEM_HEIGHT = 112;

type Props = { items?: string[] };

export function ProblemRotator({ items }: Props) {
  const displayItems = items?.length ? items : localItems;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % displayItems.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [displayItems.length]);

  const visibleItems = useMemo(() => {
    const total = displayItems.length;
    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (activeIndex + offset + total) % total;
      return { text: displayItems[index], offset };
    });
  }, [activeIndex, displayItems]);

  return (
    <div className="relative h-[28rem] w-full max-w-[30rem] overflow-hidden">
      {visibleItems.map(({ text, offset }) => {
        const y = offset * ITEM_HEIGHT;
        const isActive = offset === 0;
        return (
          <motion.div
            key={`${text}-${offset}`}
            animate={{ y, opacity: isActive ? 1 : 0.3, scale: isActive ? 1 : 0.92 }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2"
            style={{ height: ITEM_HEIGHT }}
          >
            <div
              className={`flex h-full items-center rounded-2xl px-6 text-[1.625rem] font-semibold leading-tight tracking-[-0.025em] sm:text-[1.875rem] lg:text-[2rem] ${
                isActive
                  ? "bg-[#00E892]/12 text-[#00E892]"
                  : "text-[#5A5A5A]"
              }`}
            >
              {isActive && (
                <span className="mr-4 h-3 w-3 shrink-0 rotate-45 bg-[#00E892]" aria-hidden="true" />
              )}
              {text}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
