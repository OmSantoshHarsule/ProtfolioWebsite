import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, DownloadIcon, MenuIcon, XIcon } from 'lucide-react';
interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}
const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    title: 'Home',
    href: '#home'
  }, {
    title: 'About',
    href: '#about'
  }, {
    title: 'Skills',
    href: '#skills'
  }, {
    title: 'Experience',
    href: '#experience'
  }, {
    title: 'Projects',
    href: '#projects'
  }, {
    title: 'Certifications',
    href: '#certifications'
  }, {
    title: 'Contact',
    href: '#contact'
  }];
  return <motion.header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-opacity-0'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    type: 'spring',
    stiffness: 100
  }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500" whileHover={{
        scale: 1.05
      }}>
          Om Harsule
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => <motion.a key={link.title} href={link.href} className="text-sm font-medium hover:text-teal-500 transition-colors" whileHover={{
          scale: 1.1
        }}>
              {link.title}
            </motion.a>)}
          <motion.button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200" whileHover={{
          rotate: 180
        }} transition={{
          duration: 0.3
        }}>
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </motion.button>
          <motion.a href="Om_Santosh_Harsule_DevOps___Cloud_Engineer_v5.pdf" 
          download="Om_Santosh_Harsule_Resume.pdf"
          className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium text-sm" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <DownloadIcon size={16} className="mr-2" />
            Resume
          </motion.a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2" whileTap={{
          scale: 0.9
        }}>
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && <motion.div className="md:hidden bg-white dark:bg-gray-900 shadow-lg" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.title} href={link.href} className="text-sm font-medium py-2 hover:text-teal-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {link.title}
              </a>)}
            <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
              <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
              </button>
              <a href="#" className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium text-sm">
                <DownloadIcon size={16} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
        </motion.div>}
    </motion.header>;
};
export default Navbar;