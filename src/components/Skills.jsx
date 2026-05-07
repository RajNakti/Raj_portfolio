import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaJsSquare, FaHtml5, FaCss3Alt,
  FaGitAlt, FaDocker, FaAws, FaDatabase, FaJava
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiTailwindcss,
  SiNextdotjs, SiRedis, SiGraphql, SiFirebase, SiVercel, SiOpencv,
  SiTensorflow, SiScikitlearn, SiPostman, SiGithub
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, level: 90, color: 'text-blue-500' },
        { name: 'Java', icon: FaJava, level: 85, color: 'text-red-500' },
        { name: 'JavaScript', icon: FaJsSquare, level: 80, color: 'text-yellow-500' },
        { name: 'SQL', icon: FaDatabase, level: 85, color: 'text-blue-600' },
        { name: 'HTML/CSS', icon: FaHtml5, level: 90, color: 'text-orange-500' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: FaReact, level: 85, color: 'text-blue-500' },
        { name: 'Express.js', icon: SiExpress, level: 80, color: 'text-gray-700 dark:text-gray-300' },
        { name: 'Node.js', icon: FaNodeJs, level: 80, color: 'text-green-500' },
        { name: 'OpenCV', icon: SiOpencv, level: 75, color: 'text-green-600' },
        { name: 'Scikit-learn', icon: SiScikitlearn, level: 80, color: 'text-orange-500' }
      ]
    },
    {
      title: 'Technologies & Tools',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: 'text-green-500' },
        { name: 'Git', icon: FaGitAlt, level: 90, color: 'text-orange-500' },
        { name: 'GitHub', icon: SiGithub, level: 90, color: 'text-gray-900 dark:text-white' },
        { name: 'Postman', icon: SiPostman, level: 85, color: 'text-orange-400' },
        { name: 'AWS', icon: FaAws, level: 70, color: 'text-orange-400' },
        { name: 'VS Code', icon: FaDatabase, level: 95, color: 'text-blue-500' }
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
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Machine Learning', 'Data Science', 'Neural Networks', 'SDLC', 'Agile',
                'IoT Development', 'Computer Vision', 'Tesseract OCR',
                'Data Analysis', 'Algorithm Design'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium cursor-default"
                >
                  {tech}
                </motion.span>
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
