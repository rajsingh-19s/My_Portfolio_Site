import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Blogs from './components/Blogs'

function App() {
  return (
    <div className='bg-[#0e0c1e] overflow-x-hidden '>
     
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Blogs/>
      <Contact/>
      

      </div>
      
    
   
  )
}

export default App