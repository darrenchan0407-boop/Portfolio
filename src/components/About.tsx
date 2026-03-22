import { motion } from "framer-motion";
import aboutImage from "@/assets/about-coding.jpg";
import { Code2, Database, Cloud, Layers } from "lucide-react";
import type { ContactInfo } from "@/config/portfolio-types";

const skills = [
  { icon: Code2, label: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
  { icon: Database, label: "Backend", items: ["Go", "Node.js", "Python", "PostgreSQL"] },
  { icon: Cloud, label: "Cloud", items: ["AWS", "GCP", "Docker", "Kubernetes"] },
  { icon: Layers, label: "Architecture", items: ["Microservices", "GraphQL", "CI/CD", "Terraform"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

type AboutProps = {
  heading: string;
  paragraphs: string[];
  contact: ContactInfo;
};

const About = ({ heading, paragraphs, contact }: AboutProps) => {
  return (
    <section id="about" className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 leading-[1.1] text-foreground">
              {heading}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed [text-rendering:optimizeLegibility]">
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <br />
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                    {contact.email}
                  </a>
                </div>
                {contact.phone && (
                  <div>
                    <span className="text-muted-foreground">Phone:</span>
                    <br />
                    <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                      {contact.phone}
                    </a>
                  </div>
                )}
                {contact.location && (
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <br />
                    <span className="text-foreground">{contact.location}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Coding workspace with multiple monitors" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xl font-display font-semibold mb-12 text-center text-foreground"
          >
            Technical Expertise
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-display font-semibold text-lg mb-3 text-foreground">{skill.label}</h4>
                <ul className="space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
