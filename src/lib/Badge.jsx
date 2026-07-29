import { cn } from './utils'

const variants = {
  default: 'border border-[var(--ok-border)] bg-[var(--ok-surface)] text-[var(--ok-fg-soft)]',
  accent: 'border border-[color-mix(in_srgb,var(--ok-accent)_45%,transparent)] bg-[var(--ok-accent-soft)] text-[var(--ok-accent)]',
  muted: 'border border-transparent bg-[var(--ok-surface)] text-[var(--ok-muted)]',
  danger: 'border border-[color-mix(in_srgb,var(--ok-danger)_35%,transparent)] bg-[var(--ok-danger-soft)] text-[var(--ok-danger)]',
}

export function Badge({ variant = 'default', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide',
        variants[variant] || variants.default,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
