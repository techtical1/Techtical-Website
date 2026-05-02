import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { RichHeading } from "@/components/common/rich-heading";
import { blogPageDefaults, type BlogCtaData } from "@/lib/sanity.blog-page";

type Props = { data?: BlogCtaData };

export function BlogCtaSection({ data }: Props) {
  const { pill, title, description, cta } = data ?? blogPageDefaults.cta;

  return (
    <section className="relative overflow-hidden bg-[#F7F7F2] py-28 md:py-36">
  
      <Container size="wide">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center text-center">
          <SectionPill label={pill} className="mb-10 bg-white text-[#00895F]" />

          <RichHeading
            as="h2"
            className="text-[64px] leading-[1.08] md:text-[104px]"
            parts={[
              { text: title.line1 },
              {
                text: title.highlight,
                highlight: true,
              },
              {
                text: title.line2,
                newLine: true,
              },
            ]}
          />

          <p className="mt-10 max-w-[720px] text-[24px] leading-[1.25] tracking-[-0.02em] text-[#666666]">
            {description}
          </p>

          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
            <StrategyCallButton variant="primary">
              {cta.primary}
            </StrategyCallButton>

            <StrategyCallButton variant="secondary">
              {cta.secondary}
            </StrategyCallButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
