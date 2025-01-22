import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully functional online store built with React and Node.js, featuring product listings, shopping cart, and secure checkout.",
    image: "https://source.unsplash.com/random/800x600?ecommerce",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app with drag-and-drop functionality, user authentication, and real-time updates.",
    image: "https://source.unsplash.com/random/800x600?task",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing my work, built with modern web technologies and animations.",
    image: "https://source.unsplash.com/random/800x600?portfolio",
    category: "web",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "A mobile app to track workouts and nutrition, with data visualization and progress tracking.",
    image: "https://source.unsplash.com/random/800x600?fitness",
    category: "mobile",
    technologies: ["React Native", "GraphQL", "D3.js"],
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
      <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} className="text-4xl font-bold text-white mb-8 text-center">
        My Projects
      </motion.h1>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === category ? "bg-white text-purple-900" : "bg-purple-900 text-white"
            } transition-colors duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>
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
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-purple-700 text-white text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Projects

