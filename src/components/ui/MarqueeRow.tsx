import { useEffect, useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import type { Project } from '../../data/projects'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { ProjectShot } from './ProjectShot'

export type MarqueeDirection = 'left' | 'right'

export interface MarqueeRowProps {
  projects: readonly Project[]
  /** 'left': de derecha a izquierda. 'right': de izquierda a derecha. */
  direction?: MarqueeDirection
  /** Segundos que tarda un recorrido completo (un grupo de tarjetas). Más alto = más lento. */
  speed?: number
  /** Ralentiza la fila frenando suavemente (por ejemplo, al pasar el cursor por la galería). */
  slowed?: boolean
  /** Nombre accesible de la fila. */
  label: string
}

/** En móvil el movimiento es un poco más lento. */
const MOBILE_SPEED_FACTOR = 0.75

/** Velocidad relativa al pasar el cursor: la galería sigue moviéndose, muy despacio, en vez de detenerse. */
const SLOWED_SPEED_FACTOR = 0.12

/** Evita saltos si la pestaña estuvo en segundo plano. */
const MAX_FRAME_DELTA_MS = 50

const rowGap = 'gap-4 pr-4 sm:gap-6 sm:pr-6 lg:gap-7 lg:pr-7'

/**
 * Fila de tarjetas en desplazamiento horizontal infinito.
 * Renderiza dos copias consecutivas del mismo grupo y mueve el conjunto con translateX;
 * al recorrer exactamente el ancho de un grupo vuelve al inicio, así el salto no se percibe.
 */
export function MarqueeRow({ projects, direction = 'left', speed = 45, slowed = false, label }: MarqueeRowProps) {
  const reduceMotion = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 639px)')
  const containerRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLUListElement>(null)
  const groupWidth = useRef(0)
  const isInView = useInView(containerRef, { margin: '200px 0px' })

  const x = useMotionValue(0)
  // Factor de velocidad: 1 = velocidad normal, SLOWED_SPEED_FACTOR = ralentizada. El resorte suaviza el cambio.
  const velocity = useSpring(1, { stiffness: 60, damping: 22 })

  useEffect(() => {
    velocity.set(slowed ? SLOWED_SPEED_FACTOR : 1)
  }, [slowed, velocity])

  useEffect(() => {
    const group = groupRef.current
    if (!group) return
    const observer = new ResizeObserver(([entry]) => {
      if (entry) groupWidth.current = entry.target.getBoundingClientRect().width
    })
    observer.observe(group)
    return () => observer.disconnect()
  }, [reduceMotion])

  useAnimationFrame((_, delta) => {
    const width = groupWidth.current
    if (reduceMotion || !isInView || width === 0) return

    const factor = velocity.get() * (isMobile ? MOBILE_SPEED_FACTOR : 1)
    if (factor < 0.001) return

    const step = (width / (speed * 1000)) * Math.min(delta, MAX_FRAME_DELTA_MS) * factor
    let next = x.get() + (direction === 'left' ? -step : step)
    // Mantiene x dentro de (-width, 0]: al completar un grupo se reinicia sin salto visible.
    if (next <= -width) next += width
    if (next > 0) next -= width
    x.set(next)
  })

  // Con "reducir movimiento" activado: sin animación, una sola copia y scroll horizontal manual.
  if (reduceMotion) {
    return (
      <div className="overflow-x-auto overscroll-x-contain px-4 pb-2 sm:px-6" aria-label={label} role="region" tabIndex={0}>
        <ul className={`flex w-max ${rowGap}`}>
          {projects.map((project, index) => (
            <li key={`${index}-${project.id}`} className="shrink-0">
              <ProjectShot project={project} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="overflow-x-clip py-2" aria-label={label} role="region">
      <motion.div className="flex w-max will-change-transform" style={{ x }}>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            ref={copy === 0 ? groupRef : undefined}
            className={`flex shrink-0 ${rowGap}`}
            // La segunda copia solo sirve para el bucle visual: se oculta a lectores y al teclado.
            // No usa `inert`, porque eso también ignora el cursor y sus tarjetas no reaccionarían al hover.
            aria-hidden={copy === 1 || undefined}
          >
            {projects.map((project, index) => (
              <li key={`${copy}-${index}-${project.id}`} className="shrink-0">
                <ProjectShot project={project} duplicate={copy === 1} />
              </li>
            ))}
          </ul>
        ))}
      </motion.div>
    </div>
  )
}
