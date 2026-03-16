import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { xiaomengPortfolio } from "@/config/portfolios/xiaomeng";

const Index = () => {
  const portfolio = xiaomengPortfolio;

  return (
    <div className={`min-h-screen bg-background ${portfolio.theme === "bright" ? "theme-bright" : ""}`}>
      <Navbar fullName={portfolio.fullName} linkedin={portfolio.contact.linkedin} />
      <Hero
        fullName={portfolio.fullName}
        role={portfolio.hero.role}
        headline={portfolio.hero.headline}
        subheadline={portfolio.hero.subheadline}
        email={portfolio.contact.email}
        avatarImage={portfolio.hero.avatarImage}
      />
      <About
        heading={portfolio.about.heading}
        paragraphs={portfolio.about.paragraphs}
        contact={portfolio.contact}
      />
      <Projects primaryEmail={portfolio.contact.email} projects={portfolio.projects} />
      <Experience experiences={portfolio.experiences} />
      <Contact contact={portfolio.contact} />
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground font-display">
          © {new Date().getFullYear()} {portfolio.fullName}. Built with passion.
        </div>
      </footer>
    </div>
  );
};

export default Index;
