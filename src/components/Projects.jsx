import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Artwork',
      description: 'A digital art platform showcasing creative works with an intuitive gallery interface. Features user profiles, artwork collection, and interactive commenting system.',
      technologies: ['React', 'Figma', 'HTML', 'CSS', 'JavaScript'],
      category: 'design',
      imageUrl: 'artwork',
      liveUrl: 'https://www.artsy.net',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'AngelDisableHelpLLC',
      description: 'Accessibility-focused web application designed to help people with disabilities find resources and support. Includes a service directory, community forum, and event calendar.',
      technologies: ['React', 'Figma', 'Wordpress', 'Material UI'],
      category: 'fullstack',
      imageUrl: 'angeldisability',
      liveUrl: 'https://www.angelhelpllc.com',
      codeUrl: '#'
    },
    {
      id: 3,
      title: ' ColorDanHub',
      description: 'Interactive color palette generator with animation effects. Users can create, save, and share custom color schemes for design projects with dynamic visualization tools.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Figma'],
      category: 'frontend',
      imageUrl: 'colordancehub',
      liveUrl: 'https://colordanhub.site',
      codeUrl: '#'
    }
  ];
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Design', value: 'design' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-description">
          Here are some of my recent projects. Each project showcases different skills and technologies.
        </p>
        
        <div className="filter-buttons">
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                {/* Replace with actual project image from your UIUX.PDF */}
                <div className="placeholder-project-image">
                  
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="btn btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.codeUrl} className="btn btn-sm btn-outline" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 