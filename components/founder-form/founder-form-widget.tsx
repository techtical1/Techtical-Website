"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FounderFormModal } from "./founder-form-modal";

export function FounderFormWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[998] flex items-center gap-3 rounded-full border border-white/10 bg-[#141519]/90 px-3 py-2 pr-5 text-left shadow-2xl backdrop-blur-xl transition hover:scale-[1.02] hover:border-[#00E18E]/40"
      >
        <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10">
          <Image
            src="/assets/founder/founder.jpg"
            alt="Founder"
            fill
            className="object-cover"
          />
        </span>

        <span className="flex flex-col leading-tight">
          <span className="text-sm font-medium text-white">Talk to founder</span>
          <span className="text-xs text-white/55">Free product advice</span>
        </span>
      </button>

      <FounderFormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}