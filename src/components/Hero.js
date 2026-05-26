import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowDown } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span>Maitri Patel</span>
          </h1>
          <div className="hero-subtitle">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Full Stack Developer',
                2000,
                'React Developer',
                2000,
                'Node.js Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="hero-description">
            Building scalable web applications using the MERN stack. Passionate about creating 
            efficient, user-friendly solutions with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <FaArrowDown />
            </a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              Download Resume
              <FaFileDownload />
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image/Illustration */}
        <div className="hero-image">
          <div className="profile-circle">
            <div className="profile-inner">
              <div className="profile-initials">MP</div>
              <div className="profile-role">MERN Developer</div>
            </div>
          </div>
          {/* Animated circles */}
          <div className="circle-1 pulse-animation"></div>
          <div className="circle-2 pulse-animation-delay"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <a href="#about" className="bounce-animation">
          <FaArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;