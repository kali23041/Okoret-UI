import { useState } from 'react'

export function ComponentDemo({ title, description, preview, code, children }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    if (!code) return
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--ok-fg)] sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--ok-fg-soft)]">
            {description}
          </p>
        )}
      </div>

      <div className="rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5 sm:p-7">
        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[var(--ok-muted)]">Preview</p>
        <div className="flex min-h-28 flex-wrap items-center gap-3.5">{preview}</div>
      </div>

      {children}

      {code && (
        <div className="relative overflow-hidden rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)]">
          <div className="flex items-center justify-between border-b border-[var(--ok-border)] px-4 py-2.5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--ok-muted)]">Usage</p>
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-md border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface-2)_70%,transparent)] px-2.5 py-1 text-xs text-[var(--ok-fg-soft)] transition-colors hover:bg-[var(--ok-surface-2)]"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-[var(--ok-fg-soft)]">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </section>
  )
}
