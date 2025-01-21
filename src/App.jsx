import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { ParallaxProvider } from "react-scroll-parallax"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <ParallaxProvider>
      <Router>
        <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/services" element={<Services darkMode={darkMode} />} />
              <Route path="/projects" element={<Projects darkMode={darkMode} />} />
              <Route path="/resume" element={<Resume darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            </Routes>
          </AnimatePresence>
          <Footer darkMode={darkMode} />
          <ToastContainer position="bottom-right" />
        </div>
      </Router>
    </ParallaxProvider>
  )
}

export default App

