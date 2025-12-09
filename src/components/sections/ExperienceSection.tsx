import SectionTitle from "../ui/SectionTitle";
import ExperienceItem from "../ui/ExperienceItem";

const experiences = [
  {
    role: "Integrador de sistemas ERP/WMS · Desarrollador Full-Stack",
    company: "SurChile SPA, Lampa",
    period: "12/2024 - 12/2025",
    description:
      "Desarrollo e integración estratégica entre ERP Softland y WMS Invas, digitalizando procesos críticos de planta. Creación de plataforma interna modular (React + FastAPI + MongoDB + Docker), dashboards de KPI para gerencia, app web para carga de .csv y página corporativa Surchile.cl.",
  },
  {
    role: "Soporte TI · Desarrollador e implementador de herramientas TI",
    company: "Logistica Lerol, Santiago",
    period: "10/2023 - 06/2024",
    description:
      "Soporte TI integral (hardware, impresoras, etiquetadoras, redes y AP). Desarrollo de herramientas en Python para análisis de datos en Excel con interfaz gráfica, automatización de informes, instalación y mantención de cámaras de seguridad y mitigación de incidente de ciberseguridad en red y correos.",
  },
  {
    role: "Desarrollador de Software · Técnico Hardware",
    company: "SoaSystem SPA, Santiago",
    period: "06/2021 - 07/2023",
    description:
      "Reparación y configuración de equipos (hardware y software), instalación de sistemas de circuito cerrado y desarrollo de página web con base de datos MySQL y lógica en HTML, PHP y Java.",
  },
  {
    role: "Desarrollador Full-Stack Independiente (Freelance)",
    company: "Proyectos independientes",
    period: "2020 - Actualidad",
    description:
      "Diseño e implementación de soluciones a medida para pequeños negocios y clientes particulares, incluyendo desarrollo de aplicaciones web end-to-end, prototipos tipo plataforma de movilidad, sitios web administrables, y herramientas de análisis para uso interno. Levantamiento de requerimientos, arquitectura del proyecto, desarrollo Front y Back, despliegue y soporte técnico.",
  },
];

function ExperienceSection() {
  return (
    <section id="experiencia">
      <SectionTitle title="Experiencia" />
      <div className="mt-2 border border-neutral-800 rounded-lg p-6 bg-neutral-950/60">
        <ol className="relative border-l border-neutral-800 ml-1">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.role + exp.company} {...exp} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ExperienceSection;
