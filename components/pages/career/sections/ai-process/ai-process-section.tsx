import { Container } from "@/components/ui/container";
import { RichHeading } from "@/components/common/rich-heading";
import { careerPageDefaults, type AiProcessData } from "@/lib/sanity.career";
import { VideoPlayer } from "@/components/ui/video-player/video-player";

type Props = { data?: AiProcessData };

export function AiProcessSection({ data }: Props) {
  const { title, subtitle, video } = data ?? careerPageDefaults.aiProcess;

  return (
    <section className="bg-[#F7F7F2] py-24 md:py-28">
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

          <div className="mt-14 overflow-hidden rounded-[32px] bg-[#EDEDEA]">
           <VideoPlayer
                src={video.src}
                poster={video.poster}
                autoPlay
                muted
                loop
                className="h-[420px] md:h-[620px]"
                />
          </div>
        </div>
      </Container>
    </section>
  );
}
