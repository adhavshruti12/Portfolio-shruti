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
          <h3 className="text-4xl font-bold mb-6 text-white">Innovating with passion</h3>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
             I am a dedicated Java developer with a strong foundation in building robust backend systems using Spring Boot, Hibernate, and REST APIs. My expertise lies in designing scalable, efficient, and maintainable applications that adhere to the MVC architecture while ensuring seamless integration with DBMS solutions.
            </p>
             <p>With a passion for clean and efficient coding practices, I take pride in solving complex problems and delivering high-quality software solutions. Beyond backend development, I am expanding my skill set to include the MERN stack, exploring how to create dynamic and responsive web applications with React, Node.js, Express, and MongoDB.</p>
              <p>I thrive in collaborative environments, enjoy tackling challenging projects, and stay committed to continuous learning to keep up with emerging technologies and best practices. Whether it’s developing robust backend systems or crafting engaging full-stack solutions, I am driven by the opportunity to innovate and make an impact through technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
