"use client";

import { StrategyCallButton } from "@/components/ui/strategy-call-button";

type PositionItem = {
  id: string;
  role: string;
  type: string;
  description?: string[];
  cta?: {
    label: string;
    href: string;
  };
  emailText?: string;
  email?: string;
  footerText?: {
    normal: string;
    highlight: string;
  };
};

type PositionCardProps = {
  item: PositionItem;
  isOpen: boolean;
  onToggle: () => void;
};

export function PositionCard({ item, isOpen, onToggle }: PositionCardProps) {
  return (
    <article className="border-b border-dashed border-[#D7D7D7] py-[46px] first:pt-0 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="grid w-full grid-cols-[78px_1fr_60px] items-start text-left"
        aria-expanded={isOpen}
      >
        <span className="flex h-[60px] w-[60px] items-center justify-center rounded-[16px] border border-[#E6E6E6] bg-white text-[22px] font-medium tracking-[-0.03em] text-[#00895F] shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
          {item.id}
        </span>

        <span>
          <span className="block text-[26px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#202126]">
            {item.role}
          </span>

          <span className="mt-3 block text-[17px] font-semibold leading-none tracking-[-0.025em] text-[#00895F]">
            {item.type}
          </span>
        </span>

        <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#DFFFF5] text-[34px] font-light leading-none text-[#202126]">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="mt-[30px] pl-[78px]">
          <div className="max-w-[1340px] space-y-[18px] text-[17px] font-medium leading-[1.25] tracking-[-0.025em] text-[#686B6A]">
            {item.description?.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="mt-[58px] grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <p className="text-[28px] font-semibold tracking-[-0.05em] text-[#202126]">
              {item.footerText?.normal}{" "}
              <span className="font-serif italic font-normal text-[#00895F]">
                {item.footerText?.highlight}
              </span>
            </p>

          
            <div className="text-left md:text-right">
              {item.cta && (
                <StrategyCallButton className="inline-flex h-[56px] min-w-[196px] items-center justify-center rounded-full bg-[#00B878] px-8 text-[15px] font-semibold text-white shadow-[inset_0_-10px_18px_rgba(0,91,62,0.35),0_18px_42px_rgba(0,184,120,0.28)] transition hover:-translate-y-0.5" href={item.cta.href}
                 > {item.cta.label}</StrategyCallButton>
              )}

              {item.email && (
                <p className="mt-4 text-[16px] font-medium tracking-[-0.025em] text-[#686B6A]">
                  {item.emailText}{" "}
                  <a
                    href={`mailto:${item.email}`}
                    onClick={(event) => event.stopPropagation()}
                    className="font-semibold text-[#00895F]"
                  >
                    {item.email}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}