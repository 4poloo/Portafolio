# Validación local — 22 de septiembre de 2026

Actualización de contenido y diseño basada en `Maximiliano_Olave_CV_2026_Actualizado.pdf` y `PORTAFOLIO_MAX_2026_GAP_ANALYSIS.md`. Se implementaron las mejoras de contenido P0 y las principales P1, más CI y SEO básico. No se publicó ni desplegó el sitio.

## Comprobaciones

- `npm run build`: correcto, TypeScript y Vite.
- `npm run lint`: correcto, sin errores.
- Chromium mediante Playwright: pruebas en desarrollo y sobre el build local de producción.
- Anchos de 320, 390, 768, 1024 y 1440 px: sin desbordamiento horizontal en inicio.
- Navegación a Plataforma SC y retorno a una sección de inicio: correcta, con foco en el destino.
- Visores de capturas y certificado: apertura, Escape, foco contenido y retorno al control que los abrió.
- Menú móvil: apertura, Escape, selección de sección y cierre.
- Descarga del CV: nombre `Maximiliano_Olave_CV_2026_Actualizado.pdf`.
- `prefers-reduced-motion`: contenido visible, sin inclinación ni transiciones de desplazamiento.
- Axe, reglas WCAG 2 A/AA y 2.1 A/AA: cero incidencias detectadas en inicio y en los dos casos de estudio, a 390 px con movimiento reducido. Comprobación adicional de escritorio en inicio sin incidencias.
- Sin errores JavaScript capturados durante los flujos de Playwright.
- Hash SHA-256 idéntico entre el PDF entregado y las dos copias públicas:

```text
82403ff781a1e7e1725f8c80407f2760ab6009845ec7ff683a6a11adc754eed4
```

## Lighthouse

Medición móvil simulada en `http://127.0.0.1:4173`, después de servir fuentes WOFF2 locales:

| Categoría        | Resultado |
| ---------------- | --------: |
| Rendimiento      |        88 |
| Accesibilidad    |       100 |
| Buenas prácticas |       100 |
| SEO              |       100 |

FCP: 1,5 s. LCP: 3,9 s. TBT: 30 ms. CLS: 0. La medición anterior con fuentes externas obtuvo rendimiento 83, FCP 2,4 s y LCP 4,2 s. Son mediciones de laboratorio local, no evidencia del sitio desplegado ni garantía de conformidad completa con WCAG. Lighthouse todavía identifica oportunidades en JavaScript no utilizado y tamaño de imagen; el frontend se renderiza del lado del cliente.

El chequeo experimental de nombre accesible del logo motivó retirar un `aria-label` redundante. Se verificó nuevamente ese control por separado después del ajuste.

## Recursos y privacidad

El build incluye únicamente los recursos seleccionados en `scripts/prepare-public.mjs`, además de los bundles. Los PNG y diagramas históricos no seleccionados permanecen en el árbol de trabajo original y no se distribuyen en `dist`. Las capturas mostradas se identifican como referencias de 2025. Se usan diagramas conceptuales sin cuentas, direcciones de red ni endpoints.

## Pendientes deliberados

- `4poloo/max-planner` respondió 404 en GitHub sin autenticación; no se infiere si es privado o inexistente. No se agregó un enlace público ni se certificó su estado.
- Se necesitan capturas nuevas y anonimizadas para mostrar el estado visual de los módulos en 2026.
- DynamoDB/PERSIST continúa descrito como validación/evolución, según los documentos aportados.
- No se añadieron inglés, analytics ni un dominio nuevo.
- No se publicaron ni verificaron operaciones reales de los sistemas SurChile.
- La navegación fue probada en Chromium; no se afirma prueba física en iOS/Android ni validación en Safari.
- Los metadatos específicos de proyecto se actualizan en el cliente; prerender por ruta queda como mejora futura.

## Capturas

- [Escritorio](preview-desktop.png)
- [Móvil](preview-mobile.png)

Los chequeos temporales de navegador se ejecutaron desde `/tmp/portfolio-browser`, sin agregar sus dependencias al proyecto. El workflow de CI versionado ejecuta lint y build; la ejecución remota de GitHub Actions queda pendiente de subir los cambios.
