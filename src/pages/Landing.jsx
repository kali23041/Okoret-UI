import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import {
  MagneticButton,
  SpotlightCard,
  EFFECTS,
  useReducedMotion,
} from '@okoret/ui'
import { useTilt, useMagnetic } from '../lib/effects/hooks'
import { FlipCard } from '../lib/effects/perspective3d'
import { NeonPulseBtn, ShimmerCTA } from '../lib/effects/buttons'
import { AnimatedGradientBorder } from '../lib/effects/borders'
import { ConfettiBurst, MarqueeStrip } from '../lib/effects/toys'
import { OrbitLoader } from '../lib/effects/loaders'
import { GlitchText } from '../lib/effects/text'

const FEATURED = [
  'card-3d',
  'magnetic-button',
  'spotlight-card',
  'animated-gradient-border',
  'confetti-burst',
  'glitch-text',
  'orbit-loader',
  'holo-card',
  'marquee-strip',
]

const STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Flutter',
  'Dart',
  'PostgreSQL',
  'Firebase',
]

function HeroCard() {
  const { ref, style, onMove, onLeave } = useTilt(18)
  return (
    <div
      className="relative"
      style={{ perspective: 1200 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        ref={ref}
        style={style}
        className="relative h-72 w-full max-w-md overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--ok-accent)_35%,transparent)] bg-gradient-to-br from-[var(--ok-surface)] via-[var(--ok-surface-2)] to-[var(--ok-accent-soft)] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12),0_0_60px_rgba(8,145,178,0.12)] sm:h-80 sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(8,145,178,0.2),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.12),transparent_40%)]" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[var(--ok-accent-soft)] blur-3xl ok-anim-pulse" />
        <p className="relative text-[11px] uppercase tracking-[0.35em] text-[var(--ok-accent)]">
          Okoret UI
        </p>
        <p className="relative mt-4 text-2xl font-semibold tracking-tight text-[var(--ok-fg)] sm:text-3xl">
          Motion that feels alive
        </p>
        <p className="relative mt-3 max-w-xs text-sm leading-6 text-[var(--ok-muted)]">
          Tilt this card. Explore {EFFECTS.length} effects. Build with primitives that stay out of
          your way.
        </p>
        <div className="relative mt-8 flex items-center gap-3">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--ok-accent)] shadow-[0_0_12px_#0891b2]" />
          <span className="text-xs text-[var(--ok-muted)]">Interactive · Accessible · Token-driven</span>
        </div>
      </div>
    </div>
  )
}

function HeroMagneticCta({ children, onClick, variant = 'solid' }) {
  const { ref, style, onMove, onLeave } = useMagnetic(0.28)
  const base =
    variant === 'solid'
      ? 'bg-[var(--ok-fg)] text-[var(--ok-bg)] hover:opacity-90'
      : 'border border-[var(--ok-border)] bg-[var(--ok-surface)] text-[var(--ok-fg)] hover:bg-[var(--ok-bg)]'
  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
      <button
        ref={ref}
        type="button"
        style={style}
        onClick={onClick}
        className={`inline-flex h-12 items-center justify-center rounded-[var(--ok-radius)] px-6 text-sm font-medium transition-colors ${base}`}
      >
        {children}
      </button>
    </div>
  )
}

function CursorField({ children }) {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 50, y: 30 })

  return (
    <div
      className="relative overflow-hidden"
      onMouseMove={(e) => {
        if (reduced) return
        const r = e.currentTarget.getBoundingClientRect()
        setPos({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        })
      }}
      style={{
        background: `radial-gradient(700px circle at ${pos.x}% ${pos.y}%, var(--ok-glow), transparent 42%)`,
      }}
    >
      {children}
    </div>
  )
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[
        'left-[8%] top-[20%] h-3 w-3',
        'left-[18%] top-[70%] h-2 w-2',
        'right-[12%] top-[28%] h-2.5 w-2.5',
        'right-[22%] top-[62%] h-2 w-2',
        'left-[45%] top-[15%] h-1.5 w-1.5',
        'left-[60%] top-[78%] h-2 w-2',
      ].map((cls, i) => (
        <span
          key={cls}
          className={`absolute rounded-full bg-[var(--ok-accent)] ok-anim-float ${cls}`}
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </div>
  )
}

export default function Landing() {
  const navigate = useNavigate()
  const terminalScript = [
    '$ echo "Developer: Kartik Sabale"',
    'Developer: Kartik Sabale',
    '$ echo "Portfolio: kartiksabale.com"',
    'Portfolio: kartiksabale.com',
    '$ echo "GitHub: @kali23041"',
    'GitHub: @kali23041',
  ]
  const fullTerminalText = terminalScript.join('\n')
  const [typedCount, setTypedCount] = useState(0)

  useEffect(() => {
    if (typedCount >= fullTerminalText.length) return undefined
    const timer = setInterval(() => {
      setTypedCount((count) => (count < fullTerminalText.length ? count + 1 : count))
    }, 22)
    return () => clearInterval(timer)
  }, [typedCount, fullTerminalText.length])

  const typedText = fullTerminalText.slice(0, typedCount)
  const featured = FEATURED.map((slug) => EFFECTS.find((e) => e.slug === slug)).filter(Boolean)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main className="relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* HERO */}
        <CursorField>
          <FloatingOrbs />
          <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--ok-accent)_45%,transparent)] bg-[var(--ok-accent-soft)] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ok-accent)]" />
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--ok-accent)]">
                  Okoret UI · Open source
                </p>
              </div>

              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--ok-fg)] sm:text-6xl lg:text-7xl">
                <span className="block">Build faster.</span>
                <span
                  className="mt-1 block bg-clip-text text-transparent ok-anim-shimmer"
                  style={{
                    backgroundImage:
                      'linear-gradient(110deg, var(--ok-accent) 0%, var(--ok-fg) 42%, var(--ok-accent) 58%, color-mix(in srgb, var(--ok-accent) 55%, white) 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  Move wilder.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ok-muted)]">
                Accessible React primitives plus a gallery of {EFFECTS.length} motion experiments —
                3D cards, magnetic CTAs, neon frames, and interactive toys. Crafted in Pune by{' '}
                <a
                  href="https://kartiksabale.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--ok-accent)] underline-offset-4 hover:underline"
                >
                  Kartik Sabale
                </a>
                .
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <HeroMagneticCta onClick={() => navigate('/components')}>
                  Get started
                </HeroMagneticCta>
                <HeroMagneticCta variant="outline" onClick={() => navigate('/effects')}>
                  Explore effects
                </HeroMagneticCta>
                <a
                  href="https://github.com/kali23041/Okoret-UI"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-[var(--ok-radius)] border border-[var(--ok-border)] px-5 text-sm font-medium text-[var(--ok-fg-soft)] transition-colors hover:border-[var(--ok-border)] hover:text-[var(--ok-fg)]"
                >
                  GitHub · @kali23041
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {['3D tilt', 'Magnetic', 'Spotlight', 'Confetti', 'Neon'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => navigate('/effects')}
                    className="rounded-full border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_85%,transparent)] px-3 py-1.5 text-xs text-[var(--ok-muted)] transition-colors hover:border-[var(--ok-accent)] hover:text-[var(--ok-accent)]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[340px] items-center justify-center lg:min-h-[420px]">
              <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-[var(--ok-accent-soft)] blur-3xl ok-anim-pulse" />
              <div className="relative z-10 w-full max-w-md">
                <HeroCard />
                <div className="mt-4 flex justify-center gap-3">
                  <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_85%,transparent)] p-2">
                    <MagneticButton />
                  </div>
                  <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_85%,transparent)] p-2">
                    <ConfettiBurst />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CursorField>

        {/* STATS */}
        <section className="relative mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              [`${EFFECTS.length} effects`, 'Registry-driven gallery with live demos'],
              ['3D & magnetic', 'Pointer-tracked tilt and attraction hooks'],
              ['Core + crazy', 'Solid primitives beside wild motion toys'],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs text-[var(--ok-accent)]/80">{title}</p>
                <p className="mt-2.5 text-[15px] text-[var(--ok-fg-soft)]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="relative mx-auto max-w-7xl px-6 pb-20">
          <div className="overflow-hidden rounded-2xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-[var(--ok-border)] p-8 sm:p-10 lg:border-r lg:border-b-0">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--ok-accent)]/80">
                  Creator
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ok-fg)] sm:text-4xl">
                  Kartik Sabale
                </h2>
                <p className="mt-2 text-base text-[var(--ok-muted)]">
                  Software engineer · Pune, India
                </p>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--ok-fg-soft)]">
                  Full-stack & Flutter developer building Essixx, shipping Google Play apps (Ferron,
                  Scraply), and delivering client websites and products with React, Next.js,
                  TypeScript, Node.js, and Dart.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {STACK.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface-2)_80%,transparent)] px-3 py-1 text-xs text-[var(--ok-fg-soft)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://kartiksabale.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-[var(--ok-radius)] bg-[var(--ok-accent)] px-5 text-sm font-medium text-[var(--ok-accent-fg)] transition-colors hover:brightness-110"
                  >
                    Visit portfolio
                  </a>
                  <a
                    href="https://github.com/kali23041"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-[var(--ok-radius)] border border-[var(--ok-border)] px-5 text-sm font-medium text-[var(--ok-fg)] transition-colors hover:bg-[var(--ok-bg)]"
                  >
                    GitHub · @kali23041
                  </a>
                  <a
                    href="https://linkedin.com/in/kartiksabale"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-[var(--ok-radius)] border border-[var(--ok-border)] px-5 text-sm font-medium text-[var(--ok-muted)] transition-colors hover:text-[var(--ok-fg)]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="relative p-8 sm:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8, 145, 178,0.12),transparent_55%)]" />
                <div className="relative space-y-4">
                  <a
                    href="https://kartiksabale.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)] transition-all hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--ok-accent)_45%,transparent)]"
                  >
                    <img
                      src="https://kartiksabale.com/og-image.png"
                      alt="Kartik Sabale portfolio preview"
                      className="h-40 w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="px-4 py-3">
                      <p className="text-sm text-[var(--ok-fg)]">kartiksabale.com</p>
                      <p className="mt-0.5 text-xs text-[var(--ok-muted)]">
                        Official portfolio · Essixx · Play Store apps
                      </p>
                    </div>
                  </a>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ['Location', 'Pune, Maharashtra'],
                      ['Focus', 'Essixx digital solutions'],
                      ['Email', 'hello@kartiksabale.com'],
                      ['X / Instagram', '@kartiksabale'],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)] px-3.5 py-3"
                      >
                        <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--ok-muted)]">
                          {label}
                        </p>
                        <p className="mt-1 text-sm text-[var(--ok-fg)]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED EFFECTS */}
        <section className="relative mx-auto max-w-7xl px-6 pb-20">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-base tracking-wide text-[var(--ok-fg-soft)]">Featured effects</h2>
              <p className="mt-1 text-[13px] text-[var(--ok-muted)]">Live previews from the gallery</p>
            </div>
            <Link to="/effects" className="text-[13px] text-[var(--ok-accent)] hover:underline">
              View all {EFFECTS.length} →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <Link
                key={item.slug}
                to={`/effects/${item.slug}`}
                className="group overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_75%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-900/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="flex min-h-[13rem] items-center justify-center border-b border-[var(--ok-border)] p-4">
                  <div className="pointer-events-none scale-95">
                    <item.Component />
                  </div>
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm text-[var(--ok-fg)]">{item.name}</p>
                  <p className="mt-0.5 text-xs text-[var(--ok-muted)]">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* MIX & PLAY */}
        <section className="relative mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-base tracking-wide text-[var(--ok-fg-soft)]">Mix & play</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
              <SpotlightCard />
            </div>
            <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
              <FlipCard />
            </div>
            <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
              <NeonPulseBtn />
            </div>
            <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
              <ShimmerCTA />
            </div>
            <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
              <AnimatedGradientBorder />
            </div>
            <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
              <ConfettiBurst />
            </div>
            <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
              <MagneticButton />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
              <OrbitLoader />
              <GlitchText />
              <MarqueeStrip />
            </div>
          </div>
        </section>

        {/* TERMINAL */}
        <section className="relative mx-auto max-w-7xl px-6 pb-16">
          <div className="mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_85%,transparent)]">
              <div className="flex items-center gap-1 border-b border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)] px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-[11px] text-[var(--ok-muted)]">zsh — Okoret</span>
              </div>
              <pre className="whitespace-pre-wrap px-3 py-2.5 font-mono text-xs leading-relaxed text-[var(--ok-fg-soft)]">
                <code>
                  {typedText}
                  <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-[var(--ok-muted)] align-[-1px]" />
                </code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--ok-border)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-10 text-[13px] text-[var(--ok-muted)]">
          <span>
            © {new Date().getFullYear()} Okoret UI · Built by{' '}
            <a
              href="https://kartiksabale.com"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--ok-fg-soft)] hover:text-[var(--ok-accent)]"
            >
              Kartik Sabale
            </a>
          </span>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/kali23041"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--ok-fg-soft)]"
            >
              GitHub
            </a>
            <Link to="/effects" className="hover:text-[var(--ok-fg-soft)]">
              Effects
            </Link>
            <Link to="/installation" className="hover:text-[var(--ok-fg-soft)]">
              Installation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
