import { Header } from '../components/Header'
import { InfoSidebar } from '../components/InfoSidebar'

export default function DesignPrinciples() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-10">
        <InfoSidebar />
        <section className="space-y-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100">Design principles</h1>
          <p className="mt-3 text-[15px] leading-7 text-neutral-300 max-w-3xl">The philosophy behind Okoret UI balances minimalism with motion. Components are composable, accessible, and predictable.</p>
          <div className="mt-6 grid gap-6">
            <div>
              <h2 className="text-xl font-medium text-neutral-100">1. Clarity over cleverness</h2>
              <p className="mt-2 text-sm text-neutral-400">APIs should be obvious. Favor explicit props over magic and side effects.</p>
              <ul className="mt-2 list-disc pl-5 text-[13px] text-neutral-300 space-y-1">
                <li>Prefer prop composition over nested config objects</li>
                <li>A single source of truth for state; avoid hidden globals</li>
                <li>Document defaults; make escape hatches explicit</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium text-neutral-100">2. Motion with purpose</h2>
              <p className="mt-2 text-sm text-neutral-400">Animations guide attention and reinforce hierarchy—never distract.</p>
              <ul className="mt-2 list-disc pl-5 text-[13px] text-neutral-300 space-y-1">
                <li>Enter: 200–300ms ease-out; Exit: 150–200ms ease-in</li>
                <li>Use transforms/opacity; avoid layout-thrashing properties</li>
                <li>Respect prefers-reduced-motion; provide non-animated fallback</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium text-neutral-100">3. Headless first</h2>
              <p className="mt-2 text-sm text-neutral-400">Behavior and a11y are built-in; styling and layout are your canvas.</p>
              <ul className="mt-2 list-disc pl-5 text-[13px] text-neutral-300 space-y-1">
                <li>Expose render props and slot props for full control</li>
                <li>Keyboard support: Tab, Arrow keys, Home/End where applicable</li>
                <li>Announce state changes via ARIA live regions when needed</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium text-neutral-100">4. Token-driven theming</h2>
              <p className="mt-2 text-sm text-neutral-400">Design scales via semantic tokens, not hard-coded colors.</p>
              <pre className="mt-3 overflow-auto rounded-md border border-neutral-800 bg-neutral-950 p-3 text-[12px] text-neutral-300"><code>{`:root {\n  --ok-fg: 235 235 235;\n  --ok-bg: 10 10 10;\n  --ok-accent: 255 255 255;\n}\n@media (prefers-color-scheme: light) {\n  :root { --ok-bg: 255 255 255; --ok-fg: 20 20 20; }\n}`}</code></pre>
            </div>
            <div>
              <h2 className="text-xl font-medium text-neutral-100">5. Accessibility by default</h2>
              <p className="mt-2 text-sm text-neutral-400">Contrast, focus rings, and readable motion are non‑negotiable.</p>
              <ul className="mt-2 list-disc pl-5 text-[13px] text-neutral-300 space-y-1">
                <li>Minimum 4.5:1 contrast for body text and interactive states</li>
                <li>Visible focus styles that don’t rely on color alone</li>
                <li>Announce async loading/errors with ARIA status/alert</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium text-neutral-100">6. Performance as a feature</h2>
              <p className="mt-2 text-sm text-neutral-400">Every component aims for zero runtime styles and minimal JS.</p>
              <ul className="mt-2 list-disc pl-5 text-[13px] text-neutral-300 space-y-1">
                <li>Tree‑shakeable entrypoints per component</li>
                <li>Defer heavy work; use idle callbacks for non‑critical tasks</li>
                <li>CSR, SSR, and RSC friendly; no window‑only assumptions</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium text-neutral-100">7. Ergonomic DX</h2>
              <p className="mt-2 text-sm text-neutral-400">Type‑safe props, excellent errors, and copy‑pasteable examples.</p>
              <ul className="mt-2 list-disc pl-5 text-[13px] text-neutral-300 space-y-1">
                <li>Intellisense-ready prop docs and JSDoc annotations</li>
                <li>Meaningful error messages and dev warnings</li>
                <li>Recipes for common patterns (controlled, uncontrolled, forms)</li>
              </ul>
            </div>
            </div>
        </section>
      </main>
    </div>
  )
}


