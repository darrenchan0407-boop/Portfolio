export type ContactInfo = {
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  /** IANA tz e.g. "America/Los_Angeles" — used in bento profile clock */
  timezone?: string;
};

export type BentoPhilosophyTag = {
  id: string;
  label: string;
  title: string;
  description: string;
};

/** Bento globe card: which zone is “home” + pill selection; drives the highlight on the dot sphere */
export type GlobeRegionId = "uk" | "in" | "us" | "br" | "sea" | "co";

/** Optional copy for the bento hero; sensible defaults are applied when omitted */
export type PortfolioBento = {
  philosophyLead?: string;
  tags?: BentoPhilosophyTag[];
  showcaseTitle?: string;
  showcaseGradientWord?: string;
  showcaseSubtitle?: string;
  globeRegion?: GlobeRegionId;
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
  /** Optional key for the experience illustration SVG when no image loads */
  visualKey?: string;
  /** Direct HTTPS URL to a product screenshot, marketing visual, or gallery image */
  visualImageUrl?: string;
  /** Company site domain (e.g. microsoft.com) — used for remote logo / site preview images */
  companyDomain?: string;
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

/** `bento`: full cinematic Hero (3D, etc.) + bento grid section directly underneath */
export type HeroVariant = "default" | "split" | "minimal" | "bento";
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
  bento?: PortfolioBento;
};

