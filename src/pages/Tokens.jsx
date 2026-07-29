import { DocsLayout } from '../components/DocsLayout'
import { useTheme } from '@okoret/ui'

const TOKENS = [
  { name: '--ok-bg', swatch: 'var(--ok-bg)' },
  { name: '--ok-fg', swatch: 'var(--ok-fg)' },
  { name: '--ok-fg-soft', swatch: 'var(--ok-fg-soft)' },
  { name: '--ok-muted', swatch: 'var(--ok-muted)' },
  { name: '--ok-border', swatch: 'var(--ok-border)' },
  { name: '--ok-surface', swatch: 'var(--ok-surface)' },
  { name: '--ok-surface-2', swatch: 'var(--ok-surface-2)' },
  { name: '--ok-accent', swatch: 'var(--ok-accent)' },
  { name: '--ok-accent-fg', swatch: 'var(--ok-accent-fg)' },
  { name: '--ok-danger', swatch: 'var(--ok-danger)' },
]

export default function TokensPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <DocsLayout>
      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--ok-fg)] sm:text-4xl">
              Tokens
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--ok-fg-soft)]">
              Semantic CSS variables power both light and dark themes. Toggle the theme to see live
              swatches update.
            </p>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[var(--ok-border)] bg-[var(--ok-surface)] px-4 py-2 text-sm text-[var(--ok-fg)] hover:bg-[var(--ok-surface-2)]"
          >
            Active: {theme}
          </button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TOKENS.map((token) => (
            <div
              key={token.name}
              className="overflow-hidden rounded-lg border border-[var(--ok-border)] bg-[var(--ok-surface)] shadow-sm"
            >
              <div
                className="h-16 border-b border-[var(--ok-border)]"
                style={{ background: token.swatch }}
              />
              <div className="px-3 py-2.5">
                <p className="font-mono text-[13px] text-[var(--ok-fg)]">{token.name}</p>
                <p className="mt-0.5 font-mono text-[11px] text-[var(--ok-muted)]">
                  Resolves from data-theme=&quot;{theme}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-[var(--ok-border)] bg-[var(--ok-surface)] p-4 shadow-sm">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--ok-muted)]">Usage</p>
          <pre className="mt-3 overflow-auto rounded-md border border-[var(--ok-border)] bg-[var(--ok-code-bg)] p-3 text-[13px] text-[var(--ok-fg-soft)]">
            <code>{`html[data-theme="light"] { /* cool arctic tokens */ }
html[data-theme="dark"]  { /* midnight cyan tokens */ }

.button {
  background: var(--ok-accent);
  color: var(--ok-accent-fg);
}`}</code>
          </pre>
        </div>
      </section>
    </DocsLayout>
  )
}
