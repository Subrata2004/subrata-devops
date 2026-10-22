import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
  type?: 'button' | 'submit'
  download?: boolean
  external?: boolean
}

const variants = {
  primary:
    'bg-[var(--accent)] text-[#041018] hover:brightness-110 dark:text-[#041018]',
  secondary:
    'border border-[var(--line)] bg-[var(--bg-elevated)] text-[var(--text)] hover:border-[var(--accent)]',
  ghost: 'text-[var(--muted)] hover:text-[var(--text)]',
}

export function Button({
  children,
  href,
  onClick,
  variant = 'secondary',
  disabled,
  type = 'button',
  download,
  external,
}: ButtonProps) {
  const className = `inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium tracking-wide transition ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-50`

  if (href && !disabled) {
    return (
      <a
        className={className}
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
