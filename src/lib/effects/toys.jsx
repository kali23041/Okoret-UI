import { useState } from 'react'
import { useReducedMotion } from './hooks'


export function ConfettiBurst() {
  const [bits, setBits] = useState([])
  return (
    <div className="ok-effect-stage">
      <button type="button" onClick={() => {
        const next = Array.from({ length: 18 }, (_, i) => ({
          id: Date.now() + i, x: Math.random() * 100 - 50, c: ['#0891b2','#22d3ee','#a3a3a3','#e5e5e5'][i % 4],
        }))
        setBits(next)
        setTimeout(() => setBits([]), 900)
      }} className="relative z-10 rounded-md border border-[var(--ok-border)] bg-[var(--ok-surface)] px-3 py-1.5 text-[13px] text-[var(--ok-fg)]">
        Burst
      </button>
      {bits.map((b) => (
        <span key={b.id} className="pointer-events-none absolute h-2 w-2 rounded-sm"
          style={{ left: '50%', top: '45%', background: b.c, animation: 'ok-confetti 0.9s ease-out forwards', marginLeft: b.x }} />
      ))}
    </div>
  )
}

export function SparkleTrail() {
  const [pts, setPts] = useState([])
  return (
    <div className="ok-effect-stage h-40" onMouseMove={(e) => {
      const r = e.currentTarget.getBoundingClientRect()
      const p = { id: Date.now() + Math.random(), x: e.clientX - r.left, y: e.clientY - r.top }
      setPts((prev) => [...prev.slice(-18), p])
    }}>
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]">
        {pts.map((p) => (
          <span key={p.id} className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-cyan-300" style={{ left: p.x, top: p.y }} />
        ))}
        <p className="absolute inset-0 flex items-center justify-center text-[11px] text-[var(--ok-muted)]">Move to sparkle</p>
      </div>
    </div>
  )
}

export function CursorGlow() {
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
        style={{ background: `radial-gradient(180px circle at ${pos.x}% ${pos.y}%, rgba(8, 145, 178,0.35), transparent 50%), #0a0a0a` }} />
    </div>
  )
}

export function MagnetGrid() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })
  return (
    <div className="ok-effect-stage">
      <div className="grid h-40 w-64 grid-cols-6 gap-3 rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)] p-4"
        onMouseMove={(e) => {
          if (reduced) return
          const r = e.currentTarget.getBoundingClientRect()
          setPos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
        }}>
        {Array.from({ length: 24 }, (_, i) => {
          const cx = (i % 6) / 5
          const cy = Math.floor(i / 6) / 3
          const dx = (pos.x - cx) * 8
          const dy = (pos.y - cy) * 8
          return <span key={i} className="h-2 w-2 rounded-full bg-[var(--ok-accent)]/80" style={{ transform: `translate(${dx}px,${dy}px)` }} />
        })}
      </div>
    </div>
  )
}

export function MarqueeStrip() {
  return (
    <div className="ok-effect-stage overflow-hidden">
      <div className="w-56 overflow-hidden rounded-md border border-[var(--ok-border)] bg-[var(--ok-bg)] py-2">
        <div className="flex w-max gap-6 ok-anim-marquee whitespace-nowrap text-[13px] text-[var(--ok-accent)]">
          <span>Okoret · Motion · Effects · 3D · Glow · Okoret · Motion · Effects · 3D · Glow ·</span>
          <span>Okoret · Motion · Effects · 3D · Glow · Okoret · Motion · Effects · 3D · Glow ·</span>
        </div>
      </div>
    </div>
  )
}

export function SpringStack() {
  return (
    <div className="ok-effect-stage">
      <div className="group relative h-28 w-40">
        {[0,1,2].map((i) => (
          <div key={i} className="absolute inset-x-0 mx-auto h-10 w-36 rounded-md border border-[var(--ok-border)] bg-[var(--ok-surface)] transition-transform duration-300 group-hover:-translate-y-2"
            style={{ top: i * 14, transform: `rotate(${(i - 1) * 2}deg)`, zIndex: 3 - i }} />
        ))}
      </div>
    </div>
  )
}

export function ShakeBox() {
  const [shake, setShake] = useState(false)
  return (
    <div className="ok-effect-stage">
      <button type="button" onClick={() => { setShake(true); setTimeout(() => setShake(false), 400) }}
        className={"rounded-md border border-[var(--ok-border)] bg-[var(--ok-surface)] px-4 py-6 text-[13px] text-[var(--ok-fg)] " + (shake ? 'ok-anim-glitch' : '')}>
        Shake me
      </button>
    </div>
  )
}

export function BubblePop() {
  const [bubbles, setBubbles] = useState(() => Array.from({ length: 6 }, (_, i) => ({ id: i, left: 10 + i * 14 })))
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]">
        {bubbles.map((b) => (
          <button key={b.id} type="button" className="absolute bottom-4 h-6 w-6 rounded-full bg-[var(--ok-accent)]/40 ok-anim-float"
            style={{ left: `${b.left}%` }}
            onClick={() => setBubbles((prev) => prev.filter((x) => x.id !== b.id))}
            aria-label="Pop bubble" />
        ))}
        {!bubbles.length && (
          <button type="button" className="absolute inset-0 text-[11px] text-[var(--ok-muted)]"
            onClick={() => setBubbles(Array.from({ length: 6 }, (_, i) => ({ id: Date.now() + i, left: 10 + i * 14 })))}>
            Reset bubbles
          </button>
        )}
      </div>
    </div>
  )
}

export function TrailSnake() {
  const [pts, setPts] = useState([])
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          setPts((p) => [...p.slice(-20), { x: e.clientX - r.left, y: e.clientY - r.top }])
        }}>
        {pts.map((p, i) => (
          <span key={i} className="absolute rounded-full bg-[var(--ok-accent)]" style={{ left: p.x, top: p.y, width: 4 + i * 0.2, height: 4 + i * 0.2, opacity: i / pts.length }} />
        ))}
      </div>
    </div>
  )
}

export function RadarPing() {
  return (
    <div className="ok-effect-stage">
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--ok-accent)_45%,transparent)]">
        <span className="absolute inset-0 rounded-full border border-[var(--ok-accent)]/30 ok-anim-pulse" />
        <span className="absolute inset-0 origin-center ok-anim-spin" style={{ animationDuration: '3s' }}>
          <span className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 to-transparent" />
        </span>
        <span className="h-2 w-2 rounded-full bg-[var(--ok-accent)]" />
      </div>
    </div>
  )
}

export function MoodOrb() {
  return (
    <div className="ok-effect-stage">
      <div className="h-20 w-20 rounded-full ok-anim-aurora ok-anim-pulse"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #a5f3fc, #0891b2 45%, #155e75 80%)', boxShadow: '0 0 40px rgba(8, 145, 178,0.4)' }} />
    </div>
  )
}

export function GravityDots() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]"
        onMouseMove={(e) => {
          if (reduced) return
          const r = e.currentTarget.getBoundingClientRect()
          setPos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
        }}>
        {Array.from({ length: 16 }, (_, i) => {
          const bx = (i % 4) / 3
          const by = Math.floor(i / 4) / 3
          return (
            <span key={i} className="absolute h-2 w-2 rounded-full bg-[var(--ok-accent)]/80 transition-transform duration-200"
              style={{ left: `${bx * 80 + 10}%`, top: `${by * 70 + 15}%`, transform: `translate(${(pos.x - bx) * 24}px, ${(pos.y - by) * 24}px)` }} />
          )
        })}
      </div>
    </div>
  )
}

export function EchoClick() {
  const [echoes, setEchoes] = useState([])
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)]"
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          const id = Date.now()
          setEchoes((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }])
          setTimeout(() => setEchoes((p) => p.filter((x) => x.id !== id)), 700)
        }}>
        <p className="absolute inset-0 flex items-center justify-center text-[11px] text-[var(--ok-muted)]">Click for echoes</p>
        {echoes.map((e) => (
          <span key={e.id} className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--ok-accent)] ok-anim-pulse"
            style={{ left: e.x, top: e.y }} />
        ))}
      </div>
    </div>
  )
}
