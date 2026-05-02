import { ProductClarityCard } from "./product-clarity-card";
import { servicesPageDefaults, type ProductClarityData } from "@/lib/sanity.services";

type Props = { data?: ProductClarityData };

export function ProductClaritySection({ data }: Props) {
  const section = data ?? servicesPageDefaults.productClarity;

  return (
    <section className="bg-[#F7F7F5] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center text-[42px] font-semibold leading-none tracking-[-0.045em] text-[#202126] md:text-[52px]">
          {section.titleMain}{" "}
          <span className="font-serif italic font-normal text-[#00895F]">
            {section.titleHighlight}
          </span>
        </h2>

        <div className="mt-12 grid gap-10">
          {section.items.map((item) => (
            <ProductClarityCard
              key={item.title}
              imageSrc={item.image}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
