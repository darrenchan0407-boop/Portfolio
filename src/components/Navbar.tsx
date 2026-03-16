import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  fullName?: string;
  linkedin?: string;
};

const Navbar = ({ fullName, linkedin }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="font-display font-bold text-2xl tracking-tight">
          {fullName ? (
            <>
              {fullName.split(" ")[0]}
              <span className="text-primary">.</span>
            </>
          ) : (
            <>
              XS<span className="text-primary">.</span>
            </>
          )}
        </a>
        
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground font-light tracking-wider transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social links in nav */}
        {linkedin && (
          <div className="hidden lg:flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors uppercase tracking-wide"
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
