import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navItems = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <nav className="fixed w-full bg-dark/90 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Portfolio
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="nav-link capitalize"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0
            }}
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'mt-4' : 'mt-0'
            }`}
          >
            <div className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="nav-link capitalize text-lg"
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="bg-primary">
          <About />
        </section>

        <section id="education" className="bg-dark">
          <Education />
        </section>

        <section id="skills" className="bg-primary">
          <Skills />
        </section>

        <section id="experience" className="bg-dark">
          <Experience />
        </section>

        <section id="projects" className="bg-primary">
          <Projects />
        </section>

        <section id="contact" className="bg-dark">
          <Contact />
        </section>
      </main>

      <footer className="bg-dark py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-2xl hover:text-accent transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="text-2xl hover:text-accent transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="text-2xl hover:text-accent transition-colors">
              <FaTwitter />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>

      <a 
        href="/your-cv.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cv-button"
      >
        <FaFileAlt className="inline-block mr-2" />
        View CV
      </a>
    </div>
  );
}

export default App;