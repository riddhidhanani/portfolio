import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => { 
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Riddhi Dhanani</h3>
            <p>Software Developer</p>
          </div>
          
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Projects</a></li>
              <li><a href="#projects">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <a href="mailto:riddhi04dhanani@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/riddhi-dhanani/QM/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/riddhidhanani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
