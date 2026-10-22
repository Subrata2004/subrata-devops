export type JourneyStep = {
  name: string
  status: 'hands-on' | 'learning'
  note: string
}

export const journeySteps: JourneyStep[] = [
  {
    name: 'LINUX',
    status: 'hands-on',
    note: 'Working environment for servers, shells and container hosts.',
  },
  {
    name: 'NETWORKING',
    status: 'learning',
    note: 'Foundations for VPC, subnets, routing and service communication.',
  },
  {
    name: 'GIT & GITHUB',
    status: 'hands-on',
    note: 'Version control used across application and DevOps project work.',
  },
  {
    name: 'SHELL SCRIPTING',
    status: 'hands-on',
    note: 'Automation snippets and Linux task scripting.',
  },
  {
    name: 'DOCKER',
    status: 'hands-on',
    note: 'Images, Compose and multi-service containers (voting application).',
  },
  {
    name: 'KUBERNETES',
    status: 'learning',
    note: 'Orchestration of containerized services — practiced as learning, not production ops.',
  },
  {
    name: 'CI/CD',
    status: 'learning',
    note: 'Pipeline design with GitHub Actions and Jenkins as lab/project work.',
  },
  {
    name: 'AWS',
    status: 'learning',
    note: 'Core services studied through labs and architecture diagrams.',
  },
  {
    name: 'TERRAFORM',
    status: 'learning',
    note: 'Infrastructure as Code for AWS lab topologies.',
  },
  {
    name: 'MONITORING',
    status: 'learning',
    note: 'CloudWatch-oriented observability concepts around logs and metrics.',
  },
]
