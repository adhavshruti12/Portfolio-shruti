import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and Node.js",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "E-commerce platform with payment integration",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Firebase", "Stripe"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "Real-time chat application",
      image: "https://via.placeholder.com/400x300",
      tags: ["React", "Socket.io", "Express"],
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-5xl md:text-6xl font-bold text-glow">
          My Projects
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-dark rounded-full text-sm text-accent/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              View Project <span className="ml-2">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;