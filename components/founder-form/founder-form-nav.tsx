"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

type FounderFormNavProps = {
  canGoBack: boolean;
  canGoNext: boolean;
  onBack: () => void;
  onNext: () => void;
};

const baseStyle =
  "flex h-[42px] w-[42px] items-center justify-center rounded-full border-[0.7px] border-[#E9ECF3] bg-[linear-gradient(180deg,#8B8E97_0%,#E9ECF3_100%)] text-[#141519] backdrop-blur-xl transition";

export function FounderFormNav({
  canGoBack,
  canGoNext,
  onBack,
  onNext,
}: FounderFormNavProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onBack}
        disabled={!canGoBack}
        className={`${baseStyle} disabled:opacity-40`}
        aria-label="Previous question"
      >
        <ArrowLeft size={18} />
      </button>

      {canGoNext && (
        <button
          type="button"
          onClick={onNext}
          className={baseStyle}
          aria-label="Next question"
        >
          <ArrowRight size={18} />
        </button>
      )}
    </div>
  );
}