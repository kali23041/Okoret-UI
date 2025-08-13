import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[10px] tracking-[0.35em] text-neutral-400">OKORET</span>
          <span className="font-semibold text-neutral-100">UI</span>
        </Link>
        <nav className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/50 px-2 py-1">
            <span className="text-[10px] text-neutral-500">npm</span>
            <code className="text-[11px] text-neutral-200">i @okoret/ui</code>
          </div>
          <Link to="/components" className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800/60">Components</Link>
          <a href="#" className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800/60">Tokens</a>
          <a href="#" className="hidden sm:inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800/60">Playground</a>
          <a href="#" className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-[11px] text-neutral-300 hover:bg-neutral-800/60">CLI</a>
        </nav>
      </div>
    </header>
  )
}


