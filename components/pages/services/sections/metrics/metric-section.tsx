import { CredibilityCard } from "@/components/pages/home/credibility/credibility-card";
import { servicesPageDefaults, type ServicesMetricsData } from "@/lib/sanity.services";

type Props = { data?: ServicesMetricsData };

export function ServicesMetricsSection({ data }: Props) {
  const section = data ?? servicesPageDefaults.metrics;

  return (
    <section className="bg-[#F7F7F5] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center text-[42px] font-semibold leading-none tracking-[-0.045em] text-[#202126] md:text-[52px]">
          {section.titleMain}{" "}
          <span className="font-serif italic font-normal text-[#00895F]">
            {section.titleHighlight}
          </span>
        </h2>


<div className="mt-8 grid w-full flex-cols-1 gap-8 md:grid-cols-2">
          {section.metrics.map((metric) => (
            <CredibilityCard
              key={metric.label}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
