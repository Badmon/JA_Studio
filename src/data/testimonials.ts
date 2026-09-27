/**
 * Testimonios de clientes.
 * La sección "Lo que dicen sobre mi trabajo" solo se muestra si hay al menos uno.
 * Añade opiniones reales (con permiso del cliente) siguiendo este formato:
 *
 * {
 *   id: 'cliente-empresa',
 *   quote: 'Texto del testimonio…',
 *   name: 'Nombre del cliente',
 *   company: 'Empresa',
 *   role: 'Cargo (opcional)',
 * },
 */

export type Testimonial = {
  id: string
  quote: string
  name: string
  company: string
  role?: string
}

export const testimonials: Testimonial[] = []
