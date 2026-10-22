import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  kicker?: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({ id, kicker, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-10 max-w-3xl">
          {kicker ? (
            <p className="mb-3 font-mono text-xs tracking-[0.22em] text-[var(--accent)] uppercase">
              {kicker}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">{title}</h2>
          {description ? <p className="mt-3 text-[var(--muted)]">{description}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
