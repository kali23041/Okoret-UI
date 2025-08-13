import { Header } from '../components/Header'
import { InfoSidebar } from '../components/InfoSidebar'

export default function ComponentsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(80,80,80,0.12),rgba(0,0,0,0))]" />
        <div className="col-span-full flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-neutral-100">Components</h1>
            <p className="mt-1 text-[12px] text-neutral-400">Minimal, accessible primitives with motion-first UX.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="rounded-full border border-neutral-800 bg-neutral-900/50 px-2 py-1 text-[10px] text-neutral-300">v0.1</span>
            <a href="/" className="rounded-full border border-neutral-800 bg-neutral-900/50 px-2 py-1 text-[10px] text-neutral-300 hover:bg-neutral-800/60">Docs</a>
          </div>
        </div>
        <InfoSidebar />
        <section className="space-y-10">
          <section id="buttons">
            <h2 className="text-[28px] sm:text-3xl font-semibold tracking-tight text-neutral-100">How it works</h2>
            <p className="mt-2 text-[15px] leading-7 text-neutral-300 max-w-3xl">
              Okoret UI exposes small, composable primitives. Each primitive manages accessibility and state,
              leaving layout and styles to you via Tailwind. No runtime theming, no heavy context—just React patterns
              you already know.
            </p>
            <div className="mt-3 space-y-1 text-[13px] leading-6 text-neutral-300">
              <p>Core ideas:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Headless primitives with WAI-ARIA built in</li>
                <li>Zero runtime styling; you compose with Tailwind utilities</li>
                <li>Tiny API surface and tree-shakeable modules</li>
              </ul>
            </div>
          </section>
          <section id="forms">
            <h2 className="text-[28px] sm:text-3xl font-semibold tracking-tight text-neutral-100">Theming</h2>
            <p className="mt-2 text-[15px] leading-7 text-neutral-300 max-w-3xl">
              Use Tailwind tokens or CSS variables. Components read semantic CSS variables so you can switch themes
              without re-rendering.
            </p>
            <div className="mt-3 space-y-1 text-[13px] leading-6 text-neutral-300">
              <p>Theme via tokens:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Accent color: <code className="rounded bg-neutral-900 px-1 py-0.5 text-[12px]">--ok-accent</code></li>
                <li>Surfaces: <code className="rounded bg-neutral-900 px-1 py-0.5 text-[12px]">--ok-bg</code></li>
                <li>Prefer semantic tokens over hard-coded colors</li>
              </ul>
            </div>
          </section>
          <section id="feedback">
            <h2 className="text-[28px] sm:text-3xl font-semibold tracking-tight text-neutral-100">Motion & animation</h2>
            <p className="mt-2 text-[15px] leading-7 text-neutral-300 max-w-3xl">
              Animations are subtle by default: short durations, eased exits, and optical micro‑movement on hover.
              Prefer CSS transforms over layout‑affecting properties for performance.
            </p>
            <div className="mt-3 space-y-1 text-[13px] leading-6 text-neutral-300">
              <ul className="list-disc pl-5 space-y-1">
                <li>Durations: 150–300ms; exits are slightly faster</li>
                <li>Easing: ease-out on entry, ease-in on exit</li>
                <li>Use transforms and opacity for 60fps motion</li>
              </ul>
            </div>
          </section>
          <section id="overlay">
            <h2 className="text-[28px] sm:text-3xl font-semibold tracking-tight text-neutral-100">Install & usage</h2>
            <p className="mt-2 text-[15px] leading-7 text-neutral-300 max-w-3xl">Get started in seconds; the API stays small by design.</p>
            <pre className="mt-2 overflow-auto rounded-md border border-neutral-800 bg-neutral-950 p-2.5 text-[12px] leading-relaxed text-neutral-300"><code>{`npm i @okoret/ui
import { Button } from "@okoret/ui";`}</code></pre>
          </section>
        </section>
      </main>
    </div>
  )
}


