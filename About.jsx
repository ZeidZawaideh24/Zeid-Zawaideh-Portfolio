import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="about-section">
        <h1>About Me</h1>
        <p>
          I am Zeid Zawaideh, a passionate software and test engineer. I am currently pursuing my Bachelor of Science in 
          Computer Science from California State University, Fullerton. 
        </p>
        <p>
          I have spent the last three summers working at Qualcomm interning as a Software Engineer and throughout my time here 
          I have done multiple academic and work related projects. 
        </p>
        <p>
          I have taken multiple classes from multiple community colleges around Southern California. Ranging from San Diego Miramar 
          College to Irvine Valley College in Orange County. I have done all of this while still being enrolled as a full time student
          at CSUF. With the inclusion of every summer I spent working at Qualcomm Inc.
        </p>
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science, California State University, Fullerton</p>
        
        <h2>Skills</h2>
        <p>Programming Languages: Python, C++, HTML/CSS, JavaScript, React, SQL</p>
        
      </section>
    </motion.div>
  );
};

export default About;
