import {
  FiCloud,
  FiCode,
  FiDatabase,
  FiEye,
  FiServer,
  FiTool,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

const groups = [
  {
    title: "Backend & APIs",
    icon: FiServer,
    level: "Experiencia aplicada en proyectos",
    skills: ["Python", "FastAPI", "REST / OpenAPI", "Pydantic", "XML / JSON"],
  },
  {
    title: "Frontend",
    icon: FiCode,
    level: "Experiencia aplicada en proyectos",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
  },
  {
    title: "Cloud & Integraciones",
    icon: FiCloud,
    level: "Experiencia productiva",
    skills: ["Lambda", "S3", "SNS", "API Gateway", "CloudWatch", "ERP / WMS", "SQL Server"],
    note: "DynamoDB: persistencia y correlación en validación.",
  },
  {
    title: "Datos",
    icon: FiDatabase,
    level: "Experiencia aplicada en proyectos",
    skills: ["MongoDB", "PyMongo / Motor", "MySQL", "MariaDB", "SQL", "ETL"],
  },
  {
    title: "Visión artificial e IA aplicada",
    icon: FiEye,
    level: "Aplicación en proyecto SC-IA",
    skills: ["YOLO / Ultralytics", "OpenCV", "Análisis de imágenes", "RTSP", "Cámaras IP"],
    href: "/proyectos/sc-ia",
  },
  {
    title: "DevOps y Arquitectura",
    icon: FiTool,
    level: "Aplicación en proyectos",
    skills: ["Docker / Compose", "GitHub Actions", "Linux / Nginx", "APIs distribuidas", "Gateways", "Observabilidad"],
  },
] as const;

export default function SkillsSection() {
  return (
    <section id="stack" className="section">
      <SectionTitle
        eyebrow="03 / STACK"
        title="Stack y capacidades técnicas"
        description="Tecnologías agrupadas por la responsabilidad que cumplen en productos, integraciones y servicios especializados."
      />
      <Reveal className="skills-grid">
        {groups.map(({ title, icon: Icon, level, skills, ...group }) => (
          <article className="skill-group" key={title}>
            <div className="skill-heading">
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
            </div>
            <p className="skill-level">{level}</p>
            <div className="tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            {"note" in group && group.note && (
              <p className="small-muted skill-note">{group.note}</p>
            )}
            {"href" in group && group.href && (
              <Link className="skill-case-link" to={group.href}>
                Ver caso aplicado →
              </Link>
            )}
          </article>
        ))}
      </Reveal>
      <div className="knowledge-row">
        <span className="mono">CONOCIMIENTOS COMPLEMENTARIOS</span>
        <p>
          C · C++ · Node.js · Express · GCP · Firebase · Firestore · Jenkins ·
          Arquitectura hexagonal
        </p>
      </div>
      <div className="knowledge-row">
        <span className="mono">GESTIÓN TÉCNICA</span>
        <p>
          GitHub · GitLab · Jira · Trello · Monday · Kanban · Scrum · BPMN ·
          Priorización técnica
        </p>
      </div>
    </section>
  );
}
