import { SECTION_IDS } from '../../data/siteConfig'
import { faqContent } from '../../data/content'
import { faqItems } from '../../data/faq'
import { Accordion } from '../ui/Accordion'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

const accordionItems = faqItems.map((item) => ({ id: item.id, title: item.question, content: item.answer }))

export function FAQ() {
  return (
    <section id={SECTION_IDS.faq} aria-labelledby="faq-title" className="section-y bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            {/* Cada línea del título recorta su contenido (animación de revelado) y "frecuentes" es más
                ancha que la columna en pantallas grandes: se amplía el área de recorte hacia la derecha
                sin cambiar el ancho del texto. */}
            <SectionTitle
              id="faq-title"
              eyebrow={faqContent.eyebrow}
              title={faqContent.title}
              titleClassName="[&>span]:-mr-[0.15em] [&>span]:pr-[0.15em]"
            />
          </div>
        </div>
        <Reveal className="lg:col-span-7">
          <Accordion items={accordionItems} defaultOpenId={accordionItems[0]?.id} />
        </Reveal>
      </div>
    </section>
  )
}
