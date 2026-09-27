# JA Studio — Portafolio de Juan Antonio León

Landing page / portafolio comercial construido con **React + TypeScript + Vite**, **Tailwind CSS 4**, **Framer Motion** y **Lucide Icons**. Listo para desplegar en **Netlify** desde GitHub.

---

## 1. Instalación

Requisitos: **Node.js 20 o superior** (recomendado 22, ver `.nvmrc`).

```bash
npm install
```

## 2. Ejecutar localmente

```bash
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # verifica TypeScript y genera la versión de producción en /dist
npm run preview    # sirve localmente la carpeta /dist
```

---

## Estructura

```
src/
├── data/                   ← TODO el contenido editable
│   ├── siteConfig.ts       ← nombre, título, teléfono, email, WhatsApp, SEO, redes
│   ├── content.ts          ← textos de cada sección (hero, galería, sobre mí, CTA, etc.)
│   ├── projects.ts         ← proyectos
│   ├── benefits.ts         ← "por qué trabajar conmigo"
│   ├── process.ts          ← pasos del proceso
│   ├── testimonials.ts     ← testimonios
│   ├── faq.ts              ← preguntas frecuentes
│   └── socialLinks.ts      ← LinkedIn, GitHub, WhatsApp, email
├── components/
│   ├── layout/             ← Navbar, Footer
│   ├── sections/           ← una sección por archivo
│   ├── ui/                 ← Button, SectionTitle, ProjectCard, Accordion…
│   ├── hero/               ← elementos flotantes del hero
│   └── mockups/            ← mockups ilustrados de los proyectos
├── hooks/                  ← useScrolled, useLockBodyScroll
├── lib/                    ← utilidades (WhatsApp/email, animaciones)
└── index.css               ← colores, tipografía y estilos globales
```

---

## 3. Modificar proyectos

Los proyectos se muestran en la **galería en movimiento** "Proyectos que cobran vida.": capturas en dos filas que se desplazan solas. Los datos están en `src/data/projects.ts`. Para ocultar la galería, cambia `SHOW_PROJECT_GALLERY` a `false` en `src/data/siteConfig.ts` (también se quita el enlace "Proyectos" de la navbar, el footer y el hero).

### Agregar una captura a la galería

1. Guarda la captura en `public/projects/` (por ejemplo `public/projects/mi-tienda.webp`).
   Recomendado: WebP, unos 1600 px de ancho. Para convertir: `cwebp -q 85 captura.png -o public/projects/mi-tienda.webp`.
2. Añade el proyecto en `src/data/projects.ts`:

```ts
{
  id: 4,
  title: 'Tienda Online Aurora',
  category: 'Tienda online',
  image: '/projects/mi-tienda.webp',
  url: 'https://mi-tienda.com',   // opcional: añade "Ver proyecto →" al pasar el cursor
  aspectRatio: '16/10',           // opcional: proporción de la tarjeta (usa la de tu captura)
}
```

- Cada tarjeta tiene una altura fija y su ancho sale de `aspectRatio`, así las capturas **no se deforman**. Si la proporción de la tarjeta no coincide con la de la imagen, se recorta con `object-fit: cover` mostrando la parte superior de la página.
- Usar proporciones distintas (`'16/10'`, `'4/3'`, `'3/2'`…) da a la galería un ritmo más editorial.
- Mientras un proyecto no tenga `image`, se muestra su mockup ilustrado (`mockup`). Los tres proyectos incluidos son **ejemplos ilustrativos**: reemplázalos por tus capturas reales.
- Si hay pocos proyectos, la galería los repite para llenar el ancho de la pantalla.

**Vista previa con capturas de ejemplo (solo local):** si pones imágenes `.webp` en `src/assets/preview-projects/`, la galería las muestra en `npm run dev` en lugar de los proyectos de `projects.ts`. Esa carpeta está ignorada por Git y el build de producción no la incluye, así que sirve para probar el diseño sin publicar nada. Cuando tengas tus capturas reales, bórrala.

**Velocidad:** en `src/components/sections/ProjectMarquee.tsx`, la constante `GALLERY_SPEED` define los segundos que tarda cada fila en dar una vuelta completa (más alto = más lento). La galería se detiene suavemente al pasar el cursor por encima y, si el visitante tiene activado "reducir movimiento", se muestra estática con scroll horizontal manual.

## 4. Modificar textos

- **Textos de las secciones** (hero, galería, sobre mí, CTA final…): `src/data/content.ts`.
- **Beneficios, proceso, FAQ, testimonios:** su archivo correspondiente en `src/data/`.
- **Datos personales** (nombre, título profesional, teléfono, email): objeto `SITE` en `src/data/siteConfig.ts`. Se usan en navbar, "Sobre mí", contacto, footer y metadatos.
- **Foto de perfil:** `public/images/juan-profile.webp` (800×800, WebP). Se usa en "Sobre mí" y en el bloque de contacto mediante el componente `ProfilePhoto`. Para cambiarla, reemplaza el archivo o actualiza `SITE.photo` (ruta, ancho, alto y texto alternativo) en `src/data/siteConfig.ts`. Se recomienda WebP de unos 800–1200 px (por ejemplo: `cwebp -q 86 foto.jpg -o public/images/juan-profile.webp`).

> Los **testimonios** (`src/data/testimonials.ts`) empiezan vacíos: la sección se muestra automáticamente cuando añades testimonios reales (con permiso de tus clientes).
>
> Los tres **proyectos** de `src/data/projects.ts` son ejemplos ilustrativos: reemplázalos por tus trabajos reales.

**SEO:** el título, la descripción y las etiquetas Open Graph de `index.html` se generan al compilar desde `src/data/siteConfig.ts` (no hace falta editar `index.html`). Cuando tengas dominio, escríbelo en `SITE.url` (por ejemplo `'https://juanantonioleon.com'`) y se añadirán la URL canónica y `og:url`. La imagen para redes sociales es `public/og-image.png` (1200×630).

## 5. Cambiar WhatsApp

En `src/data/siteConfig.ts`:

```ts
export const WHATSAPP_NUMBER = '51928357588' // código de país (Perú = 51) + número, solo dígitos
export const WHATSAPP_DEFAULT_MESSAGE = `Hola ${SITE.firstName}, vi tu portafolio y quisiera conversar contigo sobre un proyecto.`
```

El número que se muestra en pantalla es `SITE.phoneDisplay` (`'+51 928 357 588'`).

Todos los botones de WhatsApp del sitio usan la función `getWhatsAppLink()` de `src/lib/contact.ts`, así que basta con cambiarlo en un solo lugar. 

## 6. Cambiar redes sociales

- LinkedIn y GitHub: `SOCIAL_PROFILES` en `src/data/siteConfig.ts`. Mientras estén vacíos no se muestran.
- Email: `SITE.email` en `src/data/siteConfig.ts`.

El botón "Conocer más" de la sección "Sobre mí" apunta a LinkedIn si está configurado; si no, a la sección de contacto.

## 7. Cambiar colores

Todos los colores están definidos como variables CSS al inicio de `src/index.css`:

```css
:root {
  --color-bg: #f4f3ef;          /* fondo principal */
  --color-ink: #111111;         /* texto principal y botones */
  --color-ink-soft: #55534e;    /* texto secundario */
  --color-accent: #c2e66e;      /* color de acento */
  --color-accent-strong: #4a6b12;
  --color-accent-ink: #111111;  /* texto sobre el acento */
}
```

Cambia `--color-accent` para modificar el acento en todo el sitio. Si eliges un acento oscuro, cambia también `--color-accent-ink` a `#ffffff` para mantener el contraste. Recuerda actualizar también el color en `public/favicon.svg`.

La tipografía es **Manrope** (variable, autoalojada con `@fontsource-variable/manrope`, sin peticiones a Google Fonts).

## 8. Desplegar en Netlify

El proyecto incluye `netlify.toml` con la configuración necesaria:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

**Pasos:**

1. Sube el proyecto a un repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "Primera versión del portafolio"
   git branch -M main
   git remote add origin git@github.com:Badmon/JA_Studio.git
   git push -u origin main
   ```
2. En [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project → GitHub**.
3. Elige el repositorio. Netlify leerá `netlify.toml` automáticamente (comando `npm run build`, carpeta `dist`).
4. Pulsa **Deploy**. Cada `git push` a `main` desplegará una nueva versión automáticamente.
5. (Opcional) En **Domain management** conecta tu dominio propio y escríbelo en `SITE.url` (`src/data/siteConfig.ts`).

`netlify.toml` también incluye un *fallback* SPA (todas las rutas sirven `index.html`), por si en el futuro se añade React Router, y cabeceras de caché para los archivos estáticos.

---

## Accesibilidad y rendimiento

- Etiquetas semánticas (`header`, `nav`, `main`, `section`, `footer`), enlace "Saltar al contenido", estados de foco visibles y navegación por teclado (menú, acordeón y carrusel).
- Las animaciones respetan la preferencia del sistema **"reducir movimiento"** (`prefers-reduced-motion`).
- Imágenes con `loading="lazy"` (excepto el hero), mockups hechos con CSS (sin imágenes pesadas) y fuentes autoalojadas.
