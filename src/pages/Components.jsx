import { Link } from 'react-router-dom'
import { DocsLayout } from '../components/DocsLayout'
import { Badge } from '@okoret/ui'

export default function ComponentsPage() {
  return (
    <DocsLayout>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--ok-fg)]">Components</h1>
          <p className="mt-1.5 text-[13px] text-[var(--ok-muted)]">
            Minimal, accessible primitives with motion-first UX.
          </p>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <Badge>v0.1.0</Badge>
          <Link
            to="/"
            className="rounded-full border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)] px-2.5 py-1 text-[11px] text-[var(--ok-fg-soft)] hover:bg-[color-mix(in_srgb,var(--ok-border)_70%,transparent)]"
          >
            Home
          </Link>
        </div>
      </div>

      <section className="space-y-10">
        <section id="how-it-works">
          <h2 className="text-[28px] font-semibold tracking-tight text-[var(--ok-fg)] sm:text-3xl">
            How it works
          </h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--ok-fg-soft)]">
            Okoret UI exposes small, composable primitives. Each primitive manages accessibility and
            state; you style with Tailwind and CSS tokens. No runtime theming engine—just React
            patterns you already know.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--ok-fg-soft)]">
            <li>Accessible defaults with keyboard support</li>
            <li>Zero runtime styling; compose with Tailwind</li>
            <li>Tiny API surface via local <code className="rounded bg-[var(--ok-surface)] px-1.5 py-0.5 text-[13px]">@okoret/ui</code> alias</li>
          </ul>
        </section>

        <section id="theming">
          <h2 className="text-[28px] font-semibold tracking-tight text-[var(--ok-fg)] sm:text-3xl">
            Theming
          </h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--ok-fg-soft)]">
            Components read semantic CSS variables so you can restyle without rewriting markup.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--ok-fg-soft)]">
            <li>
              Accent: <code className="rounded bg-[var(--ok-surface)] px-1.5 py-0.5 text-[13px]">--ok-accent</code>
            </li>
            <li>
              Surfaces: <code className="rounded bg-[var(--ok-surface)] px-1.5 py-0.5 text-[13px]">--ok-bg</code>,{' '}
              <code className="rounded bg-[var(--ok-surface)] px-1.5 py-0.5 text-[13px]">--ok-surface</code>
            </li>
            <li>
              See the <Link to="/tokens" className="text-[var(--ok-accent)] hover:underline">Tokens</Link> page for live swatches
            </li>
          </ul>
        </section>

        <section id="motion">
          <h2 className="text-[28px] font-semibold tracking-tight text-[var(--ok-fg)] sm:text-3xl">
            Motion & animation
          </h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--ok-fg-soft)]">
            Animations stay short and purposeful. Reduced-motion preferences are honored globally.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--ok-fg-soft)]">
            <li>Durations: 150–300ms</li>
            <li>Prefer transforms and opacity</li>
            <li>Token: <code className="rounded bg-[var(--ok-surface)] px-1.5 py-0.5 text-[13px]">--ok-motion</code></li>
          </ul>
        </section>

        <section id="usage">
          <h2 className="text-[28px] font-semibold tracking-tight text-[var(--ok-fg)] sm:text-3xl">
            Usage
          </h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--ok-fg-soft)]">
            Import from the local library alias (Vite resolves <code className="rounded bg-[var(--ok-surface)] px-1.5 py-0.5 text-[13px]">@okoret/ui</code> to{' '}
            <code className="rounded bg-[var(--ok-surface)] px-1.5 py-0.5 text-[13px]">src/lib</code>).
          </p>
          <pre className="mt-3 overflow-auto rounded-md border border-[var(--ok-border)] bg-[var(--ok-bg)] p-4 text-[13px] leading-relaxed text-[var(--ok-fg-soft)]">
            <code>{`import { Button } from "@okoret/ui";

export function Example() {
  return <Button variant="accent">Install</Button>;
}`}</code>
          </pre>
          <p className="mt-3 text-[13px] text-[var(--ok-muted)]">
            Full setup: <Link to="/installation" className="text-[var(--ok-accent)] hover:underline">Installation</Link>
          </p>
        </section>
      </section>
    </DocsLayout>
  )
}
