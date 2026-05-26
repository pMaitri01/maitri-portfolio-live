import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          Maitri<span>.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="nav-social">
          <a href="https://github.com/pMaitri01" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/patel-maitri-16875a256" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:maitri@example.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="mobile-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/patel-maitri-16875a256" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:maitri@example.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;