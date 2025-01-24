import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [text, setText] = useState('');
  const fullText = "Your Name";
  const typingSpeed = 150;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="gradient-text">{text}</span>
          <span className="animate-blink">|</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Software Developer | Problem Solver | Tech Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] hover:opacity-90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
