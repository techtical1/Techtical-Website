"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { founderQuestions, FounderFormValues } from "./founder-form-data";
import { FounderFormActions } from "./founder-form-actions";
import { FounderFormField } from "./founder-form-field";
import { FounderFormNav } from "./founder-form-nav";
import { FounderFormProgress } from "./founder-form-progress";
import { FounderFormSummary } from "./founder-form-summary";
import { StrategyCallButton } from "../ui/strategy-call-button";

type FounderFormModalProps = {
  open: boolean;
  onClose: () => void;
};

const initialValues: FounderFormValues = {
  name: "",
  email: "",
  help: "",
  stage: "",
  budget: "",
};

export function FounderFormModal({ open, onClose }: FounderFormModalProps) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FounderFormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentQuestion = founderQuestions[step];
  const totalSteps = founderQuestions.length;
  const isFinalStep = currentQuestion.type === "summary";

  const progressLabel = useMemo(
    () => `${step + 1}/${totalSteps}`,
    [step, totalSteps]
  );

  if (!open) return null;

  function validateCurrentStep() {
    if (isFinalStep) return true;

    const id = currentQuestion.id as keyof FounderFormValues;
    const value = values[id]?.trim() || "";
    let error = "";

    if (currentQuestion.required && !value) {
      error = "This field is required.";
    }

    if (!error && currentQuestion.minLength && value.length < currentQuestion.minLength) {
      error = `Please enter at least ${currentQuestion.minLength} characters.`;
    }

    if (!error && currentQuestion.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Please enter a valid email address.";
    }

    setErrors((prev) => ({ ...prev, [currentQuestion.id]: error }));
    return !error;
  }

  function handleNext() {
    if (!validateCurrentStep()) return;
    if (step < totalSteps - 1) setStep((prev) => prev + 1);
  }

  function handleBack() {
    if (step > 0) setStep((prev) => prev - 1);
  }

  function handleChange(id: keyof FounderFormValues, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  }

  function handleSubmit() {
    console.log("Founder form submitted:", values);

    onClose();
    setStep(0);
    setValues(initialValues);
    setErrors({});
  }

  return (
    <div className="fixed inset-0 z-[999]">
      <div
        className="absolute inset-0 bg-white/35 backdrop-blur-[14px]"
        onClick={onClose}
      />

      <div className="relative flex h-full w-full items-center justify-center px-4 py-5 lg:justify-end lg:pr-16">
        <div className="relative flex max-h-[calc(100vh-40px)] w-full max-w-[610px] flex-col overflow-hidden rounded-[22px] bg-[#141519] px-9 py-9 shadow-2xl sm:px-10">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/15 hover:text-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <div className="shrink-0 text-center">
              <h2 className="text-[34px] font-normal leading-none tracking-[-0.04em] text-white">
                Build a product that{" "}
                <span className="font-serif italic text-[#00E18E]">works</span>
              </h2>
            </div>

            <FounderFormActions />

            <div className="mt-9 flex shrink-0 items-center justify-between">
              <h3 className="text-[15px] font-normal text-white/62">
                {currentQuestion.label}
              </h3>

              <FounderFormProgress label={progressLabel} />
            </div>

            <div className="mt-5 min-h-[184px] shrink-0">
              {isFinalStep ? (
                <FounderFormSummary values={values} />
              ) : (
                <FounderFormField
                  question={currentQuestion}
                  value={values[currentQuestion.id as keyof FounderFormValues]}
                  error={errors[currentQuestion.id]}
                  onChange={(value) =>
                    handleChange(currentQuestion.id as keyof FounderFormValues, value)
                  }
                />
              )}
            </div>

            <div className="mt-5 flex shrink-0 items-center justify-between">
              <FounderFormNav
                canGoBack={step > 0}
                canGoNext={!isFinalStep}
                onBack={handleBack}
                onNext={handleNext}
              />

              {isFinalStep && (
                <StrategyCallButton className="w-151px"  href="mailto:info@techticalsolution.com">
                  Send Message
                </StrategyCallButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}