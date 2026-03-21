import { useState } from 'react'
import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Scroll from './Scrolltotop/Scroll'
import Services from './components/Services'
import Footer from './HOMES/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Scroll/>
        <Navbar/>
        <div className="container-fluid bg-dark text-white min-vh-100 w-100">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
           <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
