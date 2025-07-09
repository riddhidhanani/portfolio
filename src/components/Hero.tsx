import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="profile-img-placeholder"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  "0 10px 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.3)",
                  "0 15px 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.4)",
                  "0 10px 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.3)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
            <img
              src="/profile.jpg"
              alt="Riddhi Dhanani"
              className="profile-img"
              style={{ width: '265px', height: '265px', borderRadius: '50%', objectFit: 'cover', zIndex: 1 }}
            />
            <div className="profile-glow"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1>Riddhi Dhanani</h1>
            <h2>Software Developer</h2>
            <p>Building innovative web solutions with modern technologies</p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="btn primary" onClick={scrollToAbout}>View My Work</button>
              <a 
                href="https://www.linkedin.com/in/riddhi-dhanani0204/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn secondary"
              >
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onClick={scrollToAbout}
        >
          <span>Scroll Down</span>
          <ArrowDown className="scroll-icon" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
