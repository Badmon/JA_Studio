/**
 * Textos de las secciones del sitio.
 * Edita este archivo para cambiar títulos, párrafos y botones sin tocar los componentes.
 */
import { PROJECTS_HREF } from './siteConfig'

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
    'Creo experiencias digitales que ayudan a negocios y empresas a comunicar mejor, organizarse y crecer.',
    'Me gusta trabajar desde la idea inicial, entender qué se quiere lograr y convertirlo en una solución sencilla, profesional y fácil de utilizar.',
  ],
  cta: 'Conocer más',
}

export const technologiesContent = {
  title: 'Empresas con las que he colaborado',
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
  subtitle: 'Una muestra del tipo de páginas, sistemas y experiencias digitales que puedo desarrollar para negocios y proyectos.',
}
