import { motion } from "framer-motion";
import experienceImage from "@/assets/experience-cloud.jpg";
import type { ExperienceEntry, ExperienceVariant } from "@/config/portfolio-types";

type ExperienceProps = {
  experiences: ExperienceEntry[];
  variant?: ExperienceVariant;
};

const Experience = ({ experiences, variant = "default" }: ExperienceProps) => {
  return (
    <section
      id="experience"
      className={variant === "compact" ? "py-20 bg-gradient-subtle" : "py-32"}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Experience Timeline */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Experience</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-[1.1]">
                Where I've built
                <br />
                great software.
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-16">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="relative pl-8 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-primary -translate-x-[5.5px] shadow-glow" />

                    <div className="space-y-3">
                      <p className="text-xs font-display text-muted-foreground tracking-wider uppercase">
                        {exp.period}
                      </p>
                      <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                      <p className="text-primary font-display font-semibold">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed max-w-lg">
                        {exp.description}
                      </p>
                      
                      {/* Key achievements */}
                      <ul className="space-y-1 text-sm text-muted-foreground max-w-lg">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 lg:sticky lg:top-32"
          >
            <div className="relative">
              <img 
                src={experienceImage} 
                alt="Cloud infrastructure and microservices architecture" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
