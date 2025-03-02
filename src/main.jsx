import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Aside from './Aside.jsx'
import Header from './Header.jsx'
import Section from './section.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='contenido'>
     <Aside/>
      <main >
        <Header/>
          <article>
          <Section/>
          <Section/>
          </article>
      </main>
   </div>
  </StrictMode>
);
