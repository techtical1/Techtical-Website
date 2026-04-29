// components/common/container.tsx

import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "full";
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-5 md:px-8 lg:px-12",
        {
          "max-w-[1200px]": size === "narrow",
          "max-w-[1440px]": size === "default",
          "max-w-[1600px]": size === "wide",
          "max-w-none": size === "full",
        },
        className
      )}
    >
      {children}
    </div>
  );
}