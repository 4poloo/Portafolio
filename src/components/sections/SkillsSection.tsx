import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiFastapi,
  SiTailwindcss,
  SiAmazonwebservices,
  SiVite,
  SiFirebase,
  SiJavascript,
  SiPython,
  SiMariadb,
  SiC,
  SiCplusplus,
  SiDocker,
  SiJira,
  SiGithub,
  SiOpenai,
  SiNodedotjs,
  // SiNestjs,
  // SiSpringboot
} from "react-icons/si";
import SectionTitle from "../ui/SectionTitle";
import TechBadge from "../ui/TechBadge";

function SkillsSection() {
  const techs = [
    {
      label: "React",
      icon: <SiReact />,
      hoverClass:
        "hover:text-sky-300 hover:border-sky-400/60 hover:shadow-[0_0_12px_rgba(56,189,248,0.35)]",
    },
    {
      label: "TypeScript",
      icon: <SiTypescript />,
      hoverClass:
        "hover:text-blue-300 hover:border-blue-400/60 hover:shadow-[0_0_12px_rgba(96,165,250,0.35)]",
    },
    {
      label: "JavaScript",
      icon: <SiJavascript />,
      hoverClass:
        "hover:text-amber-300 hover:border-amber-400/60 hover:shadow-[0_0_12px_rgba(251,191,36,0.35)]",
    },
    {
      label: "Vite",
      icon: <SiVite />,
      hoverClass:
        "hover:text-purple-200 hover:border-purple-300/60 hover:bg-gradient-to-r hover:from-purple-500/15 hover:to-amber-400/20 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]",
    },
    {
      label: "Tailwind CSS",
      icon: <SiTailwindcss />,
      hoverClass:
        "hover:text-cyan-200 hover:border-cyan-400/60 hover:shadow-[0_0_12px_rgba(103,232,249,0.35)]",
    },
    {
      label: "Node.js",
      icon: <SiNodedotjs />,
      hoverClass:
        "hover:text-emerald-200 hover:border-emerald-300/60 hover:bg-emerald-500/10 hover:shadow-[0_0_12px_rgba(52,211,153,0.3)]",
    },
    {
      label: "FastAPI",
      icon: <SiFastapi />,
      hoverClass:
        "hover:text-emerald-300 hover:border-emerald-400/60 hover:shadow-[0_0_12px_rgba(52,211,153,0.35)]",
    },
    {
      label: "Python",
      icon: <SiPython />,
      hoverClass:
        "hover:text-sky-200 hover:border-amber-300/60 hover:bg-gradient-to-r hover:from-sky-500/15 hover:via-blue-500/10 hover:to-amber-400/20 hover:shadow-[0_0_14px_rgba(56,189,248,0.28)]",
    },
    {
      label: "Docker",
      icon: <SiDocker />,
      hoverClass:
        "hover:text-sky-200 hover:border-sky-400/60 hover:shadow-[0_0_12px_rgba(56,189,248,0.35)] hover:bg-sky-500/10",
    },
    {
      label: "MongoDB",
      icon: <SiMongodb />,
      hoverClass:
        "hover:text-green-300 hover:border-green-400/60 hover:shadow-[0_0_12px_rgba(74,222,128,0.35)]",
    },
    {
      label: "MariaDB",
      icon: <SiMariadb />,
      hoverClass:
        "hover:text-blue-200 hover:border-blue-300/60 hover:shadow-[0_0_12px_rgba(147,197,253,0.35)]",
    },
    {
      label: "AWS",
      icon: <SiAmazonwebservices />,
      hoverClass:
        "hover:text-amber-200 hover:border-amber-300/60 hover:shadow-[0_0_12px_rgba(251,191,36,0.35)]",
    },
    {
      label: "Firebase",
      icon: <SiFirebase />,
      hoverClass:
        "hover:text-amber-300 hover:border-amber-400/60 hover:bg-amber-500/10 hover:shadow-[0_0_12px_rgba(251,191,36,0.35)]",
    },
    {
      label: "C",
      icon: <SiC />,
      hoverClass:
        "hover:text-blue-200 hover:border-blue-300/60 hover:shadow-[0_0_12px_rgba(125,211,252,0.35)]",
    },
    {
      label: "C++",
      icon: <SiCplusplus />,
      hoverClass:
        "hover:text-blue-200 hover:border-blue-400/60 hover:shadow-[0_0_12px_rgba(96,165,250,0.35)]",
    },
    {
      label: "GitHub",
      icon: <SiGithub />,
      hoverClass:
        "hover:text-white hover:border-neutral-500 hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]",
    },
    {
      label: "Jira",
      icon: <SiJira />,
      hoverClass:
        "hover:text-blue-200 hover:border-blue-400/60 hover:shadow-[0_0_12px_rgba(96,165,250,0.35)]",
    },
    {
      label: "OpenAI",
      icon: <SiOpenai />,
      hoverClass:
        "hover:text-emerald-200 hover:border-emerald-300/60 hover:bg-emerald-500/10 hover:shadow-[0_0_12px_rgba(52,211,153,0.3)]",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Habilidades" />

      <div className="grid gap-8 md:grid-cols-2 mt-2">
        <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 transition-shadow duration-200 hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]">
          <p className="text-sm text-neutral-200 leading-relaxed">
            Soy capaz de tomar un problema operativo complejo, mapearlo con los equipos de planta, y convertirlo en una arquitectura escalable de APIs, dashboards y automatizaciones. Defino requerimientos junto a gerencia, diseño la solución de extremo a extremo y la llevo a producción con la tecnología adecuada para el caso, ya sea cloud o on-premise. Me siento cómodo tomando decisiones con información limitada, priorizando impacto y presentando propuestas claras.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 transition-shadow duration-200 hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]">
          <h3 className="text-sm font-semibold mb-3">Tecnologías</h3>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <TechBadge
                key={tech.label}
                icon={tech.icon}
                label={tech.label}
                className={tech.hoverClass}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default SkillsSection;
