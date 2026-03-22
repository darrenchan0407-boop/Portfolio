import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import type { ContactInfo, ContactVariant } from "@/config/portfolio-types";

type ContactProps = {
  contact: ContactInfo;
  variant?: ContactVariant;
};

const Contact = ({ contact, variant = "default" }: ContactProps) => {
  const socials = [
    contact.linkedin && { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${contact.email}`, label: "Email" },
  ].filter(Boolean) as { icon: typeof Github; href: string; label: string }[];
  return (
    <section id="contact" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-foreground">
            {variant === "minimal" ? "Get in touch" : "Let's build something\n"}
            {variant === "minimal" ? null : (
              <span className="text-gradient font-semibold drop-shadow-[0_1px_0_rgba(0,0,0,0.12)]">
                together.
              </span>
            )}
          </h2>
          {variant === "default" && (
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 [text-rendering:optimizeLegibility]">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just a friendly chat about technology.
            </p>
          )}

          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-primary-foreground font-display font-medium tracking-wide hover:opacity-90 transition-opacity mb-12"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>

          <div className={`flex items-center justify-center gap-4 ${variant === "minimal" ? "mt-6" : ""}`}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-lg border border-border bg-card/30 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card/50 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
