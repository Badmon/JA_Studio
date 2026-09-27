import { motion } from 'framer-motion'
import { benefitsContent } from '../../data/content'
import { benefits } from '../../data/benefits'
import { fadeUp, stagger } from '../../lib/motion'
import { SectionTitle } from '../ui/SectionTitle'

export function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="section-y">
      <div className="container-page">
        <SectionTitle id="benefits-title" eyebrow={benefitsContent.eyebrow} title={benefitsContent.title} />
        <motion.ul
          className="mt-14 grid gap-x-10 gap-y-5 sm:mt-20 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.li key={benefit.id} variants={fadeUp} className="border-t-2 border-ink pt-4">
                <div className="flex items-center gap-3 sm:block">
                  <Icon className="size-7 shrink-0" aria-hidden="true" strokeWidth={1.75} />
                  <h3 className="text-2xl leading-tight font-extrabold tracking-tight sm:mt-5">{benefit.title}</h3>
                </div>
                <p className="mt-1.5 text-ink-soft">{benefit.description}</p>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
