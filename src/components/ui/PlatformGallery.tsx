import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiMoon,
  FiSun,
} from "react-icons/fi";

type PlatformTheme = "oscuro" | "claro";

interface PlatformGalleryProps {
  onPreview: (item: { src: string; title: string }) => void;
}

const platformViews = [
  { slug: "inicio", title: "Inicio y navegación modular" },
  { slug: "planificacion-semanal", title: "Planificación semanal" },
  { slug: "planificacion-disponible", title: "Planificación disponible" },
  { slug: "detalle-despacho", title: "Detalle de despacho" },
  { slug: "dashboard-elaboracion", title: "Dashboard de elaboración" },
  { slug: "dashboard-produccion", title: "Dashboard de producción" },
  { slug: "centro-operaciones-ti", title: "Centro de Operaciones TI" },
  {
    slug: "observabilidad-integraciones",
    title: "Observabilidad de integraciones",
  },
  { slug: "recetas-produccion", title: "Recetas de producción" },
  { slug: "productos", title: "Catálogo de productos" },
  { slug: "monitoreo-continuo", title: "Monitoreo continuo de OT" },
  { slug: "agenda-impresion", title: "Agenda de impresión" },
  { slug: "gestion-solicitudes", title: "Gestión de solicitudes" },
] as const;

const imagePath = (theme: PlatformTheme, slug: string) =>
  "/PlataformaOps/" + theme + "/" + slug + ".webp";

export default function PlatformGallery({
  onPreview,
}: PlatformGalleryProps) {
  const [theme, setTheme] = useState<PlatformTheme>("oscuro");
  const [activeIndex, setActiveIndex] = useState(0);
  const activeView = platformViews[activeIndex];
  const activeSrc = imagePath(theme, activeView.slug);
  const activeTitle = activeView.title + " · modo " + theme;

  const move = (direction: number) => {
    setActiveIndex(
      (current) =>
        (current + direction + platformViews.length) % platformViews.length,
    );
  };

  return (
    <div className="platform-gallery">
      <div className="platform-gallery-toolbar">
        <div>
          <span className="mono">RECORRIDO VISUAL</span>
          <p>13 vistas disponibles en ambos temas.</p>
        </div>
        <div
          className="gallery-theme-control"
          role="group"
          aria-label="Tema de las capturas"
        >
          <button
            type="button"
            aria-pressed={theme === "oscuro"}
            onClick={() => setTheme("oscuro")}
          >
            <FiMoon aria-hidden="true" /> Oscuro
          </button>
          <button
            type="button"
            aria-pressed={theme === "claro"}
            onClick={() => setTheme("claro")}
          >
            <FiSun aria-hidden="true" /> Claro
          </button>
        </div>
      </div>

      <figure className="platform-gallery-featured">
        <button
          type="button"
          className="platform-gallery-stage"
          onClick={() => onPreview({ src: activeSrc, title: activeTitle })}
          aria-label={"Ampliar " + activeTitle}
        >
          <img
            key={activeSrc}
            src={activeSrc}
            alt={
              "Vista de " +
              activeView.title.toLowerCase() +
              " de Plataforma Ops en modo " +
              theme
            }
            width="1855"
            height="951"
            loading="lazy"
            decoding="async"
          />
          <span className="gallery-expand-label">
            <FiMaximize2 aria-hidden="true" /> Ampliar
          </span>
        </button>
        <figcaption>
          <span className="mono">
            {String(activeIndex + 1).padStart(2, "0")} / {platformViews.length}
          </span>
          <strong>{activeView.title}</strong>
          <span>Modo {theme}</span>
        </figcaption>
      </figure>

      <div className="platform-gallery-navigation">
        <button
          type="button"
          className="gallery-arrow"
          onClick={() => move(-1)}
          aria-label="Ver captura anterior"
        >
          <FiChevronLeft aria-hidden="true" />
        </button>
        <span className="gallery-position" aria-live="polite">
          {activeView.title}
        </span>
        <button
          type="button"
          className="gallery-arrow"
          onClick={() => move(1)}
          aria-label="Ver captura siguiente"
        >
          <FiChevronRight aria-hidden="true" />
        </button>
      </div>

      <div
        className="platform-gallery-thumbnails"
        role="group"
        aria-label="Vistas de Plataforma Ops"
      >
        {platformViews.map((view, index) => {
          const selected = index === activeIndex;
          return (
            <button
              type="button"
              key={view.slug}
              className={selected ? "is-active" : ""}
              aria-pressed={selected}
              aria-label={
                "Ver " + view.title.toLowerCase() + " en modo " + theme
              }
              onClick={() => setActiveIndex(index)}
            >
              <span className="gallery-thumbnail-image">
                <img
                  src={imagePath(theme, view.slug)}
                  alt=""
                  width="1855"
                  height="951"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span>
                <b className="mono">
                  {String(index + 1).padStart(2, "0")}
                </b>
                {view.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
