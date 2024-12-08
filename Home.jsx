import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="intro">
        <div className="bio">
          <h1>Zeid Zawaideh</h1>
          <p>"You can take the horse to the water but you cannot make it drink."</p>
          <p className="intro-text">
            I am a graduating senior at CSUF looking for expertise in software and 
            test engineering. I have done multiple academic and work-related projects 
            and am eager work wherever my expertises are needed. 
          </p>
        </div>
        <motion.div
          className="profile-pic"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/349ProfilePic.png" alt="Profile Picture" className="profile-img" />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
