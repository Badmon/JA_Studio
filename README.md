# Portafolio — Soluciones digitales

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
│   ├── content.ts          ← textos de cada sección (hero, intro, CTA, etc.)
│   ├── projects.ts         ← proyectos
│   ├── services.ts         ← servicios
│   ├── benefits.ts         ← "por qué trabajar conmigo"
│   ├── process.ts          ← pasos del proceso
│   ├── testimonials.ts     ← testimonios
│   ├── faq.ts              ← preguntas frecuentes
│   ├── clients.ts          ← logos de clientes
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

> La sección "Proyectos seleccionados" está **oculta** por ahora. Para mostrarla, cambia `SHOW_PROJECTS` a `true` en `src/data/siteConfig.ts`: vuelven a aparecer la sección, el enlace "Proyectos" de la navbar y el footer, y el botón "Ver proyectos" del hero.

Edita `src/data/projects.ts`. Cada proyecto tiene esta forma:

```ts
{
  id: 'plataforma-inventario',
  title: 'Plataforma de inventario',
  category: 'Sistema web',
  description: '…',
  problem: '…',
  solution: '…',
  result: '…',
  image: '',              // ruta a una captura real, ej. '/projects/inventario.webp'
  mockup: 'inventory',    // mockup ilustrado que se muestra mientras no haya imagen
  url: '',                // enlace público; si está vacío, el botón pide una demo por WhatsApp
  featured: true,         // solo los "featured" aparecen en la página
}
```

**Para usar capturas reales:** guarda la imagen en `public/projects/` (formato `.webp` o `.jpg`, unos 1600 px de ancho, proporción 4:3) y escribe la ruta en `image`, por ejemplo `'/projects/inventario.webp'`.

## 4. Modificar textos

- **Textos de las secciones** (hero, intro, mensaje grande, sobre mí, CTA final…): `src/data/content.ts`.
- **Servicios, beneficios, proceso, FAQ, testimonios:** su archivo correspondiente en `src/data/`.
- **Datos personales** (nombre, título profesional, teléfono, email): objeto `SITE` en `src/data/siteConfig.ts`. Se usan en navbar, "Sobre mí", contacto, footer y metadatos.
- **Foto de perfil:** `public/images/juan-profile.webp` (800×800, WebP). Se usa en "Sobre mí" y en el bloque de contacto mediante el componente `ProfilePhoto`. Para cambiarla, reemplaza el archivo o actualiza `SITE.photo` (ruta, ancho, alto y texto alternativo) en `src/data/siteConfig.ts`. Se recomienda WebP de unos 800–1200 px (por ejemplo: `cwebp -q 86 foto.jpg -o public/images/juan-profile.webp`).
- **Logos de clientes:** `src/data/clients.ts`. Guarda los logos en `public/clients/` y añádelos al arreglo. Mientras esté vacío, la fila de logos no se muestra.

> Los **testimonios** (`src/data/testimonials.ts`) y los **clientes** empiezan vacíos: sus bloques se muestran automáticamente cuando añades datos reales (con permiso de tus clientes).
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
   git remote add origin https://github.com/tu-usuario/portafolio.git
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
