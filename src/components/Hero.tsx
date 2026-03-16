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
      className={`relative flex items-center justify-center overflow-hidden ${
        isMinimal ? "py-24 md:py-32" : "min-h-screen"
      }`}
    >
      {/* Dynamic 3D Background */}
      {!isMinimal && <ParticleBackground />}
      {!isMinimal && <div className="absolute inset-0 bg-black/20" />}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent ${
          isMinimal ? "opacity-60" : ""
        }`}
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
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-8 tracking-wide text-3d-glow bg-gradient-to-br from-foreground via-primary/90 to-foreground bg-clip-text text-transparent"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-hero font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            Email:{" "}
            <a href={`mailto:${email}`} className="text-primary hover:underline">
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
            <h3 className="font-display font-semibold text-lg text-foreground">{fullName}</h3>
            <p className="text-sm text-muted-foreground font-hero">{role}</p>
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
          className="absolute bottom-8 left-8 text-sm text-muted-foreground"
        >
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-28 bg-transparent border-none text-muted-foreground hover:text-foreground transition-colors focus:ring-0 focus:ring-offset-0 h-auto p-0 text-sm">
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
