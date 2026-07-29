import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = 'src/lib/effects'
const header = `import { useEffect, useRef, useState } from 'react'
import { useTilt, useMagnetic, useReducedMotion } from './hooks'

`

const backgrounds = header + `
export function MeshGradient() {
  return (
    <div className="ok-effect-stage">
      <div className="h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 ok-anim-aurora"
        style={{ backgroundImage: 'radial-gradient(at 20% 20%, rgba(16,185,129,0.45), transparent 40%), radial-gradient(at 80% 0%, rgba(52,211,153,0.25), transparent 35%), radial-gradient(at 50% 80%, rgba(6,78,59,0.5), transparent 45%), #0a0a0a' }} />
    </div>
  )
}

export function NoiseField() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.85\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\'/%3E%3C/svg%3E")'
        }} />
        <p className="relative z-10 flex h-full items-center justify-center text-[12px] text-neutral-400">Noise</p>
      </div>
    </div>
  )
}

export function ParticleDrift() {
  const dots = Array.from({ length: 18 }, (_, i) => i)
  return (
    <div className="ok-effect-stage">
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        {dots.map((i) => (
          <span key={i} className="absolute h-1 w-1 rounded-full bg-emerald-400/70 ok-anim-float"
            style={{ left: \`\${(i * 17) % 90 + 5}%\`, top: \`\${(i * 29) % 80 + 10}%\`, animationDelay: \`\${i * 0.12}s\` }} />
        ))}
      </div>
    </div>
  )
}

export function Starfield() {
  const stars = Array.from({ length: 30 }, (_, i) => i)
  return (
    <div className="ok-effect-stage">
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-black">
        {stars.map((i) => (
          <span key={i} className="absolute rounded-full bg-white ok-anim-pulse"
            style={{ width: (i % 3) + 1, height: (i % 3) + 1, left: \`\${(i * 37) % 95}%\`, top: \`\${(i * 53) % 90}%\`, animationDelay: \`\${(i % 5) * 0.3}s\` }} />
        ))}
      </div>
    </div>
  )
}

export function AuroraWash() {
  return (
    <div className="ok-effect-stage">
      <div className="h-36 w-56 rounded-xl border border-neutral-800 ok-anim-aurora"
        style={{ backgroundImage: 'linear-gradient(120deg,#022c22,#064e3b,#10b981,#022c22)' }} />
    </div>
  )
}

export function GridPulse() {
  return (
    <div className="ok-effect-stage">
      <div className="h-36 w-56 rounded-xl border border-neutral-800 ok-anim-pulse"
        style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundColor: '#0a0a0a' }} />
    </div>
  )
}

export function SpotlightBg() {
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
        style={{ background: \`radial-gradient(280px circle at \${pos.x}% \${pos.y}%, rgba(16,185,129,0.28), transparent 45%), #050505\` }} />
    </div>
  )
}

export function WaveField() {
  return (
    <div className="ok-effect-stage">
      <svg viewBox="0 0 200 100" className="h-36 w-56 rounded-xl border border-neutral-800 bg-neutral-950">
        {[0, 1, 2].map((i) => (
          <path key={i} fill="none" stroke="#10b981" strokeOpacity={0.4 + i * 0.2} strokeWidth="1.5"
            d="M0 50 Q 50 20 100 50 T 200 50" className="ok-anim-float" style={{ animationDelay: \`\${i * 0.3}s\` }} />
        ))}
      </svg>
    </div>
  )
}

export function BlobField() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        <span className="absolute left-4 top-4 h-24 w-24 bg-emerald-500/30 blur-2xl ok-anim-blob" />
        <span className="absolute bottom-2 right-4 h-28 w-28 bg-teal-400/20 blur-2xl ok-anim-blob" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  )
}

export function DotMatrix() {
  return (
    <div className="ok-effect-stage">
      <div className="grid h-36 w-56 grid-cols-8 gap-2 rounded-xl border border-neutral-800 bg-neutral-950 p-3">
        {Array.from({ length: 32 }, (_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-emerald-500/40 ok-anim-pulse" style={{ animationDelay: \`\${(i % 8) * 0.1}s\` }} />
        ))}
      </div>
    </div>
  )
}

export function RadialBurst() {
  return (
    <div className="ok-effect-stage">
      <div className="relative flex h-36 w-56 items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className="absolute h-24 w-px origin-bottom bg-gradient-to-t from-emerald-400/0 to-emerald-400/70"
            style={{ transform: \`rotate(\${i * 30}deg) translateY(-20px)\` }} />
        ))}
      </div>
    </div>
  )
}

export function FogLayer() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-36 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
        <span className="absolute -left-10 top-6 h-20 w-40 rounded-full bg-white/10 blur-2xl ok-anim-float" />
        <span className="absolute right-0 bottom-4 h-24 w-48 rounded-full bg-emerald-500/10 blur-3xl ok-anim-float" style={{ animationDelay: '1s' }} />
        <p className="relative z-10 flex h-full items-center justify-center text-[12px] text-neutral-400">Fog</p>
      </div>
    </div>
  )
}
`

const text = header + `
export function GradientText() {
  return (
    <div className="ok-effect-stage">
      <p className="ok-anim-shimmer bg-clip-text text-2xl font-semibold text-transparent"
        style={{ backgroundImage: 'linear-gradient(90deg,#6ee7b7,#10b981,#a3a3a3,#6ee7b7)', backgroundSize: '200% 100%' }}>
        Gradient
      </p>
    </div>
  )
}

export function GlitchText() {
  return (
    <div className="ok-effect-stage">
      <p className="relative text-2xl font-semibold text-neutral-100 ok-anim-glitch">
        Glitch
        <span className="absolute inset-0 text-emerald-400 opacity-70" aria-hidden style={{ transform: 'translate(2px,-1px)' }}>Glitch</span>
      </p>
    </div>
  )
}

export function ScrambleHover() {
  const target = 'SCRAMBLE'
  const [text, setText] = useState(target)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return (
    <div className="ok-effect-stage">
      <button type="button" className="font-mono text-xl tracking-widest text-emerald-300"
        onMouseEnter={() => {
          let i = 0
          const id = setInterval(() => {
            setText(target.split('').map((ch, idx) => (idx < i ? ch : chars[Math.floor(Math.random() * 26)])).join(''))
            i += 1
            if (i > target.length) clearInterval(id)
          }, 40)
        }}
        onMouseLeave={() => setText(target)}
      >{text}</button>
    </div>
  )
}

export function TypeReveal() {
  const full = 'Type reveal…'
  const [n, setN] = useState(0)
  useEffect(() => {
    if (n >= full.length) return undefined
    const t = setTimeout(() => setN((v) => v + 1), 70)
    return () => clearTimeout(t)
  }, [n])
  return (
    <div className="ok-effect-stage">
      <p className="font-mono text-sm text-neutral-200">{full.slice(0, n)}<span className="animate-pulse">|</span></p>
    </div>
  )
}

export function NeonSign() {
  return (
    <div className="ok-effect-stage">
      <p className="text-2xl font-semibold tracking-[0.2em] text-emerald-300 ok-anim-pulse"
        style={{ textShadow: '0 0 8px #10b981, 0 0 24px #10b981' }}>NEON</p>
    </div>
  )
}

export function OutlineFillText() {
  return (
    <div className="ok-effect-stage">
      <p className="text-3xl font-bold text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_#10b981] hover:text-emerald-400 hover:[-webkit-text-stroke:0]">
        FILL
      </p>
    </div>
  )
}

export function WaveLetters() {
  const word = 'WAVES'
  return (
    <div className="ok-effect-stage">
      <p className="flex gap-1 text-2xl font-semibold text-neutral-100">
        {word.split('').map((ch, i) => (
          <span key={i} className="ok-anim-float inline-block" style={{ animationDelay: \`\${i * 0.1}s\` }}>{ch}</span>
        ))}
      </p>
    </div>
  )
}

export function MirrorText() {
  return (
    <div className="ok-effect-stage flex-col gap-1">
      <p className="text-xl font-semibold text-neutral-100">Mirror</p>
      <p className="scale-y-[-1] text-xl font-semibold text-neutral-100 opacity-30 blur-[0.5px]">Mirror</p>
    </div>
  )
}

export function StrokeDrawText() {
  return (
    <div className="ok-effect-stage">
      <svg viewBox="0 0 200 60" className="h-16 w-48">
        <text x="10" y="40" fill="none" stroke="#10b981" strokeWidth="1.5" className="text-[28px] font-semibold"
          style={{ strokeDasharray: 300, strokeDashoffset: 0, animation: 'ok-shimmer 2.5s ease forwards' }}>Draw</text>
      </svg>
    </div>
  )
}

export function KineticTiltText() {
  const { ref, style, onMove, onLeave } = useTilt(18)
  return (
    <div className="ok-effect-stage" onMouseMove={onMove} onMouseLeave={onLeave}>
      <p ref={ref} style={style} className="text-2xl font-semibold text-neutral-100">Kinetic</p>
    </div>
  )
}

export function MaskRevealText() {
  return (
    <div className="ok-effect-stage">
      <p className="bg-gradient-to-r from-emerald-400 via-emerald-400 to-transparent bg-clip-text text-2xl font-semibold text-transparent"
        style={{ WebkitMaskImage: 'linear-gradient(90deg, black 60%, transparent)', maskImage: 'linear-gradient(90deg, black 60%, transparent)' }}>
        Mask reveal
      </p>
    </div>
  )
}

export function SparkleText() {
  return (
    <div className="ok-effect-stage">
      <div className="relative">
        <p className="text-2xl font-semibold text-neutral-100">Sparkle</p>
        {[0,1,2,3].map((i) => (
          <span key={i} className="absolute h-1 w-1 rounded-full bg-emerald-300 ok-anim-pulse"
            style={{ left: \`\${i * 28}px\`, top: i % 2 ? -8 : 28, animationDelay: \`\${i * 0.2}s\` }} />
        ))}
      </div>
    </div>
  )
}
`

writeFileSync(join(root, 'backgrounds.jsx'), backgrounds)
writeFileSync(join(root, 'text.jsx'), text)
console.log('backgrounds+text written')
