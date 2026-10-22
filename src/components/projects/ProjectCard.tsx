import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { isPlaceholder } from '../../lib/placeholders'
import { Button } from '../ui/Button'
import { FlowDiagram } from '../ui/FlowDiagram'

export function ProjectCard({ project }: { project: Project }) {
  const github = isPlaceholder(project.githubUrl) ? undefined : project.githubUrl
  const live = isPlaceholder(project.liveDemoUrl) ? undefined : project.liveDemoUrl

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="border-b border-[var(--line)] bg-[var(--bg-soft)] p-4">
        {project.architecture.kind === 'flow' ? (
          <FlowDiagram nodes={project.architecture.nodes} />
        ) : (
          <div className="rounded-md border border-[var(--line)] p-4 font-mono text-xs">
            <p className="text-[var(--accent)]">Terraform</p>
            <p className="my-1 text-center text-[var(--muted)]">↓</p>
            <p>AWS</p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {(project.architecture.groups?.[0]?.items ?? []).map((item) => (
                <li key={item} className="rounded border border-[var(--line)] px-2 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[11px] tracking-widest text-[var(--accent)] uppercase">{project.status}</p>
        <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded border border-[var(--line)] px-2 py-0.5 font-mono text-[11px]">
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] tracking-widest text-[var(--muted)] uppercase">Features</p>
        <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-[var(--muted)]">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-[11px] tracking-widest text-[var(--muted)] uppercase">DevOps concepts</p>
        <p className="mt-1 text-sm text-[var(--muted)]">{project.devopsConcepts.join(' · ')}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button href={github} external disabled={!github}>
            GitHub
          </Button>
          <Button href={live} external disabled={!live}>
            Live Demo
          </Button>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center rounded-md border border-[var(--line)] px-4 py-2.5 text-sm"
          >
            Case Study
          </Link>
        </div>
        {(!github || !live) && (
          <p className="mt-3 font-mono text-[11px] text-[var(--muted)]">
            Missing links show as YOUR_GITHUB_URL / YOUR_LIVE_DEMO_URL until you add real URLs.
          </p>
        )}
      </div>
    </article>
  )
}
