import { useState } from "react";
import { FiAward, FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle";
import ImagePreview from "../ui/ImagePreview";
import Reveal from "../ui/Reveal";
export default function CoursesSection() {
  const [preview, setPreview] = useState(false);
  return (
    <section id="cursos" className="section">
      <SectionTitle
        eyebrow="06 / FORMACIÓN"
        title="Formación y certificaciones"
      />
      <Reveal className="education-grid">
        <article className="education-card">
          <FiBookOpen className="card-icon" aria-hidden="true" />
          <p className="eyebrow">UNIVERSIDAD TECNOLÓGICA METROPOLITANA</p>
          <h3>Ingeniería Civil en Computación</h3>
          <p>Mención Informática · Universidad Tecnológica Metropolitana</p>
          <span className="state-badge">Titulado · 2026</span>
          <p className="small-muted">
            Trabajo de título aprobado con nota 7,0: integración y digitalización
            de procesos Softland ERP ↔ INVAS WMS, arquitectura cloud y evolución
            de plataforma operacional.
          </p>
        </article>
        <article className="education-card">
          <FiAward className="card-icon" aria-hidden="true" />
          <p className="eyebrow">LITE THINKING · 2025</p>
          <h3>Máster en DevSecOps — Curso certificado</h3>
          <p>
            SonarQube, Jenkins, Docker, GitHub Actions, CI/CD y prácticas
            DevSecOps.
          </p>
          <button
            type="button"
            className="text-button"
            onClick={() => setPreview(true)}
          >
            Ver certificado <FiArrowUpRight aria-hidden="true" />
          </button>
        </article>
      </Reveal>
      <div className="section-footnote">
        <h3>Idiomas</h3>
        <p>Español: nativo · Inglés: intermedio</p>
      </div>
      {preview && (
        <ImagePreview
          src="/Cursos/3230.png"
          title="Certificado del curso Máster en DevSecOps"
          onClose={() => setPreview(false)}
        />
      )}
    </section>
  );
}
