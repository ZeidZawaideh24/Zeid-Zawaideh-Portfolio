import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Machine Learning Traffic Classification',
      description: 'High-level goal is running both OTT and Gaming Automations while using the Parser to investigate the netwrok traffic 
        and accuracy of the KPI Latency performance for the application(s) in use.',
    },
    {
      title: 'Satellite Over Snapdragon',
      description: 'Using software development skills, investigated developing a mechanism incorporating end-to-end testing by looking into 
      any delays and issues between the middleware and application layer. ',
      link: 'https://www.forbes.com/sites/moorinsights/2023/01/11/snapdragon-satellite-and-the-state-of-satellite-mobile-communications/' 
    },
    {
      title: 'Timeline Profiling API Library',
      description: ' Refactored a timeline profiling API into a library, integrating it to extend log packet(s), enhancing tracking capabilities 
      of sleep and wake-up activities for 5G LTE.',
    },
    {
      title: 'RaspberryPi Room Temprature Check',
      description: 'In CPSC 440, I investigated a mechanism using RaspberryPi to detect the temprature of the room in both Farenheit/Celsius allowing 
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
