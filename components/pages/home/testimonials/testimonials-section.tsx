import { SectionPill } from "@/components/ui/section-pill";
import { TestimonialCarousel } from "./testimonial-carousel";
import { homePageDefaults, type SanityTestimonialsData } from "@/lib/sanity.home";

type Props = { data?: SanityTestimonialsData };

export function TestimonialsSection({ data }: Props) {
  const defaults = homePageDefaults.testimonials;
  const pillLabel = data?.pillLabel ?? defaults.pillLabel;
  const headingPrefix = data?.headingPrefix ?? defaults.headingPrefix;
  const headingHighlight = data?.headingHighlight ?? defaults.headingHighlight;

  return (
    <section className="flex min-h-screen items-center bg-[#FAFAF8] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto flex w-full max-w-[78rem] flex-col items-center text-center">
        <SectionPill label={pillLabel} />
        <h2 className="mt-8 text-[2.4rem] leading-tight font-semibold tracking-[-0.045em] text-[#262626] sm:text-[3rem] lg:text-[3.75rem]">
          {headingPrefix}{" "}
          <span className="font-serif font-normal text-[#007E5B] italic">{headingHighlight}</span>
        </h2>
        <TestimonialCarousel testimonials={data?.testimonials} />
      </div>
    </section>
  );
}
