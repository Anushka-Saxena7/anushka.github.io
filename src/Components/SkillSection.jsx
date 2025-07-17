import React from "react";
import { motion } from "framer-motion";
import "./SkillSection.css";

const skills = [
  "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "MySQL",
  "JavaScript", "Java", "Python", "SQL", "Bootstrap",
  "DSA", "UI/UX", "API Integration", "Android"
];

const SkillSection = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h3>Skills & Technologies</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillSection;
