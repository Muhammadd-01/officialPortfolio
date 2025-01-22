import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-16"
    >
      <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} className="text-4xl font-bold text-white mb-8 text-center">
        Get in Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto"
      >
        I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say
        hello, feel free to reach out!
      </motion.p>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-500" />
                <a href="mailto:affan.work05@gmail.com" className="text-gray-300 hover:text-white">
                  affan.work05@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-500" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-500" />
                <span className="text-gray-300">New York City, NY</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Connect with Me</h2>
            <p className="text-gray-300 mb-4">
              Follow me on social media for updates on my latest projects and tech insights:
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact

