import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/config/portfolio-types";
import { ExperienceVisual } from "@/components/experience/experienceVisualRegistry";
import {
  clearbitLogoUrl,
  normalizeCompanyDomain,
  websiteThumbUrl,
} from "@/lib/experienceImage";

type Tier = "custom" | "thumb" | "logo" | "svg";

function buildTierList(entry: ExperienceEntry): { tier: Tier; url?: string }[] {
  const domain = normalizeCompanyDomain(entry.companyDomain);
  const list: { tier: Tier; url?: string }[] = [];

  if (entry.visualImageUrl?.trim()) {
    list.push({ tier: "custom", url: entry.visualImageUrl.trim() });
  }
  if (domain) {
    list.push({ tier: "thumb", url: websiteThumbUrl(domain) });
    list.push({ tier: "logo", url: clearbitLogoUrl(domain) });
  }
  list.push({ tier: "svg" });
  return list;
}

/**
 * Shows a remote product/site image when possible (custom URL, then site thumbnail, then logo),
 * with graceful fallback to the abstract SVG illustration.
 */
export function ExperienceVisualMedia({
  entry,
  className,
}: {
  entry: ExperienceEntry;
  className?: string;
}) {
  const tiers = useMemo(() => buildTierList(entry), [entry]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [entry]);

  const current = tiers[idx] ?? tiers[tiers.length - 1];

  if (current.tier === "svg" || !current.url) {
    return <ExperienceVisual entry={entry} className={className} />;
  }

  return (
    <motion.div
      key={`${current.tier}-${current.url}`}
      initial={{ opacity: 0.85 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={`relative flex h-full min-h-[160px] w-full items-center justify-center overflow-hidden rounded-xl bg-muted/30 ${className ?? ""}`}
    >
      <img
        src={current.url}
        alt=""
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="h-full w-full max-h-[min(420px,52vh)] object-cover object-top"
        onError={() => {
          setIdx((i) => Math.min(i + 1, tiers.length - 1));
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
    </motion.div>
  );
}
