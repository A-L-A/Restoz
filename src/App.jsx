import { Container, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/Author'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>

     <Footer/>
     
    </div>
  )
}

export default App
