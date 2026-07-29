import { useId } from 'react'
import { cn, focusRing } from './utils'

export function Input({
  label,
  hint,
  error,
  className,
  id,
  ...props
}) {
  const autoId = useId()
  const inputId = id || autoId
  const hintId = `${inputId}-hint`
  const errorId = `${inputId}-error`

  return (
    <div className={cn('flex w-full max-w-sm flex-col gap-2', className)}>
      {label && (
        <label htmlFor={inputId} className="text-[13px] font-medium text-[var(--ok-fg-soft)]">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        className={cn(
          'h-10 w-full rounded-[var(--ok-radius)] border bg-[var(--ok-surface-2)] px-3.5 text-sm text-[var(--ok-fg)] placeholder:text-[var(--ok-muted)]',
          'transition-colors duration-200',
          error ? 'border-[var(--ok-danger)]' : 'border-[var(--ok-border)] hover:border-[var(--ok-border)]',
          focusRing,
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} className="text-xs text-[var(--ok-danger)]">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-xs text-[var(--ok-muted)]">
          {hint}
        </p>
      ) : null}
    </div>
  )
}
