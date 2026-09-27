import { SECTION_IDS } from '../../data/siteConfig'
import { aboutContent } from '../../data/content'
import { getSocialLink } from '../../data/socialLinks'
import { scaleIn } from '../../lib/motion'
import { Button } from '../ui/Button'
import { ProfilePhoto } from '../ui/ProfilePhoto'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

export function About() {
  const moreLink = getSocialLink('linkedin')?.href ?? `#${SECTION_IDS.contact}`

  return (
    <section id={SECTION_IDS.about} aria-labelledby="about-title" className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal variants={scaleIn} className="lg:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#ebe9e4] sm:rounded-[2.5rem]">
              <ProfilePhoto className="object-[50%_35%]" />
            </div>
            <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-float sm:right-6 sm:bottom-6">
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              Disponible para proyectos
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionTitle id="about-title" eyebrow={aboutContent.eyebrow} title={aboutContent.title} />
          <Reveal delay={0.15} className="mt-8 max-w-2xl space-y-5">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lead text-ink-soft">
                {paragraph}
              </p>
            ))}
            <div className="pt-5">
              <Button href={moreLink} variant="primary" withArrow>
                {aboutContent.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
