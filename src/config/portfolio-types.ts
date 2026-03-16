export type ContactInfo = {
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
};

export type HeroContent = {
  headline: string;
  subheadline: string;
  role: string;
  avatarImage?: string;
};

export type AboutContent = {
  heading: string;
  paragraphs: string[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
};

export type ProjectEntry = {
  id: number;
  title: string;
  description: string;
  url: string;
  category?: string;
  tech: string[];
  featured?: boolean;
  image?: string;
};

export type ThemeId = "default" | "bright" | "blue" | "soft" | "warm";

export type SectionId = "hero" | "about" | "projects" | "experience" | "contact";

export type HeroVariant = "default" | "split" | "minimal";
export type ProjectsVariant = "grid" | "gallery";
export type ExperienceVariant = "default" | "compact";
export type ContactVariant = "default" | "minimal";

export type Portfolio = {
  id: string;
  fullName: string;
  contact: ContactInfo;
  hero: HeroContent;
  about: AboutContent;
  experiences: ExperienceEntry[];
  projects: ProjectEntry[];
  theme?: ThemeId;
  sections?: SectionId[];
  heroVariant?: HeroVariant;
  projectsVariant?: ProjectsVariant;
  experienceVariant?: ExperienceVariant;
  contactVariant?: ContactVariant;
};

