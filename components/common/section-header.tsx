// components/common/section-header.tsx

import { RichHeading } from "@/components/common/rich-heading";

type SectionHeaderProps = {
  title: {
    normal: string;
    highlight?: string;
  };
  align?: "left" | "center";
};

export function SectionHeader({ title, align = "center" }: SectionHeaderProps) {
  const parts: { text: string; highlight?: boolean }[] = [
    { text: title.normal },
  ];

  if (title.highlight) {
    parts.push({ text: title.highlight, highlight: true });
  }

  return (
    <div className={`mb-14 ${align === "center" ? "text-center" : ""}`}>
      <RichHeading
        as="h2"
        className="text-[44px] md:text-[56px]"
        parts={parts}
      />
    </div>
  );
}