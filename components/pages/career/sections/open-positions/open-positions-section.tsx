"use client";

import { useState } from "react";
import { openPositionsData } from "./open-positions-data";
import { PositionCard } from "./position-card";

export function OpenPositionsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white px-4 py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-[66px] text-center">
          <div className="mx-auto mb-9 inline-flex h-[48px] items-center justify-center rounded-full bg-white px-9 text-[16px] font-semibold tracking-[-0.025em] text-[#00895F] shadow-[0_8px_18px_rgba(0,0,0,0.16)]">
            {openPositionsData.pill}
          </div>

          <h2 className="text-[52px] font-semibold leading-none tracking-[-0.06em] text-[#202126] md:text-[64px]">
            {openPositionsData.title.normal}{" "}
            <span className="font-serif italic font-normal text-[#00895F]">
              {openPositionsData.title.highlight}
            </span>
          </h2>
        </div>

        <div>
          {openPositionsData.positions.map((item, index) => (
            <PositionCard
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}