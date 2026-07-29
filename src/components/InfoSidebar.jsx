import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { effectsByCategory } from '@okoret/ui'

const CORE_NAV = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    defaultOpen: true,
    items: [
      { to: '/components', label: 'Introduction' },
      { to: '/installation', label: 'Installation' },
      { to: '/design-principles', label: 'Design Principles' },
      { to: '/tokens', label: 'Tokens' },
      { to: '/playground', label: 'Playground' },
      { to: '/effects', label: 'Effects gallery' },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    defaultOpen: true,
    items: [
      { to: '/components/accordion', label: 'Accordion' },
      { to: '/components/badge', label: 'Badge' },
      { to: '/components/button', label: 'Button' },
      { to: '/components/dialog', label: 'Dialog' },
      { to: '/components/dropdown', label: 'Dropdown' },
      { to: '/components/input', label: 'Input' },
      { to: '/components/loader', label: 'Loader' },
      { to: '/components/switch', label: 'Switch' },
      { to: '/components/toast', label: 'Toast' },
    ],
  },
]

function linkClass({ isActive }) {
  return [
    'block rounded-md px-2.5 py-2 text-[13px] transition-colors',
    isActive
      ? 'bg-[color-mix(in_srgb,var(--ok-border)_80%,transparent)] text-[var(--ok-fg)]'
      : 'text-[var(--ok-fg-soft)] hover:bg-[color-mix(in_srgb,var(--ok-border)_70%,transparent)]',
  ].join(' ')
}

function NavSection({ section, query }) {
  const [open, setOpen] = useState(section.defaultOpen)
  const filtered = section.items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  )

  if (query && filtered.length === 0) return null

  const isOpen = query ? true : open

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between px-2.5 pt-2.5 text-left text-[11px] uppercase tracking-[0.2em] text-[var(--ok-muted)]"
        aria-expanded={isOpen}
      >
        {section.label}
        <span
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        >
          ▾
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="max-h-64 overflow-y-auto overflow-x-hidden">
          {filtered.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/components' || item.to === '/effects'}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export function InfoSidebar() {
  const [query, setQuery] = useState('')

  const nav = useMemo(() => {
    const effectSections = effectsByCategory().map((group) => ({
      id: `fx-${group.category}`,
      label: group.category,
      defaultOpen: false,
      items: group.items.map((item) => ({
        to: `/effects/${item.slug}`,
        label: item.name,
      })),
    }))
    return [...CORE_NAV, ...effectSections]
  }, [])

  const hasResults = useMemo(() => {
    const q = query.toLowerCase()
    if (!q) return true
    return nav.some((section) =>
      section.items.some((item) => item.label.toLowerCase().includes(q)),
    )
  }, [query, nav])

  return (
    <aside className="h-max max-h-[calc(100vh-5rem)] overflow-y-auto rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-3 md:sticky md:top-16">
      <p className="px-2.5 text-[11px] uppercase tracking-[0.2em] text-[var(--ok-muted)]">Explore</p>
      <div className="mt-2">
        <label className="sr-only" htmlFor="docs-search">
          Search documentation
        </label>
        <input
          id="docs-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          className="w-full rounded-md border border-[var(--ok-border)] bg-[var(--ok-bg)] px-2.5 py-2 text-[13px] text-[var(--ok-fg)] placeholder-[var(--ok-muted)] outline-none focus:ring-1 focus:ring-[var(--ok-accent)]"
        />
      </div>
      <nav className="mt-2 space-y-1" aria-label="Documentation">
        {nav.map((section) => (
          <NavSection key={section.id} section={section} query={query} />
        ))}
        {!hasResults && (
          <p className="px-2.5 py-3 text-[13px] text-[var(--ok-muted)]">No matches.</p>
        )}
      </nav>
    </aside>
  )
}
