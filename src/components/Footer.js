import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          {/* Left */}
          <div className="footer-brand">
            <h2>Maitri Patel</h2>
            <p>Full Stack Developer (MERN Stack)</p>
          </div>

          {/* Social */}
          <div className="footer-social">
            <a href="https://github.com/pMaitri01"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/patel-maitri-16875a256"><FaLinkedin /></a>
            <a href="mailto:maitrip306@email.com"><FaEnvelope /></a>
          </div>

          {/* Links */}
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Maitri Patel</p>
          <p>Made with <FaHeart className="heart" /> using React</p>
        </div>

        {/* Scroll button */}
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>

      </div>
    </footer>
  );
};

export default Footer;