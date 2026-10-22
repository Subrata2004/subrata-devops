import { engineeringStack } from '../../data/profile'
import { Section } from '../ui/Section'

export function EngineeringStatus() {
  return (
    <Section
      id="status"
      kicker="Engineering status"
      title="ENGINEERING STACK"
      description="A snapshot of the stack I work with in projects and labs. These are not live production systems."
    >
      <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)]">
        <div className="border-b border-[var(--line)] px-4 py-3 font-mono text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
          dashboard · local reference · not connected
        </div>
        <dl className="divide-y divide-[var(--line)]">
          {engineeringStack.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[180px_1fr] sm:items-center"
            >
              <dt className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">{row.label}</dt>
              <dd className="font-mono text-sm text-[var(--text)]">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
