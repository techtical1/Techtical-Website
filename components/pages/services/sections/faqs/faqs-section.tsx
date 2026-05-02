import Image from "next/image";
import { SectionPill } from "@/components/ui/section-pill";
import { FaqAccordionItem } from "./faq-accordion-item";
import { servicesPageDefaults, type ServicesFaqsData } from "@/lib/sanity.services";

type Props = { data?: ServicesFaqsData };

export function FaqsSection({ data }: Props) {
  const section = data ?? servicesPageDefaults.faqs;

  return (
    <section className="bg-[#F7F7F5] px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-[990px] gap-[130px] lg:grid-cols-[280px_1fr]">
        <div className="relative">
          <SectionPill className="mb-8" label={section.pill} />

<h2 className="w-[430px] text-[42px] font-semibold leading-[1.12] tracking-[-0.055em] text-[#202126]">
  {section.titleLine1}
  <br />
  <span className="whitespace-nowrap">{section.titleLine2}</span>
  <br />
  <span className="font-serif italic font-normal text-[#00895F]">
    {section.titleHighlight}
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
              {section.helperText}
            </p>
          </div>
        </div>

        <div className="grid gap-3">
          {section.items.map((item) => (
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
