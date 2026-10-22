export type GitHubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
  topics?: string[]
}

export type GitHubUser = {
  login: string
  html_url: string
  name: string | null
  bio: string | null
  public_repos: number
  followers: number
  avatar_url: string
}

export async function fetchGitHubUser(username: string, signal?: AbortSignal): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { signal })
  if (!response.ok) {
    throw new Error(`GitHub user request failed (${response.status})`)
  }
  return (await response.json()) as GitHubUser
}

export async function fetchGitHubRepos(username: string, signal?: AbortSignal): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`,
    { signal },
  )
  if (!response.ok) {
    throw new Error(`GitHub repos request failed (${response.status})`)
  }
  return (await response.json()) as GitHubRepo[]
}

export function languageCounts(repos: GitHubRepo[]): { language: string; count: number }[] {
  const map = new Map<string, number>()
  for (const repo of repos) {
    if (!repo.language) continue
    map.set(repo.language, (map.get(repo.language) ?? 0) + 1)
  }
  return [...map.entries()]
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)
}

const devopsHints = [
  'docker',
  'k8s',
  'kubernetes',
  'terraform',
  'aws',
  'ci',
  'cd',
  'devops',
  'linux',
  'pipeline',
  'nginx',
  'compose',
]

export function isDevOpsRepo(repo: GitHubRepo): boolean {
  const hay = `${repo.name} ${repo.description ?? ''} ${(repo.topics ?? []).join(' ')}`.toLowerCase()
  return devopsHints.some((hint) => hay.includes(hint))
}
