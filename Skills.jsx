import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="skills-section">
        <h1>Skills</h1>

        <h2>Technical Skills</h2>
        <p>
          <strong>Programming Languages:</strong> Python, Java, C++, JavaScript (React, Node.js), HTML, CSS
        </p>
        <p>
          <strong>Miscellaneous:</strong> Amazon Web Services (AWS), Machine Learning
        </p>
        <p>
          <strong>Front End Development:</strong> Javascript, HTML, CSS
        </p>
        <p>
          <strong>Frameworks & Tools:</strong> Git, Bootstrap, Swift
        </p>
        <p>
          <strong>Version Control:</strong> Git, GitHub
        </p>
        <p>
          <strong>Data Structures & Algorithms</strong>
        </p>

        <h2>Soft Skills</h2>
        <p>Leadership & Team Player</p>
        <p>Critical Thinking & Problem-Solving</p>
        <p>Effective Communication borh Written & Verbal</p>
        <p>Bias for Action</p>
        <p>Result Driven</p>

        <h2>Degree(s)</h2>
        <p>Bachelor of Science in Computer Science</p>
      </section>
    </motion.div>
  );
};

export default Skills;
