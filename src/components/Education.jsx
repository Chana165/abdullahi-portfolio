import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle, BookOpen } from 'lucide-react';
import { educationData } from '../data';

export const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="section-title">Education & Academic Background</h2>
          <p className="section-subtitle">
            Formal scientific education in Computer Science and postgraduate research in Embedded Artificial Intelligence.
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <GraduationCap size={16} />
                </div>
                {index < educationData.length - 1 && <div className="timeline-connector" />}
              </div>

              <div className="card timeline-content-card">
                <div className="timeline-card-header">
                  <div>
                    <span className={`education-status-tag ${edu.current ? 'status-in-progress' : 'status-completed'}`}>
                      {edu.status}
                    </span>
                    <h3 className="timeline-degree">{edu.degree}</h3>
                    <h4 className="timeline-institution">
                      {edu.institution} {edu.faculty ? `• ${edu.faculty}` : ''}
                    </h4>
                  </div>

                  <div className="timeline-meta-box">
                    <div className="timeline-meta-item">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="timeline-meta-item">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {edu.grade && (
                  <div className="timeline-grade-badge">
                    <Award size={15} className="grade-icon" />
                    <span>Graduated: <strong>{edu.grade}</strong></span>
                  </div>
                )}

                {edu.thesisTitle && (
                  <div className="timeline-thesis-box">
                    <span className="thesis-label">Research / Thesis Topic:</span>
                    <p className="thesis-title">"{edu.thesisTitle}"</p>
                  </div>
                )}

                {edu.description && (
                  <p className="timeline-description">{edu.description}</p>
                )}

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="timeline-highlights-block">
                    <span className="highlights-label">Academic Highlights:</span>
                    <ul className="timeline-highlights-list">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>
                          <CheckCircle size={14} className="highlight-check" />
                          <span>{h}</span>
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

export default Education;
