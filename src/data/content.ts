/**
 * Textos de las secciones del sitio.
 * Edita este archivo para cambiar títulos, párrafos y botones sin tocar los componentes.
 */
import { PROJECTS_HREF, SITE } from './siteConfig'

export const heroContent = {
  /** Cada elemento es una línea del titular. */
  titleLines: ['Creo soluciones', 'digitales que hacen', 'crecer tu negocio.'],
  subtitle:
    'Diseño y desarrollo páginas web, sistemas y herramientas digitales pensadas para ayudarte a mostrar mejor tu negocio, organizar procesos y crecer.',
  primaryCta: 'Cuéntame tu proyecto',
  /** Botón secundario: lleva a la galería de proyectos si está visible; si no, a "Sobre mí". */
  secondaryCta: PROJECTS_HREF ? 'Ver proyectos' : 'Conocer más',
}

export const benefitsContent = {
  eyebrow: 'Por qué trabajar conmigo',
  title: 'Tecnología sin complicaciones.',
}

export const processContent = {
  eyebrow: 'Proceso',
  title: 'Así trabajaremos',
}

export const testimonialsContent = {
  eyebrow: 'Testimonios',
  title: 'Lo que dicen sobre mi trabajo',
}

export const aboutContent = {
  eyebrow: 'Sobre mí',
  title: 'Hola, soy Juan',
  paragraphs: [
    'Soy desarrollador y me especializo en convertir ideas y necesidades de negocio en soluciones digitales modernas, funcionales y fáciles de utilizar.',
    'Más allá del código, me interesa entender qué necesita realmente cada proyecto y construir una solución que tenga sentido para las personas que la van a utilizar.',
  ],
  cta: 'Conocer más',
}

export const technologiesContent = {
  title: 'Tecnología detrás de cada proyecto',
  items: [
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Python',
    'PostgreSQL',
    'Docker',
    'Git',
    'APIs',
    'Automatización',
  ],
}

export const faqContent = {
  eyebrow: 'FAQ',
  title: 'Preguntas frecuentes',
  aside: '¿Tienes otra duda? Escríbeme y te respondo sin compromiso.',
}

export const finalCtaContent = {
  title: '¿Tienes una idea en mente?',
  text: 'Cuéntame qué quieres construir y conversemos sobre cómo convertirlo en una solución digital.',
  primaryCta: 'Cuéntame tu proyecto',
  secondaryCta: 'Escríbeme por WhatsApp',
  note: 'No necesitas tener todo definido.',
  emailSubject: 'Quiero contarte sobre mi proyecto',
}

export const galleryContent = {
  eyebrow: 'Proyectos',
  title: 'Proyectos que cobran vida.',
  subtitle: 'Una selección de páginas, sistemas y experiencias digitales que he desarrollado.',
}
