import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

const buttonConfig = {
  primary: {
    image: "/assets/button/button-primary.png",
    imageClassName: "h-[13.5rem] w-[28.0625rem]",
    textClassName: "text-white",
    widthClassName: "w-[18.0625rem]",
  },
  secondary: {
    image: "/assets/button/button-secondary.png",
    imageClassName: "h-14 w-[18.0625rem]",
    textClassName: "text-[#202020]",
    widthClassName: "w-[18.0625rem]",
  },
} as const;

export function StrategyCallButton({
  href = "#contact",
  children = "Book A Free Strategy Call",
  className,
  variant = "primary",
}: {
  href?: string;
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}) {
  const config = buttonConfig[variant];

  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex h-14 items-center justify-center overflow-visible rounded-[9.375rem] px-[3.125rem] py-3 text-center text-base leading-none font-bold",
        "transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00E18E]",
        config.widthClassName,
        className,
      )}
    >
      <Image
        src={config.image}
        width={variant === "primary" ? 1796 : 1156}
        height={variant === "primary" ? 864 : 224}
        alt=""
        priority={variant === "primary"}
        className={cn(
          "pointer-events-none absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain",
          config.imageClassName,
        )}
        aria-hidden="true"
      />
      <span className={cn("relative z-10 whitespace-nowrap", config.textClassName)}>
        {children}
      </span>
    </Link>
  );
}
