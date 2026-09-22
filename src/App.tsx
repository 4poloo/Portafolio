import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ImpactSection from "./components/sections/ImpactSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import OtherProjectsSection from "./components/sections/OtherProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CoursesSection from "./components/sections/CoursesSection";
import ContactSection from "./components/sections/ContactSection";
import WmsErpProjectPage from "./pages/WmsErpProjectPage";
import PlataformaSCProjectPage from "./pages/PlataformaSCProjectPage";
import { profile } from "./data/profile";

function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const title =
      pathname === "/proyectos/plataforma-sc"
        ? "Plataforma SC | Maximiliano Olave"
        : pathname === "/proyectos/integracion-wms-erp"
          ? "Softland ↔ INVAS | Maximiliano Olave"
          : "Maximiliano Olave | Full Stack & Cloud Engineer";
    document.title = title;
    const description =
      pathname === "/proyectos/plataforma-sc"
        ? "Caso de estudio de Plataforma SC: React, FastAPI, MongoDB y automatización de procesos industriales."
        : pathname === "/proyectos/integracion-wms-erp"
          ? "Integración Softland ERP e INVAS WMS sobre AWS: arquitectura orientada a eventos, trazabilidad y observabilidad."
          : "Portafolio de Maximiliano Olave, Full Stack y Cloud Engineer. AWS, Python, FastAPI, React e integraciones ERP/WMS.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", `${profile.site}${pathname}`);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `${profile.site}${pathname}`);
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        target?.scrollIntoView({ behavior: "instant", block: "start" });
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        document
          .querySelector<HTMLElement>("main")
          ?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
}
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <RouteEffects />
      <Navbar />
      <main id="contenido" tabIndex={-1} className="page-shell">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ImpactSection />
                <SkillsSection />
                <ProjectsSection />
                <OtherProjectsSection />
                <ExperienceSection />
                <CoursesSection />
                <ContactSection />
              </>
            }
          />
          <Route
            path="/proyectos/integracion-wms-erp"
            element={<WmsErpProjectPage />}
          />
          <Route
            path="/proyectos/plataforma-sc"
            element={<PlataformaSCProjectPage />}
          />
          <Route
            path="*"
            element={
              <section className="not-found">
                <p className="eyebrow">404</p>
                <h1>Esta página no está aquí.</h1>
                <Link to="/" className="button secondary-button">
                  Volver al inicio
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer">
        <Link to="/#presentacion" className="brand">
          moladev<span className="accent">/</span>
        </Link>
        <span>© {new Date().getFullYear()} Maximiliano Olave</span>
        <span className="mono">HECHO CON INTENCIÓN, DESDE CHILE.</span>
      </footer>
    </MotionConfig>
  );
}
