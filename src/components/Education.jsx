import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const education = [
    {
      school: "Nansaheb Mahadik College of Engineering",
      degree: "Bachelor of Engineering in Computer Science",
      period: "2021 - 2025",
      location: "Sangli, India",
      description: "Focused on core computer science concepts, software engineering principles, and modern web technologies. Participated in various technical competitions and workshops.",
      achievements: [
        "First Class with Distinction",
        "Core team member of Google Developer Students Club",
       
      ]
    },
    {
      school: "Maharashtra State Board",
      degree: "Higher Secondary Education (HSC)",
      period: "2019 - 2020",
      location: "Mumbai, India",
      description: "Completed HSC with focus on Physics, Chemistry, Biology and Mathematics.",
      achievements: [
        "Scored 86.67% in final examinations",
        "Active participant in Science exhibitions"
      ]
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
          Education
        </span>
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                <h4 className="text-xl text-accent mt-1">{edu.degree}</h4>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-400">{edu.location}</p>
                <p className="text-accent">{edu.period}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{edu.description}</p>
            <div className="space-y-2">
              <h5 className="text-lg font-semibold text-white">Key Achievements:</h5>
              <ul className="list-disc list-inside text-gray-300">
                {edu.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="ml-4">{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;
