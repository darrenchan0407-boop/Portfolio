import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import type { ContactInfo } from "@/config/portfolio-types";

type BentoProfileCardProps = {
  fullName: string;
  contact: ContactInfo;
  avatarImage?: string;
};

const XIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function BentoProfileCard({ fullName, contact, avatarImage }: BentoProfileCardProps) {
  const [tick, setTick] = useState(0);
  const [carousel, setCarousel] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCarousel((c) => (c + 1) % 3), 4500);
    return () => clearInterval(id);
  }, []);

  const timeLabel = useMemo(() => {
    try {
      const opts: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      if (contact.timezone) {
        return new Intl.DateTimeFormat(undefined, { ...opts, timeZone: contact.timezone }).format(
          new Date(),
        );
      }
      return new Intl.DateTimeFormat(undefined, opts).format(new Date());
    } catch {
      return new Date().toLocaleTimeString();
    }
  }, [tick, contact.timezone]);

  return (
    <motion.div
      data-cursor-hover
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl border border-border bg-card/90 p-6 text-card-foreground shadow-sm backdrop-blur-md"
    >
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
            {fullName}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {contact.location ?? "Remote"} • {timeLabel}
          </p>
        </div>
      </div>

      <div
        className="relative mx-auto mb-8 flex h-[200px] items-center justify-center"
        style={{ perspective: "1100px" }}
      >
        <div className="relative flex h-full w-full items-center justify-center [transform-style:preserve-3d]">
          {[0, 1, 2].map((i) => {
            const rel = (i - carousel + 3) % 3;
            const isCenter = rel === 0;
            return (
              <motion.div
                key={i}
                className="absolute flex w-[min(100%,210px)] items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-muted/25 shadow-lg"
                animate={{
                  rotateY: rel === 0 ? 0 : rel === 1 ? 38 : -38,
                  x: rel === 0 ? 0 : rel === 1 ? 56 : -56,
                  scale: isCenter ? 1.05 : 0.9,
                  opacity: isCenter ? 1 : 0.78,
                  zIndex: isCenter ? 20 : 10,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {avatarImage ? (
                  <img
                    src={avatarImage}
                    alt=""
                    className={`h-48 w-full object-cover ${!isCenter ? "brightness-[0.88] saturate-[0.85]" : ""}`}
                  />
                ) : (
                  <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-primary/30 to-muted text-4xl font-display font-bold text-muted-foreground">
                    {fullName.charAt(0)}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 border-t border-border/60 pt-4">
        {contact.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {contact.github && (
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        )}
        {contact.twitter && (
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="X"
          >
            <XIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
