import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa"
//import AnimatedBackground from "../components/AnimatedBackground" //Removed as it's not used in the updated code

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="relative min-h-screen py-16">
      {/* <AnimatedBackground /> */} {/*Removed as it's not used in the updated code*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-6 py-16 z-10 relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        >
          Contact Me
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-gray-300" />
              <a href="mailto:affan.work05@gmail.com" className="text-gray-300 hover:text-white">
                affan.work05@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-gray-300" />
              <span className="text-gray-300">+1 (123) 456-7890</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact

