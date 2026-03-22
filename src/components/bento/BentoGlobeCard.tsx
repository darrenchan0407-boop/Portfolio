import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { GlobeRegionId } from "@/config/portfolio-types";

const REGIONS: { id: GlobeRegionId; label: string; short: string }[] = [
  { id: "uk", label: "UK", short: "GB" },
  { id: "in", label: "India", short: "IN" },
  { id: "us", label: "USA", short: "US" },
  { id: "br", label: "Brazil", short: "BR" },
  { id: "sea", label: "SE Asia", short: "SEA" },
  { id: "co", label: "Colombia", short: "CO" },
];

/** Approximate geographic centers (degrees); matches the same Y-up unit sphere as the dot cloud */
const HIGHLIGHT_GEO: Record<GlobeRegionId, { lat: number; lon: number }> = {
  uk: { lat: 51.5, lon: -0.12 },
  in: { lat: 22.5, lon: 79.0 },
  us: { lat: 37.77, lon: -122.42 },
  br: { lat: -23.55, lon: -46.63 },
  sea: { lat: 10.75, lon: 106.65 },
  co: { lat: 4.71, lon: -74.07 },
};

function geoToUnitYUp(latDeg: number, lonDeg: number) {
  const λ = (latDeg * Math.PI) / 180;
  const μ = (lonDeg * Math.PI) / 180;
  return {
    x: Math.cos(λ) * Math.cos(μ),
    y: Math.sin(λ),
    z: Math.cos(λ) * Math.sin(μ),
  };
}

type BentoGlobeCardProps = {
  /** Which region is selected first; each portfolio sets this in `bento.globeRegion` */
  defaultRegion: GlobeRegionId;
};

/** Dot sphere with rotation; highlight follows region pills and real lat/lon */
export function BentoGlobeCard({ defaultRegion }: BentoGlobeCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [region, setRegion] = useState<GlobeRegionId>(defaultRegion);
  const regionRef = useRef(region);
  const angleRef = useRef(0);
  regionRef.current = region;

  useEffect(() => {
    setRegion(defaultRegion);
  }, [defaultRegion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pts: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < 520; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      pts.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
      });
    }

    let raf = 0;

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w < 8 || h < 8) {
        raf = requestAnimationFrame(draw);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      }

      const cx = w / 2;
      const cy = h / 2;
      const rad = Math.min(w, h) * 0.38;
      const reg = regionRef.current;
      const geo = HIGHLIGHT_GEO[reg];
      const hlSphere = geoToUnitYUp(geo.lat, geo.lon);

      angleRef.current += 0.0035;
      const a = angleRef.current;

      const rot = (x: number, y: number, z: number) => {
        const x1 = x * Math.cos(a) - z * Math.sin(a);
        const z1 = x * Math.sin(a) + z * Math.cos(a);
        return { x: x1, y, z: z1 };
      };

      const proj = (x: number, y: number, z: number) => {
        const persp = 2.35 / (2.35 + z);
        return { px: cx + x * rad * persp, py: cy + y * rad * persp, z };
      };

      ctx.clearRect(0, 0, w, h);

      const sorted = pts
        .map((p) => {
          const p1 = rot(p.x, p.y, p.z);
          return { ...proj(p1.x, p1.y, p1.z) };
        })
        .sort((a, b) => a.z - b.z);

      for (const o of sorted) {
        const alpha = 0.12 + (o.z + 1) * 0.38;
        ctx.fillStyle = `hsl(var(--foreground) / ${Math.min(0.85, alpha).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(o.px, o.py, o.z > 0 ? 1.15 : 0.75, 0, Math.PI * 2);
        ctx.fill();
      }

      const h1 = rot(hlSphere.x, hlSphere.y, hlSphere.z);
      const hp = proj(h1.x, h1.y, h1.z);
      ctx.shadowColor = "hsl(var(--primary))";
      ctx.shadowBlur = 14;
      ctx.fillStyle = "hsl(var(--primary))";
      ctx.beginPath();
      ctx.arc(hp.px, hp.py, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      data-cursor-hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden rounded-3xl border border-border bg-card/90 p-6 text-card-foreground shadow-sm backdrop-blur-md"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Available globally
      </p>
      <h3 className="mt-2 max-w-[14rem] font-display text-xl font-bold leading-tight text-foreground md:text-2xl">
        Adaptable across time zones
      </h3>

      <div className="relative mt-4 h-[220px] w-full md:h-[260px]">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              data-cursor-hover
              onClick={() => setRegion(r.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                region === r.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-muted/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="opacity-80">{r.short}</span>{" "}
              <span className="ml-0.5">{r.label}</span>
            </button>
          ))}
        </div>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
          Remote · {REGIONS.find((x) => x.id === region)?.label}
        </p>
      </div>
    </motion.div>
  );
}
