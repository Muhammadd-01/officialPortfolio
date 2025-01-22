import React from "react"
import { motion } from "framer-motion"

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites built with modern technologies like React, Next.js, and Vue.js. I specialize in creating responsive, fast, and SEO-friendly web applications that provide an excellent user experience.',
    icon: '💻',
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express'],
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications for iOS and Android using React Native. I develop intuitive and performant mobile apps that work seamlessly across different devices and platforms.',
    icon: '📱',
    technologies: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces and experiences. I focus on user-centered design principles to craft interfaces that are both beautiful and functional.',
    icon: '🎨',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your websites visibility and ranking in search engine results. I implement best practices for on-page and technical SEO to help your site attract more organic traffic.',
    icon: '🔍',
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Schema Markup'],
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
      <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }} className="text-4xl font-bold text-white mb-8 text-center">
        My Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto"
      >
        I offer a range of professional services to help bring your digital ideas to life. From web development to
        mobile apps, UI/UX design, and SEO optimization, I've got you covered.
      </motion.p>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-white mb-2">{service.title}</h2>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-purple-700 text-white text-sm px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services

