import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Web Developer', 'UI/UX Designer', 'React Expert'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting, loopNum, typingSpeed]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="intro-text">Hello, my name is</p>
          <h1 className="name">Phan Hồng Trinh</h1>
          <h2 className="typed-text">I'm a <span>{text}</span></h2>
          <p className="hero-description">
            I build exceptional digital experiences for the web.
            Passionate about creating beautiful, functional, and user-centered digital interfaces.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="profile-image">
              <img 
                src="https://i.ibb.co/0xxVTsM/1ebbcca3-1983-499c-8162-9805d44286bb.webp" 
                alt="Profile Photo" 
                className="portrait-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 