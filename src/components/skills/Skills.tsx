import { useState } from 'react'
import { skills } from '../../data/skills'
import { Section } from '../ui/Section'

export function Skills() {
  const [active, setActive] = useState(skills[0].name)

  return (
    <Section
      id="skills"
      kicker="Skills"
      title="Tools I actually use"
      description="Each card is a working label, not a seniority claim. Related projects are listed only where they exist."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => {
          const selected = skill.name === active
          return (
            <button
              key={skill.name}
              type="button"
              onClick={() => setActive(skill.name)}
              onMouseEnter={() => setActive(skill.name)}
              onFocus={() => setActive(skill.name)}
              className={`rounded-xl border p-5 text-left transition ${
                selected
                  ? 'border-[var(--accent)] bg-[var(--bg-elevated)] shadow-[0_0_0_1px_var(--accent)]'
                  : 'border-[var(--line)] bg-[var(--bg-elevated)] hover:border-[var(--accent)]/50'
              }`}
            >
              <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--accent)] uppercase">
                {skill.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{skill.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{skill.usage}</p>
              <p className="mt-4 font-mono text-[10px] tracking-widest text-[var(--muted)] uppercase">
                Related projects
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {skill.relatedProjects.map((project) => (
                  <li
                    key={project}
                    className="rounded border border-[var(--line)] px-2 py-0.5 font-mono text-[11px]"
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </button>
          )
        })}
      </div>
    </Section>
  )
}
