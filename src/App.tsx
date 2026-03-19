import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { PORTFOLIO } from "./data/portfolioData";
import { AboutSection } from "./components/AboutSection";

const App = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation name={PORTFOLIO.name} />

      <HeroSection
        name={PORTFOLIO.name}
        title={PORTFOLIO.title}
        bio={PORTFOLIO.bio}
        onLetsStart={() => scrollTo("about")}
      />
      <AboutSection about={PORTFOLIO.about} />

      <SkillsSection skills={PORTFOLIO.skills} />

      <ProjectsSection projects={PORTFOLIO.projects} />

      <ContactSection
        email={PORTFOLIO.email}
        github={PORTFOLIO.github}
        linkedin={PORTFOLIO.linkedin}
      />

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>
          © {new Date().getFullYear()} {PORTFOLIO.name}. Built with React &
          Tailwind
        </p>
      </footer>
    </div>
  );
};

export default App;
