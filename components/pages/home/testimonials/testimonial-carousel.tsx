"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { testimonials as localTestimonials } from "./testimonials-data";
import { TestimonialCard } from "./testimonial-card";
import type { SanityTestimonialItem } from "@/lib/sanity.home";
import type { TestimonialItem } from "./testimonials-data";

function getLoopIndex(index: number, total: number) {
  return (index + total) % total;
}

type Props = { testimonials?: SanityTestimonialItem[] };

export function TestimonialCarousel({ testimonials }: Props) {
  // Merge into the local TestimonialItem shape
  const displayItems: TestimonialItem[] = testimonials?.length
    ? testimonials.map((t) => ({
        id: t.id,
        name: t.name,
        role: t.role,
        thumbnail: t.thumbnail,
        avatar: t.avatar,
        rating: t.rating,
        href: t.href,
      }))
    : localTestimonials;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % displayItems.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [displayItems.length]);

  const visibleItems = useMemo(() => {
    const total = displayItems.length;
    return [
      { item: displayItems[getLoopIndex(activeIndex - 1, total)], position: "left" as const },
      { item: displayItems[getLoopIndex(activeIndex, total)], position: "center" as const },
      { item: displayItems[getLoopIndex(activeIndex + 1, total)], position: "right" as const },
    ];
  }, [activeIndex, displayItems]);

  return (
    <div className="mt-16 w-full">
      <div className="relative flex w-full items-center justify-center gap-4 overflow-hidden">
        {visibleItems.map(({ item, position }) => (
          <motion.div
            key={`${item.id}-${position}`}
            animate={{
              scale: position === "center" ? 1 : 0.88,
              opacity: position === "center" ? 1 : 0.5,
              x: position === "left" ? "-8%" : position === "right" ? "8%" : "0%",
            }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="w-full max-w-[22rem] shrink-0"
          >
            <TestimonialCard item={item} position={position} />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {displayItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-[#007E5B]" : "w-2 bg-[#D4D4D0]"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
