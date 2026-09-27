import { introContent } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <SectionTitle
          id="intro-title"
          eyebrow={introContent.eyebrow}
          title={introContent.titleLines}
          className="lg:col-span-8"
          titleClassName="[&>span:last-child]:text-ink-muted"
        />
        <Reveal className="lg:col-span-4" delay={0.2}>
          <p className="text-lead border-l-2 border-accent pl-6 text-ink-soft">{introContent.text}</p>
        </Reveal>
      </div>
    </section>
  )
}
