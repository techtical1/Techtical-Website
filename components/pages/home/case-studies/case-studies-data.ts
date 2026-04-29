export type CaseStudy = {
  eyebrow: string;
  title: string;
  image: string;
  tags: string[];
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    eyebrow: "Case Study — SastaStay",
    title: "SastaStay - Smarter Hostel Booking",
    image: "/assets/case-studies/sastastay-cover.png",
    tags: ["UX Research", "UI Design", "Interaction Design"],
    quote: "You Can Throw Anything At Them, Their Team Will Make The Best Out Of It.",
    author: {
      name: "Marcus Klein",
      role: "Head of product, Arkade",
      avatar: "/assets/case-studies/marcus-klein.png",
    },
  },
  {
    eyebrow: "Case Study — PayAi-X",
    title: "PayAi-X - Secure Payment Experience",
    image: "/assets/case-studies/project-three-cover.png",
    tags: ["Fintech UX", "UI Design", "Design System"],
    quote: "They Simplified A Complex Product Into A Clean, Trustworthy Experience.",
    author: {
      name: "Sarah Wilson",
      role: "Founder, PayAi-X",
      avatar: "/assets/case-studies/marcus-klein.png",
    },
  },
  {
    eyebrow: "Case Study — LienFin",
    title: "LienFin - Tax Lien Investment Platform",
    image: "/assets/case-studies/project-three-cover.png",
    tags: ["SaaS UX", "Dashboard", "Product Strategy"],
    quote: "They Simplified A Complex Product Into A Clean, Trustworthy Experience.",
    author: {
      name: "David Miller",
      role: "CEO, LienFin",
      avatar: "/assets/case-studies/marcus-klein.png",
    },
  },
];
