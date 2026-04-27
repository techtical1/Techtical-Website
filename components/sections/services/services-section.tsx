"use client";

import { useEffect, useState } from "react";
import { services } from "./services-data";
import { ServiceListItem } from "./service-list-item";
import { ServiceVisual } from "./service-visual";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  const activeService = services[activeIndex];

  return (
<section className="flex min-h-screen items-center bg-[#FAFAF8] px-4 py-10 sm:px-6 lg:py-12">      
<div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-stretch gap-10 lg:h-[calc(100vh-6rem)] lg:max-h-[52rem] lg:grid-cols-[minmax(0,38rem)_minmax(0,52rem)] lg:gap-12 xl:gap-16">       
    <div className="flex min-h-0 min-w-0 flex-col justify-between">
          <div>
            <h2 className="text-[2.5rem] font-semibold leading-none tracking-[-0.04em] text-[#262626] sm:text-[3.25rem] lg:text-[3.75rem]">
              One partner everything
              <br />
              <span className="font-serif font-normal italic text-[#007E5B]">
                your product needs
              </span>
            </h2>

            <p className="mt-6 max-w-[34rem] text-[1rem] leading-snug text-[#656566] sm:text-[1.125rem]">
              Whether you're pre-launch or post-funding, we have a structured
              engagement for exactly where you are.
            </p>
          </div>

          <div className="mt-10 border-b border-[#E5E5E2] lg:mt-12">
            {services.map((service, index) => (
              <ServiceListItem
                key={service.id}
                service={service}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

        <div className="mt-8">
            <StrategyCallButton />
            <p className="mt-4 font-hand text-[1.125rem] normal text-[#565656]">
              Book a free call - we'll tell you in 30 minutes.
            </p>
          </div>
        </div>

        <div className="min-h-0 min-w-0">
  <ServiceVisual activeService={activeService} />
</div>
      </div>
    </section>
  );
}