import { DocsLayout } from '../../components/DocsLayout'
import { ComponentDemo } from '../../components/ComponentDemo'
import { Dropdown, useToast } from '@okoret/ui'

const code = `import { Dropdown } from "@okoret/ui";

<Dropdown
  label="Menu"
  items={[
    { label: "New file", value: "new" },
    { label: "Duplicate", value: "dup" },
    { label: "Settings", value: "settings" },
  ]}
  onSelect={(item) => console.log(item)}
/>`

function DropdownPreview() {
  const { toast } = useToast()
  return (
    <Dropdown
      label="Menu"
      items={[
        { label: 'New file', value: 'new' },
        { label: 'Duplicate', value: 'dup' },
        { label: 'Settings', value: 'settings' },
        { label: 'Delete', value: 'delete', disabled: true },
      ]}
      onSelect={(item) => toast({ title: item.label, variant: 'accent' })}
    />
  )
}

export default function DropdownPage() {
  return (
    <DocsLayout>
      <ComponentDemo
        title="Dropdown"
        description="Menu trigger with arrow-key navigation, Enter to select, and Escape to close."
        code={code}
        preview={<DropdownPreview />}
      />
    </DocsLayout>
  )
}
