import Image from "next/image";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  iconSrc: string;
  iconAlt: string;
  value: string;
  title: string;
  description: string;
  className?: string;

  cardWidth?: string;
  cardHeight?: string;

  shapeWidth?: string;
  shapeHeight?: string;

  pillWidth?: string;
  pillHeight?: string;
  pillLeft?: string;
  pillTop?: string;

  iconWidth?: number;
  iconHeight?: number;
};

export function MetricCard({
  iconSrc,
  iconAlt,
  value,
  title,
  description,
  className,

  cardWidth = "w-full max-w-[398px]",
  cardHeight = "h-[210px]",

 shapeWidth = "w-56",
shapeHeight = "h-28",
pillWidth = "w-48",
pillHeight = "h-20",
pillLeft = "left-[15px]",
pillTop = "top-[15px]",


  iconWidth = 40,
  iconHeight = 40,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center overflow-hidden rounded-[36px] border border-zinc-300/50 bg-white px-6 py-7 text-center",
        cardWidth,
        cardHeight,
        className
      )}
    >
     <div className={cn("relative", shapeWidth, shapeHeight)}>
  <div
    className={cn(
      "absolute left-0 top-0 rounded-full bg-zinc-100",
      shapeWidth,
      shapeHeight
    )}
  />

  <div
    className={cn(
      "absolute flex items-center justify-center overflow-hidden rounded-full border-b-[5px] border-zinc-100 bg-white shadow-[0px_4px_6px_0px_rgba(0,0,0,0.07)]",
      pillWidth,
      pillHeight,
      pillLeft,
      pillTop
    )}
  >
    <Image
      src={iconSrc}
      alt={iconAlt}
      width={iconWidth}
      height={iconHeight}
      className="object-contain"
    />
  </div>
</div>
      <div className="mt-8 flex flex-col items-center gap-4">
        <h3 className="text-[32px] font-medium leading-none tracking-[-0.04em] text-[#202126]">
          <span className="font-bold text-[#00A66A]">{value}</span>
          <span className="ml-2">{title}</span>
        </h3>

        <p className="text-[18px] font-normal leading-none tracking-[-0.02em] text-black/55">
          {description}
        </p>
      </div>
    </div>
  );
}