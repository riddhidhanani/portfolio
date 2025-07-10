import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contact Me</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Get In Touch</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:riddhi04dhanani@gmail.com">riddhi04dhanani@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <Linkedin size={24} />
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/riddhi-dhanani0204/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/riddhi-dhanani0204
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <Github size={24} />
                </div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a href="https://github.com/riddhidhanani" target="_blank" rel="noopener noreferrer">
                    github.com/riddhidhanani
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
