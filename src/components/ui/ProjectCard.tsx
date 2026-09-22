import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import type { ReactNode } from "react";
import SpotlightCard from "../kokonutui/SpotlightCard";
interface ProjectCardProps {
  number: string;
  title: string;
  category: string;
  description: string;
  result: string;
  tags: string[];
  href: string;
  children: ReactNode;
}
export default function ProjectCard({
  number,
  title,
  category,
  description,
  result,
  tags,
  href,
  children,
}: ProjectCardProps) {
  return (
    <SpotlightCard className="project-card">
      <div className="project-visual">{children}</div>
      <div className="project-copy">
        <p className="eyebrow">
          <span>{number}</span> / {category}
        </p>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="project-result">{result}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link className="project-link" to={href}>
          Explorar caso de estudio <FiArrowUpRight aria-hidden="true" />
          <span className="sr-only">: {title}</span>
        </Link>
      </div>
    </SpotlightCard>
  );
}
