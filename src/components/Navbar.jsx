import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaSun, FaMoon } from "react-icons/fa"

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed w-full z-10 top-0 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Your Name
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/resume">Resume</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
)

export default Navbar

