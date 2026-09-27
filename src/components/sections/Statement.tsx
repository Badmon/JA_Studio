import { useRef } from 'react'
import type { ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { statementContent } from '../../data/content'

type StatementLineProps = {
  progress: MotionValue<number>
  range: [number, number]
  reduceMotion: boolean
  children: ReactNode
}

/** Cada línea pasa de tenue a opaca conforme avanza el scroll. */
function StatementLine({ progress, range, reduceMotion, children }: StatementLineProps) {
  const opacity = useTransform(progress, range, [0.15, 1])
  const y = useTransform(progress, range, [24, 0])

  return (
    <motion.span className="block" style={reduceMotion ? undefined : { opacity, y }}>
      {children}
    </motion.span>
  )
}

export function Statement() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 80%'] })

  const allLines = [...statementContent.lines, statementContent.highlight]
  // Las líneas terminan de revelarse antes del final del recorrido para que la última se lea completa.
  const step = 0.85 / allLines.length

  return (
    <section aria-label="Mensaje principal" className="section-y overflow-hidden">
      <div ref={ref} className="container-page">
        <p className="text-statement space-y-[0.35em]">
          {allLines.map((line, index) => {
            const isHighlight = index === allLines.length - 1
            return (
              <StatementLine
                key={line}
                progress={scrollYProgress}
                range={[index * step, (index + 1) * step]}
                reduceMotion={reduceMotion}
              >
                {isHighlight ? (
                  <span className="box-decoration-clone rounded-[0.2em] bg-accent px-[0.15em] leading-[1.18] text-accent-ink">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </StatementLine>
            )
          })}
        </p>
      </div>
    </section>
  )
}
