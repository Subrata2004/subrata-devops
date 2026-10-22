import { experience } from '../../data/experience'
import { Section } from '../ui/Section'

export function Experience() {
  return (
    <Section
      id="experience"
      kicker="Experience"
      title={experience.title}
      description="No professional DevOps employment is listed here. Unrelated work is not rewritten as infrastructure experience."
    >
      <article className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6">
        <p className="font-mono text-xs text-[var(--muted)]">
          {experience.location} · {experience.type}
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
          {experience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </article>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {experience.education.map((item) => (
          <article key={item.title} className="rounded-xl border border-[var(--line)] p-5">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-[var(--accent)]">{item.org}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
