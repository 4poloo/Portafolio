import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
const experiences = [
  {
    company: "SurChile SPA",
    role: "Líder de Tecnología e Innovación",
    subrole: "Full Stack / Cloud Developer",
    period: "DIC 2024 — ACTUALIDAD",
    current: true,
    text: "Lidero la evolución tecnológica de la operación y participo directamente en arquitectura y desarrollo. Trabajo con gerencia, usuarios y proveedores para convertir necesidades de negocio en sistemas productivos.",
    details: [
      "Diseño y operación de la integración Softland ERP ↔ INVAS WMS con API Gateway, Lambda, SNS, S3, DynamoDB, CloudWatch e IAM; persistencia E2E en evolución.",
      "Desarrollo de Plataforma SC con React, TypeScript, FastAPI y MongoDB; planificación, OT, devoluciones, recepciones, dashboards y ticketing TI.",
      "Pipelines con GitHub Actions, ambientes QA/PROD y operación con Docker, Nginx y Ubuntu; conectividad híbrida mediante WireGuard.",
      "Observabilidad, diagnóstico de incidentes, consultas SQL y reducción de deuda técnica con SonarQube.",
    ],
  },
  {
    company: "Logística Lerol",
    role: "Soporte TI & Desarrollo de herramientas",
    subrole: "Infraestructura · Redes · Automatización",
    period: "OCT 2023 — JUN 2024",
    text: "Soporte de redes, hardware, impresoras y etiquetadoras. Desarrollé herramientas Python con interfaces gráficas para analizar datos y automatizar informes Excel; participé en respuesta a incidentes de ciberseguridad.",
  },
  {
    company: "SoaSystem SPA",
    role: "Desarrollo de software & soporte técnico",
    subrole: "Web · Datos · Infraestructura",
    period: "JUN 2021 — JUL 2023",
    text: "Desarrollo y mantención de soluciones web con HTML, PHP, Java y MySQL. Soporte de hardware, sistemas operativos y CCTV.",
  },
  {
    company: "Independiente",
    role: "Desarrollador Full Stack Freelance",
    subrole: "Aplicaciones y soluciones a medida",
    period: "PROYECTOS POR ENCARGO",
    text: "Aplicaciones web y móviles con React, TypeScript, SQLite, Django y MySQL. Integraciones con Google Maps, WhatsApp y EmailJS, además de clases de programación.",
  },
];
export default function ExperienceSection() {
  return (
    <section id="experiencia" className="section">
      <SectionTitle
        eyebrow="04 / EXPERIENCIA"
        title="Experiencia profesional"
        description="Desarrollo de software, integración de sistemas, cloud e infraestructura aplicada a operaciones reales."
      />
      <Reveal>
        <ol className="timeline">
          {experiences.map((exp) => (
            <li key={exp.company} className={exp.current ? "current-role" : ""}>
              <div className="experience-meta">
                <span className="mono">{exp.period}</span>
                <h3>{exp.company}</h3>
                {exp.current && (
                  <span className="current-tag">
                    <span className="status-dot" /> Actualmente
                  </span>
                )}
              </div>
              <div className="experience-copy">
                <h4>{exp.role}</h4>
                <span className="small-muted">{exp.subrole}</span>
                <p>{exp.text}</p>
                {exp.details && (
                  <details>
                    <summary>Responsabilidades y alcance</summary>
                    <ul>
                      {exp.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
