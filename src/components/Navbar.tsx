import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowDown, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile";
const items = [
  ["Inicio", "presentacion"],
  ["Impacto", "impacto"],
  ["Stack", "stack"],
  ["Proyectos", "proyectos"],
  ["Experiencia", "experiencia"],
  ["Formación", "cursos"],
  ["Contacto", "contacto"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <nav className="nav-shell" aria-label="Navegación principal">
        <Link
          to="/#presentacion"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-symbol" aria-hidden="true">
            m<span>.</span>
          </span>
          <span>
            moladev
            <span className="accent" aria-hidden="true">
              /
            </span>
          </span>
        </Link>
        <div className="desktop-nav">
          {items.map(([label, id]) => (
            <Link
              key={id}
              to={`/#${id}`}
              aria-current={
                location.pathname === "/" && location.hash === `#${id}`
                  ? "location"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <a
            className="button nav-cv"
            href={profile.cv}
            download={profile.cvFilename}
          >
            CV <FiArrowDown aria-hidden="true" />
          </a>
          <button
            type="button"
            ref={toggle}
            className="icon-button menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="mobile-nav" id="mobile-navigation" hidden={!open}>
          {items.map(([label, id]) => (
            <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
              <FiArrowDown aria-hidden="true" />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
