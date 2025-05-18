import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'UI/UX & Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Responsive Design', 'Styled Components', 'Figma', 'Adobe','Photoshop' ]
    },
    {
      category: 'Backend',
      items: ['SAP ABAP', 'Java', 'RESTful APIs']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Figma', 'Adobe XD', 'Performance Optimization', 'SEO Basics']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <p className="skills-description">
            I've worked with a range of technologies in the web development world, 
            from front-end to back-end. Here are my main areas of expertise:
          </p>
          <div className="skills-grid">
            {skills.map((skillCategory, index) => (
              <div className="skill-category" key={index}>
                <h3>{skillCategory.category}</h3>
                <ul>
                  {skillCategory.items.map((skill, i) => (
                    <li key={i}>
                      <div className="skill-item">
                        <span className="skill-name">{skill}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 