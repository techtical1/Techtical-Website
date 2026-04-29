export type PlanItem = {
  id: string;
  theme: "light" | "green";
  title: string;
  features: string[];
  ctaLabel: string;
  visualType: "before-after" | "laptop";
};

export const plans: PlanItem[] = [
  {
    id: "fix",
    theme: "light",
    title: "Fix What Isn't Working",
    features: ["UX audit + clarity report", "Flow redesign", "Delivery in 4 weeks"],
    ctaLabel: "BOOK A FREE CALL",
    visualType: "before-after",
  },
  {
    id: "build",
    theme: "green",
    title: "Build Right From Day One",
    features: ["Product strategy + roadmap", "Full product design", "development + launch"],
    ctaLabel: "Text Here",
    visualType: "laptop",
  },
];