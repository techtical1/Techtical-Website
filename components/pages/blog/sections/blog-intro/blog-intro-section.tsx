import Image from "next/image";
import { Container } from "@/components/ui/container";
import { RichHeading } from "@/components/common/rich-heading";
import { TagPill } from "@/components/common/tag-pill";
import { blogIntroData } from "./blog-intro-data";

export function BlogIntroSection() {
  const { title, paragraphs, tags, image } = blogIntroData;

  return (
    <section className="bg-[#F7F7F2] py-24 md:py-28">
      <Container size="wide">
        <div className="mx-auto max-w-[1380px] rounded-[34px] border border-black/10 bg-white p-6 md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:min-h-[520px] lg:grid-cols-2 lg:items-stretch">
            {/* LEFT */}
            <div className="flex h-full flex-col justify-between">
              <div>
                <RichHeading
                  as="h2"
                  className="max-w-[680px] text-[42px] md:text-[58px]"
                  parts={[
                    { text: title.line1 },
                    {
                      text: title.highlight,
                      highlight: true,
                      newLine: true,
                    },
                  ]}
                />

                <div className="mt-8 max-w-[690px] space-y-7 text-[23px] leading-[1.28] tracking-[-0.02em] text-[#666666]">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex max-w-[720px] flex-wrap gap-3">
                {tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[360px] overflow-hidden rounded-[18px] bg-[#F3F3F1] lg:h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}