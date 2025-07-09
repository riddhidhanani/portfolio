import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a full-stack developer with hands-on experience delivering end-to-end solutions across 
              academic, e-commerce, and cloud-based platforms. Proficient in creating scalable, accessible, 
              and responsive web applications using React, Next.js, Node.js, and PostgreSQL.
            </p>
            <p>
              I thrive in environments that value ownership, experimentation, and continuous learning 
              through feedback. Currently exploring AI-integrated projects with a focus on performance 
              optimization, user-centric design, and robust backend architecture using modern databases.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">
                  <a href="mailto:riddhi04dhanani@gmail.com">riddhi04dhanani@gmail.com</a>
                </span>
              </div>
              <div className="info-item">
                <span className="info-title">GitHub:</span>
                <span className="info-value">
                  <a href="https://github.com/riddhidhanani" target="_blank" rel="noopener noreferrer">
                    github.com/riddhidhanani
                  </a>
                </span>
              </div>
              <div className="info-item">
                <span className="info-title">LinkedIn:</span>
                <span className="info-value">
                  <a href="https://www.linkedin.com/in/riddhi-dhanani0204/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/riddhi-dhanani0204
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-img"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="tech-stack-visual">
              <div className="tech-bubble react">React</div>
              <div className="tech-bubble node">Node.js</div>
              <div className="tech-bubble next">Next.js</div>
              <div className="tech-bubble postgres">PostgreSQL</div>
              <div className="tech-bubble typescript">TypeScript</div>
              <div className="tech-bubble tailwind">Tailwind</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
