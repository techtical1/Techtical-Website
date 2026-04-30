import Image from "next/image";
import { Container } from "@/components/ui/container";
import { RichHeading } from "@/components/common/rich-heading";
import { whoWeAreData } from "./who-we-are-data";

export function WhoWeAreSection() {
  const { title, description, cards } = whoWeAreData;

  return (
    <section className="bg-[#F7F7F2]">
      <Container size="full" className="px-0">
        <div className="border-y border-black/10">
          <div className="mx-auto max-w-[820px] px-5 py-12 text-center md:py-16">
            <RichHeading
              as="h2"
              className="text-[34px] md:text-[44px]"
              parts={[
                { text: title.normal },
                { text: title.highlight, highlight: true },
              ]}
            />

            <p className="mt-5 text-[17px] leading-[1.45] tracking-[-0.02em] text-[#666666] md:text-[19px]">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-black/10 md:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="group flex min-h-[250px] flex-col items-center justify-center border-b border-black/10 px-8 py-12 text-center transition duration-500 hover:bg-white hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:border-b-0 md:border-r last:md:border-r-0"
              >
                <div className="flex h-12 w-12 items-center justify-center transition duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  <Image
                    src={card.icon}
                    alt=""
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-6 text-[22px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#202126] md:text-[24px]">
                  {card.title}
                </h3>

                <p className="mt-4 max-w-[390px] text-[14px] leading-[1.45] tracking-[-0.01em] text-[#666666] md:text-[15px]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}