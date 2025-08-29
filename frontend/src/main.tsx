import { StrictMode } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Index } from './pages/Index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
      </Router>
  </StrictMode>
)