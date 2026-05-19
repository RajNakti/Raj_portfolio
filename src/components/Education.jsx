import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Engineering (Information Technology)',
      institution: 'Annasaheb Chudaman Patil College of Engineering',
      location: 'Kharghar, India',
      duration: '2020 - 2024',
      cgpa: '8.71 CGPA',
      description: 'Completed B.E. in Information Technology with a strong foundation in software engineering, problem solving, and emerging AI technologies.',
      highlights: [
        'Strong academic performance with 8.71 CGPA',
        'Focused on AI, software engineering, and product development',
        'Built applied projects across ML, OCR, automation, and full-stack systems',
        'Developed hands-on skills through internships and freelance client work'
      ]
    }
  ];

  const certifications = [
    {
      title: 'JAVA-DSA-OOP',
      issuer: 'UPGARD',
      date: '2023',
      description: 'Covered Java programming, data structures, algorithms, and core object-oriented design concepts.',
      gradient: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'AWS Builder Series',
      issuer: 'Amazon Web Services',
      date: '2022',
      description: 'Strengthened cloud computing fundamentals and understanding of AWS services used in scalable systems.',
      gradient: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'JavaScript and Bootstrap',
      issuer: 'Udemy',
      date: '2023',
      description: 'Focused on modern JavaScript concepts, asynchronous flows, and building interactive frontend experiences.',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-gray-300">
              Education & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey and professional development through continuous learning
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Timeline Line */}
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    {index < education.length - 1 && (
                      <div className="w-0.5 h-32 bg-gray-300 dark:bg-gray-600 mt-4"></div>
                    )}
                  </div>

                  {/* Education Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    // className="flex-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    className="flex-1 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700/50 p-8 backdrop-blur-md transition-all duration-300 hover:border-blue-300 dark:hover:border-gray-600 shadow-md hover:shadow-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {edu.institution}
                        </h4>
                      </div>
                      <div className="flex flex-col items-start md:items-end space-y-2">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <FiCalendar className="mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <FiMapPin className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center text-green-600 dark:text-green-400 font-semibold">
                          <FiAward className="mr-2" />
                          <span>{edu.cgpa}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <FiAward size={120} className="text-blue-500" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Certifications & <span className="gradient-text">Professional Development</span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Continuous learning through industry-recognized certifications and specialized courses
                </p>
                <div className="flex justify-center mt-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`certificate-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${cert.bgColor} relative overflow-hidden`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.gradient}`}></div>

                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`p-3 ${cert.bgColor} rounded-lg border border-gray-200 dark:border-gray-600 float-gentle`}>
                        <FiAward className={`${cert.iconColor} text-xl`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                          {cert.title}
                        </h4>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`text-sm font-semibold px-2 py-1 rounded-full ${cert.bgColor} ${cert.iconColor}`}>
                            {cert.issuer}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex items-center">
                          <FiCalendar className="mr-1" size={14} />
                          {cert.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Decorative Element */}
                    <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${cert.gradient} opacity-10 rounded-tl-full`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Always learning and growing in the tech industry
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse-slow" style={{animationDelay: '0.4s'}}></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
