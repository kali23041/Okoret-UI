import { useId } from 'react'
import { cn, focusRing } from './utils'

export function Switch({
  checked = false,
  onCheckedChange,
  disabled = false,
  label,
  className,
  id,
  ...props
}) {
  const autoId = useId()
  const switchId = id || autoId

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5',
        disabled && 'opacity-50',
        className,
      )}
    >
      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange?.(!checked)}
        className={cn(
          'relative h-6 w-11 shrink-0 rounded-full border transition-colors duration-200',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          checked
            ? 'border-[color-mix(in_srgb,var(--ok-accent)_55%,transparent)] bg-[var(--ok-accent)]'
            : 'border-[var(--ok-border)] bg-[var(--ok-surface-2)]',
          focusRing,
        )}
        {...props}
      >
        <span
          aria-hidden
          className={cn(
            'absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-[var(--ok-surface)] shadow transition-transform duration-200',
            checked && 'translate-x-5',
          )}
        />
      </button>
      {label && (
        <label htmlFor={switchId} className="cursor-pointer text-sm text-[var(--ok-fg-soft)]">
          {label}
        </label>
      )}
    </div>
  )
}
