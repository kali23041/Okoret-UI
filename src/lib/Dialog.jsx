import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn, focusRing } from './utils'
import { Button } from './Button'

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
}) {
  const titleId = useId()
  const descId = useId()
  const panelRef = useRef(null)
  const previousFocus = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    previousFocus.current = document.activeElement
    const panel = panelRef.current
    const focusable = panel?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    focusable?.[0]?.focus()

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onOpenChange?.(false)
        return
      }
      if (event.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (previousFocus.current instanceof HTMLElement) {
        previousFocus.current.focus()
      }
    }
  }, [open, onOpenChange])

  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-[var(--ok-fg)]/60 backdrop-blur-[2px] transition-opacity"
        onClick={() => onOpenChange?.(false)}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descId : undefined}
        className={cn(
          'relative z-10 w-full max-w-md rounded-[var(--ok-radius-lg)] border border-[var(--ok-border)] bg-[var(--ok-surface)] p-6 shadow-2xl',
          'animate-[ok-dialog-in_180ms_var(--ok-ease)]',
          className,
        )}
      >
        {(title || description) && (
          <div className="mb-5 space-y-1.5">
            {title && (
              <h2 id={titleId} className="text-base font-semibold text-[var(--ok-fg)]">
                {title}
              </h2>
            )}
            {description && (
              <p id={descId} className="text-sm text-[var(--ok-muted)]">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={() => onOpenChange?.(false)}>
            Close
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes ok-dialog-in {
          from { opacity: 0; transform: translateY(6px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>,
    document.body,
  )
}

export function DialogTrigger({ children, onOpen }) {
  return (
    <span className={focusRing}>
      {typeof children === 'function' ? children({ open: onOpen }) : children}
    </span>
  )
}
