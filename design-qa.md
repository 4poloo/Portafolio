**Fuente visual**

- Captura móvil adjunta por el usuario en la conversación actual.
- Estado observado: sección `Proyectos principales` con tres tarjetas comprimidas en columnas laterales.
- Densidad: no informada por la captura; no fue posible normalizarla contra una captura renderizada.

**Implementación**

- Ruta local prevista: página principal del portafolio, sección `#projects`.
- Viewport objetivo: 390 x 844 CSS px, densidad 1.
- Estado objetivo: tarjetas de proyecto apiladas a ancho completo y diagramas SC-IA con tipografía legible.
- Captura de implementación: no disponible; la sesión no expone navegador integrado ni Chrome a la herramienta de inspección.

**Findings**

- [P2] Falta evidencia visual renderizada.
  Location: vista móvil de Proyectos y flujos SC-IA.
  Evidence: la referencia del usuario está disponible, pero no fue posible capturar la implementación en el mismo viewport.
  Impact: la compilación confirma validez técnica, pero no permite descartar visualmente desbordes o cortes.
  Fix: abrir la vista local en un navegador automatizado autorizado, capturar 390 x 844 y escritorio, y comparar ambas vistas.

**Superficies revisadas estáticamente**

- Fonts and typography: los títulos de nodo suben de 13 a 15 px; secundarios de 10 a 12 px; variantes compactas y etiquetas suben 2 px.
- Spacing and layout rhythm: el breakpoint móvil fuerza una sola columna y cada tarjeta ocupa el 100% del ancho disponible.
- Colors and visual tokens: sin cambios.
- Image quality and asset fidelity: sin cambios en este incremento.
- Copy and content: sin cambios.

**Comparación enfocada**

- No realizada. Requiere una captura renderizada de la implementación para comparar la grilla y el texto del flujo con la referencia.

**Historial de iteraciones**

- Iteración 1: se corrigió la especificidad que mantenía tres columnas en móvil y se aumentó la tipografía de los diagramas SC-IA. Lint y build pasan; falta evidencia visual post-fix.

**Implementation Checklist**

- [x] Forzar una columna en Proyectos para anchos de hasta 760 px.
- [x] Evitar ancho mínimo accidental en las tarjetas.
- [x] Aumentar dos niveles la tipografía de nodos y conexiones SC-IA.
- [x] Ejecutar lint y build.
- [ ] Capturar y comparar la vista móvil y de escritorio en un navegador.

**Follow-up Polish**

- Ninguno definido hasta completar la inspección visual.

final result: blocked
