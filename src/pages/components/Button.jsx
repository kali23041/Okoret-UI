import { DocsLayout } from '../../components/DocsLayout'
import { ComponentDemo } from '../../components/ComponentDemo'
import { Button } from '@okoret/ui'

const code = `import { Button } from "@okoret/ui";

<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="accent">Accent</Button>
<Button loading>Loading</Button>`

export default function ButtonPage() {
  return (
    <DocsLayout>
      <ComponentDemo
        title="Button"
        description="Compact action control with solid, outline, ghost, and accent variants plus a loading state."
        code={code}
        preview={
          <>
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent</Button>
            <Button loading>Loading</Button>
            <Button size="sm" variant="outline">
              Small
            </Button>
            <Button size="lg" variant="accent">
              Large
            </Button>
          </>
        }
      />
    </DocsLayout>
  )
}
