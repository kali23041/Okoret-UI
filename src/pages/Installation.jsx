import { DocsLayout } from '../components/DocsLayout'
import { Link } from 'react-router-dom'

export default function InstallationPage() {
  return (
    <DocsLayout>
      <section className="space-y-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--ok-fg)] sm:text-4xl">
            Installation
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--ok-fg-soft)]">
            Okoret UI currently ships as a local library inside this Vite app. Import via the{' '}
            <code className="rounded bg-[var(--ok-surface)] px-1">@okoret/ui</code> alias.
          </p>
        </div>

        <section>
          <h2 className="text-lg font-medium text-[var(--ok-fg)]">1. Clone & install</h2>
          <pre className="mt-3 overflow-auto rounded-md border border-[var(--ok-border)] bg-[var(--ok-bg)] p-3 text-[13px] text-[var(--ok-fg-soft)]">
            <code>{`git clone https://github.com/kali23041/Okoret-UI.git
cd Okoret-UI
npm install
npm run dev`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-lg font-medium text-[var(--ok-fg)]">2. Vite alias</h2>
          <p className="mt-2 text-sm text-[var(--ok-muted)]">
            Already configured in <code className="rounded bg-[var(--ok-surface)] px-1">vite.config.js</code>:
          </p>
          <pre className="mt-3 overflow-auto rounded-md border border-[var(--ok-border)] bg-[var(--ok-bg)] p-3 text-[13px] text-[var(--ok-fg-soft)]">
            <code>{`resolve: {
  alias: {
    '@okoret/ui': path.resolve(__dirname, 'src/lib'),
  },
}`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-lg font-medium text-[var(--ok-fg)]">3. Tailwind v4</h2>
          <p className="mt-2 text-sm text-[var(--ok-muted)]">
            Tailwind is loaded via <code className="rounded bg-[var(--ok-surface)] px-1">@tailwindcss/vite</code>.
            Tokens live in <code className="rounded bg-[var(--ok-surface)] px-1">src/index.css</code>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-[var(--ok-fg)]">4. Import a component</h2>
          <pre className="mt-3 overflow-auto rounded-md border border-[var(--ok-border)] bg-[var(--ok-bg)] p-3 text-[13px] text-[var(--ok-fg-soft)]">
            <code>{`import { Button, ToastProvider } from "@okoret/ui";`}</code>
          </pre>
          <p className="mt-3 text-sm text-[var(--ok-muted)]">
            Next: explore the{' '}
            <Link to="/playground" className="text-[var(--ok-accent)] hover:underline">
              Playground
            </Link>{' '}
            or jump into{' '}
            <Link to="/components/button" className="text-[var(--ok-accent)] hover:underline">
              Button
            </Link>
            .
          </p>
        </section>
      </section>
    </DocsLayout>
  )
}
