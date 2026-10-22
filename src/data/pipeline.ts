export const pipelineStages = [
  {
    id: 'code',
    label: 'CODE',
    title: 'Write',
    detail: 'Application and infrastructure source on the engineer’s machine.',
  },
  {
    id: 'git',
    label: 'GIT',
    title: 'Version',
    detail: 'Commits and branches become the audit trail.',
  },
  {
    id: 'build',
    label: 'BUILD',
    title: 'Compile',
    detail: 'Dependencies install and the project compiles into artifacts.',
  },
  {
    id: 'test',
    label: 'TEST',
    title: 'Verify',
    detail: 'Automated checks fail the pipeline before an image is published.',
  },
  {
    id: 'docker',
    label: 'DOCKER',
    title: 'Package',
    detail: 'A container image becomes the deployable unit.',
  },
  {
    id: 'registry',
    label: 'REGISTRY',
    title: 'Store',
    detail: 'Versioned images land in a container registry.',
  },
  {
    id: 'deploy',
    label: 'DEPLOY',
    title: 'Release',
    detail: 'A target environment pulls the image. Kept as a placeholder until configured.',
  },
  {
    id: 'kubernetes',
    label: 'KUBERNETES',
    title: 'Run',
    detail: 'Orchestration target for container workloads (learning path).',
  },
  {
    id: 'monitor',
    label: 'MONITOR',
    title: 'Observe',
    detail: 'Logs and metrics close the loop after a release.',
  },
] as const
