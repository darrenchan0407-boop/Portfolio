import { AnimatePresence, motion } from "framer-motion";
import experienceImage from "@/assets/experience-cloud.jpg";
import type { ExperienceEntry, ExperienceVariant } from "@/config/portfolio-types";
import { ExperienceVisualMedia } from "@/components/experience/ExperienceVisualMedia";
import { useExperienceSectionScroll } from "@/hooks/useExperienceSectionScroll";

type ExperienceProps = {
  experiences: ExperienceEntry[];
  variant?: ExperienceVariant;
};

function ExperienceScrollExperience({
  experiences,
}: {
  experiences: ExperienceEntry[];
}) {
  const n = experiences.length;
  const { sectionRef, containerRef, activeIndex, progress } = useExperienceSectionScroll(n);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative border-t border-border/40 py-20 lg:py-28"
    >
      <div className="container max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-10 lg:mb-14"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-[1.1] text-foreground max-w-2xl">
            Where I&apos;ve built
            <br />
            great software.
          </h2>
        </motion.div>

        {/* Mobile: sticky progress bar + illustration below */}
        <div className="mb-10 lg:hidden space-y-4">
          <div className="sticky top-20 z-30 -mx-4 px-4 py-3 bg-background/90 backdrop-blur-md border-b border-border/50 supports-[backdrop-filter]:bg-background/75">
            <div className="h-2 rounded-full bg-muted overflow-hidden border border-border/50">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-orange-500"
                style={{ width: `${Math.min(100, progress * 100)}%` }}
                layout
              />
            </div>
          </div>
          <div className="relative rounded-2xl border border-border bg-card/80 p-6 shadow-sm min-h-[200px] flex items-center justify-center overflow-hidden">
            <p className="absolute top-3 left-4 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {experiences[activeIndex]?.company}
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full pt-6"
              >
                <ExperienceVisualMedia entry={experiences[activeIndex]} className="w-full" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.95fr)] gap-8 lg:gap-10 items-start">
          {/* Left: jobs (scroll-driven) */}
          <div ref={containerRef} className="order-2 lg:order-1 space-y-0">
            {experiences.map((exp, i) => (
              <article
                key={`${exp.company}-${exp.period}-${i}`}
                data-exp-block
                className="min-h-[min(85vh,820px)] py-10 lg:py-16 border-b border-border/50 last:border-b-0"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-px w-6 shrink-0 bg-primary rounded-full" aria-hidden />
                  <div className="space-y-4 max-w-xl">
                    <p className="text-xs font-display text-muted-foreground tracking-wider uppercase">
                      {exp.period}
                    </p>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                    <p className="text-lg font-display font-semibold text-primary">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed [text-rendering:optimizeLegibility]">
                      {exp.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Center: vertical progress — sticky in viewport for whole experience scroll */}
          <div
            className="order-1 lg:order-2 hidden lg:flex w-14 shrink-0 justify-center lg:sticky lg:top-28 lg:self-start lg:h-[calc(100vh-8rem)] lg:max-h-[920px] py-2"
            aria-hidden
          >
            <div className="relative w-2 h-full min-h-[200px] rounded-full bg-muted border border-border/60 overflow-visible shadow-inner">
              <motion.div
                className="absolute left-0 right-0 top-0 rounded-full bg-gradient-to-b from-primary via-primary to-orange-500 shadow-[0_0_20px_hsl(var(--primary)/0.35)]"
                style={{ height: `${progress * 100}%` }}
                layout
              />
              <div
                className="absolute left-1/2 z-10 h-5 w-5 -translate-x-1/2 rounded-full bg-card border-2 border-primary shadow-md ring-2 ring-background"
                style={{ top: `calc(${progress * 100}% - 10px)` }}
              />
            </div>
          </div>

          {/* Right: sticky device frame + SVG */}
          <div className="order-3 hidden lg:block lg:sticky lg:top-28 self-start w-full">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-[2.25rem] p-[2px] bg-gradient-to-br from-primary/60 via-primary/25 to-orange-500/40 shadow-xl">
                <div className="rounded-[2.1rem] bg-background/95 border border-border p-2">
                  <div className="aspect-[10/19] max-h-[min(520px,62vh)] rounded-[1.75rem] bg-muted/40 border border-border/60 overflow-hidden flex flex-col">
                    <div className="h-7 shrink-0 flex items-center justify-center gap-1.5 border-b border-border/40 bg-background/80">
                      <span className="h-2 w-12 rounded-full bg-muted-foreground/25" />
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4 relative">
                      <p className="absolute top-3 left-4 right-4 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                        {experiences[activeIndex]?.company}
                      </p>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndex}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full pt-6"
                        >
                          <ExperienceVisualMedia entry={experiences[activeIndex]} className="w-full" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Experience = ({ experiences, variant = "default" }: ExperienceProps) => {
  if (variant === "compact") {
    return (
      <section id="experience" className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Experience</p>
                <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-[1.1] text-foreground">
                  Where I&apos;ve built
                  <br />
                  great software.
                </h2>
              </motion.div>

              <div className="relative">
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-16">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="relative pl-8 md:pl-20"
                    >
                      <div className="absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-primary -translate-x-[5.5px] shadow-glow" />
                      <div className="space-y-3">
                        <p className="text-xs font-display text-muted-foreground tracking-wider uppercase">{exp.period}</p>
                        <h3 className="text-xl font-display font-bold text-foreground">{exp.role}</h3>
                        <p className="text-primary font-display font-semibold">{exp.company}</p>
                        <p className="text-muted-foreground leading-relaxed max-w-lg [text-rendering:optimizeLegibility]">
                          {exp.description}
                        </p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground max-w-lg leading-relaxed">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 lg:sticky lg:top-32"
            >
              <div className="relative">
                <img
                  src={experienceImage}
                  alt=""
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return <ExperienceScrollExperience experiences={experiences} />;
};

export default Experience;
