export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'costo',
    question: '¿Cuánto cuesta desarrollar una página web?',
    answer:
      'Depende de lo que necesites: no cuesta lo mismo una página de presentación que una tienda online o un sistema. Conversamos sobre tu proyecto y te envío una propuesta clara, sin costos ocultos.',
  },
  {
    id: 'tiempo',
    question: '¿Cuánto tiempo demora un proyecto?',
    answer:
      'Una página web suele estar lista en 2 a 4 semanas. Los sistemas o proyectos más grandes se planifican por etapas y te comparto un calendario desde el inicio.',
  },
  {
    id: 'dominio-hosting',
    question: '¿Necesito tener dominio y hosting?',
    answer:
      'No es necesario. Si aún no los tienes, te ayudo a elegirlos y configurarlos. Si ya los tienes, trabajamos con lo que ya existe.',
  },
  {
    id: 'celulares',
    question: '¿La página funcionará en celulares?',
    answer:
      'Sí. Todos los proyectos se diseñan para verse y funcionar bien en celulares, tablets y computadoras.',
  },
  {
    id: 'cambios',
    question: '¿Puedo solicitar cambios durante el desarrollo?',
    answer:
      'Claro. Comparto avances durante el proceso para que puedas revisar y pedir ajustes antes de publicar.',
  },
  {
    id: 'mejorar-existente',
    question: '¿Puedes mejorar una página que ya tengo?',
    answer:
      'Sí. Puedo renovar su diseño, mejorar su velocidad o añadir nuevas funciones. Primero reviso lo que tienes y te propongo la mejor opción.',
  },
  {
    id: 'sistemas',
    question: '¿También desarrollas sistemas personalizados?',
    answer:
      'Sí. Desarrollo sistemas para organizar inventarios, clientes, pedidos, reservas y otros procesos de tu negocio.',
  },
  {
    id: 'despues',
    question: '¿Qué sucede después de publicar la página?',
    answer:
      'Te explico cómo usarla y sigo disponible para resolver dudas. También puedo encargarme del mantenimiento y de futuras mejoras.',
  },
]
