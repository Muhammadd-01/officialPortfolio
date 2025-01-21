import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  { id: 1, title: "E-commerce Website", category: "Web Development", image: "/path/to/project1.jpg" },
  { id: 2, title: "Mobile App UI", category: "UI/UX Design", image: "/path/to/project2.jpg" },
  { id: 3, title: "Blog Platform", category: "Web Development", image: "/path/to/project3.jpg" },
  { id: 4, title: "Fitness Tracker App", category: "Mobile Development", image: "/path/to/project4.jpg" },
]

const categories = ["All", "Web Development", "UI/UX Design", "Mobile Development"]

const Projects = () => {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">Recent Projects</h2>
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Projects

