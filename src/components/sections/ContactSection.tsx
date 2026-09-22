import { FiArrowDown, FiArrowUpRight, FiMail } from "react-icons/fi";
import { profile } from "../../data/profile";
import SocialLinks from "../ui/SocialLinks";
import GradientButton from "../kokonutui/GradientButton";
export default function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <p className="eyebrow">07 / CONVERSEMOS</p>
      <h2>
        El próximo desafío
        <br />
        empieza con un <span>hola.</span>
      </h2>
      <p>
        ¿Tu equipo está construyendo un producto, conectando sistemas o dando el
        siguiente paso hacia cloud? Me interesa conocerlo.
      </p>
      <div className="hero-actions">
        <GradientButton href={`mailto:${profile.email}`}>
          <FiMail aria-hidden="true" /> Escribirme{" "}
          <FiArrowUpRight aria-hidden="true" />
        </GradientButton>
        <a
          href={profile.cv}
          download={profile.cvFilename}
          className="button secondary-button"
        >
          Descargar CV <FiArrowDown aria-hidden="true" />
        </a>
      </div>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="contact-bottom">
        <SocialLinks />
        <span>Santiago, Chile · Remoto / Híbrido / Presencial</span>
      </div>
    </section>
  );
}
