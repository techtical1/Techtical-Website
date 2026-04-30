import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { RichHeading } from "@/components/common/rich-heading";
import { BenefitCard } from "@/components/common/benefit-card";
import { whyWorkWithUsData } from "./why-work-with-us-data";

export function WhyWorkWithUsSection() {
  const { pill, title, description, benefits } = whyWorkWithUsData;

  return (
    <section className="bg-[#F7F7F2] py-24 md:py-28">
      <Container>
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT BENEFIT CARDS */}
          <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                variant={index === 0 ? "default" : "tilted"}
                size="lg"
                className={benefit.className}
              />
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:pl-12">
            <SectionPill
              label={pill}
              className="mb-10 bg-white text-[#00895F]"
            />

            <RichHeading
              as="h2"
              className="text-[48px] md:text-[72px]"
              parts={[
                { text: title.normal },
                { text: title.highlight, highlight: true },
              ]}
            />

            <p className="mt-8 max-w-[480px] text-[26px] leading-[1.25] tracking-[-0.03em] text-[#666666]">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}