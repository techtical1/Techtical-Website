import Image from "next/image";
import { cn } from "@/lib/utils";

type TeamMemberCardProps = {
  name: string;
  role: string;
  image: string;
  active?: boolean;
  className?: string;
};

export function TeamMemberCard({
  name,
  role,
  image,
  active = false,
  className,
}: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "group w-[320px] shrink-0 text-center transition duration-500 md:w-[390px]",
        active ? "scale-100" : "opacity-45 grayscale hover:opacity-100 hover:grayscale-0",
        className
      )}
    >
      <div
        className={cn(
          "relative h-[360px] overflow-hidden rounded-[32px] bg-[#ECEEED] transition duration-500 md:h-[440px]",
          active && "shadow-[0_24px_70px_rgba(0,0,0,0.12)]",
          "group-hover:-translate-y-2 group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
        />
      </div>

      <h3 className="mt-8 text-[28px] font-semibold leading-none tracking-[-0.04em] text-[#202126] md:text-[34px]">
        {name}
      </h3>

      <p className="mt-4 text-[17px] leading-none text-[#666666] md:text-[20px]">
        {role}
      </p>
    </article>
  );
}