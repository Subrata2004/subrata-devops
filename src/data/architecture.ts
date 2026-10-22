export const architectureLayers = [
  { id: 'internet', label: 'INTERNET', tier: 'edge' },
  { id: 'dns', label: 'AWS ROUTE 53', tier: 'edge' },
  { id: 'lb', label: 'LOAD BALANCER', tier: 'public' },
  { id: 'app', label: 'APPLICATION', tier: 'public' },
  { id: 'compute', label: 'EC2 / DOCKER', tier: 'app' },
  { id: 'db', label: 'DATABASE', tier: 'private' },
  { id: 's3', label: 'S3', tier: 'data' },
] as const

export const architectureNotes = [
  { title: 'VPC', text: 'Isolated network boundary for the lab topology.' },
  { title: 'Public subnet', text: 'Internet-facing load balancer and edge path.' },
  { title: 'Private subnet', text: 'Application and data plane without direct inbound internet.' },
  { title: 'Security Groups', text: 'Stateful allow-lists between tiers.' },
  { title: 'EC2', text: 'Compute host for Dockerized application processes.' },
  { title: 'S3', text: 'Object storage off the request path.' },
  { title: 'IAM', text: 'Identity and least-privilege roles for services.' },
  { title: 'CloudWatch', text: 'Metrics, logs and alarms — monitoring plane, not user traffic.' },
]

export const monitoringFlow = ['CLOUDWATCH', 'MONITORING'] as const
