export type Project = {
  slug: string
  title: string
  shortTitle: string
  summary: string
  status: string
  technologies: string[]
  features: string[]
  devopsConcepts: string[]
  githubUrl: string
  liveDemoUrl: string
  architecture: {
    kind: 'flow' | 'tree'
    nodes: string[]
    groups?: { title: string; items: string[] }[]
  }
  caseStudy: {
    problem: string
    approach: string
    details: string[]
  }
}

export const projects: Project[] = [
  {
    slug: 'docker-voting-application',
    title: 'Containerized Voting Application',
    shortTitle: 'Docker Voting Application',
    summary:
      'A multi-service voting stack that shows how independent containers share work through Redis, a worker, PostgreSQL and a result UI.',
    status: 'Hands-on project',
    technologies: [
      'Docker',
      'Docker Compose',
      'Kubernetes',
      'Python',
      'Node.js',
      'Redis',
      'PostgreSQL',
      '.NET',
    ],
    features: [
      'Vote UI as an independent service',
      'Redis queue between vote and worker',
      'Worker processing votes into PostgreSQL',
      'Result service reading persistent tallies',
    ],
    devopsConcepts: [
      'Containerization',
      'Microservices',
      'Service communication',
      'Persistent storage',
      'Kubernetes',
      'CI/CD',
    ],
    githubUrl: 'YOUR_GITHUB_URL',
    liveDemoUrl: 'YOUR_LIVE_DEMO_URL',
    architecture: {
      kind: 'flow',
      nodes: ['Vote Service', 'Redis', 'Worker', 'PostgreSQL', 'Result Service'],
    },
    caseStudy: {
      problem:
        'A single-process app hides how real systems split UI, queue, processing and storage. This project makes those boundaries explicit.',
      approach:
        'Each capability runs in its own container. Docker Compose wires the network and volumes; Kubernetes is used as a learning path for the same services.',
      details: [
        'Containerization: each service is built and run as an isolated image.',
        'Microservices: vote, worker and result can scale or fail independently.',
        'Service communication: votes flow Vote → Redis → Worker → PostgreSQL → Result.',
        'Persistent storage: PostgreSQL keeps results beyond container restarts.',
        'Kubernetes: manifests are a learning overlay for the same Compose topology.',
        'CI/CD: image build and deploy stages can sit on top of this stack as a later pipeline lab.',
      ],
    },
  },
  {
    slug: 'fresh-cart',
    title: 'Fresh Cart — MERN E-Commerce Platform',
    shortTitle: 'Fresh Cart',
    summary:
      'A MERN storefront with authentication, cart state and payments — with a DevOps lens on Docker, environment configuration and CI/CD readiness.',
    status: 'Application project — deployment not claimed',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'bcrypt',
      'Redux Toolkit',
      'Tailwind CSS',
      'Razorpay',
    ],
    features: [
      'Product browsing and cart flows',
      'JWT authentication with hashed passwords',
      'Redux Toolkit client state',
      'Razorpay payment integration in the application layer',
    ],
    devopsConcepts: [
      'Docker',
      'CI/CD',
      'Environment variables',
      'AWS deployment (planned, not claimed)',
      'Logging',
      'Monitoring',
    ],
    githubUrl: 'YOUR_GITHUB_URL',
    liveDemoUrl: 'YOUR_LIVE_DEMO_URL',
    architecture: {
      kind: 'flow',
      nodes: ['React Client', 'Express API', 'MongoDB', 'Razorpay'],
    },
    caseStudy: {
      problem:
        'E-commerce needs a clear split between UI, API, data and secrets. The DevOps work is making that stack repeatable — not inflating it into a live production claim.',
      approach:
        'MERN for the product; Docker and environment variables for portable config; CI/CD, logging and monitoring treated as the next operational layer.',
      details: [
        'Application code uses React, Express, MongoDB, JWT and bcrypt.',
        'Docker is the packaging path for consistent local and server runs.',
        'Secrets belong in environment variables, never in the repository.',
        'AWS deployment, logging and monitoring are DevOps targets — not presented as already live unless a URL is provided.',
      ],
    },
  },
  {
    slug: 'cicd-pipeline',
    title: 'CI/CD Pipeline',
    shortTitle: 'CI/CD Pipeline',
    summary:
      'A pipeline study from developer commit through build, test, image, registry, deploy and monitor — implemented as a workflow lab, not a live production system.',
    status: 'Pipeline lab / project',
    technologies: ['Git', 'GitHub', 'Jenkins', 'GitHub Actions', 'Docker', 'AWS'],
    features: [
      'Checkout and install stages',
      'Lint and test gates',
      'Application and Docker image builds',
      'Deployment step kept as an explicit placeholder',
    ],
    devopsConcepts: [
      'Continuous integration',
      'Build artifacts',
      'Container registry',
      'Controlled deployment',
      'Feedback via monitoring',
    ],
    githubUrl: 'YOUR_GITHUB_URL',
    liveDemoUrl: 'YOUR_LIVE_DEMO_URL',
    architecture: {
      kind: 'flow',
      nodes: [
        'Developer',
        'GitHub',
        'CI/CD',
        'Build',
        'Test',
        'Docker Build',
        'Container Registry',
        'Deploy',
        'Monitor',
      ],
    },
    caseStudy: {
      problem:
        'Manual builds hide failures until they reach a machine. A pipeline makes quality gates visible and repeatable.',
      approach:
        'Model the path Developer → GitHub → CI/CD → Build → Test → Docker → Registry → Deploy → Monitor, with secrets supplied by the platform rather than the repo.',
      details: [
        'GitHub (or Jenkins) is the control plane; the app repo is the source of truth.',
        'Fail-fast lint and test stages protect later image builds.',
        'Images are the deployable unit; registry is the hand-off.',
        'Deploy and AWS targets stay placeholders until credentials and environments exist.',
      ],
    },
  },
  {
    slug: 'terraform-aws-infrastructure',
    title: 'Terraform AWS Infrastructure',
    shortTitle: 'Terraform AWS Lab',
    summary:
      'An Infrastructure as Code lab that describes VPC, subnets, EC2, IAM, security groups and S3. Marked as a project/lab unless it is actually applied to an account.',
    status: 'Project / lab — not claimed as a live AWS account',
    technologies: [
      'Terraform',
      'AWS',
      'VPC',
      'EC2',
      'IAM',
      'Security Groups',
      'S3',
    ],
    features: [
      'Variables and outputs',
      'Remote or local state awareness',
      'Modules as a structural pattern',
      'Network isolation between public and private ideas',
    ],
    devopsConcepts: [
      'Infrastructure as Code',
      'Idempotent applies',
      'Least-privilege IAM',
      'State as source of deployed truth',
    ],
    githubUrl: 'YOUR_GITHUB_URL',
    liveDemoUrl: 'YOUR_LIVE_DEMO_URL',
    architecture: {
      kind: 'tree',
      nodes: ['Terraform', 'AWS'],
      groups: [
        {
          title: 'AWS',
          items: ['VPC', 'Subnets', 'EC2', 'IAM', 'Security', 'S3'],
        },
      ],
    },
    caseStudy: {
      problem:
        'Click-ops cannot be reviewed. Terraform turns network and compute into code that can be diffed.',
      approach:
        'Declare VPC, subnets, EC2, IAM, security groups and S3, using variables, outputs, state and modules as the learning surface.',
      details: [
        'This is a lab topology. It is not evidence of a production AWS estate.',
        'State must never be committed if it contains secrets.',
        'Security groups and IAM stay least-privilege in the design even at lab scale.',
      ],
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
