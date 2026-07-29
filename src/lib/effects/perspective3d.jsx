import { useState } from 'react'
import { useTilt, useReducedMotion } from './hooks'


export function Card3D() {
  const { ref, style, onMove, onLeave } = useTilt(14)
  return (
    <div className="ok-effect-stage" style={{ perspective: 900 }}>
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={style}
        className="relative h-40 w-64 rounded-xl border border-cyan-900/40 bg-gradient-to-br from-[var(--ok-surface)] to-[var(--ok-surface-2)] p-4 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(8, 145, 178,0.28),transparent_55%)]" />
        <p className="relative text-[10px] uppercase tracking-[0.25em] text-cyan-400/80">Okoret</p>
        <p className="relative mt-2 text-sm font-medium text-[var(--ok-fg)]">3D Tilt Card</p>
        <p className="relative mt-1 text-[11px] text-[var(--ok-muted)]">Move pointer to tilt</p>
      </div>
    </div>
  )
}

export function FlipCard() {
  return (
    <div className="ok-effect-stage [perspective:1000px]">
      <div className="group relative h-40 w-56 transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-[var(--ok-border)] bg-[var(--ok-surface)] [backface-visibility:hidden]">
          <span className="text-sm text-[var(--ok-fg)]">Front</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--ok-accent)_45%,transparent)] bg-[var(--ok-accent-soft)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <span className="text-sm text-[var(--ok-accent)]">Back</span>
        </div>
      </div>
    </div>
  )
}

export function ParallaxStack() {
  const reduced = useReducedMotion()
  const [o, setO] = useState({ x: 0, y: 0 })
  return (
    <div className="ok-effect-stage" onMouseMove={(e) => {
      if (reduced) return
      const r = e.currentTarget.getBoundingClientRect()
      setO({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 })
    }} onMouseLeave={() => setO({ x: 0, y: 0 })}>
      <div className="relative h-40 w-56">
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute inset-2 rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface-2)_90%,transparent)]"
            style={{ transform: `translate(${o.x * (i + 1) * 10}px, ${o.y * (i + 1) * 10}px) scale(${1 - i * 0.06})`, zIndex: 3 - i }} />
        ))}
        <p className="absolute inset-0 z-10 flex items-center justify-center text-[13px] text-[var(--ok-fg-soft)]">Parallax</p>
      </div>
    </div>
  )
}

export function CubeSpin() {
  return (
    <div className="ok-effect-stage [perspective:600px]">
      <div className="relative h-16 w-16 ok-anim-spin" style={{ transformStyle: 'preserve-3d', animationDuration: '6s' }}>
        {['front','back','right','left','top','bottom'].map((face, i) => (
          <div key={face} className="absolute inset-0 flex items-center justify-center border border-[color-mix(in_srgb,var(--ok-accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--ok-surface-2)_90%,transparent)] text-[9px] text-[var(--ok-accent)]"
            style={{
              transform: [
                'translateZ(32px)',
                'rotateY(180deg) translateZ(32px)',
                'rotateY(90deg) translateZ(32px)',
                'rotateY(-90deg) translateZ(32px)',
                'rotateX(90deg) translateZ(32px)',
                'rotateX(-90deg) translateZ(32px)',
              ][i],
            }}>{face[0].toUpperCase()}</div>
        ))}
      </div>
    </div>
  )
}

export function PerspectiveGrid() {
  return (
    <div className="ok-effect-stage overflow-hidden">
      <div className="h-40 w-64 origin-bottom scale-y-[0.55]" style={{
        backgroundImage: 'linear-gradient(rgba(8, 145, 178,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 145, 178,0.25) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        transform: 'perspective(400px) rotateX(60deg)',
      }} />
    </div>
  )
}

export function HoverLiftBook() {
  return (
    <div className="ok-effect-stage">
      <div className="group relative h-36 w-28 transition-transform duration-300 hover:-translate-y-2 hover:rotate-1">
        <div className="absolute inset-0 rounded-r-md rounded-l-sm bg-cyan-700 shadow-lg" />
        <div className="absolute inset-y-0 left-1 right-0 rounded-r-md border border-[var(--ok-border)] bg-[var(--ok-surface)] p-3 transition-transform duration-300 group-hover:translate-x-1">
          <p className="text-[10px] text-[var(--ok-muted)]">Chapter</p>
          <p className="mt-2 text-xs text-[var(--ok-fg)]">Lift Book</p>
        </div>
      </div>
    </div>
  )
}

export function TiltBadge() {
  const { ref, style, onMove, onLeave } = useTilt(22)
  return (
    <div className="ok-effect-stage" onMouseMove={onMove} onMouseLeave={onLeave}>
      <span ref={ref} style={style} className="rounded-full border border-[color-mix(in_srgb,var(--ok-accent)_40%,transparent)] bg-[var(--ok-accent-soft)] px-4 py-1.5 text-[13px] font-medium text-[var(--ok-accent)]">
        Tilt badge
      </span>
    </div>
  )
}

export function IsometricTile() {
  return (
    <div className="ok-effect-stage">
      <div className="h-20 w-20 bg-[var(--ok-accent)]/80 transition-transform duration-300 hover:scale-110"
        style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', boxShadow: '8px 8px 0 rgba(8, 145, 178,0.25)' }} />
    </div>
  )
}

export function DepthLayers() {
  const reduced = useReducedMotion()
  const [o, setO] = useState({ x: 0, y: 0 })
  return (
    <div className="ok-effect-stage" onMouseMove={(e) => {
      if (reduced) return
      const r = e.currentTarget.getBoundingClientRect()
      setO({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 })
    }}>
      <div className="relative h-32 w-32">
        {[40, 28, 16].map((s, i) => (
          <span key={s} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--ok-accent)]/30"
            style={{ width: s * 2, height: s * 2, transform: `translate(calc(-50% + ${o.x * (i + 1) * 8}px), calc(-50% + ${o.y * (i + 1) * 8}px))` }} />
        ))}
      </div>
    </div>
  )
}

export function OrbitRing3D() {
  return (
    <div className="ok-effect-stage [perspective:500px]">
      <div className="relative h-20 w-20">
        <span className="absolute inset-4 rounded-full bg-[var(--ok-accent)]/80" />
        <span className="absolute inset-0 rounded-full border border-[var(--ok-accent)]/40 ok-anim-spin" style={{ transform: 'rotateX(70deg)' }} />
      </div>
    </div>
  )
}

export function SkewReveal() {
  return (
    <div className="ok-effect-stage">
      <div className="group relative h-28 w-48 overflow-hidden rounded-lg border border-[var(--ok-border)] bg-[var(--ok-bg)]">
        <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--ok-fg-soft)]">Reveal</div>
        <div className="absolute inset-0 origin-left -skew-x-12 bg-[var(--ok-accent)]/90 transition-transform duration-500 group-hover:translate-x-full" />
      </div>
    </div>
  )
}

export function PrismShard() {
  return (
    <div className="ok-effect-stage">
      <div className="h-28 w-20 ok-anim-shimmer"
        style={{
          clipPath: 'polygon(50% 0%, 100% 35%, 80% 100%, 20% 100%, 0% 35%)',
          backgroundImage: 'linear-gradient(120deg, #155e75, #0891b2, #a5f3fc, #155e75)',
          backgroundSize: '200% 100%',
        }} />
    </div>
  )
}
