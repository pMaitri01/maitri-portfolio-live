import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Doctor Appointment System',
      description: 'A comprehensive role-based system with Admin, Doctor, and Patient roles. Features include login system, appointment booking, dashboard, doctor management, and suspension system.',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'JWT', icon: <FaCode /> }
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      icon: <FaReact />
    },
    {
      title: 'College MERN Project',
      description: 'Full-stack application with real-world structure featuring authentication, CRUD operations, and responsive UI. Built as part of academic curriculum.',
      tech: [
        { name: 'MERN Stack', icon: <FaCode /> },
        { name: 'REST API', icon: <FaCode /> },
        { name: 'Authentication', icon: <FaCode /> },
        { name: 'Tailwind CSS', icon: <FaCode /> }
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      icon: <FaNodeJs />
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Admin dashboard for e-commerce platform with product management, order tracking, and analytics. Features real-time updates and data visualization.',
      tech: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Chart.js', icon: <FaCode /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Socket.io', icon: <FaCode /> }
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      icon: <FaDatabase />
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="text-center mb-5">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Here are some of my recent projects showcasing my skills in MERN stack development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-stack">
                  <div className="tech-label">Tech Stack</div>
                  <div className="tech-tags">
                    {project.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="tech-tag">
                        {tech.icon}
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn primary"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn secondary"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="more-projects">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="more-projects-btn"
          >
            View More Projects on GitHub
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;