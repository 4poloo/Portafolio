import { FiArrowUpRight, FiCode, FiDatabase, FiTerminal } from "react-icons/fi";
import SpotlightCard from "../kokonutui/SpotlightCard";
import Reveal from "../ui/Reveal";
const projects = [
  {
    title: "INVAS Monitor",
    icon: FiDatabase,
    category: "DATOS / OPERACIÓN",
    text: "Consultas SQL, informes y dashboards para producción y bodega. Validación de consistencia y apoyo a la trazabilidad operacional.",
    tags: "SQL · INVAS Monitor · Integraciones",
  },
  {
    title: "ETL & herramientas Python",
    icon: FiTerminal,
    category: "AUTOMATIZACIÓN",
    text: "Transformación, normalización y validación de CSV y Excel para cargas en Softland. Interfaces gráficas para análisis e informes internos.",
    tags: "Python · Pandas · Tkinter · Excel",
  },
  {
    title: "Ecomlimp",
    icon: FiCode,
    category: "FRONTEND / E-COMMERCE",
    text: "Catálogo responsive y carrito de compras implementado en el navegador para una empresa de productos de limpieza.",
    tags: "React · JavaScript · Tailwind CSS",
    href: "https://ecomlimp-demo.netlify.app",
  },
  {
    title: "Web corporativa SurChile",
    icon: FiCode,
    category: "WEB / IDENTIDAD",
    text: "Sitio institucional con líneas de producto, información de empresa y una estructura de contenido modular.",
    tags: "React · Vite · Tailwind CSS",
    href: "https://www.surchile.cl",
  },
  {
    title: "Catálogo de bodegas",
    icon: FiCode,
    category: "WEB / CATÁLOGO",
    text: "Catálogo de propiedades con tarjetas dinámicas, galerías y una interfaz adaptable a distintos dispositivos.",
    tags: "React · Vite · Tailwind CSS",
  },
];
export default function OtherProjectsSection() {
  return (
    <section id="otros-proyectos" className="other-section">
      <div className="other-heading">
        <h2>Más proyectos, la misma curiosidad.</h2>
        <span className="mono">EXPLORAR / CONSTRUIR / APRENDER</span>
      </div>
      <Reveal className="other-grid">
        {projects.map(({ title, icon: Icon, category, text, tags, href }) => (
          <SpotlightCard key={title}>
            <div className="other-card-top">
              <Icon aria-hidden="true" />
              <span className="mono">{category}</span>
            </div>
            <h3>
              {href ? (
                <a href={href} target="_blank" rel="noreferrer">
                  {title}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                title
              )}
            </h3>
            <p>{text}</p>
            <p className="small-muted">{tags}</p>
          </SpotlightCard>
        ))}
      </Reveal>
    </section>
  );
}
