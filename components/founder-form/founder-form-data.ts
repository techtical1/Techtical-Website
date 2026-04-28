export type FounderQuestionType = "text" | "email" | "textarea" | "single-select" | "summary";

export type FounderQuestion = {
  id: string;
  type: FounderQuestionType;
  label: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  options?: string[];
};

export const founderQuestions: FounderQuestion[] = [
  {
    id: "name",
    type: "text",
    label: "What Is Your Name?",
    placeholder: "Your Name...",
    required: true,
    minLength: 2,
  },
  {
    id: "email",
    type: "email",
    label: "What Is Your Email?",
    placeholder: "Example@Gmail.Com",
    required: true,
  },
  {
    id: "help",
    type: "textarea",
    label: "What I Can Help You?",
    placeholder: "Redesign Earth’s UI For Smoother Experiences",
    required: true,
    minLength: 10,
  },
  {
    id: "stage",
    type: "single-select",
    label: "What Is Your Current Stage?",
    options: ["Idea", "Existing product", "Redesign/improvement"],
    required: true,
  },
  {
    id: "budget",
    type: "single-select",
    label: "What Is Your Budget Range?",
    options: [
      "$10.000 - $20.000",
      "$20.000 - $40.000",
      "$40.000 - $60.000",
      "I’m not sure yet",
    ],
    required: true,
  },
  {
    id: "summary",
    type: "summary",
    label: "Details",
  },
];

export type FounderFormValues = {
  name: string;
  email: string;
  help: string;
  stage: string;
  budget: string;
};