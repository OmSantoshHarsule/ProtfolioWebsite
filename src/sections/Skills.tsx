import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudIcon, ServerIcon, CodeIcon, DatabaseIcon, BarChartIcon, CheckCircleIcon, ShieldIcon, LayersIcon, GitBranchIcon, MonitorIcon } from 'lucide-react';
const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  const handleSkillHover = (skill: string | null) => {
    setActiveSkill(skill);
  };
  const skillCategories = [{
    title: 'Cloud Platforms',
    icon: <CloudIcon className="text-blue-500" size={24} />,
    skills: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Microsoft Azure'],
    key: 'cloud'
  }, {
    title: 'DevOps & Cloud Tools',
    icon: <ServerIcon className="text-teal-500" size={24} />,
    skills: ['Git', 'GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'AWS Services', 'CI/CD Pipelines'],
    key: 'devops'
  }, {
    title: 'Programming & Scripting',
    icon: <CodeIcon className="text-amber-500" size={24} />,
    skills: ['Bash/Shell Script', 'Python', 'YAML'],
    key: 'programming'
  }, {
    title: 'Web Technologies & Databases',
    icon: <DatabaseIcon className="text-indigo-500" size={24} />,
    skills: ['ReactJS', 'Node.js', 'MongoDB'],
    key: 'web'
  }, {
    title: 'Observability & Security',
    icon: <BarChartIcon className="text-red-500" size={24} />,
    skills: ['Prometheus', 'Grafana', 'Security Tools'],
    key: 'observability'
  }];
  const skillVisualizations: Record<string, React.ReactNode> = {
    cloud: <div className="h-full flex items-center justify-center relative">
        <motion.div className="absolute inset-0 opacity-10" animate={{
        backgroundPosition: ['0% 0%', '100% 100%']
      }} transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse'
      }} style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: 'cover'
      }} />
        <div className="grid grid-cols-3 gap-4 z-10">
          {['AWS', 'GCP', 'Azure'].map((cloud, index) => <motion.div key={index} className="flex flex-col items-center" initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: index * 0.2
        }}>
              <motion.div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2" animate={{
            y: [0, -5, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}>
                <CloudIcon size={32} className="text-blue-600 dark:text-blue-400" />
              </motion.div>
              <span className="text-sm font-medium">{cloud}</span>
            </motion.div>)}
        </div>
      </div>,
    devops: <div className="h-full flex items-center justify-center">
        <div className="relative w-full max-w-xs">
          <motion.div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center z-20" animate={{
          rotate: 360
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}>
            <LayersIcon size={36} className="text-teal-600 dark:text-teal-400" />
          </motion.div>
          {['Docker', 'K8s', 'Terraform', 'Ansible', 'Jenkins', 'Git'].map((tool, index) => {
          const angle = index * 60 * (Math.PI / 180);
          const x = Math.cos(angle) * 80;
          const y = Math.sin(angle) * 80;
          return <motion.div key={index} className="absolute w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center" style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)'
          }} initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: index * 0.1
          }}>
                  <motion.div animate={{
              rotate: 360
            }} transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear'
            }}>
                    <span className="text-xs font-bold">{tool.charAt(0)}</span>
                  </motion.div>
                </motion.div>;
        })}
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full z-10">
            {['Docker', 'K8s', 'Terraform', 'Ansible', 'Jenkins', 'Git'].map((_, index) => {
            const angle = index * 60 * (Math.PI / 180);
            const x = Math.cos(angle) * 80;
            const y = Math.sin(angle) * 80;
            return <motion.line key={index} x1="50%" y1="50%" x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`} stroke="currentColor" className="text-gray-300 dark:text-gray-700" strokeDasharray="4" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              delay: index * 0.1,
              duration: 1
            }} />;
          })}
          </svg>
        </div>
      </div>,
    programming: <div className="h-full flex items-center justify-center">
        <div className="bg-gray-900 dark:bg-gray-950 rounded-md w-full max-w-xs p-4 font-mono text-sm">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }}>
            <p className="text-green-500 mb-1">$ ./deploy.sh</p>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5
          }}>
              <p className="text-blue-400 mb-1"># Deploying application</p>
              <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 1
            }}>
                <p className="text-gray-400 mb-1">Building Docker image...</p>
                <motion.div initial={{
                opacity: 0,
                width: 0
              }} animate={{
                opacity: 1,
                width: '100%'
              }} transition={{
                delay: 1.5,
                duration: 1
              }} className="h-2 bg-blue-600 rounded-full mb-1" />
                <motion.p className="text-gray-400 mb-1" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 2.5
              }}>
                  Pushing to registry...
                </motion.p>
                <motion.div initial={{
                opacity: 0,
                width: 0
              }} animate={{
                opacity: 1,
                width: '100%'
              }} transition={{
                delay: 3,
                duration: 1
              }} className="h-2 bg-teal-600 rounded-full mb-1" />
                <motion.p className="text-green-500" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 4
              }}>
                  Deployment successful!
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>,
    web: <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
          <motion.div className="flex flex-col items-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }}>
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
              <CodeIcon size={28} className="text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-medium">React</span>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div className="bg-blue-600 h-2 rounded-full" initial={{
              width: 0
            }} animate={{
              width: '90%'
            }} transition={{
              delay: 0.5,
              duration: 1
            }} />
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }}>
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-2">
              <ServerIcon size={28} className="text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium">Node.js</span>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div className="bg-green-600 h-2 rounded-full" initial={{
              width: 0
            }} animate={{
              width: '85%'
            }} transition={{
              delay: 0.7,
              duration: 1
            }} />
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }}>
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-2">
              <DatabaseIcon size={28} className="text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium">MongoDB</span>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div className="bg-green-600 h-2 rounded-full" initial={{
              width: 0
            }} animate={{
              width: '80%'
            }} transition={{
              delay: 0.9,
              duration: 1
            }} />
            </div>
          </motion.div>
        </div>
      </div>,
    observability: <div className="h-full flex items-center justify-center">
        <div className="w-full max-w-xs">
          <motion.div className="mb-6" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium">CPU Usage</span>
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                65%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div className="bg-blue-600 h-2 rounded-full" initial={{
              width: 0
            }} animate={{
              width: '65%'
            }} transition={{
              duration: 1
            }} />
            </div>
          </motion.div>
          <motion.div className="mb-6" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium">Memory</span>
              <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
                42%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div className="bg-teal-600 h-2 rounded-full" initial={{
              width: 0
            }} animate={{
              width: '42%'
            }} transition={{
              delay: 0.3,
              duration: 1
            }} />
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6
        }}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium">Disk I/O</span>
              <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                28%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div className="bg-purple-600 h-2 rounded-full" initial={{
              width: 0
            }} animate={{
              width: '28%'
            }} transition={{
              delay: 0.6,
              duration: 1
            }} />
            </div>
          </motion.div>
          <div className="flex justify-between mt-6">
            <motion.div className="flex items-center" initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.9
          }}>
              <CheckCircleIcon size={16} className="text-green-500 mr-1" />
              <span className="text-xs">All Systems Normal</span>
            </motion.div>
            <motion.div className="text-xs text-gray-500 dark:text-gray-400" initial={{
            opacity: 0,
            x: 10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.9
          }}>
              Updated just now
            </motion.div>
          </div>
        </div>
      </div>
  };
  return <section id="skills" className="py-20 w-full bg-white dark:bg-gray-900">
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
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of skills I've acquired throughout my DevOps
            journey
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }}>
          {skillCategories.map((category, index) => <motion.div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700" variants={item} onMouseEnter={() => handleSkillHover(category.key)} onMouseLeave={() => handleSkillHover(null)} whileHover={{
          y: -5
        }}>
              <div className="flex items-center mb-4">
                <motion.div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 mr-3" whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.5
            }}>
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => <motion.div key={skillIndex} className="flex items-center" initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: skillIndex * 0.1
            }}>
                    <div className="w-1 h-1 rounded-full bg-teal-500 mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </motion.div>)}
              </div>
              {category.title === 'DevOps & Cloud Tools' && <motion.div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.3
          }}>
                  <p className="text-sm font-medium mb-2">AWS Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {['EC2', 'S3', 'EKS', 'IAM', 'EBS', 'Route53', 'ELB', 'Lambda', 'CodeBuild'].map((service, i) => <motion.span key={i} className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" whileHover={{
                scale: 1.1
              }}>
                        {service}
                      </motion.span>)}
                  </div>
                </motion.div>}
            </motion.div>)}
        </motion.div>
        {/* Skill Visualization Area */}
        <motion.div className="mt-12 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 max-w-6xl mx-auto" initial={{
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
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                Interactive Skill Visualization
              </h3>
              <div className="flex space-x-2">
                <motion.button onClick={() => handleSkillHover('cloud')} className={`p-2 rounded-md ${activeSkill === 'cloud' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-700'}`} whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <CloudIcon size={16} />
                </motion.button>
                <motion.button onClick={() => handleSkillHover('devops')} className={`p-2 rounded-md ${activeSkill === 'devops' ? 'bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400' : 'bg-gray-100 dark:bg-gray-700'}`} whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <ServerIcon size={16} />
                </motion.button>
                <motion.button onClick={() => handleSkillHover('programming')} className={`p-2 rounded-md ${activeSkill === 'programming' ? 'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400' : 'bg-gray-100 dark:bg-gray-700'}`} whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <CodeIcon size={16} />
                </motion.button>
                <motion.button onClick={() => handleSkillHover('web')} className={`p-2 rounded-md ${activeSkill === 'web' ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400' : 'bg-gray-100 dark:bg-gray-700'}`} whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <DatabaseIcon size={16} />
                </motion.button>
                <motion.button onClick={() => handleSkillHover('observability')} className={`p-2 rounded-md ${activeSkill === 'observability' ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400' : 'bg-gray-100 dark:bg-gray-700'}`} whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <BarChartIcon size={16} />
                </motion.button>
              </div>
            </div>
          </div>
          <div className="h-64 p-4">
            <AnimatePresence mode="wait">
              {activeSkill ? <motion.div key={activeSkill} className="h-full" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: 0.3
            }}>
                  {skillVisualizations[activeSkill]}
                </motion.div> : <motion.div key="default" className="h-full flex items-center justify-center" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }}>
                  <div className="text-center max-w-md">
                    <motion.div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center text-white" animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                      <LayersIcon size={32} />
                    </motion.div>
                    <h3 className="text-lg font-medium mb-2">
                      Explore My Skills
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Click on any category above to see an interactive
                      visualization of my skills and expertise
                    </p>
                  </div>
                </motion.div>}
            </AnimatePresence>
          </div>
        </motion.div>
        <motion.div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-8 text-white max-w-6xl mx-auto" initial={{
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
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">Continuous Learning</h3>
            <p className="mt-2 opacity-90">
              Always expanding my skillset to stay ahead in the DevOps ecosystem
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
            {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Ansible', 'CI/CD'].map((tool, index) => <motion.div key={index} className="flex flex-col items-center" whileHover={{
            scale: 1.05
          }}>
                <motion.div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-2" animate={{
              y: [0, -5, 0]
            }} transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity
            }}>
                  {/* Placeholder for tool icon */}
                  <span className="font-bold">{tool.charAt(0)}</span>
                </motion.div>
                <span className="text-sm">{tool}</span>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Skills;