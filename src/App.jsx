import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Freelancing from './components/Freelancing';

// Home Page Component
const HomePage = ({ darkMode, toggleDarkMode }) => (
  <>
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

// Freelancing Page Component
const FreelancingPage = ({ darkMode, toggleDarkMode }) => (
  <>
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <main>
      <Freelancing />
    </main>
    <Footer />
  </>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route
                  path="/"
                  element={<HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
                />
                <Route
                  path="/freelancing"
                  element={<FreelancingPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
                />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
