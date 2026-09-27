import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { processContent } from '../../data/content'
import { processSteps } from '../../data/process'
import { fadeUp, stagger } from '../../lib/motion'
import { SectionTitle } from '../ui/SectionTitle'

export function Process() {
  const timelineRef = useRef<HTMLOListElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'end 55%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const scale = reduceMotion ? 1 : progress

  return (
    <section aria-labelledby="process-title" className="section-y bg-surface">
      <div className="container-page">
        <SectionTitle id="process-title" eyebrow={processContent.eyebrow} title={processContent.title} />

        <div className="relative mt-14 sm:mt-20">
          {/* Línea base + línea de progreso: vertical en móvil, horizontal en escritorio */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[0.6875rem] w-0.5 bg-line lg:top-[1.0625rem] lg:right-0 lg:bottom-auto lg:left-0 lg:h-0.5 lg:w-auto"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: scale }}
            className="absolute top-2 bottom-2 left-[0.6875rem] w-0.5 origin-top bg-ink lg:hidden"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleX: scale }}
            className="absolute top-[1.0625rem] right-0 left-0 hidden h-0.5 origin-left bg-ink lg:block"
          />

          <motion.ol
            ref={timelineRef}
            className="relative grid gap-7 pl-12 lg:grid-cols-6 lg:gap-6 lg:pt-14 lg:pl-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger(0.1)}
          >
            {processSteps.map((step) => (
              <motion.li key={step.number} variants={fadeUp} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1 -left-12 grid size-6 place-items-center rounded-full bg-accent ring-4 ring-surface lg:-top-[3.125rem] lg:left-0"
                >
                  <span className="size-2 rounded-full bg-ink" />
                </span>
                <p className="text-sm font-extrabold text-ink-muted">{step.number}</p>
                <h3 className="mt-1 text-xl leading-tight font-extrabold tracking-tight lg:text-[1.35rem]">{step.title}</h3>
                <p className="mt-1 text-[1.0625rem] text-ink-soft lg:text-base">{step.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
