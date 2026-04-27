"use client";

import Image from "next/image";

const floatingNavItems = [
  { label: "Services", count: "07" },
  { label: "Projects", count: "24" },
  { label: "How we work", count: undefined },
] as const;

export function FloatingBottomNav() {
  return (
    <div className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2">
      <div className="flex w-fit items-center justify-center rounded-[1.5rem] border border-[#262626] bg-[linear-gradient(180deg,rgba(38,38,38,0.66)_0%,rgba(38,38,38,0.66)_100%)] px-[0.625rem] py-[0.5625rem] shadow-[0_5px_4px_0_rgba(0,0,0,0.35),0_8px_8px_0_rgba(251,249,248,0.04)_inset] backdrop-blur-[24px]">
        <div className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center">
            <Image
              src="/assets/hero/techtical-icon.png"
              alt="Techtical Solution"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>

          <div className="mx-2 h-9 w-px bg-white/15" />

          {floatingNavItems.map((item) => (
            <button
              key={item.label}
              className="rounded-full px-4 py-3 text-[14px] font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
              {item.count && (
                <span className="ml-1 text-[12px] font-semibold text-[#00E892]">{item.count}</span>
              )}
            </button>
          ))}

          <button
            className="ml-2 rounded-full px-7 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
            style={{
              backgroundImage: "url('/assets/button/button-secondary.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {" "}
            Contact Us{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
