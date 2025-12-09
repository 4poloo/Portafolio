import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import OtherProjectsSection from "./components/sections/OtherProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CoursesSection from "./components/sections/CoursesSection";
import WmsErpProjectPage from "./pages/WmsErpProjectPage";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pb-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <CoursesSection />
                <SkillsSection />
                <ProjectsSection />
                <OtherProjectsSection />
                <ExperienceSection />
              </>
            }
          />
          <Route
            path="/proyectos/integracion-wms-erp"
            element={<WmsErpProjectPage />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
