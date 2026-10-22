import { projects } from '../../data/projects'
import { Section } from '../ui/Section'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <Section
      id="projects"
      kicker="Projects"
      title="Work I can point to"
      description="Case studies for the projects listed in this brief. Repository and demo buttons stay placeholders until real URLs exist."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
