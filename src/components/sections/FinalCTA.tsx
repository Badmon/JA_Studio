import { motion } from 'framer-motion'
import { SECTION_IDS, SITE } from '../../data/siteConfig'
import { finalCtaContent } from '../../data/content'
import { Mail, Phone } from 'lucide-react'
import { getEmailLink, getPhoneLink, getWhatsAppLink } from '../../lib/contact'
import { clipReveal, fadeUp, inViewOnce, stagger } from '../../lib/motion'
import { Button } from '../ui/Button'

const contactLink =
  'inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white hover:underline hover:underline-offset-4'

export function FinalCTA() {
  return (
    <section id={SECTION_IDS.contact} aria-labelledby="cta-title" className="px-2 pb-2 sm:px-4 sm:pb-4">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] bg-ink text-white sm:rounded-[3rem]"
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        variants={stagger(0.12)}
      >
        <span
          aria-hidden="true"
          className="absolute -top-32 -right-32 size-[26rem] rounded-full border-[3rem] border-accent/15 sm:size-[36rem] sm:border-[4rem]"
        />

        <div className="container-page relative pt-24 pb-16 text-center sm:pt-32 sm:pb-20 lg:pt-44 lg:pb-28">
          <motion.p variants={fadeUp} className="eyebrow mb-8 text-white/70">
            Contacto
          </motion.p>
          <h2 id="cta-title" className="text-hero">
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span className="block" variants={clipReveal}>
                {finalCtaContent.title}
              </motion.span>
            </span>
          </h2>
          <motion.p variants={fadeUp} className="text-lead mx-auto mt-8 max-w-2xl text-white/75">
            {finalCtaContent.text}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Button
              href={getEmailLink(finalCtaContent.emailSubject)}
              variant="light"
              size="lg"
              withArrow
            >
              {finalCtaContent.primaryCta}
            </Button>
            <Button href={getWhatsAppLink()} variant="ghost-light" size="lg">
              {finalCtaContent.secondaryCta}
            </Button>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-8 text-sm text-white/65">
            <span aria-hidden="true" className="mr-2 inline-block size-1.5 -translate-y-0.5 rounded-full bg-accent" />
            {finalCtaContent.note}
          </motion.p>

          <motion.address
            variants={fadeUp}
            className="mx-auto mt-14 max-w-3xl border-t border-white/15 pt-8 not-italic"
          >
            <ul className="mx-auto flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <li>
                <a href={getPhoneLink()} className={contactLink}>
                  <Phone className="size-5 text-accent" aria-hidden="true" />
                  <span className="sr-only">Teléfono: </span>
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={getEmailLink()} className={contactLink}>
                  <Mail className="size-5 text-accent" aria-hidden="true" />
                  <span className="sr-only">Correo: </span>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </motion.address>
        </div>
      </motion.div>
    </section>
  )
}

