import { motion } from 'framer-motion'
import { PROPOSALS_URL, SECTION_IDS } from '../../data/siteConfig'
import { proposalsContent } from '../../data/content'
import { proposals } from '../../data/proposals'
import { fadeUp, stagger } from '../../lib/motion'
import { Button } from '../ui/Button'
import { SectionTitle } from '../ui/SectionTitle'

/**
 * Propuestas de páginas web: tarjetas fijas (no se mueven como la galería de proyectos)
 * con la etiqueta "Demo", para dejar claro que son ejemplos y no trabajos entregados.
 */
export function Proposals() {
  if (proposals.length === 0) return null

  return (
    <section id={SECTION_IDS.proposals} aria-labelledby="proposals-title" className="section-y bg-surface">
      <div className="container-page">
        <SectionTitle
          id="proposals-title"
          eyebrow={proposalsContent.eyebrow}
          title={proposalsContent.title}
          description={proposalsContent.subtitle}
        />

        <motion.ul
          className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.1)}
        >
          {proposals.map((proposal) => (
            <motion.li key={proposal.id} variants={fadeUp}>
              {/* Toda la tarjeta es el enlace a la demo. */}
              <a
                href={proposal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-bg shadow-soft ring-1 ring-ink/15transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-float sm:rounded-[2rem]"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-surface-muted">
                  <img
                    src={proposal.image}
                    alt={proposal.imageAlt}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Cinta diagonal en la esquina; el borde redondeado de la tarjeta la recorta. */}
                  <span className="absolute top-[38px] -left-[58px] w-48 -rotate-45 border-y-2 border-accent bg-carbon py-1.5 text-center text-[0.9375rem] font-extrabold tracking-[0.16em] text-accent uppercase shadow-soft">
                    {proposalsContent.badge}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl leading-tight font-extrabold tracking-tight">{proposal.title}</h3>
                  <p className="mt-2 text-ink-soft">{proposal.includes}</p>
                  <span className="sr-only"> Ver la propuesta de {proposal.title.toLowerCase()} (se abre en una pestaña nueva)</span>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-10 flex justify-center sm:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <Button href={PROPOSALS_URL} size="lg" withArrow>
            {proposalsContent.allCta}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
