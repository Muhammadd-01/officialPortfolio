import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to My Portfolio
        </motion.h1>
        <motion.p initial={{ y: 50 }} animate={{ y: 0 }} className="text-xl text-gray-300 mb-8">
          I'm a passionate web developer creating amazing digital experiences. With expertise in React, Node.js, and
          modern web technologies, I bring ideas to life through clean, efficient, and user-friendly applications.
        </motion.p>
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="space-x-4">
          <Link
            to="/projects"
            className="bg-white text-purple-900 font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-purple-200"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-purple-600"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="md:w-1/2"
      >
        <img
          src="https://source.unsplash.com/random/600x600?developer"
          alt="Web Developer"
          className="rounded-full shadow-2xl"
        />
      </motion.div>
    </motion.div>
  )
}

export default Home

