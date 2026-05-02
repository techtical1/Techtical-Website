import Image from "next/image";
import { motion } from "framer-motion";
import type { SanityTestimonialItem } from "@/lib/sanity.home";

type TestimonialCardProps = {
  item: SanityTestimonialItem;
  position: "left" | "center" | "right";
};

export function TestimonialCard({ item, position }: TestimonialCardProps) {
  const isCenter = position === "center";

  return (
    <motion.article
      layout="position"
      initial={false}
      animate={{
        width: isCenter ? "46rem" : "12rem",
        height: isCenter ? "27rem" : "27rem",
        opacity: isCenter ? 1 : 0.92,
      }}
      transition={{
        layout: {
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        },
        width: {
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 0.5,
        },
      }}
      className="relative shrink-0 overflow-hidden rounded-[1.5rem] bg-black"
    >
      <Image
        src={item.thumbnail}
        alt={`${item.name} testimonial`}
        fill
        className="object-cover"
        priority={isCenter}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      {isCenter ? (
        <div className="absolute inset-x-8 bottom-8 flex items-end justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/30">
              <Image src={item.avatar} alt={item.name} fill className="object-cover" />
            </div>

            <div className="text-left">
              <p className="text-[1.35rem] leading-none font-semibold text-white">{item.name}</p>
              <p className="mt-2 text-[1rem] text-white/80">{item.role}</p>
            </div>
          </div>

          <div className="flex gap-1.5">
            {Array.from({ length: item.rating }).map((_, index) => (
              <span key={index} className="text-[1.35rem] leading-none text-[#FFC400]">
                ★
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <span className="text-[1.4rem] font-semibold text-white">View →</span>
        </div>
      )}
    </motion.article>
  );
}
