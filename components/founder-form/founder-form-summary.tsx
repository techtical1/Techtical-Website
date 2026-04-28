import { FounderFormValues } from "./founder-form-data";

type FounderFormSummaryProps = {
  values: FounderFormValues;
};

export function FounderFormSummary({ values }: FounderFormSummaryProps) {
  return (
    <div className="min-h-[184px] rounded-[16px] bg-[#202126] px-6 py-5">
      <div className="grid grid-cols-2 gap-x-12 gap-y-4">
        <SummaryItem label="Name" value={values.name} />
        <SummaryItem label="Email" value={values.email} />
        <SummaryItem label="Current Stage" value={values.stage} />
        <SummaryItem label="Budget Range" value={values.budget} />
      </div>

      <div className="mt-4">
        <SummaryItem label="More Info" value={values.help} />
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[12px] leading-none text-white/45">{label}</p>
      <p className="mt-2 break-words text-[13px] leading-snug text-white">
        {value || "-"}
      </p>
    </div>
  );
}