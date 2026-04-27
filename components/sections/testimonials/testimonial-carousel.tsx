"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { testimonials } from "./testimonials-data";
import { TestimonialCard } from "./testimonial-card";

function getLoopIndex(index: number, total: number) {
  return (index + total) % total;
}

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3400);

    return () => clearInterval(timer);
  }, []);

  const visibleItems = useMemo(() => {
    const total = testimonials.length;

    return [
      {
        item: testimonials[getLoopIndex(activeIndex - 1, total)],
        position: "left" as const,
      },
      {
        item: testimonials[getLoopIndex(activeIndex, total)],
        position: "center" as const,
      },
      {
        item: testimonials[getLoopIndex(activeIndex + 1, total)],
        position: "right" as const,
      },
    ];
  }, [activeIndex]);

  return (
    <div className="relative mt-12 flex w-full items-center justify-center overflow-hidden">
      <motion.div
        layout
        className="flex w-full max-w-[78rem] items-center justify-center gap-6"
        transition={{
          layout: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
      >
        {visibleItems.map(({ item, position }) => (
          <TestimonialCard key={item.id} item={item} position={position} />
        ))}
      </motion.div>
    </div>
  );
}
