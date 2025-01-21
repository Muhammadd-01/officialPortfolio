import React, { useCallback } from "react"
import { motion } from "framer-motion"
import { ParallaxBanner } from "react-scroll-parallax"
import { FaArrowRight } from "react-icons/fa"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const Home = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesConfig = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: darkMode ? "#ffffff" : "#000000" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 1, direction: "none", random: true, straight: false, out_mode: "out" },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen relative ${darkMode ? "bg-gradient-to-br from-gray-900 to-blue-900" : "bg-gradient-to-br from-blue-100 to-white"}`}
    >
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="absolute inset-0" />
      <ParallaxBanner
        layers={[
          {
            image: "/path/to/your/profile-photo.jpg",
            speed: -20,
          },
        ]}
        className="h-screen"
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              Your Name
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-8"
            >
              Web Developer & Designer
            </motion.p>
            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Learn More <FaArrowRight className="ml-2" />
            </motion.a>
          </div>
        </div>
      </ParallaxBanner>
    </motion.div>
  )
}

export default Home

