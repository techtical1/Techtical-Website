// components/pages/sections/featured-case/featured-case-data.ts

export const featuredCaseData = {
  pill: "Featured Case",
  title: {
    line1: "From Poor UX To",
    highlight: "high-converting",
    line2: "Product Experiences",
  },
  labels: {
    before: "Before",
    after: "After",
  },
  visuals: {
    phones: "/assets/featured-case/before-after-demo.png",
    arrow: "/assets/featured-case/Vector.svg",
  },
  metrics: [
    {
      id: "engagement",
      value: "+40%",
      label: "Engagement",
      icon: "/assets/featured-case/engagement.svg",
      className: "left-[80px] bottom-[210px] rotate-[-12deg] z-[7] w-[315px]",
    },
    {
      id: "turnaround",
      value: "48 Hr",
      label: "Fast Turnaround",
      icon: "/assets/featured-case/time.svg",
      className: "left-[405px] bottom-[245px] rotate-[1deg] z-[6] w-[330px]",
    },
    {
      id: "countries",
      value: "10+",
      label: "Countries Served",
      icon: "/assets/featured-case/Countries.svg",
      className: "left-[255px] bottom-[90px] rotate-[8deg] z-[8] w-[345px]",
    },
  ],
};
