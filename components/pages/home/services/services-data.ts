export type ServiceItem = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const services: ServiceItem[] = [
  {
    id: "ai-product-ux",
    index: "01",
    title: "AI Product UX Design",
    description: "for AI-native SaaS startups",
    image: "/assets/services/ai-product-ux.png",
    imageAlt: "AI Product UX Design preview",
  },
  {
    id: "saas-platform",
    index: "02",
    title: "SaaS Platform Design",
    description: "for complex dashboards, onboarding, activation",
    image: "/assets/services/saas-platform.png",
    imageAlt: "SaaS Platform Design preview",
  },
  {
    id: "product-design-partner",
    index: "03",
    title: "Product Design Partner",
    description: "monthly retainer, embedded in your team",
    image: "/assets/services/product-design-partner.png",
    imageAlt: "Product Design Partner preview",
  },
];