import { useState } from 'react'
import {
  Code2,
  GitBranch,
  Hammer,
  FlaskConical,
  Container,
  Archive,
  Rocket,
  Hexagon,
  Activity,
} from 'lucide-react'
import { pipelineStages } from '../../data/pipeline'
import { Section } from '../ui/Section'

const icons = [Code2, GitBranch, Hammer, FlaskConical, Container, Archive, Rocket, Hexagon, Activity]

type StageId = (typeof pipelineStages)[number]['id']

export function CICDPipeline() {
  const [active, setActive] = useState<StageId>(pipelineStages[0].id)
  const current = pipelineStages.find((stage) => stage.id === active) ?? pipelineStages[0]

  return (
    <Section
      id="pipeline"
      kicker="CI/CD pipeline"
      title="From commit to cluster — as a model"
      description="Interactive stages for a delivery path. Hover or select a stage. This UI is not wired to a live runner."
    >
      <div className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-stretch">
        {pipelineStages.map((stage, index) => {
          const Icon = icons[index]
          const selected = stage.id === active
          return (
            <div key={stage.id} className="flex flex-1 flex-col lg:min-w-[9.5rem]">
              <button
                type="button"
                onMouseEnter={() => setActive(stage.id)}
                onFocus={() => setActive(stage.id)}
                onClick={() => setActive(stage.id)}
                className={`flex w-full flex-col items-start rounded-lg border p-4 text-left transition ${
                  selected
                    ? 'border-[var(--accent)] bg-[var(--bg-soft)]'
                    : 'border-[var(--line)] bg-[var(--bg-elevated)] hover:border-[var(--accent)]/50'
                }`}
              >
                <Icon size={18} className="text-[var(--accent)]" />
                <span className="mt-3 font-mono text-xs tracking-widest">{stage.label}</span>
                <span className="mt-1 text-sm text-[var(--muted)]">{stage.title}</span>
              </button>
              {index < pipelineStages.length - 1 ? (
                <p className="py-1 text-center font-mono text-xs text-[var(--accent)] lg:hidden" aria-hidden>
                  ↓
                </p>
              ) : null}
            </div>
          )
        })}
      </div>
      <div className="mt-6 rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6">
        <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">{current.label}</p>
        <h3 className="mt-2 text-xl font-semibold">{current.title}</h3>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">{current.detail}</p>
      </div>
    </Section>
  )
}
