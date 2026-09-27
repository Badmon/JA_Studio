export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Conversemos', description: 'Cuéntame tu idea, problema o necesidad.' },
  {
    number: '02',
    title: 'Definimos la solución',
    description: 'Organizamos funcionalidades, alcance y propuesta.',
  },
  {
    number: '03',
    title: 'Diseño y desarrollo',
    description: 'Construyo la solución y comparto avances.',
  },
  { number: '04', title: 'Revisión', description: 'Validamos juntos los últimos detalles.' },
  { number: '05', title: 'Publicación', description: 'El proyecto queda disponible en línea.' },
  {
    number: '06',
    title: 'Acompañamiento',
    description: 'Puedo ayudarte después del lanzamiento.',
  },
]
