import { motion } from 'framer-motion';
import { Award, Calendar, GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    university: "University of Texas at Arlington",
    location: "United States",
    period: "January 2024 - Present",
    gpa: "3.88 / 4.0",

  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    university: "Gujarat Technological University, India",
    location: "India",
    period: "June 2019 - June 2023",
    gpa: "8.91 / 10.0",

  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Education</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div 
              className="education-item" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="education-icon">
                <GraduationCap size={24} />
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <div className="education-info">
                  <span className="university">{edu.university}</span>
                  <span className="location">{edu.location}</span>
                </div>
                <div className="education-period">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
                <div className="education-gpa">
                  <Award size={16} />
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
