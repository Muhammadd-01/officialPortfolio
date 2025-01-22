import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully functional online store built with React and Node.js",
    image: "https://source.unsplash.com/random/800x600?ecommerce",
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app with drag-and-drop functionality",
    image: "https://source.unsplash.com/random/800x600?task",
    category: "mobile",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work",
    image: "https://source.unsplash.com/random/800x600?portfolio",
    category: "web",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "A mobile app to track workouts and nutrition",
    image: "https://source.unsplash.com/random/800x600?fitness",
    category: "mobile",
  },
]

const categories = ["all", "web", "mobile"]

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-16"
    >
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === category ? "bg-white text-purple-900" : "bg-purple-900 text-white"
            } transition-colors duration-300`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <AnimatePresence>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Projects

