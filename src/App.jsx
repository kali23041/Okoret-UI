import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ComponentsPage from './pages/Components'
import DesignPrinciples from './pages/DesignPrinciples'
import AccordionPage from './pages/Accordion'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/design-principles" element={<DesignPrinciples />} />
        <Route path="/components/accordion" element={<AccordionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
