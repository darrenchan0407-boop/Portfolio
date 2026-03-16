import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { getPortfolioById } from "@/config/portfolios";
import type { Portfolio, SectionId } from "@/config/portfolio-types";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const renderPortfolio = (portfolio: Portfolio) => {
  const themeClass =
  portfolio.theme === "bright"
    ? "theme-bright"
    : portfolio.theme === "blue"
      ? "theme-blue"
      : portfolio.theme === "soft"
        ? "theme-soft"
        : portfolio.theme === "warm"
          ? "theme-warm"
          : "";
  const sections: SectionId[] =
    portfolio.sections ?? ["hero", "about", "projects", "experience", "contact"];

  return (
    <div className={`min-h-screen bg-background ${themeClass}`}>
      <Navbar fullName={portfolio.fullName} linkedin={portfolio.contact.linkedin} />
      {sections.map((section) => {
        switch (section) {
          case "hero":
            return (
              <Hero
                key="hero"
                fullName={portfolio.fullName}
                role={portfolio.hero.role}
                headline={portfolio.hero.headline}
                subheadline={portfolio.hero.subheadline}
                email={portfolio.contact.email}
                avatarImage={portfolio.hero.avatarImage}
                variant={portfolio.heroVariant}
              />
            );
          case "about":
            return (
              <About
                key="about"
                heading={portfolio.about.heading}
                paragraphs={portfolio.about.paragraphs}
                contact={portfolio.contact}
              />
            );
          case "projects":
            return (
              <Projects
                key="projects"
                primaryEmail={portfolio.contact.email}
                projects={portfolio.projects}
                variant={portfolio.projectsVariant}
              />
            );
          case "experience":
            return (
              <Experience
                key="experience"
                experiences={portfolio.experiences}
                variant={portfolio.experienceVariant}
              />
            );
          case "contact":
            return (
              <Contact
                key="contact"
                contact={portfolio.contact}
                variant={portfolio.contactVariant}
              />
            );
          default:
            return null;
        }
      })}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground font-display">
          © {new Date().getFullYear()} {portfolio.fullName}. Built with passion.
        </div>
      </footer>
    </div>
  );
};

const PortfolioPage = () => {
  const params = useParams<{ username: string }>();
  const username = (params.username ?? "").toLowerCase();
  const portfolio = getPortfolioById(username);

  if (!portfolio) {
    return <NotFound />;
  }

  return renderPortfolio(portfolio);
};

export default PortfolioPage;

