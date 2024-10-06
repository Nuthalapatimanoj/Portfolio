import { useState } from 'react'
import './App.css'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    <About />
    <Projects />
    <Resume />
    <Contact />
    </>
  )
}

export default App
