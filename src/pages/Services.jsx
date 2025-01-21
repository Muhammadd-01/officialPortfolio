import React from "react"
import { motion } from "framer-motion"
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa"

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies.",
    icon: <FaCode className="text-4xl mb-4" />,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces and experiences.",
    icon: <FaPaintBrush className="text-4xl mb-4" />,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications for iOS and Android.",
    icon: <FaMobileAlt className="text-4xl mb-4" />,
  },
]

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-blue-600 dark:text-blue-400">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Services

