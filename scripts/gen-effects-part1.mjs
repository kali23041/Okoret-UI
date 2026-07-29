import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = 'src/lib/effects'
const header = `import { useEffect, useRef, useState } from 'react'
import { useTilt, useMagnetic, useReducedMotion } from './hooks'

`

const buttons = header + `
export function MagneticButton() {
  const { ref, style, onMove, onLeave } = useMagnetic(0.4)
  return (
    <div className="ok-effect-stage" onMouseMove={onMove} onMouseLeave={onLeave}>
      <button ref={ref} type="button" style={style}
        className="rounded-full bg-emerald-500 px-5 py-2.5 text-[13px] font-medium text-emerald-950 shadow-[0_0_30px_rgba(16,185,129,0.35)]">
        Magnetic
      </button>
    </div>
  )
}

export function MorphButton() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-2xl border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-[13px] text-neutral-100 transition-all duration-500 hover:rounded-full hover:border-emerald-600 hover:bg-emerald-500 hover:text-emerald-950">
        Morph
      </button>
    </div>
  )
}

export function GooeyButton() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="relative rounded-full bg-emerald-500 px-6 py-2.5 text-[13px] font-medium text-emerald-950">
        <span className="absolute -left-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-emerald-500 ok-anim-blob" />
        <span className="absolute -right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-emerald-400 ok-anim-blob" style={{ animationDelay: '1s' }} />
        <span className="relative">Gooey</span>
      </button>
    </div>
  )
}

export function RippleBurst() {
  const [rips, setRips] = useState([])
  return (
    <div className="ok-effect-stage">
      <button type="button" className="relative overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-[13px] text-neutral-100"
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          const id = Date.now()
          setRips((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }])
          setTimeout(() => setRips((p) => p.filter((x) => x.id !== id)), 600)
        }}>
        Ripple
        {rips.map((rip) => (
          <span key={rip.id} className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/50"
            style={{ left: rip.x, top: rip.y, animation: 'ok-pulse-soft 0.6s ease-out forwards', transform: 'scale(6)', opacity: 0 }} />
        ))}
      </button>
    </div>
  )
}

export function NeonPulseBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-md border border-emerald-500/60 bg-neutral-950 px-5 py-2.5 text-[13px] text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.45)] ok-anim-pulse">
        Neon pulse
      </button>
    </div>
  )
}

export function ShimmerCTA() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="ok-anim-shimmer rounded-md px-5 py-2.5 text-[13px] font-medium text-neutral-950"
        style={{ backgroundImage: 'linear-gradient(110deg,#10b981 0%,#6ee7b7 45%,#10b981 60%,#059669 100%)', backgroundSize: '200% 100%' }}>
        Shimmer
      </button>
    </div>
  )
}

export function SplitFillBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="group relative overflow-hidden rounded-md border border-neutral-700 px-5 py-2.5 text-[13px] text-neutral-100">
        <span className="absolute inset-y-0 left-0 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-1/2" />
        <span className="absolute inset-y-0 right-0 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-1/2" />
        <span className="relative z-10 group-hover:text-emerald-950">Split fill</span>
      </button>
    </div>
  )
}

export function ElasticBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-md bg-neutral-100 px-5 py-2.5 text-[13px] font-medium text-neutral-950 transition-transform duration-300 hover:scale-110 active:scale-95">
        Elastic
      </button>
    </div>
  )
}

export function BorderDrawBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="group relative rounded-md px-5 py-2.5 text-[13px] text-neutral-200">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
          <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="6" fill="none" stroke="#10b981" strokeWidth="2"
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
      <button type="button" className="group inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-[13px] text-neutral-100">
        Continue
        <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </div>
  )
}

export function GlitchBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="relative rounded-md border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-[13px] text-neutral-100 hover:ok-anim-glitch">
        <span className="absolute inset-0 text-emerald-400 opacity-0 hover:opacity-70" aria-hidden>Glitch</span>
        Glitch
      </button>
    </div>
  )
}

export function LiquidBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="group relative overflow-hidden rounded-md border border-neutral-700 px-5 py-2.5 text-[13px] text-neutral-100">
        <span className="absolute inset-x-0 bottom-0 h-0 bg-emerald-500/90 transition-all duration-500 group-hover:h-full" />
        <span className="relative z-10 group-hover:text-emerald-950">Liquid</span>
      </button>
    </div>
  )
}

export function PixelBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-none border-2 border-emerald-500 bg-neutral-950 px-4 py-2 font-mono text-[12px] text-emerald-300 shadow-[4px_4px_0_#064e3b] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
        PIXEL
      </button>
    </div>
  )
}

export function OrbitIconBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="relative rounded-full border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-[13px] text-neutral-100">
        Orbit
        <span className="absolute inset-0 ok-anim-spin" style={{ animationDuration: '3s' }}>
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-400" />
        </span>
      </button>
    </div>
  )
}

export function ExpandPillBtn() {
  return (
    <div className="ok-effect-stage">
      <button type="button" className="rounded-full border border-emerald-700/50 bg-emerald-500/10 px-3 py-2 text-[12px] text-emerald-300 transition-all duration-300 hover:px-8 hover:bg-emerald-500 hover:text-emerald-950">
        Expand
      </button>
    </div>
  )
}
`

const borders = header + `
function Frame({ children, className = '' }) {
  return <div className={"ok-effect-stage"}><div className={"relative flex h-28 w-48 items-center justify-center " + className}>{children}</div></div>
}

export function AnimatedGradientBorder() {
  return (
    <Frame>
      <div className="relative rounded-xl p-[1px]" style={{ background: 'conic-gradient(from var(--ok-angle,0deg), #10b981, #064e3b, #a7f3d0, #10b981)', animation: 'ok-spin-slow 4s linear infinite' }}>
        <div className="flex h-24 w-44 items-center justify-center rounded-[11px] bg-neutral-950 text-[12px] text-neutral-300">Gradient border</div>
      </div>
    </Frame>
  )
}

export function NeonFrame() {
  return (
    <Frame>
      <div className="flex h-24 w-44 items-center justify-center rounded-lg border border-emerald-400/70 bg-neutral-950 text-[12px] text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.55),inset_0_0_18px_rgba(16,185,129,0.12)]">
        Neon frame
      </div>
    </Frame>
  )
}

export function AuroraEdge() {
  return (
    <Frame>
      <div className="ok-anim-aurora relative rounded-xl p-[1px]" style={{ backgroundImage: 'linear-gradient(120deg,#10b981,#34d399,#6ee7b7,#059669)' }}>
        <div className="flex h-24 w-44 items-center justify-center rounded-[11px] bg-neutral-950 text-[12px] text-neutral-300">Aurora edge</div>
      </div>
    </Frame>
  )
}

export function ScanlineBorder() {
  return (
    <Frame>
      <div className="relative flex h-24 w-44 items-center justify-center overflow-hidden rounded-lg border border-neutral-700 bg-neutral-950 text-[12px] text-neutral-300">
        Scanline
        <span className="pointer-events-none absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent" style={{ animation: 'ok-scan 2.2s linear infinite' }} />
      </div>
    </Frame>
  )
}

export function DashedOrbitBorder() {
  return (
    <Frame>
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-dashed border-emerald-500/60 ok-anim-spin" style={{ animationDuration: '10s' }} />
        <span className="text-[11px] text-neutral-300">Dashed</span>
      </div>
    </Frame>
  )
}

export function DoubleGlowRing() {
  return (
    <Frame>
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
        <span className="absolute inset-3 rounded-full shadow-[0_0_16px_rgba(52,211,153,0.45)]" />
        <span className="text-[11px] text-emerald-200">Glow</span>
      </div>
    </Frame>
  )
}

export function CornerBrackets() {
  return (
    <Frame>
      <div className="relative flex h-24 w-44 items-center justify-center text-[12px] text-neutral-300">
        <span className="absolute left-2 top-2 h-4 w-4 border-l border-t border-emerald-400" />
        <span className="absolute right-2 top-2 h-4 w-4 border-r border-t border-emerald-400" />
        <span className="absolute bottom-2 left-2 h-4 w-4 border-b border-l border-emerald-400" />
        <span className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-emerald-400" />
        Brackets
      </div>
    </Frame>
  )
}

export function PulseOutline() {
  return (
    <Frame>
      <div className="flex h-24 w-44 items-center justify-center rounded-lg border-2 border-emerald-500/50 text-[12px] text-neutral-300 ok-anim-pulse">
        Pulse outline
      </div>
    </Frame>
  )
}

export function RainbowTrace() {
  return (
    <Frame>
      <div className="relative rounded-xl p-[1px] ok-anim-spin" style={{ background: 'conic-gradient(#10b981,#34d399,#a3a3a3,#10b981)', animationDuration: '3s' }}>
        <div className="flex h-24 w-44 items-center justify-center rounded-[11px] bg-neutral-950 text-[12px] text-neutral-300">Rainbow</div>
      </div>
    </Frame>
  )
}

export function SoftBloomFrame() {
  return (
    <Frame>
      <div className="flex h-24 w-44 items-center justify-center rounded-xl bg-neutral-900 text-[12px] text-neutral-200 shadow-[0_0_50px_rgba(16,185,129,0.25)]">
        Soft bloom
      </div>
    </Frame>
  )
}

export function InsetShine() {
  return (
    <Frame>
      <div className="group relative flex h-24 w-44 items-center justify-center overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 text-[12px] text-neutral-300">
        Inset shine
        <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/10 transition-all duration-700 group-hover:left-[120%]" />
      </div>
    </Frame>
  )
}

export function CyberCutBorder() {
  return (
    <Frame>
      <div className="flex h-24 w-44 items-center justify-center bg-neutral-950 text-[12px] text-emerald-300"
        style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)', boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.5)' }}>
        Cyber cut
      </div>
    </Frame>
  )
}
`

writeFileSync(join(root, 'buttons.jsx'), buttons)
writeFileSync(join(root, 'borders.jsx'), borders)
console.log('buttons+borders written')
