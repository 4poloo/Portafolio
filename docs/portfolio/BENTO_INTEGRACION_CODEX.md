# Especificación Codex — Bento de proyectos + caso de integración AWS

## Objetivo

Reordenar y reforzar la sección **Proyectos principales** para que comunique que los tres proyectos forman parte de un mismo ecosistema tecnológico, con una jerarquía visual clara:

1. **Integración ERP ↔ WMS sobre AWS** como proyecto superior y transversal.
2. **Plataforma SC** y **SC IA** como soluciones operacionales que se relacionan con ese ecosistema.

Además, enriquecer el caso de estudio de integración reutilizando el lenguaje y los flujos desarrollados en la defensa de título (`4poloo/Defensa_tesis_UTEM`), pero redibujados con el estilo visual actual del portafolio.

También se debe hacer explícito que el desarrollo fue realizado principalmente por **Maximiliano Olave**, como desarrollo individual, utilizando IA generativa como herramienta de asistencia controlada y no como sustituto de autoría, criterio técnico ni validación.

---

## 1. Archivos actuales relevantes en Portafolio

Revisar y modificar principalmente:

- `src/components/sections/ProjectsSection.tsx`
- `src/components/ui/ProjectCard.tsx`
- `src/pages/WmsErpProjectPage.tsx`
- `src/components/ui/ArchitectureDiagram.tsx`
- `src/index.css`
- `src/components/kokonutui/SpotlightCard.tsx`

Crear preferentemente:

- `src/components/integration/IntegrationFlowDiagram.tsx`
- opcional: `src/components/integration/IntegrationFlowNode.tsx`
- opcional: `src/data/integrationArchitecture.ts`

No romper:

- rutas existentes de React Router;
- spotlight/hover actual de las cards;
- links a casos de estudio;
- demo de Plataforma SC;
- estilos globales, tipografías y tokens existentes.

El portafolio ya incluye `framer-motion`, por lo que no es necesario añadir una nueva dependencia de animación.

---

# 2. Rediseño de “Proyectos principales” como Bento Grid

## Jerarquía visual objetivo

En desktop usar una composición tipo pirámide / Bento:

```text
┌──────────────────────────────────────────────────────────────┐
│              INTEGRACIÓN ERP ↔ WMS EN AWS                  │
│  Event-driven · serverless · trazabilidad · tiempo real     │
│  Lambda · S3 · SNS · API Gateway · CloudWatch · DynamoDB    │
└──────────────────────────────────────────────────────────────┘

┌─────────────────────────────┐  ┌─────────────────────────────┐
│       PLATAFORMA SC         │  │            SC IA            │
│ Producto operacional        │  │ IA / Computer Vision        │
│ React + FastAPI             │  │ YOLO + OpenCV + FastAPI     │
└─────────────────────────────┘  └─────────────────────────────┘
```

### Orden

Cambiar el orden actual de `ProjectsSection.tsx`:

- `01` → **Integración ERP ↔ WMS en AWS**
- `02` → **Plataforma SC**
- `03` → **SC IA**

La jerarquía no pretende decir que Plataforma SC o SC IA tengan menor calidad; comunica que la integración AWS funciona como una capa transversal/fundacional y que las otras dos representan producto operacional e innovación aplicada.

---

## Implementación sugerida

Reemplazar `.projects-grid` por una estructura tipo:

```tsx
<Reveal className="projects-bento">
  <ProjectCard className="project-card--wide" ... />
  <ProjectCard className="project-card--half" ... />
  <ProjectCard className="project-card--half" ... />
</Reveal>
```

Modificar `ProjectCard` para aceptar de forma opcional:

```ts
className?: string;
layout?: "wide" | "standard";
related?: boolean;
```

No duplicar componentes solo por tamaño si el mismo `ProjectCard` puede soportarlo limpiamente.

### CSS objetivo

Desktop:

```css
.projects-bento {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.project-card--wide {
  grid-column: 1 / -1;
}
```

Tablet:

- mantener la card AWS a ancho completo;
- Plataforma SC y SC IA pueden mantenerse en dos columnas mientras exista espacio real;
- evitar comprimir demasiado las visuales internas.

Mobile:

```text
Integración AWS
↓
Plataforma SC
↓
SC IA
```

Todas las cards deben usar `grid-column: 1 / -1` bajo el breakpoint móvil actual.

---

# 3. Copy recomendado para el Bento

## Card 01 — Integración ERP ↔ WMS en AWS

### Título

`Integración ERP ↔ WMS en AWS`

Evitar usar solamente “AWS” como nombre del proyecto; AWS es la plataforma tecnológica, no el problema de negocio resuelto.

### Categoría

`AWS · EVENT-DRIVEN · ERP/WMS`

### Descripción

> Capa de integración bidireccional entre Softland ERP e INVAS WMS, diseñada para transformar documentos, aplicar reglas de negocio, automatizar movimientos y entregar trazabilidad operacional en tiempo real.

### Resultado destacado

> De 2 h–1 día de desfase operacional a procesamiento en tiempo real, con transacciones técnicas procesadas en milisegundos.

### Tags

Usar preferentemente:

- `AWS Lambda`
- `S3`
- `SNS`
- `API Gateway`
- `CloudWatch`
- `DynamoDB`
- `Python`

DynamoDB debe mostrarse porque forma parte del diseño de persistencia/correlación de confirmaciones E2E. En el caso de estudio mantener explícito el estado real cuando corresponda: **en validación/evolución** si todavía no existe cierre completo en producción.

---

## Card 02 — Plataforma SC

Mantener el foco actual:

- producto Full Stack;
- digitalización operacional;
- planificación, producción, bodega y soporte;
- React + TypeScript + FastAPI + MongoDB + Docker;
- integración con servicios internos/AWS/INVAS.

Copy sugerido corto:

> Plataforma operacional modular que centraliza planificación, producción, bodega y procesos de apoyo, conectando datos, APIs y servicios internos en una única experiencia de operación.

---

## Card 03 — SC IA

Mantener el foco actual:

- Computer Vision;
- cámaras IP;
- YOLO / OpenCV;
- inferencia y análisis en vivo;
- persistencia y análisis posterior en Plataforma SC.

Copy sugerido corto:

> Sistema de visión artificial para inspección de productos en vivo, detección de anomalías y posterior análisis operacional integrado con Plataforma SC.

---

# 4. Relación visual entre las tres cards

La intención del Bento es mostrar un ecosistema, no tres proyectos inconexos.

Agregar una interacción sutil:

- cuando el usuario hace hover/focus sobre la card de integración AWS, las cards inferiores pueden recibir una clase `related` con un borde/glow muy leve;
- no usar líneas rígidas cruzando el grid;
- no convertir la sección en un diagrama arquitectónico completo;
- la relación debe percibirse, no competir con el contenido.

Se puede reutilizar el estado `activeProject` ya existente en `ProjectsSection.tsx`.

Ejemplo conceptual:

```ts
const integrationActive = activeProject === "softland-invas";
```

Y pasar `related={integrationActive}` a Plataforma SC y SC IA.

La transición debe respetar `prefers-reduced-motion`.

---

# 5. Texto de autoría y uso de IA

## Objetivo

Dejar claro que no existió un equipo adicional de desarrolladores detrás de estos proyectos y que Maximiliano fue el responsable principal del desarrollo.

No presentar a la IA como “miembro del equipo”, “coautor” o agente autónomo.

La formulación debe transmitir capacidad de desarrollo individual y, al mismo tiempo, competencia en uso responsable de herramientas de IA.

## Copy recomendado global

Agregar debajo de la descripción de `Proyectos principales`, como texto secundario discreto:

> Diseño y desarrollo principal realizados de forma individual. IA generativa utilizada como herramienta de asistencia controlada para investigación, prototipado, revisión y documentación.

Alternativa más compacta:

> Desarrollo principal individual · IA generativa como asistencia controlada al proceso de ingeniería.

## Copy recomendado dentro de los casos de estudio

Crear una pequeña sección o bloque reutilizable “AUTORÍA Y FORMA DE TRABAJO”.

Texto:

> **Diseño y desarrollo principal:** Maximiliano Olave. El proyecto fue desarrollado sin un equipo adicional de desarrolladores. Se utilizaron herramientas de IA generativa como asistencia controlada para acelerar investigación, ideación, revisión de código, prototipado y documentación. Las decisiones de arquitectura, implementación, integración, validación, pruebas y operación permanecen bajo responsabilidad del autor.

Evitar frases como:

- “desarrollado por IA”;
- “creado junto a ChatGPT”;
- “IA escribió el sistema”;
- “equipo humano + IA”.

La intención es comunicar **AI-assisted engineering**, no delegación de ingeniería.

---

# 6. Caso de integración — reutilizar el material de Defensa_tesis_UTEM

Repositorio fuente:

`4poloo/Defensa_tesis_UTEM`

La implementación del portafolio no debe insertar un iframe de la defensa ni copiar su estética completa. Debe **reutilizar la estructura lógica de los flujos y reconstruirla con los tokens visuales del portafolio**.

## Archivos fuente prioritarios

### Definición Softland → INVAS

`content/diagrams/aws-ida.architecture.json`

Flujo de referencia:

```text
Softland ERP
   ↓ XML
S3
   ↓ objeto / evento
Lambda S3
   ↓ validación + XML → JSON
INVAS WMS
```

### Definición INVAS → Softland

`content/diagrams/aws-vuelta.architecture.json`

Flujo de referencia:

```text
INVAS WMS
   ↓ JSON
API Gateway
   ↓ HTTP
Lambda App
   ↓ validación
SNS
   ↓ distribución
Handler
   ↓ JSON → XML
S3 / archivos
   ↓ intercambio
Softland ERP
```

### Implementación visual original

`src/sections/TechnicalSections.tsx`

Reutilizar como referencia específicamente:

- arrays `forward` y `backward`;
- componente/sección `AwsArchitecture`;
- controles transversales `DynamoDB` y `CloudWatch`;
- lógica de recorrido visual por pasos;
- captions que explican el paso activo.

### Componente de flujo reutilizable como referencia

`src/components/FlowLine.tsx`

No copiar ciegamente los estilos; reutilizar la idea:

- nodo;
- conector;
- reached/current;
- Motion para revelar el trayecto;
- `useReducedMotion()`.

---

# 7. Nuevo componente recomendado: IntegrationFlowDiagram

Crear:

`src/components/integration/IntegrationFlowDiagram.tsx`

Debe aceptar por lo menos:

```ts
interface IntegrationFlowDiagramProps {
  variant?: "compact" | "full";
  animated?: boolean;
}
```

## Variant `compact`

Uso: card superior del Bento.

Objetivo:

- mostrar visualmente que existe ida y vuelta;
- no saturar la card;
- priorizar legibilidad a primera vista.

Puede mostrar dos lanes pequeñas:

```text
SOFTLAND → S3 → LAMBDA → INVAS
INVAS → API → LAMBDA → SNS → HANDLER → S3 → SOFTLAND
```

En tamaños pequeños se permite simplificar el retorno visual sin eliminar conceptualmente la bidireccionalidad.

## Variant `full`

Uso: `WmsErpProjectPage.tsx`.

Debe reproducir la lógica visual de la pantalla de la defensa mostrada por el usuario:

```text
01 / SOFTLAND → INVAS
[Softland] → [S3] → [Lambda S3] → [INVAS]

02 / INVAS → SOFTLAND
[Softland] ← [S3] ← [Handler] ← [SNS] ← [Lambda App] ← [API Gateway] ← [INVAS]

[DynamoDB · Idempotencia / correlación E2E]
[CloudWatch · Logs, métricas y trazabilidad]
```

Importante: el segundo lane puede renderizarse visualmente de izquierda a derecha como `INVAS → ... → Softland` si mejora accesibilidad y responsive. No es obligatorio conservar las flechas hacia la izquierda de la defensa; sí es obligatorio conservar el significado.

---

# 8. Estilo visual del diagrama en el Portafolio

No usar la paleta verde de la defensa. Adaptar a los tokens ya existentes:

- fondo: `var(--surface)` / tonos actuales;
- líneas: `var(--line)`;
- texto: colores actuales del portafolio;
- acento primario: `var(--accent)`;
- acento AWS/integración: puede conservar el azul actual aproximado `#7ca9c3` de la card existente;
- estados secundarios con opacidad, no colores saturados.

Cada nodo debe verse como parte del mismo sistema de cards del portafolio.

### Nodo sugerido

```text
┌──────────────────────┐
│ icono                │
│ Lambda App           │
│ Validación           │
└──────────────────────┘
```

Usar `react-icons`, ya instalado en el proyecto. No agregar `lucide-react` solo para replicar la defensa.

Iconografía posible:

- Softland → `FiDatabase`
- INVAS → `FiLayers` / icono de warehouse equivalente disponible
- S3 / API → `FiCloud`
- Lambda / Handler → `FiCpu`, `FiCode`, `FiServer` o equivalente disponible
- CloudWatch → `FiActivity`
- DynamoDB → `FiDatabase`

---

# 9. Motion / interacción del flujo

Usar `framer-motion`, ya presente en `package.json`.

Comportamiento recomendado en `variant="full"`:

- entrada inicial de nodos muy sutil;
- líneas se revelan con `scaleX` u opacity;
- en hover/focus de un nodo, resaltar nodo y conexiones inmediatas;
- opcional: auto-trace suave una sola vez al entrar en viewport;
- no crear una animación infinita llamativa;
- respetar `useReducedMotion()`.

El objetivo es explicar arquitectura, no hacer una demo ornamental.

---

# 10. DynamoDB y CloudWatch

Mantenerlos fuera del trayecto principal como **controles transversales**, siguiendo la idea ya implementada en la defensa.

### DynamoDB

Copy recomendado:

`DynamoDB · Idempotencia y correlación E2E`

En el caso de estudio agregar estado cuando corresponda:

`Persistencia de confirmaciones / correlación E2E · en validación/evolución`

No afirmar cierre E2E completo en producción si todavía no está validado.

### CloudWatch

Copy recomendado:

`CloudWatch · Logs, métricas y trazabilidad`

En el detalle se puede enumerar:

- latencia por Lambda;
- volumen por tipo documental;
- éxito/fallo;
- reintentos;
- errores de parseo/validación;
- tiempos de procesamiento;
- señales E2E disponibles.

---

# 11. Cambios específicos en WmsErpProjectPage.tsx

Actualmente el caso ya contiene una sección “Arquitectura event-driven sobre AWS” y otra “Flujos bidireccionales ERP ↔ WMS”.

## Cambio recomendado

### Arquitectura

Mantener el contexto conceptual, pero reemplazar el diagrama genérico `<ArchitectureDiagram />` por:

```tsx
<IntegrationFlowDiagram variant="full" />
```

La explicación lateral puede mantenerse, refinada para no repetir literalmente lo que ya se ve en el diagrama.

### Flujos

No duplicar nuevamente el mismo diagrama debajo.

Reconvertir la actual sección “FLUJOS” en una sección de **documentos y responsabilidades por sentido**:

**Softland → INVAS**

- Órdenes de compra.
- Notas de venta / órdenes de despacho según flujo.
- Transformación XML → JSON.
- Validaciones previas al consumo por INVAS.

**INVAS → Softland**

- ASN / recepción.
- Guías EN/OD según flujo.
- Declaración de producto terminado.
- Consumo de materia prima.
- Devoluciones / eventos aplicables.
- Transformación JSON → XML.

Conservar el bloque AS-IS / TO-BE porque comunica impacto de negocio de forma inmediata.

---

# 12. Responsabilidad técnica y autoría dentro del caso AWS

En la sección actualmente llamada `RESPONSABILIDAD`, reforzar el contenido.

Título sugerido:

`Responsabilidad técnica y autoría E2E`

Copy sugerido:

> Responsable principal del levantamiento AS-IS/TO-BE, diseño de arquitectura AWS, desarrollo de Lambdas y lógica de integración, transformación XML/JSON, reglas de negocio, observabilidad, diagnóstico y evolución de la solución. Desarrollo ejecutado de forma individual, con IA generativa utilizada como herramienta de asistencia controlada durante investigación, revisión, prototipado y documentación.

Agregar, si visualmente cabe, pequeñas etiquetas:

- `DESARROLLO PRINCIPAL INDIVIDUAL`
- `ARQUITECTURA E2E`
- `AI-ASSISTED ENGINEERING`
- `OPERACIÓN PRODUCTIVA`

No presentar `AI-ASSISTED ENGINEERING` como logro aislado; debe estar subordinado a la responsabilidad técnica humana.

---

# 13. Aplicar autoría también a Plataforma SC y SC IA

La aclaración no debe existir solo en el caso AWS porque el usuario quiere dejar claro el modo de trabajo en los desarrollos del portafolio.

Agregar un bloque pequeño equivalente dentro de:

- `src/pages/PlataformaSCProjectPage.tsx`
- `src/pages/ScIaProjectPage.tsx`

No repetir un párrafo largo idéntico tres veces si puede existir un componente reutilizable, por ejemplo:

`src/components/ui/ProjectAuthorship.tsx`

API sugerida:

```tsx
<ProjectAuthorship
  role="Diseño y desarrollo principal"
  mode="Desarrollo individual"
  aiAssisted
/>
```

Copy base reutilizable:

> Desarrollo principal realizado por Maximiliano Olave, sin equipo adicional de desarrolladores. IA generativa utilizada como asistencia controlada para investigación, prototipado, revisión y documentación; arquitectura, implementación, validación y operación bajo responsabilidad del autor.

---

# 14. Relación narrativa de los tres proyectos

Cambiar el texto descriptivo actual de la sección:

Actual:

> Tres casos técnicamente distintos: producto Full Stack, visión artificial aplicada e integración empresarial sobre AWS.

Propuesta:

> Un ecosistema tecnológico aplicado a operación real: integración empresarial sobre AWS, una plataforma Full Stack para operación y una capa de visión artificial conectada al mismo entorno.

Esto explica por qué el Bento tiene una card superior y dos inferiores.

---

# 15. Qué NO hacer

- No afirmar “alta disponibilidad” solo por usar AWS/serverless si no existe diseño HA demostrable y medido.
- No afirmar DynamoDB como cierre E2E productivo si sigue en validación.
- No llamar a la IA “coautora” o “miembro del equipo”.
- No ocultar que el proyecto fue desarrollo individual.
- No copiar la paleta/estética de la defensa directamente.
- No insertar los HTML de Archify en iframe dentro del portafolio.
- No agregar dependencias nuevas si React Icons + Framer Motion cubren la necesidad.
- No convertir el Bento en un diagrama completo; la card superior debe seguir siendo una card de proyecto.
- No sacrificar legibilidad móvil para conservar el flujo horizontal de desktop.

---

# 16. Responsive del diagrama completo

## Desktop

Dos lanes horizontales, similares a la defensa.

## Tablet

Permitir menor separación y nodos más compactos. Si el retorno queda demasiado comprimido, permitir scroll horizontal controlado dentro del diagrama, no en toda la página.

## Mobile

Transformar cada lane a disposición vertical:

```text
SOFTLAND
  ↓
S3
  ↓
LAMBDA
  ↓
INVAS
```

Y:

```text
INVAS
  ↓
API GATEWAY
  ↓
LAMBDA APP
  ↓
SNS
  ↓
HANDLER
  ↓
S3
  ↓
SOFTLAND
```

DynamoDB y CloudWatch debajo como chips/cards transversales.

---

# 17. Accesibilidad

- nodos con texto real, no solo SVG;
- flechas decorativas con `aria-hidden="true"`;
- contenedor con `aria-label` que resuma cada lane;
- hover debe tener equivalente en focus;
- `prefers-reduced-motion` / `useReducedMotion` obligatorio;
- contraste compatible con el tema oscuro actual;
- no depender exclusivamente de color para indicar nodo activo.

---

# 18. Criterios de aceptación

Antes de cerrar la implementación, verificar:

1. Integración AWS aparece como card superior a ancho completo.
2. Plataforma SC y SC IA aparecen debajo y mantienen sus links.
3. Demo de Plataforma SC continúa apuntando a `https://plataforma-ops.vercel.app/app`.
4. Card AWS muestra Lambda, S3, SNS, API Gateway, CloudWatch y DynamoDB.
5. El impacto `2 h–1 día → tiempo real` es visible sin abrir el caso.
6. El caso AWS contiene el nuevo diagrama bidireccional adaptado desde Defensa_tesis_UTEM.
7. El flujo Softland → INVAS coincide con `aws-ida.architecture.json`.
8. El flujo INVAS → Softland coincide con `aws-vuelta.architecture.json`.
9. DynamoDB y CloudWatch aparecen como capacidades transversales.
10. El portafolio deja explícita la autoría principal individual.
11. El uso de IA se describe como asistencia controlada, no como autoría autónoma.
12. Desktop, tablet y mobile mantienen legibilidad.
13. `npm run lint` pasa.
14. `npm run build` pasa.
15. No aparecen errores de TypeScript ni rutas rotas.

---

# 19. Referencias concretas para Codex

## Portafolio

- `src/components/sections/ProjectsSection.tsx` — orden y composición actual de los tres proyectos.
- `src/components/ui/ProjectCard.tsx` — card reutilizable + SpotlightCard.
- `src/components/ui/ArchitectureDiagram.tsx` — diagrama genérico actual que se debe superar para el caso AWS.
- `src/pages/WmsErpProjectPage.tsx` — caso de estudio que recibe el nuevo flujo.
- `src/pages/PlataformaSCProjectPage.tsx` — agregar bloque de autoría.
- `src/pages/ScIaProjectPage.tsx` — agregar bloque de autoría.
- `src/index.css` — `.projects-grid`, `.project-card`, arquitectura y breakpoints actuales.
- `package.json` — Framer Motion ya disponible.

## Defensa_tesis_UTEM

- `content/diagrams/aws-ida.architecture.json` — fuente de verdad del flujo Softland → INVAS.
- `content/diagrams/aws-vuelta.architecture.json` — fuente de verdad del flujo INVAS → Softland.
- `src/sections/TechnicalSections.tsx` — `forward`, `backward`, `AwsArchitecture`, DynamoDB y CloudWatch.
- `src/components/FlowLine.tsx` — patrón de nodo/conector/animación/reduced motion.
- `public/diagrams/aws-ida.html` y `public/diagrams/aws-vuelta.html` — solo referencia visual/Archify; no embeber directamente.

---

# 20. Resultado esperado

La sección de proyectos debe dejar de comunicar “tres tarjetas equivalentes” y pasar a comunicar:

```text
          INTEGRACIÓN / AWS
      arquitectura + interoperabilidad
                 │
        ┌────────┴────────┐
        │                 │
 PLATAFORMA SC           SC IA
 producto operacional    innovación / visión
```

La lectura para un reclutador debe ser inmediata:

- existe profundidad Cloud/Backend real;
- existe capacidad de construir producto Full Stack;
- existe experiencia aplicada con IA/Computer Vision;
- los proyectos se conectan a operación industrial real;
- el autor tuvo responsabilidad técnica principal end-to-end;
- sabe utilizar IA generativa como una herramienta de ingeniería bajo control, revisión y criterio propio.
