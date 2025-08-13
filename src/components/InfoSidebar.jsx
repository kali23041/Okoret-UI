export function InfoSidebar() {
  return (
    <aside className="md:sticky md:top-14 h-max rounded-lg border border-neutral-800 bg-neutral-900/40 p-2.5">
      <p className="px-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">Explore</p>
      <div className="mt-1.5">
        <input placeholder="Search…" className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-2 py-1 text-[12px] text-neutral-200 placeholder-neutral-600 outline-none focus:ring-1 focus:ring-neutral-700" />
      </div>
      <nav className="mt-1.5 space-y-1">
        <div>
          <input id="nav-gs" type="checkbox" className="peer hidden" defaultChecked />
          <label htmlFor="nav-gs" className="flex cursor-pointer items-center justify-between px-2 pt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Getting Started
            <span className="transition-transform duration-300 peer-checked:rotate-180">▾</span>
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out peer-checked:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <a href="/components" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Introduction</a>
              <a href="/design-principles" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Design Principles</a>
            </div>
          </div>
        </div>

        <div>
          <input id="nav-install" type="checkbox" className="peer hidden" defaultChecked />
          <label htmlFor="nav-install" className="flex cursor-pointer items-center justify-between px-2 pt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Installation
            <span className="transition-transform duration-300 peer-checked:rotate-180">▾</span>
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out peer-checked:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <a href="#cli" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">CLI</a>
              <a href="#routing" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Routing <span className="ml-1 rounded bg-neutral-800 px-1 text-[10px] text-neutral-400">Updated</span></a>
              <a href="#forms" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Forms</a>
              <a href="#tailwind-v4" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Tailwind v4 <span className="ml-1 rounded bg-neutral-800 px-1 text-[10px] text-emerald-400">New</span></a>
              <a href="#nextui-to-heroui" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">NextUI to HeroUI</a>
              <a href="#figma" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Figma</a>
            </div>
          </div>
        </div>

        <div>
          <input id="nav-fw" type="checkbox" className="peer hidden" defaultChecked />
          <label htmlFor="nav-fw" className="flex cursor-pointer items-center justify-between px-2 pt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Frameworks
            <span className="transition-transform duration-300 peer-checked:rotate-180">▾</span>
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out peer-checked:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <a href="#nextjs" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Next.js</a>
              <a href="#vite" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Vite</a>
              <a href="#remix" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Remix</a>
              <a href="#astro" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Astro</a>
              <a href="#laravel" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Laravel</a>
            </div>
          </div>
        </div>

        <div>
          <input id="nav-custom" type="checkbox" className="peer hidden" defaultChecked />
          <label htmlFor="nav-custom" className="flex cursor-pointer items-center justify-between px-2 pt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Customization
            <span className="transition-transform duration-300 peer-checked:rotate-180">▾</span>
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out peer-checked:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <a href="#theme" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Theme</a>
              <a href="#layout" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Layout</a>
              <a href="#colors" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Colors</a>
              <a href="#customize-theme" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Customize theme</a>
              <a href="#create-theme" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Create theme</a>
              <a href="#dark-mode" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Dark mode</a>
              <a href="#override-styles" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Override styles</a>
              <a href="#custom-variants" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Custom variants</a>
            </div>
          </div>
        </div>

        <div>
          <input id="nav-components" type="checkbox" className="peer hidden" defaultChecked />
          <label htmlFor="nav-components" className="flex cursor-pointer items-center justify-between px-2 pt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Components
            <span className="transition-transform duration-300 peer-checked:rotate-180">▾</span>
          </label>
          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out peer-checked:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <a href="/components/accordion" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Accordion</a>
              <a href="#alert" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Alert</a>
              <a href="#avatar" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Avatar</a>
              <a href="#badge" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Badge</a>
              <a href="#breadcrumbs" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Breadcrumbs</a>
              <a href="#button" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Button</a>
              <a href="#card" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Card</a>
              <a href="#carousel" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Carousel</a>
              <a href="#chart" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Chart</a>
              <a href="#checkbox" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Checkbox</a>
              <a href="#chip" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Chip</a>
              <a href="#collapsible" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Collapsible</a>
              <a href="#combobox" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Combobox</a>
              <a href="#command" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Command palette</a>
              <a href="#context-menu" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Context menu</a>
              <a href="#data-table" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Data table</a>
              <a href="#date-picker" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Date picker</a>
              <a href="#dialog" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Dialog / Modal</a>
              <a href="#drawer" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Drawer / Sheet</a>
              <a href="#dropdown-menu" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Dropdown menu</a>
              <a href="#file-upload" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">File upload</a>
              <a href="#form" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Form</a>
              <a href="#hover-card" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Hover card</a>
              <a href="#input" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Input</a>
              <a href="#kbd" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Kbd</a>
              <a href="#link" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Link</a>
              <a href="#listbox" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Listbox</a>
              <a href="#loader" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Loader / Spinner</a>
              <a href="#menubar" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Menubar</a>
              <a href="#navbar" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Navbar</a>
              <a href="#toast" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Notification / Toast</a>
              <a href="#pagination" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Pagination</a>
              <a href="#popover" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Popover</a>
              <a href="#progress" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Progress</a>
              <a href="#radio-group" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Radio group</a>
              <a href="#range-slider" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Range slider</a>
              <a href="#rating" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Rating</a>
              <a href="#scroll-area" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Scroll area</a>
              <a href="#select" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Select</a>
              <a href="#skeleton" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Skeleton</a>
              <a href="#slider" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Slider</a>
              <a href="#snackbar" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Snackbar</a>
              <a href="#stepper" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Stepper</a>
              <a href="#switch" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Switch</a>
              <a href="#tabs" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Tabs</a>
              <a href="#table" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Table</a>
              <a href="#tag-input" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Tag input</a>
              <a href="#textarea" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Textarea</a>
              <a href="#timeline" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Timeline</a>
              <a href="#toggle" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Toggle</a>
              <a href="#tooltip" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Tooltip</a>
              <a href="#tree-view" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Tree view</a>
              <a href="#video-player" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Video player</a>
              <a href="#virtualized-list" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Virtualized list</a>
              <a href="#3d-card" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">3D card</a>
              <a href="#parallax" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Parallax</a>
              <a href="#marquee" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Marquee</a>
              <a href="#confetti" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Confetti</a>
              <a href="#sparkles" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Sparkles</a>
              <a href="#magnetic-button" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Magnetic button</a>
              <a href="#morphing-button" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Morphing button</a>
              <a href="#gooey-menu" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Gooey menu</a>
              <a href="#glass-card" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Glassmorphism card</a>
              <a href="#neumorph-card" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Neumorphism card</a>
              <a href="#animated-border" className="block rounded-md px-2 py-1.5 text-[12px] text-neutral-300 hover:bg-neutral-800/60">Animated gradient border</a>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}


