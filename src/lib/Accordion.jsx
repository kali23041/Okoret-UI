import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { cn } from './utils'

const AccordionContext = createContext(null)

export function Accordion({
  type = 'single',
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  children,
  ...props
}) {
  const [uncontrolled, setUncontrolled] = useState(
    type === 'multiple'
      ? Array.isArray(defaultValue)
        ? defaultValue
        : []
      : defaultValue ?? null,
  )
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolled

  const setValue = useCallback(
    (next) => {
      if (!isControlled) setUncontrolled(next)
      onValueChange?.(next)
    },
    [isControlled, onValueChange],
  )

  const toggle = useCallback(
    (itemValue) => {
      if (type === 'multiple') {
        const list = Array.isArray(value) ? value : []
        const next = list.includes(itemValue)
          ? list.filter((v) => v !== itemValue)
          : [...list, itemValue]
        setValue(next)
        return
      }
      setValue(value === itemValue ? null : itemValue)
    },
    [setValue, type, value],
  )

  const isOpen = useCallback(
    (itemValue) => {
      if (type === 'multiple') {
        return Array.isArray(value) && value.includes(itemValue)
      }
      return value === itemValue
    },
    [type, value],
  )

  const ctx = useMemo(() => ({ toggle, isOpen }), [toggle, isOpen])

  return (
    <AccordionContext.Provider value={ctx}>
      <div className={cn('space-y-2', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ value, className, children, ...props }) {
  const ctx = useContext(AccordionContext)
  const open = ctx?.isOpen(value)
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={cn(
        'group overflow-hidden rounded-[var(--ok-radius)] border border-[var(--ok-border)] bg-[var(--ok-surface)]/60 transition-colors duration-200',
        open && 'border-[var(--ok-border)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function AccordionTrigger({ value, className, children, ...props }) {
  const ctx = useContext(AccordionContext)
  const open = ctx?.isOpen(value)

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => ctx?.toggle(value)}
      className={cn(
        'flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm text-[var(--ok-fg)]',
        'transition-colors hover:bg-[var(--ok-bg)]/80',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <svg
        className={cn(
          'h-5 w-5 shrink-0 text-[var(--ok-muted)] transition-transform duration-200',
          open && 'rotate-180',
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export function AccordionContent({ value, className, children, ...props }) {
  const ctx = useContext(AccordionContext)
  const open = ctx?.isOpen(value)

  return (
    <div
      role="region"
      aria-hidden={!open}
      className={cn(
        'grid transition-all duration-200 ease-[var(--ok-ease)]',
        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        !open && 'pointer-events-none',
      )}
      {...props}
    >
      <div className="overflow-hidden">
        <div className={cn('px-4 pb-4 text-sm text-[var(--ok-fg-soft)]', className)}>
          {children}
        </div>
      </div>
    </div>
  )
}
