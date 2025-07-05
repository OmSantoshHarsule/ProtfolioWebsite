import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, YoutubeIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
const About: React.FC = () => {
  return <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <motion.div className="order-2 md:order-1" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <h3 className="text-2xl font-semibold mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Aspiring DevOps Engineer with over 2 years driving innovation
              through hands-on K8s, Docker, Ansible, AWS, and implementing
              scalable CICD pipelines. Proficient in applying security practices
              for robust application delivery.
            </p>
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <GraduationCapIcon size={20} className="text-teal-500 mr-2" />
                <h4 className="text-lg font-medium">Education</h4>
              </div>
              <div className="ml-7 border-l-2 border-teal-500 pl-4 pb-4">
                <h5 className="font-semibold">
                  Bachelor of Engineering in Robotics and Automation
                </h5>
                <p className="text-gray-600 dark:text-gray-400">
                  D. Y. Patil College Engineering (Savitribai Phule Pune
                  University)
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <CalendarIcon size={14} className="mr-1" />
                    Oct. 2022 – May 2026
                  </span>
                  <span className="flex items-center">
                    <MapPinIcon size={14} className="mr-1" />
                    Akurdi, Maharashtra
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <YoutubeIcon size={20} className="text-teal-500 mr-2" />
                <h4 className="text-lg font-medium">Additional Activities</h4>
              </div>
              <div className="ml-7 border-l-2 border-teal-500 pl-4">
                <h5 className="font-semibold">
                  Technical Video Creator on YouTube (@YOUTUBE)
                </h5>
                <p className="text-gray-600 dark:text-gray-400">
                  Published 10+ insightful technical videos on YouTube,
                  contributing to the tech community while enhancing personal
                  expertise.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div className="order-1 md:order-2 relative" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg p-1 shadow-xl">
              <div className="bg-white dark:bg-gray-900 rounded-md p-6">
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center" >
                  <div className="text-6xl font-bold text-gray-300 dark:text-gray-700">
                    <img src="/images/awsprofile.jpeg" alt="" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Om Harsule</h3>
                <p className="text-teal-500 font-medium mb-4">
                  Aspiring DevOps Engineer
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Ansible'].map((skill, index) => <span key={index} className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {skill}
                      </span>)}
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 w-20 h-20 border-t-4 border-l-4 border-blue-600 rounded-tl-lg"></div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-4 border-r-4 border-teal-500 rounded-br-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;