import { motion } from 'framer-motion';

const skills = {
  languages: ["Python", "Java", "C", "JavaScript (ES6)", "TypeScript", "PHP", "HTML5", "CSS"],
  frontend: ["React.js", "Angular", "Next.js", "Redux", "jQuery", "Tailwind CSS", "Chakra UI", "Bootstrap", "MUI"],
  backend: ["Node.js", "Express.js", "Django", "Flask", "REST API", "GraphQL"],
  databases: ["PostgreSQL", "MongoDB", "Azure", "Oracle", "Google Cloud", "SQL", "NoSQL"],
  devOps: ["Git", "CI/CD", "Redis", "AWS", "Linux", "Visual Studio"],
  concepts: ["Data Structures & Algorithms", "Operating Systems", "SDLC", "Problem-Solving", "OOP"]
};

const SkillBar = ({ name, level }: { name: string, level: number }) => {
  return (
    <motion.div 
      className="skill-bar"
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="skill-name">{name}</div>
      <div className="skill-level">
        <motion.div 
          className="skill-percent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: "spring",
            stiffness: 50,
            damping: 10
          }}
        >
          <span className="skill-percent-label">{level}%</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, items }: { title: string, items: string[] }) => {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skill-items">
        {items.map((item, index) => (
          <motion.span 
            key={index} 
            className="skill-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Technical Skills</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="skills-grid">
          <motion.div 
            className="skills-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SkillBar name="Frontend Development" level={90} />
            <SkillBar name="Backend Development" level={85} />
            <SkillBar name="Database Management" level={80} />
            <SkillBar name="UI/UX Design" level={75} />
            <SkillBar name="DevOps & Deployment" level={70} />
          </motion.div>
          
          <motion.div 
            className="skills-categories"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SkillCategory title="Languages & Scripting" items={skills.languages} />
            <SkillCategory title="Frontend" items={skills.frontend} />
            <SkillCategory title="Backend" items={skills.backend} />
            <SkillCategory title="Databases" items={skills.databases} />
            <SkillCategory title="DevOps & Tools" items={skills.devOps} />
            <SkillCategory title="Core CS Concepts" items={skills.concepts} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
