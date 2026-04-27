type SectionPillProps = {
  label: string;
  className?: string;
  width?: string; // NEW
};

export function SectionPill({
  label,
  className = "",
  width,
}: SectionPillProps) {
  return (
    <span
      style={width ? { width } : undefined} // allows exact control
      className={`
        inline-flex items-center justify-center
        h-[50px] px-[30px] py-[15px]
        rounded-[100px]
        border border-[#EBEBEB]
        bg-white
        text-[1rem] font-medium text-[#007E5B]
        shadow-[0_3px_6px_0_rgba(0,0,0,0.12),inset_0_-4px_0_0_#EBEBEB]
        ${width ? "flex" : "w-fit"} 
        ${className}
      `}
    >
      {label}
    </span>
  );
}