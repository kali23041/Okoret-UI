import { DocsLayout } from '../../components/DocsLayout'
import { ComponentDemo } from '../../components/ComponentDemo'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@okoret/ui'

const code = `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@okoret/ui";

<Accordion type="single" defaultValue="a">
  <AccordionItem value="a">
    <AccordionTrigger value="a">What is Okoret UI?</AccordionTrigger>
    <AccordionContent value="a">
      A minimal, motion-forward component library.
    </AccordionContent>
  </AccordionItem>
</Accordion>`

export default function AccordionPage() {
  return (
    <DocsLayout>
      <ComponentDemo
        title="Accordion"
        description="Expandable disclosure with smooth height motion and keyboard-friendly triggers."
        code={code}
        preview={
          <Accordion type="single" defaultValue="a" className="w-full max-w-md">
            <AccordionItem value="a">
              <AccordionTrigger value="a">What is Okoret UI?</AccordionTrigger>
              <AccordionContent value="a">
                A minimal, motion-forward component library.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger value="b">Is it accessible?</AccordionTrigger>
              <AccordionContent value="b">
                Yes — keyboard and ARIA patterns are built in.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="c">
              <AccordionTrigger value="c">Can I open multiple?</AccordionTrigger>
              <AccordionContent value="c">
                Use <code className="rounded bg-[var(--ok-surface)] px-1">type=&quot;multiple&quot;</code>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        }
      >
        <div className="rounded-lg border border-[var(--ok-border)] bg-[color-mix(in_srgb,var(--ok-surface)_70%,transparent)] p-4">
          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[var(--ok-muted)]">
            Multiple
          </p>
          <Accordion type="multiple" defaultValue={['ship']} className="max-w-md">
            <AccordionItem value="ship">
              <AccordionTrigger value="ship">Shipping</AccordionTrigger>
              <AccordionContent value="ship">Free worldwide shipping.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger value="returns">Returns</AccordionTrigger>
              <AccordionContent value="returns">30-day returns.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ComponentDemo>
    </DocsLayout>
  )
}
