import type { BentoPhilosophyTag } from "@/config/portfolio-types";

export const DEFAULT_PHILOSOPHY_TAGS: BentoPhilosophyTag[] = [
  {
    id: "motion",
    label: "Motion",
    title: "Micro-interactions",
    description: "Subtle movement that confirms intent — never distracting.",
  },
  {
    id: "type",
    label: "Type",
    title: "Typography",
    description: "Hierarchy and rhythm that guide the eye with clear intent.",
  },
  {
    id: "feedback",
    label: "Feedback",
    title: "Responsive UI",
    description: "Instant, honest system responses that build trust.",
  },
  {
    id: "craft",
    label: "Craft",
    title: "Polish",
    description: "Details that compound into a product that feels inevitable.",
  },
];
