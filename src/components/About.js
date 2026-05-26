import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          {/* Left Column - Introduction */}
          <div className="about-text">
            <h3>Full Stack Developer (MERN Stack)</h3>
            <p>
              I'm a passionate MERN Stack Developer with expertise in building modern web applications. 
              With a Master's in Computer Applications and hands-on experience in full-stack development, 
              I specialize in creating scalable, efficient, and user-friendly solutions.
            </p>
            <p>
              My journey in web development started with a fascination for how technology can solve 
              real-world problems. I enjoy the entire development process, from designing intuitive 
              user interfaces to building robust backend systems.
            </p>

            {/* Personal Info */}
            <div className="about-info">
              <div className="info-item">
                <FaGraduationCap className="info-icon" />
                <div>
                  <span className="font-medium">Education:</span>
                  <span className="text-light/70 ml-2">Master of Computer Applications (MCA)</span>
                </div>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <span className="font-medium">Location:</span>
                  <span className="text-light/70 ml-2">Gujarat, India</span>
                </div>
              </div>
              <div className="info-item">
                <FaCode className="info-icon" />
                <div>
                  <span className="font-medium">Focus:</span>
                  <span className="text-light/70 ml-2">MERN Stack Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Preview */}
          <div className="about-skills">
            <h4>What I Do</h4>
            <div className="space-y-6">
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Frontend Development</span>
                  <span className="skill-percent">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Backend Development</span>
                  <span className="skill-percent">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Database Design</span>
                  <span className="skill-percent">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">API Development</span>
                  <span className="skill-percent">88%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;