import { useEffect, useState } from 'react'
import { useTilt } from './hooks'


export function GradientText() {
  return (
    <div className="ok-effect-stage">
      <p className="ok-anim-shimmer bg-clip-text text-2xl font-semibold text-transparent"
        style={{ backgroundImage: 'linear-gradient(90deg,#67e8f9,#0891b2,#a3a3a3,#67e8f9)', backgroundSize: '200% 100%' }}>
        Gradient
      </p>
    </div>
  )
}

export function GlitchText() {
  return (
    <div className="ok-effect-stage">
      <p className="relative text-2xl font-semibold text-[var(--ok-fg)] ok-anim-glitch">
        Glitch
        <span className="absolute inset-0 text-cyan-400 opacity-70" aria-hidden style={{ transform: 'translate(2px,-1px)' }}>Glitch</span>
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
      <button type="button" className="font-mono text-xl tracking-widest text-[var(--ok-accent)]"
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
      <p className="font-mono text-sm text-[var(--ok-fg)]">{full.slice(0, n)}<span className="animate-pulse">|</span></p>
    </div>
  )
}

export function NeonSign() {
  return (
    <div className="ok-effect-stage">
      <p className="text-2xl font-semibold tracking-[0.2em] text-[var(--ok-accent)] ok-anim-pulse"
        style={{ textShadow: '0 0 8px #0891b2, 0 0 24px #0891b2' }}>NEON</p>
    </div>
  )
}

export function OutlineFillText() {
  return (
    <div className="ok-effect-stage">
      <p className="text-3xl font-bold text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_#0891b2] hover:text-cyan-400 hover:[-webkit-text-stroke:0]">
        FILL
      </p>
    </div>
  )
}

export function WaveLetters() {
  const word = 'WAVES'
  return (
    <div className="ok-effect-stage">
      <p className="flex gap-1 text-2xl font-semibold text-[var(--ok-fg)]">
        {word.split('').map((ch, i) => (
          <span key={i} className="ok-anim-float inline-block" style={{ animationDelay: `${i * 0.1}s` }}>{ch}</span>
        ))}
      </p>
    </div>
  )
}

export function MirrorText() {
  return (
    <div className="ok-effect-stage flex-col gap-1">
      <p className="text-xl font-semibold text-[var(--ok-fg)]">Mirror</p>
      <p className="scale-y-[-1] text-xl font-semibold text-[var(--ok-fg)] opacity-30 blur-[0.5px]">Mirror</p>
    </div>
  )
}

export function StrokeDrawText() {
  return (
    <div className="ok-effect-stage">
      <svg viewBox="0 0 200 60" className="h-16 w-48">
        <text x="10" y="40" fill="none" stroke="#0891b2" strokeWidth="1.5" className="text-[28px] font-semibold"
          style={{ strokeDasharray: 300, strokeDashoffset: 0, animation: 'ok-shimmer 2.5s ease forwards' }}>Draw</text>
      </svg>
    </div>
  )
}

export function KineticTiltText() {
  const { ref, style, onMove, onLeave } = useTilt(18)
  return (
    <div className="ok-effect-stage" onMouseMove={onMove} onMouseLeave={onLeave}>
      <p ref={ref} style={style} className="text-2xl font-semibold text-[var(--ok-fg)]">Kinetic</p>
    </div>
  )
}

export function MaskRevealText() {
  return (
    <div className="ok-effect-stage">
      <p className="bg-gradient-to-r from-cyan-400 via-cyan-400 to-transparent bg-clip-text text-2xl font-semibold text-transparent"
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
        <p className="text-2xl font-semibold text-[var(--ok-fg)]">Sparkle</p>
        {[0,1,2,3].map((i) => (
          <span key={i} className="absolute h-1 w-1 rounded-full bg-cyan-300 ok-anim-pulse"
            style={{ left: `${i * 28}px`, top: i % 2 ? -8 : 28, animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
    </div>
  )
}
