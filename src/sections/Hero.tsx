import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  ChevronDownIcon,
  PhoneIcon,
  MailIcon
} from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typeText = async () => {
      const element = typingRef.current;
      if (!element) return;
      const text = 'Aspiring DevOps Engineer';
      element.innerText = '';
      for (let i = 0; i < text.length; i++) {
        element.innerText += text[i];
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };
    typeText();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center pt-20 pb-10"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-4xl mx-auto">
          <motion.p
            className="text-teal-500 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-amber-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Om Harsule
          </motion.h1>
          <motion.div
            className="mb-6 flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span
              ref={typingRef}
              className="text-2xl md:text-3xl font-semibold tracking-wider text-black dark:text-white hover:text-teal-500 transition-colors"
            />
            <span className="animate-blink ml-1 text-2xl md:text-3xl font-semibold text-teal-500">|</span>
          </motion.div>
          <motion.p
            className="text-gray-400 dark:text-gray-300 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Driving innovation through scalable cloud solutions and robust CI/CD
            pipelines
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="tel:+917058932306"
              className="flex items-center text-sm hover:text-teal-500 transition-colors"
            >
              <PhoneIcon size={16} className="mr-2" />
              +91 7058932306
            </a>
            <a
              href="mailto:omharsule09@gmail.com"
              className="flex items-center text-sm hover:text-teal-500 transition-colors"
            >
              <MailIcon size={16} className="mr-2" />
              omharsule09@gmail.com
            </a>
          </motion.div>
          <motion.div
            className="flex space-x-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="https://linkedin.com/in/omharsule11/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedinIcon size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/OmSantoshHarsule/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon size={20} />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@DevTech-in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <YoutubeIcon size={20} />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#about"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Journey
            </motion.a>
            <motion.a
              href="/Om_Santosh_Harsule_DevOps___Cloud_Engineer_v5.pdf"
              download="Om_Harsule_Resume.pdf"
              className="px-8 py-3 rounded-full border border-teal-500 text-teal-500 font-medium hover:bg-teal-500 hover:bg-opacity-10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2 text-gray-400">Scroll Down</span>
          <ChevronDownIcon size={24} className="text-teal-500" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
