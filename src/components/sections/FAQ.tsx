import { SECTION_IDS } from '../../data/siteConfig'
import { faqContent } from '../../data/content'
import { faqItems } from '../../data/faq'
import { getWhatsAppLink } from '../../lib/contact'
import { Accordion } from '../ui/Accordion'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

const accordionItems = faqItems.map((item) => ({ id: item.id, title: item.question, content: item.answer }))

export function FAQ() {
  return (
    <section id={SECTION_IDS.faq} aria-labelledby="faq-title" className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionTitle id="faq-title" eyebrow={faqContent.eyebrow} title={faqContent.title} />
            <Reveal delay={0.15} className="mt-8 max-w-sm">
              <p className="text-ink-soft">{faqContent.aside}</p>
              <Button href={getWhatsAppLink()} variant="secondary" className="mt-6">
                Hacer una pregunta
              </Button>
            </Reveal>
          </div>
        </div>
        <Reveal className="lg:col-span-7">
          <Accordion items={accordionItems} defaultOpenId={accordionItems[0]?.id} />
        </Reveal>
      </div>
    </section>
  )
}
