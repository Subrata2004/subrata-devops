import { FileDown, FileText } from 'lucide-react'
import { profile } from '../../data/profile'
import { useResumeAvailable } from '../../hooks/useResumeAvailable'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export function Resume() {
  const available = useResumeAvailable(profile.resumePath)

  return (
    <Section
      id="resume"
      kicker="Resume"
      title="Download or view"
      description="The expected file is /resume/Subrata_Dey_Resume.pdf. If that PDF is missing, this section stays a placeholder instead of a broken link."
    >
      {available ? (
        <div className="flex flex-wrap gap-3">
          <Button href={profile.resumePath} download variant="primary">
            <FileDown size={16} />
            Download Resume
          </Button>
          <Button href={profile.resumePath} external>
            <FileText size={16} />
            View Resume
          </Button>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-[var(--line)] p-8">
          <p className="font-mono text-sm text-[var(--accent)]">Resume PDF not found</p>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Place <code className="font-mono">Subrata_Dey_Resume.pdf</code> in <code className="font-mono">public/resume/</code>{' '}
            so both Download Resume and View Resume resolve to {profile.resumePath}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button disabled>
              <FileDown size={16} />
              Download Resume
            </Button>
            <Button disabled>
              <FileText size={16} />
              View Resume
            </Button>
          </div>
        </div>
      )}
    </Section>
  )
}
