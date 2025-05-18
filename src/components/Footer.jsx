import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">Portfolio</a>
          </div>
          
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="icon-github"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="icon-linkedin"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="icon-twitter"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Phan Hong Trinh. All Rights Reserved.</p>
          <p className="credits">Designed with ❤️ by Phan Hong Trinhh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 