import { DocsLayout } from '../../components/DocsLayout'
import { ComponentDemo } from '../../components/ComponentDemo'
import { Input } from '@okoret/ui'

const code = `import { Input } from "@okoret/ui";

<Input label="Email" placeholder="you@example.com" hint="We never share this." />
<Input label="Username" error="Already taken" />`

export default function InputPage() {
  return (
    <DocsLayout>
      <ComponentDemo
        title="Input"
        description="Text field with label, hint, and error messaging wired to aria-describedby."
        code={code}
        preview={
          <>
            <Input label="Email" placeholder="you@example.com" hint="We never share this." />
            <Input label="Username" defaultValue="okoret" error="Already taken" />
          </>
        }
      />
    </DocsLayout>
  )
}
