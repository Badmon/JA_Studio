import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SECTION_IDS } from '../../data/siteConfig'
import { servicesContent } from '../../data/content'
import { services } from '../../data/services'
import type { Service } from '../../data/services'
import { fadeUp, stagger } from '../../lib/motion'
import { getWhatsAppLink, greetingMessage } from '../../lib/contact'
import { SectionTitle } from '../ui/SectionTitle'

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  return (
    <motion.li variants={fadeUp} className="h-full">
      <a
        href={getWhatsAppLink(
          greetingMessage(`vi tu portafolio y me interesa el servicio de ${service.title.toLowerCase()}.`),
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-[1.75rem] bg-surface p-7 shadow-soft transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:bg-[#fbfbf8] hover:shadow-float sm:p-9"
      >
        <div className="flex items-start justify-between">
          <span className="grid size-14 place-items-center rounded-2xl bg-bg transition-[transform,background-color] duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg] group-hover:bg-accent">
            <Icon className="size-6" aria-hidden="true" strokeWidth={1.75} />
          </span>
          <span className="text-sm font-bold text-ink-muted">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-12 text-2xl font-extrabold tracking-tight sm:text-[1.75rem]">{service.title}</h3>
        <p className="mt-3 flex-1 text-ink-soft">{service.description}</p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">
          Consultar
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
          <span className="sr-only">sobre {service.title} por WhatsApp (se abre en una pestaña nueva)</span>
        </span>
      </a>
    </motion.li>
  )
}

export function Services() {
  return (
    <section id={SECTION_IDS.services} aria-labelledby="services-title" className="section-y">
      <div className="container-page">
        <SectionTitle id="services-title" eyebrow={servicesContent.eyebrow} title={servicesContent.title} />
        <motion.ul
          className="mt-14 grid gap-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger(0.08)}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

