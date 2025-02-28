import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Aside from './aside.jsx'
import Header from './Header.jsx'
import Section from './section.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Aside/>
     <Header/>
     <Section/>
  </StrictMode>,
)
