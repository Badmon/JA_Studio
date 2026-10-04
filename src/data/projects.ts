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
 * Los cinco primeros son proyectos reales; los tres siguientes son ilustraciones de ejemplo que se mantienen
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
    url: 'https://shotel.netlify.app/',
    imageAlt: 'Página web de Hotel Love: piscina rodeada de palmeras y tumbonas bajo sombrillas al atardecer',
    aspectRatio: '16/10',
  },
  {
    id: 6,
    title: 'CRM Clientes',
    category: 'Sistema Web',
    image: '/projects/crm-clientes.webp',
    imageAlt: 'Sistema web CRM Clientes: resumen de la cartera y mapa de Lima con la ubicación de cada cliente',
    aspectRatio: '16/10',
  },
  {
    id: 7,
    title: 'Finanzas',
    category: 'Sistema Web',
    image: '/projects/finanzas.webp',
    imageAlt: 'Sistema web de finanzas personales en tema oscuro: ingresos, gastos por categoría, evolución mensual y presupuesto',
    aspectRatio: '16/10',
  },
  {
    id: 8,
    title: 'Mublier',
    category: 'Página Web',
    image: '/projects/mublier.webp',
    url: 'https://mublier.com/',
    imageAlt: 'Página web de Mublier, marketplace de muebles hechos por fabricantes locales: carpintero trabajando la madera en su taller',
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
