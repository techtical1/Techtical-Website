// components/common/trust-brand-pill.tsx

import Image from "next/image";
import { cn } from "@/lib/utils";

type TrustBrandPillProps = {
  name: string;
  logo: string;
  className?: string;
};

export function TrustBrandPill({
  name,
  logo,
  className,
}: TrustBrandPillProps) {
  return (
    <div
      className={cn(
        "flex h-[42px] min-w-[92px] items-center justify-center rounded-full border border-black/10 bg-white px-3 shadow-sm",
        className
      )}
    >
      <Image
        src={logo}
        alt={name}
        width={74}
        height={24}
        className="max-h-[24px] object-contain"
      />
    </div>
  );
}