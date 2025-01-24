import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-5xl md:text-6xl font-bold text-glow">
          About Me
        </span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[600px] overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-bold mb-6 text-white">Building with passion</h3>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
              I am driven by a deep passion for front-end development, continuously exploring new ways to create engaging and intuitive user experiences. With a solid foundation in JavaScript, React, and Redux Toolkit, I focus on building responsive, dynamic, and visually appealing web applications. My approach combines creativity with technical expertise, ensuring high-quality, efficient code that solves complex challenges.
            </p>
            <p>
              I am committed to staying up-to-date with the latest technologies and best practices, always looking for opportunities to learn and grow. Whether it's enhancing user interfaces or implementing new features, I take pride in my work and enjoy collaborating with others to bring innovative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;