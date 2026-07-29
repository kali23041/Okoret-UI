import { cn, focusRing } from './utils'
import { Loader } from './Loader'

const variants = {
  solid:
    'bg-[var(--ok-fg)] text-[var(--ok-bg)] hover:opacity-90 disabled:opacity-50',
  outline:
    'border border-[var(--ok-border)] bg-[var(--ok-surface)] text-[var(--ok-fg)] hover:bg-[var(--ok-surface-2)] disabled:opacity-50',
  ghost:
    'bg-transparent text-[var(--ok-fg)] hover:bg-[var(--ok-surface-2)] disabled:opacity-50',
  accent:
    'bg-[var(--ok-accent)] text-[var(--ok-accent-fg)] hover:brightness-110 disabled:opacity-50',
}

const sizes = {
  sm: 'h-9 px-3 text-[13px]',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-[15px]',
}

export function Button({
  variant = 'solid',
  size = 'md',
  loading = false,
  disabled,
  className,
  children,
  ...props
}) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[var(--ok-radius)] font-medium transition-all duration-200 ease-[var(--ok-ease)]',
        'hover:-translate-y-px active:translate-y-0',
        focusRing,
        variants[variant] || variants.solid,
        sizes[size] || sizes.md,
        className,
      )}
      {...props}
    >
      {loading && <Loader size="sm" className="border-current/30 border-t-current" />}
      {children}
    </button>
  )
}
