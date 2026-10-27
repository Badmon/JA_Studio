/**
 * Propuestas de páginas web ("demos"): ejemplos con datos de muestra, NO proyectos entregados.
 *
 * Campos:
 * - `title`: rubro de la propuesta (Restaurante, Ferretería, Perfumería).
 * - `includes`: frase corta de lo que incluye la propuesta.
 * - `image`: captura de la demo. Guárdala en /public/propuestas/ (WebP, 1600×1000).
 * - `href`: enlace a la demo, dentro de PROPOSALS_URL (ver src/data/siteConfig.ts).
 */
import { PROPOSALS_URL } from './siteConfig'

export type Proposal = {
  id: string
  title: string
  includes: string
  image: string
  imageAlt: string
  href: string
}

export const proposals: Proposal[] = [
  {
    id: 'comida',
    title: 'Restaurante',
    includes: 'Carta digital con pedidos en línea, locales y reservas.',
    image: '/propuestas/comida.webp',
    imageAlt: 'Demo de página web para un restaurante de comida a la brasa: carta, categorías y platos destacados',
    href: `${PROPOSALS_URL}/restaurante`,
  },
  {
    id: 'ferreteria',
    title: 'Ferretería',
    includes: 'Catálogo por categorías y cotización por WhatsApp.',
    image: '/propuestas/ferreteria.webp',
    imageAlt: 'Demo de página web para una ferretería: buscador, categorías de productos y botón para cotizar',
    href: `${PROPOSALS_URL}/ferreteria`,
  },
  {
    id: 'perfumeria',
    title: 'Perfumería',
    includes: 'Colección con notas olfativas y pedido directo por WhatsApp.',
    image: '/propuestas/perfumeria.webp',
    imageAlt: 'Demo de página web para una perfumería de autor en tono oscuro y dorado',
    href: `${PROPOSALS_URL}/perfumes`,
  },
]
