import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MailIcon, MapPinIcon, LinkedinIcon, GithubIcon, YoutubeIcon, SendIcon } from 'lucide-react';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormSubmitted(true);

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    console.log('Message sent successfully');
  } else {
    console.error('Message failed');
  }

  // Reset after a delay
  setTimeout(() => {
    setFormData({ name: '', email: '', message: '' });
    setFormSubmitted(false);
  }, 3000);
};

  return <section id="contact" className="py-20 bg-white dark:bg-gray-900 w-full">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's discuss how my DevOps skills can contribute to your team's
            success
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                  <PhoneIcon size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <a href="tel:+917058932306" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                    +91 7058932306
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900 mr-4">
                  <MailIcon size={20} className="text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:omharsule09@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                    omharsule09@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900 mr-4">
                  <MapPinIcon size={20} className="text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <motion.a href="https://linkedin.com/in/omharsule11/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors" whileHover={{
                y: -5
              }}>
                  <LinkedinIcon size={20} />
                </motion.a>
                <motion.a href="https://github.com/OmSantoshHarsule/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors" whileHover={{
                y: -5
              }}>
                  <GithubIcon size={20} />
                </motion.a>
                <motion.a href="https://www.youtube.com/@DevTech-in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors" whileHover={{
                y: -5
              }}>
                  <YoutubeIcon size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Om Harsule" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="om@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="How can I help you?"></textarea>
                </div>
                <motion.button type="submit" className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} disabled={formSubmitted}>
                  {formSubmitted ? 'Message Sent!' : <>
                      <SendIcon size={18} className="mr-2" />
                      Send Message
                    </>}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
        <motion.div className="mt-20 text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Om Harsule. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>;
};
export default Contact;