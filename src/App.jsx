function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.35em] text-neutral-400">OKORET</span>
            <span className="font-semibold text-neutral-100">UI</span>
          </a>
          <nav className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/50 px-2 py-1">
              <span className="text-[10px] text-neutral-500">npm</span>
              <code className="text-[11px] text-neutral-200">i @okoret/ui</code>
            </div>
            <a href="#" className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800/60">Components</a>
            <a href="#" className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800/60">Tokens</a>
            <a href="#" className="hidden sm:inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800/60">Playground</a>
            <a href="#" className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800/60">CLI</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(80,80,80,0.15),rgba(0,0,0,0))]" />
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">Open-source React components</p>
            <h1 className="mt-4 text-4xl sm:text-5xl leading-tight font-semibold tracking-tight text-neutral-100">
              Build faster with polished, accessible UI primitives
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-400">
              Okoret UI is a minimal, extensible component library designed for clarity, speed, and delightful developer experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center rounded-md bg-neutral-100 px-4 py-2 text-[13px] font-medium text-neutral-950 hover:bg-white transition-colors">
                Get started
              </a>
              <a href="#" className="inline-flex items-center rounded-md border border-neutral-800 px-4 py-2 text-[13px] font-medium text-neutral-200 hover:bg-neutral-900 transition-colors">
                GitHub
        </a>
      </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <p className="text-[11px] text-neutral-400">Accessible</p>
              <p className="mt-2 text-sm text-neutral-300">WAI-ARIA patterns and keyboard navigation out of the box.</p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <p className="text-[11px] text-neutral-400">Composable</p>
              <p className="mt-2 text-sm text-neutral-300">Low-level primitives that slot into any design system.</p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <p className="text-[11px] text-neutral-400">Themeable</p>
              <p className="mt-2 text-sm text-neutral-300">Style with Tailwind or CSS—no runtime styles required.</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm tracking-wide text-neutral-300">Motion previews</h2>
            <span className="text-[10px] text-neutral-500">Smooth, subtle animations</span>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="group relative h-56 flex flex-col items-center justify-center text-center rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">Code</a>
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">CLI</a>
              </div>
              <p className="text-[11px] text-neutral-400">Button micro‑interaction</p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-[12px] text-neutral-200 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-neutral-900 hover:shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
                <span>Install</span>
                <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
            <div className="group relative h-56 overflow-hidden flex flex-col items-center justify-center text-center rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">Code</a>
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">CLI</a>
              </div>
              <p className="text-[11px] text-neutral-400">Dialog fade</p>
              <div className="mt-3 h-28 rounded-md border border-neutral-800 bg-neutral-950/60"></div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                <div className="rounded-lg border border-neutral-800 bg-neutral-950/95 px-4 py-3 text-[12px] text-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                  This is a dialog
                </div>
              </div>
            </div>
            <div className="group relative h-56 flex flex-col items-center justify-center text-center rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">Code</a>
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">CLI</a>
              </div>
              <p className="text-[11px] text-neutral-400">Toast</p>
              <div className="mt-3">
                <input id="toast-toggle" type="checkbox" className="peer sr-only" />
                <label htmlFor="toast-toggle" className="inline-flex cursor-pointer items-center rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-[12px] text-neutral-200 transition-colors hover:bg-neutral-900">Trigger</label>
                <div className="mt-3 translate-y-1 opacity-0 transition-all duration-300 ease-out peer-checked:translate-y-0 peer-checked:opacity-100">
                  <div className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[11px] text-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
                    <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Saved successfully
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative h-56 flex flex-col items-center justify-center text-center rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">Code</a>
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">CLI</a>
              </div>
              <p className="text-[11px] text-neutral-400">Switch</p>
              <label className="mt-3 inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="peer sr-only" />
                <span className="text-[11px] text-neutral-400 peer-checked:text-neutral-300">Enable</span>
                <span className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-800 transition-colors peer-checked:bg-neutral-700 after:absolute after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-neutral-300 after:transition-transform after:duration-300 after:translate-x-0 peer-checked:after:translate-x-5" />
              </label>
            </div>
            <div className="group relative h-56 flex flex-col items-center justify-center text-center rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">Code</a>
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">CLI</a>
              </div>
              <p className="text-[11px] text-neutral-400">Loader</p>
              <div className="mt-3 inline-flex items-center justify-center">
                <span className="h-5 w-5 animate-spin rounded-full border border-neutral-700 border-t-neutral-300" />
              </div>
            </div>
            <div className="group relative h-56 overflow-hidden flex flex-col items-center justify-center text-center rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">Code</a>
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">CLI</a>
              </div>
              <p className="text-[11px] text-neutral-400">Dropdown</p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-[12px] text-neutral-200 transition-colors group-hover:bg-neutral-900">
                Menu
                <span className="text-neutral-500">▾</span>
              </button>
              <div className="pointer-events-none absolute top-16 opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
                <div className="w-40 overflow-hidden rounded-md border border-neutral-800 bg-neutral-950 text-left shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                  <a className="block px-3 py-2 text-[11px] text-neutral-300 hover:bg-neutral-900" href="#">New file</a>
                  <a className="block px-3 py-2 text-[11px] text-neutral-300 hover:bg-neutral-900" href="#">Duplicate</a>
                  <a className="block px-3 py-2 text-[11px] text-neutral-300 hover:bg-neutral-900" href="#">Settings</a>
                </div>
              </div>
            </div>
            <div className="group relative h-56 overflow-hidden flex flex-col items-center justify-center text-center rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">Code</a>
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">CLI</a>
              </div>
              <p className="text-[11px] text-neutral-400">Command palette</p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-[12px] text-neutral-200 transition-colors group-hover:bg-neutral-900">
                <span className="rounded-sm bg-neutral-800 px-1.5 py-0.5 text-[10px] text-neutral-300">⌘K</span>
                Open
        </button>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
                <div className="w-[22rem] rounded-lg border border-neutral-800 bg-neutral-950/95 p-3 text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/70 px-2 py-1.5 text-[11px] text-neutral-300">
                    <span className="text-neutral-500">/</span>
                    Search commands…
                  </div>
                  <div className="mt-2 divide-y divide-neutral-900/80 text-[11px]">
                    <div className="flex items-center justify-between py-1.5"><span>New component</span><kbd className="rounded bg-neutral-900 px-1 py-0.5 text-[10px] text-neutral-500">N</kbd></div>
                    <div className="flex items-center justify-between py-1.5"><span>Switch theme</span><kbd className="rounded bg-neutral-900 px-1 py-0.5 text-[10px] text-neutral-500">T</kbd></div>
                    <div className="flex items-center justify-between py-1.5"><span>Open docs</span><kbd className="rounded bg-neutral-900 px-1 py-0.5 text-[10px] text-neutral-500">D</kbd></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative h-56 flex flex-col items-center justify-center text-center rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">Code</a>
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">CLI</a>
              </div>
              <p className="text-[11px] text-neutral-400">Accordion</p>
              <div className="mt-3 w-64 text-left">
                <input id="acc-1" type="checkbox" className="peer sr-only" />
                <label htmlFor="acc-1" className="flex cursor-pointer items-center justify-between rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[12px] text-neutral-200">
                  Details
                  <span className="transition-transform duration-300 peer-checked:rotate-180">▾</span>
                </label>
                <div className="grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="rounded-b-md border border-t-0 border-neutral-800 bg-neutral-950 px-3 py-2 text-[11px] text-neutral-300">
                      Minimal CSS-only accordion content.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative h-56 flex flex-col items-center justify-center text-center rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">Code</a>
                <a href="#" className="rounded-full border border-neutral-800 bg-neutral-950/70 px-2 py-0.5 text-[10px] text-neutral-300 hover:bg-neutral-900">CLI</a>
              </div>
              <p className="text-[11px] text-neutral-400">Presence</p>
              <div className="mt-3 relative">
                <div className="relative h-12 w-12 rounded-full border border-neutral-800 bg-neutral-900" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="h-16 w-16 rounded-full border border-neutral-800/60 animate-ping" />
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="relative h-12 w-12">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-spin motion-safe:[animation-duration:4s]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900/80">
        <div className="max-w-7xl mx-auto px-6 py-10 text-[12px] text-neutral-500">
          © {new Date().getFullYear()} Okoret UI. MIT Licensed.
        </div>
      </footer>
      </div>
  )
}

export default App
