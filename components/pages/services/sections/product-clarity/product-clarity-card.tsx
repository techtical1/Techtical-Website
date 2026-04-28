import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductClarityCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
};

export function ProductClarityCard({
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
  className,
}: ProductClarityCardProps) {
  return (
    <article
      className={cn(
        "mx-auto flex h-[600px] w-full max-w-[1440px] shrink-0 items-center justify-between gap-[50px] rounded-[40px] border border-[#DCDDDB] bg-white p-[50px] shadow-[0_0_36px_0_rgba(0,0,0,0.10)]",
        className
      )}
    >
      {/* Left Image */}
      <div className="relative h-[500px] w-[620px] shrink-0 overflow-hidden rounded-[28px] bg-[#F4F4F2]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="620px"
        />
      </div>

      {/* Right Content */}
      <div className="flex h-[500px] w-[680px] flex-col justify-between">
        <div>
          <h3 className="text-[48px] font-semibold leading-[1.12] tracking-[-0.055em] text-[#202126]">
            {title}
          </h3>

          <p className="mt-[30px] text-[22px] leading-[1.3] tracking-[-0.025em] text-[#686869]">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-[14px] gap-y-[14px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#F2F2F1] px-[22px] py-[11px] text-[17px] font-medium leading-none tracking-[-0.02em] text-[#303033]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}