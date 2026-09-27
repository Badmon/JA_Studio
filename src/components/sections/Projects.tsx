import { SECTION_IDS } from '../../data/siteConfig'
import { projectsContent } from '../../data/content'
import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionTitle } from '../ui/SectionTitle'

const featuredProjects = projects.filter((project) => project.featured)

export function Projects() {
  return (
    <section id={SECTION_IDS.projects} aria-labelledby="projects-title" className="section-y bg-surface-muted/50">
      <div className="container-page">
        <SectionTitle
          id="projects-title"
          eyebrow={projectsContent.eyebrow}
          title={projectsContent.title}
          description={projectsContent.subtitle}
        />
        <div className="mt-16 space-y-24 sm:mt-24 lg:space-y-36">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
