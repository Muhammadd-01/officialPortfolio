import React from "react"
import { motion } from "framer-motion"

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 75 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-16"
    >
      <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} className="text-4xl font-bold text-white mb-8 text-center">
        About Me
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <img
            src="https://source.unsplash.com/random/400x400?portrait"
            alt="Your Name"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>
        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-semibold text-white mb-4">Hi, I'm Your Name</h2>
          <p className="text-gray-300 mb-4">
            I'm a passionate web developer with over 5 years of experience in creating responsive and user-friendly
            websites. I specialize in front-end development using modern technologies like React, Vue.js, and Tailwind
            CSS.
          </p>
          <p className="text-gray-300 mb-4">
            My journey in web development started when I built my first website for a local business. Since then, I've
            worked on numerous projects, ranging from small business websites to large-scale web applications.
          </p>
          <p className="text-gray-300 mb-4">
            When I'm not coding, you can find me exploring new hiking trails, reading sci-fi novels, or experimenting
            with new recipes in the kitchen.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">{skill.name}</span>
                <span className="text-sm font-medium text-white">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About

