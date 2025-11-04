import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./App.css";
import SkillSection from "./Components/SkillSection";
import Experience from "./Components/Experience";
import rent from './car-rent.avif'
import supplier from './supplier.jpg'
import legal from './a10.jpg'
import { HiDocumentArrowDown } from "react-icons/hi2";

const App = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="app" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0f172a" },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      />

      {/* Main content over particles */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="logo">Anushka Saxena</h1>
            <div className="nav-links">
              {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((section) => (
                <Link
                  key={section}
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  {section}
                </Link>
              ))}
            </div>
          </div>
        </nav>

       <section id="home" className="hero">
  <div className="hero-container">
    <motion.div
      className="hero-left"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="hero-title">Hi, I'm Anushka Saxena</h2>
      <p className="hero-subtitle">
        Enthusiastic Web Developer skilled in Java, ReactJS, Node.js, and problem solving.
      </p>
      <div className="hero-icons">
        <a href="https://www.linkedin.com/in/anushka-saxena-/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="icon" />
        </a>
        <a href="mailto:anushkasaxena073@gmail.com">
          <FaEnvelope size={30} className="icon" />
        </a>
        <a href="tel:8595245252">
          <FaPhone size={30} className="icon" />
        </a>
      </div>

      <a href={`${process.env.PUBLIC_URL}/Anushka_Resume.pdf`} target="_blank" className="resume-button" rel="noopener noreferrer">
        <HiDocumentArrowDown size={22} style={{ marginRight: "8px" }} />
        Resume
      </a>
    </motion.div>
  </div>
</section>

        <section id="about">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h3>About Me</h3>
            <p>
              I am a passionate Web Developer with a strong foundation in Java and problem solving. Skilled in building scalable applications across the stack, I leverage technologies like ReactJS, Node.js, and Python to develop robust, user-friendly solutions.

From crafting secure car rental platforms to designing AI-powered legal document review tools, I enjoy breaking down complex problems and turning them into clean, efficient code. My solid understanding of data structures and algorithms enables me to approach challenges logically and create optimized solutions.

Driven by curiosity and a commitment to continuous learning, I aim to use technology not just to meet business goals but to truly make everyday tasks simpler and smarter.

            </p>
          </motion.div>
        </section>
        <section className="about-journey">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="journey-container"
  >
    <div className="journey-box">
      <h4>What I Do</h4>
      <ul>
        <li>Full-stack web application development</li>
        <li>Problem solving with Data Structures & Algorithms</li>
        <li>Database design and management</li>
      </ul>
    </div>
    <div className="journey-box">
      <h4>My Journey</h4>
      <p>
        From learning Java and mastering problem-solving through DSA to developing full-stack applications, 
        my journey reflects curiosity and a drive to create.As a final year B.Tech Computer Science student, I've dedicated myself to mastering modern web technologies and building practical solutions. My journey has been marked by continuous learning, hands-on projects, and real-world experience through internships.
      </p>
    </div>
  </motion.div>
</section>


        <section id="experience">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <h3>Experience</h3>
             <div> <Experience/></div>
            {/* <ul>
              <li><b>Software Developer Trainee</b> at Etelligens Technologies (May 2025 - Present)</li>
              <li><b>Web Developer Intern</b> at Bharti Airtel (Apr 2024 - Jun 2024)</li>
            </ul> */}
          </motion.div>
        </section>

        <section id="projects" className="projects-section">
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h3 className="section-title">Projects</h3>
    <div className="projects-grid">
      <div className="project-card">
        <img src={rent} alt="Rent Hive" className="project-image" />
        <h4>Rent Hive</h4>
        <p>Car rental platform with booking, secure inventory & customer rentals.</p>
        {/* <div className="project-links">
          <a href="https://yourliveapp.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <button>Details →</button>
        </div> */}
      </div>
      <div className="project-card">
        <img src={supplier} alt="Supplier Management" className="project-image" />
        <h4>Supplier Management</h4>
        <p>Full stack system to manage suppliers and track orders.</p>
        {/* <div className="project-links">
          <a href="https://yourliveapp.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <button>Details →</button>
        </div> */}
      </div>
      <div className="project-card">
        <img src={legal} alt="Legal Document Review" className="project-image" />
        <h4>Legal Document Review</h4>
        <p>Automated NLP tool to analyze legal documents using React, Node, Python.</p>
        {/* <div className="project-links">
          <a href="https://yourliveapp.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <button>Details →</button>
        </div> */}
      </div>
    </div>
  </motion.div>
</section>


        <section id="skills">
          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <SkillSection/>
            {/* <h3>Skills</h3>
            <p>Java, JavaScript, Python, SQL, ReactJS, Node.js, Express.js, Bootstrap, DSA, UI/UX, API Integration, Android</p> */}
          </motion.div>
        </section>

        <section id="contact">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <h3>Contact Me</h3>
            <p>Email: anushkasaxena073@gmail.com | Phone: 8595245252 | <a href="https://linkedin.com/in/anushka-saxena" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </motion.div>
        </section>

        <footer>
          <p>&copy; 2025 Anushka Saxena. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
