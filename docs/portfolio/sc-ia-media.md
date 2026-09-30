# Medios del caso SC-IA

## Fuente seleccionada

- Original: `/home/moladev/SurChile/IA/Rotativa/250cc/muestra_alta_calidad_sintapa2.avi`
- Duración: 27,4 segundos
- Fuente: Motion JPEG, 2560 × 1440, 15 FPS, sin audio
- El archivo original no se modifica ni se publica.

## Derivados publicados

Los archivos preparados bajo `public/ScIa/` son copias optimizadas para el caso de
estudio. El video web usa H.264, 1920 × 1020, `yuv420p`, inicio rápido y no conserva
audio ni metadatos. La franja superior se recorta y una zona de telemetría se
redacta para ocultar fecha, hora y etiqueta de equipo sin modificar las cajas de
detección.

- `demostracion.mp4`: reproducción web.
- `demostracion-poster.webp`: póster del reproductor.
- `deteccion-con-tapa.webp`: dos detecciones `con_tapa`.
- `deteccion-seguimiento.webp`: seguimiento de un envase.
- `deteccion-sin-tapa.webp`: comparación `con_tapa` / `sin_tapa`.

## Extraer una secuencia de frames

El siguiente comando crea un frame cada dos segundos en JPEG, recorta 60 px de la
parte superior, redacta la esquina de telemetría y limita el ancho a 1600 px:

```bash
mkdir -p frames
ffmpeg -i "/ruta/al/video.avi" \
  -vf "crop=iw:ih-60:0:60,drawbox=x=iw-660:y=0:w=660:h=180:color=black:t=fill,fps=1/2,scale=1600:-2:flags=lanczos" \
  -q:v 2 "frames/frame_%03d.jpg"
```

Para extraer una captura puntual, por ejemplo en el segundo 25:

```bash
ffmpeg -ss 00:00:25 -i "/ruta/al/video.avi" \
  -frames:v 1 \
  -vf "crop=iw:ih-60:0:60,drawbox=x=iw-660:y=0:w=660:h=180:color=black:t=fill,scale=1600:-2:flags=lanczos" \
  -q:v 2 "captura-25s.jpg"
```

Antes de publicar nuevos frames se debe revisar que no expongan fecha, hora,
etiquetas de equipo, identificadores operacionales u otra información interna.
