import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Operations Intern",
    company: "University of Texas at Arlington",
    period: "April 2024 - Present",
    description: [
      "Developed an interactive Content LMS form for the university site using React, Node.js, and PostgreSQL, enabling dynamic retrieval of student data and automated responses to common inquiries through REST API integration.",
      "Maintained and updated university web systems for cross-browser compatibility, responsive design, and accessibility compliance across campus-wide platforms using JavaScript, CSS, and version control via Git.",
      "Engaged with student end-users to gather feedback and iterate on UI/UX improvements, aligning features with real-world needs in a remote, async-first workflow."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "REST API", "JavaScript", "CSS", "Git"]
  },
  {
    title: "Software Engineer",
    company: "PAR Solution",
    period: "February 2023 - December 2023",
    description: [
      "Spearheaded web app performance by 15% through cross-functional collaboration across front-end and back-end teams.",
      "Implemented React-Redux for state management, Redux Saga for async API handling, and Lodash for deep property access.",
      "Developed a robust contact form with Formik and Yup, leading to a 30% reduction in user submission errors.",
      "Created advanced animations with GSAP and ScrollTrigger, improving user engagement by 25%.",
      "Designed an admin panel with Joi for data validation and schema integrity in Redis cache workflows.",
      "Collaborated using Git and version control best practices within an Agile team and conducting code reviews."
    ],
    technologies: ["React", "Redux", "Redux Saga", "Formik", "Yup", "GSAP", "ScrollTrigger", "Joi", "Redis", "Git"]
  },
  {
    title: "Software Engineer",
    company: "ActoScript",
    period: "June 2022 - November 2022",
    description: [
      "Crafted responsive layouts using React, Bootstrap, HTML5, and CSS3, enhancing mobile adaptability and accessibility.",
      "Modularized UI development by building reusable components and custom React hooks, accelerating delivery by 30%.",
      "Implemented client-side routing using useNavigate from React Router DOM for fluid user experience.",
      "Enabled real-time image manipulation using CropperJS and React Konva for canvas-based media workflows.",
      "Improved API efficiency with Axios and lazy loading, reducing frontend data processing time by 40%."
    ],
    technologies: ["React", "Bootstrap", "HTML5", "CSS3", "React Router DOM", "CropperJS", "React Konva", "Axios"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Work Experience</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <div className="timeline-period">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
