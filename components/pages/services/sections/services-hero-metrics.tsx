import { servicesPageDefaults, type ServicesHeroData } from "@/lib/sanity.services";

type Props = { data?: ServicesHeroData };

export function ServicesHeroMetrics({ data }: Props) {
  const hero = data ?? servicesPageDefaults.hero;
  const metrics = hero.metrics.length ? hero.metrics : servicesPageDefaults.hero.metrics;
  const [partners, success, projects, delivery] = metrics;

  return (
<div className="pointer-events-none relative hidden h-[620px] w-full max-w-[640px] overflow-hidden lg:block">      
  <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F5] via-transparent to-[#F7F7F5]" />

        <div className="grid h-full grid-cols-2 grid-rows-3 border-y border-black/[0.06]">
        <div className="border-r border-black/[0.06]" />
        <MetricCell value={partners?.value ?? "120+"} label={partners?.label ?? "Long-Term Partners"} faded={partners?.faded ?? true} />

        <div className="relative border-r border-t border-black/[0.06]">
          <div className="absolute left-8 top-10 rounded-[18px] bg-white px-7 py-6 shadow-[0_28px_90px_rgba(0,0,0,0.08)]">
            <div className="mb-4 flex -space-x-3">
              {["#d8f5ea", "#ffc7b8", "#f2d7ff", "#ffe1a8", "#d9eefc"].map(
                (color) => (
                  <span
                    key={color}
                    className="h-10 w-10 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
            <div className="text-[26px] leading-none text-[#00895F]">
              ★★★★★
            </div>
            <p className="mt-2 text-[18px] font-medium text-[#202126]">
              {hero.ratingText}
            </p>
          </div>
        </div>

        <div className="grid border-t border-black/[0.06]">
          <MetricCell value={success?.value ?? "96%"} label={success?.label ?? "Success Rate"} faded={success?.faded} />
          <div className="border-t border-black/[0.06]" />
          <MetricCell value={projects?.value ?? "250+"} label={projects?.label ?? "Projects Delivered"} faded={projects?.faded} />
        </div>

        <div className="border-r border-t border-black/[0.06]" />
        <MetricCell value={delivery?.value ?? "98%"} label={delivery?.label ?? "On-Time Delivery"} faded={delivery?.faded ?? true} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F5] via-transparent to-[#F7F7F5]" />
    </div>
  );
}

function MetricCell({
  value,
  label,
  faded = false,
}: {
  value: string;
  label: string;
  faded?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        faded ? "opacity-25" : ""
      }`}
    >
      <p className="text-[48px] font-semibold leading-none tracking-[-0.06em] text-[#202126]">
        {value}
      </p>
      <p className="mt-3 text-[16px] text-black/45">{label}</p>
    </div>
  );
}
