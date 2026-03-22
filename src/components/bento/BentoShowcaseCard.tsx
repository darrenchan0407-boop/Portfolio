import { motion } from "framer-motion";
import type { ProjectEntry } from "@/config/portfolio-types";

type BentoShowcaseCardProps = {
  ventureGradientWord: string;
  titleLine: string;
  tagline: string;
  projects: ProjectEntry[];
};

export function BentoShowcaseCard({
  ventureGradientWord,
  titleLine,
  tagline,
  projects,
}: BentoShowcaseCardProps) {
  const slides = [0, 1, 2].map((i) => ({
    title: projects[i]?.title ?? (i === 0 ? "Ship" : i === 1 ? "Scale" : "Polish"),
    body:
      projects[i]?.description?.slice(0, 72) ??
      "Interfaces, systems, and craft — built for real users.",
  }));

  return (
    <motion.div
      data-cursor-hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.05 }}
      className="relative overflow-hidden rounded-3xl border border-border bg-card/90 p-6 text-card-foreground shadow-sm backdrop-blur-md"
    >
      <div className="flex flex-col items-end gap-1 text-right">
        <p className="font-display text-sm font-bold text-foreground md:text-base">
          {titleLine}{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
            {ventureGradientWord}
          </span>
        </p>
        <p className="font-mono text-[11px] text-muted-foreground">&lt; {tagline} /&gt;</p>
      </div>

      <div className="relative mt-8 flex min-h-[200px] items-center justify-center md:min-h-[220px]">
        {slides.map((s, i) => (
          <motion.div
            key={`phone-${i}`}
            data-cursor-hover
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i, duration: 0.4 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`relative w-[28%] max-w-[120px] rounded-[1.5rem] border border-border/80 bg-muted/40 p-2.5 shadow-md backdrop-blur-sm ${
              i === 1 ? "z-20 scale-105" : "z-10 scale-95 opacity-90"
            }`}
            style={{ marginLeft: i === 0 ? 0 : "-10%" }}
          >
            <div className="mb-2 flex items-center justify-between gap-1">
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            </div>
            <p className="font-display text-[10px] font-bold leading-tight text-primary">{s.title}</p>
            <p className="mt-1.5 text-[9px] leading-snug text-muted-foreground">{s.body}</p>
            {i === 1 && (
              <div className="mt-2 rounded-md bg-primary py-1 text-center text-[8px] font-bold uppercase text-primary-foreground">
                Explore
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
