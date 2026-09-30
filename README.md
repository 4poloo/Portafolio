# Moladev — Portafolio 2026

Portafolio de Maximiliano Olave, Full Stack & Cloud Engineer, con experiencia en
AWS, plataformas operacionales, visión artificial aplicada e integraciones ERP/WMS.

## Desarrollo local

Requiere Node.js 22.12+ o una versión compatible más reciente, y npm.

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

`dev` sirve el sitio en `http://localhost:5173`. `preview` permite revisar el build
en `http://localhost:4173`. El workflow `.github/workflows/ci.yml` ejecuta lint y
build para pull requests y cambios en main/master; no despliega.

## Rutas

- `/`: perfil, impacto, stack, proyectos, experiencia, formación y contacto.
- `/proyectos/plataforma-sc`: producto Full Stack, módulos, arquitectura,
  integración SC-IA, capturas y CI/CD.
- `/proyectos/sc-ia`: visión artificial industrial, recorrido de inferencia,
  arquitectura, analítica y ciclo supervisado de modelos.
- `/proyectos/integracion-wms-erp`: arquitectura AWS, flujos, observabilidad,
  integridad y decisiones técnicas.
- Las rutas desconocidas muestran una página 404 dentro de la SPA.

React 19, TypeScript, React Router, Vite, Tailwind CSS 4, CSS y Framer Motion.
Componentes visuales de Kokonut UI adaptados al diseño; no se agregó una segunda
librería de animación.

## Diseño e interacción

Paleta carbón/oliva con acento ámbar, tipografía Manrope y DM Sans servida
localmente en WOFF2. Las tarjetas adaptan Spotlight Cards y Gradient Button de
Kokonut UI; su licencia MIT se conserva en
[`docs/KOKONUT-LICENSE.txt`](docs/KOKONUT-LICENSE.txt).

El caso SC-IA utiliza un único modelo tipado para tres representaciones:

- `compact`: integración Plataforma SC ↔ gateway ↔ API SC-IA;
- `overview`: captura, inferencia, reglas, resultados e integración;
- `detailed`: carriles de planta, servidor IA y plataforma, con ciclo supervisado.

El narrador tiene cinco pasos, no inicia automáticamente, termina sin loop, se
pausa fuera de vista y respeta `prefers-reduced-motion`. La arquitectura sigue
siendo legible sin animación. Las decisiones están documentadas en
[`docs/portfolio/sc-ia-diagram-architecture.md`](docs/portfolio/sc-ia-diagram-architecture.md)
y la revisión de diseño en
[`docs/portfolio/sc-ia-diagram-review.md`](docs/portfolio/sc-ia-diagram-review.md).

## Contenido y recursos

- Enlaces profesionales y CV centralizados en `src/data/profile.ts`.
- CV actual: `public/Maximiliano_Olave_CV_2026_Final.pdf`.
- DynamoDB/PERSIST se describe como validación/evolución, sin afirmar cierre
  productivo E2E.
- Las capturas actuales de Plataforma SC mantienen 13 vistas en temas claro y
  oscuro.
- Los diagramas SC-IA son conceptuales y se identifican como tales; no son una
  simulación de un stream ni evidencia de precisión o rendimiento.
- `scripts/prepare-public.mjs` copia únicamente recursos revisados a
  `node_modules/.cache/portfolio-public`.
- No se incluyen credenciales, endpoints internos, IP, RTSP ni datos de
  transacciones en los diagramas.

## Medios SC-IA

El caso incorpora una demostración real de 27,4 segundos y tres capturas YOLO. El
AVI original permanece fuera del sitio; la copia web pesa cerca de 14 MB, no tiene
audio ni metadatos y oculta fecha, hora y etiqueta de equipo. Todos los derivados
se declaran explícitamente en `scripts/prepare-public.mjs`. El proceso y los comandos
de extracción de frames están documentados en `docs/portfolio/sc-ia-media.md`.

Sigue pendiente confirmar editorialmente el grado de despliegue de SC-IA, la
atribución de liderazgo técnico y cualquier métrica propia de la solución.

## SEO y publicación

Idioma español, meta description, canonical, Open Graph, Twitter Card, JSON-LD
Person, imagen social, sitemap y robots. Los títulos, descripciones, Open Graph URL
y canonical cambian al navegar entre los tres casos.

`vercel.json` mantiene el fallback de React Router. Sitio de referencia:
https://portafolio-moladev.vercel.app/. Esta actualización es local y no incluye
push, PR ni publicación.
