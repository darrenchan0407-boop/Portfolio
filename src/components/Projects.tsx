import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProjectEntry, ProjectsVariant } from "@/config/portfolio-types";

type ProjectsProps = {
  primaryEmail: string;
  projects: ProjectEntry[];
  variant?: ProjectsVariant;
};

const Projects = ({ primaryEmail, projects, variant = "grid" }: ProjectsProps) => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects showcasing expertise across fintech, healthcare, gaming, and enterprise platforms
          </p>
        </motion.div>

        {/* Featured Projects Grid / Gallery */}
        <div
          className={
            variant === "gallery"
              ? "grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
              : "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          }
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover-scale bg-card border-border/50 shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-bold">{project.title}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="text-xs border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            Additional Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden hover-scale bg-card border-border/50">
                  <div className="flex">
                    <div className="relative w-1/3 aspect-[4/3]">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    <div className="flex-1 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-bold">{project.title}</h4>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {project.category}
                      </Badge>
                      
                      <p className="text-muted-foreground text-sm mb-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 2).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline"
                            className="text-xs border-border/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 2 && (
                          <Badge variant="outline" className="text-xs border-border/50">
                            +{project.tech.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-accent p-8 rounded-lg text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help bring your next project to life
            </p>
            <a
              href={`mailto:${primaryEmail}`}
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Get In Touch
                <ExternalLink className="h-4 w-4" />
              </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
