import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiCode, FiSmartphone, FiGlobe, FiDatabase, FiCloud, FiZap,
  FiCheck, FiStar, FiCalendar, FiMail, FiPhone, FiMapPin,
  FiArrowRight, FiUsers, FiTrendingUp, FiLayers, FiHeart
} from 'react-icons/fi';

const Freelancing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const services = [
    {
      icon: FiGlobe,
      title: 'Web Development',
      description: 'Modern, responsive websites using React, Next.js, and cutting-edge technologies',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
      price: 'Starting at Rs 2000',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with React Native and Flutter',
      features: ['iOS & Android', 'Native Performance', 'Push Notifications', 'Offline Support'],
      price: 'Starting at Rs 4000',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: FiDatabase,
      title: 'Backend Development',
      description: 'Scalable APIs and database solutions with Node.js, Python, and cloud services',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Security'],
      price: 'Starting at Rs 4000',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: FiZap,
      title: 'Full Stack Solutions',
      description: 'Complete end-to-end development from concept to deployment',
      features: ['Frontend + Backend', 'Database Setup', 'Deployment', 'Maintenance'],
      price: 'Starting at Rs 4200',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: FiCloud,
      title: 'Cloud & DevOps',
      description: 'Cloud deployment, CI/CD pipelines, and infrastructure management',
      features: ['AWS/Azure Setup', 'CI/CD Pipelines', 'Monitoring', 'Scaling'],
      price: 'Starting at Rs 4000',
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: FiLayers,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly interfaces that convert visitors to customers',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'],
      price: 'Starting at Rs 3150',
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20'
    }
  ];

  const stats = [
    { icon: FiUsers, number: '50+', label: 'Happy Clients' },
    { icon: FiCode, number: '100+', label: 'Projects Completed' },
    { icon: FiStar, number: '4.9/5', label: 'Average Rating' },
    { icon: FiTrendingUp, number: '98%', label: 'Success Rate' }
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-4">
                🚀 Available for Freelance Projects
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 dark:text-gray-300"
            >
              Let's Build Something
              <span className="inline-block gradient-text px-2 py-2 leading-tight">Amazing Together</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              Transform your ideas into powerful digital solutions with a passionate full-stack developer
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
              >
                <FiMail size={20} />
                Start Your Project
              </motion.a>
              
              <motion.a
                href="https://calendly.com/naktiraj77/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
              >
                <FiCalendar size={20} />
                Schedule a Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-gray-300">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${service.bgColor} border border-gray-200 dark:border-gray-700 overflow-hidden group`}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>

                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <FiCheck className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Get Quote
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${service.gradient} opacity-10 rounded-tl-full`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-gray-300">
                Let's Start Your <span className="gradient-text">Project</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Ready to bring your ideas to life? Let's discuss your project!
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-2xl shadow-lg h-fit"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Details
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      >
                        <option value="">Select Project Type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="backend">Backend Development</option>
                        <option value="full-stack">Full Stack Solution</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      >
                        <option value="">Select Budget</option>
                        <option value="under-1k">Under Rs 1,000</option>
                        <option value="1k-5k">Rs 1,000 - Rs 5,000</option>
                        <option value="5k-10k">Rs 5,000 - Rs 10,000</option>
                        <option value="10k-plus">Rs 10,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-none"
                      placeholder="Tell me about your project, goals, and requirements..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 font-semibold"
                  >
                    <FiMail size={20} />
                    Send Project Details
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info & CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 lg:p-8 rounded-2xl">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Prefer to talk directly?
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                        <FiMail className="text-blue-600 dark:text-blue-400" size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base break-all">naktiraj77@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg flex-shrink-0">
                        <FiPhone className="text-green-600 dark:text-green-400" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">+91 9764664021</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg flex-shrink-0">
                        <FiMapPin className="text-purple-600 dark:text-purple-400" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">Seawoods, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule Meeting CTA */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 lg:p-8 rounded-2xl text-white text-center">
                  <FiCalendar size={40} className="mx-auto mb-4 opacity-80" />
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">
                    Schedule a Free Consultation
                  </h3>
                  <p className="mb-6 opacity-90 text-sm lg:text-base">
                    Let's discuss your project requirements and how I can help bring your vision to life.
                  </p>
                  <motion.a
                    href="https://calendly.com/naktiraj77/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm lg:text-base"
                  >
                    <FiCalendar size={18} />
                    Book 30-Min Call
                    <FiArrowRight size={14} />
                  </motion.a>
                </div>

                {/* Process Overview */}
                <div className="bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    How We'll Work Together
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">Discovery Call</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">We'll discuss your project goals, requirements, and timeline</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">2</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">Proposal & Planning</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">I'll create a detailed proposal with timeline and milestones</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 dark:text-green-400 font-bold text-sm">3</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">Development & Updates</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Regular progress updates and collaboration throughout development</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">Launch & Support</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Project delivery, deployment, and ongoing support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <FiHeart size={48} className="mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's turn your ideas into reality. I'm here to help you build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <FiMail size={20} />
                Get Started Today
              </motion.a>
              <motion.a
                href="https://calendly.com/naktiraj77/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <FiCalendar size={20} />
                Schedule Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Freelancing;
