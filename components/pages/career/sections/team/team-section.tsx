import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { RichHeading } from "@/components/common/rich-heading";
import { TeamMemberCard } from "@/components/common/team-member-card";
import { teamSectionData } from "./team-section-data";

export function TeamSection() {
  const { pill, title, description, members } = teamSectionData;

  const loopMembers = [...members, ...members];

  return (
    <section className="overflow-hidden bg-[#F7F7F2] py-24 md:py-28">
      <Container size="wide">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center text-center">
          <SectionPill label={pill} className="mb-8 bg-white text-[#00895F]" />

          <RichHeading
            as="h2"
            className="text-[42px] md:text-[58px]"
            parts={[
              { text: title.normal },
              { text: title.highlight, highlight: true },
            ]}
          />

          <p className="mt-6 text-[22px] leading-[1.3] tracking-[-0.02em] text-[#666666]">
            {description}
          </p>
        </div>
      </Container>

      <div className="relative mt-16">
        <div className="team-scroll flex w-max gap-14">
          {loopMembers.map((member, index) => (
            <TeamMemberCard
              key={`${member.name}-${index}`}
              name={member.name}
              role={member.role}
              image={member.image}
              active={member.active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}