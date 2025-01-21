import React from "react"
import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaCertificate, FaCode } from "react-icons/fa"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">Resume</h2>

        <Section title="Education" icon={<FaGraduationCap />}>
          <ResumeItem
            title="Bachelor of Science in Computer Science"
            organization="University Name"
            date="2015 - 2019"
            description="Relevant coursework: Web Development, Data Structures, Algorithms, Database Systems"
          />
        </Section>

        <Section title="Work Experience" icon={<FaBriefcase />}>
          <ResumeItem
            title="Frontend Developer"
            organization="Tech Company Inc."
            date="2019 - Present"
            description="Developed and maintained responsive web applications using React and Vue.js"
          />
          <ResumeItem
            title="Web Design Intern"
            organization="Design Studio LLC"
            date="Summer 2018"
            description="Assisted in creating user interfaces for various client projects"
          />
        </Section>

        <Section title="Skills" icon={<FaCode />}>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>JavaScript (React, Vue.js)</li>
            <li>HTML5, CSS3, Sass</li>
            <li>Node.js, Express</li>
            <li>SQL, MongoDB</li>
            <li>Git, Agile methodologies</li>
          </ul>
        </Section>

        <Section title="Certifications" icon={<FaCertificate />}>
          <ResumeItem title="AWS Certified Developer" organization="Amazon Web Services" date="2021" />
          <ResumeItem title="Google UX Design Professional Certificate" organization="Google" date="2020" />
        </Section>
      </div>
    </motion.div>
  )
}

const Section = ({ title, icon, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </h3>
    {children}
  </div>
)

const ResumeItem = ({ title, organization, date, description }) => (
  <div className="mb-4">
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
    <p className="text-gray-600 dark:text-gray-400">{organization}</p>
    <p className="text-sm text-gray-500 dark:text-gray-500">{date}</p>
    {description && <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>}
  </div>
)

export default Resume

