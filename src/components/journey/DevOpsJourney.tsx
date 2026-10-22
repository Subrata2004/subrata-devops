import { motion } from 'framer-motion'
import { journeySteps } from '../../data/journey'
import { Section } from '../ui/Section'

export function DevOpsJourney() {
  const handsOn = journeySteps.filter((step) => step.status === 'hands-on')
  const learning = journeySteps.filter((step) => step.status === 'learning')

  return (
    <Section
      id="journey"
      kicker="DevOps journey"
      title="A path, not a resume of expertise"
      description="Hands-on means used in projects. Currently learning means studied or practiced without an advanced claim."
    >
      <ol className="relative space-y-0">
        {journeySteps.map((step, index) => (
          <li key={step.name} className="relative grid grid-cols-[20px_1fr] gap-4 pb-8">
            <div className="flex flex-col items-center">
              <span className="size-3 rounded-full bg-[var(--accent)]" />
              {index < journeySteps.length - 1 ? (
                <span className="mt-1 w-px flex-1 bg-[var(--line)]" />
              ) : null}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-mono text-sm tracking-widest">{step.name}</h3>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase ${
                    step.status === 'hands-on'
                      ? 'bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] text-[var(--accent)]'
                      : 'border border-[var(--line)] text-[var(--muted)]'
                  }`}
                >
                  {step.status === 'hands-on' ? 'Hands-on' : 'Currently learning'}
                </span>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">{step.note}</p>
              {index < journeySteps.length - 1 ? (
                <p className="mt-2 font-mono text-xs text-[var(--accent)]">↓</p>
              ) : null}
            </motion.div>
          </li>
        ))}
      </ol>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-[var(--line)] p-4">
          <h4 className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">Hands-on</h4>
          <p className="mt-2 text-sm text-[var(--muted)]">{handsOn.map((s) => s.name).join(' · ')}</p>
        </div>
        <div className="rounded-lg border border-[var(--line)] p-4">
          <h4 className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">Currently learning</h4>
          <p className="mt-2 text-sm text-[var(--muted)]">{learning.map((s) => s.name).join(' · ')}</p>
        </div>
      </div>
    </Section>
  )
}
