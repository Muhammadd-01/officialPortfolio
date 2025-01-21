import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa"
import { toast } from "react-toastify"

const Contact = ({ darkMode }) => {
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
    toast.success("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                  }`}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                  }`}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-6">
            <ContactItem icon={<FaEnvelope />} text="your.email@example.com" darkMode={darkMode} />
            <ContactItem icon={<FaPhone />} text="+1 (123) 456-7890" darkMode={darkMode} />
            <ContactItem icon={<FaWhatsapp />} text="+1 (123) 456-7890" darkMode={darkMode} />
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              <FaWhatsapp className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ContactItem = ({ icon, text, darkMode }) => (
  <div className={`flex items-center space-x-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
    <span className={darkMode ? "text-blue-400" : "text-blue-600"}>{icon}</span>
    <span>{text}</span>
  </div>
)

export default Contact

