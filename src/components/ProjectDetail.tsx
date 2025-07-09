import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 'accessibility-analyzer',
    title: 'Accessibility Analyzer',
    shortDescription: 'Web accessibility audit tool using Lighthouse and Axe-core',
    fullDescription: 'Built a full-stack audit tool using TypeScript to scan websites for accessibility issues using Lighthouse and Axe-core, storing results in PostgreSQL, with grouped issue summaries and WCAG-based visualizations.',
    detailedDescription: `
      <p>The Accessibility Analyzer is a comprehensive web tool designed to help developers and content creators ensure their websites meet accessibility standards and guidelines.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Automated Scanning:</strong> Utilizes Lighthouse and Axe-core to perform thorough accessibility audits on any website URL</li>
        <li><strong>Detailed Reports:</strong> Generates comprehensive reports categorizing issues by severity and WCAG guidelines</li>
        <li><strong>Interactive Dashboard:</strong> Visual representation of accessibility scores with charts and graphs</li>
        <li><strong>Issue Tracking:</strong> Allows users to track remediation progress over time</li>
        <li><strong>Recommendations:</strong> Provides specific code-level suggestions to fix identified issues</li>
      </ul>
      
      <p>The application was built with a TypeScript/React frontend that communicates with a Node.js backend. PostgreSQL was used for data persistence, storing historical scan results and allowing for trend analysis over time.</p>
      
      <p>One of the main challenges was optimizing the scanning process to handle large, complex websites efficiently. I implemented a parallel processing approach that significantly reduced scan times while maintaining accuracy.</p>
    `,
    image: '/dashboard-project.jpg',
    technologies: ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Lighthouse', 'Axe-core'],
    link: 'https://accessibility-analyzer-neon.vercel.app/',
    githubLink: 'https://github.com/riddhidhanani/accessibility-analyzer',
    date: 'June 2025'
  },
  {
    id: 'mavsphere',
    title: 'MavSphere - Academic Networking Platform',
    shortDescription: 'Web application for graduate students',
    fullDescription: 'Developed a full stack academic networking platform using Next.js, React, and Node.js, featuring forums, mentorship programs, job listings, and academic events for graduate students. Implemented a relational database schema in MySQL/PostgreSQL with 15+ tables, integrating real-time messaging (WebSocket), NextAuth.js authentication, and cPanel deployment for a seamless user experience.',
    detailedDescription: `
      <p>MaySphere is a comprehensive academic networking platform specifically designed for graduate students to connect, collaborate, and advance their academic and professional careers.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Academic Forums:</strong> Specialized discussion areas organized by field of study and research topics</li>
        <li><strong>Mentorship Matching:</strong> Algorithm-based system that connects students with relevant mentors</li>
        <li><strong>Job Board:</strong> Curated listings of academic and industry positions relevant to graduate specializations</li>
        <li><strong>Event Calendar:</strong> Comprehensive listing of conferences, workshops, and networking events</li>
        <li><strong>Real-time Messaging:</strong> WebSocket-powered communication system for direct interactions</li>
      </ul>
      
      <p>The platform was built on Next.js 13 with a React frontend and Node.js backend. The database architecture includes 15+ relational tables in MySQL/PostgreSQL to manage the complex relationships between users, content, and activities.</p>
      
      <p>Authentication was implemented using NextAuth.js to provide secure, flexible user management with multiple sign-in options. The messaging system leverages WebSockets to deliver instantaneous communication between users.</p>
      
      <p>The deployment was configured on cPanel for reliable hosting and easy maintenance, with automated backup systems to ensure data integrity.</p>
    `,
    image: '/academic-platform.jpg',
    technologies: ['Next.js 13', 'React', 'Node.js', 'NextAuth.js', 'MySQL/PostgreSQL', 'WebSocket', 'CSS'],
    link: 'https://github.com/riddhidhanani/Mavsphere',
    githubLink: 'https://github.com/riddhidhanani/Mavsphere',
    date: 'Nov 2024'
  },
  {
    id: 'ecommerce-tracker',
    title: 'Pricewise',
    shortDescription: 'E-Commerce Price Tracker using Web Scraping',
    fullDescription: 'Engineered a full-stack E-Commerce Price Tracker, used Cheerio for product detail parsing and Bright Data for IP rotation to bypass anti-scraping measures, providing automation solutions for price monitoring. Designed product data storage and alerting system with Cron job integration, including email notifications based on price changes using Nodemailer, achieved 85% reduction in manual monitoring effort.',
    detailedDescription: `
      <p>The E-Commerce Price Tracker is an automated solution that monitors product prices across multiple e-commerce platforms, alerting users when prices drop or change significantly.</p>
      
      <h4>Key Features:</h4>
      <ul>
        <li><strong>Multi-site Tracking:</strong> Monitors prices across major e-commerce platforms including Amazon, Walmart, and others</li>
        <li><strong>Anti-detection Mechanisms:</strong> Utilizes Bright Data's IP rotation to avoid being blocked by anti-scraping systems</li>
        <li><strong>Detailed Product Information:</strong> Extracts and stores comprehensive product data beyond just pricing</li>
        <li><strong>Customizable Alerts:</strong> Users can set price thresholds and notification preferences</li>
        <li><strong>Historical Price Analysis:</strong> Tracks price history and provides trend visualization</li>
        <li><strong>Automated Scheduling:</strong> Uses Cron jobs to regularly check for price updates</li>
      </ul>
      
      <p>The application was built with Next.js and Tailwind CSS for the frontend, with Cheerio handling the HTML parsing for product information extraction. Bright Data's infrastructure was integrated to provide reliable proxy rotation, significantly improving the success rate of scraping operations.</p>
      
      <p>Data persistence was implemented using MongoDB for its flexibility in storing varied product information schemas. The notification system was built with Nodemailer, allowing for customized email alerts based on user-defined price drop thresholds.</p>
      
      <p>Through this implementation, users experienced an 85% reduction in the time spent manually checking product prices, with improved accuracy in catching limited-time price drops.</p>
    `,
    image: '/ecommerce-tracker.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Cheerio', 'Bright Data', 'Cron Job', 'MongoDB', 'Nodemailer'],
    link: 'https://pricewise-sigma-red.vercel.app/',
    githubLink: 'https://github.com/riddhidhanani/pricewise',
    date: 'July 2024'
  },
  {
    id: 'Minimalist Moon',
    title: 'Minimalist Moon',
    shortDescription: 'Website to showcase Design Portfolio',
    // fullDescription: 'Engineered a full-stack E-Commerce Price Tracker, used Cheerio for product detail parsing and Bright Data for IP rotation to bypass anti-scraping measures, providing automation solutions for price monitoring. Designed product data storage and alerting system with Cron job integration, including email notifications based on price changes using Nodemailer, achieved 85% reduction in manual monitoring effort.',
    detailedDescription: `
      <p>Developed a dynamic and responsive website using React 18, leveraging component-based architecture for efficient UI management and seamless user experience.</p>
      <p>Implemented sophisticated scroll-based animations using GSAP (GreenSock Animation Platform) ScrollTrigger, enhancing interactivity and visual appeal by animating elements based on user scroll behavior.</p>
      <h4>Integrated multiple modern libraries, including:</h4>
      <ul>
        <li><strong>Formik and Yup</strong> for robust form handling and validation.</li>
        <li><strong>React Router DOM </strong> for smooth client-side routing and navigation.</li>
        <li><strong>React Slick and Slick Carousel </strong> for responsive, touch-friendly sliders.</li>
        <li><strong>React CountUp </strong> for animated numerical counters.</li>
        <li><strong>AOS (Animate On Scroll) and Anime.js </strong> for additional animation effects.</li>
        <li><strong>Axios </strong> for efficient API requests and data handling.</li>
      </ul>
      
      <p>Enhanced user experience with smooth scrolling effects using react-smooth-scrolling and react-use-smooth-scroll, and optimized viewport detection with react-in-viewport and react-waypoint to trigger animations and lazy load content effectively.</p>
    `,
    image: '/minimalist-moon.png',
    technologies: ['React', 'Javascript', 'CSS', 'React Libraries'],
    link: 'https://minimalist-moon.onrender.com/',
    githubLink: 'https://github.com/riddhidhanani/minimalist-moon',
    date: 'June 2023'
  },
  {
    id: 'price prediction',
    title: 'Home Price Prediction',
    shortDescription: 'Machine Learning Project',
    fullDescription: 'Built website for home price prediction for a city of Banglore.',
    detailedDescription: ` 
      <h4>Key Features:</h4>
      <ul>
        <li>Built a user-friendly website that predicts home prices in Bangalore based on features like location, size, and number of bedrooms.</li>
        <li>Handled the full machine learning pipeline: cleaned and explored real-world data, engineered features, trained models, and evaluated results.</li>
        <li>Designed an easy-to-use interface, so users can quickly enter details and get instant price predictions for homes in Bangalore.</li>
      </ul>
    `,
    image: '/pricePrediction.png',
    technologies: ['Python', 'Matplotlib', 'Pandas', 'Flask', 'NumPy'],
    link: 'https://github.com/riddhidhanani/BangloreHomePrices',
    githubLink: 'https://github.com/riddhidhanani/BangloreHomePrices',
    date: 'March 2025'
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching project data
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === id);
      setProject(foundProject);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="project-detail-loading">
        <div className="spinner"></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        <span>Back to Portfolio</span>
      </Link>
      
      <motion.div 
        className="project-detail-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{project.title}</h1>
        <p className="project-date">{project.date}</p>
      </motion.div>
      
      <div className="project-detail-content">
        <motion.div 
          className="project-detail-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)" 
          }}
        >
          {project.image ? (
            <div 
              className="project-detail-img" 
              style={{ 
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '400px',
                borderRadius: '10px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            />
          ) : (
            <div className="project-img-placeholder detail">
              <span>{project.title.charAt(0)}</span>
            </div>
          )}
        </motion.div>
        
        <motion.div 
          className="project-detail-info"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="project-links-row">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn primary">
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn secondary">
                <Github size={18} />
                <span>View Code</span>
              </a>
            )}
          </div>
          
          <div className="project-description">
            <h3>Overview</h3>
            <p>{project.fullDescription}</p>
            
            <div 
              className="project-detailed-description"
              dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
            />
          </div>
          
          <div className="project-tech-stack">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.technologies.map((tech: string, i: number) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
