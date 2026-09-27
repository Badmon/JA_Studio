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
      <div className="container-page grid items-center gap-8 lg:grid-cols-12 lg:gap-20">
        <Reveal variants={scaleIn} className="lg:col-span-5">
          {/* Mobile y tablet: altura compacta; la foto se ve completa y centrada, y la misma imagen
              desenfocada rellena los costados. Desktop: proporción 4:5 original, sin fondo desenfocado. */}
          <div className="relative h-88 overflow-hidden rounded-4xl bg-surface-muted sm:h-116 sm:rounded-[2.5rem] lg:aspect-4/5 lg:h-auto">
            <ProfilePhoto
              decorative
              className="absolute inset-0 scale-125 opacity-90 blur-2xl saturate-75 lg:hidden"
            />
            {/* Foto nítida centrada, con sus bordes laterales fundidos con el fondo desenfocado.
                Tablet: cuadrada (su proporción real). Mobile: el contenedor es casi cuadrado, así que
                se usa un encuadre vertical 3:4 para dejar a la vista el desenfoque en los costados. */}
            <div className="relative mx-auto aspect-3/4 h-full max-w-full [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:aspect-square lg:aspect-auto lg:w-full lg:[mask-image:none]">
              <ProfilePhoto className="lg:object-[50%_35%]" />
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
