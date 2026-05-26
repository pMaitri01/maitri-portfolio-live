import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaCode } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiMysql, SiPostman } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact />,
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 88 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
      ]
    },
    {
      title: 'Backend',
      icon: <FaNodeJs />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Express.js', icon: <SiExpress />, level: 80 },
        { name: 'REST APIs', icon: <FaCode />, level: 88 },
      ]
    },
    {
      title: 'Database & Tools',
      icon: <FaCode />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
        { name: 'MySQL', icon: <SiMysql />, level: 75 },
        { name: 'Postman', icon: <SiPostman />, level: 85 },
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'GitHub', icon: <FaGithub />, level: 90 },
        { name: 'VS Code', icon: <FaCode />, level: 95 },
      ]
    }
  ];

  // ✅ NEW: Soft Skills (no progress bars)
  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability'
  ];

  const concepts = [
    'Authentication',
    'CRUD Operations',
    'Responsive Design',
    'Component Architecture',
    'State Management',
    'Database Design',
    'API Integration',
    'Version Control'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Here are the technologies and tools I work with to build modern web applications
          </p>
        </div>

        {/* Technical Skills */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">
                {category.icon}
                {category.title}
              </h3>

              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </div>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ NEW Soft Skills Section */}
        <div className="softskills-section">
          <h3 className="softskills-title">Soft Skills</h3>
          <div className="softskills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="softskill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Concepts */}
        <div className="concepts-section">
          <h3 className="concepts-title">Core Concepts</h3>
          <div className="concepts-grid">
            {concepts.map((concept, index) => (
              <div key={index} className="concept-item">
                {concept}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;