// components/common/insight-stat-card.tsx

import Image from "next/image";
import { cn } from "@/lib/utils";
import { FloatingCard } from "./floating-card";
import { TrustBrandPill } from "./trust-brand-pill";
import { ClientAvatarRow } from "./client-avatar-row";

type Brand = {
  name: string;
  logo: string;
};

type InsightStatCardProps = {
  title: string;
  description: string;
  type: "brands" | "avatars" | "image";
  brands?: Brand[];
  badge?: string;
  image?: string;
  className?: string;
  delay?: number;
};

export function InsightStatCard({
  title,
  description,
  type,
  brands = [],
  badge,
  image,
  className,
  delay,
}: InsightStatCardProps) {
  return (
    <FloatingCard className={className} delay={delay}>
      <h3 className="whitespace-pre-line text-center text-[22px] font-regular leading-[1.15] tracking-[-0.03em] text-[#202126]">
        {title}
      </h3>

      <div className="mt-7 flex items-center justify-center gap-2">
        {type === "brands" &&
          brands.map((brand) => (
            <TrustBrandPill
              key={brand.name}
              name={brand.name}
              logo={brand.logo}
            />
          ))}

        {type === "brands" && badge && (
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-black/10 bg-white text-[15px] font-medium text-[#00895F] shadow-sm">
            {badge}
          </div>
        )}

        {type === "avatars" && image && <ClientAvatarRow image={image} className="flex h-[42px] px-1 py-1 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm" />}

        {type === "image" && image && (
          <Image 
            src={image}
            alt=""
            width={120}
            height={55}
            className="object-contain flex h-[42px] px-1 py-1 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm"
          />
        )}
      </div>

      <p className="mx-auto mt-6 max-w-[260px] text-center text-[14px] font-regular leading-[1.35] text-[#707070]">
        {description}
      </p>
    </FloatingCard>
  );
}