export type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  thumbnail: string;
  avatar: string;
  rating: number;
  href?: string;
};

export const testimonials: TestimonialItem[] = [
  {
    id: "marcus-klein",
    name: "Marcus Klein",
    role: "Head of product, Arkade",
    thumbnail: "/assets/testimonials/testimonial-01.png",
    avatar: "/public/assets/testimonials/marcus-klein.png",
    rating: 5,
  },
  {
    id: "sastastay",
    name: "Sarah Wilson",
    role: "Founder, SastaStay",
    thumbnail: "/assets/testimonials/testimonial-02.png",
    avatar: "/public/assets/testimonials/sarah-wilson.png",
    rating: 5,
  },
  {
    id: "wingai",
    name: "David Miller",
    role: "CEO, WingAI",
    thumbnail: "/assets/testimonials/testimonial-03.png",
    avatar: "/public/assets/testimonials/david-miller.png",
    rating: 5,
  },
  {
    id: "flicknite",
    name: "Emma Clark",
    role: "Product Lead, FlickNite",
    thumbnail: "/assets/testimonials/testimonial-04.png",
    avatar: "/public/assets/testimonials/emma-clark.png",
    rating: 5,
  },
  {
    id: "payaix",
    name: "Alex Morgan",
    role: "Founder, PayAi-X",
    thumbnail: "/assets/testimonials/testimonial-05.png",
    avatar: "/public/assets/testimonials/alex-morgan.png",
    rating: 5,
  },
];
