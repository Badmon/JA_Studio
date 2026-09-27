import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { testimonialsContent } from '../../data/content'
import { testimonials } from '../../data/testimonials'
import { EASE_OUT } from '../../lib/motion'
import { cn } from '../../lib/cn'
import { SectionTitle } from '../ui/SectionTitle'

const navButton =
  'grid size-12 place-items-center rounded-full bg-surface text-ink shadow-soft transition-colors duration-300 hover:bg-ink hover:text-ink-inverse sm:size-14'

export function Testimonials() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0])
  const total = testimonials.length
  const current = testimonials[index]

  if (!current) return null

  const goTo = (next: number, dir: number) => setState([(next + total) % total, dir])
  const previous = () => goTo(index - 1, -1)
  const next = () => goTo(index + 1, 1)

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') previous()
    if (event.key === 'ArrowRight') next()
  }

  return (
    <section aria-labelledby="testimonials-title" className="section-y">
      <div className="container-page">
        <SectionTitle id="testimonials-title" eyebrow={testimonialsContent.eyebrow} title={testimonialsContent.title} />

        <div
          role="region"
          aria-roledescription="carrusel"
          aria-label="Testimonios de clientes"
          onKeyDown={onKeyDown}
          className="mt-14 rounded-[2rem] bg-surface p-7 sm:mt-20 sm:rounded-[2.5rem] sm:p-12 lg:p-20"
        >
          <Quote className="size-10 fill-accent text-accent sm:size-14" aria-hidden="true" />

          <div aria-live="polite" className="relative mt-8 min-h-[22rem] sm:min-h-[20rem] lg:min-h-[18rem]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.figure
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: EASE_OUT }}
                aria-roledescription="diapositiva"
                aria-label={`${index + 1} de ${total}`}
              >
                <blockquote className="text-[clamp(1.6rem,1rem+2.4vw,3.25rem)] leading-[1.15] font-bold tracking-[-0.03em]">
                  “{current.quote}”
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-full bg-accent font-extrabold"
                  >
                    {current.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-extrabold">{current.name}</span>
                    <span className="block text-ink-muted">
                      {[current.role, current.company].filter(Boolean).join(' · ')}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {total > 1 && (
            <div className="mt-10 flex items-center justify-between gap-6 border-t border-line pt-8">
              <div className="flex gap-2">
                {testimonials.map((testimonial, i) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() => goTo(i, i > index ? 1 : -1)}
                    aria-label={`Ver testimonio ${i + 1}`}
                    aria-current={i === index}
                    className="grid h-6 place-items-center"
                  >
                    <span
                      className={cn(
                        'block h-2 rounded-full transition-all duration-300',
                        i === index ? 'w-8 bg-ink' : 'w-2 bg-ink/20 hover:bg-ink/40',
                      )}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={previous} aria-label="Testimonio anterior" className={navButton}>
                  <ArrowLeft className="size-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={next} aria-label="Testimonio siguiente" className={navButton}>
                  <ArrowRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
