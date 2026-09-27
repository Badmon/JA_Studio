/**
 * Datos personales y de contacto del sitio.
 * Es la única fuente de estos datos: navbar, "Sobre mí", contacto, footer,
 * enlaces de WhatsApp/email y metadatos de index.html (SEO) se generan desde aquí.
 */

export const SITE = {
  name: 'Juan Antonio León',
  /** Nombre corto para saludos (por ejemplo, en el mensaje de WhatsApp). */
  firstName: 'Juan',
  title: 'Desarrollador Web & Soluciones Digitales',
  email: 'jantoleonh@gmail.com',
  /** Teléfono tal como se muestra en pantalla. */
  phoneDisplay: '+51 928 357 588',
  /**
   * URL pública del sitio, sin barra final (por ejemplo 'https://juanantonioleon.com').
   * Cuando la tengas, escríbela aquí: se usará para la URL canónica y las etiquetas Open Graph.
   */
  url: '',
  description:
    'Diseño y desarrollo páginas web, sistemas y soluciones digitales para negocios y empresas.',
  year: 2026,
  /**
   * Fotografía de perfil (sección "Sobre mí" y bloque de contacto).
   * El archivo vive en /public/images, así que se publica junto al sitio en Netlify.
   * Para cambiarla, reemplaza el archivo o actualiza la ruta y las dimensiones.
   */
  photo: {
    src: '/images/juan-profile.webp',
    width: 800,
    height: 800,
    alt: 'Fotografía de Juan Antonio León',
  },
} as const

/** Título completo de la página (pestaña del navegador, Google y redes sociales). */
export const SITE_TITLE = `${SITE.name} — ${SITE.title}`

/**
 * Número de WhatsApp en formato internacional: código de país + número, solo dígitos.
 * Perú = 51.
 */
export const WHATSAPP_NUMBER = '51928357588'

export const WHATSAPP_DEFAULT_MESSAGE = `Hola ${SITE.firstName}, vi tu portafolio y quisiera conversar contigo sobre un proyecto.`

/** Perfiles públicos. Déjalos vacíos para ocultarlos. */
export const SOCIAL_PROFILES = {
  linkedin: '',
  github: '',
} as const

/** Identificadores de las secciones a las que apuntan los enlaces internos. */
export const SECTION_IDS = {
  top: 'inicio',
  gallery: 'galeria',
  about: 'sobre-mi',
  faq: 'faq',
  contact: 'contacto',
} as const

/**
 * Muestra u oculta la galería en movimiento "Proyectos que cobran vida".
 */
export const SHOW_PROJECT_GALLERY = true

/**
 * Destino del enlace "Proyectos" (navbar, footer y botón "Ver proyectos" del hero).
 * Si la galería está oculta, el enlace desaparece.
 */
export const PROJECTS_HREF: `#${string}` | null = SHOW_PROJECT_GALLERY ? `#${SECTION_IDS.gallery}` : null

export type NavLink = {
  label: string
  href: `#${string}`
}

export const NAV_LINKS: readonly NavLink[] = [
  ...(PROJECTS_HREF ? [{ label: 'Proyectos', href: PROJECTS_HREF }] : []),
  { label: 'Sobre mí', href: `#${SECTION_IDS.about}` },
  { label: 'FAQ', href: `#${SECTION_IDS.faq}` },
]
