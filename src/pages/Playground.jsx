import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DocsLayout } from '../components/DocsLayout'
import {
  Button,
  Dialog,
  Input,
  Switch,
  useToast,
  Dropdown,
  Badge,
  Loader,
  Card3D,
  MagneticButton,
  SpotlightCard,
} from '@okoret/ui'

function PlaygroundInner() {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [enabled, setEnabled] = useState(true)
  const [name, setName] = useState('')

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--ok-fg)] sm:text-4xl">
          Playground
        </h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[var(--ok-fg-soft)]">
          Compose Okoret primitives and flagship effects in one place.
        </p>
      </div>

      <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="accent">Live</Badge>
          <Badge>Interactive</Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Input
              label="Project name"
              placeholder="okoret-app"
              value={name}
              onChange={(e) => setName(e.target.value)}
              hint="Used in the toast message"
            />
            <Switch
              checked={enabled}
              onCheckedChange={setEnabled}
              label="Notifications enabled"
            />
            <Dropdown
              label="Actions"
              items={[
                { label: 'Save draft', value: 'save' },
                { label: 'Publish', value: 'publish' },
                { label: 'Archive', value: 'archive', disabled: !enabled },
              ]}
              onSelect={(item) =>
                toast({
                  title: item.label,
                  description: name ? `Project: ${name}` : 'No project name set',
                  variant: 'accent',
                })
              }
            />
          </div>

          <div className="flex flex-col justify-center gap-3">
            <div className="flex flex-wrap gap-2">
              <Button
                variant="accent"
                onClick={() =>
                  toast({
                    title: 'Saved',
                    description: enabled
                      ? `Notified for ${name || 'untitled'}`
                      : 'Notifications are off',
                  })
                }
              >
                Save
              </Button>
              <Button variant="outline" onClick={() => setOpen(true)}>
                Open dialog
              </Button>
              <Button variant="ghost" loading>
                Working
              </Button>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[var(--ok-muted)]">
              <Loader size="sm" />
              Status indicator
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--ok-muted)]">Effects strip</p>
          <Link to="/effects" className="text-[13px] text-[var(--ok-accent)] hover:underline">
            Open gallery
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)] p-2">
            <Card3D />
          </div>
          <div className="rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)] p-2">
            <MagneticButton />
          </div>
          <div className="rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_80%,transparent)] p-2">
            <SpotlightCard />
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm action"
        description="This dialog traps focus and closes with Escape or the backdrop."
      >
        <p className="text-[13px] text-[var(--ok-fg-soft)]">
          Project: <span className="text-[var(--ok-fg)]">{name || 'untitled'}</span>
        </p>
      </Dialog>
    </section>
  )
}

export default function PlaygroundPage() {
  return (
    <DocsLayout>
      <PlaygroundInner />
    </DocsLayout>
  )
}
