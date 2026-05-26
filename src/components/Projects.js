import React from 'react';

import { 
  FaGithub,
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaServer 
} from 'react-icons/fa';

import { 
  SiMongodb, 
  SiExpress, 
  SiJsonwebtokens, 
  SiPostman, 
  SiVercel 
} from 'react-icons/si';

import '../styles/Projects.css';

const Projects = () => {
  const project = {
    title: 'MediTrack - Healthcare Management System',
    description:
      'A full-stack role-based healthcare system with Admin, Doctor, and Patient modules. It includes authentication, appointment booking, doctor management, dashboards, and account suspension features. Designed to provide a seamless and secure healthcare experience.',
    features: [
      'Role-based authentication (Admin, Doctor, Patient)',
      'Appointment booking & management system',
      'Doctor approval & suspension system',
      'Dashboard with real-time data handling',
      'Secure account management and data protection',
    ],
    tech: [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'JWT', icon: <SiJsonwebtokens /> },
  { name: 'REST API', icon: <FaServer /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Postman', icon: <SiPostman /> }
],
    // github: 'https://github.com/pMaitri01/Medi-Track-Frontend',
    live: 'https://medi-track-frontend-rosy.vercel.app/',
    admin: 'https://tinyurl.com/3pjvn4dr'
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <div className="text-center mb-5">
          <h2 className="section-title">Project</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A featured project showcasing my MERN stack development skills
          </p>
        </div>

        <div className="projects-grid single-project">
          <div className="project-card featured">

            {/* Header */}
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="project-description">{project.description}</p>

            {/* Features */}
            <div className="project-features">
              <h4>Key Features</h4>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                {project.tech.map((tech, index) => (
                  <div key={index} className="tech-tag">
                    {tech.icon}
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="project-actions">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                <FaExternalLinkAlt />
                Live App
              </a>

              <a href={project.admin} target="_blank" rel="noopener noreferrer" className="action-btn admin">
                Admin Panel
              </a>
            </div>

          </div>
        </div>

        {/* GitHub CTA */}
        <div className="more-projects">
          <a
            href="https://github.com/pMaitri01"
            target="_blank"
            rel="noopener noreferrer"
            className="more-projects-btn"
          >
            View My GitHub Profile
            <FaGithub />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;