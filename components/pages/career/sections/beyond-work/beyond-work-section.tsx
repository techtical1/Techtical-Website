import Image from "next/image";
import { Container } from "@/components/ui/container";
import { RichHeading } from "@/components/common/rich-heading";
import { careerPageDefaults, type BeyondWorkData } from "@/lib/sanity.career";

function CultureImageCard({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "group absolute overflow-hidden rounded-[26px] bg-[#F3F3F1]",
        "transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]",
        className,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
      />
    </div>
  );
}

type Props = { data?: BeyondWorkData };

export function BeyondWorkSection({ data }: Props) {
  const { title, subtitle, description, images } = data ?? careerPageDefaults.beyondWork;

  return (
    <section className="overflow-hidden bg-[#F7F7F2] py-20 md:py-24">
      <Container size="wide">
        <div className="mx-auto max-w-[1400px] text-center">
          <RichHeading
            as="h2"
            className="text-[42px] md:text-[58px]"
            parts={[
              { text: title.normal },
              { text: title.highlight, highlight: true },
            ]}
          />

          <p className="mt-6 text-[22px] leading-[1.35] tracking-[-0.02em] text-[#666666]">
            {subtitle}
          </p>
        </div>

        <div className="relative mx-auto mt-10 h-[900px] max-w-[1400px]">
          <p className="absolute left-0 top-[72px] z-[3] max-w-[620px] text-left text-[23px] leading-[1.55] tracking-[-0.02em] text-[#202126]">
            {description}
          </p>

          <div className="hidden lg:block">
            {images.map((image) => (
              <CultureImageCard
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={image.className}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:hidden">
            <p className="text-left text-[20px] leading-[1.45] text-[#202126]">
              {description}
            </p>

            {images.map((image) => (
              <div
                key={image.src}
                className="relative h-[320px] overflow-hidden rounded-[24px] bg-[#F3F3F1]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
