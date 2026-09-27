import { motion } from 'framer-motion'
import type { Project } from '../../data/projects'
import { getWhatsAppLink, greetingMessage } from '../../lib/contact'
import { fadeUp, inViewOnce, scaleIn, stagger } from '../../lib/motion'
import { cn } from '../../lib/cn'
import { ProjectMockup } from '../mockups/ProjectMockup'
import { Button } from './Button'

type ProjectCardProps = {
  project: Project
  index: number
  /** Si es true, la imagen va a la derecha en pantallas grandes. */
  reversed?: boolean
}

const detailLabels = [
  { key: 'problem', label: 'Problema' },
  { key: 'solution', label: 'Solución' },
  { key: 'result', label: 'Resultado' },
] as const

/** Bloque grande de proyecto: mockup + información, en layout alterno. */
export function ProjectCard({ project, index, reversed = false }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, '0')
  const cta = project.url
    ? { href: project.url, label: 'Ver proyecto' }
    : {
        href: getWhatsAppLink(
          greetingMessage(`vi el proyecto "${project.title}" en tu portafolio y me gustaría ver una demostración.`),
        ),
        label: 'Pedir una demostración',
      }

  return (
    <motion.article
      aria-labelledby={`project-${project.id}`}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16"
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      variants={stagger(0.12)}
    >
      <motion.div
        variants={scaleIn}
        className={cn('lg:col-span-7', reversed && 'lg:order-2')}
      >
        <div className="group overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem]">
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
            {project.image ? (
              <img
                src={project.image}
                alt={project.imageAlt ?? `Vista del proyecto ${project.title}`}
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            ) : (
              <div role="img" aria-label={`Vista ilustrada del proyecto ${project.title}`}>
                <ProjectMockup variant={project.mockup} />
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className={cn('lg:col-span-5', reversed && 'lg:order-1')}>
        <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-ink-muted">
          <span className="font-extrabold text-ink">{number}</span>
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          <span className="rounded-full bg-surface px-3 py-1 text-ink">{project.category}</span>
        </div>
        <h3
          id={`project-${project.id}`}
          className="text-[clamp(2rem,1.2rem+2.5vw,3.25rem)] leading-[1.02] font-extrabold tracking-[-0.035em]"
        >
          {project.title}
        </h3>
        <p className="text-lead mt-5 text-ink-soft">{project.description}</p>

        <dl className="mt-8 space-y-5 border-t border-line pt-8">
          {detailLabels.map(({ key, label }) => (
            <div key={key} className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
              <dt className="eyebrow pt-1">{label}</dt>
              <dd className={cn('text-[1.0625rem]', key === 'result' && 'font-semibold text-ink')}>
                {project[key]}
              </dd>
            </div>
          ))}
        </dl>

        <Button href={cta.href} withArrow className="mt-10">
          {cta.label}
        </Button>
      </motion.div>
    </motion.article>
  )
}
