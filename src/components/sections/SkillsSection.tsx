import {
  FiCloud,
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
  FiTool,
} from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
const groups = [
  {
    title: "Backend & APIs",
    icon: FiServer,
    level: "Experiencia productiva",
    skills: ["Python", "FastAPI", "APIs REST", "XML / JSON", "OpenAPI"],
  },
  {
    title: "Frontend",
    icon: FiCode,
    level: "Experiencia productiva",
    skills: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "AWS & Cloud",
    icon: FiCloud,
    level: "Experiencia productiva",
    skills: ["Lambda", "S3", "SNS", "API Gateway", "CloudWatch", "IAM", "EC2"],
    note: "DynamoDB: persistencia y correlación en validación.",
  },
  {
    title: "Datos & Integraciones",
    icon: FiDatabase,
    level: "Experiencia productiva",
    skills: ["MongoDB", "MySQL", "MariaDB", "SQL", "INVAS Monitor", "ETL"],
  },
  {
    title: "DevOps & Operación",
    icon: FiTool,
    level: "Uso habitual",
    skills: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Ubuntu",
      "Nginx",
      "WireGuard",
      "SonarQube",
    ],
  },
  {
    title: "Arquitectura",
    icon: FiLayers,
    level: "Aplicación en proyectos",
    skills: [
      "Event-driven",
      "Sistemas distribuidos",
      "ERP / WMS",
      "Cloud / on-premise",
      "Idempotencia",
      "Observabilidad",
    ],
  },
];
export default function SkillsSection() {
  return (
    <section id="stack" className="section">
      <SectionTitle
        eyebrow="03 / STACK"
        title="Stack y capacidades técnicas"
        description="Tecnologías que utilizo para desarrollar, integrar, desplegar y operar aplicaciones productivas."
      />
      <Reveal className="skills-grid">
        {groups.map(({ title, icon: Icon, level, skills, note }) => (
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
            {note && <p className="small-muted skill-note">{note}</p>}
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
