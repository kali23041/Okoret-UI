import { DocsLayout } from '../components/DocsLayout'
import { Link } from 'react-router-dom'

export default function DesignPrinciples() {
  return (
    <DocsLayout>
      <section className="space-y-10">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--ok-fg)] sm:text-4xl">
            Design principles
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--ok-fg-soft)]">
            The philosophy behind Okoret UI balances minimalism with motion. Components are
            composable, accessible, and predictable.
          </p>
        </div>

        <div className="grid gap-8">
          <div>
            <h2 className="text-xl font-medium text-[var(--ok-fg)]">1. Clarity over cleverness</h2>
            <p className="mt-2 text-sm text-[var(--ok-muted)]">
              APIs should be obvious. Favor explicit props over magic and side effects.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-[var(--ok-fg)]">2. Motion with purpose</h2>
            <p className="mt-2 text-sm text-[var(--ok-muted)]">
              Animations guide attention and reinforce hierarchy—never distract. Respect{' '}
              <code className="rounded bg-[var(--ok-surface)] px-1 text-[13px]">prefers-reduced-motion</code>.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-[var(--ok-fg)]">3. Accessible by default</h2>
            <p className="mt-2 text-sm text-[var(--ok-muted)]">
              Keyboard support, focus rings, and ARIA patterns ship with every primitive.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-[var(--ok-fg)]">4. Token-driven theming</h2>
            <p className="mt-2 text-sm text-[var(--ok-muted)]">
              Design scales via semantic tokens. See{' '}
              <Link to="/tokens" className="text-[var(--ok-accent)] hover:underline">
                Tokens
              </Link>
              .
            </p>
            <pre className="mt-3 overflow-auto rounded-md border border-[var(--ok-border)] bg-[var(--ok-code-bg)] p-3 text-[13px] text-[var(--ok-fg-soft)]">
              <code>{`[data-theme="light"] { --ok-bg: #f4f7fb; --ok-accent: #0891b2; }
[data-theme="dark"]  { --ok-bg: #0a0e14; --ok-accent: #22d3ee; }`}</code>
            </pre>
          </div>
          <div>
            <h2 className="text-xl font-medium text-[var(--ok-fg)]">5. Performance as a feature</h2>
            <p className="mt-2 text-sm text-[var(--ok-muted)]">
              Prefer CSS motion, small modules, and no runtime style engines.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-[var(--ok-fg)]">6. Controlled surface area</h2>
            <p className="mt-2 text-sm text-[var(--ok-muted)]">
              Ship fewer, better components. Docs only list what exists.
            </p>
          </div>
        </div>
      </section>
    </DocsLayout>
  )
}
