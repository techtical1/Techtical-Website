// components/common/client-avatar-row.tsx

import Image from "next/image";
import { cn } from "@/lib/utils";

type ClientAvatarRowProps = {
  image: string;
  alt?: string;
  className?: string;
};

export function ClientAvatarRow({
  image,
  alt = "Client avatars",
  className,
}: ClientAvatarRowProps) {
  return (
    <Image
      src={image}
      alt={alt}
      width={150}
      height={44}
      className={cn("object-contain", className)}
    />
  );
}