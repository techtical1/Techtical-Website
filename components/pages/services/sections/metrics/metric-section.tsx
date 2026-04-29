import { MetricCard } from "@/components/ui/metric-card";
import { servicesMetricsData } from "./metrics-data";
import { CredibilityCard } from "@/components/pages/home/credibility/credibility-card";

export function ServicesMetricsSection() {
  return (
    <section className="bg-[#F7F7F5] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-center text-[42px] font-semibold leading-none tracking-[-0.045em] text-[#202126] md:text-[52px]">
          {servicesMetricsData.title.main}{" "}
          <span className="font-serif italic font-normal text-[#00895F]">
            {servicesMetricsData.title.highlight}
          </span>
        </h2>


<div className="mt-8 grid w-full flex-cols-1 gap-8 md:grid-cols-2">
          {servicesMetricsData.metrics.map((metric) => (
            <CredibilityCard
              key={metric.title}
              icon={metric.iconSrc}
              value={metric.value}
              label={metric.title}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}