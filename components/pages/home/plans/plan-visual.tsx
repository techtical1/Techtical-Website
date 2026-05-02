import Image from "next/image";
import type { SanityPlanItem } from "@/lib/sanity.home";

type PlanVisualProps = {
  plan: SanityPlanItem;
};

export function PlanVisual({ plan }: PlanVisualProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[55%] items-end justify-center">
      <div className="relative h-full w-full max-w-[90%]">
        <Image
          src={
            plan.visualType === "laptop"
              ? "/assets/plans/laptop-preview.png"
              : "/assets/plans/deep-purple.png"
          }
          alt="Plan visual"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </div>
  );
}
