import Image from "next/image";

type CredibilityCardProps = {
  icon: string;
  value: string;
  label: string;
  description: string;
};

export function CredibilityCard({ icon, value, label, description }: CredibilityCardProps) {
  return (
    <div className="flex min-h-[11rem] flex-col items-center justify-center rounded-[2rem] border border-[#E8E8E5] bg-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
      <div className="flex h-[4.75rem] min-w-[7.5rem] items-center justify-center rounded-full bg-[#F2F2F2] p-3 shadow-[inset_0_-4px_0_#E5E5E5,0_6px_18px_rgba(0,0,0,0.08)]">
        <Image src={icon} alt="" width={54} height={54} className="h-12 w-auto object-contain" />
      </div>

      <h3 className="mt-7 text-[1.75rem] leading-none font-semibold tracking-[-0.03em] text-[#262626] sm:text-[2rem]">
        <span className="text-[#00A66A]">{value}</span> {label}
      </h3>

      <p className="mt-4 text-[1rem] leading-normal text-[#656566] sm:text-[1.125rem]">
        {description}
      </p>
    </div>
  );
}
