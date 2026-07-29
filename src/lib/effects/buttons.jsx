import { useState } from 'react'
import { useMagnetic } from './hooks'


export function MagneticButton() {
  const { ref, style, onMove, onLeave } = useMagnetic(0.4)
  return (
    <div className="ok-effect-stage" onMouseMove={onMove} onMouseLeave={onLeave}>
      <button ref={ref} type="button" style={style}
        className="rounded-full bg-[var(--ok-accent)] px-5 py-3 text-[13px] font-medium text-[var(--ok-accent-fg)] shadow-[0_0_30px_rgba(8, 145, 178,0.35)]">
        Magnetic
      </button>
    </div>
  )
}

export function MorphButton() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-2xl border border-[var(--ok-border)] bg-[var(--ok-surface)] px-5 py-3 text-[13px] text-[var(--ok-fg)] transition-all duration-500 hover:rounded-full hover:border-cyan-600 hover:bg-[var(--ok-accent)] hover:text-[var(--ok-accent-fg)]">
        Morph
      </button>
    </div>
  )
}

export function GooeyButton() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="relative rounded-full bg-[var(--ok-accent)] px-6 py-3 text-[13px] font-medium text-[var(--ok-accent-fg)]">
        <span className="absolute -left-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[var(--ok-accent)] ok-anim-blob" />
        <span className="absolute -right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[var(--ok-accent)] ok-anim-blob" style={{ animationDelay: '1s' }} />
        <span className="relative">Gooey</span>
      </button>
    </div>
  )
}

export function RippleBurst() {
  const [rips, setRips] = useState([])
  return (
    <div className="ok-effect-stage">
      <button type="button" className="relative overflow-hidden rounded-md border border-[var(--ok-border)] bg-[var(--ok-surface)] px-5 py-3 text-[13px] text-[var(--ok-fg)]"
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          const id = Date.now()
          setRips((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }])
          setTimeout(() => setRips((p) => p.filter((x) => x.id !== id)), 600)
        }}>
        Ripple
        {rips.map((rip) => (
          <span key={rip.id} className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ok-accent)]"
            style={{ left: rip.x, top: rip.y, animation: 'ok-pulse-soft 0.6s ease-out forwards', transform: 'scale(6)', opacity: 0 }} />
        ))}
      </button>
    </div>
  )
}

export function NeonPulseBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-md border border-[color-mix(in_srgb,var(--ok-accent)_50%,transparent)] bg-[var(--ok-bg)] px-5 py-3 text-[13px] text-[var(--ok-accent)] shadow-[0_0_20px_rgba(8, 145, 178,0.45)] ok-anim-pulse">
        Neon pulse
      </button>
    </div>
  )
}

export function ShimmerCTA() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="ok-anim-shimmer rounded-md px-5 py-3 text-[13px] font-medium text-[var(--ok-accent-fg)]"
        style={{ backgroundImage: 'linear-gradient(110deg,#0891b2 0%,#67e8f9 45%,#0891b2 60%,#0e7490 100%)', backgroundSize: '200% 100%' }}>
        Shimmer
      </button>
    </div>
  )
}

export function SplitFillBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="group relative overflow-hidden rounded-md border border-[var(--ok-border)] px-5 py-3 text-[13px] text-[var(--ok-fg)]">
        <span className="absolute inset-y-0 left-0 w-0 bg-[var(--ok-accent)] transition-all duration-300 group-hover:w-1/2" />
        <span className="absolute inset-y-0 right-0 w-0 bg-[var(--ok-accent)] transition-all duration-300 group-hover:w-1/2" />
        <span className="relative z-10 group-hover:text-[var(--ok-accent-fg)]">Split fill</span>
      </button>
    </div>
  )
}

export function ElasticBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-md bg-[var(--ok-fg)] px-5 py-3 text-[13px] font-medium text-[var(--ok-bg)] transition-transform duration-300 hover:scale-110 active:scale-95">
        Elastic
      </button>
    </div>
  )
}

export function BorderDrawBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="group relative rounded-md px-5 py-3 text-[13px] text-[var(--ok-fg)]">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="6" fill="none" stroke="#0891b2" strokeWidth="2"
            className="[stroke-dasharray:240] [stroke-dashoffset:240] transition-[stroke-dashoffset] duration-500 group-hover:[stroke-dashoffset:0]" />
        </svg>
        Border draw
      </button>
    </div>
  )
}

export function IconSlideBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="group inline-flex items-center gap-2 rounded-md border border-[var(--ok-border)] bg-[var(--ok-surface)] px-4 py-2 text-[13px] text-[var(--ok-fg)]">
        Continue
        <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </div>
  )
}

export function GlitchBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="relative rounded-md border border-[var(--ok-border)] bg-[var(--ok-surface)] px-5 py-3 text-[13px] text-[var(--ok-fg)] hover:ok-anim-glitch">
        <span className="absolute inset-0 text-cyan-400 opacity-0 hover:opacity-70" aria-hidden>Glitch</span>
        Glitch
      </button>
    </div>
  )
}

export function LiquidBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="group relative overflow-hidden rounded-md border border-[var(--ok-border)] px-5 py-3 text-[13px] text-[var(--ok-fg)]">
        <span className="absolute inset-x-0 bottom-0 h-0 bg-[var(--ok-accent)]/90 transition-all duration-500 group-hover:h-full" />
        <span className="relative z-10 group-hover:text-[var(--ok-accent-fg)]">Liquid</span>
      </button>
    </div>
  )
}

export function PixelBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-none border-2 border-[var(--ok-accent)] bg-[var(--ok-bg)] px-4 py-2 font-mono text-[13px] text-[var(--ok-accent)] shadow-[4px_4px_0_#155e75] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
        PIXEL
      </button>
    </div>
  )
}

export function OrbitIconBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="relative rounded-full border border-[var(--ok-border)] bg-[var(--ok-surface)] px-5 py-3 text-[13px] text-[var(--ok-fg)]">
        Orbit
        <span className="absolute inset-0 ok-anim-spin" style={{ animationDuration: '3s' }}>
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--ok-accent)]" />
        </span>
      </button>
    </div>
  )
}

export function ExpandPillBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-full border border-[color-mix(in_srgb,var(--ok-accent)_40%,transparent)] bg-[var(--ok-accent-soft)] px-3 py-2 text-[13px] text-[var(--ok-accent)] transition-all duration-300 hover:px-8 hover:bg-[var(--ok-accent)] hover:text-[var(--ok-accent-fg)]">
        Expand
      </button>
    </div>
  )
}
