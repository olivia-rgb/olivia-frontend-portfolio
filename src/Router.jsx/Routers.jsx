import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import About from '../Components/About'
import Contacts from '../Components/Contacts'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'

function Routers() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills/>} />
          </Routes>
        
        </BrowserRouter>

    </div>
  )
}

export default Routers