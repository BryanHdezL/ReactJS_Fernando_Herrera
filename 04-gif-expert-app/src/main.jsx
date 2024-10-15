import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import { GifExpertApp } from './GifExpertApp.jsx'

// Styles CSS
import './css/styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
