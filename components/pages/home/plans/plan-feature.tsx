type PlanFeatureProps = {
  label: string;
  theme: "light" | "green";
};

export function PlanFeature({ label, theme }: PlanFeatureProps) {
  return (
    <li className="flex items-center gap-3">
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          theme === "green" ? "bg-white text-[#007E5B]" : "bg-[#00C987] text-white"
        }`}
      >
        <span className="text-[0.75rem] font-bold">✓</span>
      </span>

      <span
        className={`text-[1rem] leading-normal sm:text-[1.125rem] ${
          theme === "green" ? "text-white" : "text-[#656566]"
        }`}
      >
        {label}
      </span>
    </li>
  );
}