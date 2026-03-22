import type { GlobeRegionId, Portfolio } from "@/config/portfolio-types";
import { BentoAnalogClock } from "./BentoAnalogClock";
import { BentoContactCard } from "./BentoContactCard";
import { BentoGlobeCard } from "./BentoGlobeCard";
import { BentoPhilosophyCard } from "./BentoPhilosophyCard";
import { BentoProfileCard } from "./BentoProfileCard";
import { BentoShowcaseCard } from "./BentoShowcaseCard";

type BentoHomeSectionProps = {
  portfolio: Portfolio;
};

export function BentoHomeSection({ portfolio }: BentoHomeSectionProps) {
  const b = portfolio.bento;
  const philosophyLead = b?.philosophyLead ?? "Interfaces you can feel.";
  const tags = b?.tags;
  const ventureWord = b?.showcaseGradientWord ?? portfolio.projects[0]?.title ?? "Studio";
  const titleLine = b?.showcaseTitle ?? "Founder of";
  const tagline = b?.showcaseSubtitle ?? "Crafting digital experiences";
  const globeRegion: GlobeRegionId = b?.globeRegion ?? "us";

  return (
    <section
      id="bento"
      aria-label="Highlights"
      className="relative overflow-hidden border-b border-border/50 bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.12),transparent)]" />

      <div className="container relative max-w-7xl pt-10 pb-10 md:pt-14 md:pb-14">
        <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-4">
            <BentoProfileCard
              fullName={portfolio.fullName}
              contact={portfolio.contact}
              avatarImage={portfolio.hero.avatarImage}
            />
          </div>
          <div className="lg:col-span-4">
            <BentoPhilosophyCard lead={philosophyLead} tags={tags} />
          </div>
          <div className="lg:col-span-4">
            <BentoContactCard
              email={portfolio.contact.email}
              subheadline={portfolio.hero.subheadline}
              role={portfolio.hero.role}
            />
          </div>

          <div className="lg:col-span-12">
            <BentoAnalogClock />
          </div>

          <div className="lg:col-span-6 lg:row-span-1">
            <BentoGlobeCard defaultRegion={globeRegion} />
          </div>
          <div className="lg:col-span-6">
            <BentoShowcaseCard
              ventureGradientWord={ventureWord}
              titleLine={titleLine}
              tagline={tagline}
              projects={portfolio.projects}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
