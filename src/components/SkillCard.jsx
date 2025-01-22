import React from "react"
import { motion } from "framer-motion"

const SkillCard = ({ title, level }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-red-900 to-black p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{level}</p>
    </motion.div>
  )
}

export default SkillCard

