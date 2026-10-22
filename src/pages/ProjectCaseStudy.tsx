import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import { isPlaceholder } from '../lib/placeholders'
import { Button } from '../components/ui/Button'
import { FlowDiagram } from '../components/ui/FlowDiagram'

export function ProjectCaseStudy() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <Link to="/#projects" className="mt-4 inline-block text-[var(--accent)]">
          Back to projects
        </Link>
      </div>
    )
  }

  const github = isPlaceholder(project.githubUrl) ? undefined : project.githubUrl
  const live = isPlaceholder(project.liveDemoUrl) ? undefined : project.liveDemoUrl

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">{project.status}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-4 text-[var(--muted)]">{project.summary}</p>
      <div className="mt-8">
        {project.architecture.kind === 'flow' ? (
          <FlowDiagram nodes={project.architecture.nodes} />
        ) : (
          <div className="rounded-xl border border-[var(--line)] p-6 font-mono text-sm">
            <p>Terraform</p>
            <p className="py-1 text-[var(--accent)]">↓</p>
            <p>AWS</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {(project.architecture.groups?.[0]?.items ?? []).map((item) => (
                <li key={item} className="rounded border border-[var(--line)] px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <h2 className="mt-10 text-xl font-semibold">Problem</h2>
      <p className="mt-2 text-[var(--muted)]">{project.caseStudy.problem}</p>
      <h2 className="mt-8 text-xl font-semibold">Approach</h2>
      <p className="mt-2 text-[var(--muted)]">{project.caseStudy.approach}</p>
      <h2 className="mt-8 text-xl font-semibold">Details</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--muted)]">
        {project.caseStudy.details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Technologies</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">{project.technologies.join(' · ')}</p>
      <h2 className="mt-8 text-xl font-semibold">DevOps concepts</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">{project.devopsConcepts.join(' · ')}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={github} external disabled={!github}>
          GitHub
        </Button>
        <Button href={live} external disabled={!live}>
          Live Demo
        </Button>
        <Link to="/#projects" className="inline-flex items-center text-sm text-[var(--accent)]">
          ← All projects
        </Link>
      </div>
    </article>
  )
}
