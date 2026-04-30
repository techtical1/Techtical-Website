// components/common/rich-heading.tsx

import { cn } from "@/lib/utils";

type HeadingPart = {
  text: string;
  highlight?: boolean;
  newLine?: boolean;
};

type RichHeadingProps = {
  as?: "h1" | "h2";
  parts: HeadingPart[];
  className?: string;
  highlightClassName?: string;
};

export function RichHeading({
  as = "h1",
  parts,
  className,
  highlightClassName,
}: RichHeadingProps) {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "font-semibold leading-[1.12] tracking-[-0.055em] text-[#202126]",
        className
      )}
    >
      {parts.map((part, index) => (
        <span key={`${part.text}-${index}`}>
          {part.newLine && <br />}
          <span
            className={cn(
              part.highlight &&
                "font-serif font-normal italic text-[#00895F]",
              part.highlight && highlightClassName
            )}
          >
            {part.text}
          </span>{" "}
        </span>
      ))}
    </Tag>
  );
}