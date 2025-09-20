import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: '',
      description: '',
    },
    {
      title: '',
      description: '',
    },
    {
      title: '',
      description: '',
    },
    {
      title: 'RaspberryPi Room Temprature Check',
      description: 'In CPSC 440, I investigated a mechanism using RaspberryPi to detect the temprature of the room in both Farenheit & Celsius allowing 
      to check with a generated http link to place into your browser.',
    }
  ];

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="project-link"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
