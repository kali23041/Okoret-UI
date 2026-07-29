import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = 'src/lib/effects'
const header = `import { useEffect, useRef, useState } from 'react'
import { useTilt, useMagnetic, useReducedMotion } from './hooks'

`

const loaders = header + `
export function OrbitLoader() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 rounded-full border border-neutral-800" />
        <span className="absolute inset-0 ok-anim-spin" style={{ animationDuration: '1.2s' }}>
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-400" />
        </span>
      </div>
    </div>
  )
}

export function WaveBars() {
  return (
    <div className="ok-effect-stage gap-1.5">
      {[0,1,2,3,4].map((i) => (
        <span key={i} className="inline-block h-10 w-1.5 origin-bottom rounded-full bg-emerald-400"
          style={{ animation: \`ok-wave 0.9s ease-in-out \${i * 0.1}s infinite\` }} />
      ))}
    </div>
  )
}

export function DNASpinner() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-16 w-10 ok-anim-spin" style={{ animationDuration: '2s', transformStyle: 'preserve-3d' }}>
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-400"
            style={{ top: \`\${i * 8}px\`, transform: \`translateX(\${Math.sin(i) * 12}px)\` }} />
        ))}
      </div>
    </div>
  )
}

export function PulseRing() {
  return (
    <div className="ok-effect-stage">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-emerald-500/40 ok-anim-pulse" />
        <span className="absolute inset-2 rounded-full border border-emerald-400/30 ok-anim-pulse" style={{ animationDelay: '0.35s' }} />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
    </div>
  )
}

export function LiquidProgress() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-4 w-48 overflow-hidden rounded-full border border-neutral-700 bg-neutral-900">
        <div className="absolute inset-y-0 left-0 w-2/3 bg-emerald-500 ok-anim-aurora" style={{ backgroundImage: 'linear-gradient(90deg,#059669,#34d399,#10b981)' }} />
      </div>
    </div>
  )
}

export function HourglassSpin() {
  return (
    <div className="ok-effect-stage">
      <div className="h-10 w-6 ok-anim-spin border-x-2 border-emerald-400/70" style={{
        clipPath: 'polygon(0 0, 100% 0, 50% 50%, 100% 100%, 0 100%, 50% 50%)',
        animationDuration: '2s',
      }} />
    </div>
  )
}

export function BounceDots() {
  return (
    <div className="ok-effect-stage gap-2">
      {[0,1,2].map((i) => (
        <span key={i} className="h-2.5 w-2.5 rounded-full bg-emerald-400 ok-anim-float" style={{ animationDelay: \`\${i * 0.15}s\` }} />
      ))}
    </div>
  )
}

export function ArcSpinner() {
  return (
    <div className="ok-effect-stage">
      <span className="h-12 w-12 rounded-full border-2 border-neutral-800 border-t-emerald-400 ok-anim-spin" style={{ animationDuration: '0.8s' }} />
    </div>
  )
}

export function SquareOrbit() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-14 w-14">
        <span className="absolute inset-2 border border-neutral-700" />
        <span className="absolute inset-0 ok-anim-spin" style={{ animationDuration: '2s' }}>
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 bg-emerald-400" />
        </span>
      </div>
    </div>
  )
}

export function HeartbeatLoader() {
  return (
    <div className="ok-effect-stage">
      <span className="text-2xl text-emerald-400 ok-anim-pulse">♥</span>
    </div>
  )
}

export function SegmentRing() {
  return (
    <div className="ok-effect-stage">
      <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
        <circle cx="18" cy="18" r="15" fill="none" stroke="#262626" strokeWidth="3" />
        <circle cx="18" cy="18" r="15" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="70 100" strokeLinecap="round" className="ok-anim-spin" style={{ transformOrigin: 'center', animationDuration: '2s' }} />
      </svg>
    </div>
  )
}

export function InfinityLoop() {
  return (
    <div className="ok-effect-stage">
      <svg viewBox="0 0 100 40" className="h-12 w-28">
        <path d="M20 20 C 20 5, 45 5, 50 20 C 55 35, 80 35, 80 20 C 80 5, 55 5, 50 20 C 45 35, 20 35, 20 20"
          fill="none" stroke="#10b981" strokeWidth="2" className="ok-anim-shimmer" style={{ strokeDasharray: 8 }} />
      </svg>
    </div>
  )
}
`

const surfaces = header + `
export function GlassCard() {
  return (
    <div className="ok-effect-stage">
      <div className="h-32 w-48 rounded-xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Glass</p>
        <p className="mt-2 text-sm text-neutral-100">Frosted surface</p>
      </div>
    </div>
  )
}

export function HoloCard() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 50, y: 50 })
  return (
    <div className="ok-effect-stage">
      <div className="h-32 w-48 rounded-xl border border-neutral-700 p-4"
        onMouseMove={(e) => {
          if (reduced) return
          const r = e.currentTarget.getBoundingClientRect()
          setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
        }}
        style={{ background: \`linear-gradient(135deg, rgba(16,185,129,0.25), rgba(255,255,255,0.08), rgba(16,185,129,0.15)), radial-gradient(circle at \${pos.x}% \${pos.y}%, rgba(255,255,255,0.35), transparent 35%), #111\` }}>
        <p className="text-sm text-neutral-100">Holo</p>
      </div>
    </div>
  )
}

export function NeumorphPanel() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-28 w-44 items-center justify-center rounded-2xl bg-neutral-900 text-[12px] text-neutral-300"
        style={{ boxShadow: '8px 8px 16px #050505, -8px -8px 16px #1f1f1f' }}>
        Neumorph
      </div>
    </div>
  )
}

export function FrostPanel() {
  return (
    <div className="ok-effect-stage">
      <div className="h-32 w-48 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
        <p className="text-sm text-neutral-100">Frost panel</p>
      </div>
    </div>
  )
}

export function SpotlightCard() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 50, y: 50 })
  return (
    <div className="ok-effect-stage">
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        onMouseMove={(e) => {
          if (reduced) return
          const r = e.currentTarget.getBoundingClientRect()
          setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
        }}
        style={{ background: \`radial-gradient(420px circle at \${pos.x}% \${pos.y}%, rgba(16,185,129,0.18), transparent 40%), #0a0a0a\` }}>
        <p className="text-sm text-neutral-100">Spotlight</p>
        <p className="mt-1 text-[11px] text-neutral-500">Follows your cursor</p>
      </div>
    </div>
  )
}

export function MetalPlate() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-28 w-44 items-center justify-center rounded-md text-[12px] text-neutral-200"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #1a1a1a, #1a1a1a 2px, #222 2px, #222 4px)', border: '1px solid #333' }}>
        Metal
      </div>
    </div>
  )
}

export function CarbonTile() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-28 w-44 items-center justify-center rounded-md text-[12px] text-neutral-300"
        style={{ backgroundImage: 'radial-gradient(circle, #2a2a2a 1px, #111 1px)', backgroundSize: '6px 6px', border: '1px solid #333' }}>
        Carbon
      </div>
    </div>
  )
}

export function EmbossCard() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-28 w-44 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900 text-[12px] text-neutral-300"
        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.5)' }}>
        Emboss
      </div>
    </div>
  )
}

export function SheenPanel() {
  return (
    <div className="ok-effect-stage">
      <div className="group relative flex h-28 w-44 items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 text-[12px] text-neutral-300">
        Sheen
        <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[120%]" />
      </div>
    </div>
  )
}

export function VoidCard() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-28 w-44 items-center justify-center rounded-xl bg-black text-[12px] text-neutral-500"
        style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9), 0 0 0 1px #1a1a1a' }}>
        Void
      </div>
    </div>
  )
}

export function AuroraCard() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-32 w-48 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-4">
        <span className="pointer-events-none absolute inset-0 ok-anim-aurora opacity-60" style={{ backgroundImage: 'linear-gradient(120deg,transparent,#10b98155,transparent)' }} />
        <p className="relative text-sm text-neutral-100">Aurora card</p>
      </div>
    </div>
  )
}

export function ClipPathCard() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-28 w-44 items-center justify-center bg-emerald-500/20 text-[12px] text-emerald-200"
        style={{ clipPath: 'polygon(0 10%, 90% 0, 100% 90%, 10% 100%)' }}>
        Clip path
      </div>
    </div>
  )
}
`

const toys = header + `
export function ConfettiBurst() {
  const [bits, setBits] = useState([])
  return (
    <div className="ok-effect-stage">
      <button type="button" onClick={() => {
        const next = Array.from({ length: 18 }, (_, i) => ({
          id: Date.now() + i, x: Math.random() * 100 - 50, c: ['#10b981','#34d399','#a3a3a3','#e5e5e5'][i % 4],
        }))
        setBits(next)
        setTimeout(() => setBits([]), 900)
      }} className="relative z-10 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-[12px] text-neutral-200">
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
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        {pts.map((p) => (
          <span key={p.id} className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-emerald-300" style={{ left: p.x, top: p.y }} />
        ))}
        <p className="absolute inset-0 flex items-center justify-center text-[11px] text-neutral-500">Move to sparkle</p>
      </div>
    </div>
  )
}

export function CursorGlow() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 50, y: 50 })
  return (
    <div className="ok-effect-stage">
      <div className="h-36 w-56 rounded-xl border border-neutral-800"
        onMouseMove={(e) => {
          if (reduced) return
          const r = e.currentTarget.getBoundingClientRect()
          setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
        }}
        style={{ background: \`radial-gradient(180px circle at \${pos.x}% \${pos.y}%, rgba(16,185,129,0.35), transparent 50%), #0a0a0a\` }} />
    </div>
  )
}

export function MagnetGrid() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })
  return (
    <div className="ok-effect-stage">
      <div className="grid h-36 w-56 grid-cols-6 gap-3 rounded-xl border border-neutral-800 bg-neutral-950 p-4"
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
          return <span key={i} className="h-2 w-2 rounded-full bg-emerald-400/80" style={{ transform: \`translate(\${dx}px,\${dy}px)\` }} />
        })}
      </div>
    </div>
  )
}

export function MarqueeStrip() {
  return (
    <div className="ok-effect-stage overflow-hidden">
      <div className="w-56 overflow-hidden rounded-md border border-neutral-800 bg-neutral-950 py-2">
        <div className="flex w-max gap-6 ok-anim-marquee whitespace-nowrap text-[12px] text-emerald-300">
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
          <div key={i} className="absolute inset-x-0 mx-auto h-10 w-36 rounded-md border border-neutral-700 bg-neutral-900 transition-transform duration-300 group-hover:-translate-y-2"
            style={{ top: i * 14, transform: \`rotate(\${(i - 1) * 2}deg)\`, zIndex: 3 - i }} />
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
        className={"rounded-md border border-neutral-700 bg-neutral-900 px-4 py-6 text-[12px] text-neutral-200 " + (shake ? 'ok-anim-glitch' : '')}>
        Shake me
      </button>
    </div>
  )
}

export function BubblePop() {
  const [bubbles, setBubbles] = useState(() => Array.from({ length: 6 }, (_, i) => ({ id: i, left: 10 + i * 14 })))
  return (
    <div className="ok-effect-stage">
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        {bubbles.map((b) => (
          <button key={b.id} type="button" className="absolute bottom-4 h-6 w-6 rounded-full bg-emerald-400/40 ok-anim-float"
            style={{ left: \`\${b.left}%\` }}
            onClick={() => setBubbles((prev) => prev.filter((x) => x.id !== b.id))}
            aria-label="Pop bubble" />
        ))}
        {!bubbles.length && (
          <button type="button" className="absolute inset-0 text-[11px] text-neutral-500"
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
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          setPts((p) => [...p.slice(-20), { x: e.clientX - r.left, y: e.clientY - r.top }])
        }}>
        {pts.map((p, i) => (
          <span key={i} className="absolute rounded-full bg-emerald-400" style={{ left: p.x, top: p.y, width: 4 + i * 0.2, height: 4 + i * 0.2, opacity: i / pts.length }} />
        ))}
      </div>
    </div>
  )
}

export function RadarPing() {
  return (
    <div className="ok-effect-stage">
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-emerald-800/50">
        <span className="absolute inset-0 rounded-full border border-emerald-500/30 ok-anim-pulse" />
        <span className="absolute inset-0 origin-center ok-anim-spin" style={{ animationDuration: '3s' }}>
          <span className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-emerald-400 to-transparent" />
        </span>
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>
    </div>
  )
}

export function MoodOrb() {
  return (
    <div className="ok-effect-stage">
      <div className="h-20 w-20 rounded-full ok-anim-aurora ok-anim-pulse"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #a7f3d0, #10b981 45%, #064e3b 80%)', boxShadow: '0 0 40px rgba(16,185,129,0.4)' }} />
    </div>
  )
}

export function GravityDots() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })
  return (
    <div className="ok-effect-stage">
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950"
        onMouseMove={(e) => {
          if (reduced) return
          const r = e.currentTarget.getBoundingClientRect()
          setPos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
        }}>
        {Array.from({ length: 16 }, (_, i) => {
          const bx = (i % 4) / 3
          const by = Math.floor(i / 4) / 3
          return (
            <span key={i} className="absolute h-2 w-2 rounded-full bg-emerald-400/80 transition-transform duration-200"
              style={{ left: \`\${bx * 80 + 10}%\`, top: \`\${by * 70 + 15}%\`, transform: \`translate(\${(pos.x - bx) * 24}px, \${(pos.y - by) * 24}px)\` }} />
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
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950"
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          const id = Date.now()
          setEchoes((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }])
          setTimeout(() => setEchoes((p) => p.filter((x) => x.id !== id)), 700)
        }}>
        <p className="absolute inset-0 flex items-center justify-center text-[11px] text-neutral-500">Click for echoes</p>
        {echoes.map((e) => (
          <span key={e.id} className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400 ok-anim-pulse"
            style={{ left: e.x, top: e.y }} />
        ))}
      </div>
    </div>
  )
}
`

writeFileSync(join(root, 'loaders.jsx'), loaders)
writeFileSync(join(root, 'surfaces.jsx'), surfaces)
writeFileSync(join(root, 'toys.jsx'), toys)
console.log('loaders+surfaces+toys written')
