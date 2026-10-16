# Ascentrategic — Guía de estilo

> Negro profundo con acento dorado. Títulos editoriales en serif, interfaz y texto en sans limpia.

**Tema:** oscuro

Esta guía describe el estado actual del sitio, extraído de `src/styles/*.css`, `src/pages/`, `src/components/` y las páginas legales en `public/`. Los valores que siguen la escala aprobada están marcados como tales; los pendientes están al final.

## Tokens — Colores

| Nombre | Valor | Variable | Uso |
|---|---|---|---|
| Negro base | `#0A0A0A` | `--bg` | Fondo de página |
| Negro suave | `#121212` | `--bg-soft` | Hover de tarjetas de servicio |
| Azul grafito | `#181C24` | `--bg-elev` | Modales y superficies elevadas |
| Dorado | `#C6AA4C` | `--gold` | Acento principal: eyebrows, botón primario, línea de página activa, números |
| Dorado suave | `#B09840` | `--gold-soft` | Degradados y acentos secundarios |
| Dorado tenue | `rgba(198,170,76,.55)` | `--gold-dim` | Bordes en hover y acentos de baja intensidad |
| Resplandor dorado | `rgba(198,170,76,.12)` | `--gold-glow` | Resplandor de hover del botón de nav |
| Línea dorada | `rgba(198,170,76,.18)` | `--line` | Bordes de modal, botón ghost y badges |
| Línea suave | `rgba(255,255,255,.06)` | `--line-soft` | Separadores entre filas |
| Texto | `#F5F3EF` | `--text` | Títulos, etiquetas y texto principal |
| Texto secundario | `#A8A090` | `--text-dim` | Solo en elementos que aún no migran a `#a1a4a5` (ver pendientes) |
| Texto atenuado | `#6E6960` | `--text-mute` | Ícono de cierre del modal |

**Colores de texto de apoyo (fijos en la escala):**

| Hex | Uso |
|---|---|
| `#f0f0f0` | Enlaces de navegación, botón ghost, encabezados del pie |
| `#a1a4a5` | Subtítulos, cuerpo de tarjetas, biografía, datos y etiquetas de cifras, texto de apoyo y pie, valores de tablas legales, etiquetas de formulario |
| `#e07070` | Mensaje de error del formulario (único rojo permitido) |

## Tokens — Tipografía

| Familia | Variable | Uso | Pesos |
|---|---|---|---|
| Playfair Display | `--serif` | Títulos: hero, secciones, tarjetas, pasos, nombres de socios | 400 |
| Cormorant Garamond | `--accent` | Énfasis en itálica (`em`), números de servicio, numerales de pilares y pasos, años de la línea de tiempo | 400 (itálica) |
| Inter | `--sans` | Todo lo demás: navegación, eyebrows, botones, texto de cuerpo, pie, formularios, legales | 400, 500 |

Las tres se cargan desde Google Fonts en `index.html`. Montserrat ya no se usa.

**Escala aplicada**

| Elemento | Familia | Tamaño | Peso | Interlineado |
|---|---|---|---|---|
| Titular del hero (`.hero h1`) | Playfair | `clamp(40px, 5.5vw, 70px)` | 400 | 1.0 |
| Títulos de sección (`.section-title`) | Playfair | `clamp(28px, 3.5vw, 44px)` | 400 | 1.2 |
| Título de cierre (`.final-cta h2`) | Playfair | `clamp(32px, 4vw, 54px)` | 400 | 1.2 |
| Títulos de tarjeta de servicio (`.service h3`) | Playfair | 22px | 400 | 1.2 |
| Títulos de línea de tiempo (`.tl-title`) | Playfair | 22px | 400 | — |
| Títulos de paso y pilar (`.step h4`, `.pillar h4`) | Playfair | 20px | 400 | 1.2 |
| Nombre del socio (`.socio-nombre`) | Playfair | 32px | 400 | 1.2 |
| Cifras (`.metric-value`) | Playfair | `clamp(40px, 4.5vw, 60px)` | 400 | 1.0 |
| Numerales de servicio y pilar, años de línea de tiempo | Cormorant itálica | 22px | 400 | 1.2 |
| Numerales de paso (`.step-dot`) | Cormorant itálica | 22px | — | — |
| Subtítulo del hero (`.hero p`) | Inter | 18px | 400 | 1.6 |
| Subtítulos de sección (`.section-sub`) y cierre (`.final-cta p`) | Inter | 18px | 400 | 1.6 |
| Cuerpo de tarjetas, pasos, pilares, biografía, mensajes | Inter | 16px | 400 | 1.6 |
| Descripciones de línea de tiempo (`.tl-desc`) | Inter | 16px | 400 | 1.6 |
| Párrafos de páginas legales | Inter | 16px | 400 | 1.6 |
| Eyebrow y section-tag | Inter | 14px | 400 | — |
| Enlaces de navegación | Inter | 14px | 400 | 1.6 |
| Botones y botón de nav | Inter | 14px | 500 | — |
| Etiquetas de formulario, cifras y datos | Inter | 14px | 400 | 1.6 |
| Encabezados del pie (`.footer-col h5`) | Inter | 14px | 500 | 1.6 |
| Texto de apoyo, pie, mensajes de estado | Inter | 14px | 400 | 1.6 |
| Badges ("Próximamente", "Patrimonio mín.") | Inter | 12px | 500 | — |

**Reglas de la escala**

- Mayúsculas solo en `.eyebrow`, `.section-tag` y `.modal-eyebrow`. Todas las demás etiquetas van en minúsculas normales, con tamaño mínimo de 12px y sin tracking.
- Interlineado: 1.0 solo en el hero y las cifras; 1.2 en títulos; 1.6 en todo el texto de Inter.
- Pesos: 400 para texto y títulos; 500 para botones, encabezados del pie y badges.

## Tokens — Espaciado y formas

**Unidad base:** no definida. Los valores son ad hoc.

**Ancho máximo:** `--maxw: 1240px`, con padding lateral de 40px en `.container`.

**Radios en uso:**

- `999px`: botones, botón de nav, badges y pastillas de credenciales.
- `4px`: modales.
- `50%`: círculos (puntos de línea de tiempo, círculos de pasos).
- `2px`: elementos pequeños.

**Movimiento:** `--ease: cubic-bezier(.25,.1,.25,1)` y `--ease-out: cubic-bezier(0,0,.2,1)`. Transiciones típicas de 0.25s a 0.4s.

## Componentes

**Botón primario** (`.btn-primary`): fondo dorado, texto negro, pastilla, padding 12px 16px, Inter 14px peso 500, sin mayúsculas. En hover pasa a fondo transparente con borde y texto dorados.

**Botón ghost** (`.btn-ghost`): fondo transparente, borde `--line`, texto `#f0f0f0`, pastilla, padding 12px 16px. En hover el texto y el borde pasan a dorado.

**Botón de navegación** (`.nav-cta`): dorado, Inter 14px peso 500, mayúsculas y minúsculas normales, sin tracking, pastilla, padding 12px 32px. En hover aplica un resplandor dorado.

**Eyebrow** (`.eyebrow`): Inter 14px, mayúsculas, tracking `.28em`, dorado, sin rombo, margen inferior 28px. Va encima del título principal de cada página.

**Section-tag** (`.section-tag`): mismo estilo que el eyebrow, con margen inferior 16px. Va encima de cada título de sección.

**Enlaces de navegación** (`.nav-links a`): Inter 14px, peso 400, `#f0f0f0`. En hover y en la página activa el texto pasa a dorado; solo la página activa muestra la línea dorada inferior.

**Hero** (`.hero`): titular en Playfair 400 con interlineado 1.0; subtítulo en Inter 18px, `#a1a4a5`, interlineado 1.6.

**Subtítulo de sección** (`.section-sub`): Inter 18px, `#a1a4a5`, interlineado 1.6. Es el texto que va debajo de cada título de sección.

**Tarjeta de servicio** (`.service`): fondo negro, padding 44px 36px, cuerpo Inter 16px `#a1a4a5`. Al hacer hover cambia a `--bg-soft` y aparece una línea dorada inferior. El número de la tarjeta (`.num`) es Cormorant itálica dorada, 22px. El título (`h3`) es Playfair 22px.

**Pilar** (`.pillar`): fila con numeral romano (`.pillar-num`, Cormorant itálica dorada 22px) y título `h4` de 20px. El texto es Inter 16px `#a1a4a5`. Separada por `--line-soft`.

**Paso de proceso** (`.step`): círculo con numeral romano (`.step-dot`, Cormorant itálica 22px, gris cálido; dorado cuando el paso está activo), título `h4` de 20px y texto Inter 16px `#a1a4a5`.

**Línea de tiempo** (Quiénes Somos): año en Cormorant itálica dorada 22px (`.tl-year`), título Playfair 22px (`.tl-title`), descripción Inter 16px `#a1a4a5` (`.tl-desc`).

**Alianzas** (Servicios): nombres de socios en Playfair 20px (`.alianza h4`). Badges de cifras y datos en Inter 12px dentro de pastilla con borde `--line`.

**Cifras** (`.metrics`): valor en Playfair dorado (`.metric-value`) y etiqueta en Inter 14px `#a1a4a5` (`.metric-label`), sin mayúsculas.

**Sección de socio** (Inicio): nombre en Playfair 32px (`.socio-nombre`), título en Inter 14px `#a1a4a5` (`.socio-titulo`), biografía en Inter 16px `#a1a4a5`.

**Pie de página** (`Footer.tsx`): columnas "Correo", "Teléfonos" y "Oficina". El encabezado (`h5`) es Inter 14px peso 500 en `#f0f0f0`. Cada etiqueta (`.label`: "General", "Director", "Principal", "Línea Premium", "Horario") es Inter 14px en `#F5F3EF`. El dato (correo, teléfono, horario) es Inter 14px en `#a1a4a5`, con hover dorado si es enlace.

**Modal** (`.modal-box`): fondo `--bg-elev`, borde `--line`, radio 4px, padding 52px 48px, ancho máximo 520px. El eyebrow del modal es Inter 14px mayúsculas dorado; el título es Playfair 28px; las etiquetas de formulario son Inter 14px `#a1a4a5`; los mensajes de error, Inter 14px en `#e07070`.

**Páginas legales** (`aviso-legal.html`, `privacidad.html`, `cumplimiento.html`): HTML estático aparte, con sus propias variables. Párrafos en Inter 16px `#a1a4a5`, interlineado 1.6. Encabezado de sección (`h2`) en mayúsculas dorado de 10px (pendiente, ver abajo). Las tablas de datos siguen el patrón etiqueta/valor del pie: la primera columna en `#F5F3EF` y la segunda en `#a1a4a5`.

## Reglas de uso

**Hacer**
- Usar `#0A0A0A` como fondo; el sitio no usa blanco ni gris claro como fondo.
- Usar el dorado solo para acentos: eyebrows, botón primario, línea de página activa, números y fechas.
- Usar `#a1a4a5` para todo el texto secundario y `#F5F3EF` para títulos y etiquetas.
- Separar secciones con bordes sutiles (`--line-soft`) antes que con sombras.
- Mantener títulos en Playfair 400 y énfasis en Cormorant itálica.

**No hacer**
- No usar otros colores de acento (azul, verde, violeta). El sitio es monocromático con dorado.
- No usar mayúsculas con tracking en etiquetas que no sean eyebrow o section-tag.
- No usar textos de menos de 12px.
- No usar sombras fuertes para elevación. Solo el resplandor dorado del nav.
- No mezclar pastillas y esquinas rectas en el mismo componente: botones, badges y nav son pastillas; modales son de 4px.
- No introducir fondos de color para tarjetas. Las tarjetas se distinguen por borde o hover.

## Superficies y elevación

| Nivel | Nombre | Valor | Uso |
|---|---|---|---|
| 0 | Base | `#0A0A0A` | Fondo de página |
| 1 | Suave | `#121212` | Hover de tarjetas |
| 2 | Elevada | `#181C24` | Modales |
| 3 | Overlay | fondo oscuro con blur | Modal abierto |

La elevación se logra con bordes y cambios de fondo, no con sombras. La única sombra es el resplandor dorado del botón de nav y el brillo de la barra de progreso (`box-shadow`).

## Imágenes

- Logos de aliados en `public/logos/` (SVG, PNG y WebP).
- Foto del socio en `public/erick-profile.webp`.
- Imagen del toro en `public/bull_transparent.png` y su versión WebP en `public/images/`.
- Fondo con ruido sutil: textura SVG `feTurbulence` con opacidad 0.028, sobre todo el sitio.
- Imágenes OG para compartir: `public/og-image.png`, generada con `scripts/generate-og-image.cjs`.

## Guía para agentes

Al generar UI para Ascentrategic:

- Fondo: `#0A0A0A`. Títulos y etiquetas: `#F5F3EF`. Texto secundario: `#a1a4a5`.
- Acento: `#C6AA4C`. Todo lo demás es gris cálido o transparencia dorada.
- Títulos en `Playfair Display`, peso 400, interlineado 1.2. Énfasis con `em` en `Cormorant Garamond` itálica.
- Interfaz y cuerpo en `Inter`: 400 para texto, 500 para botones. Interlineado 1.6.
- Botones en pastilla (999px), Inter 14px, sin mayúsculas.
- Un eyebrow dorado en Inter, mayúsculas con tracking `.28em`, encima de cada título de página.
- Numerales de servicio, pilar y paso, y años de línea de tiempo: Cormorant itálica dorada, 22px.
- Ninguna etiqueta en mayúsculas salvo eyebrow y section-tag. Ningún texto por debajo de 12px.

## Inicio rápido

Las variables viven en `:root`. Para un componente nuevo, usa solo estas:

```css
:root {
  --bg: #0A0A0A;
  --bg-soft: #121212;
  --bg-elev: #181C24;
  --gold: #C6AA4C;
  --gold-soft: #B09840;
  --gold-dim: rgba(198,170,76,.55);
  --gold-glow: rgba(198,170,76,.12);
  --line: rgba(198,170,76,.18);
  --line-soft: rgba(255,255,255,.06);
  --text: #F5F3EF;
  --text-dim: #A8A090;
  --text-mute: #6E6960;
  --serif: "Playfair Display", "Times New Roman", serif;
  --accent: "Cormorant Garamond", "Times New Roman", serif;
  --sans: "Inter", system-ui, -apple-system, sans-serif;
  --maxw: 1240px;
  --ease: cubic-bezier(.25,.1,.25,1);
  --ease-out: cubic-bezier(0,0,.2,1);
}
```

Estos son los mismos tokens que hoy están duplicados en `inicio.css`, `servicios.css` y `quienes-somos.css`. Los colores de texto de apoyo (`#a1a4a5`, `#f0f0f0`) aún no tienen variable propia.

## Pendientes

- **Tokens:** los colores `#a1a4a5` y `#f0f0f0` no tienen variable; los hex sueltos (`#0F0F11`, `#121214`) deben pasar a token.
- **Eyebrow y section-tag:** tienen espaciado distinto (margen 28px frente a 16px; gap 14px frente a 10px). La guía los describe como el mismo estilo; hay que unificar o documentar la diferencia.
- **Encabezados de legales** (`h2` en aviso, privacidad y cumplimiento): siguen en 10px, mayúsculas, dorado. No están en la escala.
- **Hero:** el titular llega como máximo a 70px; la referencia de Resend usa hasta 96px. Es una decisión abierta.
- **Color de títulos:** `#F5F3EF` es un blanco cálido. Resend usa `#ffffff` para títulos. Decisión abierta.
- **Nombre del socio:** `.socio-nombre` está en 32px, por encima de la escala de títulos de tarjeta (22px). Es intencional, pero conviene documentarlo como excepción.
- **Redirección de 404** (`public/404.html`): apunta a `/acscensus_mvp_react/`, una ruta del repo de desarrollo. No es de diseño, pero debe corregirse.
