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
          Software para <span>operaciones reales.</span>
        </p>
        <p className="hero-description">
          Ingeniero Civil en Computación, mención Informática. Desarrollo
          plataformas, APIs e integraciones empresariales con React, Python y
          AWS, desde arquitectura y CI/CD hasta observabilidad y soporte
          productivo.
        </p>
        <div className="hero-actions">
          <GradientButton href="#proyectos">
            Ver proyectos <FiArrowUpRight aria-hidden="true" />
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
            <span className="mono">FULL STACK & CLOUD</span>
            <span>Arquitectura. Desarrollo. Operación.</span>
          </div>
        </div>
        <div className="floating-label cloud-label">
          <FiCloud aria-hidden="true" />
          <span>
            AWS<span className="small-muted">Cloud & Integraciones</span>
          </span>
        </div>
        <div className="floating-label code-label">
          <FiCode aria-hidden="true" />
          <span>
            FULL STACK · E2E
            <span className="small-muted">React + FastAPI</span>
          </span>
        </div>
        <div className="portrait-coordinate mono">
          <FiMapPin aria-hidden="true" /> SANTIAGO, CHILE{" "}
          <span>33° S · 70° O</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="mono">PLATAFORMAS · APIs · INTEGRACIONES</span>
        <a href="#sobre-mi">
          Perfil profesional <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
