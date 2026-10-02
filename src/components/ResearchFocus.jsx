import React from 'react';
import { Cpu, Eye, Activity, HeartPulse, Layers, ShieldCheck } from 'lucide-react';
import { researchAreas } from '../data';

const iconMap = {
  Cpu: Cpu,
  Eye: Eye,
  Activity: Activity,
  HeartPulse: HeartPulse,
  Layers: Layers,
  ShieldCheck: ShieldCheck
};

export const ResearchFocus = () => {
  return (
    <section id="research-focus" className="section research-focus-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Research Domains</span>
          </div>
          <h2 className="section-title">Core Research Focus Areas</h2>
          <p className="section-subtitle">
            Investigating foundational and applied problems at the intersection of embedded systems, lightweight machine learning, and physical sensory environments.
          </p>
        </div>

        <div className="research-focus-grid">
          {researchAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Cpu;
            return (
              <div key={area.id} className="card research-focus-card">
                <div className="focus-card-header">
                  <div className="focus-icon-wrapper">
                    <IconComponent size={24} className="focus-icon" />
                  </div>
                  <span className="focus-tagline">{area.tagline}</span>
                </div>

                <h3 className="focus-card-title">{area.title}</h3>
                <p className="focus-card-description">{area.description}</p>

                <div className="focus-keywords-list">
                  {area.keywords.map((kw, idx) => (
                    <span key={idx} className="tag tag-accent focus-keyword-pill">
                      {kw}
                    </span>
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

export default ResearchFocus;
