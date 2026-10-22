import { useEffect, useState } from 'react'

export function useResumeAvailable(path: string) {
  const [available, setAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(path, { method: 'GET' })
      .then((response) => {
        if (cancelled) return
        const type = response.headers.get('content-type') ?? ''
        const looksLikePdf =
          response.ok && (type.includes('pdf') || path.endsWith('.pdf')) && !type.includes('text/html')
        setAvailable(Boolean(looksLikePdf && response.ok))
      })
      .catch(() => {
        if (!cancelled) setAvailable(false)
      })
    return () => {
      cancelled = true
    }
  }, [path])

  return available
}
