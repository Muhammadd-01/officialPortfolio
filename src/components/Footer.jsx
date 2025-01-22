import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0">© 2023 Your Name. All rights reserved.</div>
          <div className="flex space-x-4">
            <SocialLink href="https://github.com" icon={<FaGithub />} />
            <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} />
            <SocialLink href="https://twitter.com" icon={<FaTwitter />} />
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
  >
    {icon}
  </a>
)

export default Footer

