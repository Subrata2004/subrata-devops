import { certifications } from '../../data/certifications'
import { Section } from '../ui/Section'

export function Certifications() {
  return (
    <Section
      id="certifications"
      kicker="Certifications"
      title="Only what is confirmed"
      description="Completed stays empty until a certificate is explicitly confirmed. In-progress items match the learning list you provided."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6">
          <h3 className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">Completed</h3>
          {certifications.completed.length === 0 ? (
            <p className="mt-4 text-sm text-[var(--muted)]">
              No completed certifications are listed. None will be shown until you confirm them.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {certifications.completed.map((item) => (
                <li key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-[var(--muted)]">{item.issuer}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-6">
          <h3 className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">In Progress</h3>
          <ul className="mt-4 space-y-3">
            {certifications.inProgress.map((item) => (
              <li key={item.name} className="rounded-md border border-[var(--line)] p-3">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-[var(--muted)]">
                  {item.issuer} · {item.status}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
