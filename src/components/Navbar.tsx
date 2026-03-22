import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  fullName?: string;
  linkedin?: string;
  /** When true, first paint sits over the dark 3D hero — use light link colors until scroll */
  navOverDarkHero?: boolean;
};

const Navbar = ({ fullName, linkedin, navOverDarkHero = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onDarkHero = navOverDarkHero && !scrolled;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a
          href="#home"
          className={`font-display font-bold text-2xl tracking-tight transition-colors ${
            onDarkHero ? "text-white drop-shadow-md" : "text-foreground"
          }`}
        >
          {fullName ? (
            <>
              {fullName.split(" ")[0]}
              <span
                className={
                  onDarkHero
                    ? "text-primary drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]"
                    : "text-primary"
                }
              >
                .
              </span>
            </>
          ) : (
            <>
              XS
              <span
                className={
                  onDarkHero
                    ? "text-primary drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]"
                    : "text-primary"
                }
              >
                .
              </span>
            </>
          )}
        </a>
        
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-light tracking-wider transition-colors uppercase ${
                onDarkHero
                  ? "text-white/90 hover:text-white drop-shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social links in nav */}
        {linkedin && (
          <div
            className={`hidden lg:flex items-center gap-4 text-xs transition-colors ${
              onDarkHero ? "text-white/85" : "text-muted-foreground"
            }`}
          >
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`uppercase tracking-wide transition-colors ${
                onDarkHero ? "hover:text-white drop-shadow-md" : "hover:text-primary"
              }`}
            >
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
