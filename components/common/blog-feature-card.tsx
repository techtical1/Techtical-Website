import Image from "next/image";
import Link from "next/link";
import { TagPill } from "./tag-pill";

type BlogFeatureCardProps = {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  tag: string;
};

export function BlogFeatureCard({
  slug,
  image,
  category,
  title,
  description,
  tag,
}: BlogFeatureCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative grid gap-8 rounded-[28px] border border-black/10 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.12)] md:grid-cols-[420px_1fr]"
    >
      <div className="relative h-[260px] overflow-hidden rounded-[18px] bg-[#F3F3F1]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-col justify-center">
        <TagPill label={category} size="md" className="w-fit"/>

        <h3 className="mt-4 text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#202126] transition duration-300 group-hover:text-[#00895F]">
          {title}
        </h3>

        <p className="mt-3 max-w-[680px] text-[16px] leading-[1.5] text-[#666]">
          {description}
        </p>

        <div className="mt-5">
          <span className="rounded-full border border-[#00895F] px-4 py-1.5 text-[14px] text-[#00895F]  bg-[#E6F7F1]">
            {tag}
          </span>
        </div>
      </div>

      <div className="absolute right-0 top-6 rounded-l-full bg-[#00895F] px-4 py-1 text-[14px] text-white">
        Latest
      </div>
    </Link>
  );
}