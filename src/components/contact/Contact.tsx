import { type FormEvent, useState } from 'react'
import { getSiteEnv } from '../../lib/env'
import { isPlaceholder } from '../../lib/placeholders'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export function Contact() {
  const env = getSiteEnv()
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const subject = String(form.get('subject') ?? '')
    const message = String(form.get('message') ?? '')
    if (isPlaceholder(env.email)) {
      setSent(true)
      return
    }
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
    const mailto = `mailto:${env.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    window.open(mailto, '_self')
  }

  return (
    <Section
      id="contact"
      kicker="Contact"
      title="Start a conversation"
      description="The form opens a mail client when YOUR_EMAIL is replaced. Until then, placeholders stay visible and nothing is invented."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <form className="space-y-4" onSubmit={onSubmit}>
          <label className="block">
            <span className="mb-1 block font-mono text-xs tracking-widest text-[var(--muted)] uppercase">Name</span>
            <input
              required
              name="name"
              className="w-full rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="mb-1 block font-mono text-xs tracking-widest text-[var(--muted)] uppercase">Email</span>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="mb-1 block font-mono text-xs tracking-widest text-[var(--muted)] uppercase">Subject</span>
            <input
              required
              name="subject"
              className="w-full rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="mb-1 block font-mono text-xs tracking-widest text-[var(--muted)] uppercase">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2"
            />
          </label>
          <Button type="submit" variant="primary">
            Send Message
          </Button>
          {sent && isPlaceholder(env.email) ? (
            <p className="text-sm text-[var(--muted)]">
              YOUR_EMAIL is still a placeholder, so mail was not opened. Replace it in .env to enable send.
            </p>
          ) : null}
        </form>
        <aside className="h-fit rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5 font-mono text-sm">
          <p>YOUR_EMAIL</p>
          <p className="mt-2">YOUR_LINKEDIN</p>
          <p className="mt-2">YOUR_GITHUB</p>
          <p className="mt-4 text-xs text-[var(--muted)]">
            Displayed as specified until environment variables replace them. Current resolved values:{' '}
            {env.email} · {env.linkedinUrl} · {env.githubUrl}
          </p>
        </aside>
      </div>
    </Section>
  )
}
