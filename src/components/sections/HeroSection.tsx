import {
  FiArrowDown,
  FiArrowUpRight,
  FiMapPin,
  FiCode,
  FiCloud,
} from "react-icons/fi";
import SocialLinks from "../ui/SocialLinks";
import GradientButton from "../kokonutui/GradientButton";
import { profile } from "../../data/profile";
export default function HeroSection() {
  return (
    <section id="presentacion" className="hero">
      <div className="hero-copy">
        <p className="eyebrow hero-location">
          <span className="status-dot" /> FULL STACK & CLOUD ENGINEER
        </p>
        <h1>
          Maximiliano
          <br />
          Olave<span className="accent">.</span>
        </h1>
        <p className="hero-statement">
          Del problema real
          <br />
          al software <span>en producción.</span>
        </p>
        <p className="hero-description">
          Diseño, desarrollo y opero plataformas e integraciones empresariales.
          Conecto procesos, personas y sistemas con React, Python y AWS.
        </p>
        <div className="hero-actions">
          <GradientButton href="#proyectos">
            Explorar proyectos <FiArrowUpRight aria-hidden="true" />
          </GradientButton>
          <a
            className="button secondary-button"
            href={profile.cv}
            download={profile.cvFilename}
          >
            Descargar CV <FiArrowDown aria-hidden="true" />
          </a>
        </div>
        <SocialLinks />
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img
            src="/images/portrait.webp"
            alt="Maximiliano Olave"
            width="675"
            height="1200"
            fetchPriority="high"
          />
          <div className="portrait-shade" />
          <div className="portrait-caption">
            <span className="mono">INGENIERÍA CON CONTEXTO</span>
            <span>Arquitectura. Desarrollo. Operación.</span>
          </div>
        </div>
        <div className="floating-label cloud-label">
          <FiCloud aria-hidden="true" />
          <span>
            AWS<span className="small-muted">Cloud & integraciones</span>
          </span>
        </div>
        <div className="floating-label code-label">
          <FiCode aria-hidden="true" />
          <span>
            E2E
            <span className="small-muted">Full Stack Development</span>
          </span>
        </div>
        <div className="portrait-coordinate mono">
          <FiMapPin aria-hidden="true" /> SANTIAGO, CHILE{" "}
          <span>33° S · 70° O</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="mono">SOFTWARE QUE CONECTA CON LA OPERACIÓN</span>
        <a href="#sobre-mi">
          Conoce mi enfoque <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
