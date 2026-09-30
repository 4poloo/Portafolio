import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import CoursesSection from "./components/sections/CoursesSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import ImpactSection from "./components/sections/ImpactSection";
import OtherProjectsSection from "./components/sections/OtherProjectsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import { profile } from "./data/profile";
import PlataformaSCProjectPage from "./pages/PlataformaSCProjectPage";
import ScIaProjectPage from "./pages/ScIaProjectPage";
import WmsErpProjectPage from "./pages/WmsErpProjectPage";

interface RouteMetadata {
  title: string;
  description: string;
}

const defaultMetadata: RouteMetadata = {
  title: "Maximiliano Olave | Full Stack & Cloud Engineer",
  description:
    "Portafolio de Maximiliano Olave, Full Stack y Cloud Engineer. AWS, Python, FastAPI, React e integraciones ERP/WMS.",
};

const routeMetadata = {
  "/proyectos/plataforma-sc": {
    title: "Plataforma SC | Maximiliano Olave",
    description:
      "Caso de estudio de Plataforma SC: aplicación Full Stack para planificación, producción, bodega e integración de sistemas, con React, FastAPI, MongoDB y servicios especializados de IA.",
  },
  "/proyectos/sc-ia": {
    title: "SC-IA | Visión artificial industrial | Maximiliano Olave",
    description:
      "Caso de estudio de SC-IA: inspección visual industrial mediante cámaras IP, modelos YOLO, análisis de anomalías y trazabilidad integrada con Plataforma SC.",
  },
  "/proyectos/integracion-wms-erp": {
    title: "Softland ↔ INVAS | Maximiliano Olave",
    description:
      "Integración Softland ERP e INVAS WMS sobre AWS: arquitectura orientada a eventos, trazabilidad y observabilidad.",
  },
} as const satisfies Record<string, RouteMetadata>;

function RouteEffects() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[pathname as keyof typeof routeMetadata] ?? defaultMetadata;
    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", metadata.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", metadata.description);
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
        document.querySelector<HTMLElement>("main")?.focus({ preventScroll: true });
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
                <ImpactSection />
                <ProjectsSection />
                <SkillsSection />
                <ExperienceSection />
                <AboutSection />
                <CoursesSection />
                <OtherProjectsSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/proyectos/plataforma-sc" element={<PlataformaSCProjectPage />} />
          <Route path="/proyectos/sc-ia" element={<ScIaProjectPage />} />
          <Route path="/proyectos/integracion-wms-erp" element={<WmsErpProjectPage />} />
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
        <span className="mono">FULL STACK · CLOUD · AWS · SANTIAGO, CHILE</span>
      </footer>
    </MotionConfig>
  );
}
