import { useState } from 'react'
import { DocsLayout } from '../../components/DocsLayout'
import { ComponentDemo } from '../../components/ComponentDemo'
import { Switch } from '@okoret/ui'

const code = `import { useState } from "react";
import { Switch } from "@okoret/ui";

const [on, setOn] = useState(false);
<Switch checked={on} onCheckedChange={setOn} label="Enable sync" />`

export default function SwitchPage() {
  const [on, setOn] = useState(true)
  const [alerts, setAlerts] = useState(false)

  return (
    <DocsLayout>
      <ComponentDemo
        title="Switch"
        description="Binary toggle with role=switch, keyboard activation, and an optional label."
        code={code}
        preview={
          <>
            <Switch checked={on} onCheckedChange={setOn} label="Enable sync" />
            <Switch checked={alerts} onCheckedChange={setAlerts} label="Alerts" />
            <Switch checked disabled label="Disabled" />
          </>
        }
      />
    </DocsLayout>
  )
}
