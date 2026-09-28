import { useState } from 'react'
import { SECTION_IDS, SHOW_PROJECT_DETAILS } from '../../data/siteConfig'
import { galleryContent } from '../../data/content'
import { projects } from '../../data/projects'
import { previewProjects } from '../../data/previewProjects'
import type { Project } from '../../data/projects'
import { MarqueeRow } from '../ui/MarqueeRow'
import { SectionTitle } from '../ui/SectionTitle'

/**
 * Velocidad de la galería: segundos por recorrido completo de cada fila.
 * Valores más altos = movimiento más lento (recomendado entre 30 y 50).
 */
const GALLERY_SPEED = {
  firstRow: 45,
  secondRow: 50,
}

/**
 * Cantidad mínima de tarjetas por grupo. Si hay pocos proyectos se repiten
 * para que cada grupo sea más ancho que la pantalla y el bucle nunca muestre huecos.
 */
const MIN_CARDS_PER_ROW = 6

function fillToMinimum(list: readonly Project[], minimum: number): Project[] {
  if (list.length === 0) return []
  const result: Project[] = []
  while (result.length < minimum) result.push(...list)
  return result
}

// En desarrollo, si hay capturas de ejemplo locales, se usan para previsualizar la galería.
const sourceProjects = previewProjects.length > 0 ? previewProjects : projects
const galleryProjects = sourceProjects.filter((project) => project.image || project.mockup)
const firstRow = fillToMinimum(galleryProjects, MIN_CARDS_PER_ROW)
// La segunda fila usa el orden inverso para que ambas filas no se vean iguales.
const secondRow = fillToMinimum([...galleryProjects].reverse(), MIN_CARDS_PER_ROW)

export function ProjectMarquee() {
  const [slowed, setSlowed] = useState(false)

  if (galleryProjects.length === 0) return null

  return (
    <section id={SECTION_IDS.gallery} aria-labelledby="gallery-title" className="bg-surface py-8 lg:py-14">
      <div className="container-page">
        <SectionTitle
          id="gallery-title"
          eyebrow={galleryContent.eyebrow}
          title={galleryContent.title}
          description={galleryContent.subtitle}
        />
      </div>

      <div className="mt-12 px-2 sm:mt-16 sm:px-4">
        <div
          className="overflow-hidden rounded-[2rem] bg-surface-muted py-6 sm:rounded-[3rem] sm:py-10 lg:py-14"
          // Solo se ralentiza al pasar el cursor si se muestran los detalles de cada proyecto.
          {...(SHOW_PROJECT_DETAILS
            ? {
                onMouseEnter: () => setSlowed(true),
                onMouseLeave: () => setSlowed(false),
                onFocus: () => setSlowed(true),
                onBlur: () => setSlowed(false),
              }
            : {})}
        >
          <div className="space-y-3 sm:space-y-5 lg:space-y-6">
            <MarqueeRow
              projects={firstRow}
              direction="left"
              speed={GALLERY_SPEED.firstRow}
              slowed={slowed}
              label="Galería de proyectos, primera fila"
            />
            <MarqueeRow
              projects={secondRow}
              direction="right"
              speed={GALLERY_SPEED.secondRow}
              slowed={slowed}
              label="Galería de proyectos, segunda fila"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
