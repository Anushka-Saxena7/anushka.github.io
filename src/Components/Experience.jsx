import React from "react";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-card">
        <div className="experience-header">
          <FaBuilding className="experience-icon" />
          <div>
            <h3>Frontend Developer Intern</h3>
            <div className="experience-meta">
              <span>Bharti Airtel</span> • 
              <FaMapMarkerAlt /> <span>India</span> • 
              <FaCalendarAlt /> <span>2 months</span>
            </div>
          </div>
        </div>
        <p className="experience-description">
          Worked on frontend development projects, contributing to user interface improvements
          and implementing responsive design solutions. Gained valuable experience in a
          professional development environment and collaborated with senior developers.
        </p>
        <h4>Key Responsibilities:</h4>
        <ul className="experience-list">
          <li>Developed and maintained frontend components</li>
          <li>Collaborated with the development team on UI/UX improvements</li>
          <li>Implemented responsive design principles</li>
          <li>Participated in code reviews and team meetings</li>
        </ul>
        <h4>Technologies Used:</h4>
        <div className="tech-badges">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>Git</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
