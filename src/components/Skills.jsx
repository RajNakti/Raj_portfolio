import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaJsSquare,
  FaGitAlt, FaDocker, FaAws, FaDatabase, FaJava, FaCloud, FaBootstrap,
} from 'react-icons/fa';
import {
  SiMongodb, SiPostgresql, SiExpress, SiTailwindcss,
  SiNextdotjs, SiRedis, SiOpenai, SiPostman, SiGithub,
  SiLangchain, SiOllama, SiFastapi, SiHuggingface, SiCelery, SiAnthropic, SiStreamlit, SiGooglegemini, SiPydantic, 
} from 'react-icons/si';

const Skills = () => {
  const marqueeSkills = [
    'Open-Source Models', 'LLM', 'Prompt Engineering', 'RAG', 'AI Agents', 'Fine-Tuning',
    'Transformers', 'Voice Agents', 'OCR', 'vLLM', 'Context Optimization',
    'Agentic AI', 'MCP Tools', 'Docker Deployment', 'Tool Calling',
    'Unsloth', 'NLP', 'Collab', 'IoT', 'Orchestration', 'Runpod', 'AWS Bedrock'
  ];

  const skillCategories = [
    {
      title: 'AI & GenAI',
      skills: [
        { name: 'Python', icon: FaPython, level: 95, color: 'text-blue-500' },
        { name: 'LangChain', icon: SiLangchain, level: 85, color: 'text-emerald-500' },
        { name: 'Hugging Face', icon: SiHuggingface, level: 95, color: 'text-yellow-500' },
        { name: 'Ollama', icon: SiOllama, level: 100, color: 'text-gray-700 dark:text-gray-200' },
        { name: 'OpenAI APIs', icon: SiOpenai, level: 100, color: 'text-green-500' },
        { name: 'Anthropic APIs', icon: SiAnthropic, level: 100, color: 'text-purple-500' },
        { name: 'Google Gemini', icon: SiGooglegemini, level: 100, color: 'text-blue-500' },
        { name: 'AWS Bedrock', icon: FaAws, level: 90, color: 'text-cyan-500' },
      ]
    },
    {
      title: 'Backend & Full Stack',
      skills: [
        { name: 'Pydantic', icon: SiPydantic, level: 85, color: 'text-blue-500' },
        { name: 'Celery', icon: SiCelery, level: 85, color: 'text-blue-500' },
        { name: 'FastAPI', icon: SiFastapi, level: 90, color: 'text-teal-500' },
        { name: 'Next.js', icon: SiNextdotjs, level: 80, color: 'text-gray-900 dark:text-white' },
        { name: 'Express.js', icon: SiExpress, level: 80, color: 'text-gray-700 dark:text-gray-300' },
        { name: 'Node.js', icon: FaNodeJs, level: 80, color: 'text-green-500' },
        { name: 'JavaScript', icon: FaJsSquare, level: 80, color: 'text-yellow-500' },
        { name: 'Java', icon: FaJava, level: 75, color: 'text-red-500' }
      ]
    },
    {
      title: 'Cloud, Data & Tooling',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: 'text-sky-600' },
        { name: 'Redis', icon: SiRedis, level: 75, color: 'text-rose-500' },
        { name: 'AWS', icon: FaAws, level: 75, color: 'text-orange-400' },
        { name: 'Runpod', icon: FaCloud, level: 75, color: 'text-blue-400' },
        { name: 'Docker', icon: FaDocker, level: 85, color: 'text-cyan-500' },
        { name: 'Git', icon: FaGitAlt, level: 90, color: 'text-orange-500' },
        { name: 'GitHub', icon: SiGithub, level: 90, color: 'text-gray-900 dark:text-white' },
        { name: 'Postman', icon: SiPostman, level: 85, color: 'text-orange-400' },
        { name: 'SQL', icon: FaDatabase, level: 85, color: 'text-blue-600' }
      ]
    },
    {
      title: 'Frontend & Delivery',
      skills: [
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: 'text-cyan-400' },
        { name: 'Bootstrap', icon: FaBootstrap, level: 80, color: 'text-purple-500' },
        { name: 'React', icon: FaReact, level: 85, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, level: 80, color: 'text-green-500' },
        { name: 'Streamlit', icon: SiStreamlit, level: 75, color: 'text-orange-500' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full group-hover:scale-110 transition-transform duration-300">
          <skill.icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
            {skill.name}
          </h4>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < Math.floor(skill.level / 20)
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
            {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * 3 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Other Technologies
            </h3>
            
            <div className="space-y-4">
              {[0, 1].map((row) => (
                <div key={row} className="marquee-shell">
                  <div className={`marquee-track ${row === 1 ? 'marquee-track-slower' : ''}`}>
                    {[...marqueeSkills, ...marqueeSkills].map((tech, index) => (
                      <span
                        key={`${row}-${tech}-${index}`}
                        className="marquee-pill"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Always learning and exploring new technologies to stay current with industry trends
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              See My Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
