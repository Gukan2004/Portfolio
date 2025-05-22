import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gukanamashivayan S V. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:gukanshiva39@gmail.com">Email</a> |
        <a href="https://github.com/Gukan2004" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://www.linkedin.com/in/gukanamashivayansv" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
