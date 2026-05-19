import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '#home', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Education', href: '#education', type: 'scroll' },
    { name: 'Experience', href: '#experience', type: 'scroll' },
    { name: 'Skills', href: '#skills', type: 'scroll' },
    { name: 'Projects', href: '#projects', type: 'scroll' },
    { name: 'Freelancing', href: '/freelancing', type: 'route' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item) => {
    // Close mobile menu first
    setIsOpen(false);

    if (item.type === 'route') {
      // Navigate to different page
      navigate(item.href);
    } else {
      // Scroll to section on current page
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first then scroll
        navigate('/');
        setTimeout(() => {
          scrollToElement(item.href);
        }, 100);
      } else {
        // Already on home page, just scroll
        scrollToElement(item.href);
      }
    }
  };

  const scrollToElement = (href) => {
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer z-10"
            onClick={() => navigate('/')}
          >
            Raj Nakti
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                  />
                )}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-4 border border-gray-200/20 dark:border-gray-700/20 shadow-lg"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ x: 10 }}
                onClick={() => handleNavigation(item)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
