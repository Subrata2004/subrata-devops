export const profile = {
  name: 'Subrata Dey',
  title: 'DevOps & Cloud Engineer',
  subtitle: 'AWS | Linux | Docker | Kubernetes | CI/CD | Terraform',
  location: 'India',
  careerGoal: 'DevOps Engineer → Cloud Engineer',
  heroHeading: 'Building Reliable Infrastructure. Automating Everything.',
  heroSubtitle:
    'DevOps & Cloud Engineer focused on AWS, Linux, Docker, Kubernetes, CI/CD and Infrastructure as Code.',
  education: [
    { program: 'BCA', institution: 'Chitkara University' },
    {
      program: 'MCA Cloud Computing',
      institution: 'Chandigarh University Online',
    },
  ],
  about:
    'I am a BCA graduate and MCA Cloud Computing learner focused on DevOps, cloud infrastructure and automation. I build hands-on projects using Linux, AWS, Docker, Kubernetes, CI/CD and Infrastructure as Code.',
  focus: [
    'Cloud infrastructure',
    'Automation',
    'Containerization',
    'CI/CD',
    'Infrastructure as Code',
    'Linux',
    'Cloud deployment',
  ],
  status: 'Building • Learning • Deploying',
  resumePath: '/resume/Subrata_Dey_Resume.pdf',
  placeholders: {
    email: 'YOUR_EMAIL',
    linkedin: 'YOUR_LINKEDIN',
    github: 'YOUR_GITHUB',
    githubUrl: 'YOUR_GITHUB_URL',
    liveDemoUrl: 'YOUR_LIVE_DEMO_URL',
  },
} as const

export const engineeringStack = [
  { label: 'Cloud', value: 'AWS' },
  { label: 'OS', value: 'Linux' },
  { label: 'Containers', value: 'Docker' },
  { label: 'Orchestration', value: 'Kubernetes' },
  { label: 'CI/CD', value: 'Jenkins / GitHub Actions' },
  { label: 'IaC', value: 'Terraform' },
  { label: 'VCS', value: 'Git / GitHub' },
  { label: 'Monitoring', value: 'CloudWatch' },
] as const

export const heroTerminalLines = [
  { command: 'whoami', output: 'subrata-dey' },
  { command: 'role', output: 'DevOps & Cloud Engineer' },
  { command: 'cloud', output: 'AWS' },
  { command: 'containers', output: 'Docker / Kubernetes' },
  { command: 'automation', output: 'CI/CD + Terraform' },
  { command: 'status', output: 'Building • Learning • Deploying' },
] as const
