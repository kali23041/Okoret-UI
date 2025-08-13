import { Header } from '../components/Header'
import { InfoSidebar } from '../components/InfoSidebar'

export default function AccordionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-10">
        <InfoSidebar />
        <section>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100">Accordion</h1>
          <p className="mt-3 text-[15px] leading-7 text-neutral-300 max-w-3xl">Expandable disclosure component with smooth motion and accessible keyboard support.</p>
          <div className="mt-6 rounded-lg border border-neutral-800 bg-neutral-950/40 p-4">
            <div className="space-y-4">
            <details className="group rounded-md border border-neutral-800 bg-neutral-900/40 p-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[13px] text-neutral-200">
                What is Okoret UI?
                <span className="transition-transform duration-300 group-open:rotate-180">▾</span>
              </summary>
              <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
                <div className="overflow-hidden pt-2 text-[13px] text-neutral-300">A minimal, motion‑forward component library.</div>
              </div>
            </details>
            <details className="group rounded-md border border-neutral-800 bg-neutral-900/40 p-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[13px] text-neutral-200">
                Is it accessible?
                <span className="transition-transform duration-300 group-open:rotate-180">▾</span>
              </summary>
              <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-300">
                <div className="overflow-hidden pt-2 text-[13px] text-neutral-300">Yes — keyboard and ARIA patterns built‑in.</div>
              </div>
            </details>
            </div>
          </div>

          <div className="mt-8 relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
            <div className="pointer-events-none absolute -top-24 right-[-60px] h-72 w-72 rounded-full bg-[conic-gradient(from_180deg,rgba(16,185,129,0.12),transparent_60%)] blur-3xl" />
            <h2 className="text-sm font-medium text-neutral-200">Neon gel accordion</h2>
            <p className="mt-1 text-[12px] text-neutral-400">Polished disclosure with gel‑like glow, micro‑motion, and pristine a11y.</p>
            <div className="mt-4 space-y-3">
              <details className="group relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-950/60 p-3 transition-all duration-300 hover:border-neutral-700 group-open:bg-neutral-950/80 group-open:shadow-[0_0_0_1px_rgba(16,185,129,0.2),0_12px_60px_rgba(16,185,129,0.06)]">
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background:"radial-gradient(40% 60% at 80% 0%, rgba(16,185,129,0.06), transparent 70%)"}} />
                <summary className="relative flex list-none items-center justify-between pr-1 text-[13px] text-neutral-200">
                  Shipping and returns
                  <svg className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-400 ease-out">
                  <div className="overflow-hidden pt-2 text-[13px] text-neutral-300 opacity-0 translate-y-1 transition-all duration-300 group-open:opacity-100 group-open:translate-y-0">Free worldwide shipping. 30‑day returns.</div>
                </div>
              </details>
              <details className="group relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-950/60 p-3 transition-all duration-300 hover:border-neutral-700 group-open:bg-neutral-950/80 group-open:shadow-[0_0_0_1px_rgba(16,185,129,0.2),0_12px_60px_rgba(16,185,129,0.06)]">
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background:"radial-gradient(40% 60% at 20% 0%, rgba(16,185,129,0.06), transparent 70%)"}} />
                <summary className="relative flex list-none items-center justify-between pr-1 text-[13px] text-neutral-200">
                  Security & privacy
                  <svg className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-all duration-400 ease-out">
                  <div className="overflow-hidden pt-2 text-[13px] text-neutral-300 opacity-0 translate-y-1 transition-all duration-300 group-open:opacity-100 group-open:translate-y-0">We never track or sell data; GDPR compliant.</div>
                </div>
              </details>
            </div>

            <div className="mt-4">
              <h3 className="text-[12px] font-medium text-neutral-300">Code</h3>
              <pre className="mt-2 overflow-auto rounded-md border border-neutral-800 bg-neutral-950 p-3 text-[11px] leading-relaxed text-neutral-300"><code>{`<details class="group rounded-md border border-neutral-800 bg-neutral-950/60 p-3">
  <summary class="flex list-none items-center justify-between text-sm text-neutral-200">
    Title
    <span class="relative h-5 w-5">
      <span class="absolute inset-0 rotate-0 transition-transform duration-300 group-open:rotate-180">▾</span>
    </span>
  </summary>
  <div class="grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]">
    <div class="overflow-hidden pt-2 text-sm text-neutral-300">Content</div>
  </div>
</details>`}</code></pre>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <button className="inline-flex items-center rounded-md bg-neutral-100 px-3 py-1.5 text-[12px] text-neutral-950 hover:bg-white" onClick={() => navigator.clipboard.writeText(`<details class=\"group rounded-md border border-neutral-800 bg-neutral-950/60 p-3\">\n  <summary class=\"flex list-none items-center justify-between text-sm text-neutral-200\">\n    Title\n    <span class=\"relative h-5 w-5\">\n      <span class=\"absolute inset-0 rotate-0 transition-transform duration-300 group-open:rotate-180\">▾</span>\n    </span>\n  </summary>\n  <div class=\"grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]\">\n    <div class=\"overflow-hidden pt-2 text-sm text-neutral-300\">Content</div>\n  </div>\n</details>`)}>
                  Copy component
                </button>
                <button className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-[12px] text-neutral-200 hover:bg-neutral-900" onClick={() => navigator.clipboard.writeText(`Build an accessible, minimal accordion using <details>/<summary>. Animate height with CSS grid rows and rotate the caret on open.`)}>
                  Copy prompt
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


