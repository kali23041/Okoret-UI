import { DocsLayout } from '../../components/DocsLayout'
import { ComponentDemo } from '../../components/ComponentDemo'
import { Button, useToast } from '@okoret/ui'

const code = `import { Button, useToast, ToastProvider } from "@okoret/ui";

function Demo() {
  const { toast } = useToast();
  return (
    <Button onClick={() => toast({ title: "Saved", description: "Changes applied." })}>
      Toast
    </Button>
  );
}

// Wrap your app with <ToastProvider>`

function ToastPreview() {
  const { toast } = useToast()
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast({ title: 'Saved', description: 'Your changes were applied.' })
        }
      >
        Default
      </Button>
      <Button
        variant="accent"
        onClick={() =>
          toast({
            title: 'Published',
            description: 'Live in production.',
            variant: 'accent',
          })
        }
      >
        Accent
      </Button>
      <Button
        variant="ghost"
        onClick={() =>
          toast({
            title: 'Failed',
            description: 'Could not reach the server.',
            variant: 'danger',
          })
        }
      >
        Danger
      </Button>
    </>
  )
}

export default function ToastPage() {
  return (
    <DocsLayout>
      <ComponentDemo
        title="Toast"
        description="Transient notifications via ToastProvider and useToast. Announced with aria-live."
        code={code}
        preview={<ToastPreview />}
      />
    </DocsLayout>
  )
}
