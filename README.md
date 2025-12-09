# Portafolio Web – Max Olave

Portafolio personal construido con React + TypeScript + Vite + TailwindCSS. Incluye presentación, habilidades, proyectos principales con galerías, otros proyectos, experiencia y una página dedicada al caso “Integración ERP ↔ WMS”.

## Requisitos
- Node 18+ (LTS recomendado)
- npm

## Scripts
- `npm install` – instala dependencias.
- `npm run dev` – entorno de desarrollo (`http://localhost:5173`).
- `npm run build` – build de producción.
- `npm run preview` – sirve el build local.
- `npm run lint` – ejecuta ESLint.

## Estructura breve
- `src/components/` – UI reutilizable y secciones (Navbar, ProjectCard, etc.).
- `src/pages/` – páginas adicionales (p. ej. Integración ERP/WMS).
- `public/` – assets estáticos (fotos, badges, capturas de proyectos).

## Notas
- Las imágenes y diplomas viven en `public`; al desplegar, asegúrate de incluirla tal cual.
- El navbar usa anchors suaves; enlaces externos (CV, plataformas) abren o descargan según corresponda.
