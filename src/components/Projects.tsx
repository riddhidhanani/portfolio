import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

const projects = [
  {
    id: 'accessibility-analyzer',
    title: 'Accessibility Analyzer',
    shortDescription: 'Web accessibility audit tool using Lighthouse and Axe-core',
    fullDescription: 'Built a full-stack audit tool using TypeScript to scan websites for accessibility issues using Lighthouse and Axe-core, storing results in PostgreSQL, with grouped issue summaries and WCAG-based visualizations.',
    image: '/dashboard-project.jpg',
    technologies: ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Lighthouse', 'Axe-core'],
    link: 'https://github.com/riddhidhanani',
    date: 'June 2025'
  },
  {
    id: 'mavsphere',
    title: 'MavSphere - Academic Networking Platform',
    shortDescription: 'Web application for graduate students',
    fullDescription: 'Developed a full stack academic networking platform using Next.js, React, and Node.js, featuring forums, mentorship programs, job listings, and academic events for graduate students. Implemented a relational database schema in MySQL/PostgreSQL with 15+ tables, integrating real-time messaging (WebSocket), NextAuth.js authentication, and cPanel deployment for a seamless user experience.',
    image: '/academic-platform.jpg',
    technologies: ['Next.js 13', 'React', 'Node.js', 'NextAuth.js', 'MySQL/PostgreSQL', 'WebSocket', 'CSS'],
    link: 'https://github.com/riddhidhanani',
    date: 'Nov 2024'
  },
  {
    id: 'ecommerce-tracker',
    title: 'E-Commerce Price Tracker',
    shortDescription: 'Web development with web scraping',
    fullDescription: 'Engineered a full-stack E-Commerce Price Tracker, used Cheerio for product detail parsing and Bright Data for IP rotation to bypass anti-scraping measures, providing automation solutions for price monitoring. Designed product data storage and alerting system with Cron job integration, including email notifications based on price changes using Nodemailer, achieved 85% reduction in manual monitoring effort.',
    image: '/ecommerce-tracker.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Cheerio', 'Bright Data', 'Cron Job', 'MongoDB', 'Nodemailer'],
    link: 'https://github.com/riddhidhanani',
    date: 'July 2024'
  },
  {
    id: 'Minimalist Moon',
    title: 'Minimalist Moon',
    shortDescription: 'Website to showcase Design Portfolio',
    fullDescription: 'Engineered a full-stack E-Commerce Price Tracker, used Cheerio for product detail parsing and Bright Data for IP rotation to bypass anti-scraping measures, providing automation solutions for price monitoring. Designed product data storage and alerting system with Cron job integration, including email notifications based on price changes using Nodemailer, achieved 85% reduction in manual monitoring effort.',
    image: '/minimalist-moon.png',
    technologies: ['React', 'Javascript', 'CSS', 'React Libraries'],
    link: 'https://github.com/riddhidhanani',
    date: 'July 2024'
  },
  {
    id: 'price prediction',
    title: 'Home Price Prediction',
    shortDescription: 'Machine Learning Project',
    fullDescription: 'Built website for home price prediction for a city of Banglore.',
    image: '/pricePrediction.png',
    technologies: ['Python', 'Matplotlib', 'Pandas', 'Flask', 'NumPy'],
    link: 'https://github.com/riddhidhanani/BangloreHomePrices',
    date: 'July 2024'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Projects</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image">
                <motion.div 
                  className="project-img-container"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Check if the image exists, otherwise show placeholder */}
                  {project.image ? (
                    <div 
                      className="project-img" 
                      style={{ 
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                        borderRadius: '8px 8px 0 0'
                      }}
                    />
                  ) : (
                    <div className="project-img-placeholder">
                      <span>{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <Link to={`/project/${project.id}`} className="btn btn-sm">
                      <span>View Project</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="project-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="tech-tag"
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 5px 15px rgba(0,0,0,0.3)" 
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && 
                    <motion.span 
                      className="tech-tag"
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 5px 15px rgba(0,0,0,0.3)" 
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      +{project.technologies.length - 4} more
                    </motion.span>
                  }
                </div>
                <div className="project-links">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={`/project/${project.id}`} className="btn btn-sm">
                      View Details
                    </Link>
                  </motion.div>
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      backgroundColor: "var(--accent-color)",
                      color: "white"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
