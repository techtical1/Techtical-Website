import Image from "next/image";
import Link from "next/link";
import { BadgeTag } from "./badge-tag";
import { ReadLink } from "./read-link";

type BlogCardProps = {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  tag: string;
};

export function BlogCard({
  slug,
  image,
  category,
  title,
  description,
  tag,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-[22px] border border-black/10 bg-white p-4 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]"
    >
      <div className="relative h-[180px] overflow-hidden rounded-[16px] bg-[#F3F3F1]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.06]"
        />

        <div className="absolute right-3 top-3 transition duration-500 group-hover:-translate-y-0.5">
          <BadgeTag label={category} />
        </div>
      </div>

      <h4 className="mt-4 text-[18px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#202126] transition duration-300 group-hover:text-[#00895F]">
        {title}
      </h4>

      <p className="mt-2 line-clamp-3 text-[14px] leading-[1.45] text-[#666]">
        {description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full border border-[#00895F] px-3 py-1 text-[13px] text-[#00895F] bg-[#E6F7F1]">
          {tag}
        </span>

        <ReadLink />
      </div>
    </Link>
  );
}