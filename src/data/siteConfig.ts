/**
 * Datos personales y de contacto del sitio.
 * Es la única fuente de estos datos: navbar, "Sobre mí", contacto, footer,
 * enlaces de WhatsApp/email y metadatos de index.html (SEO) se generan desde aquí.
 */

export const SITE = {
  name: 'Juan Antonio León',
  /** Nombre corto para saludos (por ejemplo, en el mensaje de WhatsApp). */
  firstName: 'Juan',
  title: 'Soluciones Digitales',
  email: 'jantoleonh@gmail.com',
  /** Teléfono tal como se muestra en pantalla. */
  phoneDisplay: '+51 928 357 588',
  /**
   * URL pública del sitio, sin barra final (por ejemplo 'https://juanantonioleon.com').
   * Cuando la tengas, escríbela aquí: se usará para la URL canónica y las etiquetas Open Graph.
   */
  url: 'https://jleonh.netlify.app',
  description:
    'Diseño y desarrollo páginas web, sistemas y soluciones digitales para negocios y empresas.',
  /** Profesión y ubicación: se usan en los datos estructurados que lee Google. */
  jobTitle: 'Desarrollador de soluciones digitales',
  location: { city: 'Lima', countryCode: 'PE' },
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
export const SITE_TITLE = `JL | ${SITE.title}`

/**
 * Número de WhatsApp en formato internacional: código de país + número, solo dígitos.
 * Perú = 51.
 */
export const WHATSAPP_NUMBER = '51928357588'

export const WHATSAPP_DEFAULT_MESSAGE = `Hola ${SITE.firstName}, vi tu portafolio y quisiera conversar contigo sobre un proyecto.`

/** Perfiles públicos. Déjalos vacíos para ocultarlos. */
export const SOCIAL_PROFILES = {
  linkedin: 'https://www.linkedin.com/in/jleonh/',
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
 * Interacción de la galería: con true, al pasar el cursor (o mantener pulsada una tarjeta)
 * las filas avanzan muy despacio y cada tarjeta muestra su título y categoría.
 * Con false, la galería se mueve siempre y solo muestra las imágenes.
 * Actívala cuando tengas proyectos reales que presentar.
 */
export const SHOW_PROJECT_DETAILS = true

/**
 * Muestra u oculta la franja "Empresas con las que he colaborado" (entre "Sobre mí" y FAQ).
 * Desactivada hasta tener empresas que mostrar: cámbiala a true y reemplaza los elementos
 * de `technologiesContent.items` en src/data/content.ts.
 */
export const SHOW_COMPANIES = false

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
