import { cn } from './utils'

const sizes = {
  sm: 'h-4 w-4 border',
  md: 'h-6 w-6 border-2',
  lg: 'h-9 w-9 border-2',
}

export function Loader({ size = 'md', className, label = 'Loading', ...props }) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        'inline-block animate-spin rounded-full border-[var(--ok-border)] border-t-[var(--ok-fg)]',
        sizes[size] || sizes.md,
        className,
      )}
      {...props}
    />
  )
}
