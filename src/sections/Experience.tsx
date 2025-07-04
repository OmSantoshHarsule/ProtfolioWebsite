import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, UsersIcon, ArrowUpIcon } from 'lucide-react';
const Experience: React.FC = () => {
  return <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div className="relative pl-8 sm:pl-32 py-6 group" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            {/* Timeline dot */}
            <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-teal-500 transition-colors">
              <div className="absolute left-0 sm:left-0 top-9 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-gray-900"></div>
                <div className="w-px h-full bg-gray-300 dark:bg-gray-700 absolute top-4"></div>
              </div>
              <div className="sm:absolute left-7 sm:left-10 top-8 bg-teal-500 text-white text-xs font-semibold py-1 px-2 rounded">
                Current
              </div>
              <h3 className="text-xl font-bold sm:ml-24">
                Freelance DevOps Engineer
              </h3>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <CalendarIcon size={14} className="mr-1" />
              <span>March 2025 - Present</span>
              <span className="mx-2">•</span>
              <span>Remote</span>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="flex items-start">
                  <UsersIcon size={18} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Consulted 5+ clients and implemented the best DevOps
                    practices to deploy their applications on server with
                    automation by decreasing the 80% uptime
                  </p>
                </div>
                <div className="flex items-start">
                  <ArrowUpIcon size={18} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Key implementation in projects was designing robust CI/CD
                    pipelines which helped to decrease the downtime of
                    applications
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Ansible', 'Terraform'].map((tech, index) => <span key={index} className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                      {tech}
                    </span>)}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="flex justify-center mt-10" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-px rounded-lg">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center">
                <BriefcaseIcon size={32} className="text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Ready for New Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm currently seeking opportunities to apply my DevOps skills
                  in a collaborative team environment.
                </p>
                <motion.a href="#contact" className="mt-4 inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium text-sm" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Experience;