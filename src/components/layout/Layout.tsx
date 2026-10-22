import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { InteractiveTerminal } from '../terminal/InteractiveTerminal'
import { ScrollToHash } from './ScrollToHash'

export function Layout() {
  return (
    <div className="min-h-svh bg-[var(--bg)] text-[var(--text)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[#041018]"
      >
        Skip to content
      </a>
      <ScrollToHash />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <InteractiveTerminal />
    </div>
  )
}
