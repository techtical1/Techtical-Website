import { productClarityData } from "./product-clarity-data";
import { ProductClarityCard } from "./product-clarity-card";

export function ProductClaritySection() {
  return (
    <section className="bg-[#F7F7F5] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center text-[42px] font-semibold leading-none tracking-[-0.045em] text-[#202126] md:text-[52px]">
          {productClarityData.title.main}{" "}
          <span className="font-serif italic font-normal text-[#00895F]">
            {productClarityData.title.highlight}
          </span>
        </h2>

        <div className="mt-12 grid gap-10">
          {productClarityData.items.map((item) => (
            <ProductClarityCard
              key={item.title}
              imageSrc={item.imageSrc}
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