# Ascentrategic — Guía de estilo

> Negro profundo con acento dorado. Tipografía editorial con serif y sans ligera.

**Tema:** oscuro

Esta guía describe lo que el sitio usa hoy, extraído de `src/styles/*.css` y `src/components/`. Los valores que aparecen dispersos en el código se marcan como tales; el objetivo es consolidarlos en `:root`.

## Tokens — Colores

| Nombre | Valor | Variable | Uso |
|---|---|---|---|
| Negro base | `#0A0A0A` | `--bg` | Fondo de página |
| Negro suave | `#121212` | `--bg-soft` | Hover de tarjetas de servicio |
| Azul grafito | `#181C24` | `--bg-elev` | Modales y superficies elevadas |
| Dorado | `#C6AA4C` | `--gold` | Acento principal: eyebrows, botón primario, bordes activos |
| Dorado suave | `#B09840` | `--gold-soft` | Degradados y acentos secundarios |
| Dorado tenue | `rgba(198,170,76,.55)` | `--gold-dim` | Números de lista, flechas, bordes en hover |
| Resplandor dorado | `rgba(198,170,76,.12)` | `--gold-glow` | Sombra de hover del botón de nav |
| Línea dorada | `rgba(198,170,76,.18)` | `--line` | Bordes de modal y botón ghost |
| Línea suave | `rgba(255,255,255,.06)` | `--line-soft` | Separadores entre filas |
| Texto | `#F5F3EF` | `--text` | Texto principal y títulos |
| Texto secundario | `#A8A090` | `--text-dim` | Descripciones y botones ghost |
| Texto atenuado | `#6E6960` | `--text-mute` | Texto de apoyo y estados deshabilitados |

**Pendiente:** algunos colores aparecen como hex sin variable (`#0F0F11`, `#121214`, `#0A0A0A` en `.final-cta`). Deben reemplazarse por el token correspondiente.

## Tokens — Tipografía

| Familia | Variable | Uso | Pesos |
|---|---|---|---|
| Playfair Display | `--serif` | Títulos de sección y de servicio | 400, 500, 600, 700 |
| Cormorant Garamond | `--accent` | Énfasis en itálica (`em`) y números de lista | 300, 400, 500 (itálica) |
| Inter | `--sans` | Interfaz y texto general: navegación, eyebrows, section-tags, subtítulo del hero, botones, páginas legales | 300, 400, 500, 600 |

Las tres se cargan desde Google Fonts en `index.html`.

**Escala en uso** (valores reales, no normalizados):

- Títulos de sección: `clamp(28px, 3.5vw, 44px)`, peso 300, interlineado 1.2, tracking `-.01em`.
- Títulos de servicio: 22px, peso 400, interlineado 1.3.
- Título de pilar: 18px, peso 400.
- Cuerpo: 14px a 16px, peso 300, interlineado 1.65 a 1.72.
- Eyebrow y section-tag: Inter 14px, peso 400, mayúsculas, tracking `.28em`.
- Botones y botón de nav: Inter 14px, peso 500, sin mayúsculas.
- Enlaces de navegación: Inter 14px, peso 400, sin mayúsculas.
- Hero: titular en Playfair Display 400 con interlineado 1.0; subtítulo en Inter 18px, peso 400, interlineado 1.6.

**Pendiente:** el sitio usa muchos tamaños intermedios (9px, 10px, 11px, 13px, 15px, entre otros). Antes de consolidar, conviene decidir cuáles se conservan.

## Tokens — Espaciado y formas

**Unidad base:** no definida. Hoy los valores son ad hoc.

**Ancho máximo:** `--maxw: 1240px`, con padding lateral de 40px en `.container`.

**Radios en uso:**

- `999px`: botones y botón de nav (pastilla).
- `4px`: modales.
- `50%`: círculos (avatares, puntos de línea de tiempo).
- `2px`: elementos pequeños.

**Movimiento:** `--ease: cubic-bezier(.25,.1,.25,1)` y `--ease-out: cubic-bezier(0,0,.2,1)`. Transiciones típicas de 0.25s a 0.4s.

## Componentes

**Botón primario** (`.btn-primary`): fondo dorado, texto negro, pastilla (999px), padding 12px 16px, Inter 14px peso 500. En hover pasa a fondo transparente con borde y texto dorados.

**Botón ghost** (`.btn-ghost`): fondo transparente, borde `--line`, texto `#f0f0f0`, pastilla (999px), padding 12px 16px. En hover el texto y el borde pasan a dorado.

**Botón de navegación** (`.nav-cta`): dorado, Inter 14px, mayúsculas y minúsculas normales, sin tracking, pastilla, padding 12px 32px. En hover aplica un resplandor dorado.

**Eyebrow** (`.eyebrow`, `.section-tag`): Inter 14px, mayúsculas, tracking `.28em`, dorado, sin rombo. Se usa encima de cada título de sección.

**Enlaces de navegación** (`.nav-links a`): Inter 14px, peso 400, `#f0f0f0`. En hover y en la página activa el texto pasa a dorado, y solo la página activa muestra la línea dorada inferior.

**Hero** (`.hero h1`, `.hero p`): titular en Playfair Display, peso 400, interlineado 1.0. Subtítulo en Inter 18px, peso 400, color `#a1a4a5`, interlineado 1.6.

**Tarjeta de servicio** (`.service`): fondo negro, padding 44px 36px. Al hacer hover cambia a `--bg-soft` y aparece una línea dorada en la parte inferior. La flecha se desplaza en diagonal.

**Pilar** (`.pillar`): fila con número en itálica dorada y título de 18px. Separada por `--line-soft`.

**Modal** (`.modal-box`): fondo `--bg-elev`, borde `--line`, radio 4px, padding 52px 48px, ancho máximo 520px.

**Formulario de contacto**: vive en `ContactModal.tsx`, con grupos `.form-group` dentro del modal.

**Páginas legales** (`aviso-legal.html`, `privacidad.html`, `cumplimiento.html`): son HTML estáticos aparte, con sus propias variables. Usan los mismos colores y familias que el sitio, pero se definen en el propio archivo y no se importan desde CSS.

## Reglas de uso

**Hacer**
- Usar `#0A0A0A` como fondo; el sitio no usa blanco ni gris claro como fondo.
- Usar el dorado solo para acentos: eyebrows, botón primario, líneas de hover y números.
- Separar secciones con bordes sutiles (`--line-soft`) antes que con sombras.
- Mantener títulos en Playfair Display y énfasis en Cormorant itálica.

**No hacer**
- No usar otros colores de acento (azul, verde, violeta). El sitio es monocromático con dorado.
- No usar sombras fuertes para elevación. Solo el resplandor dorado del nav.
- No mezclar pastillas y esquinas rectas en el mismo componente: botones y nav son pastillas; modales son de 4px.
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

- Fondo: `#0A0A0A`. Texto principal: `#F5F3EF`. Texto secundario: `#A8A090`.
- Acento: `#C6AA4C`. Todo lo demás es gris cálido o transparencia dorada.
- Títulos en `Playfair Display`, peso 300, con `em` en `Cormorant Garamond` itálica.
- Cuerpo e interfaz en `Inter`, peso 300 para texto general, interlineado 1.65.
- Botones en pastilla (999px), Inter 14px, sin mayúsculas.
- Un eyebrow dorado en Inter, mayúsculas con tracking `.28em`, encima de cada título de sección.

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

Estos son los mismos tokens que hoy están duplicados en `inicio.css`, `servicios.css` y `quienes-somos.css`.
