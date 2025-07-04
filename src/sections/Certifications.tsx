import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AwardIcon, CheckCircleIcon, CalendarIcon, ExternalLinkIcon, ChevronRightIcon, BadgeCheckIcon, BookOpenIcon, TrophyIcon } from 'lucide-react';
const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<number | null>(null);
  const certifications = [{
    title: 'Google Cloud Certified - Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: 'Nov 2024',
    skills: ['Cloud Infrastructure', 'GCP Services', 'Kubernetes', 'Cloud Security'],
    color: 'blue',
    verifyLink: 'https://www.credly.com/badges/3115a5af-6c03-425e-9895-c2cbbc44632a/public_url',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png',
    description: 'Demonstrated ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.',
    achievements: ['Deployed and managed GCP resources using both the console and command-line interface', 'Configured access control and identity management', 'Set up monitoring and logging for cloud resources', 'Managed containerized applications with GKE']
  }, {
    title: 'GitHub Actions',
    issuer: 'GitHub',
    date: 'July 2024',
    skills: ['CI/CD', 'Workflow Automation', 'DevOps', 'Code Integration'],
    color: 'purple',
    verifyLink: 'https://www.credly.com/badges/721d17f2-8a98-47f0-9941-0ab2e37a12ad/public_url',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    description: 'Mastered GitHub Actions for continuous integration and delivery, automating software workflows directly in GitHub repositories.',
    achievements: ['Created complex CI/CD pipelines for various application types', 'Implemented automated testing and deployment workflows', 'Configured matrix builds for multi-platform testing', 'Integrated security scanning and code quality checks']
  }, {
    title: 'Oracle Certified Foundation Associate',
    issuer: 'Oracle',
    date: 'Oct 2023',
    skills: ['Database', 'SQL', 'Oracle Cloud', 'Data Management'],
    color: 'red',
    verifyLink: 'https://www.credly.com/badges/721d17f2-8a98-47f0-9941-0ab2e37a12ad/public_url',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png',
    description: 'Established foundational knowledge of Oracle technologies, including database management and Oracle Cloud Infrastructure.',
    achievements: ['Managed relational databases and performed complex SQL queries', 'Implemented database security best practices', 'Configured Oracle Cloud Infrastructure resources', 'Deployed applications on Oracle Cloud platforms']
  }, {
    title: 'Machine Learning With Python',
    issuer: 'IBM',
    date: 'Oct 2023',
    skills: ['Python', 'ML Algorithms', 'Data Science', 'Neural Networks'],
    color: 'green',
    verifyLink: 'https://www.credly.com/badges/721d17f2-8a98-47f0-9941-0ab2e37a12ad/public_url',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'Developed expertise in machine learning techniques using Python, including data preprocessing, model training, and evaluation.',
    achievements: ['Implemented various ML algorithms for classification and regression', 'Performed data cleaning and feature engineering', 'Evaluated model performance using appropriate metrics', 'Deployed machine learning models in production environments']
  }];
  return <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
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
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto">
          {/* Certification Timeline */}
          <motion.div className="relative mb-16 hidden md:block" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="h-1 bg-gray-200 dark:bg-gray-700 w-full absolute top-8"></div>
            <div className="flex justify-between relative">
              {certifications.map((cert, index) => <motion.div key={index} className="flex flex-col items-center relative" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.2
            }} whileHover={{
              y: -5
            }} onClick={() => setActiveCert(activeCert === index ? null : index)}>
                  <div className={`w-16 h-16 rounded-full bg-${cert.color}-100 dark:bg-${cert.color}-900 flex items-center justify-center mb-3 cursor-pointer border-4 border-white dark:border-gray-800`}>
                    <AwardIcon size={24} className={`text-${cert.color}-500`} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium">{cert.date}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </div>
                  <motion.div className="absolute top-20 mt-2 w-32 h-1 bg-transparent" animate={{
                backgroundColor: activeCert === index ? `var(--tw-${cert.color}-500)` : 'transparent'
              }} transition={{
                duration: 0.3
              }} />
                </motion.div>)}
            </div>
          </motion.div>
          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => <motion.div key={index} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} whileHover={{
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
                <div className={`h-2 bg-${cert.color}-500`}></div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <motion.div className={`p-3 rounded-full bg-${cert.color}-100 dark:bg-${cert.color}-900 flex-shrink-0`} whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.5
                }}>
                      <AwardIcon size={24} className={`text-${cert.color}-500`} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold">{cert.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="mr-2">{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <CalendarIcon size={14} className="mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {cert.skills.map((skill, i) => <div key={i} className="flex items-center">
                        <CheckCircleIcon size={14} className="text-teal-500 mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {skill}
                        </span>
                      </div>)}
                  </div>
                  {/* Expandable Achievements */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                    <motion.button onClick={() => setActiveCert(activeCert === index ? null : index)} className="flex items-center justify-between w-full text-sm font-medium text-left" whileHover={{
                  x: 3
                }}>
                      <span className="flex items-center">
                        <BadgeCheckIcon size={16} className={`text-${cert.color}-500 mr-1`} />
                        Key Achievements
                      </span>
                      <ChevronRightIcon size={16} className={`transform transition-transform ${activeCert === index ? 'rotate-90' : ''}`} />
                    </motion.button>
                    <AnimatePresence>
                      {activeCert === index && <motion.div initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: 'auto',
                    opacity: 1
                  }} exit={{
                    height: 0,
                    opacity: 0
                  }} transition={{
                    duration: 0.3
                  }} className="overflow-hidden">
                          <ul className="pl-6 mt-3 space-y-2">
                            {cert.achievements.map((achievement, i) => <motion.li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start" initial={{
                        opacity: 0,
                        x: -10
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        delay: i * 0.1
                      }}>
                                <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </motion.li>)}
                          </ul>
                        </motion.div>}
                    </AnimatePresence>
                  </div>
                  {cert.verifyLink && (
  <motion.a
    href={cert.verifyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
    whileHover={{ x: 3 }}
  >
    <ExternalLinkIcon size={14} className="mr-1" />
    Verify Certificate
  </motion.a>
)}
                </div>
              </motion.div>)}
          </div>
          {/* Certification Progress */}
          <motion.div className="mt-16 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="flex items-center mb-6">
              <BookOpenIcon size={24} className="text-teal-500 mr-3" />
              <h3 className="text-xl font-semibold">
                Continuous Learning Journey
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">DevOps Mastery</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-blue-600" initial={{
                  width: 0
                }} whileInView={{
                  width: '75%'
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.2,
                  duration: 1
                }} />
                </div>
                <div className="flex justify-between items-center mb-2 mt-4">
                  <span className="text-sm font-medium">
                    Cloud Architecture
                  </span>
                  <span className="text-sm font-medium">80%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-teal-500" initial={{
                  width: 0
                }} whileInView={{
                  width: '80%'
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.3,
                  duration: 1
                }} />
                </div>
                <div className="flex justify-between items-center mb-2 mt-4">
                  <span className="text-sm font-medium">
                    Kubernetes Expertise
                  </span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-purple-500" initial={{
                  width: 0
                }} whileInView={{
                  width: '65%'
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.4,
                  duration: 1
                }} />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900 mr-3">
                    <TrophyIcon size={20} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Next Certification Goal</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      AWS Certified Solutions Architect
                    </p>
                  </div>
                </div>
                <motion.div className="mt-2 p-4 bg-gradient-to-r from-blue-600/10 to-teal-500/10 dark:from-blue-600/20 dark:to-teal-500/20 rounded-lg border border-blue-100 dark:border-blue-900" whileHover={{
                scale: 1.02
              }}>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    "Continuous learning is key to staying ahead in the rapidly
                    evolving DevOps landscape. I'm committed to expanding my
                    knowledge and skills."
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Certifications;