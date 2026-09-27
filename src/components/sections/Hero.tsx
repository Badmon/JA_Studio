import { motion } from 'framer-motion'
import { PROJECTS_HREF, SECTION_IDS } from '../../data/siteConfig'
import { heroContent } from '../../data/content'
import { EASE_OUT, clipReveal, fadeUp, stagger } from '../../lib/motion'
import { Button } from '../ui/Button'
import { Floating } from '../hero/Floating'
import {
  BrowserCard,
  ChartCard,
  DashboardCard,
  MessageBubble,
  PhoneCard,
  ProjectMiniCard,
} from '../hero/FloatingCards'

function DesktopFloatingElements() {
  return (
    <div className="absolute inset-y-0 left-1/2 hidden w-full max-w-[110rem] -translate-x-1/2 lg:block">
      <Floating className="top-[13%] left-[2%] xl:top-[15%] xl:left-[4%]" delay={0.6} duration={7} rotate={-4}>
        <div className="origin-top-left scale-80 xl:scale-100">
          <BrowserCard />
        </div>
      </Floating>
      <Floating className="top-[13%] right-[3%] xl:right-[5%]" delay={0.75} duration={6} rotate={3}>
        <ChartCard />
      </Floating>
      <Floating className="top-[58%] left-[2%] hidden xl:block" delay={1} duration={8} distance={8}>
        <MessageBubble />
      </Floating>
      <Floating className="top-[52%] right-[3%] xl:top-[41.5%] xl:right-[6%]" delay={1.05} duration={7} rotate={6}>
        <PhoneCard />
      </Floating>
      <Floating className="bottom-[3%] left-[9%] hidden xl:block min-[90rem]:left-[12%]" delay={1.2} duration={6.5} rotate={-3}>
        <ProjectMiniCard />
      </Floating>
      <Floating className="right-[6%] bottom-[4%] hidden xl:block min-[90rem]:right-[8%]" delay={1.3} duration={7.5} rotate={2}>
        <DashboardCard />
      </Floating>
    </div>
  )
}

/** Composición reducida para móvil y tablet, debajo de los botones. */
function CompactFloatingElements() {
  return (
    <div className="relative mx-auto mt-14 h-56 w-full max-w-sm sm:max-w-md lg:hidden">
      <Floating className="top-6 left-0" delay={0.8} duration={7} rotate={-4}>
        <ChartCard />
      </Floating>
      <Floating className="top-0 right-2 sm:right-6" delay={0.95} duration={6} rotate={6}>
        <PhoneCard />
      </Floating>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id={SECTION_IDS.top}
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-10 sm:pb-8 lg:pt-38 lg:pb-20"
    >
      <DesktopFloatingElements />

      <motion.div
        className="container-page relative z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={stagger(0.12, 0.1)}
      >
        <motion.h1 id="hero-title" className="text-hero mx-auto" variants={stagger(0.1)}>
          {heroContent.titleLines.map((line) => (
            <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
              <motion.span className="block" variants={clipReveal}>
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p variants={fadeUp} className="text-lead mx-auto mt-8 max-w-2xl text-ink-soft">
          {heroContent.subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <Button href={`#${SECTION_IDS.contact}`} size="lg" withArrow>
            {heroContent.primaryCta}
          </Button>
          <Button
            href={PROJECTS_HREF ?? `#${SECTION_IDS.about}`}
            size="lg"
            variant="secondary"
          >
            {heroContent.secondaryCta}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE_OUT }}
        >
          <CompactFloatingElements />
        </motion.div>
      </motion.div>
    </section>
  )
}
