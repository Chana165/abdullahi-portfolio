import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  Building2, 
  CheckCircle,
  Download
} from 'lucide-react';
import { educationData, experienceData, profileData } from '../data';

export const Background = () => {
  const [activeView, setActiveView] = useState('all'); // 'all' | 'education' | 'experience'

  return (
    <section id="background" className="section background-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic & Professional Progression</span>
          </div>
          <h2 className="section-title">Education & Research Experience</h2>
          <p className="section-subtitle">
            Formal university degrees in Computer Science and postgraduate research in Embedded Artificial Intelligence alongside academic and technical appointments.
          </p>
        </div>

        {/* View Switcher for Compact Mobile/Desktop */}
        <div className="background-view-toggle">
          <button
            onClick={() => setActiveView('all')}
            className={`filter-tab-btn ${activeView === 'all' ? 'active' : ''}`}
          >
            Combined Timeline
          </button>
          <button
            onClick={() => setActiveView('education')}
            className={`filter-tab-btn ${activeView === 'education' ? 'active' : ''}`}
          >
            Education Only
          </button>
          <button
            onClick={() => setActiveView('experience')}
            className={`filter-tab-btn ${activeView === 'experience' ? 'active' : ''}`}
          >
            Experience Only
          </button>
        </div>

        {/* Two-Column Structured Academic Grid */}
        <div className="background-two-col-grid">
          {/* Column 1: Formal Education */}
          {(activeView === 'all' || activeView === 'education') && (
            <div id="education" className="background-col">
              <div className="col-heading-row">
                <GraduationCap size={20} className="text-cyan" />
                <h3 className="col-heading-title">Academic Qualifications</h3>
              </div>

              <div className="timeline-compact-list">
                {educationData.map((edu) => (
                  <div key={edu.id} className="card timeline-card-compact">
                    <div className="timeline-card-header">
                      <span className={`status-pill ${edu.current ? 'pill-in-progress' : 'pill-completed'}`}>
                        {edu.current ? 'In View' : 'Completed'}
                      </span>
                      <span className="timeline-period">
                        <Calendar size={12} />
                        <span>{edu.period}</span>
                      </span>
                    </div>

                    <h4 className="timeline-degree-title">{edu.degree}</h4>
                    
                    <p className="timeline-institution-text">
                      <strong>{edu.institution}</strong>
                      {edu.faculty && <span> • {edu.faculty}</span>}
                    </p>

                    {edu.grade && (
                      <div className="timeline-grade-highlight">
                        <Award size={14} className="text-emerald" />
                        <span>{edu.grade}</span>
                      </div>
                    )}

                    {edu.thesisTitle && (
                      <div className="timeline-thesis-snippet">
                        <span className="thesis-tag">Thesis:</span>
                        <p className="thesis-text">"{edu.thesisTitle}"</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Research & Professional Experience */}
          {(activeView === 'all' || activeView === 'experience') && (
            <div id="experience" className="background-col">
              <div className="col-heading-row">
                <Briefcase size={20} className="text-emerald" />
                <h3 className="col-heading-title">Appointments & Experience</h3>
              </div>

              <div className="timeline-compact-list">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="card timeline-card-compact">
                    <div className="timeline-card-header">
                      <span className={`status-pill ${exp.current ? 'pill-in-progress' : 'pill-completed'}`}>
                        {exp.current ? 'Current Role' : 'Completed'}
                      </span>
                      <span className="timeline-period">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </span>
                    </div>

                    <h4 className="timeline-degree-title">{exp.role}</h4>
                    
                    <p className="timeline-institution-text">
                      <Building2 size={13} style={{ display: 'inline', marginRight: '4px' }} />
                      <strong>{exp.organization}</strong>
                      {exp.location && <span> • {exp.location}</span>}
                    </p>

                    <p className="timeline-desc-snippet">{exp.description}</p>

                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <ul className="timeline-bullets-compact">
                        {exp.responsibilities.slice(0, 2).map((resp, i) => (
                          <li key={i}>
                            <CheckCircle size={12} className="bullet-dot" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CV Download Strip */}
        <div className="cv-download-strip">
          <p className="cv-strip-text">
            For complete chronological employment records, teaching evaluations, and full academic history:
          </p>
          <a 
            href={profileData.assets.cvPdf} 
            download={profileData.assets.cvFileName}
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
          >
            <Download size={15} />
            <span>Download Official Curriculum Vitae (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Background;
