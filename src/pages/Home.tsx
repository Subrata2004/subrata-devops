import { About } from '../components/about/About'
import { CloudArchitecture } from '../components/architecture/CloudArchitecture'
import { Certifications } from '../components/certifications/Certifications'
import { Contact } from '../components/contact/Contact'
import { Experience } from '../components/experience/Experience'
import { GitHubSection } from '../components/github/GitHubSection'
import { Hero } from '../components/hero/Hero'
import { DevOpsJourney } from '../components/journey/DevOpsJourney'
import { CICDPipeline } from '../components/pipeline/CICDPipeline'
import { Projects } from '../components/projects/Projects'
import { Resume } from '../components/resume/Resume'
import { Skills } from '../components/skills/Skills'
import { EngineeringStatus } from '../components/status/EngineeringStatus'

export function Home() {
  return (
    <>
      <Hero />
      <EngineeringStatus />
      <About />
      <Skills />
      <DevOpsJourney />
      <Projects />
      <CloudArchitecture />
      <CICDPipeline />
      <Experience />
      <Certifications />
      <GitHubSection />
      <Resume />
      <Contact />
    </>
  )
}
