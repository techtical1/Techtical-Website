import { SectionPill } from "@/components/ui/section-pill";
import { TestimonialCarousel } from "./testimonial-carousel";

export function TestimonialsSection() {
  return (
    <section className="flex min-h-screen items-center bg-[#FAFAF8] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto flex w-full max-w-[78rem] flex-col items-center text-center">
        <SectionPill label="Across Fiverr & Client Projects" />

        <h2 className="mt-8 text-[2.4rem] leading-tight font-semibold tracking-[-0.045em] text-[#262626] sm:text-[3rem] lg:text-[3.75rem]">
          From teams who needed{" "}
          <span className="font-serif font-normal text-[#007E5B] italic">clarity</span>
        </h2>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
