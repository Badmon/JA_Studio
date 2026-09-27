import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import { cn, isExternalHref } from '../../lib/cn'
import { ProjectMockup } from '../mockups/ProjectMockup'

/** Proporción usada cuando el proyecto no define `aspectRatio`. */
export const DEFAULT_SHOT_ASPECT_RATIO = '16/10'

type ProjectShotProps = {
  project: Project
}

/**
 * Tarjeta con la captura de un proyecto para la galería en movimiento.
 * La altura es fija por breakpoint y el ancho sale de la proporción del proyecto,
 * así cada captura conserva su forma y la galería gana ritmo editorial.
 */
export function ProjectShot({ project }: ProjectShotProps) {
  const external = project.url ? isExternalHref(project.url) : false

  const visual = project.image ? (
    <img
      src={project.image}
      alt={project.imageAlt ?? `Captura del proyecto ${project.title} (${project.category})`}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="size-full object-cover object-top"
    />
  ) : project.mockup ? (
    <div
      role="img"
      aria-label={`Vista ilustrada del proyecto ${project.title} (${project.category})`}
      className="size-full [&>div]:min-h-full"
    >
      <ProjectMockup variant={project.mockup} />
    </div>
  ) : null

  const overlay = (
    <div
      className={cn(
        'pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white sm:p-6',
        'bg-gradient-to-t from-carbon/75 via-carbon/35 to-transparent pt-16',
        'translate-y-2 opacity-0 transition-[opacity,transform] duration-500 ease-out',
        'group-hover/shot:translate-y-0 group-hover/shot:opacity-100',
        'group-focus-visible/shot:translate-y-0 group-focus-visible/shot:opacity-100',
        '[@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100',
      )}
    >
      <div className="min-w-0">
        <p className="truncate text-base font-extrabold tracking-tight sm:text-lg">{project.title}</p>
        <p className="truncate text-sm text-white/75">{project.category}</p>
      </div>
      {project.url && (
        <span className="hidden shrink-0 items-center gap-1 text-sm font-bold sm:inline-flex">
          Ver proyecto
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      )}
    </div>
  )

  const cardClassName = cn(
    'group/shot relative block h-[210px] overflow-hidden rounded-[1.5rem] bg-surface ring-1 ring-ink/5 sm:h-[260px] sm:rounded-[2rem] lg:h-[340px] xl:h-[380px]',
    'shadow-soft transition-[transform,box-shadow] duration-500 ease-out will-change-transform',
    'hover:-translate-y-1 hover:scale-[1.015] hover:shadow-float',
  )
  const style = { aspectRatio: project.aspectRatio ?? DEFAULT_SHOT_ASPECT_RATIO }

  if (project.url) {
    return (
      <a
        href={project.url}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={cardClassName}
        style={style}
        aria-label={`Ver proyecto ${project.title} (${project.category})${external ? ', se abre en una pestaña nueva' : ''}`}
        draggable={false}
      >
        {visual}
        {overlay}
      </a>
    )
  }

  return (
    <div className={cardClassName} style={style}>
      {visual}
      {overlay}
    </div>
  )
}
