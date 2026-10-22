import { profile } from '../../data/profile'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about" kicker="About" title="Engineer in training, infrastructure in focus">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-[var(--muted)]">
          <p className="text-base leading-7 text-[var(--text)]">{profile.about}</p>
          <p>
            Career direction is {profile.careerGoal}. Education: {profile.education[0].program} at{' '}
            {profile.education[0].institution}; {profile.education[1].program} at {profile.education[1].institution}.
          </p>
          <p>
            This site describes hands-on project work and structured learning. It does not invent job titles, production
            uptime, or certifications.
          </p>
        </div>
        <ul className="grid gap-2">
          {profile.focus.map((item) => (
            <li
              key={item}
              className="rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-3 font-mono text-sm"
            >
              <span className="mr-2 text-[var(--accent)]">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
