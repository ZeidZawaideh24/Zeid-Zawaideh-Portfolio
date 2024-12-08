import React from 'react';

const Link = () => {
  return (
    <footer className="link">
      <p>&copy; {new Date().getFullYear()} Zeid Zawaideh. All rights reserved. CWID: 887079481</p>
      <div className="link-links">
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

export default Link;
