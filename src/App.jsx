import { HashRouter, Routes, Route } from 'react-router-dom'
import { ToastProvider, ThemeProvider } from '@okoret/ui'
import Landing from './pages/Landing'
import ComponentsPage from './pages/Components'
import DesignPrinciples from './pages/DesignPrinciples'
import InstallationPage from './pages/Installation'
import TokensPage from './pages/Tokens'
import PlaygroundPage from './pages/Playground'
import EffectsPage from './pages/Effects'
import EffectDemoPage from './pages/EffectDemo'
import AccordionPage from './pages/components/Accordion'
import ButtonPage from './pages/components/Button'
import DialogPage from './pages/components/Dialog'
import SwitchPage from './pages/components/Switch'
import ToastPage from './pages/components/Toast'
import InputPage from './pages/components/Input'
import BadgePage from './pages/components/Badge'
import LoaderPage from './pages/components/Loader'
import DropdownPage from './pages/components/Dropdown'

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/design-principles" element={<DesignPrinciples />} />
            <Route path="/installation" element={<InstallationPage />} />
            <Route path="/tokens" element={<TokensPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/effects" element={<EffectsPage />} />
            <Route path="/effects/:slug" element={<EffectDemoPage />} />
            <Route path="/components/accordion" element={<AccordionPage />} />
            <Route path="/components/button" element={<ButtonPage />} />
            <Route path="/components/dialog" element={<DialogPage />} />
            <Route path="/components/switch" element={<SwitchPage />} />
            <Route path="/components/toast" element={<ToastPage />} />
            <Route path="/components/input" element={<InputPage />} />
            <Route path="/components/badge" element={<BadgePage />} />
            <Route path="/components/loader" element={<LoaderPage />} />
            <Route path="/components/dropdown" element={<DropdownPage />} />
          </Routes>
        </HashRouter>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
