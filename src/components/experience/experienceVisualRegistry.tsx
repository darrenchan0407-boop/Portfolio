import type { FC } from "react";
import type { ExperienceEntry } from "@/config/portfolio-types";

function slugify(company: string): string {
  return company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

/** Map verbose slugs to illustration keys */
const ALIASES: Record<string, string> = {
  "cloudnova-technologies": "cloudnova",
  "belun-technology-company-limited": "belun",
  "e-xuncheng-technology-company-limited": "exuncheng",
  "virtual-andes-digital-marketing-it-solutions-opc": "virtual-andes",
};

export function resolveExperienceVisualKey(entry: ExperienceEntry): string {
  if (entry.visualKey) return entry.visualKey;
  const raw = slugify(entry.company);
  return ALIASES[raw] ?? raw;
}

type SvgProps = { className?: string };

function SvgDefault({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <circle cx="120" cy="100" r="72" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path
        d="M60 120 Q120 40 180 120"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="90" cy="95" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="150" cy="95" r="6" fill="currentColor" opacity="0.5" />
      <circle cx="120" cy="130" r="8" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

function SvgNavigate360({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <circle cx="120" cy="100" r="78" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <polygon
        points="120,35 128,95 120,105 112,95"
        fill="currentColor"
        opacity="0.9"
      />
      <polygon
        points="120,165 128,105 120,95 112,105"
        fill="currentColor"
        opacity="0.45"
      />
      <polygon
        points="45,100 105,92 105,108 45,100"
        fill="currentColor"
        opacity="0.55"
      />
      <polygon
        points="195,100 135,92 135,108 195,100"
        fill="currentColor"
        opacity="0.55" />
      <circle cx="120" cy="100" r="10" stroke="currentColor" strokeWidth="2" opacity="0.85" />
    </svg>
  );
}

function SvgVin({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} aria-hidden>
      <path
        d="M70 160 L120 45 L170 160 H145 L120 95 L95 160 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <rect x="55" y="165" width="130" height="8" rx="2" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

function SvgMoatable({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <path
        d="M40 120 Q80 60 120 120 T200 120"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.4"
      />
      <path
        d="M40 140 Q90 80 140 140 T220 140"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.65"
      />
      <text x="95" y="95" fill="currentColor" fontSize="48" fontWeight="800" opacity="0.9" fontFamily="system-ui">
        M
      </text>
    </svg>
  );
}

function SvgAmazon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <path
        d="M55 130 Q120 155 185 130"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path d="M175 118 L195 95 L185 88" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <rect x="70" y="55" width="100" height="55" rx="8" stroke="currentColor" strokeWidth="2" opacity="0.35" />
    </svg>
  );
}

function SvgCloudNova({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} aria-hidden>
      <path
        d="M60 130 Q40 110 65 95 Q70 70 100 75 Q115 50 145 55 Q175 50 185 75 Q210 80 200 105 Q215 120 190 135 H70 Q55 135 60 130Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M120 40 L128 70 L160 50 L140 78 L175 95 L135 95 L120 125 L105 95 L65 95 L100 78 L80 50 L112 70 Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function SvgPacificWebLabs({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <path d="M30 140 Q60 80 120 100 T210 130" stroke="currentColor" strokeWidth="3" opacity="0.5" />
      <path d="M30 155 Q90 110 150 130 T220 150" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <text
        x="75"
        y="75"
        fill="currentColor"
        fontSize="28"
        fontFamily="ui-monospace, monospace"
        opacity="0.85"
      >
        &lt;/&gt;
      </text>
    </svg>
  );
}

function SvgVirtualAndes({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} aria-hidden>
      <path d="M20 140 L80 60 L120 100 L160 40 L220 140 Z" fill="currentColor" opacity="0.45" />
      <path d="M50 140 L110 85 L150 115 L190 140 Z" fill="currentColor" opacity="0.75" />
      <circle cx="120" cy="55" r="12" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

function SvgCeiba({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <path
        d="M120 40 L135 90 L180 95 L145 125 L155 175 L120 150 L85 175 L95 125 L60 95 L105 90 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}

function SvgCesar({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <path
        d="M120 45 L175 95 L155 160 L85 160 L65 95 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <circle cx="120" cy="110" r="38" stroke="currentColor" strokeWidth="2" opacity="0.45" />
      <circle cx="120" cy="110" r="14" fill="currentColor" opacity="0.65" />
    </svg>
  );
}

function SvgMicrosoft({ className }: SvgProps) {
  const s = 38;
  const o = 72;
  return (
    <svg viewBox="0 0 240 200" className={className} aria-hidden>
      <rect x={o} y={o} width={s} height={s} fill="currentColor" opacity="0.9" />
      <rect x={o + s + 8} y={o} width={s} height={s} fill="currentColor" opacity="0.65" />
      <rect x={o} y={o + s + 8} width={s} height={s} fill="currentColor" opacity="0.55" />
      <rect x={o + s + 8} y={o + s + 8} width={s} height={s} fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function SvgBelun({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <path
        d="M80 150 Q120 40 160 150"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M95 145 Q120 70 145 145"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

function SvgExuncheng({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <path d="M70 60 L170 140 M170 60 L70 140" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
      <circle cx="70" cy="60" r="8" fill="currentColor" />
      <circle cx="170" cy="140" r="8" fill="currentColor" />
      <path d="M50 150 H190" stroke="currentColor" strokeWidth="2" opacity="0.35" strokeDasharray="6 6" />
    </svg>
  );
}

function SvgAltermyth({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <polygon points="120,35 165,155 75,155" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
      <polygon points="120,55 150,145 90,145" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.35" />
      <circle cx="120" cy="115" r="8" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function SvgNodeflux({ className }: SvgProps) {
  const degs = [0, 60, 120, 180, 240, 300];
  return (
    <svg viewBox="0 0 240 200" className={className} fill="none" aria-hidden>
      <circle cx="120" cy="100" r="6" fill="currentColor" />
      {degs.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const r = 55;
        const x = 120 + r * Math.cos(rad);
        const y = 100 + r * Math.sin(rad) * 0.72;
        return (
          <g key={deg}>
            <line
              x1="120"
              y1="100"
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1.5"
              opacity={0.35 + i * 0.06}
            />
            <circle cx={x} cy={y} r="5" fill="currentColor" opacity={0.55} />
          </g>
        );
      })}
    </svg>
  );
}

const REGISTRY: Record<string, FC<SvgProps>> = {
  default: SvgDefault,
  navigate360: SvgNavigate360,
  vin: SvgVin,
  moatable: SvgMoatable,
  amazon: SvgAmazon,
  cloudnova: SvgCloudNova,
  "cloudnova-technologies": SvgCloudNova,
  "pacific-web-labs": SvgPacificWebLabs,
  "virtual-andes": SvgVirtualAndes,
  "ceiba-software": SvgCeiba,
  cesar: SvgCesar,
  microsoft: SvgMicrosoft,
  belun: SvgBelun,
  exuncheng: SvgExuncheng,
  altermyth: SvgAltermyth,
  nodeflux: SvgNodeflux,
};

export function ExperienceVisual({ entry, className }: { entry: ExperienceEntry; className?: string }) {
  const key = resolveExperienceVisualKey(entry);
  const Cmp = REGISTRY[key] ?? REGISTRY.default;
  return (
    <div className={`text-primary ${className ?? ""}`}>
      <Cmp className="h-full w-full max-h-[min(360px,55vh)]" />
    </div>
  );
}
