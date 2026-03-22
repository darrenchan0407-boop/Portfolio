import { motion } from "framer-motion";
import { ArrowUpRight, Copy } from "lucide-react";
import { toast } from "sonner";

type BentoContactCardProps = {
  email: string;
  subheadline: string;
  role: string;
};

export function BentoContactCard({ email, subheadline, role }: BentoContactCardProps) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied");
    } catch {
      toast.error("Could not copy");
    }
  };

  return (
    <motion.div
      data-cursor-hover
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex h-full min-h-[280px] flex-col rounded-3xl border border-border bg-card/90 p-6 text-card-foreground shadow-sm backdrop-blur-md md:min-h-[320px]"
    >
      <div className="flex items-start justify-end">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for work
        </span>
      </div>

      <div className="mt-4 flex-1">
        <p className="font-display text-lg font-black uppercase leading-[1.05] tracking-tight text-foreground sm:text-xl">
          Let&apos;s build something{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text font-serif text-lg italic text-transparent sm:text-2xl">
            that actually works.
          </span>
        </p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{subheadline}</p>
        <p className="mt-1 text-[11px] font-medium text-foreground/90">{role}</p>

        <button
          type="button"
          data-cursor-hover
          onClick={copy}
          className="group mt-8 w-full text-left"
        >
          <span className="block break-all font-mono text-lg font-medium text-foreground underline-offset-4 transition-colors group-hover:text-primary sm:text-xl">
            {email}
          </span>
          <span className="mt-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            <Copy className="h-3 w-3" />
            Tap to copy email
          </span>
        </button>
      </div>

      <a
        href="#contact"
        data-cursor-hover
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md transition hover:opacity-95"
      >
        Connect now
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}
