import { Link, NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

function navClass({ isActive }) {
  return [
    'inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs transition-colors',
    isActive
      ? 'border-[color-mix(in_srgb,var(--ok-accent)_45%,transparent)] bg-[var(--ok-accent-soft)] text-[var(--ok-accent)]'
      : 'border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] text-[var(--ok-fg-soft)] hover:bg-[var(--ok-surface-2)]',
  ].join(' ')
}

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--ok-border)] backdrop-blur"
      style={{ background: 'var(--ok-header-bg)', boxShadow: '0 1px 0 var(--ok-glow)' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="text-[11px] tracking-[0.35em] text-[var(--ok-muted)]">OKORET</span>
          <span className="text-base font-semibold text-[var(--ok-fg)]">UI</span>
        </Link>
        <nav className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 rounded-full border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)] px-2.5 py-1.5 md:flex">
            <span className="text-[11px] text-[var(--ok-muted)]">import</span>
            <code className="text-xs text-[var(--ok-fg)]">@okoret/ui</code>
          </div>
          <NavLink to="/components" className={navClass}>
            Components
          </NavLink>
          <NavLink to="/effects" className={navClass}>
            Effects
          </NavLink>
          <NavLink to="/tokens" className={navClass}>
            Tokens
          </NavLink>
          <NavLink
            to="/playground"
            className={({ isActive }) => `${navClass({ isActive })} hidden sm:inline-flex`}
          >
            Playground
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
