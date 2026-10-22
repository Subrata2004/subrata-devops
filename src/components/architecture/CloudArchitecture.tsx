import { architectureNotes, monitoringFlow } from '../../data/architecture'
import { Section } from '../ui/Section'

const publicPath = ['INTERNET', 'AWS ROUTE 53', 'LOAD BALANCER', 'APPLICATION']
const privatePath = ['EC2 / DOCKER', 'DATABASE', 'S3']

function Stack({ items, tone }: { items: string[]; tone: 'edge' | 'private' }) {
  return (
    <div className="flex flex-col items-center">
      {items.map((item, index) => (
        <div key={item} className="flex w-full flex-col items-center">
          <div
            className={`w-full rounded-md border px-3 py-2.5 text-center font-mono text-xs sm:text-sm ${
              tone === 'private'
                ? 'border-[var(--accent)]/40 bg-[var(--bg-soft)]'
                : 'border-[var(--line)] bg-[var(--terminal)] text-[var(--terminal-text)]'
            }`}
          >
            {item}
          </div>
          {index < items.length - 1 ? (
            <div className="relative h-7 w-px bg-[var(--accent)]">
              <span className="absolute top-1/2 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[var(--accent)] motion-reduce:animate-none" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function CloudArchitecture() {
  return (
    <Section
      id="architecture"
      kicker="Cloud architecture"
      title="AWS reference topology"
      description="A study diagram of a typical web path on AWS. It is not a live environment and is not connected to an account from this website."
    >
      <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-4 sm:p-8">
        <p className="mb-2 text-center font-mono text-xs tracking-[0.2em] text-[var(--muted)] uppercase">
          VPC
        </p>
        <div className="rounded-xl border border-dashed border-[var(--line)] p-4 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-[var(--line)] p-4">
              <p className="mb-4 font-mono text-[11px] tracking-widest text-[var(--accent)] uppercase">
                Public subnet · security groups
              </p>
              <Stack items={publicPath} tone="edge" />
            </div>
            <div className="rounded-lg border border-[var(--accent)]/30 p-4">
              <p className="mb-4 font-mono text-[11px] tracking-widest text-[var(--accent)] uppercase">
                Private subnet · security groups
              </p>
              <Stack items={privatePath} tone="private" />
            </div>
          </div>
          <div className="mt-6 hidden justify-center lg:flex" aria-hidden>
            <p className="font-mono text-xs text-[var(--accent)]">↓ traffic stays inside the VPC</p>
          </div>
        </div>
        <div className="mt-8 grid gap-3 border-t border-[var(--line)] pt-6 sm:grid-cols-2">
          <div className="rounded-md border border-dashed border-[var(--line)] p-4 text-center">
            <p className="font-mono text-xs tracking-widest text-[var(--accent)]">{monitoringFlow[0]}</p>
            <p className="my-1 text-[var(--accent)]">↓</p>
            <p className="font-mono text-sm">{monitoringFlow[1]}</p>
            <p className="mt-2 text-xs text-[var(--muted)]">Observability plane, separate from user traffic.</p>
          </div>
          <div className="rounded-md border border-dashed border-[var(--line)] p-4">
            <p className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">IAM</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Roles and policies sit beside every box. Least privilege is the design rule even in a lab.
            </p>
          </div>
        </div>
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {architectureNotes.map((note) => (
          <li key={note.title} className="rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] p-4">
            <h3 className="font-mono text-sm text-[var(--accent)]">{note.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{note.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
