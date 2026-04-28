import Image from "next/image";
import { SectionPill } from "@/components/ui/section-pill";
import { faqsData } from "./faqs-data";
import { FaqAccordionItem } from "./faq-accordion-item";

export function FaqsSection() {
  return (
    <section className="bg-[#F7F7F5] px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-[990px] gap-[130px] lg:grid-cols-[280px_1fr]">
        <div className="relative">
          <SectionPill className="mb-8" label="FAQs" />

<h2 className="w-[430px] text-[42px] font-semibold leading-[1.12] tracking-[-0.055em] text-[#202126]">
  {faqsData.title.line1}
  <br />
  <span className="whitespace-nowrap">{faqsData.title.line2}</span>
  <br />
  <span className="font-serif italic font-normal text-[#00895F]">
    {faqsData.title.highlight}
  </span>
</h2>

          <div className="relative mt-20 h-[260px]">
            <Image
              src="/assets/service/faqs/man.svg"
              alt=""
              width={210}
              height={260}
              className="absolute bottom-0 left-0 translate-y-[10px]"
            />

            <Image
              src="/assets/service/faqs/arrow.svg"
              alt=""
              width={52}
              height={52}
              className="absolute bottom-[82px] right-[-2px]"
            />

            <p className="absolute bottom-[50px] right-[-20px] font-serif text-[20px] italic text-[#00895F]">
              {faqsData.helperText}
            </p>
          </div>
        </div>

        <div className="grid gap-3">
          {faqsData.items.map((item) => (
            <FaqAccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}