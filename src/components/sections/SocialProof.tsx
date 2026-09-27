import { motion } from 'framer-motion'
import { clients } from '../../data/clients'
import { socialProofContent } from '../../data/content'
import { fadeUp, inViewOnce, stagger } from '../../lib/motion'
import { ClientLogo } from '../ui/ClientLogo'

export function SocialProof() {
  return (
    <section aria-label="Clientes" className="border-y border-line py-14 sm:py-16">
      <motion.div
        className="container-page flex flex-col items-center gap-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        variants={stagger(0.08)}
      >
        <motion.p variants={fadeUp} className="max-w-xl text-lg font-semibold tracking-tight text-ink-soft">
          {socialProofContent.text}
        </motion.p>
        {clients.length > 0 && (
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
            {clients.map((client) => (
              <motion.li key={client.id} variants={fadeUp}>
                <ClientLogo client={client} />
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  )
}
