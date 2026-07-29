import { DocsLayout } from '../../components/DocsLayout'
import { ComponentDemo } from '../../components/ComponentDemo'
import { Loader } from '@okoret/ui'

const code = `import { Loader } from "@okoret/ui";

<Loader size="sm" />
<Loader size="md" />
<Loader size="lg" />`

export default function LoaderPage() {
  return (
    <DocsLayout>
      <ComponentDemo
        title="Loader"
        description="Indeterminate spinner with role=status for async affordances."
        code={code}
        preview={
          <>
            <Loader size="sm" />
            <Loader size="md" />
            <Loader size="lg" />
          </>
        }
      />
    </DocsLayout>
  )
}
