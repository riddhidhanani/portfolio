import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <ul className="nav-links">
          <li>
            <button 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'experience' ? 'active' : ''} 
              onClick={() => scrollToSection('experience')}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'projects' ? 'active' : ''} 
              onClick={() => scrollToSection('projects')}
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'skills' ? 'active' : ''} 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'education' ? 'active' : ''} 
              onClick={() => scrollToSection('education')}
            >
              Education
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="mobile-menu-toggle">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
