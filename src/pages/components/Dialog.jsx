import { useState } from 'react'
import { DocsLayout } from '../../components/DocsLayout'
import { ComponentDemo } from '../../components/ComponentDemo'
import { Button, Dialog } from '@okoret/ui'

const code = `import { useState } from "react";
import { Button, Dialog } from "@okoret/ui";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open</Button>
<Dialog
  open={open}
  onOpenChange={setOpen}
  title="Confirm"
  description="Closes with Escape or backdrop."
>
  Content goes here.
</Dialog>`

export default function DialogPage() {
  const [open, setOpen] = useState(false)

  return (
    <DocsLayout>
      <ComponentDemo
        title="Dialog"
        description="Modal overlay with focus trap, Escape to close, and backdrop dismiss."
        code={code}
        preview={
          <>
            <Button variant="outline" onClick={() => setOpen(true)}>
              Open dialog
            </Button>
            <Dialog
              open={open}
              onOpenChange={setOpen}
              title="Confirm action"
              description="Focus is trapped while open. Press Escape to dismiss."
            >
              <p className="text-[13px] text-[var(--ok-fg-soft)]">
                Use dialogs for confirmations and short forms—not full pages.
              </p>
            </Dialog>
          </>
        }
      />
    </DocsLayout>
  )
}
