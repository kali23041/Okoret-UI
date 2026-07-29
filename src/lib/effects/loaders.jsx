
export function OrbitLoader() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 rounded-full border border-[var(--ok-border)]" />
        <span className="absolute inset-0 ok-anim-spin" style={{ animationDuration: '1.2s' }}>
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--ok-accent)]" />
        </span>
      </div>
    </div>
  )
}

export function WaveBars() {
  return (
    <div className="ok-effect-stage gap-1.5">
      {[0,1,2,3,4].map((i) => (
        <span key={i} className="inline-block h-10 w-1.5 origin-bottom rounded-full bg-[var(--ok-accent)]"
          style={{ animation: `ok-wave 0.9s ease-in-out ${i * 0.1}s infinite` }} />
      ))}
    </div>
  )
}

export function DNASpinner() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-16 w-10 ok-anim-spin" style={{ animationDuration: '2s', transformStyle: 'preserve-3d' }}>
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--ok-accent)]"
            style={{ top: `${i * 8}px`, transform: `translateX(${Math.sin(i) * 12}px)` }} />
        ))}
      </div>
    </div>
  )
}

export function PulseRing() {
  return (
    <div className="ok-effect-stage">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-[var(--ok-accent)]/40 ok-anim-pulse" />
        <span className="absolute inset-2 rounded-full border border-[var(--ok-accent)]/30 ok-anim-pulse" style={{ animationDelay: '0.35s' }} />
        <span className="h-3 w-3 rounded-full bg-[var(--ok-accent)]" />
      </div>
    </div>
  )
}

export function LiquidProgress() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-4 w-48 overflow-hidden rounded-full border border-[var(--ok-border)] bg-[var(--ok-surface)]">
        <div className="absolute inset-y-0 left-0 w-2/3 bg-[var(--ok-accent)] ok-anim-aurora" style={{ backgroundImage: 'linear-gradient(90deg,#0e7490,#22d3ee,#0891b2)' }} />
      </div>
    </div>
  )
}

export function HourglassSpin() {
  return (
    <div className="ok-effect-stage">
      <div className="h-10 w-6 ok-anim-spin border-x-2 border-[color-mix(in_srgb,var(--ok-accent)_60%,transparent)]" style={{
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
        <span key={i} className="h-2.5 w-2.5 rounded-full bg-[var(--ok-accent)] ok-anim-float" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </div>
  )
}

export function ArcSpinner() {
  return (
    <div className="ok-effect-stage">
      <span className="h-12 w-12 rounded-full border-2 border-[var(--ok-border)] border-t-cyan-400 ok-anim-spin" style={{ animationDuration: '0.8s' }} />
    </div>
  )
}

export function SquareOrbit() {
  return (
    <div className="ok-effect-stage">
      <div className="relative h-14 w-14">
        <span className="absolute inset-2 border border-[var(--ok-border)]" />
        <span className="absolute inset-0 ok-anim-spin" style={{ animationDuration: '2s' }}>
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 bg-[var(--ok-accent)]" />
        </span>
      </div>
    </div>
  )
}

export function HeartbeatLoader() {
  return (
    <div className="ok-effect-stage">
      <span className="text-2xl text-cyan-400 ok-anim-pulse">♥</span>
    </div>
  )
}

export function SegmentRing() {
  return (
    <div className="ok-effect-stage">
      <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
        <circle cx="18" cy="18" r="15" fill="none" stroke="#262626" strokeWidth="3" />
        <circle cx="18" cy="18" r="15" fill="none" stroke="#0891b2" strokeWidth="3" strokeDasharray="70 100" strokeLinecap="round" className="ok-anim-spin" style={{ transformOrigin: 'center', animationDuration: '2s' }} />
      </svg>
    </div>
  )
}

export function InfinityLoop() {
  return (
    <div className="ok-effect-stage">
      <svg viewBox="0 0 100 40" className="h-12 w-28">
        <path d="M20 20 C 20 5, 45 5, 50 20 C 55 35, 80 35, 80 20 C 80 5, 55 5, 50 20 C 45 35, 20 35, 20 20"
          fill="none" stroke="#0891b2" strokeWidth="2" className="ok-anim-shimmer" style={{ strokeDasharray: 8 }} />
      </svg>
    </div>
  )
}
