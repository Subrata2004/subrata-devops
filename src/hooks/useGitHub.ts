import { useEffect, useState } from 'react'
import {
  fetchGitHubRepos,
  fetchGitHubUser,
  isDevOpsRepo,
  languageCounts,
  type GitHubRepo,
  type GitHubUser,
} from '../lib/github'

type GitHubState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | {
      status: 'ready'
      user: GitHubUser
      repos: GitHubRepo[]
      languages: { language: string; count: number }[]
      devopsRepos: GitHubRepo[]
    }

export function useGitHub(username: string) {
  const [state, setState] = useState<GitHubState>(() =>
    username ? { status: 'loading' } : { status: 'idle' },
  )

  useEffect(() => {
    if (!username) {
      return
    }

    const controller = new AbortController()

    Promise.all([fetchGitHubUser(username, controller.signal), fetchGitHubRepos(username, controller.signal)])
      .then(([user, repos]) => {
        if (controller.signal.aborted) return
        const owned = repos.filter((repo) => !repo.fork)
        setState({
          status: 'ready',
          user,
          repos: owned,
          languages: languageCounts(owned),
          devopsRepos: owned.filter(isDevOpsRepo),
        })
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        if (error instanceof DOMException && error.name === 'AbortError') return
        const message = error instanceof Error ? error.message : 'GitHub request failed'
        setState({ status: 'error', message })
      })

    return () => controller.abort()
  }, [username])

  return state
}
