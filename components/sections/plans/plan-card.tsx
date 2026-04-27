import type { PlanItem } from "./plans-data";
import { PlanFeature } from "./plan-feature";
import { PlanVisual } from "./plan-visual";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";

type PlanCardProps = {
  plan: PlanItem;
};

export function PlanCard({ plan }: PlanCardProps) {
  const isGreen = plan.theme === "green";

  return (
    <article
      className={`relative isolate flex h-[38rem] min-w-0 flex-col overflow-hidden border ${
        isGreen
          ? "rounded-[2rem] border-[#DCDDDB] bg-[linear-gradient(0deg,#00B573_-20.26%,#025B3A_100%)] text-white shadow-[0_0_20px_0_rgba(0,0,0,0.10)]"
          : "rounded-[2rem] border-[#DCDCDC] bg-white text-[#262626] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
      }`}
    >
      {isGreen && (
        <div className="pointer-events-none absolute left-0 top-0 z-9 h-full w-12 bg-[linear-gradient(90deg,#025B3A_0%,rgba(2,91,58,0)_100%)]" />
      )}

      <div
        className={`relative z-10 shrink-0 border-b py-7 ${
          isGreen
            ? "border-white/10 pl-16 pr-10"
            : "border-black/10 px-10"
        }`}
      >
        <h3 className="text-[1.75rem] leading-tight font-semibold tracking-[-0.03em] sm:text-[2rem]">
          {plan.title}
        </h3>
      </div>

      <div
        className={`relative z-10 flex min-h-0 flex-1 flex-col py-7 pb-[40%] ${
          isGreen ? "pl-16 pr-10" : "px-10"
        }`}
      >
        <div className="shrink-0">
          <ul className="space-y-4 text-left">
            {plan.features.map((feature) => (
              <PlanFeature key={feature} label={feature} theme={plan.theme} />
            ))}
          </ul>

          <div className="mt-7 flex justify-start">
            <StrategyCallButton
              href="#contact"
              variant={isGreen ? "secondary" : "primary"}
              className={isGreen ? "w-[13.5rem]" : "w-[18.0625rem]"}
            >
              {plan.ctaLabel}
            </StrategyCallButton>
          </div>
        </div>

        <PlanVisual plan={plan} />
      </div>
    </article>
  );
}