export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Arvanto converted our multi-layered operating challenges into an actionable, quantified roadmap. Their integration of strategic advisory with actual AI deployment was unlike traditional consulting firms.",
    author: "David Kariuki",
    role: "Chief Operating Officer",
    organization: "Regional Commercial Bank",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "2",
    quote: "The quantitative rigor Arvanto brought to our capital planning and risk stress-testing gave our board total confidence during market turbulence. They execute with remarkable speed.",
    author: "Aminat Al-Mansoor",
    role: "Head of Strategy & Growth",
    organization: "East Africa Infrastructure Holdings",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "3",
    quote: "Working with Arvanto Intelligence transformed how we use our customer data. Instead of static monthly reports, we now operate with predictive AI agents driving pricing decisions in real time.",
    author: "Samuel Omondi",
    role: "Managing Director",
    organization: "Apex Logistics & Retail",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  }
];
