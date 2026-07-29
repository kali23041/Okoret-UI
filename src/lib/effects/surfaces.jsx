import { useState } from 'react'
import { useReducedMotion } from './hooks'


export function GlassCard() {
  return (
    <div className="ok-effect-stage">
      <div className="h-40 w-56 rounded-xl border border-[var(--ok-border)] bg-[var(--ok-accent)]/5 p-4 shadow-xl backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ok-muted)]">Glass</p>
        <p className="mt-2 text-sm text-[var(--ok-fg)]">Frosted surface</p>
      </div>
    </div>
  )
}

export function HoloCard() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 50, y: 50 })
  return (
    <div className="ok-effect-stage">
      <div className="h-40 w-56 rounded-xl border border-[var(--ok-border)] p-4"
        onMouseMove={(e) => {
          if (reduced) return
          const r = e.currentTarget.getBoundingClientRect()
          setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
        }}
        style={{ background: `linear-gradient(135deg, rgba(8, 145, 178,0.25), rgba(255,255,255,0.08), rgba(8, 145, 178,0.15)), radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.35), transparent 35%), #111` }}>
        <p className="text-sm text-[var(--ok-fg)]">Holo</p>
      </div>
    </div>
  )
}

export function NeumorphPanel() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-36 w-52 items-center justify-center rounded-2xl bg-[var(--ok-surface)] text-[13px] text-[var(--ok-fg-soft)]"
        style={{ boxShadow: '8px 8px 16px #050505, -8px -8px 16px #1f1f1f' }}>
        Neumorph
      </div>
    </div>
  )
}

export function FrostPanel() {
  return (
    <div className="ok-effect-stage">
      <div className="h-40 w-56 rounded-xl border border-[var(--ok-border)] bg-[var(--ok-accent-soft)] p-4 backdrop-blur-xl">
        <p className="text-sm text-[var(--ok-fg)]">Frost panel</p>
      </div>
    </div>
  )
}

export function SpotlightCard() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 50, y: 50 })
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-64 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)] p-4"
        onMouseMove={(e) => {
          if (reduced) return
          const r = e.currentTarget.getBoundingClientRect()
          setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
        }}
        style={{ background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, rgba(8, 145, 178,0.18), transparent 40%), #0a0a0a` }}>
        <p className="text-sm text-[var(--ok-fg)]">Spotlight</p>
        <p className="mt-1 text-[11px] text-[var(--ok-muted)]">Follows your cursor</p>
      </div>
    </div>
  )
}

export function MetalPlate() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-36 w-52 items-center justify-center rounded-md text-[13px] text-[var(--ok-fg)]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #1a1a1a, #1a1a1a 2px, #222 2px, #222 4px)', border: '1px solid #333' }}>
        Metal
      </div>
    </div>
  )
}

export function CarbonTile() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-36 w-52 items-center justify-center rounded-md text-[13px] text-[var(--ok-fg-soft)]"
        style={{ backgroundImage: 'radial-gradient(circle, #2a2a2a 1px, #111 1px)', backgroundSize: '6px 6px', border: '1px solid #333' }}>
        Carbon
      </div>
    </div>
  )
}

export function EmbossCard() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-36 w-52 items-center justify-center rounded-xl border border-[var(--ok-border)] bg-[var(--ok-surface)] text-[13px] text-[var(--ok-fg-soft)]"
        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.5)' }}>
        Emboss
      </div>
    </div>
  )
}

export function SheenPanel() {
  return (
    <div className="ok-effect-stage">
      <div className="group relative flex h-36 w-52 items-center justify-center overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)] text-[13px] text-[var(--ok-fg-soft)]">
        Sheen
        <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[120%]" />
      </div>
    </div>
  )
}

export function VoidCard() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-36 w-52 items-center justify-center rounded-xl bg-[var(--ok-fg)] text-[13px] text-[var(--ok-muted)]"
        style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9), 0 0 0 1px #1a1a1a' }}>
        Void
      </div>
    </div>
  )
}

export function AuroraCard() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-40 w-56 overflow-hidden rounded-xl border border-[var(--ok-border)] bg-[var(--ok-bg)] p-4">
        <span className="pointer-events-none absolute inset-0 ok-anim-aurora opacity-60" style={{ backgroundImage: 'linear-gradient(120deg,transparent,#0891b255,transparent)' }} />
        <p className="relative text-sm text-[var(--ok-fg)]">Aurora card</p>
      </div>
    </div>
  )
}

export function ClipPathCard() {
  return (
    <div className="ok-effect-stage">
      <div className="flex h-36 w-52 items-center justify-center bg-[var(--ok-accent-soft)] text-[13px] text-[var(--ok-accent)]"
        style={{ clipPath: 'polygon(0 10%, 90% 0, 100% 90%, 10% 100%)' }}>
        Clip path
      </div>
    </div>
  )
}
