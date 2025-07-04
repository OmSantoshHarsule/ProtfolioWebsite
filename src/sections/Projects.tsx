import React, { useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, ServerIcon, DatabaseIcon, ShieldIcon, CloudIcon, CheckCircleIcon, BarChartIcon, LayersIcon, CodeIcon } from 'lucide-react';
const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };
  const projects = [{
    title: 'MEAN Stack Web Application Deployment on AWS',
    repoLink: 'https://github.com/OmSantoshHarsule/aws-mean-docker-cicd', // ✅ Add this
    liveDemoLink: 'https://aws-mean-app.om.dev', 
    description: 'Built and deployed a MEAN stack app using Docker on AWS ECS Fargate, handling 2 containers with an Application Load Balancer and secure VPC/IAM setup supporting 99.9% uptime',
    details: ['Automated build and deployment with GitHub Actions, reducing release time by 40% by pushing Docker images to Docker Hub and enabling smooth updates', 'Optimized infrastructure costs by 30% while ensuring the app scales seamlessly to handle up to 1,000 concurrent users'],
    technologies: ['AWS ECS', 'Docker', 'GitHub Actions', 'VPC', 'IAM', 'Load Balancer'],
    icon: <ServerIcon size={24} className="text-blue-500" />,
    metrics: [{
      label: 'Uptime',
      value: '99.9%'
    }, {
      label: 'Release Time Reduction',
      value: '40%'
    }, {
      label: 'Cost Optimization',
      value: '30%'
    }, {
      label: 'Concurrent Users',
      value: '1,000+'
    }],
    architectureDiagram: {
      components: [{
        name: 'GitHub Actions',
        type: 'cicd',
        x: 10,
        y: 20
      }, {
        name: 'Docker Hub',
        type: 'registry',
        x: 30,
        y: 20
      }, {
        name: 'AWS ECS',
        type: 'compute',
        x: 50,
        y: 20
      }, {
        name: 'Load Balancer',
        type: 'network',
        x: 70,
        y: 20
      }, {
        name: 'VPC',
        type: 'network',
        x: 50,
        y: 40
      }, {
        name: 'IAM',
        type: 'security',
        x: 30,
        y: 40
      }, {
        name: 'Angular Frontend',
        type: 'app',
        x: 70,
        y: 40
      }, {
        name: 'Express API',
        type: 'app',
        x: 50,
        y: 60
      }, {
        name: 'MongoDB',
        type: 'database',
        x: 30,
        y: 60
      }],
      connections: [{
        from: 'GitHub Actions',
        to: 'Docker Hub'
      }, {
        from: 'Docker Hub',
        to: 'AWS ECS'
      }, {
        from: 'AWS ECS',
        to: 'Load Balancer'
      }, {
        from: 'Load Balancer',
        to: 'Angular Frontend'
      }, {
        from: 'Angular Frontend',
        to: 'Express API'
      }, {
        from: 'Express API',
        to: 'MongoDB'
      }, {
        from: 'IAM',
        to: 'AWS ECS'
      }, {
        from: 'VPC',
        to: 'AWS ECS'
      }]
    }
  }, {
    title: 'Server Automation with Ansible',
    repoLink: 'https://github.com/OmSantoshHarsule/aws-mean-docker-cicd', // ✅ Add this
    liveDemoLink: 'https://aws-mean-app.om.dev', 
    description: 'Automated provisioning and setup of 10+ AWS EC2 instances with Ansible, including Nginx, MySQL, and Docker installation',
    details: ['Secured sensitive data using Ansible Vault and implemented rolling updates to reduce deployment time by 35%', 'Ensured consistent configurations and basic security hardening for reliable, scalable web app deployments'],
    technologies: ['Ansible', 'AWS EC2', 'Nginx', 'MySQL', 'Docker', 'Security'],
    icon: <DatabaseIcon size={24} className="text-teal-500" />,
    metrics: [{
      label: 'EC2 Instances',
      value: '10+'
    }, {
      label: 'Deployment Time Reduction',
      value: '35%'
    }, {
      label: 'Configuration Consistency',
      value: '100%'
    }, {
      label: 'Security Compliance',
      value: '98%'
    }],
    architectureDiagram: {
      components: [{
        name: 'Ansible Control Node',
        type: 'control',
        x: 10,
        y: 30
      }, {
        name: 'Ansible Vault',
        type: 'security',
        x: 10,
        y: 50
      }, {
        name: 'AWS EC2 - Web 1',
        type: 'compute',
        x: 40,
        y: 10
      }, {
        name: 'AWS EC2 - Web 2',
        type: 'compute',
        x: 40,
        y: 30
      }, {
        name: 'AWS EC2 - Web 3',
        type: 'compute',
        x: 40,
        y: 50
      }, {
        name: 'AWS EC2 - DB',
        type: 'database',
        x: 70,
        y: 30
      }, {
        name: 'Nginx',
        type: 'web',
        x: 55,
        y: 20
      }, {
        name: 'Docker',
        type: 'container',
        x: 55,
        y: 40
      }, {
        name: 'MySQL',
        type: 'database',
        x: 70,
        y: 50
      }],
      connections: [{
        from: 'Ansible Control Node',
        to: 'AWS EC2 - Web 1'
      }, {
        from: 'Ansible Control Node',
        to: 'AWS EC2 - Web 2'
      }, {
        from: 'Ansible Control Node',
        to: 'AWS EC2 - Web 3'
      }, {
        from: 'Ansible Control Node',
        to: 'AWS EC2 - DB'
      }, {
        from: 'Ansible Vault',
        to: 'Ansible Control Node'
      }, {
        from: 'AWS EC2 - Web 1',
        to: 'Nginx'
      }, {
        from: 'AWS EC2 - Web 2',
        to: 'Nginx'
      }, {
        from: 'AWS EC2 - Web 3',
        to: 'Nginx'
      }, {
        from: 'AWS EC2 - Web 1',
        to: 'Docker'
      }, {
        from: 'AWS EC2 - Web 2',
        to: 'Docker'
      }, {
        from: 'AWS EC2 - Web 3',
        to: 'Docker'
      }, {
        from: 'AWS EC2 - DB',
        to: 'MySQL'
      }]
    }
  }, {
    title: 'AWS Resource Automation using Menu-Driven Shell Script',
    repoLink: 'https://github.com/OmSantoshHarsule/shell-script-AwsResourceCheck', // ✅ Add this
    liveDemoLink: 'https://aws-mean-app.om.dev', 
    description: 'Built a menu-driven shell script to automate AWS tasks and fetch details of 20+ EC2 instances and 15+ S3 buckets',
    details: ['Used AWS CLI with logic to manage resources efficiently and display key info clearly', 'Added input validation and error handling, improving user experience and reducing errors by 40%'],
    technologies: ['Shell Script', 'AWS CLI', 'EC2', 'S3', 'Automation'],
    icon: <ShieldIcon size={24} className="text-amber-500" />,
    metrics: [{
      label: 'EC2 Instances Managed',
      value: '20+'
    }, {
      label: 'S3 Buckets Managed',
      value: '15+'
    }, {
      label: 'Error Reduction',
      value: '40%'
    }, {
      label: 'Admin Time Saved',
      value: '65%'
    }],
    architectureDiagram: {
      components: [{
        name: 'Shell Script',
        type: 'script',
        x: 10,
        y: 30
      }, {
        name: 'AWS CLI',
        type: 'tool',
        x: 30,
        y: 30
      }, {
        name: 'EC2 Resources',
        type: 'compute',
        x: 50,
        y: 20
      }, {
        name: 'S3 Resources',
        type: 'storage',
        x: 50,
        y: 40
      }, {
        name: 'IAM Authentication',
        type: 'security',
        x: 30,
        y: 50
      }, {
        name: 'User Interface',
        type: 'ui',
        x: 10,
        y: 10
      }, {
        name: 'Resource Listing',
        type: 'feature',
        x: 70,
        y: 10
      }, {
        name: 'Resource Creation',
        type: 'feature',
        x: 70,
        y: 30
      }, {
        name: 'Resource Deletion',
        type: 'feature',
        x: 70,
        y: 50
      }],
      connections: [{
        from: 'User Interface',
        to: 'Shell Script'
      }, {
        from: 'Shell Script',
        to: 'AWS CLI'
      }, {
        from: 'AWS CLI',
        to: 'EC2 Resources'
      }, {
        from: 'AWS CLI',
        to: 'S3 Resources'
      }, {
        from: 'IAM Authentication',
        to: 'AWS CLI'
      }, {
        from: 'EC2 Resources',
        to: 'Resource Listing'
      }, {
        from: 'EC2 Resources',
        to: 'Resource Creation'
      }, {
        from: 'EC2 Resources',
        to: 'Resource Deletion'
      }, {
        from: 'S3 Resources',
        to: 'Resource Listing'
      }, {
        from: 'S3 Resources',
        to: 'Resource Creation'
      }, {
        from: 'S3 Resources',
        to: 'Resource Deletion'
      }]
    }
  }];
  // Function to render architecture diagram
  const renderArchitectureDiagram = (diagram: any) => {
    const componentColors: Record<string, string> = {
      compute: 'bg-blue-500',
      network: 'bg-purple-500',
      security: 'bg-red-500',
      app: 'bg-green-500',
      database: 'bg-amber-500',
      cicd: 'bg-teal-500',
      registry: 'bg-indigo-500',
      control: 'bg-cyan-500',
      web: 'bg-emerald-500',
      container: 'bg-violet-500',
      script: 'bg-orange-500',
      tool: 'bg-sky-500',
      storage: 'bg-lime-500',
      ui: 'bg-pink-500',
      feature: 'bg-yellow-500'
    };
    const componentIcons: Record<string, React.ReactNode> = {
      compute: <ServerIcon size={16} />,
      network: <LayersIcon size={16} />,
      security: <ShieldIcon size={16} />,
      app: <CodeIcon size={16} />,
      database: <DatabaseIcon size={16} />,
      cicd: <CheckCircleIcon size={16} />,
      registry: <LayersIcon size={16} />,
      control: <ServerIcon size={16} />,
      web: <CodeIcon size={16} />,
      container: <LayersIcon size={16} />,
      script: <CodeIcon size={16} />,
      tool: <CodeIcon size={16} />,
      storage: <DatabaseIcon size={16} />,
      ui: <LayersIcon size={16} />,
      feature: <CheckCircleIcon size={16} />
    };
    return <div className="relative h-full w-full bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
        {/* Components */}
        {diagram.components.map((component: any, index: number) => <motion.div key={index} initial={{
        opacity: 0,
        scale: 0
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: index * 0.1
      }} className={`absolute px-2 py-1 rounded-md text-xs font-medium text-white flex items-center ${componentColors[component.type] || 'bg-gray-500'}`} style={{
        left: `${component.x}%`,
        top: `${component.y}%`,
        transform: 'translate(-50%, -50%)'
      }}>
            <span className="mr-1">{componentIcons[component.type]}</span>
            {component.name}
          </motion.div>)}
        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {diagram.connections.map((connection: any, index: number) => {
          const fromComponent = diagram.components.find((c: any) => c.name === connection.from);
          const toComponent = diagram.components.find((c: any) => c.name === connection.to);
          if (!fromComponent || !toComponent) return null;
          const fromX = fromComponent.x;
          const fromY = fromComponent.y;
          const toX = toComponent.x;
          const toY = toComponent.y;
          return <motion.path key={index} d={`M ${fromX}% ${fromY}% L ${toX}% ${toY}%`} stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-gray-400 dark:text-gray-600" initial={{
            pathLength: 0
          }} animate={{
            pathLength: 1
          }} transition={{
            delay: index * 0.05,
            duration: 0.5
          }} />;
        })}
        </svg>
      </div>;
  };
  return <section id="projects" className="py-20 bg-white dark:bg-gray-900 w-full">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my practical experience in DevOps implementation and
            cloud infrastructure
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-10">
            {projects.map((project, index) => <motion.div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <motion.div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700" whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.5
                }}>
                      {project.icon}
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {project.details.map((detail, i) => <div key={i} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {detail}
                        </p>
                      </div>)}
                  </div>
                  {/* Project Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {project.metrics.map((metric, i) => <motion.div key={i} className="bg-white dark:bg-gray-900 p-3 rounded-lg text-center" whileHover={{
                  scale: 1.05
                }}>
                        <motion.div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500" initial={{
                    opacity: 0,
                    y: 10
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: i * 0.1
                  }}>
                          {metric.value}
                        </motion.div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {metric.label}
                        </p>
                      </motion.div>)}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => <motion.span key={i} className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" whileHover={{
                  scale: 1.1
                }} transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 10
                }}>
                        {tech}
                      </motion.span>)}
                  </div>
                  <div className="flex gap-4">
                    <motion.a href="https://github.com/peruyeroj/healthcare_portal" className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" whileHover={{
                  x: 3
                }}>
                      <GithubIcon size={16} className="mr-1" />
                      View Code
                    </motion.a>
                    <motion.a href="#" className="flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300" whileHover={{
                  x: 3
                }}>
                      <ExternalLinkIcon size={16} className="mr-1" />
                      Live Demo
                    </motion.a>
                    <motion.button onClick={() => toggleProject(index)} className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 ml-auto" whileHover={{
                  scale: 1.05
                }}>
                      {expandedProject === index ? 'Hide Details' : 'View Architecture'}
                    </motion.button>
                  </div>
                </div>
                {/* Architecture Diagram */}
                <AnimatePresence>
                  {expandedProject === index && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 300,
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3
              }} className="overflow-hidden">
                      <div className="p-4 h-[300px]">
                        {renderArchitectureDiagram(project.architectureDiagram)}
                      </div>
                    </motion.div>}
                </AnimatePresence>
                {/* Terminal-like visualization when not expanded */}
                {expandedProject !== index && <div className="h-48 bg-gradient-to-r from-blue-600/10 to-teal-500/10 dark:from-blue-600/20 dark:to-teal-500/20 flex items-center justify-center p-4 relative overflow-hidden">
                    <motion.div className="absolute inset-0 opacity-10" animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }} transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }} style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2082&q=80')",
                backgroundSize: 'cover'
              }} />
                    <div className="text-center relative">
                      <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.5
                }} className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center mb-3">
                          {project.icon}
                        </div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          Click "View Architecture" to explore the project
                          structure
                        </p>
                      </motion.div>
                    </div>
                  </div>}
              </motion.div>)}
          </div>
          {/* GitHub Projects Section */}
          <motion.div className="mt-16" initial={{
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
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">GitHub Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Check out more of my projects on GitHub
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a href="https://github.com/OmSantoshHarsule" target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex flex-col" whileHover={{
              y: -5
            }}>
                <div className="flex items-center mb-4">
                  <GithubIcon size={24} className="text-gray-800 dark:text-gray-200 mr-3" />
                  <h4 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    View All Repositories
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore all my open-source projects and contributions on
                  GitHub
                </p>
                <div className="mt-auto flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                  <span>Visit GitHub Profile</span>
                  <motion.span className="ml-2" animate={{
                  x: [0, 5, 0]
                }} transition={{
                  repeat: Infinity,
                  duration: 1.5
                }}>
                    →
                  </motion.span>
                </div>
              </motion.a>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <CloudIcon size={20} className="text-blue-600 mr-2" />
                  GitHub Activity
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Repositories
                    </span>
                    <motion.div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" whileInView={{
                    opacity: 1
                  }} viewport={{
                    once: true
                  }}>
                      <motion.div className="h-full bg-blue-600" initial={{
                      width: 0
                    }} whileInView={{
                      width: '70%'
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 0.2,
                      duration: 0.8
                    }} />
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Commits
                    </span>
                    <motion.div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" whileInView={{
                    opacity: 1
                  }} viewport={{
                    once: true
                  }}>
                      <motion.div className="h-full bg-teal-500" initial={{
                      width: 0
                    }} whileInView={{
                      width: '85%'
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 0.3,
                      duration: 0.8
                    }} />
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Pull Requests
                    </span>
                    <motion.div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" whileInView={{
                    opacity: 1
                  }} viewport={{
                    once: true
                  }}>
                      <motion.div className="h-full bg-purple-500" initial={{
                      width: 0
                    }} whileInView={{
                      width: '60%'
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 0.4,
                      duration: 0.8
                    }} />
                    </motion.div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[...Array(20)].map((_, i) => <motion.div key={i} className="h-4 rounded-sm bg-green-100 dark:bg-green-900" initial={{
                  opacity: 0,
                  scale: 0
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: i * 0.02
                }} style={{
                  opacity: Math.random() * 0.7 + 0.3
                }} />)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Projects;