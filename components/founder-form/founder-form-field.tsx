"use client";

import { FounderQuestion } from "./founder-form-data";

type FounderFormFieldProps = {
  question: FounderQuestion;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

const optionKeys = ["A", "B", "C", "D"];

export function FounderFormField({
  question,
  value,
  error,
  onChange,
}: FounderFormFieldProps) {
  if (question.type === "single-select") {
    return (
      <div className="h-[184px] rounded-[16px] bg-[#202126] px-6 py-5">
        <div className="grid gap-4">
          {question.options?.map((option, index) => {
            const selected = value === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => onChange(option)}
                className="group flex items-center gap-3 text-left"
              >
                <span
                  className={`flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border text-[10px] leading-none transition ${
                    selected
                      ? "border-[#00E18E] bg-[#00E18E] text-[#06120C]"
                      : "border-white/30 bg-transparent text-white/50"
                  }`}
                >
                  {optionKeys[index]}
                </span>

                <span
                  className={`text-[18px] leading-none transition ${
                    selected ? "text-white" : "text-white/45"
                  }`}
                >
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
      </div>
    );
  }

  if (question.type === "textarea") {
    return (
      <div>
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={question.placeholder}
          className="h-[184px] w-full resize-none rounded-[16px] border-0 bg-[#202126] px-6 py-6 text-[24px] leading-[1.25] text-white outline-none placeholder:text-white/42"
        />

        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
      </div>
    );
  }

  return (
  <div>
    <div className="h-[184px] w-full rounded-[16px] bg-[#202126]">
      <input
        type={question.type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={question.placeholder}
        className="
          w-full
          bg-transparent
          px-6
          pt-[28px]
          text-[24px]
          leading-none
          text-white
          outline-none
          placeholder:text-white/42
        "
      />
    </div>

    {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
  </div>
);
}