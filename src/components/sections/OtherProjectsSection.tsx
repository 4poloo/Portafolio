import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const otherProjects = [
  {
    title: "Catálogo Web de Bodegas",
    description:
      "Página web catálogo para arriendo de bodegas, con tarjetas dinámicas, múltiples imágenes por propiedad y diseño listo para futura conexión a backend.",
    technologies: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Web Corporativa SurChile",
    description:
      "Página corporativa con información institucional, líneas de producto y enfoque en identidad de marca. Estructura modular para futura administración de contenido.",
    link: "https://www.surchile.cl",
    technologies: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "ETL para Softland (CSV → Carga)",
    description:
      "Script ETL que convierte datos desde planillas internas al formato requerido por Softland, automatizando cálculos y normalización de columnas.",
    technologies: ["Python", "Pandas", "Excel"],
  },
  {
    title: "Herramientas Python para Excel (GUI)",
    description:
      "Aplicación Python con interfaz gráfica para generar análisis desde Excel, incorporando cálculos y visualización sin requerir conocimientos técnicos.",
    technologies: ["Python", "Tkinter", "Excel", "Visualización"],
  },
  {
    title: "Soporte y herramientas para logística",
    description:
      "Desarrollo de herramientas internas en Python para automatizar informes, procesar datos y mejorar flujos administrativos integrados a logística.",
    technologies: ["Python", "Excel", "Scripts internos"],
  },
];

function OtherProjectsSection() {
  return (
    <motion.section
      id="otros-proyectos"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="mt-12"
    >
      <SectionTitle title="Otros Proyectos" />

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="border border-neutral-800 rounded-lg bg-neutral-950/60 p-4 hover:-translate-y-1 hover:border-neutral-600/80 transition-all duration-200 hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]"
          >
            <h3 className="text-sm font-semibold text-neutral-100">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
              {project.description}{" "}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                >
                  {project.link.replace("https://", "")}
                </a>
              )}
            </p>
            <p className="text-[11px] text-neutral-400 mt-2">
              {project.technologies.join(" · ")}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default OtherProjectsSection;
