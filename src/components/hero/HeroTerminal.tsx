import { useEffect, useState } from 'react'
import { heroTerminalLines } from '../../data/profile'

export function HeroTerminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState<'command' | 'output' | 'pause'>('command')

  const current = heroTerminalLines[lineIndex]
  const done = lineIndex >= heroTerminalLines.length

  useEffect(() => {
    if (done || !current) return

    if (phase === 'command') {
      if (charIndex < current.command.length) {
        const timer = window.setTimeout(() => setCharIndex((value) => value + 1), 45)
        return () => window.clearTimeout(timer)
      }
      const timer = window.setTimeout(() => {
        setPhase('output')
        setCharIndex(0)
      }, 180)
      return () => window.clearTimeout(timer)
    }

    if (phase === 'output') {
      if (charIndex < current.output.length) {
        const timer = window.setTimeout(() => setCharIndex((value) => value + 1), 18)
        return () => window.clearTimeout(timer)
      }
      const timer = window.setTimeout(() => setPhase('pause'), 280)
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(() => {
      setLineIndex((value) => value + 1)
      setCharIndex(0)
      setPhase('command')
    }, 220)
    return () => window.clearTimeout(timer)
  }, [charIndex, current, done, phase])

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--terminal)] shadow-[0_0_0_1px_var(--line)]">
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-2">
        <span className="size-2.5 rounded-full bg-[#f87171]" />
        <span className="size-2.5 rounded-full bg-[#fbbf24]" />
        <span className="size-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-2 font-mono text-[11px] text-slate-400">subrata@cloud:~</span>
      </div>
      <pre className="scanline min-h-[280px] overflow-x-auto p-4 font-mono text-xs leading-6 text-[var(--terminal-text)] sm:text-sm">
        {heroTerminalLines.slice(0, lineIndex).map((line) => (
          <span key={line.command}>
            {`$ ${line.command}\n`}
            {`${line.output}\n\n`}
          </span>
        ))}
        {!done && current ? (
          <span>
            {`$ ${current.command.slice(0, phase === 'command' ? charIndex : current.command.length)}\n`}
            {phase !== 'command' ? `${current.output.slice(0, phase === 'output' ? charIndex : current.output.length)}\n\n` : null}
          </span>
        ) : null}
        <span className="inline-block h-4 w-2 animate-pulse bg-[var(--accent)] motion-reduce:animate-none"> </span>
      </pre>
    </div>
  )
}
