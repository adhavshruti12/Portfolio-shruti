import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      company: "Sibic Business Incubator",
      location: "Kolhapur, India",
      role: "React Developer",
      period: "Mar 2023 - Present",
      description: "Designed and developed dynamic user interfaces for seamless user experiences. Collaborated with UI/UX designers and back-end developers to create interactive and responsive components. Implemented complex features and optimized performance to enhance usability and functionality. Conducted thorough testing and debugging to ensure smooth application functionality and user satisfaction",
      technologies: ["Javascript", "React", "React Router", "CSS", "Formik & Yup", "Material UI", "Recharts", "AXIOS", "Full Calender", "Git", "Github"]
    },
    {
      company: "Tech Solutions Inc.",
      location: "Remote",
      role: "Frontend Developer Intern",
      period: "Sep 2022 - Feb 2023",
      description: "Worked on developing responsive web applications using React and modern JavaScript. Participated in code reviews and implemented feedback from senior developers. Assisted in the development of reusable components and maintained documentation.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Git", "Jira"]
    },
    {
      company: "WebDev Studio",
      location: "Pune, India",
      role: "Web Development Intern",
      period: "Jun 2022 - Aug 2022",
      description: "Gained hands-on experience in web development technologies. Assisted in building and maintaining client websites. Learned best practices in web development and version control.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Git"]
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