/**
 * Proyectos de la galería en movimiento ("Proyectos que cobran vida").
 *
 * Campos:
 * - `image`: captura del proyecto. Guárdala en /public/projects/ y escribe '/projects/mi-captura.webp'.
 * - `title` y `category`: se muestran al pasar el cursor sobre la tarjeta y describen la imagen.
 * - `aspectRatio` (opcional): proporción de la tarjeta, por ejemplo '16/10', '4/3' o '3/2'.
 *   Usa la de tu captura para no recortarla; si no la indicas se usa 16/10.
 * - `url` (opcional): enlace público; añade "Ver proyecto →" a la tarjeta.
 * - `mockup` (opcional): ilustración CSS que se muestra mientras no haya `image`.
 *
 * Los dos primeros son proyectos reales; los tres siguientes son ilustraciones de ejemplo que se mantienen
 * para que la galería no se vea vacía. Reemplázalos por tus capturas reales cuando tengas más.
 */

export type MockupVariant = 'inventory' | 'corporate' | 'management'

export type Project = {
  id: number
  title: string
  category: string
  image: string
  imageAlt?: string
  url?: string
  aspectRatio?: string
  mockup?: MockupVariant
}

export const projects: Project[] = [
  {
    id: 4,
    title: 'Huella Veterinaria',
    category: 'Página Web',
    image: '/projects/huella-veterinaria.webp',
    url: 'https://huellaveterinaria.netlify.app/',
    imageAlt: 'Página web de Huella, clínica veterinaria en Lima: veterinaria sonriente junto a un golden retriever',
    aspectRatio: '16/10',
  },
  {
    id: 5,
    title: 'Hotel Love',
    category: 'Página Web',
    image: '/projects/hotel-love.webp',
    imageAlt: 'Página web de Hotel Love: piscina rodeada de palmeras y tumbonas bajo sombrillas al atardecer',
    aspectRatio: '16/10',
  },
  {
    id: 1,
    title: 'Plataforma de inventario',
    category: 'Sistema web',
    image: '',
    mockup: 'inventory',
    aspectRatio: '16/10',
  },
  {
    id: 2,
    title: 'Página corporativa',
    category: 'Página web',
    image: '',
    mockup: 'corporate',
    aspectRatio: '4/3',
  },
  {
    id: 3,
    title: 'Sistema de gestión',
    category: 'Herramienta interna',
    image: '',
    mockup: 'management',
    aspectRatio: '3/2',
  },
]
