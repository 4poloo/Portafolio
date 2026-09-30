# SC-IA — arquitectura pública del diagrama

## Decisión

El sitio utiliza React, SVG, CSS y `framer-motion` ya instalado. Motion explica el
recorrido seleccionado; no define relaciones. Archify no se incorporó porque la
implementación nativa cubre la arquitectura, accesibilidad y responsive sin añadir
otra herramienta o dependencia.

La fuente canónica es `src/data/scIaArchitecture.ts`. Sus IDs tipados alimentan las
variantes `compact`, `overview` y `detailed`, el narrador y la tabla textual. El
compilador impide referenciar nodos o aristas no declarados.

## Límites del modelo público

- La cámara entrega RTSP al worker SC-IA; los frames de inferencia no atraviesan el
  backend principal de Plataforma SC.
- OpenCV captura frames, YOLO ejecuta inferencia y las reglas aplican clases,
  umbrales y una ventana temporal antes de confirmar condiciones.
- La rama de alarma es condicional y depende de la configuración.
- SC-IA conserva su propia persistencia MongoDB.
- El navegador usa el backend FastAPI de Plataforma SC como gateway hacia la API
  SC-IA. El retorno puede incluir resultados o visualización MJPEG.
- El circuito historial → revisión → dataset → entrenamiento → asignación es
  supervisado. No representa aprendizaje autónomo continuo.

## Correspondencia conceptual

| Flujo público | Evidencia técnica indicada por la especificación |
| --- | --- |
| Captura RTSP y OpenCV | `SC-IA/app/services/detection_worker_service.py` |
| API, cámaras y MJPEG | `SC-IA/app/main.py`, `app/routers/cameras.py`, `app/services/stream_service.py` |
| Analítica por OT, línea y período | `SC-IA/app/routers/analytics.py`, `app/services/analytics_service.py` |
| Modelos, feedback y entrenamiento | `SC-IA/app/routers/models.py`, `app/routers/retrain.py` |
| Gateway y stream desde Plataforma SC | `Backend-PlataformaSC/app/api/v1/sciacnn.py`, `app/services/sciacnn.py` |
| IA Lab en el frontend | `Front-PlataformaSC/src/modules/ialab/` |

Las rutas anteriores son referencias editoriales privadas y no se enlazan desde el
sitio. El diagrama no contiene IP, hosts, credenciales, OT, SKU ni rutas RTSP.

## Variantes

- `compact`: integración React → gateway → API, con aclaración de lectura RTSP directa.
- `overview`: cinco etapas operacionales, resultados e integración.
- `detailed`: carriles de planta, servidor SC-IA y Plataforma SC, más detalle
  desplegable del ciclo supervisado.
