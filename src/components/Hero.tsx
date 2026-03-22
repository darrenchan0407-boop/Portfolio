import { motion } from "framer-motion";
import { useState } from "react";
import ParticleBackground from "./ParticleBackground";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import type { HeroVariant } from "@/config/portfolio-types";

type HeroProps = {
  fullName: string;
  role: string;
  headline: string;
  subheadline: string;
  email: string;
  avatarImage?: string;
  variant?: HeroVariant;
};

const Hero = ({
  fullName,
  role,
  headline,
  subheadline,
  email,
  avatarImage,
  variant = "default",
}: HeroProps) => {
  const [language, setLanguage] = useState("English");
  const isMinimal = variant === "minimal";
  return (
    <section
      id="home"
      className={`relative flex items-center justify-center overflow-hidden ${
        isMinimal ? "py-24 md:py-32" : "min-h-screen"
      }`}
    >
      {/* Dynamic 3D Background — scrims use fixed dark tones so particles read the same on every page theme */}
      {!isMinimal && <ParticleBackground />}
      {!isMinimal && <div className="absolute inset-0 bg-black/25" />}
      <div
            className={
              isMinimal
                ? "absolute inset-0 bg-gradient-to-t from-background/85 via-background/35 to-transparent"
                : "absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent"
            }
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Futuristic greeting */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={
              isMinimal
                ? "text-6xl md:text-8xl lg:text-9xl font-display font-black mb-8 tracking-wide text-3d-glow bg-gradient-to-br from-foreground via-primary/90 to-foreground bg-clip-text text-transparent"
                : "text-6xl md:text-8xl lg:text-9xl font-display font-black mb-8 tracking-wide bg-gradient-to-br from-white via-primary/95 to-slate-200 bg-clip-text text-transparent [text-shadow:0_0_36px_rgba(255,255,255,0.2)]"
            }
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`text-xl md:text-2xl lg:text-3xl font-hero font-medium max-w-3xl mx-auto leading-relaxed ${
              isMinimal ? "text-foreground/85" : "text-white/85"
            }`}
          >
            {subheadline}
          </motion.p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className={`mt-12 text-sm ${isMinimal ? "text-foreground/80" : "text-white/75"}`}
          >
            Email:{" "}
            <a
              href={`mailto:${email}`}
              className={isMinimal ? "text-primary hover:underline" : "text-primary hover:underline drop-shadow-sm"}
            >
              {email}
            </a>
          </motion.div>

        </motion.div>

        {/* Name & avatar - layout tweaks per variant */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={`flex items-center gap-4 ${
            variant === "split"
              ? "mt-10 justify-center"
              : "absolute top-8 right-8"
          }`}
        >
          <div className={variant === "split" ? "text-left" : "text-right"}>
            <h3
              className={`font-display font-semibold text-lg ${isMinimal ? "text-foreground" : "text-white"}`}
            >
              {fullName}
            </h3>
            <p
              className={`text-sm font-hero ${isMinimal ? "text-foreground/75" : "text-white/75"}`}
            >
              {role}
            </p>
          </div>
          {avatarImage && (
            <div className="w-16 h-16 rounded-full bg-gradient-accent p-1 shadow-glow">
              <img
                src={avatarImage}
                alt={fullName}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          )}
        </motion.div>
      </div>

      {/* Language selector - hide for minimal */}
      {!isMinimal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-8 text-sm text-white/70"
        >
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-28 bg-transparent border-none text-white/70 hover:text-white transition-colors focus:ring-0 focus:ring-offset-0 h-auto p-0 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="中文">中文</SelectItem>
              <SelectItem value="Español">Español</SelectItem>
              <SelectItem value="Français">Français</SelectItem>
              <SelectItem value="Deutsch">Deutsch</SelectItem>
              <SelectItem value="日本語">日本語</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
