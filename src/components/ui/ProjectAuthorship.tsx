import { FiCheck, FiCpu, FiUser } from "react-icons/fi";
import "../../bento-integration.css";

interface ProjectAuthorshipProps {
  role: string;
  mode?: string;
  aiAssisted?: boolean;
  title?: string;
  description?: string;
  badges?: string[];
}

const baseDescription =
  "Desarrollo principal realizado por Maximiliano Olave, sin equipo adicional de desarrolladores. IA generativa utilizada como asistencia controlada para investigación, prototipado, revisión y documentación; arquitectura, implementación, validación y operación bajo responsabilidad del autor.";

export default function ProjectAuthorship({
  role,
  mode = "Desarrollo principal individual",
  aiAssisted = true,
  title = "Autoría y responsabilidad técnica",
  description = baseDescription,
  badges = [],
}: ProjectAuthorshipProps) {
  const headingId = `authorship-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section className="project-authorship" aria-labelledby={headingId}>
      <div className="project-authorship-copy">
        <p className="eyebrow">AUTORÍA DEL PROYECTO</p>
        <h2 id={headingId}>{title}</h2>
        <p>{description}</p>
      </div>
      <dl className="project-authorship-meta">
        <div><FiUser aria-hidden="true" /><dt>Rol</dt><dd>{role}</dd></div>
        <div><FiCheck aria-hidden="true" /><dt>Modalidad</dt><dd>{mode}</dd></div>
        <div><FiCpu aria-hidden="true" /><dt>Asistencia IA</dt><dd>{aiAssisted ? "Uso controlado y supervisado" : "No utilizada"}</dd></div>
      </dl>
      {badges.length > 0 && (
        <div className="project-authorship-badges" aria-label="Alcance de responsabilidad">
          {badges.map((badge) => <span key={badge}>{badge}</span>)}
        </div>
      )}
    </section>
  );
}
