import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DocsLayout } from '../components/DocsLayout'
import { EFFECT_CATEGORIES, EFFECTS } from '@okoret/ui'

export default function EffectsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return EFFECTS.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.slug.includes(q) ||
        item.description.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <DocsLayout>
      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--ok-accent)]/80">Gallery</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--ok-fg)] sm:text-4xl">
            Effects
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--ok-fg-soft)]">
            {EFFECTS.length} interactive motion experiments — 3D cards, magnetic buttons, glow
            borders, particles, and more. Core primitives stay separate; this gallery is for the
            wild stuff.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search effects…"
            className="w-full rounded-md border border-[var(--ok-border)] bg-[var(--ok-bg)] px-3.5 py-2.5 text-sm text-[var(--ok-fg)] placeholder-[var(--ok-muted)] outline-none focus:ring-1 focus:ring-[var(--ok-accent)] sm:max-w-xs"
          />
          <div className="flex flex-wrap gap-2">
            {['All', ...EFFECT_CATEGORIES].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={[
                  'rounded-full border px-3 py-1.5 text-xs transition-colors',
                  category === cat
                    ? 'border-[color-mix(in_srgb,var(--ok-accent)_45%,transparent)] bg-[var(--ok-accent-soft)] text-[var(--ok-accent)]'
                    : 'border-[var(--ok-border)] text-[var(--ok-muted)] hover:border-[var(--ok-border)] hover:text-[var(--ok-fg)]',
                ].join(' ')}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="text-[13px] text-[var(--ok-muted)]">
          Showing {filtered.length} of {EFFECTS.length}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              to={`/effects/${item.slug}`}
              className="group overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--ok-accent)_45%,transparent)] hover:shadow-[0_0_40px_rgba(8, 145, 178,0.08)]"
            >
              <div className="flex min-h-[12rem] items-center justify-center border-b border-[var(--ok-border)] bg-[radial-gradient(ellipse_at_top,rgba(8, 145, 178,0.08),transparent_55%)] p-4">
                <div className="pointer-events-none scale-95 opacity-95 transition-transform duration-300 group-hover:scale-100">
                  <item.Component />
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-[var(--ok-fg)]">{item.name}</p>
                <p className="mt-0.5 text-xs text-[var(--ok-muted)]">{item.description}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--ok-muted)]">
                  {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {!filtered.length && (
          <p className="py-10 text-center text-sm text-[var(--ok-muted)]">No effects match.</p>
        )}
      </section>
    </DocsLayout>
  )
}
