import { Header } from './Header'
import { InfoSidebar } from './InfoSidebar'

export function DocsLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(50%_40%_at_80%_0%,rgba(8, 145, 178,0.07),transparent_50%)]" />
      <main className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:grid-cols-[260px_1fr] md:gap-12">
        <InfoSidebar />
        <div className="min-w-0 rounded-xl border border-transparent md:border-[var(--ok-border)] md:bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] md:p-8 md:shadow-sm">
          {children}
        </div>
      </main>
    </div>
  )
}
