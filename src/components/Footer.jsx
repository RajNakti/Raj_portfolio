import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiHeart, FiArrowUp } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/RajNakti', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/raj-nakti-154b94245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/rajnakti', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com/rajnakti', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Skills', href: '#skills', type: 'scroll' },
    { name: 'Projects', href: '#projects', type: 'scroll' },
    { name: 'Freelancing', href: '/freelancing', type: 'route' },
    { name: 'Contact', href: '#contact', type: 'scroll' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (link) => {
    if (link.type === 'route') {
      navigate(link.href);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToElement(link.href);
        }, 100);
      } else {
        scrollToElement(link.href);
      }
    }
  };

  const scrollToElement = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">
              Raj Nakti
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and bringing ideas to life through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => handleNavigation(link)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>naktiraj77@gmail.com</p>
              <p>+91 9764664021</p>
              <p>Seawoods, India</p>
            </div>
            <motion.button
              onClick={() => handleNavigation({ href: '#contact', type: 'scroll' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-4"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© {currentYear} Raj Nakti. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="text-red-500" size={16} />
            </motion.div>
            <span>and React</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span>Back to Top</span>
            <FiArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
