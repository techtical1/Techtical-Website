import { StrategyCallButton } from "@/components/ui/strategy-call-button";

type StartSmallCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export function StartSmallCard({
  eyebrow,
  title,
  description,
  ctaLabel,
  href,
}: StartSmallCardProps) {
  return (
    <article className="rounded-[2rem] border border-[#E5E5E2] bg-white px-8 py-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:px-10">
      <p className="text-[0.95rem] font-semibold tracking-[0.03em] text-[#007E5B] uppercase">
        {eyebrow}
      </p>

      <h3 className="mt-7 text-[2.25rem] leading-none font-medium tracking-[-0.04em] text-[#262626] sm:text-[2.75rem]">
        {title}
      </h3>

      <p className="mt-5 max-w-[34rem] text-[1.35rem] leading-snug text-[#656566]">{description}</p>

      <div className="mt-8 ml-8 w-full">
        <StrategyCallButton href={href} variant="secondary" className="w-full max-w-[14rem]">
          {ctaLabel}
        </StrategyCallButton>
      </div>
    </article>
  );
}
