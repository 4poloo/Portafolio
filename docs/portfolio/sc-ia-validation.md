# Validación local — Plataforma SC + SC-IA

Fecha: 30-09-2026  
Rama: `feat/portfolio-sc-ia-case-study`

## Validación automatizada del repositorio

- `npm run lint`: correcto, sin errores.
- `npm run build`: correcto; TypeScript y Vite completan el build.
- `scripts/prepare-public.mjs`: 45 activos revisados preparados.
- `git diff --check`: correcto.

Los cinco derivados SC-IA fueron añadidos de forma explícita a la allowlist. El AVI
original permanece fuera de `public/` y no fue modificado.

## Validación multimedia

- MP4 H.264: 1920 × 1020, 15 FPS, 27,4 segundos, `yuv420p`, sin audio.
- Peso web: aproximadamente 13,7 MB frente a 144 MB del AVI fuente.
- Póster y tres capturas WebP cargan con dimensiones naturales válidas.
- Chromium alcanzó `readyState = 4` y resolvió el MP4 y el póster en 1440 × 1000 y
  390 × 844.
- `scrollWidth` coincide con `clientWidth` en ambas vistas; no hay desborde horizontal.
- Revisión visual correcta del reproductor, texto editorial y grilla responsive.
- Fecha, hora y etiqueta de equipo quedaron ocultas; las cajas YOLO siguen visibles.

## QA funcional y responsive con Chromium temporal

El navegador y Playwright se instalaron solo bajo `/tmp`; no modificaron
`package.json`, `package-lock.json` ni dependencias del portafolio.

Primera batería: **42/42 comprobaciones correctas**.

- Home con tres proyectos en orden Plataforma SC → SC-IA → Softland ↔ INVAS.
- Categoría de visión artificial presente en el stack.
- Acceso directo a las tres rutas y navegación siguiente circular.
- `title`, description, `og:url` y canonical específicos por ruta.
- Galería de Plataforma SC conserva 13 vistas y cambio claro/oscuro.
- CTA de Plataforma SC hacia SC-IA.
- Narrador con cinco pasos, selección directa, reproducción, pausa y reset.
- Detalle expandible con 19 conexiones derivadas del modelo tipado.
- `prefers-reduced-motion`: autoavance desactivado y selección manual disponible.
- Sin scroll horizontal en 1280×900 y 390×844 para home y las tres rutas.
- Sin errores de consola, excepciones de página ni respuestas HTTP 4xx/5xx.

Segunda batería: **9/9 comprobaciones correctas**.

- Home y SC-IA sin scroll horizontal en 768×1024.
- Home y SC-IA sin scroll horizontal en 844×390.
- Foco de teclado visible y selección de escenas mediante Enter.
- El recorrido finaliza en escena 5, expone estado de repetición y no entra en loop.
- La reproducción se pausa al salir del viewport.

## Revisión visual

Se revisaron capturas de:

- grilla de tres proyectos a 1280 px;
- los tres proyectos apilados a 390 px;
- página SC-IA completa en escritorio y móvil;
- integración compacta SC ↔ SC-IA dentro de Plataforma SC.

Se corrigieron durante QA:

1. un desborde horizontal de 10 px provocado por la retícula decorativa;
2. una grilla de escritorio 2+1 desequilibrada, cambiada a tres columnas;
3. una disposición del carril de planta que podía sugerir cámara → alarma directa.

No se observaron recortes, solapamientos propios del layout, rutas de activos rotas
ni pérdida de legibilidad en las vistas finales. La repetición del navbar en una
captura full-page corresponde al stitching de elementos sticky del navegador de
prueba y no a duplicación en el DOM.

## Pendientes editoriales

- Confirmar si SC-IA debe describirse públicamente como piloto o sistema operacional.
- Confirmar si corresponde declarar liderazgo técnico explícito.
- Ratificar atribución del ahorro anual existente antes de cambiar `ImpactSection`.
