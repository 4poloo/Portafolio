import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
interface CaseStudyProps {
  number: string;
  title: string;
  descriptor: string;
  intro: string;
  tags: string[];
  children: ReactNode;
  next: { href: string; title: string };
  headerAction?: ReactNode;
}
export default function CaseStudy({
  number,
  title,
  descriptor,
  intro,
  tags,
  children,
  next,
  headerAction,
}: CaseStudyProps) {
  return (
    <article className="case-study">
      <Link to="/#proyectos" className="back-link">
        <FiArrowLeft aria-hidden="true" /> Volver a proyectos
      </Link>
      <header className="case-header">
        <p className="eyebrow">CASO DE ESTUDIO {number} / SURCHILE</p>
        <h1>{title}</h1>
        <p className="case-descriptor">{descriptor}</p>
        <p>{intro}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {headerAction && (
          <div className="case-header-action">{headerAction}</div>
        )}
      </header>
      {children}
      <Reveal>
        <Link className="next-project" to={next.href}>
          <span>
            <span className="eyebrow">SIGUIENTE CASO</span>
            <strong>{next.title}</strong>
          </span>
          <FiArrowUpRight aria-hidden="true" />
        </Link>
      </Reveal>
    </article>
  );
}
