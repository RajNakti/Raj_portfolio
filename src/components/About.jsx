import { motion } from 'framer-motion';
import { FiDownload, FiUser, FiCode, FiHeart } from 'react-icons/fi';

const About = () => {
  const stats = [
    { number: '10+', label: 'Certifications' },
    { number: '7+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' },
    { number: '8.71', label: 'CGPA' }
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
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Profile Image */}
                <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative">
                  {/* You can replace this src with your actual image path */}
                  <img
                    src="/aboutlogo.png"
                    alt="Raj Nakti Profile"
                    className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-105"
                  />
                  {/* Overlay with professional styling */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating elements around image */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <FiCode size={32} className="text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <FiHeart size={24} className="text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                I'm Raj Nakti, a passionate Full Stack Developer
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a Full Stack Developer specializing in Java, AI & ML, currently completed
                  my Bachelor of Engineering (IT) at AC Patil College of Engineering, Kharghar
                  with a CGPA of 8.71. My journey in tech has been enriched by hands-on experience
                  in Data Science and Machine Learning.
                </p>

                <p>
                  During my internship at RAIT, Navi Mumbai (Dec 2022 - Jan 2023), I developed
                  machine learning projects from scratch, worked with various methodologies like
                  SDLC, Agile, Neural Networks, and gained experience with technologies like
                  Tesseract, scikit-learn, and OpenCV.
                </p>

                <p>
                  I'm passionate about creating innovative solutions that bridge technology and
                  real-world applications, from IoT-based fruit classification systems to
                  anti-sleep driver safety solutions.
                </p>
              </div>

              {/* Skills Highlights */}
              <div className="grid grid-cols-2 gap-4 py-6">
                {[
                  'Machine Learning',
                  'Data Science',
                  'Java Development',
                  'IoT Applications'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Download Resume Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Raj-Nakti-Resume.pdf"
                download
                className="inline-flex items-center gap-2 btn-primary"
              >
                <FiDownload size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
