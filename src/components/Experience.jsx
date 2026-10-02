import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Building2 
} from 'lucide-react';
import { experienceData } from '../data';

export const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Research & Career History</span>
          </div>
          <h2 className="section-title">Research & Professional Experience</h2>
          <p className="section-subtitle">
            Postgraduate academic research appointments, technology enterprise leadership, industrial field engineering, and higher education instruction.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <Briefcase size={16} />
                </div>
                {index < experienceData.length - 1 && <div className="timeline-connector" />}
              </div>

              <div className="card timeline-content-card">
                <div className="timeline-card-header">
                  <div>
                    <span className={`education-status-tag ${exp.current ? 'status-in-progress' : 'status-completed'}`}>
                      {exp.current ? 'Current Appointment' : 'Completed Role'}
                    </span>
                    <h3 className="timeline-degree">{exp.role}</h3>
                    <h4 className="timeline-institution">
                      <Building2 size={15} style={{ display: 'inline', marginRight: '5px' }} />
                      {exp.organization}
                    </h4>
                  </div>

                  <div className="timeline-meta-box">
                    <div className="timeline-meta-item">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="timeline-meta-item">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="timeline-description">{exp.description}</p>

                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="timeline-highlights-block">
                    <span className="highlights-label">Key Responsibilities & Technical Contributions:</span>
                    <ul className="timeline-highlights-list">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>
                          <CheckCircle size={14} className="highlight-check" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
