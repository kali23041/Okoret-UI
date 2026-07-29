import { useEffect, useId, useRef, useState } from 'react'
import { cn, focusRing } from './utils'

export function Dropdown({
  label = 'Menu',
  items = [],
  onSelect,
  className,
  align = 'left',
}) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const rootRef = useRef(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return undefined

    function onPointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setActiveIndex((i) => (i + 1) % items.length)
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActiveIndex((i) => (i - 1 + items.length) % items.length)
      } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        const item = items[activeIndex]
        if (item && !item.disabled) {
          onSelect?.(item)
          setOpen(false)
        }
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, items, activeIndex, onSelect])

  return (
    <div ref={rootRef} className={cn('relative inline-block', className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          setOpen((v) => !v)
          setActiveIndex(0)
        }}
        className={cn(
          'inline-flex h-10 items-center gap-2 rounded-[var(--ok-radius)] border border-[var(--ok-border)] bg-[var(--ok-surface-2)] px-3.5 text-sm text-[var(--ok-fg)]',
          'transition-colors hover:bg-[var(--ok-surface)]',
          focusRing,
        )}
      >
        {label}
        <svg
          className={cn('h-4 w-4 text-[var(--ok-muted)] transition-transform', open && 'rotate-180')}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          className={cn(
            'absolute z-50 mt-1.5 min-w-[11rem] overflow-hidden rounded-[var(--ok-radius)] border border-[var(--ok-border)] bg-[var(--ok-surface)] p-1.5 shadow-xl',
            align === 'right' ? 'right-0' : 'left-0',
          )}
        >
          {items.map((item, index) => (
            <li key={item.value ?? item.label} role="none">
              <button
                type="button"
                role="menuitem"
                disabled={item.disabled}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  if (item.disabled) return
                  onSelect?.(item)
                  setOpen(false)
                }}
                className={cn(
                  'flex w-full items-center rounded-md px-3 py-2 text-left text-[13px] transition-colors',
                  item.disabled
                    ? 'cursor-not-allowed text-[var(--ok-muted)]'
                    : index === activeIndex
                      ? 'bg-[var(--ok-surface-2)] text-[var(--ok-fg)]'
                      : 'text-[var(--ok-fg-soft)] hover:bg-[color-mix(in_srgb,var(--ok-border)_80%,transparent)]',
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
