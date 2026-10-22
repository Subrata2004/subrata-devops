import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="font-mono text-sm text-[var(--accent)]">404</p>
      <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
      <Link to="/" className="mt-6 inline-block text-[var(--accent)]">
        Return home
      </Link>
    </div>
  )
}
