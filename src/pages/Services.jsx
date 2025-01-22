import React from "react"
import { motion } from "framer-motion"

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites built with modern technologies like React, Next.js, and Vue.js.',
    icon: '💻',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications for iOS and Android using React Native.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces and experiences.',
    icon: '🎨',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website's visibility and ranking in search engine results.',
    icon: '🔍',
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-16"
    >
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">My Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services

