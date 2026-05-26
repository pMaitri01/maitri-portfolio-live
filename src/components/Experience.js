import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaGraduationCap } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Toshal Infotech',
      duration: 'Jan 2026 – Present',
      type: 'Full-time',
      location: 'Surat, Gujarat, India',
      responsibilities: [
        'Worked on full-stack web applications using MongoDB, Express.js, React.js, and Node.js',
        'Developed REST APIs and handled database operations',
        'Implemented authentication systems and user dashboards',
        'Built CRUD functionality for various application modules',
        'Collaborated with team members using Git and GitHub'
      ],
tech: [
  'React.js', 'Node.js', 'Express.js', 'MongoDB',
  'REST APIs', 'JWT', 'Git', 'GitHub',
  'Postman', 'VS Code'
]    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="text-center mb-5">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            My professional journey and hands-on experience in web development
          </p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <FaBriefcase />
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <FaBriefcase />
                  <h3 className="timeline-role">{exp.role}</h3>
                </div>
                
                <div className="timeline-company">{exp.company}</div>
                
                <div className="timeline-meta">
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaBriefcase />
                    <span>{exp.type}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="responsibilities">
                  <h4>Key Responsibilities & Achievements</h4>
                  <ul>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>
                        <FaCheckCircle />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tech-used">
                  <h4>Technologies Used</h4>
                  <div className="tech-tags-small">
                    {exp.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag-small">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
   <div className="education-section">
  <h3 className="education-title">Education</h3>

  <div className="education-card">
    <div className="education-header">
      <div className="education-icon">
        <FaGraduationCap />
      </div>

      <div className="education-info">
        <h4>Master of Computer Applications (MCA)</h4>

        <div className="education-details">
          Computer Science & Applications • 2024 – 2026
        </div>

        <div className="education-college">
          Department of Computer Science, Rollwala Computer Center, Gujarat University, Ahmedabad.
        </div>
      </div>
    </div>

    {/* GRID CONTENT */}
    <div className="education-content">

      <div className="edu-block">
        <h5>Overview</h5>
        <p>
          Focused on software development, web technologies, and database management 
          with hands-on exposure to full-stack development.
        </p>
      </div>

      <div className="edu-block">
        <h5>Key Subjects</h5>
        <div className="edu-tags">
          <span>Data Structures</span>
          <span>DBMS</span>
          <span>Web Development</span>
          <span>Software Engineering</span>
          <span>Operating Systems</span>
        </div>
      </div>

      <div className="edu-block">
        <h5>Skills Gained</h5>
        <div className="edu-tags">
          <span>Problem Solving</span>
          <span>Full Stack</span>
          <span>Database Design</span>
          <span>REST APIs</span>
        </div>
      </div>

      <div className="edu-block">
        <h5>Highlights</h5>
        <p>
          Built strong foundation in MERN stack and modern web application development.
        </p>
      </div>

    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Experience;