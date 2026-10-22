import { profile } from '../../data/profile'
import { getSiteEnv } from '../../lib/env'
import { isPlaceholder } from '../../lib/placeholders'

export function Footer() {
  const env = getSiteEnv()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--line)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm text-[var(--text)]">{profile.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{profile.title}</p>
        </div>
        <ul className="space-y-1 font-mono text-xs text-[var(--muted)]">
          <li>Email: {isPlaceholder(env.email) ? 'YOUR_EMAIL' : env.email}</li>
          <li>LinkedIn: {isPlaceholder(env.linkedinUrl) ? 'YOUR_LINKEDIN' : env.linkedinUrl}</li>
          <li>GitHub: {isPlaceholder(env.githubUrl) ? 'YOUR_GITHUB' : env.githubUrl}</li>
        </ul>
        <p className="text-xs text-[var(--muted)]">© {year} {profile.name}. No fabricated stats or logos.</p>
      </div>
    </footer>
  )
}
