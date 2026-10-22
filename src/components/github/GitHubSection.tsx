import { Section } from '../ui/Section'
import { useGitHub } from '../../hooks/useGitHub'
import { getSiteEnv } from '../../lib/env'

export function GitHubSection() {
  const { githubUsername } = getSiteEnv()
  const state = useGitHub(githubUsername)

  return (
    <Section
      id="github"
      kicker="GitHub"
      title="Public work, loaded only when configured"
      description="Set VITE_GITHUB_USERNAME to fetch real public profile data. Empty usernames show a placeholder — never invented repositories."
    >
      {!githubUsername ? (
        <div className="rounded-xl border border-dashed border-[var(--line)] p-8">
          <p className="font-mono text-sm text-[var(--accent)]">VITE_GITHUB_USERNAME is empty</p>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Add your GitHub username in <code className="font-mono">.env</code> to load repositories, languages and
            profile metadata from the public API. Contribution heatmaps are not scraped; activity belongs on GitHub
            itself.
          </p>
        </div>
      ) : null}

      {state.status === 'loading' ? (
        <p className="font-mono text-sm text-[var(--muted)]">Loading public GitHub data…</p>
      ) : null}

      {state.status === 'error' ? (
        <p className="text-sm text-red-400">{state.message}. Showing no fake data.</p>
      ) : null}

      {state.status === 'ready' ? (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
            <img src={state.user.avatar_url} alt="" width={64} height={64} className="rounded-full" />
            <div>
              <h3 className="text-lg font-semibold">{state.user.name ?? state.user.login}</h3>
              <p className="text-sm text-[var(--muted)]">{state.user.bio ?? 'Public GitHub profile'}</p>
              <a
                className="mt-2 inline-block font-mono text-sm text-[var(--accent)]"
                href={state.user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {state.user.html_url}
              </a>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {state.user.public_repos} public repos · {state.user.followers} followers
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">Languages</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {state.languages.length === 0 ? (
                <li className="text-sm text-[var(--muted)]">No primary languages reported on public repos.</li>
              ) : (
                state.languages.map((item) => (
                  <li key={item.language} className="rounded border border-[var(--line)] px-2 py-1 font-mono text-xs">
                    {item.language} ({item.count})
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">
              Repositories matching DevOps keywords
            </h3>
            <ul className="mt-3 grid gap-3 md:grid-cols-2">
              {state.devopsRepos.length === 0 ? (
                <li className="text-sm text-[var(--muted)]">
                  No public repo names/descriptions matched Docker, Kubernetes, Terraform, AWS or CI keywords.
                </li>
              ) : (
                state.devopsRepos.slice(0, 8).map((repo) => (
                  <li key={repo.id} className="rounded-lg border border-[var(--line)] p-4">
                    <a className="font-medium text-[var(--text)]" href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                    <p className="mt-1 text-sm text-[var(--muted)]">{repo.description ?? 'No description'}</p>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase">Recent public repositories</h3>
            <ul className="mt-3 divide-y divide-[var(--line)] rounded-xl border border-[var(--line)]">
              {state.repos.slice(0, 8).map((repo) => (
                <li key={repo.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
                  <a href={repo.html_url} className="font-mono text-sm" target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                  <span className="text-xs text-[var(--muted)]">
                    {repo.language ?? 'n/a'} · updated {repo.updated_at.slice(0, 10)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Contribution activity: view the calendar on the GitHub profile above. This site does not generate a fake
              graph.
            </p>
          </div>
        </div>
      ) : null}
    </Section>
  )
}
