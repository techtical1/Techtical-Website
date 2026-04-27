"use client";

import { useState } from "react";
import Image from "next/image";

export function OwnerChatCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 rounded-3xl border border-black/10 bg-white p-5 shadow-2xl">
          <p className="text-sm font-semibold text-black">Need help with your product?</p>

          <p className="mt-2 text-sm leading-6 text-black/60">
            Hi, I’m Nilay from Techtical Solution. Tell us what you’re building and we’ll guide you
            with the right product direction.
          </p>

          <button className="mt-4 w-full rounded-full bg-[#00E892] px-5 py-3 text-sm font-semibold text-black">
            Book A Free Strategy Call
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 rounded-3xl border border-black/10 bg-white p-2 pr-4 shadow-2xl transition hover:-translate-y-1"
      >
        <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src="/assets/common/owner.png"
            alt="Agency owner"
            fill
            className="object-cover"
          />
        </div>

        <div className="hidden text-left md:block">
          <p className="text-sm font-semibold text-black">Talk to founder</p>
          <p className="text-xs text-black/50">Free product advice</p>
        </div>
      </button>
    </div>
  );
}
