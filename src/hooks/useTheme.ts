import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

export type Theme = 'dark' | 'light'

function readTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.classList.toggle('light', theme === 'light')
  root.style.colorScheme = theme
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => readTheme())

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    applyTheme(readTheme())
  }, [])

  const setTheme = (next: Theme) => {
    setThemeState(next)
  }

  const toggle = () => {
    setThemeState((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, setTheme, toggle }
}
