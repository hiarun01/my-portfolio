import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
// import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import BlogSection from "./components/BlogSection";
import FreelanceProjects from "./components/FreelanceProjects";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1f] text-[#fafafa] ">
      <About />
      <main className="max-w-4xl mx-auto px-6">
        <FreelanceProjects />
        <ProjectsSection />
        {/* <ExperienceSection /> */}
        <SkillsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
