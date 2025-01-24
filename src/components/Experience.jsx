import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      company: "Sibic Business Incubator",
      location: "Kolhapur, India",
      role: "Java Spring Boot Intern",
      period: "July 2024 - Present",
      description: "Developed robust backend systems using Spring Boot, Hibernate, and Data JPA with seamless database management in MySQL. Designed and tested RESTful APIs using Postman to enable efficient communication between components. Collaborated with teams to integrate dynamic user interfaces and deliver high-performing features. Ensured smooth functionality through thorough testing and debugging for optimal user satisfaction.",
      technologies: ["Spring Boot", "Hibernate", "Data JPA", "REST API", "Postman tool", "DBMS", "MySQl"]
    },
    {
      company: "GrapplTech",
      location: "Remote",
      role: "Software Developer Intern",
      period: "July 2024 - August 2024",
      description: "Built responsive and interactive user interfaces using HTML5, CSS3, JavaScript, and Bootstrap for seamless user experiences. Utilized GitHub for version control and collaboration, ensuring efficient project management and code integrity.",
      technologies: ["HTML5", "CSS3","JavaScript","Bootstrap", "GitHub"]
    },
    {
      company: "Triplet's Services",
      location: "Sangli, India",
      role: "Student Intern",
      period: "Jun 2023 - Aug 2023",
      description: "Designed and managed efficient database systems using SQL and DBMS for seamless data storage and retrieval. Optimized queries to improve performance and ensure reliable data handling across applications.",
      technologies: ["SQL", "DBMS"]
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
          Where I've Worked
        </span>
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card mb-8 backdrop-blur-sm bg-[#111]/80"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                <h4 className="text-xl text-accent mt-1">{exp.role}</h4>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-400">{exp.location}</p>
                <p className="text-accent">{exp.period}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-[#222] rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
