// components/pages/blog/sections/challenge-explorer/challenge-explorer-section.tsx

import { Container } from "@/components/ui/container";
import { RichHeading } from "@/components/common/rich-heading";
import { ChallengeLinkCard } from "@/components/common/challenge-link-card";
import { challengeExplorerData } from "./challenge-explorer-data";

export function ChallengeExplorerSection() {
  const { title, description, challenges } = challengeExplorerData;

  return (
    <section className="bg-[#F3F4F6] py-24 md:py-28">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <RichHeading
            as="h2"
            className="max-w-[620px] text-[42px] md:text-[56px]"
            parts={[
              { text: title.line1 },
              { text: title.line2, newLine: true },
              { text: title.highlight, highlight: true },
            ]}
          />

          <p className="max-w-[520px] justify-self-end text-[26px] leading-[1.18] tracking-[-0.03em] text-[#666] lg:justify-self-end lg:pt-6 lg:text-right">
            {description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <ChallengeLinkCard
              key={challenge.index}
              index={challenge.index}
              label={challenge.label}
              href={challenge.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}