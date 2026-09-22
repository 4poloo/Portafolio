import { FiArrowDown, FiArrowUpRight, FiMail } from "react-icons/fi";
import { profile } from "../../data/profile";
import SocialLinks from "../ui/SocialLinks";
import GradientButton from "../kokonutui/GradientButton";
export default function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <p className="eyebrow">08 / CONTACTO</p>
      <h2>Contacto</h2>
      <p>
        Interesado en oportunidades Full Stack, Backend, Cloud/AWS e
        Integraciones donde pueda aportar experiencia en sistemas productivos y
        automatización operacional.
      </p>
      <div className="hero-actions">
        <GradientButton href={`mailto:${profile.email}`}>
          <FiMail aria-hidden="true" /> Contactar por email{" "}
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
