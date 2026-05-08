import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Venue OCR Service',
      description: 'Built a scalable OCR workflow for handwritten text extraction using AI models, async workers, serverless inference, and cloud deployment for high-accuracy document processing.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Celery', 'Redis', 'PostgreSQL', 'Runpod', 'vLLM', 'Docker', 'OCR'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RajNakti',
      featured: true,
      gradient: 'from-blue-500 to-purple-600',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'MCP Master',
      description: 'Created a ChatGPT-style platform connected to multiple MCP tools like Gmail, Calendar, and to-do systems, with OAuth flows, LLM-triggered actions, and a dynamic admin permissions panel.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'FastAPI', 'React', 'SQLite', 'OAuth', 'Composio', 'JWT', 'MCP'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RajNakti',
      featured: true,
      gradient: 'from-green-500 to-teal-600',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Email Agent',
      description: 'Built an automated complaint-handling system that classifies emails, raises tickets, processes attachments, and supports multiple model backends including AWS Bedrock.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'FastAPI', 'RAG', 'AWS Bedrock', 'SQLite', 'OpenAI', 'Automation'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RajNakti',
      featured: true,
      gradient: 'from-pink-500 to-rose-600',
      iconColor: 'text-pink-600'
    },
    {
      id: 4,
      title: 'Health Agent',
      description: 'Developed an AI health assistant that analyzes uploaded reports and medicine-related documents to provide personalized guidance, likely outcomes, and structured recommendations.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'FastAPI', 'RAG', 'Agno', 'Streamlit', 'OpenAI', 'Healthcare AI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RajNakti',
      featured: false,
      gradient: 'from-amber-500 to-orange-600',
      iconColor: 'text-amber-600'
    }
  ];



  const ProjectCard = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-colors duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 relative"
      style={{ minHeight: '400px' }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden group">
        <div className={`w-full h-48 md:h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
          <FiCode size={60} className="text-white opacity-90" />
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="View live demo"
          >
            <FiExternalLink size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="View source code"
          >
            <FiGithub size={20} />
          </motion.a>
        </div>
        
        {project.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, techIndex) => {
            const colors = [
              'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
              'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
              'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
              'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
              'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200'
            ];
            return (
              <span
                key={tech}
                className={`px-2.5 py-1 text-xs rounded-full font-medium ${colors[techIndex % colors.length]}`}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm`}
          >
            <FiExternalLink size={16} />
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 border-2 border-gray-300 dark:border-gray-600 ${project.iconColor} hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm`}
          >
            <FiGithub size={16} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-gray-300">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid - 3 Cards in Single Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Want to see more of my work?
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/rajnakti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FiGithub size={20} />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
