export type ProjectCategory = "all" | "saas" | "mobile" | "web" | "dashboard" | "design-system";

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: Exclude<ProjectCategory, "all">;
  featured?: boolean;
};

export const projectCategories: {
  id: ProjectCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "saas", label: "SaaS Products" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web", label: "Web Applications" },
  { id: "dashboard", label: "Dashboards" },
  { id: "design-system", label: "Design Systems" },
];

export const projectGalleryData = {
  pill: "Selected Work",
  title: {
    line1: "Products used by real teams,",
    highlight: "solving real problems",
  },
  description: "Each Project Started With Confusion — And Ended With Clarity",
};

export const projects: ProjectItem[] = [
  {
    id: "buildflow",
    title: "BuildFlow — SaaS Productivity App Design",
    subtitle: "Low User Engagement And Unclear Onboarding",
    image: "/assets/projects/buildflow.png",
    category: "saas",
    featured: true,
  },
  {
    id: "design-system",
    title: "Design System — Scalable UI Framework",
    subtitle: "Inconsistent UI And Slow Development Cycles",
    image: "/assets/projects/design-system.png",
    category: "design-system",
  },
  {
    id: "heppins-snap",
    title: "Heppins Snap — Social Rewards App UX",
    subtitle: "Low App Installs And Poor User Activation",
    image: "/assets/projects/heppins-snap.png",
    category: "mobile",
  },
  {
    id: "style-guide",
    title: "Design Style Guide — Component System",
    subtitle: "Design Inconsistency And Reusable Component Issues",
    image: "/assets/projects/style-guide.png",
    category: "design-system",
  },
  {
    id: "agenai",
    title: "AgenAI — AI Team Workflow Platform",
    subtitle: "Manual Workflows And Inefficient Task Execution",
    image: "/assets/projects/agenai.png",
    category: "saas",
  },
  {
    id: "edtech",
    title: "Educational Language Learning — EdTech UX Platform",
    subtitle: "Low Learning Engagement And Inconsistent Progress",
    image: "/assets/projects/edtech.png",
    category: "web",
  },
  {
    id: "insightflow",
    title: "InsightFlow — Data Analytics Dashboard",
    subtitle: "Scattered Data And Lack Of Actionable Insights",
    image: "/assets/projects/insightflow.png",
    category: "dashboard",
  },
  {
    id: "food-delivery",
    title: "Food Delivery App — UX Optimization",
    subtitle: "Slow Ordering Experience And Low Customer Satisfaction",
    image: "/assets/projects/food-delivery.png",
    category: "mobile",
  },
];
