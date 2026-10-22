type FlowDiagramProps = {
  nodes: string[]
  horizontal?: boolean
}

export function FlowDiagram({ nodes, horizontal = false }: FlowDiagramProps) {
  return (
    <ol
      className={`flex ${horizontal ? 'flex-row flex-wrap items-center gap-2' : 'flex-col items-stretch gap-1'}`}
    >
      {nodes.map((node, index) => (
        <li key={node} className={`flex ${horizontal ? 'flex-row items-center gap-2' : 'flex-col items-center'}`}>
          <div className="w-full rounded-md border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-center font-mono text-sm text-[var(--text)]">
            {node}
          </div>
          {index < nodes.length - 1 ? (
            <span className="py-1 font-mono text-[var(--accent)]" aria-hidden>
              {horizontal ? '→' : '↓'}
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}
