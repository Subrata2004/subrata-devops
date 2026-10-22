export type Skill = {
  name: string
  category: string
  usage: string
  relatedProjects: string[]
}

export const skills: Skill[] = [
  {
    name: 'AWS',
    category: 'Cloud',
    usage: 'Learning core services such as EC2, S3, IAM, VPC and CloudWatch through labs and architecture studies.',
    relatedProjects: ['Terraform AWS Infrastructure'],
  },
  {
    name: 'Linux',
    category: 'Operating Systems',
    usage: 'Day-to-day OS for servers, shells, permissions, processes and container hosts.',
    relatedProjects: ['Docker Voting Application', 'CI/CD Pipeline'],
  },
  {
    name: 'Docker',
    category: 'Containers',
    usage: 'Packaging services, Compose stacks, images and local multi-container workflows.',
    relatedProjects: ['Docker Voting Application', 'Fresh Cart', 'CI/CD Pipeline'],
  },
  {
    name: 'Kubernetes',
    category: 'Orchestration',
    usage: 'Learning workloads, services and manifests around containerized applications.',
    relatedProjects: ['Docker Voting Application'],
  },
  {
    name: 'Jenkins',
    category: 'CI/CD',
    usage: 'Studying pipeline stages for build, test, image and deploy automation.',
    relatedProjects: ['CI/CD Pipeline'],
  },
  {
    name: 'GitHub Actions',
    category: 'CI/CD',
    usage: 'Workflow-based CI for install, lint, test, build and container image steps.',
    relatedProjects: ['CI/CD Pipeline', 'This portfolio'],
  },
  {
    name: 'Terraform',
    category: 'Infrastructure as Code',
    usage: 'Describing AWS lab resources with variables, outputs, state and modules.',
    relatedProjects: ['Terraform AWS Infrastructure'],
  },
  {
    name: 'Git',
    category: 'Version Control',
    usage: 'Source history, branching and collaboration on application and infrastructure code.',
    relatedProjects: ['Fresh Cart', 'Docker Voting Application', 'CI/CD Pipeline'],
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    usage: 'Remote repositories, pull requests and CI integration.',
    relatedProjects: ['Fresh Cart', 'CI/CD Pipeline'],
  },
  {
    name: 'Python',
    category: 'Programming',
    usage: 'Service logic in containerized voting and worker-style workloads.',
    relatedProjects: ['Docker Voting Application'],
  },
  {
    name: 'Bash',
    category: 'Programming',
    usage: 'Shell scripting for Linux tasks, automation snippets and environment setup.',
    relatedProjects: ['CI/CD Pipeline'],
  },
  {
    name: 'React',
    category: 'Development',
    usage: 'Front-end interfaces for web applications and this portfolio.',
    relatedProjects: ['Fresh Cart', 'This portfolio'],
  },
  {
    name: 'Node.js',
    category: 'Development',
    usage: 'API services, Express backends and JavaScript runtimes in container stacks.',
    relatedProjects: ['Fresh Cart', 'Docker Voting Application'],
  },
  {
    name: 'MongoDB',
    category: 'Database',
    usage: 'Document storage for the Fresh Cart MERN application.',
    relatedProjects: ['Fresh Cart'],
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    usage: 'Relational persistence in the voting application result path.',
    relatedProjects: ['Docker Voting Application'],
  },
]
