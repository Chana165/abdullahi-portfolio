import React from 'react';
import { 
  Code2, 
  Cpu, 
  Brain, 
  Database, 
  Wrench, 
  Globe, 
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data';

const categoryIcons = {
  "AI & Machine Learning": Brain,
  "Embedded AI & Edge Intelligence": Cpu,
  "Programming Languages": Terminal,
  "Data Science & Scientific Computing": Database,
  "Web & Software Engineering": Globe,
  "Tools, Systems & Hardware": Wrench
};

export const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title">Technical Skills & Tooling</h2>
          <p className="section-subtitle">
            Verified programming languages, AI/ML frameworks, embedded technologies, and software engineering tools from academic projects and field deployments.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillsData.map((cat, idx) => {
            const IconComponent = categoryIcons[cat.category] || Code2;
            return (
              <div key={idx} className="card skill-category-card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon-box">
                    <IconComponent size={22} className="cat-icon" />
                  </div>
                  <div>
                    <h3 className="skill-cat-title">{cat.category}</h3>
                    <p className="skill-cat-desc">{cat.description}</p>
                  </div>
                </div>

                <div className="skills-items-grid">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-badge-item">
                      <div className="skill-info-row">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-level-tag level-${skill.level.toLowerCase()}`}>
                          {skill.level}
                        </span>
                      </div>
                      <span className="skill-subtag">{skill.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
