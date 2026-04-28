"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqAccordionItemProps = {
  question: string;
  answer: string;
};

export function FaqAccordionItem({
  question,
  answer,
}: FaqAccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[12px] bg-[#F0F1F4]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
      >
        <span className="text-[17px] font-medium tracking-[-0.02em] text-[#202126]">
          {question}
        </span>

        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 text-[#202126] transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[15px] leading-[1.5] text-black/55">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}