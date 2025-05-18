import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-container">
              <div className="profile-image">
                <img 
                  src="https://i.ibb.co/WpY3rF4y/image.png" 
                  alt="Profile Photo" 
                  className="portrait-image"
                />
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Get to know me!</h3>
            <p>
              I'm a passionate <strong>UI/UX & Frontend Web Developer</strong> with a strong focus on creating intuitive and responsive user interfaces. My journey in web development began several years ago, and since then, I've been continually expanding my knowledge and skills.
            </p>
            <p>
              I specialize in building modern web applications using <strong>React and Figma</strong> and have experience working with various frontend technologies. My aim is to create web experiences that are not only visually appealing but also highly functional and user-friendly.
            </p>
            <p>
              I believe in continuous learning and am always exploring new technologies and methodologies to enhance my skill set.
            </p>
            <div className="about-info">
              <div className="info-item">
                <h4>Location: </h4>
                <p> Ho Chi Minh City, Vietnam</p>
              </div>
              <div className="info-item">
                <h4>Email: </h4>
                <p>phanvanbin232@gmail.com</p>
              </div>
              <div className="info-item">
                <h4>Degree: </h4>
                <p>Bachelor of Information Technology</p>
              </div>
              <div className="info-item">
                <h4>Languages: </h4>
                <p>Vietnamese, English</p>
              </div>
            </div>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 