import { type FormEvent, useRef, useState } from 'react'
import { SquareTerminal, X } from 'lucide-react'
import { terminalCommands, terminalWelcome } from '../../data/terminal'

export function InteractiveTerminal() {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState<string[]>([terminalWelcome])
  const inputRef = useRef<HTMLInputElement>(null)

  const run = (raw: string) => {
    const command = raw.trim().toLowerCase()
    if (!command) return
    if (command === 'clear') {
      setLines([])
      return
    }
    const output = terminalCommands[command] ?? `Command not found: ${command}. Type help.`
    setLines((current) => [...current, `$ ${raw}`, output])
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = String(new FormData(event.currentTarget).get('cmd') ?? '')
    run(value)
    event.currentTarget.reset()
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2">
      {open ? (
        <div className="pointer-events-auto w-[min(100vw-2rem,420px)] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--terminal)] shadow-2xl">
          <div className="flex items-center justify-between border-b border-[var(--line)] px-3 py-2">
            <span className="font-mono text-xs text-slate-400">optional terminal</span>
            <button type="button" aria-label="Close terminal" onClick={() => setOpen(false)}>
              <X size={14} className="text-slate-400" />
            </button>
          </div>
          <div className="max-h-72 overflow-auto p-3 font-mono text-xs leading-5 text-[var(--terminal-text)]">
            {lines.map((line, index) => (
              <pre key={`${line}-${index}`} className="mb-2 whitespace-pre-wrap">
                {line}
              </pre>
            ))}
          </div>
          <form onSubmit={onSubmit} className="border-t border-[var(--line)] p-2">
            <label className="flex items-center gap-2 font-mono text-xs text-[var(--terminal-text)]">
              <span>$</span>
              <input
                ref={inputRef}
                name="cmd"
                autoComplete="off"
                className="w-full bg-transparent outline-none"
                placeholder="help"
              />
            </label>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2 text-xs text-[var(--muted)] shadow-lg"
        onClick={() => {
          setOpen((value) => !value)
          window.setTimeout(() => inputRef.current?.focus(), 50)
        }}
        aria-expanded={open}
        aria-label="Toggle optional command terminal"
      >
        <SquareTerminal size={14} />
        Terminal
      </button>
    </div>
  )
}
