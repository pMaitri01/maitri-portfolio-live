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

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Technologies and tools I use to build scalable web applications
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

      </div>
    </section>
  );
};

export default Skills;