import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowDown } from 'react-icons/fa';
import profilePic from '../assets/profilepic2-crop.jpeg';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero" aria-label="Hero Section">
      <div className="hero-container">
        {/* Left Content - Text & CTA */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Maitri Patel</span>
          </h1>
          <div className="hero-subtitle" aria-live="polite">
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
              aria-label="Dynamic roles: MERN Stack Developer, Full Stack Developer, React Developer, Node.js Developer"
            />
          </div>
          <p className="hero-description">
            Building scalable web applications using the MERN stack. Passionate about creating 
            efficient, user-friendly solutions with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" aria-label="View my projects">
              View Projects
              <FaArrowDown aria-hidden="true" />
            </a>
            <a href="/resume.pdf" download="Maitri_Patel_Resume.pdf" className="btn btn-secondary" aria-label="Download my resume">
              Download Resume
              <FaFileDownload aria-hidden="true" />
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social" aria-label="Social media links">
            <a 
              href="https://github.com/pMaitri01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="hero-image">
          <div className="profile-circle">
            <div className="profile-inner">
              <img 
                src={profilePic} 
                alt="Maitri Patel - Professional portrait" 
                className="profile-pic"
                loading="lazy"
              />
            </div>
          </div>
          {/* Animated decorative circles */}
          <div className="circle-1 pulse-animation" aria-hidden="true"></div>
          <div className="circle-2 pulse-animation-delay" aria-hidden="true"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <a href="#about" className="bounce-animation" aria-label="Scroll to about section">
          <FaArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Hero;