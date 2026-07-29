import { Link, useParams } from 'react-router-dom'
import { DocsLayout } from '../components/DocsLayout'
import { ComponentDemo } from '../components/ComponentDemo'
import { getEffect, EFFECTS } from '@okoret/ui'

export default function EffectDemoPage() {
  const { slug } = useParams()
  const effect = getEffect(slug)

  if (!effect) {
    return (
      <DocsLayout>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-[var(--ok-fg)]">Effect not found</h1>
          <p className="text-sm text-[var(--ok-muted)]">
            No effect with slug <code className="rounded bg-[var(--ok-surface)] px-1">{slug}</code>.
          </p>
          <Link to="/effects" className="text-sm text-[var(--ok-accent)] hover:underline">
            Back to gallery
          </Link>
        </div>
      </DocsLayout>
    )
  }

  const index = EFFECTS.findIndex((e) => e.slug === effect.slug)
  const prev = EFFECTS[(index - 1 + EFFECTS.length) % EFFECTS.length]
  const next = EFFECTS[(index + 1) % EFFECTS.length]

  return (
    <DocsLayout>
      <ComponentDemo
        title={effect.name}
        description={effect.description}
        code={effect.code}
        preview={<effect.Component />}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 text-[13px]">
          <p className="text-[var(--ok-muted)]">
            Category:{' '}
            <span className="text-[var(--ok-fg-soft)]">{effect.category}</span>
          </p>
          <div className="flex gap-3">
            <Link to={`/effects/${prev.slug}`} className="text-[var(--ok-muted)] hover:text-[var(--ok-fg)]">
              ← {prev.name}
            </Link>
            <Link to="/effects" className="text-[var(--ok-accent)] hover:underline">
              Gallery
            </Link>
            <Link to={`/effects/${next.slug}`} className="text-[var(--ok-muted)] hover:text-[var(--ok-fg)]">
              {next.name} →
            </Link>
          </div>
        </div>
      </ComponentDemo>
    </DocsLayout>
  )
}
