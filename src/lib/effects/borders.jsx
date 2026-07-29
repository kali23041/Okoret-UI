
function Frame({ children, className = '' }) {
  return <div className={"ok-effect-stage"}><div className={"relative flex h-28 w-48 items-center justify-center " + className}>{children}</div></div>
}

export function AnimatedGradientBorder() {
  return (
    <Frame>
      <div
        className="relative rounded-xl p-[1px]"
        style={{
          background: 'conic-gradient(from var(--ok-angle), #0891b2, #155e75, #a5f3fc, #0891b2)',
          animation: 'ok-angle-spin 4s linear infinite',
        }}
      >
        <div className="flex h-24 w-44 items-center justify-center rounded-[11px] bg-[var(--ok-bg)] text-[13px] text-[var(--ok-fg-soft)]">
          Gradient border
        </div>
      </div>
    </Frame>
  )
}

export function NeonFrame() {
  return (
    <Frame>
      <div className="flex h-24 w-44 items-center justify-center rounded-lg border border-[color-mix(in_srgb,var(--ok-accent)_60%,transparent)] bg-[var(--ok-bg)] text-[13px] text-[var(--ok-accent)] shadow-[0_0_24px_rgba(8, 145, 178,0.55),inset_0_0_18px_rgba(8, 145, 178,0.12)]">
        Neon frame
      </div>
    </Frame>
  )
}

export function AuroraEdge() {
  return (
    <Frame>
      <div className="ok-anim-aurora relative rounded-xl p-[1px]" style={{ backgroundImage: 'linear-gradient(120deg,#0891b2,#22d3ee,#67e8f9,#0e7490)' }}>
        <div className="flex h-24 w-44 items-center justify-center rounded-[11px] bg-[var(--ok-bg)] text-[13px] text-[var(--ok-fg-soft)]">Aurora edge</div>
      </div>
    </Frame>
  )
}

export function ScanlineBorder() {
  return (
    <Frame>
      <div className="relative flex h-24 w-44 items-center justify-center overflow-hidden rounded-lg border border-[var(--ok-border)] bg-[var(--ok-bg)] text-[13px] text-[var(--ok-fg-soft)]">
        Scanline
        <span className="pointer-events-none absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" style={{ animation: 'ok-scan 2.2s linear infinite' }} />
      </div>
    </Frame>
  )
}

export function DashedOrbitBorder() {
  return (
    <Frame>
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-dashed border-[color-mix(in_srgb,var(--ok-accent)_50%,transparent)] ok-anim-spin" style={{ animationDuration: '10s' }} />
        <span className="text-[11px] text-[var(--ok-fg-soft)]">Dashed</span>
      </div>
    </Frame>
  )
}

export function DoubleGlowRing() {
  return (
    <Frame>
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(8, 145, 178,0.5)]" />
        <span className="absolute inset-3 rounded-full shadow-[0_0_16px_rgba(34, 211, 238,0.45)]" />
        <span className="text-[11px] text-[var(--ok-accent)]">Glow</span>
      </div>
    </Frame>
  )
}

export function CornerBrackets() {
  return (
    <Frame>
      <div className="relative flex h-24 w-44 items-center justify-center text-[13px] text-[var(--ok-fg-soft)]">
        <span className="absolute left-2 top-2 h-4 w-4 border-l border-t border-[var(--ok-accent)]" />
        <span className="absolute right-2 top-2 h-4 w-4 border-r border-t border-[var(--ok-accent)]" />
        <span className="absolute bottom-2 left-2 h-4 w-4 border-b border-l border-[var(--ok-accent)]" />
        <span className="absolute bottom-2 right-2 h-4 w-4 border-b border-r border-[var(--ok-accent)]" />
        Brackets
      </div>
    </Frame>
  )
}

export function PulseOutline() {
  return (
    <Frame>
      <div className="flex h-24 w-44 items-center justify-center rounded-lg border-2 border-[var(--ok-accent)]/50 text-[13px] text-[var(--ok-fg-soft)] ok-anim-pulse">
        Pulse outline
      </div>
    </Frame>
  )
}

export function RainbowTrace() {
  return (
    <Frame>
      <div className="relative rounded-xl p-[1px] ok-anim-spin" style={{ background: 'conic-gradient(#0891b2,#22d3ee,#a3a3a3,#0891b2)', animationDuration: '3s' }}>
        <div className="flex h-24 w-44 items-center justify-center rounded-[11px] bg-[var(--ok-bg)] text-[13px] text-[var(--ok-fg-soft)]">Rainbow</div>
      </div>
    </Frame>
  )
}

export function SoftBloomFrame() {
  return (
    <Frame>
      <div className="flex h-24 w-44 items-center justify-center rounded-xl bg-[var(--ok-surface)] text-[13px] text-[var(--ok-fg)] shadow-[0_0_50px_rgba(8, 145, 178,0.25)]">
        Soft bloom
      </div>
    </Frame>
  )
}

export function InsetShine() {
  return (
    <Frame>
      <div className="group relative flex h-24 w-44 items-center justify-center overflow-hidden rounded-lg border border-[var(--ok-border)] bg-[var(--ok-bg)] text-[13px] text-[var(--ok-fg-soft)]">
        Inset shine
        <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-[var(--ok-accent-soft)] transition-all duration-700 group-hover:left-[120%]" />
      </div>
    </Frame>
  )
}

export function CyberCutBorder() {
  return (
    <Frame>
      <div className="flex h-24 w-44 items-center justify-center bg-[var(--ok-bg)] text-[13px] text-[var(--ok-accent)]"
        style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)', boxShadow: 'inset 0 0 0 1px rgba(8, 145, 178,0.5)' }}>
        Cyber cut
      </div>
    </Frame>
  )
}
