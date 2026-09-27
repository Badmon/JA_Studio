import type { LucideIcon } from 'lucide-react'
import { HeartHandshake, MessagesSquare, Palette, Puzzle } from 'lucide-react'

export type Benefit = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const benefits: Benefit[] = [
  {
    id: 'comunicacion',
    title: 'Comunicación clara',
    description:
      'No necesitas hablar en términos técnicos. Me cuentas el problema y buscamos la mejor solución.',
    icon: MessagesSquare,
  },
  {
    id: 'diseno',
    title: 'Diseño profesional',
    description:
      'Cada proyecto busca transmitir confianza y adaptarse a la identidad de tu negocio.',
    icon: Palette,
  },
  {
    id: 'personalizadas',
    title: 'Soluciones personalizadas',
    description: 'No trabajo con una misma solución para todos.',
    icon: Puzzle,
  },
  {
    id: 'acompanamiento',
    title: 'Acompañamiento',
    description: 'Te acompaño desde la idea inicial hasta la publicación.',
    icon: HeartHandshake,
  },
]
