import { useState } from "react";
import { FiMaximize2, FiPlay } from "react-icons/fi";
import ImagePreview from "../ui/ImagePreview";
import "../../sc-ia-media.css";

const captures = [
  {
    src: "/ScIa/deteccion-con-tapa.webp",
    title: "Detección simultánea de envases con tapa",
    description: "Dos envases identificados como con_tapa durante el recorrido por la línea.",
  },
  {
    src: "/ScIa/deteccion-seguimiento.webp",
    title: "Seguimiento de un envase en movimiento",
    description: "La caja de detección acompaña el producto durante la inspección visual.",
  },
  {
    src: "/ScIa/deteccion-sin-tapa.webp",
    title: "Comparación entre producto con tapa y sin tapa",
    description: "El mismo cuadro muestra las clases con_tapa y sin_tapa detectadas por YOLO.",
  },
] as const;

type Preview = (typeof captures)[number] | null;

export default function ScIaMediaGallery() {
  const [preview, setPreview] = useState<Preview>(null);

  return (
    <>
      <div className="scia-section-heading">
        <p className="eyebrow">DEMOSTRACIÓN REAL</p>
        <h2>YOLO inspeccionando productos en la línea</h2>
        <p>
          Una muestra breve del procesamiento visual aplicado a envases de 250 cc.
          Las cajas corresponden a inferencias del modelo sobre las clases
          <code> con_tapa</code> y <code>sin_tapa</code>.
        </p>
      </div>

      <figure className="scia-demo-video">
        <div className="scia-demo-video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/ScIa/demostracion-poster.webp"
            aria-label="Demostración de YOLO detectando envases con y sin tapa"
          >
            <source src="/ScIa/demostracion.mp4" type="video/mp4" />
            Tu navegador no permite reproducir este video. Puedes
            <a href="/ScIa/demostracion.mp4"> descargar la demostración en MP4</a>.
          </video>
          <span className="scia-demo-badge">
            <FiPlay aria-hidden="true" /> 27 segundos · sin audio
          </span>
        </div>
        <figcaption>
          Video optimizado para web desde el registro original. Se ocultaron fecha,
          hora y una etiqueta del equipo; no se alteraron las detecciones visibles.
          Las puntuaciones son observaciones de esta muestra, no métricas globales
          de precisión.
        </figcaption>
      </figure>

      <div className="scia-capture-grid" aria-label="Capturas de la demostración">
        {captures.map((capture) => (
          <button
            key={capture.src}
            className="scia-capture-card"
            type="button"
            onClick={() => setPreview(capture)}
            aria-label={`Ampliar: ${capture.title}`}
          >
            <span className="scia-capture-image">
              <img
                src={capture.src}
                alt={capture.title}
                width="1600"
                height="850"
                loading="lazy"
                decoding="async"
              />
              <FiMaximize2 aria-hidden="true" />
            </span>
            <span>
              <strong>{capture.title}</strong>
              <small>{capture.description}</small>
            </span>
          </button>
        ))}
      </div>

      {preview && (
        <ImagePreview
          src={preview.src}
          title={preview.title}
          onClose={() => setPreview(null)}
        />
      )}
    </>
  );
}
