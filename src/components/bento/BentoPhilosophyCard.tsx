import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { BentoPhilosophyTag } from "@/config/portfolio-types";
import { DEFAULT_PHILOSOPHY_TAGS } from "./bento-defaults";

type BentoPhilosophyCardProps = {
  lead: string;
  tags?: BentoPhilosophyTag[];
};

export function BentoPhilosophyCard({ lead, tags = DEFAULT_PHILOSOPHY_TAGS }: BentoPhilosophyCardProps) {
  const [active, setActive] = useState(tags[0]?.id ?? "motion");
  const current = tags.find((t) => t.id === active) ?? tags[0];

  return (
    <motion.div
      data-cursor-hover
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex h-full min-h-[280px] flex-col rounded-3xl border border-border bg-card/90 p-6 text-card-foreground shadow-sm backdrop-blur-md md:min-h-[320px]"
    >
      <h2 className="font-display text-xl font-bold leading-tight text-foreground sm:text-2xl">
        {lead}
      </h2>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isOn = tag.id === active;
          return (
            <button
              key={tag.id}
              type="button"
              data-cursor-hover
              onMouseEnter={() => setActive(tag.id)}
              onFocus={() => setActive(tag.id)}
              onClick={() => setActive(tag.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                isOn
                  ? "border-primary/60 bg-primary/15 text-foreground shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
                  : "border-border bg-muted/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {tag.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-1 flex-col justify-end border-t border-border/60 pt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {current.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
