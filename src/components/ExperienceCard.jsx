import React from "react"
import { motion } from "framer-motion"

const ExperienceCard = ({ title, company, period, description }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-red-900 to-black p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-2">{company}</p>
      <p className="text-gray-400 mb-4">{period}</p>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default ExperienceCard

