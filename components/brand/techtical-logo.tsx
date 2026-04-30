import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "light" | "dark";
type LogoType = "mark" | "logo";
type LogoSize = "sm" | "md" | "lg" | "xl";

const logoAssets = {
  light: {
    mark: "/assets/common/light icon.svg",
    logo: "/assets/common/light logo.svg",
  },
  dark: {
    mark: "/assets/common/dark icon.svg",
    logo: "/assets/common/dark logo.svg",
  },
} as const;

const sizeClasses = {
  mark: {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-12 w-12",
    xl: "h-14 w-14",
  },
  logo: {
    sm: "h-auto w-[150px]",
    md: "h-auto w-[190px]",
    lg: "h-auto w-[230px]",
    xl: "h-auto w-[270px]",
  },
} as const;

type TechticalLogoProps = {
  variant?: LogoVariant;
  type?: LogoType;
  size?: LogoSize;
  className?: string;
  priority?: boolean;
};

export function TechticalLogo({
  variant = "dark",
  type = "logo",
  size = "md",
  className,
  priority = false,
}: TechticalLogoProps) {
  const src = logoAssets[variant][type];

  return (
    <Image
      src={src}
      alt="Techtical Solution"
      width={type === "mark" ? 64 : 270}
      height={type === "mark" ? 64 : 90}
      priority={priority}
      className={cn("object-contain", sizeClasses[type][size], className)}
    />
  );
}
