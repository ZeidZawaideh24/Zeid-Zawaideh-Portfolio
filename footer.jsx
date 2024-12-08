import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Zeid Zawaideh. All rights reserved. CWID: 88</p>
      <div className="footer-links">
        <a href="https://github.com/ZeidZawaideh24" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="/Zeid-Zawaideh.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
