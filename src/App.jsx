import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ComponentsPage from './pages/Components'
import DesignPrinciples from './pages/DesignPrinciples'
import AccordionPage from './pages/Accordion'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/design-principles" element={<DesignPrinciples />} />
        <Route path="/components/accordion" element={<AccordionPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
