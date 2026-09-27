/**
 * Proyectos del portafolio.
 *
 * - `image`: ruta a una captura real (colócala en /public/projects/ y escribe '/projects/mi-imagen.webp').
 *   Mientras esté vacía, se muestra el mockup ilustrado indicado en `mockup`.
 * - `url`: enlace público del proyecto. Si está vacío, el botón invita a pedir una demostración por WhatsApp.
 * - `featured`: solo los proyectos con `true` aparecen en la sección "Proyectos seleccionados".
 *
 * Los tres proyectos siguientes son ejemplos: reemplázalos por tus trabajos reales.
 */

export type MockupVariant = 'inventory' | 'corporate' | 'management'

export type Project = {
  id: string
  title: string
  category: string
  description: string
  problem: string
  solution: string
  result: string
  image: string
  imageAlt?: string
  mockup: MockupVariant
  url: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'plataforma-inventario',
    title: 'Plataforma de inventario',
    category: 'Sistema web',
    description:
      'Una plataforma diseñada para centralizar equipos, proveedores y movimientos de inventario desde un solo lugar.',
    problem: 'La información se gestionaba en diferentes archivos.',
    solution: 'Se creó una plataforma centralizada que facilita el registro y consulta de información.',
    result: 'Mayor organización y menos trabajo manual.',
    image: '',
    mockup: 'inventory',
    url: '',
    featured: true,
  },
  {
    id: 'pagina-corporativa',
    title: 'Página corporativa',
    category: 'Página web',
    description:
      'Un sitio web profesional para una empresa de servicios que necesitaba transmitir confianza y recibir más consultas.',
    problem: 'La empresa no tenía presencia digital y dependía solo de recomendaciones.',
    solution:
      'Se diseñó un sitio claro y moderno que explica sus servicios y facilita el contacto directo.',
    result: 'Una imagen más profesional y un nuevo canal para recibir clientes.',
    image: '',
    mockup: 'corporate',
    url: '',
    featured: true,
  },
  {
    id: 'sistema-gestion',
    title: 'Sistema de gestión',
    category: 'Herramienta interna',
    description:
      'Una herramienta para organizar clientes, pedidos y tareas del equipo con información siempre actualizada.',
    problem: 'Los pedidos se coordinaban por mensajes y era fácil perder información.',
    solution:
      'Se desarrolló un panel donde todo el equipo registra, asigna y sigue cada pedido en tiempo real.',
    result: 'Menos errores, respuestas más rápidas y un equipo mejor coordinado.',
    image: '',
    mockup: 'management',
    url: '',
    featured: true,
  },
]
