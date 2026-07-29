import { useCallback, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from './utils'
import { ToastContext } from './toast-context'

let toastId = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback(
    ({ title, description, variant = 'default', duration = 3200 } = {}) => {
      const id = ++toastId
      setToasts((prev) => [...prev, { id, title, description, variant }])
      window.setTimeout(() => dismiss(id), duration)
      return id
    },
    [dismiss],
  )

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss])

  return (
    <ToastContext.Provider value={value}>
      {children}
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            className="pointer-events-none fixed right-4 bottom-4 z-[110] flex w-[min(100vw-2rem,24rem)] flex-col gap-2.5"
            aria-live="polite"
            aria-relevant="additions"
          >
            {toasts.map((item) => (
              <div
                key={item.id}
                role="status"
                className={cn(
                  'pointer-events-auto rounded-[var(--ok-radius)] border px-4 py-3 shadow-lg backdrop-blur',
                  'animate-[ok-toast-in_200ms_var(--ok-ease)]',
                  item.variant === 'accent'
                    ? 'border-[color-mix(in_srgb,var(--ok-accent)_35%,transparent)] bg-[var(--ok-accent-soft)] text-[var(--ok-accent)]'
                    : item.variant === 'danger'
                      ? 'border-[color-mix(in_srgb,var(--ok-danger)_35%,transparent)] bg-[var(--ok-danger-soft)] text-[var(--ok-danger)]'
                      : 'border-[var(--ok-border)] bg-[var(--ok-surface)] text-[var(--ok-fg)] shadow-md',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {item.title && (
                      <p className="text-sm font-medium">{item.title}</p>
                    )}
                    {item.description && (
                      <p className="mt-0.5 text-[13px] opacity-70">{item.description}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => dismiss(item.id)}
                    className="text-xs text-[var(--ok-muted)] hover:text-[var(--ok-fg-soft)]"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ))}
          </div>,
          document.body,
        )}
      <style>{`
        @keyframes ok-toast-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToastContext.Provider>
  )
}
