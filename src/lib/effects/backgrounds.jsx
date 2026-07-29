import { useState } from 'react'
import { useReducedMotion } from './hooks'


export function MeshGradient() {
  return (
    <div className="ok-effect-stage">
      <div className="h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] ok-anim-aurora"
        style={{ backgroundImage: 'radial-gradient(at 20% 20%, rgba(8, 145, 178,0.45), transparent 40%), radial-gradient(at 80% 0%, rgba(34, 211, 238,0.25), transparent 35%), radial-gradient(at 50% 80%, rgba(21, 94, 117,0.5), transparent 45%), #0a0a0a' }} />
    </div>
  )
}

export function NoiseField() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'
        }} />
        <p className="relative z-10 flex h-full items-center justify-center text-[13px] text-[var(--ok-muted)]">Noise</p>
      </div>
    </div>
  )
}

export function ParticleDrift() {
  const dots = Array.from({ length: 18 }, (_, i) => i)
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]">
        {dots.map((i) => (
          <span key={i} className="absolute h-1 w-1 rounded-full bg-[var(--ok-accent)]/70 ok-anim-float"
            style={{ left: `${(i * 17) % 90 + 5}%`, top: `${(i * 29) % 80 + 10}%`, animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
    </div>
  )
}

export function Starfield() {
  const stars = Array.from({ length: 30 }, (_, i) => i)
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-fg)]">
        {stars.map((i) => (
          <span key={i} className="absolute rounded-full bg-[var(--ok-surface)] ok-anim-pulse"
            style={{ width: (i % 3) + 1, height: (i % 3) + 1, left: `${(i * 37) % 95}%`, top: `${(i * 53) % 90}%`, animationDelay: `${(i % 5) * 0.3}s` }} />
        ))}
      </div>
    </div>
  )
}

export function AuroraWash() {
  return (
    <div className="ok-effect-stage">
      <div className="h-40 w-64 rounded-xl border border-[var(--ok-border)] ok-anim-aurora"
        style={{ backgroundImage: 'linear-gradient(120deg,#083344,#155e75,#0891b2,#083344)' }} />
    </div>
  )
}

export function GridPulse() {
  return (
    <div className="ok-effect-stage">
      <div className="h-40 w-64 rounded-xl border border-[var(--ok-border)] ok-anim-pulse"
        style={{ backgroundImage: 'linear-gradient(rgba(8, 145, 178,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 145, 178,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundColor: '#0a0a0a' }} />
    </div>
  )
}

export function SpotlightBg() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 50, y: 50 })
  return (
    <div className="ok-effect-stage">
      <div className="h-40 w-64 rounded-xl border border-[var(--ok-border)]"
        onMouseMove={(e) => {
          if (reduced) return
          const r = e.currentTarget.getBoundingClientRect()
          setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
        }}
        style={{ background: `radial-gradient(280px circle at ${pos.x}% ${pos.y}%, rgba(8, 145, 178,0.28), transparent 45%), #050505` }} />
    </div>
  )
}

export function WaveField() {
  return (
    <div className="ok-effect-stage">
      <svg viewBox="0 0 200 100" className="h-40 w-64 rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]">
        {[0, 1, 2].map((i) => (
          <path key={i} fill="none" stroke="#0891b2" strokeOpacity={0.4 + i * 0.2} strokeWidth="1.5"
            d="M0 50 Q 50 20 100 50 T 200 50" className="ok-anim-float" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </svg>
    </div>
  )
}

export function BlobField() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]">
        <span className="absolute left-4 top-4 h-24 w-24 bg-[var(--ok-accent)]/30 blur-2xl ok-anim-blob" />
        <span className="absolute bottom-2 right-4 h-28 w-28 bg-teal-400/20 blur-2xl ok-anim-blob" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  )
}

export function DotMatrix() {
  return (
    <div className="ok-effect-stage">
      <div className="grid h-40 w-64 grid-cols-8 gap-2 rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)] p-3">
        {Array.from({ length: 32 }, (_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-[var(--ok-accent)]/40 ok-anim-pulse" style={{ animationDelay: `${(i % 8) * 0.1}s` }} />
        ))}
      </div>
    </div>
  )
}

export function RadialBurst() {
  return (
    <div className="ok-effect-stage">
      <div className="relative flex h-40 w-64 items-center justify-center overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className="absolute h-24 w-px origin-bottom bg-gradient-to-t from-cyan-400/0 to-cyan-400/70"
            style={{ transform: `rotate(${i * 30}deg) translateY(-20px)` }} />
        ))}
      </div>
    </div>
  )
}

export function FogLayer() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-surface)]">
        <span className="absolute -left-10 top-6 h-20 w-40 rounded-full bg-[var(--ok-accent-soft)] blur-2xl ok-anim-float" />
        <span className="absolute right-0 bottom-4 h-24 w-48 rounded-full bg-[var(--ok-accent-soft)] blur-3xl ok-anim-float" style={{ animationDelay: '1s' }} />
        <p className="relative z-10 flex h-full items-center justify-center text-[13px] text-[var(--ok-muted)]">Fog</p>
      </div>
    </div>
  )
}
