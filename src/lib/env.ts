export type SiteEnv = {
  githubUsername: string
  githubUrl: string
  linkedinUrl: string
  email: string
}

export function getSiteEnv(): SiteEnv {
  return {
    githubUsername: import.meta.env.VITE_GITHUB_USERNAME?.trim() ?? '',
    githubUrl: import.meta.env.VITE_GITHUB_URL?.trim() || 'YOUR_GITHUB',
    linkedinUrl: import.meta.env.VITE_LINKEDIN_URL?.trim() || 'YOUR_LINKEDIN',
    email: import.meta.env.VITE_EMAIL?.trim() || 'YOUR_EMAIL',
  }
}
