import React from "react"
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-16"
    >
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Me</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src="/placeholder.svg" alt="Your Name" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Hi, I'm Your Name</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a passionate web developer with experience in creating responsive and user-friendly websites. I
            specialize in front-end development using modern technologies like React, Vue.js, and Tailwind CSS.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            My goal is to build applications that are not only functional but also provide a great user experience. I'm
            always eager to learn new technologies and improve my skills.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Skills</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React, Vue.js</li>
            <li>Node.js, Express</li>
            <li>Tailwind CSS, SASS</li>
            <li>Git, GitHub</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default About

