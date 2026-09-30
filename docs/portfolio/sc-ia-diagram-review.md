# SC-IA — revisión de diseño, motion y accesibilidad

## Before / After / Why

| Before | After | Why |
| --- | --- | --- |
| SC-IA no aparecía en el portafolio | Caso propio con narrativa, arquitectura y navegación cruzada | Separa visión artificial de Plataforma SC y del caso ERP/WMS |
| Arquitectura descrita solo con texto | Un modelo tipado alimenta tres variantes y una tabla textual | La explicación visual y accesible comparten la misma fuente |
| Sin recorrido didáctico | Cinco escenas seleccionables, finitas, pausables y reiniciables | El movimiento explica el flujo en vez de decorar la página |
| Todo el sistema podía terminar en una sola vista densa | Resumen, narrador y detalle desplegable | Mantiene legibilidad inicial y permite profundidad bajo demanda |
| No existía una política de movimiento específica | Autoavance solo por acción del usuario, pausa fuera de vista y `reduced-motion` | Evita movimiento permanente y consumo innecesario |
| Riesgo de representar una topología falsa | RTSP/inferencia, gateway y entrenamiento se muestran como caminos distintos | Preserva la fidelidad técnica del sistema |
| Video y capturas todavía no disponibles | Demostración real optimizada, acompañada por diagramas conceptuales | Separa evidencia visual del modelo explicativo y evita atribuir métricas globales a una muestra |

## Controles y estados

- Estado inicial estático en Captura.
- Seleccionar un paso, Anterior o Siguiente deja el recorrido pausado.
- Reproducir avanza cada 3,2 segundos y termina en la escena 5 sin loop.
- Pausar conserva la escena; Reiniciar vuelve a Captura/idle.
- Al salir de viewport o esconder la pestaña, la reproducción se pausa.
- Con `prefers-reduced-motion`, el autoavance queda deshabilitado y los pasos
  continúan disponibles de forma inmediata.

## Revisión multimedia

Se incorporó una muestra real de 27,4 segundos junto con póster y tres capturas. El
original permanece fuera del sitio. La versión web oculta fecha, hora y etiqueta de
equipo, elimina metadatos, no incluye audio y conserva las cajas de detección. La
galería usa controles nativos, carga diferida de imágenes, texto alternativo y visor
de teclado. Los comandos y criterios de publicación están en
`docs/portfolio/sc-ia-media.md`.
