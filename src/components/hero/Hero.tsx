import { FileDown, FolderGit2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { getSiteEnv } from '../../lib/env'
import { isPlaceholder } from '../../lib/placeholders'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { Button } from '../ui/Button'
import { HeroTerminal } from './HeroTerminal'

export function Hero() {
  const env = getSiteEnv()
  const githubHref = isPlaceholder(env.githubUrl) ? undefined : env.githubUrl
  const linkedinHref = isPlaceholder(env.linkedinUrl) ? undefined : env.linkedinUrl

  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-16 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="font-mono text-xs tracking-[0.22em] text-[var(--accent)] uppercase">
            {profile.title} · {profile.location}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
            {profile.heroHeading}
          </h1>
          <p className="mt-4 max-w-xl text-base text-[var(--muted)] sm:text-lg">{profile.heroSubtitle}</p>
          <p className="mt-3 font-mono text-sm text-[var(--accent-2)]">{profile.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#projects" variant="primary">
              <FolderGit2 size={16} />
              View Projects
            </Button>
            <Button href="/#resume">
              <FileDown size={16} />
              Download Resume
            </Button>
            <Button href={githubHref} external disabled={!githubHref}>
              <GitHubIcon size={16} />
              GitHub
            </Button>
            <Button href={linkedinHref} external disabled={!linkedinHref}>
              <LinkedInIcon size={16} />
              LinkedIn
            </Button>
          </div>
          {(!githubHref || !linkedinHref) && (
            <p className="mt-3 font-mono text-xs text-[var(--muted)]">
              GitHub / LinkedIn buttons stay disabled until YOUR_GITHUB and YOUR_LINKEDIN are replaced.
            </p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <HeroTerminal />
        </motion.div>
      </div>
    </section>
  )
}
