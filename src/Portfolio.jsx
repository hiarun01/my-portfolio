import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <About />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
