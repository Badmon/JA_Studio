import type { LucideIcon } from 'lucide-react'
import { Blocks, LayoutDashboard, Megaphone, Monitor, ShoppingBag, Workflow } from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'paginas-web',
    title: 'Páginas web',
    description:
      'Sitios modernos y profesionales que transmiten confianza y ayudan a presentar mejor tu negocio.',
    icon: Monitor,
  },
  {
    id: 'landing-pages',
    title: 'Landing pages',
    description:
      'Páginas enfocadas en campañas, servicios o productos con una comunicación clara y directa.',
    icon: Megaphone,
  },
  {
    id: 'tiendas-online',
    title: 'Tiendas online',
    description:
      'Experiencias digitales diseñadas para mostrar productos y facilitar el proceso de compra.',
    icon: ShoppingBag,
  },
  {
    id: 'sistemas-web',
    title: 'Sistemas web',
    description:
      'Plataformas personalizadas para organizar información, procesos internos, usuarios o operaciones.',
    icon: LayoutDashboard,
  },
  {
    id: 'automatizacion',
    title: 'Automatización',
    description: 'Soluciones que reducen tareas repetitivas y conectan procesos digitales.',
    icon: Workflow,
  },
  {
    id: 'integraciones',
    title: 'Integraciones',
    description: 'Conexión entre diferentes plataformas y herramientas que tu negocio ya utiliza.',
    icon: Blocks,
  },
]
