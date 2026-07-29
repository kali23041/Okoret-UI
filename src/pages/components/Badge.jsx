import { DocsLayout } from '../../components/DocsLayout'
import { ComponentDemo } from '../../components/ComponentDemo'
import { Badge } from '@okoret/ui'

const code = `import { Badge } from "@okoret/ui";

<Badge>Default</Badge>
<Badge variant="accent">New</Badge>
<Badge variant="muted">Draft</Badge>
<Badge variant="danger">Error</Badge>`

export default function BadgePage() {
  return (
    <DocsLayout>
      <ComponentDemo
        title="Badge"
        description="Compact status chips for labels, filters, and metadata."
        code={code}
        preview={
          <>
            <Badge>Default</Badge>
            <Badge variant="accent">New</Badge>
            <Badge variant="muted">Draft</Badge>
            <Badge variant="danger">Error</Badge>
          </>
        }
      />
    </DocsLayout>
  )
}
